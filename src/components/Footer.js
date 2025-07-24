import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        background: "linear-gradient(135deg, #0a6e8c, #3caf82)", // deep blue to fresh green
        color: "#f0f9f8",
        padding: "2rem 1.5rem",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="footer-content" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p
          className="footer-cta"
          style={{ fontSize: "1.2rem", marginBottom: "1rem", fontWeight: "600" }}
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

        <div
          className="social-links"
          aria-label="Social media links"
          style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1rem" }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/pamelaterrell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            style={{ color: "#d0f0e8", transition: "color 0.3s" }}
            className="social-link"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#8ee0c1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#d0f0e8")}
          >
            {/* GitHub SVG Icon */}
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

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pamela-stabile-terrell-893b19234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            style={{ color: "#d0f0e8", transition: "color 0.3s" }}
            className="social-link"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#8ee0c1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#d0f0e8")}
          >
            {/* LinkedIn SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.224.792 24 1.771 24h20.451C23.2 24 24 23.224 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.557a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM20.452 20.452h-3.56v-5.844c0-1.393-.028-3.18-1.938-3.18-1.94 0-2.236 1.515-2.236 3.078v5.946h-3.56V9h3.418v1.561h.05c.476-.9 1.636-1.85 3.368-1.85 3.6 0 4.265 2.37 4.265 5.45v6.291z" />
            </svg>
          </a>
        </div>

        <p
          className="footer-copy"
          style={{ fontSize: "0.9rem", marginTop: "1rem", opacity: 0.8 }}
        >
          &copy; 2025 Pamela J Terrell. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
