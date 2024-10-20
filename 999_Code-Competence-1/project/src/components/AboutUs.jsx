import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import aboutImage from '../assets/komodo.jpg'; 

const AboutUs = () => {
    return (
        <div>

            <Header />

            <section className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg mb-4" />
                <p className="text-lg">
                    Selamat datang di website kami! Kami berdedikasi untuk memberikan pengalaman terbaik 
                    yang mungkin. Tim kami bersemangat untuk berbagi pengetahuan dan terhubung dengan 
                    komunitas kami.
                </p>
                <p className="mt-4">
                    Misi kami adalah menciptakan platform inklusif di mana semua orang dapat belajar, berbagi, 
                    dan tumbuh bersama. Kami percaya pada kekuatan pengetahuan dan pentingnya kolaborasi.
                </p>
                <h2 className="text-2xl font-bold mt-6">Tentang Komodo</h2>
                <p className="mt-4">
                    Komodo (Varanus komodoensis) adalah spesies kadal terbesar di dunia yang dapat ditemukan 
                    di beberapa pulau di Indonesia, termasuk Pulau Komodo, Rinca, Flores, dan Gili Motang. 
                    Komodo dikenal dengan tubuhnya yang besar, kekuatan gigitannya yang kuat, dan sifatnya 
                    yang predator. Hewan ini adalah bagian dari ekosistem unik dan dilindungi sebagai salah 
                    satu warisan alam dunia.
                </p>
                <p className="mt-4">
                    Komodo adalah pemangsa puncak di habitatnya dan berperan penting dalam menjaga keseimbangan 
                    ekosistem. Selain itu, mereka menarik banyak wisatawan yang ingin melihat keindahan dan 
                    keunikan hewan ini di habitat aslinya. Namun, keberadaan Komodo saat ini terancam oleh 
                    kehilangan habitat dan faktor manusia lainnya, sehingga penting untuk melestarikan 
                    spesies ini dan habitatnya.
                </p>
            </section>

       
            <Footer />
        </div>
    );
};

export default AboutUs;
