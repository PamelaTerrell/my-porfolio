// src/App.js
import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Work from "./pages/Work";
import "./App.css";

const App = () => {
  const ranRef = useRef(false); // helps with StrictMode double-invoke in dev

  useEffect(() => {
    // Guard against StrictMode re-run (dev) + per-tab duplicate logging
    if (ranRef.current) return;
    ranRef.current = true;
    if (sessionStorage.getItem("ipLogged")) return;
    sessionStorage.setItem("ipLogged", "1");

    const shouldLog =
      process.env.NODE_ENV === "production" ||
      String(process.env.REACT_APP_LOG_VISITS_IN_DEV || "").toLowerCase() ===
        "true";

    if (!shouldLog) {
      // Dev default is "don't send"; opt-in via REACT_APP_LOG_VISITS_IN_DEV=true
      return;
    }

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
      const maxAttempts = 2; // 1 try + 1 retry
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
          // Accept 2xx only; anything else we treat as a soft fail
          if (res.ok) {
            if (process.env.NODE_ENV !== "production") {
              console.log("[visit] logged");
            }
            return;
          } else {
            lastErr = new Error(`HTTP ${res.status}`);
          }
        } catch (e) {
          lastErr = e;
        }

        // small backoff before retry
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
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;
