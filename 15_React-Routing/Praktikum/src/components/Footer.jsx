// components/Footer.js
import React from 'react';
import SocialIcons from './icon';
const Footer = () => {
  return (
    <footer className="bg-white text-custom-blue-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4">ARSHA</h3>
            <p>108 Adam Street, New York, NY 535022, United States</p>
            <p><strong>Phone:</strong> +1 5589 55488 55</p>
            <p><strong>Email:</strong> info@example.com</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 ">Useful Links</h4>
            <ul className="space-y-2 ">
              <li><a href="#home" className="text-black hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="text-black hover:text-blue-500">About us</a></li>
              <li><a href="#services" className="text-black hover:text-blue-500">Services</a></li>
              <li><a href="#terms" className="text-black hover:text-blue-500">Terms of service</a></li>
              <li><a href="#privacy" className="text-black hover:text-blue-500">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#web-design" className="text-black hover:text-blue-500">Web Design</a></li>
              <li><a href="#web-dev" className="text-black hover:text-blue-500">Web Development</a></li>
              <li><a href="#product-mgmt" className="text-black hover:text-blue-500">Product Management</a></li>
              <li><a href="#marketing" className="text-black hover:text-blue-500">Marketing</a></li>
              <li><a href="#graphic-design" className="text-black hover:text-blue-500">Graphic Design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Our Social Networks</h4>
            <p className='text-black'>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <SocialIcons />
          </div>
        </div>
      </div>




    </footer>
  );
};

export default Footer;
