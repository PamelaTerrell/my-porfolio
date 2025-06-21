import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Keep only the routing components
import Home from './pages/Home';  // Import the Home component
import Navbar from './components/Navbar';  // If you have a Navbar component
import Footer from './components/Footer';  // If you have a Footer component
import './App.css'; // Global styles (if needed)

const App = () => {
  return (
    <div className="app">
      {/* Navbar (Can be included globally) */}
      <Navbar />
      
      {/* Routes for pages */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        {/* Add more routes here for other sections, like Portfolio, About, etc. */}
      </Routes>
      
      {/* Footer (optional, could be on every page) */}
      <Footer />
    </div>
  );
};

export default App;
