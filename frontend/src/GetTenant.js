import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for tenants
const tenantData = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    maritalStatus: 'Single',
    additionalDetails: 'Experienced in organic farming. Looking for a long-term lease.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    maritalStatus: 'Married',
    additionalDetails: 'Expert in crop rotation and soil management. Prefers short-term lease.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    age: 35,
    gender: 'Male',
    maritalStatus: 'Divorced',
    additionalDetails: 'Interested in seasonal crops. Flexible on lease duration.',
  },
  // Add more tenant data as needed
];

const GetTenant = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "Negotiate" button click
  const handleNegotiateClick = () => {
    navigate('/negotiatebuyer'); // Redirect to /negotiatebuyer
  };

  // Function to handle "Rent" button click
  const handleRentClick = (name) => {
    alert(`You selected ${name} for rent.`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-dark-green">Get Tenant</h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenantData.length > 0 ? (
          tenantData.map((tenant) => (
            <div key={tenant.id} className="border border-light-green rounded-lg overflow-hidden shadow-md bg-light-green text-dark-green">
              <div className="p-4 flex flex-col space-y-4">
                <h2 className="text-xl font-semibold">{tenant.name}</h2>
                <p className="text-gray-700 text-left"><strong>Age:</strong> {tenant.age}</p>
                <p className="text-gray-700 text-left"><strong>Gender:</strong> {tenant.gender}</p>
                <p className="text-gray-700 text-left"><strong>Marital Status:</strong> {tenant.maritalStatus}</p>
                <p className="text-gray-700 text-left"><strong>Additional Details:</strong> {tenant.additionalDetails}</p>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleRentClick(tenant.name)}
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
          <p className="text-center text-gray-500">No tenants available.</p>
        )}
      </div>
    </div>
  );
};

export default GetTenant;
