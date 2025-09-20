'use client';

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";

/* Assets */
import pwImage from '../assets/PW.jpg';
import pairings from '../assets/pairings.png';
import cosmic from '../assets/cosmic.png';
import psych from '../assets/psych.png';
import pace from '../assets/pace.png';
import lifestories from '../assets/LifeStories.png';
import customdreamz from '../assets/CustomDreamz.png';
import beforeandafter from '../assets/beforeandafter.png';
import getvabuddy from '../assets/getvabuddy.jpg';
import pjtImage from '../assets/PJT.jpg'; // used in About (not in Hero)
import desire from '../assets/desire.jpg';

const Home = () => {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    AOS.init({
      duration: prefersReduced ? 0 : 800,
      easing: "ease-in-out",
      once: true,
      disable: prefersReduced,
    });
  }, []);

  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xzzvqbpw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // includes honeypot
      });
      if (response.ok) {
        setStatus("✅ Your message has been sent! I will get back to you shortly.");
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
    <div className="home">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Pamela Terrell",
            "jobTitle": "Web Developer & UX Designer",
            "url": "https://pamelajterrell.com",
            "email": "mailto:agentpamelajterrell@gmail.com",
            "telephone": "+1-706-910-6188",
            "sameAs": ["https://www.linkedin.com/in/pamela-j-terrell"],
            "makesOffer": [{
              "@type": "Offer",
              "name": "Starter Website",
              "price": "399",
              "priceCurrency": "USD",
              "description": "1–3 page custom, mobile-friendly site with contact form and basic SEO."
            }]
          })
        }}
      />

      {/* Hero (Polished, small-biz friendly, no image) */}
      <section className="hero hero-corporate">
        <div className="hero-shell hero-single" data-aos="fade-up">
          <div className="hero-left">
            <p className="eyebrow">For small teams &amp; solo founders</p>

            <h1 className="hero-title">
              A clean, credible website—without the agency overhead
            </h1>

            <p className="hero-subtitle">
              I build accessible, fast sites that help local businesses, creators, and early startups
              look professional and win trust online.
            </p>

            <ul className="hero-points" role="list" aria-label="What you can expect">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Transparent pricing &amp; scope
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Fast turnaround, clear comms
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Mobile, SEO &amp; accessibility basics built in
              </li>
            </ul>

            <div className="cta-row">
              <Link to="contact" spy smooth offset={-70} duration={500} className="btn btn-primary" aria-label="Request a quote">
                Get a Free Quote
              </Link>
              <Link to="portfolio" spy smooth offset={-70} duration={500} className="btn btn-muted">
                See Recent Work
              </Link>
              <Link to="pricing" spy smooth offset={-70} duration={500} className="btn btn-link">
                View Pricing
              </Link>
            </div>

            <div className="trust-inline" aria-label="Trust indicators">
              <span>Local-friendly</span>
              <span>Creator-ready</span>
              <span>Straightforward</span>
            </div>

            <p className="micro-note">Friendly 1:1 process • No retainers required</p>
          </div>
        </div>

        <Link to="about" spy smooth offset={-70} duration={500} className="scroll-down corporate" aria-label="Scroll to About">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4v16m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Learn more</span>
        </Link>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="about-content">
          <img
            src={pjtImage}
            alt="Portrait of Pamela Terrell"
            className="about-img personal-photo"
            data-aos="fade-left"
            loading="lazy"
          />
          <div className="about-text" data-aos="fade-up">
            <h2>About Me</h2>
            <p>
              I’m a web developer and UI/UX designer, dedicated to creating responsive, user-friendly websites
              that deliver both excellent functionality and a seamless user experience.
            </p>
            <p>
              I specialize in clean, modern interfaces and high-performance websites that work flawlessly across all devices.
              Whether you need a sleek design, optimized performance, or both, I can bring your digital projects to life.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">
        <h2 data-aos="fade-up">Portfolio</h2>
        <p data-aos="fade-up">Here's a selection of some of the projects I've created:</p>
        <div className="project-list">
          <div className="project" data-aos="fade-up">
            <img src={lifestories} alt="Life Stories Now — anonymous life experiences platform" loading="lazy" />
            <h3>Life Stories Now</h3>
            <p>A storytelling platform where people anonymously share meaningful life experiences.</p>
            <a href="https://lifestoriesnow.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={beforeandafter} alt="BeforeAndAfterVault — upload and share before/after images" loading="lazy" />
            <h3>Before And After Vault</h3>
            <p>A platform for uploading and sharing before-and-after photos, built with user authentication to support personal image vaults and a community showcase.</p>
            <a href="https://beforeandaftervault.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={customdreamz} alt="Custom Dreamz Motorsports — bold, high-energy site" loading="lazy" />
            <h3>Custom Dreamz Motorsports</h3>
            <p>A bold, high-energy site for a motorsports brand that builds custom cars and bikes.</p>
            <a href="https://customdreamzmotorsports.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={desire} alt="The Man Women Desire — AI-powered self-assessment" loading="lazy" />
            <h3>The Man Women Desire</h3>
            <p>An AI-powered self-assessment quiz built by a woman to challenge men on whether they embody the traits women truly desire.</p>
            <a href="https://themanwomendesire.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={pairings} alt="VinoPairings — wine pairing recommendations" loading="lazy" />
            <h3>VinoPairings</h3>
            <p>A website dedicated to wine pairing recommendations.</p>
            <a href="https://vinopairings.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={cosmic} alt="Cosmic Zodiac Astrology — astrology insights" loading="lazy" />
            <h3>Cosmic Zodiac Astrology</h3>
            <p>A platform offering astrology insights and content.</p>
            <a href="https://cosmiczodiacastrology.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={psych} alt="Psychological Manipulation — scholarly resource" loading="lazy" />
            <h3>Psychological Manipulation</h3>
            <p>A scholarly resource on psychological manipulation and emotional control.</p>
            <a href="https://psychological-manipulation.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={pace} alt="Big Pace Barbershop and Beauty Salon 2 — local business site" loading="lazy" />
            <h3>Big Pace Barbershop and Beauty Salon 2</h3>
            <p>A site for a local barbershop and beauty salon.</p>
            <a href="https://bigpacebarbershopandbeautysalon2.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={getvabuddy} alt="Get VA Buddy — VA forms helper tool" loading="lazy" />
            <h3>Get VA Buddy</h3>
            <p>A simple tool that helps veterans access commonly used VA forms and mail them in — no login or complex online portals required.</p>
            <a href="https://getvabuddy.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={pwImage} alt="Pinkerton Williams DAV Chapter 18 — veterans nonprofit site" loading="lazy" />
            <h3>Pinkerton Williams DAV Chapter 18</h3>
            <p>A website for a chapter of the Disabled American Veterans (DAV) organization.</p>
            <a href="https://pinkertonwilliams.org" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>
        </div>
      </section>

      {/* Work With Me */}
      <section id="work" className="work-with-me" data-aos="fade-up">
        <h2>💼 Work With Me</h2>
        <p>
          Need a beautiful, functional website that feels uniquely <em>you</em>?
          Whether you're a small business, nonprofit, or creative entrepreneur, I build modern, responsive websites that make an impact.
        </p>
        <p>
          I blend aesthetics with strategy — from concept to launch — so your online presence not only looks amazing, but works beautifully too.
        </p>
        <p>
          Let’s bring your ideas to life →{" "}
          <a href="mailto:agentpamelajterrell@gmail.com" className="email-link">agentpamelajterrell@gmail.com</a>
        </p>
        <p>
          Or call/text: <a href="tel:+17069106188">(706) 910-6188</a>
          <br />
          <em style={{ fontSize: "0.9rem", color: "#888" }}>
            Note: On Mac or iPhone, clicking this may open FaceTime by default. Please call or text directly using your phone.
          </em>
        </p>
        <p className="trust-strip" aria-label="Trust indicators">
          Launches include: performance tuning, basic SEO, analytics setup, and post-launch support options.
        </p>
      </section>

      {/* ⭐ Testimonials */}
      <section id="testimonials" className="testimonials" data-aos="fade-up">
        <h2>What Clients Say</h2>
        <div className="testimonials-grid">
          <figure className="testimonial-card">
            <blockquote className="testimonial-quote">
              “Pamela delivered exactly what we needed — fast, clean, and on-brand. Our site finally feels legit.”
            </blockquote>
            <figcaption className="testimonial-author">— Alex M., Small Business Owner</figcaption>
          </figure>

          <figure className="testimonial-card">
            <blockquote className="testimonial-quote">
              “The process was simple and the results were beautiful. Mobile performance is night-and-day better.”
            </blockquote>
            <figcaption className="testimonial-author">— Dana S., Nonprofit Director</figcaption>
          </figure>

          <figure className="testimonial-card">
            <blockquote className="testimonial-quote">
              “Clear communication, great UX instincts, and thoughtful polish. Highly recommend working with Pamela.”
            </blockquote>
            <figcaption className="testimonial-author">— Chris P., Small Business Owner</figcaption>
          </figure>
        </div>

        <Link to="contact" spy smooth offset={-70} duration={500} className="cta-btn tertiary-btn testimonial-cta" aria-label="Go to contact form">
          Get a Free Quote
        </Link>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing" data-aos="fade-up">
        <h2>Packages &amp; Pricing</h2>
        <p className="pricing-intro">
          Clear, simple pricing. No hidden fees. Need something custom? I’ll tailor a plan to your goals.
        </p>

        <div className="pricing-grid" role="list">
          <div className="plan" role="listitem">
            <h3>Starter</h3>
            <div className="price" aria-label="Starter price">$399</div>
            <ul className="features">
              <li>1–3 page custom site</li>
              <li>Mobile-friendly &amp; fast</li>
              <li>Contact form &amp; basic SEO</li>
              <li>1 round of revisions</li>
              <li>Launch assistance</li>
            </ul>
            <a
              href="mailto:agentpamelajterrell@gmail.com?subject=Starter%20Website%20($399)"
              className="cta-btn plan-btn"
            >
              Start for $399
            </a>
          </div>

          <div className="plan recommended" role="listitem" aria-label="Most popular plan">
            <div className="badge">Most Popular</div>
            <h3>Plus</h3>
            <div className="price" aria-label="Plus price">$699</div>
            <ul className="features">
              <li>Up to 6 pages</li>
              <li>Brand styling &amp; icons</li>
              <li>On-page SEO &amp; analytics</li>
              <li>2 rounds of revisions</li>
              <li>Basic CMS or blog option</li>
            </ul>
            <a
              href="mailto:agentpamelajterrell@gmail.com?subject=Plus%20Website%20($699)"
              className="cta-btn plan-btn"
            >
              Get the Plus Plan
            </a>
          </div>

          <div className="plan" role="listitem">
            <h3>Pro</h3>
            <div className="price" aria-label="Pro price">$1299+</div>
            <ul className="features">
              <li>Custom features / integrations</li>
              <li>Advanced SEO &amp; performance</li>
              <li>Content help &amp; strategy</li>
              <li>3+ rounds of revisions</li>
              <li>Ongoing support options</li>
            </ul>
            <a
              href="mailto:agentpamelajterrell@gmail.com?subject=Pro%20Website%20(Quote)"
              className="cta-btn plan-btn"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq" data-aos="fade-up">
        <h2>FAQs</h2>
        <details>
          <summary>What’s included in the $399 Starter site?</summary>
          <p>Up to 3 pages, mobile-friendly design, contact form, basic SEO, and help launching your site.</p>
        </details>
        <details>
          <summary>How long does a typical project take?</summary>
          <p>Most Starter sites launch within 1–2 weeks once I have your content and assets.</p>
        </details>
        <details>
          <summary>Do you offer ongoing support?</summary>
          <p>Yes—optional monthly care plans cover updates, backups, and small content tweaks.</p>
        </details>
      </section>

      {/* Contact */}
      <section id="contact" className="contact" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>If you'd like to work with me or have any questions, feel free to reach out!</p>
        <p>
          Or reach me directly at:{" "}
          <a href="mailto:agentpamelajterrell@gmail.com" className="email-link">
            agentpamelajterrell@gmail.com
          </a>
        </p>
        <p>
          Call or text: <a href="tel:+17069106188">(706) 910-6188</a>
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot field */}
          <input
            type="text"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <label className="sr-only" htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="sr-only" htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="sr-only" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message (feel free to suggest a few times for a quick call)"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          ></textarea>

          <button type="submit" className="cta-btn" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p className="mt-4 text-green-600 font-semibold" role="status">{status}</p>}
      </section>

      {/* Footer */}
      <footer className="site-footer">
        
        <nav aria-label="Footer">
          <a href="mailto:agentpamelajterrell@gmail.com">Email</a>
          <a href="tel:+17069106188">Call/Text</a>
          <a href="#work">Work With Me</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
