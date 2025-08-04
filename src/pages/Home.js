import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";


import "./Home.css";
import pwImage from '../assets/PW.jpg'; 
import pairings from '../assets/pairings.png';
import cosmic from '../assets/cosmic.png';
import psych from '../assets/psych.png';
import pace from '../assets/pace.png';
import lifestories from '../assets/LifeStories.png';
import customdreamz from '../assets/CustomDreamz.png';
import deskImage from '../assets/desk.jpg'; 
import getvabuddy from '../assets/getvabuddy.jpg';
import pjtImage from '../assets/PJT.jpg';
import desire from '../assets/desire.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Need a Website That Stands Out?</h1>
          <p className="hero-subtitle">
            I'm Pamela — a web developer and UX designer who builds beautiful, high-performing websites for small businesses, nonprofits, and creatives.
          </p>
          <p className="hero-subtitle secondary">
            Whether you're starting fresh or need a revamp, I deliver custom sites that look amazing and work perfectly across devices.
          </p>
          <div className="cta-buttons">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cta-btn"
            >
              View My Work
            </Link>
            <a
              href="mailto:agentpamelajterrell@gmail.com"
              className="cta-btn secondary-btn"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <img
            src={pjtImage}
            alt="Pamela Terrell"
            className="about-img personal-photo"
            data-aos="fade-left"
          />
          <div className="about-text" data-aos="fade-up">
            <h2>About Me</h2>
            <p>
              I’m a web developer and UI/UX designer, dedicated to creating responsive, user-friendly websites that deliver both 
              excellent functionality and a seamless user experience. With a strong focus on design and usability, I craft websites 
              that are not only visually appealing but also intuitive and easy to navigate.
            </p>
            <p>
              I specialize in designing clean, modern interfaces and developing high-performance websites that work flawlessly across 
              all devices. Whether you need a sleek design, optimized performance, or both, I’m here to bring your digital projects to life.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2 data-aos="fade-up">Portfolio</h2>
        <p data-aos="fade-up">Here's a selection of some of the projects I've created:</p>
        <div className="project-list">
          <div className="project" data-aos="fade-up">
            <img src={lifestories} alt="Life Stories Now" />
            <h3>Life Stories Now</h3>
            <p>A storytelling platform where people anonymously share meaningful life experiences.</p>
            <a href="https://lifestoriesnow.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={customdreamz} alt="Custom Dreamz Motorsports" />
            <h3>Custom Dreamz Motorsports</h3>
            <p>A bold, high-energy site for a motorsports brand that builds custom cars and bikes.</p>
            <a href="https://customdreamzmotorsports.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={desire} alt="The Man Women Desire" />
            <h3>The Man Women Desire</h3>
            <p>An AI-powered self-assessment quiz built by a woman to challenge men on whether they embody the traits women truly desire — confidence, care, character, and more..</p>
            <a href="https://themanwomendesire.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={pairings} alt="VinoPairings" />
            <h3>VinoPairings</h3>
            <p>A website dedicated to wine pairing recommendations.</p>
            <a href="https://vinopairings.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={cosmic} alt="Cosmic Zodiac Astrology" />
            <h3>Cosmic Zodiac Astrology</h3>
            <p>A platform offering astrology insights and content.</p>
            <a href="https://cosmiczodiacastrology.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={psych} alt="Psychological Manipulation" />
            <h3>Psychological Manipulation</h3>
            <p>A scholarly resource on psychological manipulation and emotional control.</p>
            <a href="https://psychological-manipulation.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={pace} alt="Big Pace Barbershop and Beauty Salon 2" />
            <h3>Big Pace Barbershop and Beauty Salon 2</h3>
            <p>A site for a local barbershop and beauty salon.</p>
            <a href="https://bigpacebarbershopandbeautysalon2.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          <div className="project" data-aos="fade-up">
            <img src={getvabuddy} alt="Get VA Buddy" />
            <h3>Get VA Buddy</h3>
            <p>A simple tool that helps veterans access commonly used VA forms and mail them in — no login or complex online portals required.</p>
            <a href="https://getvabuddy.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>


          <div className="project" data-aos="fade-up">
            <img src={pwImage} alt="Pinkerton Williams" />
            <h3>Pinkerton Williams DAV Chapter 18</h3>
            <p>A website for a chapter of the Disabled American Veterans (DAV) organization.</p>
            <a href="https://pinkertonwilliams.org" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>
        </div>
      </section>

      {/* Work With Me Section */}
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
      </section>

      {/* Why Choose Me Section */}
      <section id="why-choose-me" className="why-choose-me" data-aos="fade-up">
        <h2>Why Choose Me?</h2>
        <p>
          I provide the same high-quality, professional web design and development services as larger agencies — but with a personalized touch and at a fraction of the cost.
        </p>
        <ul>
          <li><strong>Affordable pricing:</strong> No huge agency fees or hidden costs.</li>
          <li><strong>Personalized service:</strong> Direct communication with me throughout your project.</li>
          <li><strong>Fast turnaround:</strong> I work efficiently to get your site live quickly.</li>
          <li><strong>Custom solutions:</strong> Tailored designs that fit your unique brand and goals.</li>
        </ul>
        <p>
          Ready to get started on a website that looks amazing without breaking the bank? 
          <a href="mailto:agentpamelajterrell@gmail.com" className="email-link"> Let’s chat!</a>
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>If you'd like to work with me or have any questions, feel free to reach out!</p>

        <p>
          Or reach me directly at: 
          <a href="mailto:agentpamelajterrell@gmail.com" className="email-link"> agentpamelajterrell@gmail.com</a>
        </p>

        <p>
          Call or text: <a href="tel:+17069106188">(706) 910-6188</a><br />
          <em style={{ fontSize: "0.9rem", color: "#888" }}>
           Call or text.
          </em>
        </p>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="cta-btn">Send Message</button>
        </form>
      </section>

      
    </div>
  );
};

export default Home;
