import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for lands
const landData = [
  {
    id: 1,
    location: 'Farmville',
    priceToRent: 'Rs. 500/month',
    duration: '6 months',
    cropsGrown: 'Wheat, Corn',
    soilCard: 'Loamy Soil',
  },
  {
    id: 2,
    location: 'Greenfield',
    priceToRent: 'Rs. 450/month',
    duration: '12 months',
    cropsGrown: 'Rice, Barley',
    soilCard: 'Sandy Soil',
  },
  {
    id: 3,
    location: 'Harvest City',
    priceToRent: 'Rs. 600/month',
    duration: '3 months',
    cropsGrown: 'Oats, Soybeans',
    soilCard: 'Clay Soil',
  },
  {
    id: 4,
    location: 'Farmville',
    priceToRent: 'Rs. 500/month',
    duration: '6 months',
    cropsGrown: 'Wheat, Corn',
    soilCard: 'Loamy Soil',
  },
  {
    id: 5,
    location: 'Greenfield',
    priceToRent: 'Rs. 450/month',
    duration: '12 months',
    cropsGrown: 'Rice, Barley',
    soilCard: 'Sandy Soil',
  },
  {
    id: 6,
    location: 'Harvest City',
    priceToRent: 'Rs. 600/month',
    duration: '3 months',
    cropsGrown: 'Oats, Soybeans',
    soilCard: 'Clay Soil',
  },
];

const RentLand = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "Negotiate" button click
  const handleNegotiateClick = () => {
    navigate('/negotiatebuyer'); // Redirect to /negotiatebuyer
  };

  // Function to handle "Rent" button click
  const handleRentClick = (location) => {
    alert(`You rented land at ${location}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-dark-green">Rent Land</h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {landData.length > 0 ? (
          landData.map((land) => (
            <div key={land.id} className="border border-light-green rounded-lg overflow-hidden shadow-md">
              <div className="p-4 flex flex-col space-y-4 bg-light-green text-dark-green">
                <h2 className="text-xl font-semibold">{land.location}</h2>
                <p className="text-gray-700 text-left"><strong>Price to Rent:</strong> {land.priceToRent}</p>
                <p className="text-gray-700 text-left"><strong>Duration:</strong> {land.duration}</p>
                <p className="text-gray-700 text-left"><strong>Crops Grown:</strong> {land.cropsGrown}</p>
                <p className="text-gray-700 text-left"><strong>Soil Card:</strong> {land.soilCard}</p>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleRentClick(land.location)}
                    className="bg-yellow text-dark-green border border-dark-green px-4 py-2 rounded-3xl hover:bg-yellow-light"
                  >
                    Rent
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
          ))
        ) : (
          <p className="text-center text-gray-500">No lands available.</p>
        )}
      </div>
    </div>
  );
};

export default RentLand;
