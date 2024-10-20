// LandingPage.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './heroSection';
import Newsletter from './Newsletter';
import Footer from './Footer';
import FooterBottom from './footerBottom';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Header />
      <HeroSection />
      <Newsletter />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default LandingPage;
