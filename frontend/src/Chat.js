import React, { useState, useEffect, useRef } from 'react';

const Chat = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const wsRef = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Create WebSocket connection
        wsRef.current = new WebSocket('ws://localhost:5000');

        wsRef.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        // Event handler for incoming messages
        wsRef.current.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        wsRef.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Clean up WebSocket connection on component unmount
        return () => {
            wsRef.current.close();
        };
    }, []);

    useEffect(() => {
        // Scroll to the bottom of the chat
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (message.trim() === '') return;

        const chatMessage = `${user}: ${message}`;
        wsRef.current.send(chatMessage);
        setMessages((prevMessages) => [...prevMessages, chatMessage]); // Add message to local state
        setMessage(''); // Clear input
    };

    return (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 flex flex-col h-full border border-gray-300">
            <h2 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200">Chat</h2>
            <div className="flex-1 overflow-auto mb-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex flex-col space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-3 rounded-lg max-w-xs ${index % 2 === 0 ? 'bg-gray-200 self-start' : 'bg-blue-200 self-end text-right'}`}>
                            <p className="text-sm">{msg}</p>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <div className="border-t pt-2 border-gray-200">
                <textarea
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-light-green resize-none"
                    placeholder="Type your message here"
                ></textarea>
                <button
                    type="button"
                    onClick={handleSendMessage}
                    className="mt-2 bg-dark-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-light-green focus:outline-none focus:ring-2 focus:ring-light-green w-full"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
