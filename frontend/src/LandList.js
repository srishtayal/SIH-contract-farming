import React, { useState } from 'react';
import landlist from './images/landlist.jpg'

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
    location: 'Greenfield, Haryana',
    priceToRent: 'Rs. 20000/month',
    duration: '1 year',
    cropsGrown: 'Corn, Wheat',
    soilCard: landlist,
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-dark-green">Land List</h2>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-dark-green">Add New Land</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-green">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="priceToRent" className="block text-sm font-medium text-green">Price to Rent</label>
            <input
              type="text"
              id="priceToRent"
              name="priceToRent"
              value={formData.priceToRent}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-green">Duration</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="cropsGrown" className="block text-sm font-medium text-green">Crops Grown (Last 2 Seasons)</label>
            <input
              type="text"
              id="cropsGrown"
              name="cropsGrown"
              value={formData.cropsGrown}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div className='col-span-2'>
            <label htmlFor="soilCard" className="block text-sm font-medium text-green">Soil Card</label>
            <input
              type="file"
              id="soilCard"
              name="soilCard"
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md"
              required
            />
          </div>
        </div>
        <button type="submit" className="bg-yellow text-green border border-green px-4 py-2 rounded-3xl">Add Land</button>
      </form>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4 text-dark-green">Land Details</h3>
        <div className="flex items-start space-x-4">
          {/* Land Image */}
          {staticLand.soilCard && (
            <img
              src={staticLand.soilCard}
              alt="Soil Card"
              className="w-64 h-48 object-cover rounded-lg shadow-md"
            />
          )}

          {/* Land Information */}
          <div className="flex-start">
            <div className="text-left items-left">
              <p className="text-lg font-semibold mb-2 text-left text-dark-green"><strong>Location:</strong> {staticLand.location}</p>
              <p className="text-base mb-1 text-left text-green"><strong>Price to Rent:</strong> {staticLand.priceToRent}</p>
              <p className="text-base mb-1 text-left text-green"><strong>Duration:</strong> {staticLand.duration}</p>
              <p className="text-base mb-1 text-left text-green"><strong>Crops Grown (Last 2 Seasons):</strong> {staticLand.cropsGrown}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandList;
