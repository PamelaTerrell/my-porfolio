// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from react-dom/client (for React 18+)
import './index.css'; // Global styles
import App from './App'; // Main App component
import { BrowserRouter } from 'react-router-dom';

// Create the root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
