import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgimage from './images/BgLoginSign.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/Fa')
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green"
    style={{backgroundImage: `url(${bgimage})`,backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundAttachment: 'fixed'}}>
      <h1 className="text-4xl font-bold text-white mb-8">Login to Your Account</h1>
      <form className="w-full max-w-sm bg-opacity-30 border-white border">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm text-white font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow bg-green appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold text-white mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow bg-green appearance-none border rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className='flex flex-col items-center mb-2'>
          <p className='block text-gray-700 text-m text-white font-bold mb-1'>Don't have an account?</p>
          <Link to='/signup' className='block text-sm text-dark-green hover:text-light-green'>Sign Up</Link>'
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-white hover:bg-light-green text-dark-green font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-dark-green hover:text-light-green"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
