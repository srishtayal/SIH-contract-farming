import express from 'express';
import { createServer } from 'http';
import socketIo from 'socket.io';
import cors from 'cors';

const app = express();
const server = createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Client's origin
    methods: ["GET", "POST"]
  }
});

// Store connected users
const users = {};

io.on('connection', (socket) => {
  console.log('User connected', socket.id);

  // Handle user registration
  socket.on('register', (user) => {
    users[user] = socket.id;
    console.log(`User ${user} registered with ID ${socket.id}`);
  });

  // Handle incoming messages
  socket.on('chat message', (msg) => {
    console.log('Received message:', msg);
    // Send the message to the intended recipient
    if (users[msg.receiver]) {
      io.to(users[msg.receiver]).emit('chat message', msg);
    } else {
      console.log(`User ${msg.receiver} is not connected`);
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
    // Optionally remove the user from the list
    // For simplicity, assuming the user will reconnect later
  });
});

server.listen(5000, () => console.log('Server running on port 5000'));
