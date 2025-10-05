// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Work from "./pages/Work"; // the new portfolio page
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Work />} />
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;
