import React from 'react';
import aboutusimg from '../images/aboutus.jpg';

const AboutUs = () => {
    return (
        <div className="flex items-center space-x-8 p-10 px-20">
            <div 
                className="w-1/3 h-80 bg-center rounded-lg bg-contain bg-no-repeat" 
                style={{ backgroundImage: `url(${aboutusimg})` }}
            />
            <div className="w-2/3">
                <h1 className='text-dark-green text-3xl font-bold'>
                    About <span className='text-light-green'>Us</span>
                </h1>
                <p className="mt-4">
                    At Khetify, we believe that every farmer deserves a stable and predictable income. Our platform bridges the gap between farmers and buyers through secure, transparent contract farming agreements. By offering a trusted marketplace, we empower farmers to access guaranteed buyers for their produce, reducing the risks associated with market fluctuations.
                </p>
                <p className="mt-4">
                    We are dedicated to enhancing income stability for farmers, fostering sustainable agricultural practices, and providing buyers with reliable, high-quality produce directly from the source.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
