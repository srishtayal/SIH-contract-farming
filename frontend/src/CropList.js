import React, { useState } from 'react';

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
    { name: "AgriSafe Insurance", price: "$50/month" },
    { name: "CropGuard Insurance", price: "$75/month" },
    { name: "FarmProtect Insurance", price: "$100/month" },
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
    insurance: 'AgriSafe Insurance',
    photo: 'https://via.placeholder.com/150?text=Wheat',
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Crop List</h2>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Crop</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="insurance" className="block text-sm font-medium text-gray-700">Insurance</label>
            <input
              type="text"
              id="insurance"
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Crop</button>
      </form>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Crop Details</h3>
        <ul>
          {/* Static Crop for demonstration */}
          <li className="py-4 border-b border-gray-200">
            {staticCrop.photo && (
              <img
                src={staticCrop.photo}
                alt={staticCrop.name}
                className="w-32 h-32 object-cover mb-2 rounded-lg shadow-md"
              />
            )}
            <p><strong>Name:</strong> {staticCrop.name}</p>
            <p><strong>Amount:</strong> {staticCrop.amount}</p>
            <p><strong>Time:</strong> {staticCrop.time}</p>
            <p><strong>Price:</strong> {staticCrop.price}</p>
            <p><strong>Size:</strong> {staticCrop.size}</p>
            <p><strong>Insurance:</strong> {staticCrop.insurance}</p>
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Insurance Companies</h3>
        <ul>
          {insuranceCompanies.map((company, index) => (
            <li key={index} className="py-2 border-b border-gray-200">
              <p><strong>{company.name}:</strong> {company.price}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-blue-500 font-semibold">
          Get insurance from us!
        </p>
      </div>
    </div>
  );
};

export default CropList;
