import React from "react";
import "./Work.css";
import Footer from "../components/Footer";

/* Assets */
import pjtImage from "../assets/PJT.jpg";
import lifestories from "../assets/LifeStories.png";
import beforeandafter from "../assets/beforeandafter.png";
import carepathwell from "../assets/carepath.png";
import customdreamz from "../assets/CustomDreamz.png";
import desire from "../assets/desire.jpg";
import pairings from "../assets/pairings.png";
import cosmic from "../assets/cosmic.png";
import psych from "../assets/psych.png";
import pace from "../assets/pace.png";
import getvabuddy from "../assets/getvabuddy.jpg";
import pwimage from "../assets/PW.jpg";
import ptlogo from "../assets/ptlogo.png";
import senses from "../assets/senses.png";
import medicareBeforeSwitch from "../assets/medicare-before-you-switch.png";

export default function Work() {
  return (
    <div className="work-root">
      <header className="mini-header">
        <a href="/" className="crumb" aria-label="Back to landing">
          ← Home
        </a>

        <div className="brand-group">
          <img src={ptlogo} alt="PT logo" className="brand-logo" />
          <span className="brand-sub">Stabile USA</span>
        </div>
      </header>

      <section className="work-hero">
        <p className="eyebrow">Stabile USA Portfolio</p>
        <h1>Digital Ventures</h1>
        <p className="intro">
          A portfolio of independently built platforms exploring storytelling,
          behavior, and focused digital interaction.
        </p>
      </section>

      

      <section id="about" className="about">
        <img
          src={pjtImage}
          alt="Portrait of Pamela Terrell"
          className="about-photo"
          loading="lazy"
        />

        <div className="about-copy">
          <h2>About</h2>
          <p>
            I design, build, and operate independent digital platforms through
            Stabile USA, with a focus on human behavior, identity, and meaningful
            interaction.
          </p>
          <p>
            My work combines thoughtful user experience, performance-focused
            engineering, and narrative structure to create intentional, lasting
            digital products.
          </p>
        </div>
      </section>

      <section id="ventures" className="portfolio">
        <h2>Ventures</h2>
        <p className="muted">
          A collection of platforms and niche products created and maintained
          independently.
        </p>

        {/* Featured Project — Night Listener */}
<section className="featured">
  <div className="featured-inner">
    <div className="featured-copy">
      <p className="eyebrow">Featured Project</p>

      <h2>Night Listener</h2>

      <p className="featured-desc">
        A calm, story-driven audio experience exploring human behavior,
        relationships, and the quiet moments we replay.
      </p>

      <div className="featured-actions">
        <a
          href="https://stabileusa.com"
          target="_blank"
          rel="noopener noreferrer"
          className="featured-btn primary"
        >
          Visit Night Listener
        </a>

        <a
          href="https://stabileusa.com/listen"
          target="_blank"
          rel="noopener noreferrer"
          className="featured-btn"
        >
          Listen
        </a>
      </div>
    </div>

    <div className="featured-media">
      <img
        src="/images/night-listener-preview.png"
        alt="Night Listener preview"
        className="featured-image"
      />
    </div>
  </div>
</section>

<p className="featured-note">
  A Stabile USA product
</p>

        <div className="grid">
          <Card
            img={lifestories}
            title="Life Stories Now"
            category="Storytelling Platform"
            desc="A narrative-driven platform exploring anonymous memory, reflection, and shared experience."
            href="https://lifestoriesnow.com"
          />

          <Card
            img={pairings}
            title="VinoPairings"
            category="Lifestyle Utility"
            desc="A streamlined tool for discovering complementary wine pairings."
            href="https://vinopairings.com"
          />

          <Card
          img={medicareBeforeSwitch}
          title="Medicare Before You Switch"
          category="Educational Resource"
          desc="A plain-language Medicare education site helping seniors and families review ads, benefits, plan tradeoffs, and coverage questions before switching."
          href="https://medicarebeforeyouswitch.com"
          />

          <Card
            img={psych}
            title="Psychological Manipulation"
            category="Educational Resource"
            desc="A reference exploring influence, emotional patterns, and behavioral dynamics."
            href="https://psychological-manipulation.com"
          />

          <Card
            img={carepathwell}
            title="CarePathWell"
            category="Health Platform"
            desc="A centralized intake and scheduling experience for behavioral health coordination."
            href="https://carepathwell.com"
          />

          <Card
            img={beforeandafter}
            title="Before And After Vault"
            category="Image Archive"
            desc="A private and community-based platform for documenting transformation."
            href="https://beforeandaftervault.com"
          />

          <Card
            img={cosmic}
            title="Cosmic Zodiac Astrology"
            category="Content Platform"
            desc="An astrology-based experience focused on symbolic interpretation."
            href="https://cosmiczodiacastrology.com"
          />

          

          <Card
            img={pace}
            title="Big Pace Barbershop & Beauty Salon 2"
            category="Local Business"
            desc="A streamlined site supporting visibility and appointment flow."
            href="https://bigpacebarbershopandbeautysalon2.com"
          />

          <Card
            img={pwimage}
            title="Pinkerton Williams DAV Chapter 18"
            category="Community Organization"
            desc="A digital hub supporting veterans and outreach initiatives."
            href="https://pinkertonwilliams.org"
          />

          <Card
            img={getvabuddy}
            title="Get VA Buddy"
            category="Utility Tool"
            desc="A simplified helper for navigating VA forms without login barriers."
            href="https://getvabuddy.com"
          />

          <Card
            img={desire}
            title="The Man Women Desire"
            category="Behavioral Assessment"
            desc="An AI-assisted tool exploring attraction, confidence, and relational dynamics."
            href="https://themanwomendesire.com"
          />

          <Card
            img={senses}
            title="Sensuality Quiz"
            category="Interactive Experience"
            desc="A guided quiz exploring connection, awareness, and emotional presence."
            href="https://sensualityquiz.com"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Card({ img, title, category, desc, href }) {
  return (
    <article className="card">
      <img src={img} alt={title} loading="lazy" />

      <div className="card-body">
        <h3>{title}</h3>
        <p className="meta">{category}</p>
        <p className="muted">{desc}</p>
        <a
          className="visit"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore →
        </a>
      </div>
    </article>
  );
}