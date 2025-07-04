import React from "react";
import { Link } from "react-scroll"; 
import "./Home.css";
import pwImage from '../assets/PW.jpg'; 
import pairings from '../assets/pairings.png'
import cosmic from '../assets/cosmic.png'
import psych from '../assets/psych.png'
import pace from '../assets/pace.png'
import deskImage from '../assets/desk.jpg'; 


const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Pamela</h1>
          <p className="hero-subtitle">
            A passionate web developer crafting beautiful and functional websites
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
          </div>
        </div>
        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="arrow">↓</div>
        </div>
      </section>

      <section id="about" className="about">
  <div className="about-content">
    <img src={deskImage} alt="Desk Setup" className="about-img" />
    <div className="about-text">
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


      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <p>Here's a selection of some of the projects I've created:</p>
        <div className="project-list">
          {/* Project 1 - Vinopairings */}
          <div className="project">
            <img src={pairings} alt="VinoPairings" />
            <h3>VinoPairings</h3>
            <p>A website dedicated to wine pairing recommendations.</p>
            <a href="https://vinopairings.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          {/* Project 2 - CosmicZodiacAstrology */}
          <div className="project">
            <img src={cosmic} alt="Cosmic Zodiac Astrology" />
            <h3>Cosmic Zodiac Astrology</h3>
            <p>A platform offering astrology insights and content.</p>
            <a href="https://cosmiczodiacastrology.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          {/* Project 3 - Psychological Manipulation */}
          <div className="project">
            <img src={psych} alt="Psychological Manipulation" />
            <h3>Psychological Manipulation</h3>
            <p>A scholarly resource on psychological manipulation and emotional control.</p>
            <a href="https://psychological-manipulation.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          {/* Project 4 - Big Pace Barber Shop and Beauty Salon */}
          <div className="project">
            <img src={pace} alt="Big Pace Barbershop and Beauty Salon 2" />
            <h3>Big Pace Barbershop and Beauty Salon 2</h3>
            <p>A site for a local barbershop and beauty salon.</p>
            <a href="https://bigpacebarbershopandbeautysalon2.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>

          {/* Project 5 - Pinkerton Williams */}
          <div className="project">
            <img src={pwImage} alt="Pinkerton Williams" /> {/* Use imported image */}
            <h3>Pinkerton Williams DAV Chapter 18</h3>
            <p>A website for a chapter of the Disabled American Veterans (DAV) organization.</p>
            <a href="https://pinkertonwilliams.org" target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to work with me or have any questions, feel free to reach out!</p>

        {/* Displaying Email */}
        <p>Or reach me directly at: 
          <a href="mailto:pammyhoney@yahoo.com" className="email-link">pammyhoney@yahoo.com</a>
        </p>

        {/* You can implement a contact form here */}
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
