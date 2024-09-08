import React, { useState } from 'react';

const TenantList = () => {
  const [tenants, setTenants] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    maritalStatus: '',
    additionalDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTenant = { ...formData, id: tenants.length + 1 };
    setTenants([...tenants, newTenant]);
    setFormData({
      name: '',
      age: '',
      gender: '',
      maritalStatus: '',
      additionalDetails: '',
    });
  };

  // Static Tenant for display
  const staticTenant = {
    name: 'John Doe',
    age: '30',
    gender: 'Male',
    maritalStatus: 'Married',
    additionalDetails: 'Experienced in farm management and crop cultivation.',
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tenant List</h2>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Tenant</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
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
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Marital Status</label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700">Additional Details</label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              rows="4"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Tenant</button>
      </form>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Tenant Details</h3>
        <ul>
          {/* Static Tenant for demonstration */}
          <li className="py-4 border-b border-gray-200">
            <p><strong>Name:</strong> {staticTenant.name}</p>
            <p><strong>Age:</strong> {staticTenant.age}</p>
            <p><strong>Gender:</strong> {staticTenant.gender}</p>
            <p><strong>Marital Status:</strong> {staticTenant.maritalStatus}</p>
            <p><strong>Additional Details:</strong> {staticTenant.additionalDetails}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TenantList;
