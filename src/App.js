// src/App.js
import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Mixer from "./pages/Mixer";   // ✅ matches Mixer.jsx
import "./App.css";                  // ✅ keep your global styles only

const App = () => {
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;
    if (sessionStorage.getItem("ipLogged")) return;
    sessionStorage.setItem("ipLogged", "1");

    const shouldLog =
      process.env.NODE_ENV === "production" ||
      String(process.env.REACT_APP_LOG_VISITS_IN_DEV || "").toLowerCase() === "true";

    if (!shouldLog) return;

    const buildPayload = () => ({
      event: "pageview",
      path: window.location.pathname + window.location.search,
      referrer: document.referrer || "",
      ua: navigator.userAgent,
      lang: navigator.language,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      vw: window.innerWidth,
      vh: window.innerHeight,
      ts: Date.now(),
    });

    const withTimeout = (ms) => {
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), ms);
      return { controller, cancel: () => clearTimeout(t) };
    };

    const logVisit = async () => {
      const maxAttempts = 2;
      let attempt = 0;
      let lastErr;

      while (attempt < maxAttempts) {
        attempt += 1;
        const { controller, cancel } = withTimeout(3000);
        try {
          const res = await fetch("/api/log-ip", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-visit-key": process.env.REACT_APP_VISIT_KEY || "",
            },
            credentials: "same-origin",
            body: JSON.stringify(buildPayload()),
            signal: controller.signal,
          });
          cancel();
          if (res.ok) return;
          lastErr = new Error(`HTTP ${res.status}`);
        } catch (e) {
          lastErr = e;
        }
        await new Promise((r) => setTimeout(r, 250 * attempt));
      }

      if (process.env.NODE_ENV !== "production") {
        console.warn("[visit] log failed:", lastErr);
      }
    };

    logVisit();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/mixer" element={<Mixer />} />  {/* ✅ new route */}
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;
