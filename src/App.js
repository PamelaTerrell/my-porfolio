import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';  
 
 
import './App.css'; 
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="app">
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* add more routes as needed */}
      </Routes>
      
    

      {/* Add Analytics at the root level */}
      <Analytics />
    </div>
  );
};

export default App;
