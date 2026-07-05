import React from "react";
import "./WorkWithMe.css";
import Footer from "../components/Footer";

/* Assets */
import ptlogo from "../assets/ptlogo.png";
import pjtImage from "../assets/PJT.jpg";

const SERVICES = [
  {
    title: "Starter Website",
    price: "Starting at $500",
    desc: "A clean, polished 1–5 page website for a small business, nonprofit, personal brand, community project, or creative idea.",
    includes: [
      "Mobile-friendly design",
      "Home, About, Services, Contact, or similar pages",
      "Basic SEO structure",
      "Contact form setup",
      "Launch support",
    ],
  },
  {
    title: "Website Refresh",
    price: "Starting at $350",
    desc: "A visual and content update for an existing website that needs to feel more current, clear, and professional.",
    includes: [
      "Layout and styling improvements",
      "Updated wording and structure",
      "Better calls-to-action",
      "Image and section cleanup",
      "Mobile review",
    ],
  },
  {
    title: "Custom Mini Web App",
    price: "Starting at $750",
    desc: "A simple interactive tool, quiz, calculator, story form, intake form, guide, or digital experience built around a specific purpose.",
    includes: [
      "Custom user flow",
      "Interactive form or tool",
      "Results or confirmation screen",
      "Basic analytics/event tracking",
      "Deployment support",
    ],
  },
  {
    title: "Monthly Care Plan",
    price: "$50/month",
    desc: "Ongoing light support for updates, small changes, content swaps, form testing, and general website maintenance.",
    includes: [
      "Small monthly updates",
      "Content or image changes",
      "Form checks",
      "Basic troubleshooting",
      "Peace of mind support",
    ],
  },
];

export default function WorkWithMe() {
  return (
    <div className="workwith-root">
      <header className="workwith-header">
        <a href="/" className="crumb" aria-label="Back to home">
          ← Home
        </a>

        <div className="brand-group">
          <img src={ptlogo} alt="PT logo" className="brand-logo" />
          <span className="brand-sub">Stabile USA</span>
        </div>
      </header>

      <main>
        <section className="workwith-hero">
          <div className="hero-copy">
            <p className="eyebrow">Work With Pamela</p>

            <h1>Websites and digital tools for real ideas, stories, and missions.</h1>

            <p className="intro">
              I help small businesses, nonprofits, creators, and community
              projects turn their ideas into polished websites, landing pages,
              forms, story platforms, and simple web apps.
            </p>

            <div className="hero-actions">
              <a href="mailto:agentpamelajterrell@gmail.com" className="primary-btn">
                Start a Project
              </a>

              <a href="/projects" className="secondary-btn">
                View Portfolio
              </a>
            </div>
          </div>

          <div className="hero-card" aria-label="About Pamela">
            <img
              src={pjtImage}
              alt="Portrait of Pamela J Terrell"
              className="hero-photo"
              loading="eager"
            />

            <h2>Pamela J Terrell</h2>

            <p>
              Web developer, digital entrepreneur, and creator of independent
              platforms through Stabile USA.
            </p>
          </div>
        </section>

        <section className="who-section" aria-labelledby="who-title">
          <p className="eyebrow">Who I Help</p>

          <h2 id="who-title">A good fit for people who need something clear, useful, and online.</h2>

          <div className="who-grid">
            <div>
              <h3>Small Businesses</h3>
              <p>
                Service providers, local businesses, independent professionals,
                and people who need a better online presence.
              </p>
            </div>

            <div>
              <h3>Nonprofits & Community Groups</h3>
              <p>
                Organizations that need a simple website, event page, donation
                link, contact form, or public information hub.
              </p>
            </div>

            <div>
              <h3>Creators & Storytellers</h3>
              <p>
                Writers, narrators, educators, coaches, and creators who want to
                share content, collect stories, or build a digital product.
              </p>
            </div>
          </div>
        </section>

        <section className="services-section" aria-labelledby="services-title">
          <p className="eyebrow">Services</p>

          <h2 id="services-title">Simple project options</h2>

          <p className="section-intro">
            These are starting points. Every project is a little different, but
            this gives you a clear idea of what I can help create.
          </p>

          <div className="services-grid">
            {SERVICES.map((service) => (
              <article className="service-card" key={service.title}>
                <p className="service-price">{service.price}</p>

                <h3>{service.title}</h3>

                <p className="service-desc">{service.desc}</p>

                <ul>
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <p className="eyebrow">How It Works</p>

          <h2 id="process-title">A simple process from idea to launch</h2>

          <div className="process-list">
            <div>
              <span>01</span>
              <h3>Tell me what you need</h3>
              <p>
                Share your idea, your current website if you have one, and what
                you want the finished project to do.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>We choose the right scope</h3>
              <p>
                I will help narrow the project into a clear plan so it does not
                become overwhelming or unnecessarily expensive.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>I build and refine it</h3>
              <p>
                I create the site or tool, review the flow, make practical
                improvements, and prepare it for launch.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>You go live</h3>
              <p>
                Once everything is ready, your project can be launched, shared,
                and used by the people it was made for.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-title">
          <p className="eyebrow">Start Here</p>

          <h2 id="cta-title">Have an idea you want online?</h2>

          <p>
            Send me a short message with what you need, what you already have,
            and what you hope the finished website or tool will help you do.
          </p>

          <a href="mailto:agentpamelajterrell@gmail.com" className="primary-btn">
            Email Pamela
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}