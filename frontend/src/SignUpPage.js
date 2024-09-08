import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgimage from './images/BgLoginSign.png';

const SignUpPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission or API call here
    // You can use the selectedRole, name, email, password to submit the data
    console.log("Submitted: ", { name, email, password, selectedRole });

    if (selectedRole === 'farmer') {
      navigate('/farmer');
    } else if (selectedRole === 'buyer') {
      navigate('/buyer');
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-green"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-8">Create a New Account</h1>
      <form className="w-full max-w-sm bg-opacity-30 border-white border" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm text-white font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow bg-green appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm text-white font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow bg-green appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm text-white font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow bg-green appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label className="block text-gray-700 text-sm text-white font-bold mb-2" htmlFor="role">
            I'm a...
          </label>
          <div className='flex flex-row justify-between gap-5'>
            <button
              type="button"
              className={`py-2 px-12 rounded focus:outline-none focus:shadow-outline border-white border border-opacity-40 ${selectedRole === 'farmer' ? 'bg-dark-green text-white' : 'bg-light-green text-dark-green'}`}
              onClick={() => handleRoleClick('farmer')}
            >
              Farmer
            </button>
            <button
              type="button"
              className={`py-2 px-12 rounded focus:outline-none focus:shadow-outline border-white border border-opacity-40 ${selectedRole === 'buyer' ? 'bg-dark-green text-white' : 'bg-light-green text-dark-green'}`}
              onClick={() => handleRoleClick('buyer')}
            >
              Buyer
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="bg-white hover:bg-light-green text-dark-green font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
