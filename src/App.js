import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Work from "./pages/Work";
import "./App.css";

function useGaPageviews() {
  const loc = useLocation();
  useEffect(() => {
    if (!window.gtag) return;
    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: loc.pathname + loc.search,
      page_title: document.title
    });
  }, [loc]);
}

export default function App() {
  useGaPageviews();

  useEffect(() => {
    // Avoid double-logging in dev (React StrictMode)
    if (sessionStorage.getItem("ipLogged")) return;
    sessionStorage.setItem("ipLogged", "1");

    const logVisit = async () => {
      try {
        await fetch("/api/log-ip", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-visit-key": process.env.REACT_APP_VISIT_KEY || ""
          },
          body: JSON.stringify({ event: "pageview" })
        });
      } catch (err) {
        console.error("Log visit failed:", err);
      }
    };

    logVisit();
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
}
