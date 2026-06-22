import React from "react";
import "./Home.css";
import pjtImage from "../assets/PJT.jpg";

const TECH_STACK = [
  "JavaScript",
  "React",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Supabase",
  "Stripe",
  "Vercel",
  "Google Analytics",
  "GitHub",
];

export default function HomeBlack() {
  return (
    <main
      className="black-landing"
      role="main"
      aria-label="Pamela J Terrell landing page"
    >
      <div className="cartoon-walkway" aria-hidden="true">
        <img
          src="/cartoon-pamela-laptop.png"
          alt=""
          className="cartoon-pamela"
        />
      </div>

      <section className="stack" aria-labelledby="home-title">
        <p className="eyebrow">Stabile USA</p>

        <div className="portrait-wrap portrait-alive">
          <img
            src={pjtImage}
            alt="Portrait of Pamela J Terrell"
            className="portrait"
            width={280}
            height={280}
            loading="eager"
          />
        </div>

        <header className="hero-copy">
          <h1 id="home-title" className="title">
            Pamela J Terrell
          </h1>

          <p className="tag">Web Developer · Digital Entrepreneur</p>

          <p className="intro">
            Designing and building modern web experiences, independent products,
            and digital brands.
          </p>
        </header>

        <ul className="tech-chips" aria-label="Core technologies">
          {TECH_STACK.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <nav className="actions" aria-label="Primary">
          <a className="portal" href="/projects" aria-label="View portfolio">
            <span className="dot" aria-hidden="true" />
            View Portfolio
            <svg
              className="chev"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://mixer.pamelajterrell.com"
            className="btn-play"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mixer"
          >
            Mixer
          </a>
        </nav>

        <div className="brand-footer">
          <img
            src="/ptlogo.png"
            alt="Pamela J Terrell logo"
            className="landing-logo"
          />
          <p className="brand-note">A Stabile USA project</p>
        </div>
      </section>
    </main>
  );
}