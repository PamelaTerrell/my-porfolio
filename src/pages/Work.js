import React from "react";
import "./Work.css";
import Footer from "../components/Footer";

/* Assets */
import pjtImage from "../assets/PJT.jpg";
import lifestories from "../assets/LifeStories.png";
import beforeandafter from "../assets/beforeandafter.png";
import carepathwell from "../assets/carepath.png";
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
import redLipsticks from "../assets/redlipsticks.png";
import superCleaningLady from "../assets/supercleaninglady.png";
import crimeRecordingsPreview from "../assets/crime-recordings-preview.png";

export default function Work() {
  return (
    <div className="work-root">
      <header className="mini-header">
        <a href="/" className="crumb" aria-label="Back to landing page">
          ← Home
        </a>

        <div className="brand-group">
          <img src={ptlogo} alt="Pamela Terrell logo" className="brand-logo" />
          <span className="brand-sub">Stabile USA</span>
        </div>
      </header>

      <section className="work-hero">
        <p className="eyebrow">Stabile USA Portfolio</p>

        <h1>Digital Ventures</h1>

        <p className="intro">
          A portfolio of independently built platforms exploring storytelling,
          behavior, education, community, lifestyle, and focused digital
          interaction.
        </p>
      </section>

      <section className="hire-strip" aria-labelledby="hire-title">
        <p className="eyebrow">Available for select projects</p>

        <h2 id="hire-title">
          Need a website, refresh, or custom digital tool?
        </h2>

        <p>
          I build polished websites, landing pages, story platforms, forms,
          membership experiences, and simple web apps for small businesses,
          nonprofits, creators, and community projects.
        </p>

        <div className="hire-actions">
          <a href="/work-with-me" className="hire-btn primary">
            Work With Me
          </a>

          <a href="#ventures" className="hire-btn">
            View My Work
          </a>
        </div>
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
            I design, build, and maintain independent digital platforms through
            Stabile USA, including websites, story-driven products, educational
            tools, community resources, lifestyle brands, and interactive web
            experiences.
          </p>

          <p>
            My work combines thoughtful user experience, clear content
            structure, performance-focused development, and practical tools
            that help people share, learn, connect, and take action.
          </p>
        </div>
      </section>

      <section id="ventures" className="portfolio">
        <h2>Ventures</h2>

        <p className="muted">
          A collection of platforms and niche products created and maintained
          independently.
        </p>

        <div className="featured-projects">
          {/* Featured Project — Crime Recordings */}
          <section
            className="featured"
            aria-labelledby="crime-recordings-title"
          >
            <div className="featured-inner">
              <div className="featured-copy">
                <p className="eyebrow">Featured Full-Stack Project</p>

                <h2 id="crime-recordings-title">Crime Recordings</h2>

                <p className="featured-desc">
                  A full-stack true-crime public-recordings archive built with
                  secure authentication, structured case data, audio and
                  document management, subscription-based access, editorial
                  tools, and Cloudflare-backed delivery.
                </p>

                

                <div className="featured-actions">
                  <a
                    href="https://crimerecordings.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-btn primary"
                  >
                    Visit Crime Recordings
                  </a>
                </div>
              </div>

              <div className="featured-media">
                <img
                  src={crimeRecordingsPreview}
                  alt="Crime Recordings website preview"
                  className="featured-image"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <p className="featured-note">
            An independent Stabile USA venture
          </p>

          {/* Featured Project — Night Listener */}
          <section className="featured" aria-labelledby="night-listener-title">
            <div className="featured-inner">
              <div className="featured-copy">
                <p className="eyebrow">Featured Storytelling Project</p>

                <h2 id="night-listener-title">Night Listener</h2>

                <p className="featured-desc">
                  A calm, story-driven audio experience exploring human
                  behavior, relationships, and the quiet moments we replay.
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
                  alt="Night Listener website preview"
                  className="featured-image"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <p className="featured-note">A Stabile USA product</p>
        </div>

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
            category="AI-Powered Lifestyle Utility"
            desc="A wine-pairing platform featuring Viv, an AI-powered virtual sommelier built with the OpenAI API."
            href="https://vinopairings.com"
          />

          <Card
            img={redLipsticks}
            title="RedLipsticks.com"
            category="Beauty and Lifestyle"
            desc="A bold beauty platform celebrating red lipstick, personal style, confidence, product discoveries, and timeless glamour."
            href="https://redlipsticks.com"
          />

          <Card
            img={superCleaningLady}
            title="Super Cleaning Lady"
            category="Home and Lifestyle"
            desc="A playful home-care platform offering cleaning motivation, room rescue missions, sparkle tricks, and real-life resets."
            href="https://supercleaninglady.com"
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
      <img src={img} alt={`${title} website preview`} loading="lazy" />

      <div className="card-body">
        <h3>{title}</h3>

        <p className="meta">{category}</p>

        <p className="muted">{desc}</p>

        <a
          className="visit"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Explore ${title}`}
        >
          Explore →
        </a>
      </div>
    </article>
  );
}