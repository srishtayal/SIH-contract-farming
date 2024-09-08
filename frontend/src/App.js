import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import FarmerDashboard from './FarmerDashboard';
import FarmerProfile from './FarmerProfile';
import BuyerDashboard from './BuyerDashboard';
import Analytics from './Analytics';
import NegotiateFarmer from './NegotiateFarmer';
import SettingsFarmer from './SettingsFarmer'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/farmerprofile" element={<FarmerProfile />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/negotiate" element={<NegotiateFarmer />} />
        <Route path="/settings" element={<SettingsFarmer />} />
      </Routes>
    </Router>
  );
};

export default App;
