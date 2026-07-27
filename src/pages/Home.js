import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import pjtImage from "../assets/PJT.jpg";

const TECH_STACK = [
  {
    category: "Frontend",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend, Data & APIs",
    technologies: [
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "REST APIs",
      "Third-Party API Integration",
      "Webhooks",
    ],
  },
  {
    category: "Services & Integrations",
    technologies: [
      "Stripe",
      "Resend",
      "Formspree",
      "Google Analytics",
    ],
  },
  {
    category: "Deployment & Tools",
    technologies: [
      "Vercel",
      "Cloudflare",
      "Git",
      "GitHub",
    ],
  },
  {
    category: "AI & AI-Assisted Development",
    technologies: [
      "OpenAI API",
      "ChatGPT",
      "Prompt Engineering",
      "AI Integration",
      "AI-Assisted Debugging",
      "AI-Assisted Prototyping",
    ],
  },
];

export default function HomeBlack() {
  return (
    <main
      className="black-landing"
      role="main"
      aria-label="Pamela J. Terrell portfolio landing page"
    >
      <div className="cartoon-walkway" aria-hidden="true">
        <img
          src="/cartoon-pamela-laptop.png"
          alt=""
          className="cartoon-pamela"
        />
      </div>

      <section className="stack" aria-labelledby="home-title">
        <Link
          to="/stabile-usa"
          className="eyebrow home-stabile-link"
          aria-label="Learn about Stabile USA"
        >
          Stabile USA
        </Link>

        <div className="portrait-wrap portrait-alive">
          <img
            src={pjtImage}
            alt="Portrait of Pamela J. Terrell"
            className="portrait"
            width={280}
            height={280}
            loading="eager"
          />
        </div>

        <header className="hero-copy">
          <h1 id="home-title" className="title">
            Pamela J. Terrell
          </h1>

          <p className="tag">Web Developer · Digital Entrepreneur</p>

          <p className="intro">
            I design and build modern websites, digital products, and useful web
            tools for people with real stories, ideas, businesses, and missions.
          </p>
        </header>

        <section
          className="tech-stack-section"
          aria-label="Technical skills and development experience"
        >
          <div className="tech-category-grid">
            {TECH_STACK.map((group) => (
              <div className="tech-category" key={group.category}>
                <h2 className="tech-category-title">{group.category}</h2>

                <ul
                  className="tech-chips"
                  aria-label={`${group.category} skills`}
                >
                  {group.technologies.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="service-card" aria-label="Work with Pamela">
          <p className="service-kicker">Now accepting select projects</p>

          <h2 className="service-title">Need a website or digital tool?</h2>

          <p className="service-text">
            I create polished websites, landing pages, story platforms, forms,
            membership experiences, and simple web apps for small businesses,
            nonprofits, creators, and community projects.
          </p>
        </div>

        <nav className="actions" aria-label="Primary navigation">
          <Link
            className="portal"
            to="/projects"
            aria-label="View Pamela's portfolio"
          >
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
          </Link>

          <Link
            className="btn-play"
            to="/work-with-me"
            aria-label="Work with Pamela"
          >
            Work With Me
          </Link>

          <a
            href="https://mixer.pamelajterrell.com"
            className="btn-play secondary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mixer"
          >
            Mixer
          </a>
        </nav>

        <div className="home-social-section">
          <p className="home-social-label">Connect with Stabile USA</p>

          <div
            className="home-social-links"
            aria-label="Stabile USA social media links"
          >
            <a
              href="https://github.com/pamelaterrell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pamela Terrell on GitHub"
              title="GitHub"
              className="home-social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.808 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.303-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.53 11.53 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.814 1.102.814 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://bsky.app/profile/stabileusa.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stabile USA on Bluesky"
              title="Bluesky: stabileusa.bsky.social"
              className="home-social-link bluesky-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 10.8c-1.1-2.1-4.1-6-6.9-7.9C2.4 1.1 1.4 1.4.8 1.7.2 2 .1 3 .1 3.6c0 .7.4 5.7.7 6.5.9 3 4 4 6.8 3.5-4.8.8-9 2.8-3.5 8.9 6 6.2 8.2-1.3 8.9-3.7.7 2.4 2.3 9.7 8.2 3.7 5.5-6.1 1.3-8.1-3.5-8.9 2.8.5 5.9-.5 6.8-3.5.3-.8.7-5.8.7-6.5 0-.6-.1-1.6-.7-1.9-.6-.3-1.6-.6-4.3 1.2-2.8 1.9-5.8 5.8-6.9 7.9z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/stabileusa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stabile USA on Instagram"
              title="Instagram: @stabileusa"
              className="home-social-link instagram-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM17.5 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
          </div>

          <div className="home-social-handles">
            <a
              href="https://bsky.app/profile/stabileusa.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Stabile USA on Bluesky"
            >
              stabileusa.bsky.social
            </a>

            <span aria-hidden="true">·</span>

            <a
              href="https://www.instagram.com/stabileusa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Stabile USA on Instagram"
            >
              @stabileusa
            </a>
          </div>
        </div>

        <div className="brand-footer">
          <img
            src="/ptlogo.png"
            alt="Pamela J. Terrell logo"
            className="landing-logo"
          />

          <p className="brand-note">
            A{" "}
            <Link to="/stabile-usa" className="brand-note-link">
              Stabile USA
            </Link>{" "}
            project
          </p>
        </div>
      </section>
    </main>
  );
}