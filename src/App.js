// src/App.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Work from "./pages/Work";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Avoid double-logging in dev (React StrictMode)
    if (sessionStorage.getItem("ipLogged")) return;
    sessionStorage.setItem("ipLogged", "1");

    fetch("/api/log-ip").catch(() => {});
  }, []);

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
