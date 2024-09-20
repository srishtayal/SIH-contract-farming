import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket']
});

const Chat = ({ user, receiver }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    socket.emit('register', user);
    socket.on('chat message', (msg) => {
      console.log('Received message:', msg);
      if (msg.receiver === user || msg.user === user) {
        setMessages((prevMessages) => [...prevMessages, msg]);
      }
    });
    socket.on('connect_error', (err) => {
      setError(err.message);
    });
    return () => {
      socket.off('chat message');
      socket.off('connect_error');
    };
  }, [user]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { user, receiver, content: message };
      console.log('Sending message:', newMessage);
      try {
        socket.emit('chat message', newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage('');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col flex-grow">
      <h1>Chat</h1>
        {error && (
          <div className="text-red-500 mb-2">{error}</div>
        )}
        <div className="flex-1 overflow-auto">
          <ul className="space-y-2">
            {messages.map((msg, index) => (
              <li key={index} className={msg.user === user ? 'text-right' : 'text-left'}>
                <div className={`p-2 rounded-lg ${msg.user === user ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  <strong>{msg.user}:</strong> {msg.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
