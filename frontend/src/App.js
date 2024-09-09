import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import FarmerDashboard from './FarmerDashboard';
import FarmerProfile from './FarmerProfile';
import BuyerDashboard from './BuyerDashboard';
import Analytics from './Analytics';
import NegotiateFarmer from './NegotiateFarmer';
import SettingsFarmer from './SettingsFarmer';
import CropList from './CropList'; 
import LandList from './LandList';
import NegotiateBuyer from './NegotiateBuyer';
import TenantList from './TenantList';
import ShopCrop from './ShopCrop';
import RentLand from './RentLand';
import GetTenant from './GetTenant';
import BuyerProfile from './BuyerProfile';

const App = () => {
  useEffect(() => {
    // Create the first script tag for injecting the Botpress webchat
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    botpressScript.async = true;
    document.body.appendChild(botpressScript);

    // Create the second script tag for the Botpress webchat config
    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/04c9b056-a691-42af-bd82-f9c33024171e/webchat/v2.1/config.js';
    configScript.async = true;
    document.body.appendChild(configScript);

    // Clean up the scripts when the component unmounts
    return () => {
      document.body.removeChild(botpressScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/farmerprofile" element={<FarmerProfile />} />
        <Route path="/buyerprofile" element={<BuyerProfile />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/negotiatefarmer" element={<NegotiateFarmer />} />
        <Route path='/negotiatebuyer' element={<NegotiateBuyer />} />
        <Route path="/settings" element={<SettingsFarmer />} />
        <Route path="/list-crop" element={<CropList />} />
        <Route path="/list-land" element={<LandList />} />
        <Route path="/shop-crop" element={<ShopCrop />} />
        <Route path="/list-tenant" element={<TenantList />} />
        <Route path="/rent-land" element={<RentLand />} />
        <Route path="/get-tenant" element={<GetTenant />} />
      </Routes>
    </Router>
  );
};

export default App;
