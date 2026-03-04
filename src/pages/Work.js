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

export default function Work() {
  return (
    <div className="work-root">
      {/* Header */}
      <header className="mini-header">
        <a href="/" className="crumb" aria-label="Back to landing">
          ← Home
        </a>
        <img src={ptlogo} alt="PT logo" className="brand-logo" />
      </header>

      {/* Hero */}
      <section className="work-hero">
        <h1>Digital Ventures</h1>
        <p className="intro">
          Independent platforms and experiments built at the intersection of
          storytelling, psychology, and technology.
        </p>
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
          <h2>About</h2>
          <p>
            I design, build, and launch independent digital platforms focused on
            human behavior, identity, and meaningful interaction online.
          </p>
          <p>
            My work blends thoughtful UX, performance-driven engineering, and
            narrative structure to create focused, intentional digital
            experiences.
          </p>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="portfolio">
        <h2>Ventures</h2>
        <p className="muted">
          A collection of platforms and niche products created and operated
          independently.
        </p>

        <div className="grid">
          <Card
            img={lifestories}
            title="Life Stories Now"
            category="Storytelling Platform"
            desc="A narrative-driven platform exploring anonymous memory, reflection, and shared life experiences."
            href="https://lifestoriesnow.com"
          />

          <Card
            img={pairings}
            title="VinoPairings"
            category="Lifestyle Utility"
            desc="A lightweight recommendation tool for discovering complementary wine pairings."
            href="https://vinopairings.com"
          />

          <Card
            img={psych}
            title="Psychological Manipulation"
            category="Educational Resource"
            desc="A research-focused reference exploring emotional control, influence patterns, and behavioral tactics."
            href="https://psychological-manipulation.com"
          />

          <Card
            img={carepathwell}
            title="CarePathWell"
            category="Health Workflow Platform"
            desc="A streamlined intake and scheduling experience designed to centralize behavioral health coordination."
            href="https://carepathwell.com"
          />

          

          <Card
            img={beforeandafter}
            title="Before And After Vault"
            category="Image Archive Platform"
            desc="A private and community-based vault for documenting personal transformations."
            href="https://beforeandaftervault.com"
          />

          

          <Card
            img={cosmic}
            title="Cosmic Zodiac Astrology"
            category="Content Hub"
            desc="An astrology-based content platform centered on interpretation and symbolic exploration."
            href="https://cosmiczodiacastrology.com"
          />

          <Card
            img={customdreamz}
            title="Custom Dreamz Motorsports"
            category="Brand Platform"
            desc="A high-energy digital presence supporting custom automotive craftsmanship."
            href="https://customdreamzmotorsports.com"
          />

          <Card
            img={pace}
            title="Big Pace Barbershop & Beauty Salon 2"
            category="Local Business Presence"
            desc="A streamlined website supporting appointment visibility and brand presence."
            href="https://bigpacebarbershopandbeautysalon2.com"
          />

          <Card
            img={pwimage}
            title="Pinkerton Williams DAV Chapter 18"
            category="Community Organization"
            desc="A digital hub supporting veterans and community outreach initiatives."
            href="https://pinkertonwilliams.org"
          />

            <Card
            img={getvabuddy}
            title="Get VA Buddy"
            category="Government Utility Tool"
            desc="A simplified helper for navigating common VA forms without login barriers."
            href="https://getvabuddy.com"
          />

           <Card
            img={desire}
            title="The Man Women Desire"
            category="Behavioral Self-Assessment"
            desc="An AI-enhanced assessment tool examining attraction, confidence, and relational psychology."
            href="https://themanwomendesire.com"
          />

           <Card
            img={senses}
            title="Sensuality Quiz"
            category="Interactive Experience"
            desc="A guided quiz exploring sensual awareness, connection styles, and emotional presence."
            href="https://sensualityquiz.com"
          />

        </div>
      </section>

      <Footer />
    </div>
  );
}

/* Card Component */
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
