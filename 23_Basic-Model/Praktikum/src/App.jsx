// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MentalHealthQnA from './components/MentalHealthQnA';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentalHealthQnA />} />
      </Routes>
    </Router>
  );
}

export default App;
