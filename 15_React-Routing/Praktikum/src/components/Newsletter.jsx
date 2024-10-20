// components/Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-custom-white-100 text-custom-blue-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <div className="flex justify-center items-center">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-custom-button-100 text-white px-6 py-2 rounded-r-full hover:bg-blue-600">Subscribe</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
