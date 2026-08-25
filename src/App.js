// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import CaseStudyPage from "./components/CaseStudyPage";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Mixer from "./pages/Mixer";
import WorkWithMe from "./pages/WorkWithMe";
import StabileUSA from "./pages/StabileUSA";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div className="app">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
        <Route path="/mixer" element={<Mixer />} />
        <Route path="/stabile-usa" element={<StabileUSA />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
