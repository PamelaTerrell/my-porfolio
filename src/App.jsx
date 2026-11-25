
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import SiteHeader from "./components/SiteHeader";
import PageMetadata from "./components/PageMetadata";
import Footer from "./components/Footer";
import CaseStudyPage from "./components/CaseStudyPage";

import Home from "./pages/Home";
import Work from "./pages/Work";
import WorkWithMe from "./pages/WorkWithMe";
import StabileUSA from "./pages/StabileUSA";
import AugustaWebDevelopment from "./pages/AugustaWebDevelopment";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app">
      <PageMetadata />
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
        <Route path="/stabile-usa" element={<StabileUSA />} />
        <Route
          path="/web-development-augusta-ga"
          element={<AugustaWebDevelopment />}
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      {import.meta.env.PROD && /^(www\.)?pamelajterrell\.com$/.test(window.location.hostname) && (
        <Analytics />
      )}
    </div>
  );
};

export default App;
