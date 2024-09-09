// ShopCrop.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for crops including additional details
const cropData = [
  { id: 1, name: 'Wheat', image: 'path/to/wheat.jpg', price: '$50', amount: '100kg', time: '2 weeks', size: 'Large' },
  { id: 2, name: 'Corn', image: 'path/to/corn.jpg', price: '$40', amount: '150kg', time: '1 week', size: 'Medium' },
  { id: 3, name: 'Rice', image: 'path/to/rice.jpg', price: '$30', amount: '200kg', time: '3 weeks', size: 'Large' },
  { id: 4, name: 'Barley', image: 'path/to/barley.jpg', price: '$45', amount: '120kg', time: '2 weeks', size: 'Medium' },
  { id: 5, name: 'Oats', image: 'path/to/oats.jpg', price: '$35', amount: '180kg', time: '1.5 weeks', size: 'Large' },
  { id: 6, name: 'Soybeans', image: 'path/to/soybeans.jpg', price: '$55', amount: '90kg', time: '2.5 weeks', size: 'Small' }
];

const ShopCrop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Filter crops based on the search term
  const filteredCrops = cropData.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle "Negotiate" button click
  const handleNegotiateClick = () => {
    navigate('/negotiatebuyer'); // Redirect to /negotiatebuyer
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Crop Shop</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for crops..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Vertical list container */}
      <div className="space-y-6">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop) => (
            <div key={crop.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="flex">
                {/* Image section */}
                <img src={crop.image} alt={crop.name} className="w-1/3 h-40 object-cover" />

                {/* Details section */}
                <div className="p-4 w-2/3 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold mb-2">{crop.name}</h2>
                  <p className="text-gray-700 mb-1"><strong>Amount:</strong> {crop.amount}</p>
                  <p className="text-gray-700 mb-1"><strong>Time:</strong> {crop.time}</p>
                  <p className="text-gray-700 mb-1"><strong>Price:</strong> {crop.price}</p>
                  <p className="text-gray-700 mb-4"><strong>Size:</strong> {crop.size}</p>
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy</button>
                    <button
                      onClick={handleNegotiateClick}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Negotiate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No crops found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCrop;
