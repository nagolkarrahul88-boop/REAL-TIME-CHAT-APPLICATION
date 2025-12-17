const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

// socketId -> username
const socketToUser = {};
// username -> socketId
const userToSocket = {};

// private chat storage
// key format: userA_userB
const chats = {};

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  // USER LOGIN
  socket.on("join", (username) => {
    socketToUser[socket.id] = username;
    userToSocket[username] = socket.id;
  });

  // LOAD CHAT HISTORY
  socket.on("loadChat", ({ from, to }) => {
    const chatKey = [from, to].sort().join("_");
    socket.emit("chatHistory", chats[chatKey] || []);
  });

  // SEND PRIVATE MESSAGE
  socket.on("privateMessage", ({ from, to, text, time }) => {
    const chatKey = [from, to].sort().join("_");

    if (!chats[chatKey]) chats[chatKey] = [];

    const message = { from, to, text, time };
    chats[chatKey].push(message);

    // send to receiver
    if (userToSocket[to]) {
      io.to(userToSocket[to]).emit("privateMessage", message);
    }

    // send back to sender
    socket.emit("privateMessage", message);
  });

  // SAFE DISCONNECT
  socket.on("disconnect", () => {
    const user = socketToUser[socket.id];

    if (user) {
      delete userToSocket[user];
      console.log("Disconnected:", user);
    } else {
      console.log("Disconnected: unknown socket");
    }

    delete socketToUser[socket.id];
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
