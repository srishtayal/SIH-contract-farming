import React, { useState } from 'react';
import wheat from './images/wheat.jpg'

const CropList = () => {
  const [crops, setCrops] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    time: '',
    price: '',
    size: '',
    insurance: '',
    photo: null,
  });

  const [insuranceCompanies] = useState([
    { name: "Reliance General Insurance", price: "Rs. 500/month" },
    { name: "National Insurance Company", price: "Rs. 750/month" },
    { name: "Agriculture Insurance Company of India Ltd.", price: "Rs. 600/month" },
  ]);

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
    const newCrop = { ...formData, id: crops.length + 1, photo: URL.createObjectURL(formData.photo) };
    setCrops([...crops, newCrop]);
    setFormData({
      name: '',
      amount: '',
      time: '',
      price: '',
      size: '',
      insurance: '',
      photo: null,
    });
  };

  // Static Crop for display
  const staticCrop = {
    name: 'Wheat',
    amount: '1000 kg',
    time: '30 days',
    price: '$500',
    size: '5 acres',
    insurance: 'Reliance General Insurance',
    photo: wheat,
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-dark-green">Crop List</h2>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-dark-green">Add New Crop</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-green">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-green">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-green">Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-green">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-green">Size</label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="insurance" className="block text-sm font-medium text-green">Insurance</label>
            <input
              type="text"
              id="insurance"
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md shadow-sm"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="photo" className="block text-sm font-medium text-green">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleChange}
              className="mt-1 block w-full border border-light-green rounded-md"
              required
            />
          </div>
        </div>
        <button type="submit" className="bg-yellow text-green border border-green px-4 py-2 rounded-3xl">Add Crop</button>
      </form>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4 text-dark-green">Insurance Companies</h3>
        <p className="mt-4 text-center text-green font-semibold text-xl">
          Get insurance from us at a cheaper price!
        </p>
        <ul>
          {insuranceCompanies.map((company, index) => (
            <li key={index} className="py-2 border-b border-gray-200 text-light-green">
              <p><strong>{company.name}:</strong> {company.price}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4 text-dark-green">Crop Details</h3>
        <div className="flex items-start space-x-4">
          {/* Crop Image */}
          {staticCrop.photo && (
            <img
              src={staticCrop.photo}
              alt={staticCrop.name}
              className="w-64 h-48 object-cover rounded-lg shadow-md"
            />
          )}

          {/* Crop Information */}
          <div className="flex-start">
            <div className="text-left items-left">
              <p className="text-lg font-semibold mb-2 text-left text-dark-green"><strong>Name:</strong> {staticCrop.name}</p>
              <p className="text-base mb-1 text-left text-green"><strong>Amount:</strong> {staticCrop.amount}</p>
              <p className="text-base mb-1 text-left text-green"><strong>Time:</strong> {staticCrop.time}</p>
              <p className="text-base mb-1 text-left text-green"><strong>Price:</strong> {staticCrop.price}</p>
              <p className="text-base mb-1 text-left text-green"><strong>Size:</strong> {staticCrop.size}</p>
              <p className="text-base mb-1 text-left text-green"><strong>Insurance:</strong> {staticCrop.insurance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropList;
