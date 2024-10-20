import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-4">Sosial Media</h2>
                <div className="flex justify-center mb-4">
                    <a href="https://github.com/AdityaDinata" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.facebook.com/aditya.dinata.522" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://www.instagram.com/adityadinata0/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">
                        <FaInstagram size={30} />
                    </a>
                </div>
                <div className="text-center mb-4">
                    <p>Telepon: (+62) 822-5266-1012</p>
                    <p>Alamat: Jl. KH. Wahid Hasyim 2 No.22, Sempaja Sel., Kec. Samarinda Utara, Kota Samarinda, Kalimantan Timur 75243</p>
                </div>
            </div>
            <div className="border-t border-gray-600 mt-4 pt-4">
                <p className="text-center text-sm">&copy; 2024 AdityaDinata. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
