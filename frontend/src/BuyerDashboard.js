import React from "react";
import { Link } from "react-router-dom";
import cropPic from './images/cropImage.jpg';
import landPic from './images/land-list.png';
import farmerPic from './images/farmer.jpg';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const BuyerDashboard = () => {
  const rating = 4.5;
  const reviews = 200;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  const contracts = [
    { id: 1, title: "Contract A", status: "Ongoing" },
    { id: 2, title: "Contract B", status: "Done" },
    { id: 3, title: "Contract C", status: "Ongoing" },
    { id: 4, title: "Contract D", status: "Done" }
  ];

  const analyticsData = [
    { name: 'Jan', value: 5000 },
    { name: 'Feb', value: 3700 },
    { name: 'Mar', value: 1800 },
    { name: 'Apr', value: 2670 },
    { name: 'May', value: 1780 },
    { name: 'Jun', value: 2790 },
    { name: 'Jul', value: 6490 },
  ];

  return (
    <div className="flex h-screen">
      <aside className="fixed top-0 left-0 h-full w-64 bg-dark-green text-white flex flex-col">
        <div className="p-4 bg-dark-green text-3xl font-bold">Khetify</div>
        <nav className="flex flex-col mt-4">
          <Link to="/buyer" className="px-4 py-2 text-gray-200 hover:bg-green">Home</Link>
          <Link to="/negotiatebuyer" className="px-4 py-2 text-gray-200 hover:bg-green">Negotiate</Link>
          <Link to="/buyerprofile" className="px-4 py-2 text-gray-200 hover:bg-green">Settings</Link>
        </nav>
      </aside>
      <main className="ml-64 p-4 flex-1">
        <header className="flex justify-between items-center px-4 py-2">
          <div className="text-2xl font-bold text-dark-green">Welcome to Buyer Dashboard</div>
          <div className="flex items-center space-x-4">
            <Link to="/buyerprofile">
              <button className="px-4 py-2 bg-yellow text-black border border-black rounded-full">Profile</button>
            </Link>
          </div>
        </header>
        <div className="flex flex-col p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Link to="/shop-crop">
              <div className="rounded-lg shadow-md h-64 flex flex-col bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${cropPic})` }}>
                <div className="flex-grow"></div>
                <div className="bg-white text-gray-600 p-6 flex items-center justify-center h-1/4 rounded-b-lg hover:text-light-green">
                  <h3 className="text-xl font-semibold">Shop for Crops</h3>
                </div>
              </div>
            </Link>

            <Link to="/rent-land">
              <div className="rounded-lg shadow-md h-64 flex flex-col bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${landPic})` }}>
                <div className="flex-grow"></div>
                <div className="bg-white text-gray-600 p-6 flex items-center justify-center h-1/4 rounded-b-lg hover:text-light-green">
                  <h3 className="text-xl font-semibold">Rent Land</h3>
                </div>
              </div>
            </Link>

            <Link to="/get-tenant">
              <div className="rounded-lg shadow-md h-64 flex flex-col bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${farmerPic})` }}>
                <div className="flex-grow"></div>
                <div className="bg-white text-gray-600 p-6 flex items-center justify-center h-1/4 rounded-b-lg hover:text-light-green">
                  <h3 className="text-xl font-semibold">Get Tenant</h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-3">
              <h3 className="text-xl font-semibold mb-4">Contracts</h3>
              <ul className="divide-y divide-gray-200">
                {contracts.map(contract => (
                  <li key={contract.id} className={`py-4 ${contract.status === 'Ongoing' ? 'bg-yellow-100' : 'bg-green-100'}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">{contract.title}</span>
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ${contract.status === 'Ongoing' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                        {contract.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2 lg:row-span-2 p-3">
              <h3 className="text-xl font-semibold mb-4 p-5">Analytics</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analyticsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md lg:row-span-2">
              <h3 className="text-xl font-semibold mb-4">Ratings</h3>
              <div className="text-gray-600 mb-4">
                <p className="text-left">Average Rating:</p>
                {renderStars(rating)}
              </div>
              <div className="text-gray-600 mb-4">
                <p className="text-left">Overall Rating:</p>
                {renderStars(rating)}
              </div>
              <div className="text-gray-600 mb-4">
                <p className="text-left font-bold">Latest Review:</p>
                <p className="text-left">Amazing service</p>
              </div>
              <div className="text-gray-600 mb-4">
                <p className="text-left font-bold"> Best Review:</p>
                <p className="text-left">Top-notch professionalism</p>
              </div>
              <div className="text-gray-500">
                <p className="text-sm">Based on {reviews} reviews</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-3">
              <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
              <p className="mt-4 text-dark-green">
                We'd love to hear from you! Please fill out the form below with any questions or feedback you have.
              </p>
              <form className="mt-8 space-y-6">
                <div className="flex flex-col space-y-4">
                  <label htmlFor="name" className="text-dark-green font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-light-green"
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="email" className="text-dark-green font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-light-green"
                    placeholder="Your Email"
                    required
                  />
                  <label htmlFor="message" className="text-dark-green font-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-light-green"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-dark-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-light-green focus:outline-none focus:ring-2 focus:ring-light-green"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyerDashboard;
