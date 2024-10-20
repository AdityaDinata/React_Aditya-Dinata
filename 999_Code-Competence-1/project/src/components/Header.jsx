// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import komodoLogo from '../assets/komodo-logo.png';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <img src={komodoLogo} alt="Logo Komodo" className="h-10" />
                <nav className="space-x-6">
                    <Link to="/" className="hover:text-blue-400 transition duration-200">
                        <FaHome className="inline mr-1" /> Home
                    </Link>
                    <Link to="/about" className="hover:text-blue-400 transition duration-200">
                        <FaInfoCircle className="inline mr-1" /> About
                    </Link>
                    <Link to="/contact" className="hover:text-blue-400 transition duration-200">
                        <FaEnvelope className="inline mr-1" /> Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
