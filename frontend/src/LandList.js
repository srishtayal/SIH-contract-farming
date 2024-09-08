import React, { useState } from 'react';

const LandList = () => {
  const [lands, setLands] = useState([]);
  const [formData, setFormData] = useState({
    location: '',
    priceToRent: '',
    duration: '',
    cropsGrown: '',
    soilCard: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLand = { ...formData, id: lands.length + 1, soilCard: URL.createObjectURL(formData.soilCard) };
    setLands([...lands, newLand]);
    setFormData({
      location: '',
      priceToRent: '',
      duration: '',
      cropsGrown: '',
      soilCard: null,
    });
  };

  // Static Land for display
  const staticLand = {
    location: 'Greenfield, Texas',
    priceToRent: '$2000/year',
    duration: '1 year',
    cropsGrown: 'Corn, Wheat',
    soilCard: 'https://via.placeholder.com/150?text=Soil+Card',
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Land List</h2>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Land</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="priceToRent" className="block text-sm font-medium text-gray-700">Price to Rent</label>
            <input
              type="text"
              id="priceToRent"
              name="priceToRent"
              value={formData.priceToRent}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="cropsGrown" className="block text-sm font-medium text-gray-700">Crops Grown (Last 2 Seasons)</label>
            <input
              type="text"
              id="cropsGrown"
              name="cropsGrown"
              value={formData.cropsGrown}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="soilCard" className="block text-sm font-medium text-gray-700">Soil Card</label>
            <input
              type="file"
              id="soilCard"
              name="soilCard"
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Land</button>
      </form>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Land Details</h3>
        <ul>
          {/* Static Land for demonstration */}
          <li className="py-4 border-b border-gray-200">
            <p><strong>Location:</strong> {staticLand.location}</p>
            <p><strong>Price to Rent:</strong> {staticLand.priceToRent}</p>
            <p><strong>Duration:</strong> {staticLand.duration}</p>
            <p><strong>Crops Grown (Last 2 Seasons):</strong> {staticLand.cropsGrown}</p>
            {staticLand.soilCard && (
              <div className="mt-2">
                <img
                  src={staticLand.soilCard}
                  alt="Soil Card"
                  className="w-32 h-32 object-cover mb-2 rounded-lg shadow-md"
                />
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandList;
