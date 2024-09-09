import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contracts from './Contracts'; // Ensure the path is correct
import Chat from './Chat'; // Ensure the path is correct

const NegotiateFarmer = () => {
    const [receiver, setReceiver] = useState('Buyer'); 

    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="fixed top-0 left-0 h-full w-64 bg-dark-green text-white flex flex-col">
                <div className="p-4 bg-dark-green text-3xl font-bold">Khetify</div>
                <nav className="flex flex-col mt-4">
                    <Link to="/farmer" className="px-4 py-2 text-gray-200 hover:bg-green">Home</Link>
                    <Link to="/negotiate" className="px-4 py-2 text-gray-200 hover:bg-green">Negotiate</Link>
                    <Link to="/farmerprofile" className="px-4 py-2 text-gray-200 hover:bg-green">Settings</Link>
                </nav>
            </aside>

            <main className="ml-64 flex-1 p-4 flex">
                {/* Contracts Section */}
                <div className="w-2/3 p-4 bg-white rounded-lg shadow-md mr-4">
                    <Contracts /> {/* Embed the Contracts component */}
                </div>

                {/* Chat Section */}
                <div className="w-1/3 p-4">
                    <Chat user="Farmer" receiver={receiver} />
                </div>
            </main>
        </div>
    );
};

export default NegotiateFarmer;
