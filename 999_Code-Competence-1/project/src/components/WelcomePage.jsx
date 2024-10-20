import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

const WelcomePage = () => {
    return (
        <div>
            <Header />

            <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-800">
                <div className="text-center p-6">
                    <h1 className="text-4xl font-bold text-white mb-4">Selamat Datang di Website Komodo</h1>
                    <p className="text-lg text-white mb-6">
                        Temukan informasi menarik tentang Komodo, kadal terbesar di dunia!
                    </p>
                    <p className="text-md text-white mb-6">
                        Komodo (Varanus komodoensis) dapat ditemukan di beberapa pulau di Indonesia, 
                        termasuk Pulau Komodo, Rinca, Flores, dan Gili Motang. Mereka adalah predator 
                        puncak dan memiliki peran penting dalam ekosistem.
                    </p>
                    <a
                        href="/about" // Arahkan ke halaman About Us
                        className="inline-block px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Pelajari Lebih Lanjut
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WelcomePage;
