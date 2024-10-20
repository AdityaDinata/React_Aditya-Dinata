
import React from 'react';
import heroImage from '../assets/hero.svg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-custom-blue-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2 text-white">
          <h1 className="text-4xl font-bold mb-4">Better Solutions For Your Business</h1>
          <p className="text-lg mb-6">We are a team of talented designers making websites with Bootstrap</p>
          <div className="space-x-4">
          <Link to="/create-product">
            <button className="text-white bg-transparent px-6 py-2 rounded-full hover:bg-custom-button-100">
              Get Started
            </button>
          </Link>
            <button className="text-white bg-transparent  px-6 py-2  rounded-full hover:bg-custom-button-100">Watch Video</button>
          </div>

        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Hero Illustration" className="w-full" />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
