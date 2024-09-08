import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark-green text-white py-6 px-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">Khetify</h2>
                    <p className="mt-2 text-sm">
                        Empowering farmers with stable income and secure markets.
                    </p>
                </div>

                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/" className="hover:text-light-green">Home</a></li>
                        <li><a href="/about" className="hover:text-light-green">About Us</a></li>
                        <li><a href="/faqs" className="hover:text-light-green">FAQs</a></li>
                        <li><a href="/contact" className="hover:text-light-green">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p className="mt-2 text-sm">Email: support@khetify.com</p>
                    <p className="mt-1 text-sm">Phone: +123 456 7890</p>
                </div>
            </div>

            <div className="mt-6 border-t border-gray-700 pt-4 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Khetify. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
