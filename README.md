"# REAL-TIME-CHAT-APPLICATION" 

COMPANY:CODTECH IT SOLUTION

NAME:RAHUL NAGOLKAR

INTERN ID:CT04DR2661

DOMAIN:Frontend Web Development

DURATION:4 weeks

MENTOR:NEELA SANTOSH


#Project Description


The CODTECH Messenger is a real‑time private messaging web application developed to simulate the core functionality of modern chat platforms such as WhatsApp or Messenger. This project is designed using a combination of front‑end and back‑end technologies, with a strong focus on real‑time communication, user interaction, and responsive UI design. The main objective of this project is to understand how real‑time messaging systems work internally and how clients and servers communicate instantly using WebSockets.
This application allows multiple predefined users to log in, select a specific user, and exchange private one‑to‑one messages in real time. Unlike group chat systems, this project ensures that messages remain private between two selected users only, which reflects real‑world messaging behavior.
Tools and Technologies Used
The project is built using the following tools and technologies:
HTML5: Used to structure the application layout and provide the root container for rendering the React application.
CSS3: Used extensively to design a modern, WhatsApp‑like user interface, including sidebar layout, chat bubbles, login screen, animations, hover effects, and responsive design for mobile devices.
React.js (via CDN): Used to create a component‑based front‑end architecture. React state and hooks (useState, useEffect, useRef) are used to manage user login, selected chats, messages, and UI updates efficiently.
Node.js: Used as the runtime environment for executing the back‑end server.
Express.js: Used to create the HTTP server and manage middleware such as CORS.
Socket.IO: Used to enable real‑time, bi‑directional communication between clients and the server.
CORS Middleware: Ensures secure communication between the front‑end and back‑end during development.
package.json & node_modules: Used to manage project dependencies and maintain consistency across development environments.
Working of the Application
When the application is launched, the user is first presented with a modern login interface. The user enters their name and proceeds to the chat interface. Once logged in, the client establishes a Socket.IO connection with the server and emits a join event, allowing the server to map the user with a unique socket ID.
On the left side of the interface, a sidebar displays available users, excluding the logged‑in user. When a user selects a contact, the application requests the chat history for that specific user pair. The server responds by sending stored messages related only to those two users, ensuring complete privacy.
Messages are sent using a private messaging mechanism, where each message contains sender name, receiver name, message text, and timestamp. The server stores these messages using a unique key based on both usernames. Messages are instantly delivered to both sender and receiver using Socket.IO events, without page refresh.
The chat interface automatically scrolls to the latest message, providing a smooth user experience. Messages sent by the logged‑in user are visually separated from received messages using different styles, making conversations easy to follow.
The application is fully mobile responsive. On smaller screens, the sidebar and chat window dynamically hide and show to improve usability. A back button allows users to return to the contact list, similar to real messaging apps.
Back‑End Logic and Message Handling
The server maintains mappings between users and socket IDs to ensure messages are delivered to the correct recipient. Chat history is stored in memory using structured keys, making retrieval efficient and secure. On user disconnection, the server safely removes the user from active mappings to prevent errors and memory leaks.
The architecture cleanly separates concerns between client‑side UI rendering and server‑side communication logic, demonstrating good software design principles.
Usefulness and Real‑World Applications
The CODTECH Messenger project has strong real‑world relevance and can be used or extended for:
Private chat systems in internal company tools
Student collaboration platforms
Customer support live chat applications
Learning real‑time web technologies
Internship and portfolio demonstration projects
This project provides hands‑on experience with real‑time communication, which is a critical requirement in modern web applications.
Conclusion
The CODTECH Messenger project successfully demonstrates the implementation of a real‑time private messaging system using React, Node.js, Express, and Socket.IO. It reflects practical understanding of client‑server communication, state management, responsive UI design, and real‑time data flow. This project is highly suitable for internship evaluation, academic submissions, and showcasing full‑stack development skills in a professional portfolio.



#OUTPUT

<img width="1365" height="659" alt="Image" src="https://github.com/user-attachments/assets/46800871-e7f8-4344-84b9-56a44bae0693" />
<img width="1365" height="659" alt="Image" src="https://github.com/user-attachments/assets/2b2b034d-cdd6-4efd-8860-941076256a0a" />
<img width="1365" height="658" alt="Image" src="https://github.com/user-attachments/assets/9ece6b96-1a7e-4172-9a82-1382ad9054d8" />
<img width="1365" height="658" alt="Image" src="https://github.com/user-attachments/assets/a4348098-959c-43fe-a702-68d011b29335" />
