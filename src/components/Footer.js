import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "./ExternalLink";
import "./Footer.css";
import ptlogo from "../assets/ptlogo.png";
import { externalSites } from "../data/projects";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="footerIntroduction">
          <img
            src={ptlogo}
            alt=""
            aria-hidden="true"
            className="footerLogo"
          />

          <div>
            <strong>Pamela J. Terrell</strong>
            <p>Founder &amp; Full-Stack Product Developer</p>
          </div>
        </div>

        <nav
          className="footerNavigation"
          aria-label="Footer navigation"
        >
          <Link to="/projects">
            Selected Work
          </Link>

          <Link to="/web-development-augusta-ga">
            Augusta Web Development
          </Link>

          <Link to="/stabile-usa">
            About Stabile USA
          </Link>

          <Link to="/work-with-me">
            Collaborate
          </Link>

          <a href="mailto:agentpamelajterrell@gmail.com">
            Email Pamela
          </a>
        </nav>

        <div
          className="footerLinks"
          aria-label="External links"
        >
          <ExternalLink href={externalSites.stabileUSA}>
            Explore Stabile USA
          </ExternalLink>

          <ExternalLink href="https://github.com/PamelaTerrell">
            GitHub
          </ExternalLink>

          <ExternalLink href="https://bsky.app/profile/stabileusa.bsky.social">
            Stabile USA on Bluesky
          </ExternalLink>

          <ExternalLink href="https://www.instagram.com/stabileusa/">
            Stabile USA on Instagram
          </ExternalLink>
        </div>

        <p className="footerCopyright">
          © {new Date().getFullYear()} Pamela J. Terrell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}