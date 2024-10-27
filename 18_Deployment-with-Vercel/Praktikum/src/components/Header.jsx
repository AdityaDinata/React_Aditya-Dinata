import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-16 w-full">
      <nav className="bg-white font-roboto shadow-md w-full max-w-7xl h-full px-4 mx-auto flex justify-between items-center">
        <a href="#" className="text-black font-medium text-xl">
          Simple header
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-blue-600 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-600 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition-all"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-600 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition-all"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-600 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition-all"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-600 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition-all"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
