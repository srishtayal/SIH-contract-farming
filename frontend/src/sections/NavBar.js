import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () =>  {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Khetify
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-dark-green hover:text-dark-green px-3 py-2 rounded-md text-sm font-bold hover:no-underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-dark-green hover:text-dark-green px-3 py-2 rounded-md text-sm font-bold hover:no-underline"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-dark-green hover:text-dark-green px-3 py-2 rounded-md text-sm font-bold hover:no-underline"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="text-dark-green hover:text-dark-green px-3 py-2 rounded-md text-sm font-bold hover:no-underline"
            >
              FAQs
            </Link>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleLoginClick}
              className="px-4 py-2 bg-yellow text-black border border-black rounded-full"
            >
              Login
            </button>
            <button
              onClick={handleSignUpClick}
              className="px-4 py-2 bg-white text-dark-green border border-black rounded-full"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;