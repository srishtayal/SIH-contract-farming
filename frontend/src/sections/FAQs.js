import React from 'react';
import faqimg from '../images/faqs.avif';

const FAQs = () => {
    return (
        <div className="flex items-center space-x-8 p-10 px-20">
            
            <div className="w-2/3">
                <h1 className='text-dark-green text-3xl font-bold'>
                    Frequently Asked <span className='text-light-green'>Questions</span>
                </h1>
                <p className="mt-4 font-bold text-left text-dark-green">
                    What is contract farming?
                </p>
                <p className="mt-4 text-left text-dark-green">
                    Contract farming is an agreement where farmers grow crops or raise livestock for a pre-arranged buyer, specifying production terms and pricing.
                </p>

                <p className="mt-4 text-left font-bold text-dark-green">
                    How does contract farming benefit farmers?
                </p>
                <p className="mt-4 text-left text-dark-green">
                    It provides a guaranteed market, stable income, and sometimes access to resources or technical support.
                </p>

                <p className="mt-4 text-left font-bold text-dark-green">
                    Are there risks involved in contract farming?
                </p>
                <p className="mt-4 text-left text-dark-green">
                    Yes, including dependency on one buyer, compliance requirements, and possible price fluctuations.
                </p>
            </div>

            <div 
                className="w-1/3 h-80 bg-cover bg-center rounded-lg bg-no-repeat" 
                style={{ backgroundImage: `url(${faqimg})` }}
            />
        </div>
    );
}

export default FAQs;
