import React from "react";
import "./Footer.css";
import ptlogo from "../assets/ptlogo.png";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        background: "black",
        color: "#f0f9f8",
        padding: "2rem 1.5rem",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="footer-content"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* CTA */}
        <p
          className="footer-cta"
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            fontWeight: "600",
          }}
        >
          Ready to build something amazing together?{" "}
          <a
            href="mailto:agentpamelajterrell@gmail.com"
            className="footer-email"
            style={{
              color: "#d0f0e8",
              textDecoration: "underline",
              fontWeight: "700",
            }}
          >
            Let’s connect!
          </a>
        </p>

        {/* Social Links */}
        <div
          className="social-links"
          aria-label="Social media links"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "1rem",
          }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/pamelaterrell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pamela Terrell on GitHub"
            title="GitHub"
            className="social-link"
            style={{
              color: "#d0f0e8",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#8ee0c1";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d0f0e8";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.808 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.303-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.53 11.53 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.814 1.102.814 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
            </svg>
          </a>

          {/* Bluesky */}
          <a
            href="https://bsky.app/profile/stabileusa.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stabile USA on Bluesky"
            title="Bluesky: stabileusa.bsky.social"
            className="social-link"
            style={{
              color: "#d0f0e8",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#1185fe";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d0f0e8";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 10.8c-1.1-2.1-4.1-6-6.9-7.9C2.4 1.1 1.4 1.4.8 1.7.2 2 .1 3 .1 3.6c0 .7.4 5.7.7 6.5.9 3 4 4 6.8 3.5-4.8.8-9 2.8-3.5 8.9 6 6.2 8.2-1.3 8.9-3.7.7 2.4 2.3 9.7 8.2 3.7 5.5-6.1 1.3-8.1-3.5-8.9 2.8.5 5.9-.5 6.8-3.5.3-.8.7-5.8.7-6.5 0-.6-.1-1.6-.7-1.9-.6-.3-1.6-.6-4.3 1.2-2.8 1.9-5.8 5.8-6.9 7.9z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/stabileusa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stabile USA on Instagram"
            title="Instagram: @stabileusa"
            className="social-link"
            style={{
              color: "#d0f0e8",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#e1306c";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d0f0e8";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM17.5 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </svg>
          </a>
        </div>

        {/* Social Handles */}
        <p
          style={{
            margin: "0.25rem 0 1rem",
            fontSize: "0.9rem",
            opacity: 0.8,
          }}
        >
          <a
            href="https://bsky.app/profile/stabileusa.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#d0f0e8",
              textDecoration: "none",
            }}
          >
            stabileusa.bsky.social
          </a>

          <span aria-hidden="true"> · </span>

          <a
            href="https://www.instagram.com/stabileusa/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#d0f0e8",
              textDecoration: "none",
            }}
          >
            @stabileusa
          </a>
        </p>

        {/* Copyright */}
        <p
          className="footer-copy"
          style={{
            fontSize: "0.9rem",
            marginTop: "1rem",
            opacity: 0.8,
          }}
        >
          © {new Date().getFullYear()} Pamela J Terrell. All rights reserved.
        </p>

        {/* PT Logo */}
        <a href="/" title="Go to homepage" aria-label="Go to homepage">
          <img
            src={ptlogo}
            alt="PT logo"
            className="footer-logo"
            style={{
              display: "block",
              margin: "1.2rem auto 0",
              width: "52px",
              height: "auto",
              opacity: 0.9,
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;