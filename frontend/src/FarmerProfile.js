import React, { useState } from 'react';

const FarmerProfile = () => {
  const [panCard, setPanCard] = useState(null);

  const handlePanCardUpload = (event) => {
    setPanCard(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Profile updated!');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-dark-green">Farmer Profile</h1>
      <form onSubmit={handleFormSubmit} className="space-y-6 bg-dark-green">
        <div className="p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-white">Basic Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <input type="text" id="name" className="mt-1 block w-full bg-green border border-light-green rounded-lg shadow-sm focus:ring-light-green focus:border-light-green sm:text-sm" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input type="email" id="email" className="mt-1 block w-full bg-green border border-light-green rounded-lg shadow-sm focus:ring-light-green focus:border-light-green sm:text-sm" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
              <input type="tel" id="phone" className="mt-1 block w-full bg-green border border-light-green rounded-lg shadow-sm focus:ring-light-green focus:border-light-green sm:text-sm" placeholder="Enter your phone number" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-white">Address</label>
              <input type="text" id="address" className="mt-1 block w-full bg-green border border-light-green rounded-lg shadow-sm focus:ring-light-green focus:border-light-green sm:text-sm" placeholder="Enter your address" />
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-white">Upload PAN Card</h2>
          <input type="file" accept=".jpg, .jpeg, .png, .pdf" onChange={handlePanCardUpload} className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-medium file:bg-blue-50 file:text-green hover:file:bg-yellow" />
          {panCard && <p className="mt-2 text-sm text-gray-700">File selected: {panCard.name}</p>}
        </div>
        
        <button type="submit" className="bg-light-green text-white px-4 py-2 rounded-lg">Save Changes</button>
      </form>
    </div>
  );
};

export default FarmerProfile;
