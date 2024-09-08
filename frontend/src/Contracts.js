import React from 'react';

// Sample data for contracts
const contracts = [
    { id: 1, title: "Contract A", status: "Ongoing", date: "2024-09-01" },
    { id: 2, title: "Contract B", status: "Done", date: "2024-08-15" },
    { id: 3, title: "Contract C", status: "Ongoing", date: "2024-09-10" },
    { id: 4, title: "Contract D", status: "Done", date: "2024-07-20" }
];

const Contracts = () => {
    return (
        <div className="h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4">Contracts</h2>
            <div className="flex-1 overflow-auto">
                <ul className="space-y-4">
                    {contracts.map((contract) => (
                        <li key={contract.id} className={`p-4 rounded-lg shadow-md ${contract.status === 'Ongoing' ? 'bg-yellow-100' : 'bg-green-100'}`}>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">{contract.title}</span>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${contract.status === 'Ongoing' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                                    {contract.status}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">Date: {new Date(contract.date).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Contracts;
