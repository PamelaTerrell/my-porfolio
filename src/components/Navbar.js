import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle for the mobile menu
  const toggleMobileMenu = () => setIsMobile(!isMobile);

  // Toggle for dark/light mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo">pamela J terrell</div>

      {/* Navbar Links */}
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '🌞' : '🌙'}
      </div>
    </nav>
  );
};

export default Navbar;
