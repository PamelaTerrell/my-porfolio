import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile((current) => !current);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((current) => !current);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <RouterLink
        to="/"
        className="logo"
        onClick={closeMobileMenu}
        aria-label="Pamela J. Terrell home"
      >
        Pamela J. Terrell
      </RouterLink>

      <ul className={`nav-links ${isMobile ? "active" : ""}`}>
        <li>
          <ScrollLink
            to="home"
            smooth
            duration={500}
            offset={-80}
            onClick={closeMobileMenu}
          >
            Home
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="about"
            smooth
            duration={500}
            offset={-80}
            onClick={closeMobileMenu}
          >
            About
          </ScrollLink>
        </li>

        <li>
          <RouterLink to="/projects" onClick={closeMobileMenu}>
            Portfolio
          </RouterLink>
        </li>

        <li>
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-80}
            onClick={closeMobileMenu}
          >
            Contact
          </ScrollLink>
        </li>

        <li>
          <RouterLink to="/stabile-usa" onClick={closeMobileMenu}>
            Stabile USA
          </RouterLink>
        </li>
      </ul>

      <div className="navbar-controls">
        <button
          type="button"
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          title={isDarkMode ? "Light mode" : "Dark mode"}
        >
          {isDarkMode ? "🌞" : "🌙"}
        </button>

        <button
          type="button"
          className={`hamburger ${isMobile ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label={isMobile ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobile}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;