import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wheat from './images/wheat.jpg'; 
import corn from './images/crop.jpg'
import rice from './images/rice.jpg'
import barley from './images/Barley.webp'
import oats from './images/oats.webp'
import soyabean from './images/soyabean.webp'

// Sample data for crops including additional details
const cropData = [
  { id: 1, name: 'Wheat', image: wheat, price: 'Rs. 100', amount: '100kg', time: '2 weeks', size: 'Large' },
  { id: 2, name: 'Corn', image: corn, price: '$40', amount: '150kg', time: '1 week', size: 'Medium' },
  { id: 3, name: 'Rice', image: rice, price: '$30', amount: '200kg', time: '3 weeks', size: 'Large' },
  { id: 4, name: 'Barley', image: barley, price: '$45', amount: '120kg', time: '2 weeks', size: 'Medium' },
  { id: 5, name: 'Oats', image: oats, price: '$35', amount: '180kg', time: '1.5 weeks', size: 'Large' },
  { id: 6, name: 'Soybeans', image: soyabean, price: '$55', amount: '90kg', time: '2.5 weeks', size: 'Small' }
];

const ShopCrop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Filter crops based on the search term
  const filteredCrops = cropData.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle "Negotiate" button click
  const handleNegotiateClick = () => {
    navigate('/negotiatebuyer');
  };

  // Function to handle "Buy" button click
  const handleBuyClick = (cropName) => {
    alert(`You bought ${cropName}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-dark-green">Crop Shop</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for crops..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-light-green rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-yellow"
      />

      {/* Vertical list container */}
      <div className="space-y-6">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop) => (
            <div key={crop.id} className="border border-light-green rounded-lg overflow-hidden shadow-md">
              <div className="flex">
                {/* Image section */}
                <div className="flex-shrink-0 w-1/3">
                  <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
                </div>

                {/* Details section */}
                <div className="p-4 w-2/3 flex flex-col justify-start bg-light-green text-dark-green">
                  <h2 className="text-xl font-semibold mb-2">{crop.name}</h2>
                  <p className="text-gray-700 mb-1 text-left"><strong>Amount:</strong> {crop.amount}</p>
                  <p className="text-gray-700 mb-1 text-left"><strong>Time:</strong> {crop.time}</p>
                  <p className="text-gray-700 mb-1 text-left"><strong>Price:</strong> {crop.price}</p>
                  <p className="text-gray-700 mb-4 text-left"><strong>Size:</strong> {crop.size}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleBuyClick(crop.name)}
                      className="bg-yellow text-dark-green border border-dark-green px-4 py-2 rounded-3xl hover:bg-yellow-light"
                    >
                      Buy
                    </button>
                    <button
                      onClick={handleNegotiateClick}
                      className="bg-green text-white border border-green px-4 py-2 rounded-3xl hover:bg-green-dark"
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
