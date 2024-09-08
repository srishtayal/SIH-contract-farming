import React from "react";
import { Link } from "react-router-dom";
import cropPic from './images/cropImage.jpg';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-dark-green text-white flex flex-col">
        <div className="p-4 bg-dark-green text-3xl font-bold">Khetify</div>
        <nav className="flex flex-col mt-4">
          <a href="#" className="px-4 py-2 text-gray-200 hover:bg-green">Home</a>
          <a href="#" className="px-4 py-2 text-gray-200 hover:bg-green">Analytics</a>
          <a href="#" className="px-4 py-2 text-gray-200 hover:bg-green">Settings</a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-col ml-64 p-6 bg-gray-100 flex-grow">
        {/* Top navbar */}
        <header className="flex justify-between items-center px-4 py-2">
          <div className="text-2xl font-bold text-dark-green">Welcome to Buyer Dashboard</div>
          <div className="flex items-center space-x-4">
            <Link to="/farmerprofile">
              <button className="px-4 py-2 bg-yellow text-black border border-black rounded-full">Profile</button>
            </Link>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6 flex-grow bg-gray-100">

          {/* Card Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Link to="/shop-crops">
              <div className="rounded-lg shadow-md h-64 flex flex-col">
                <div className="bg-cover bg-center h-3/4 rounded-t-lg"
                style={{ backgroundImage: `url(${cropPic})` }}/>
                  
                <div className="bg-green-500 text-gray-600 p-6 flex items-center justify-center h-1/4 rounded-b-lg hover:text-light-green">
      <h3 className="text-xl font-semibold">Shop for Crops</h3>
    </div>
              </div>
            </Link>

            <Link to="/get-land">
              <div className="rounded-lg shadow-md h-64 flex flex-col">
                <div className="bg-cover bg-center h-3/4 rounded-t-lg"
                style={{ backgroundImage: `url(${cropPic})` }}/>
                  
                <div className="bg-green-500 text-gray-600 p-6 flex items-center justify-center h-1/4 rounded-b-lg hover:text-light-green">
      <h3 className="text-xl font-semibold">Rent a Land</h3>
    </div>
              </div>
            </Link>

            <Link to="/get-tenant">
              <div className="rounded-lg shadow-md h-64 flex flex-col">
                <div className="bg-cover bg-center h-3/4 rounded-t-lg"
                style={{ backgroundImage: `url(${cropPic})` }}/>
                  
                <div className="bg-green-500 text-gray-600 p-6 flex items-center justify-center h-1/4 rounded-b-lg hover:text-light-green">
      <h3 className="text-xl font-semibold">Get a Tenant</h3>
    </div>
              </div>
            </Link>

            
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md h-64">
              <h3 className="text-xl font-semibold mb-4">Contracts</h3>
              <p className="text-gray-600">Details about contracts...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Analytics</h3>
              <p className="text-gray-600">Overview of analytics...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ratings</h3>
              <p className="text-gray-600">ratings...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
