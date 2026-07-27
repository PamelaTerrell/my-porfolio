import React from "react";
import "./StabileUSA.css";
import Footer from "../components/Footer";

/* Assets */
import stabileUSALogo from "../assets/stabileusalogo.png";
import pjtImage from "../assets/PJT.jpg";

const VENTURES = [
  {
    title: "Crime Recordings",
    category: "Public Records and Media Archive",
    description:
      "A full-stack true-crime archive organizing public audio recordings, case documents, editorial content, authentication, and member access.",
    href: "https://crimerecordings.com",
  },
  {
    title: "Night Listener",
    category: "Audio Storytelling Platform",
    description:
      "A calm, story-driven listening experience exploring relationships, behavior, reflection, and the quiet moments people replay.",
    href: "https://stabileusa.com",
  },
  {
    title: "VinoPairings",
    category: "AI-Powered Lifestyle Utility",
    description:
      "A wine-pairing platform featuring Viv, an AI-powered virtual sommelier that helps users discover thoughtful food and wine combinations.",
    href: "https://vinopairings.com",
  },
  {
    title: "Life Stories Now",
    category: "Storytelling Platform",
    description:
      "A narrative platform centered on memory, personal reflection, anonymous storytelling, and shared human experience.",
    href: "https://lifestoriesnow.com",
  },
  {
    title: "Super Cleaning Lady",
    category: "Home and Lifestyle Brand",
    description:
      "A playful cleaning and home-care platform built around practical motivation, room-rescue missions, humor, and everyday progress.",
    href: "https://supercleaninglady.com",
  },
  {
    title: "Medicare Before You Switch",
    category: "Educational Resource",
    description:
      "A plain-language educational site helping people slow down, compare options, and ask better questions before changing Medicare coverage.",
    href: "https://medicarebeforeyouswitch.com",
  },
];

export default function StabileUSA() {
  return (
    <div className="stabile-page">
      <header className="stabile-header">
        <a href="/" className="stabile-home-link" aria-label="Return home">
          ← Home
        </a>

        <a href="/projects" className="stabile-portfolio-link">
          View Portfolio
        </a>
      </header>

      <main>
        <section className="stabile-hero" aria-labelledby="stabile-title">
          <div className="stabile-logo-wrap">
            <img
              src={stabileUSALogo}
              alt="Stabile USA logo"
              className="stabile-main-logo"
              loading="eager"
            />
          </div>

          <div className="stabile-hero-copy">
            <p className="stabile-eyebrow">Independent Digital Ventures</p>

            <h1 id="stabile-title">Stabile USA</h1>

            <p className="stabile-tagline">
              Independent creative ideas. Built to last.
              <span> Advancing the human experience.</span>
            </p>

            <p className="stabile-intro">
              Stabile USA is an independent digital venture company that
              develops purposeful websites, useful tools, original brands, and
              story-driven platforms designed to inform, connect, empower, and
              improve everyday life.
            </p>

            <div className="stabile-hero-actions">
              <a href="#ventures" className="stabile-btn primary">
                Explore the Ventures
              </a>

              <a href="/work-with-me" className="stabile-btn">
                Work With Pamela
              </a>
            </div>
          </div>
        </section>

        <section className="stabile-section stabile-about">
          <div className="stabile-section-heading">
            <p className="stabile-eyebrow">About the Company</p>
            <h2>Built around ideas with purpose</h2>
          </div>

          <div className="stabile-about-grid">
            <p>
              Stabile USA serves as the creative and technical home for a
              growing collection of independent digital ventures. Each project
              begins with a question, need, story, or possibility—and is shaped
              into a focused experience with its own audience and identity.
            </p>

            <p>
              The company combines strategy, design, writing, development,
              technology, and practical problem-solving. Some ventures educate.
              Some entertain. Some organize information. Others help people
              make decisions, tell stories, or find useful resources.
            </p>
          </div>
        </section>

        <section className="stabile-section stabile-purpose">
          <div className="stabile-section-heading">
            <p className="stabile-eyebrow">Why Stabile USA Exists</p>
            <h2>Creative independence with lasting structure</h2>
          </div>

          <div className="stabile-principles">
            <article className="stabile-principle">
              <span className="stabile-principle-number">01</span>
              <h3>Independent Ideas</h3>
              <p>
                Original concepts are given room to become distinct brands,
                tools, communities, and experiences rather than being forced
                into a single format.
              </p>
            </article>

            <article className="stabile-principle">
              <span className="stabile-principle-number">02</span>
              <h3>Built to Last</h3>
              <p>
                Projects are developed with thoughtful structure, dependable
                technology, clear content, and room for future growth.
              </p>
            </article>

            <article className="stabile-principle">
              <span className="stabile-principle-number">03</span>
              <h3>Human-Centered Progress</h3>
              <p>
                Technology should serve real people by making information more
                understandable, experiences more meaningful, and useful actions
                easier to take.
              </p>
            </article>
          </div>
        </section>

        <section className="stabile-section stabile-build">
          <div className="stabile-section-heading">
            <p className="stabile-eyebrow">What We Build</p>
            <h2>Digital work across multiple forms</h2>
          </div>

          <div className="stabile-build-grid">
            <div className="stabile-build-item">
              <h3>Story Platforms</h3>
              <p>
                Experiences centered on memory, reflection, identity, human
                behavior, relationships, and real-life narratives.
              </p>
            </div>

            <div className="stabile-build-item">
              <h3>Educational Resources</h3>
              <p>
                Plain-language websites that help people understand complicated
                subjects and make better-informed decisions.
              </p>
            </div>

            <div className="stabile-build-item">
              <h3>Membership Experiences</h3>
              <p>
                Secure platforms offering exclusive audio, documents, archives,
                case materials, and subscriber access.
              </p>
            </div>

            <div className="stabile-build-item">
              <h3>AI-Powered Tools</h3>
              <p>
                Focused applications that use artificial intelligence to
                support recommendations, discovery, guidance, and interaction.
              </p>
            </div>

            <div className="stabile-build-item">
              <h3>Community Projects</h3>
              <p>
                Digital hubs for local organizations, nonprofits, veterans,
                creators, businesses, and mission-driven groups.
              </p>
            </div>

            <div className="stabile-build-item">
              <h3>Lifestyle Brands</h3>
              <p>
                Useful and engaging platforms built around beauty, home,
                culture, food, wine, personal growth, and everyday living.
              </p>
            </div>
          </div>
        </section>

        <section
          id="ventures"
          className="stabile-section stabile-ventures"
          aria-labelledby="ventures-title"
        >
          <div className="stabile-section-heading">
            <p className="stabile-eyebrow">Selected Ventures</p>
            <h2 id="ventures-title">One company, many focused ideas</h2>

            <p className="stabile-section-intro">
              Each venture has its own purpose, voice, audience, and digital
              identity while remaining part of the larger Stabile USA vision.
            </p>
          </div>

          <div className="stabile-venture-grid">
            {VENTURES.map((venture) => (
              <article className="stabile-venture-card" key={venture.title}>
                <p className="stabile-venture-category">{venture.category}</p>

                <h3>{venture.title}</h3>

                <p>{venture.description}</p>

                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${venture.title}`}
                >
                  Visit venture →
                </a>
              </article>
            ))}
          </div>

          <div className="stabile-portfolio-cta">
            <p>Explore the complete collection of Stabile USA ventures.</p>

            <a href="/projects" className="stabile-btn primary">
              View Full Portfolio
            </a>
          </div>
        </section>

        <section className="stabile-section stabile-founder">
          <div className="stabile-founder-media">
            <img
              src={pjtImage}
              alt="Portrait of Pamela J. Terrell"
              className="stabile-founder-photo"
              loading="lazy"
            />
          </div>

          <div className="stabile-founder-copy">
            <p className="stabile-eyebrow">Founder</p>

            <h2>Pamela J. Terrell</h2>

            <p>
              Pamela J. Terrell is the founder, developer, and creative force
              behind Stabile USA. She develops independent digital ventures from
              concept through launch, combining design, technology, content,
              research, branding, and user experience.
            </p>

            <p>
              Her work is guided by curiosity, practical usefulness, thoughtful
              storytelling, and the belief that a strong idea can become
              something meaningful when it is given the right structure.
            </p>

            <div className="stabile-founder-actions">
              <a href="/projects" className="stabile-btn primary">
                View Pamela&apos;s Work
              </a>

              <a href="/work-with-me" className="stabile-btn">
                Start a Project
              </a>
            </div>
          </div>
        </section>

        <section className="stabile-final-cta">
          <p className="stabile-eyebrow">Stabile USA</p>

          <h2>Independent ideas deserve a strong foundation.</h2>

          <p>
            Built thoughtfully. Developed purposefully. Designed to keep
            growing.
          </p>

          <a href="/work-with-me" className="stabile-btn primary">
            Work With Pamela
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}