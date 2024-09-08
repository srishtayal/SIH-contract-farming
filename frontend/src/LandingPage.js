import React from 'react';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import FAQs from './sections/FAQs';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';

const LandingPage = () => {
  return (
    <div className='bg-white'>
    <NavBar />
    <Hero />
    <AboutUs />
    <FAQs />
    <ContactUs />
    <Footer />
    </div>
  );
};

export default LandingPage;
