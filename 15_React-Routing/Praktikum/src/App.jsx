// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreateProduct from './components/createProduct';
import View from './components/View';  // Import the View component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/view" element={<View />} />  {/* Add the View route */}
      </Routes>
    </Router>
  );
};

export default App;
