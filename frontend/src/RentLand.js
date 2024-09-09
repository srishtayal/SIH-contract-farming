// RentLand.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for lands
const landData = [
  {
    id: 1,
    location: 'Farmville',
    priceToRent: '$500/month',
    duration: '6 months',
    cropsGrown: 'Wheat, Corn',
    soilCard: 'Loamy Soil',
  },
  {
    id: 2,
    location: 'Greenfield',
    priceToRent: '$450/month',
    duration: '12 months',
    cropsGrown: 'Rice, Barley',
    soilCard: 'Sandy Soil',
  },
  {
    id: 3,
    location: 'Harvest City',
    priceToRent: '$600/month',
    duration: '3 months',
    cropsGrown: 'Oats, Soybeans',
    soilCard: 'Clay Soil',
  },
  // Add more land data as needed
];

const RentLand = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "Negotiate" button click
  const handleNegotiateClick = () => {
    navigate('/negotiatebuyer'); // Redirect to /negotiatebuyer
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Rent Land</h1>

      {/* Vertical list container */}
      <div className="space-y-6">
        {landData.length > 0 ? (
          landData.map((land) => (
            <div key={land.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="p-4 flex flex-col space-y-4">
                <h2 className="text-xl font-semibold">{land.location}</h2>
                <p className="text-gray-700"><strong>Price to Rent:</strong> {land.priceToRent}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {land.duration}</p>
                <p className="text-gray-700"><strong>Crops Grown (Last 2 Seasons):</strong> {land.cropsGrown}</p>
                <p className="text-gray-700"><strong>Soil Card:</strong> {land.soilCard}</p>
                <div className="flex space-x-2 mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Rent</button>
                  <button
                    onClick={handleNegotiateClick}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Negotiate
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No lands available.</p>
        )}
      </div>
    </div>
  );
};

export default RentLand;
