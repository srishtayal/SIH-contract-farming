import React from 'react';
import { Link } from 'react-router-dom';

const contracts = [
    { id: 1, title: "Contract A", status: "Ongoing" },
    { id: 2, title: "Contract B", status: "Done" },
    { id: 3, title: "Contract C", status: "Ongoing" },
    { id: 4, title: "Contract D", status: "Done" }
];

function NegotiateFarmer() {
    return (
        <div className='flex h-screen bg-gray-100'>
            <aside className="fixed top-0 left-0 h-full w-64 bg-dark-green text-white flex flex-col">
                <div className="p-4 bg-dark-green text-3xl font-bold">Khetify</div>
                <nav className="flex flex-col mt-4">
                    <Link to="/farmer" className="px-4 py-2 text-gray-200 hover:bg-green">Home</Link>
                    <Link to="/analytics" className="px-4 py-2 text-gray-200 hover:bg-green">Analytics</Link>
                    <Link to="/negotiate" className="px-4 py-2 text-gray-200 hover:bg-green">Negotiate</Link>
                    <Link to="/settings" className="px-4 py-2 text-gray-200 hover:bg-green">Settings</Link>
                </nav>
            </aside>

            <main className="ml-64 p-4 flex-1">
                {/* Top Header */}
                <header className="flex justify-between items-center px-4 py-2 bg-gray-200">
                    <div className="text-2xl font-bold text-dark-green">Negotiate Contracts</div>
                    <div className="flex items-center space-x-4">
                        <Link to="/farmerprofile">
                            <button className="px-4 py-2 bg-yellow text-black border border-black rounded-full">Profile</button>
                        </Link>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex mt-6 space-x-6">
                    {/* Contracts List */}
                    <div className="flex-1 bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-4">Contracts List</h2>
                        <ul className="divide-y divide-gray-200">
                            {contracts.map(contract => (
                                <li key={contract.id} className={`py-4 ${contract.status === 'Ongoing' ? 'bg-yellow-100' : 'bg-green-100'}`}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold">{contract.title}</span>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${contract.status === 'Ongoing' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                                            {contract.status}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Chat Section */}
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
    <h2 className="text-xl font-bold mb-4">Chat</h2>
    <div className="flex-1 overflow-auto mb-4">
        {/* Chat messages */}
        <div className="flex flex-col space-y-4">
            <div className="bg-gray-200 p-2 rounded-lg max-w-xs">
                Hello! How can I assist you today?
            </div>
            <div className="bg-blue-200 p-2 rounded-lg text-right max-w-xs self-end">
                I want to discuss the terms of my contract.
            </div>
            {/* More chat messages can be added here */}
        </div>
    </div>
    <div>
        <textarea
            rows="3"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-light-green"
            placeholder="Type your message here"
        ></textarea>
        <button
            type="submit"
            className="mt-2 bg-dark-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-light-green focus:outline-none focus:ring-2 focus:ring-light-green w-full"
        >
            Send
        </button>
    </div>
</div>

                </div>
            </main>
        </div>
    );
}

export default NegotiateFarmer;
