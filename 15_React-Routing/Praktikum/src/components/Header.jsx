import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Simple header</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded">Home</a></li>
                        <li><a href="#features" className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded">Features</a></li>
                        <li><a href="#pricing" className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded">Pricing</a></li>
                        <li><a href="#faqs" className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded">FAQs</a></li>
                        <li><a href="#about" className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded">About</a></li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
