import React from 'react';

const ContactUs = () => {
    return (
        <div className="p-10 px-20">
            <h1 className='text-dark-green text-3xl font-bold'>
                Contact <span className='text-light-green'>Us</span>
            </h1>
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
    );
}

export default ContactUs;
