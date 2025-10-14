import React from "react";
import "./Home.css";                   // landing styles
import pjtImage from "../assets/PJT.jpg";  // ensure PJT.jpg lives in src/assets

export default function HomeBlack() {
  return (
    <main className="black-landing" role="main" aria-label="Landing">
      <div className="stack">
        {/* Portrait */}
        <div className="portrait-wrap" aria-hidden>
          <div className="portrait-glow" />
          <img
            src={pjtImage}
            alt="Pamela Terrell portrait"
            className="portrait"
            loading="eager"
          />
        </div>

        {/* Name + Tag */}
        <h1 className="title">Pamela J Terrell</h1>
        <p className="tag">Web Developer · Digital Entrepreneur</p>

        {/* Actions grouped to control stacking/spacing */}
        <div className="actions">
          {/* Primary CTA */}
          <a className="portal" href="/projects" aria-label="Enter portfolio to view projects">
            <span className="dot" aria-hidden />
            Enter Portfolio
            <svg className="chev" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Secondary CTA — Play ColorQuest */}
          <a
            href="https://play.pamelajterrell.com"
            className="btn-play"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "click_play_colorquest", {
                  event_category: "engagement",
                  event_label: "Play ColorQuest",
                });
              }
            }}
          >
            🎨 Play ColorQuest
          </a>
        </div>

        {/* Logo */}
        <img src="/ptlogo.png" alt="PT logo" className="landing-logo" />
      </div>
    </main>
  );
}
