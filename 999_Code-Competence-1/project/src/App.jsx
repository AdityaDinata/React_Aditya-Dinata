// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import AboutUs from './components/AboutUs'; 
import ContactUs from './components/ContactUs'; 

const App = () => {
    return (
        <Router>
            <div className="App">
                {/* Routing untuk halaman */}
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
    
            </div>
        </Router>
    );
};

export default App;
