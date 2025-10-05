import React, { useState } from "react";
import "./Work.css";

/* Assets */
import pjtImage from "../assets/PJT.jpg";
import lifestories from "../assets/LifeStories.png";
import beforeandafter from "../assets/beforeandafter.png";
import customdreamz from "../assets/CustomDreamz.png";
import desire from "../assets/desire.jpg";
import pairings from "../assets/pairings.png";
import cosmic from "../assets/cosmic.png";
import psych from "../assets/psych.png";
import pace from "../assets/pace.png";
import getvabuddy from "../assets/getvabuddy.jpg";
import pwimage from "../assets/PW.jpg";

export default function Work() {
  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._gotcha) return; // honeypot
    setSubmitting(true);
    try {
      const resp = await fetch("https://formspree.io/f/xzzvqbpw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (resp.ok) {
        setStatus("✅ Your message has been sent! I’ll get back to you shortly.");
        setFormData({ name: "", email: "", message: "", _gotcha: "" });
      } else {
        setStatus("⚠️ Oops! Something went wrong. Please try again.");
      }
    } catch {
      setStatus("⚠️ Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="work-root">
      {/* Minimal header */}
      <header className="mini-header">
        <a href="/" className="crumb" aria-label="Back to landing">← Home</a>
        <div className="brand-dot" aria-hidden />
      </header>

      {/* Hero */}
      <section className="work-hero">
        <h1>Projects & Services</h1>
        <p className="intro">
          A curated selection of my recent work plus packages for small teams, nonprofits, and solo founders.
        </p>
        <nav className="section-pills" aria-label="Sections">
          <a href="#about" className="pill">About</a>
          <a href="#portfolio" className="pill">Portfolio</a>
          <a href="#pricing" className="pill">Pricing</a>
          <a href="#testimonials" className="pill">Testimonials</a>
          <a href="#contact" className="pill pill-primary">Contact</a>
        </nav>
      </section>

      {/* About */}
      <section id="about" className="about">
        <img
          src={pjtImage}
          alt="Portrait of Pamela Terrell"
          className="about-photo"
          loading="lazy"
        />
        <div className="about-copy">
          <h2>About Me</h2>
          <p>
            I’m a web developer and UI/UX designer focused on clean, fast, accessible websites that
            help small businesses and creators look credible and professional.
          </p>
          <p>
            I build with modern tooling, thoughtful content structure, and performance in mind—so your site
            is pleasant to use and easy to maintain.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">
        <h2>Recent Work</h2>
        <p className="muted">A mix of product sites, storytelling, utilities, and local-business builds.</p>
        <div className="grid">
          <Card
            img={lifestories}
            title="Life Stories Now"
            desc="A storytelling platform for sharing meaningful life experiences anonymously."
            href="https://lifestoriesnow.com"
          />
          <Card
            img={beforeandafter}
            title="Before And After Vault"
            desc="Upload and share before-after photos with a personal vault and community showcase."
            href="https://beforeandaftervault.com"
          />
          <Card
            img={customdreamz}
            title="Custom Dreamz Motorsports"
            desc="High-energy brand site for a custom cars & bikes shop."
            href="https://customdreamzmotorsports.com"
          />
          <Card
            img={desire}
            title="The Man Women Desire"
            desc="An AI-powered self-assessment built by a woman for men aiming to level up."
            href="https://themanwomendesire.com"
          />
          <Card
            img={pairings}
            title="VinoPairings"
            desc="Simple wine pairing recommendations and ideas."
            href="https://vinopairings.com"
          />
          <Card
            img={cosmic}
            title="Cosmic Zodiac Astrology"
            desc="An astrology content hub."
            href="https://cosmiczodiacastrology.com"
          />
          <Card
            img={psych}
            title="Psychological Manipulation"
            desc="A reference site on manipulation and emotional control."
            href="https://psychological-manipulation.com"
          />
          <Card
            img={pace}
            title="Big Pace Barbershop & Beauty Salon 2"
            desc="Local barbershop + beauty salon website."
            href="https://bigpacebarbershopandbeautysalon2.com"
          />
          <Card
            img={getvabuddy}
            title="Get VA Buddy"
            desc="A no-login helper for common VA forms—print and mail with ease."
            href="https://getvabuddy.com"
          />

           <Card
      img={pwimage}
      title="Pinkerton Williams DAV Chapter 18"
      desc="A veterans’ organization site serving the community through the Disabled American Veterans program."
      href="https://pinkertonwilliams.org"
    />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <h2>Packages & Pricing</h2>
        <p className="pricing-intro">
          Clear, simple options. Need something custom? I’ll tailor a plan to your goals.
        </p>
        <div className="plans">
          <Plan
            name="Starter"
            price="$399"
            features={[
              "1–3 page custom site",
              "Mobile-friendly & fast",
              "Contact form & basic SEO",
              "1 round of revisions",
              "Launch assistance",
            ]}
            cta="Start for $399"
            mailto="mailto:agentpamelajterrell@gmail.com?subject=Starter%20Website%20($399)"
          />
          <Plan
            name="Plus"
            price="$699"
            featured
            features={[
              "Up to 6 pages",
              "Brand styling & icons",
              "On-page SEO & analytics",
              "2 rounds of revisions",
              "Basic CMS or blog option",
            ]}
            cta="Get the Plus Plan"
            mailto="mailto:agentpamelajterrell@gmail.com?subject=Plus%20Website%20($699)"
          />
          <Plan
            name="Pro"
            price="$1299+"
            features={[
              "Custom features / integrations",
              "Advanced SEO & performance",
              "Content help & strategy",
              "3+ rounds of revisions",
              "Ongoing support options",
            ]}
            cta="Request a Quote"
            mailto="mailto:agentpamelajterrell@gmail.com?subject=Pro%20Website%20(Quote)"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>What Clients Say</h2>
        <div className="testimonials-grid">
          <figure className="t-card">
            <blockquote>“Pamela delivered exactly what we needed — fast, clean, and on-brand.”</blockquote>
            <figcaption>— Alex M., Small Business Owner</figcaption>
          </figure>
          <figure className="t-card">
            <blockquote>“The process was simple and the results were beautiful. Mobile perf is night-and-day.”</blockquote>
            <figcaption>— Dana S., Nonprofit Director</figcaption>
          </figure>
          <figure className="t-card">
            <blockquote>“Great UX instincts and thoughtful polish. Highly recommend.”</blockquote>
            <figcaption>— Chris P., Small Business Owner</figcaption>
          </figure>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p className="muted">Prefer email or text? Use either — or the form below.</p>

        {/* Polished callouts */}
        <div className="contact-callouts" role="group" aria-label="Direct contact options">
          <a href="mailto:agentpamelajterrell@gmail.com" className="contact-callout" aria-label="Email Pamela Terrell">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16a2 2 0 0 1 2 2v.3l-10 6.25L2 8.3V8a2 2 0 0 1 2-2Z" />
              <path d="M22 9.7V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.7l10 6.25 10-6.25Z" />
            </svg>
            agentpamelajterrell@gmail.com
          </a>

          <a href="tel:+17069106188" className="contact-callout" aria-label="Call or text Pamela Terrell">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.48 19.48 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.16 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92Z" />
            </svg>
            (706) 910-6188
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot */}
          <input
            type="text"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message (suggest a few times for a quick call)"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>

        {status && <p className="status" role="status">{status}</p>}
      </section>

      <footer className="mini-footer">
        <div className="foot-links">
          <a href="mailto:agentpamelajterrell@gmail.com">Email</a>
          <a href="tel:+17069106188">Call/Text</a>
          <a href="#pricing">Pricing</a>
        </div>
        <p className="fine">© {new Date().getFullYear()} Pamela Terrell</p>
      </footer>
    </div>
  );
}

/* Small presentational components */
function Card({ img, title, desc, href }) {
  return (
    <article className="card">
      <img src={img} alt={title} loading="lazy" />
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">{desc}</p>
        <a className="visit" href={href} target="_blank" rel="noopener noreferrer">Visit Site</a>
      </div>
    </article>
  );
}

function Plan({ name, price, features, cta, mailto, featured }) {
  return (
    <div className={`plan${featured ? " featured" : ""}`}>
      {featured && <div className="badge">Most Popular</div>}
      <h3>{name}</h3>
      <div className="price">{price}</div>
      <ul className="features">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <a className="plan-btn" href={mailto}>{cta}</a>
    </div>
  );
}
