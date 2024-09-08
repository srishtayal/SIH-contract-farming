import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../images/heroImage.webp';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('./signup');
  };

  return (
    <div className="p-10 text-center">
      {/* Text Content */}
      <h1 className="text-dark-green m-1">Connecting Farmers to Reliable Markets:</h1>
      <h1 className="text-light-green">Secure Your Future with Assured Contracts</h1>
      <p className="text-dark-green m-1">
        Join our platform to secure sustainable agreements, unlock new opportunities, and ensure
        stable market access.
      </p>
      <p className="text-dark-green">
        Connecting farmers and buyers with transparent contracts for mutual growth.
      </p>

      {/* Button */}
      <div className="mt-4">
        <button
          onClick={handleGetStarted}
          className="px-4 py-2 bg-yellow text-black border border-black rounded-full"
        >
          Get Started
        </button>
      </div>

      {/* Background Image Below Button */}
      <div className="mt-6 h-96 bg-center rounded-lg bg-contain bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
        {/* Optional overlay or additional content here */}
      </div>
    </div>
  );
};

export default Hero;
