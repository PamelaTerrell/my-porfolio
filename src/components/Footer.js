
import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "./ExternalLink";

import { externalSites } from "../data/projects";
import ptlogo from "../assets/ptlogo.png";

import "./Footer.css";

const footerNavigation = [
  {
    label: "Selected Work",
    to: "/projects",
  },
  {
    label: "Augusta Web Development",
    to: "/web-development-augusta-ga",
  },
  {
    label: "About Stabile USA",
    to: "/stabile-usa",
  },
  {
    label: "Collaborate",
    to: "/work-with-me",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/PamelaTerrell",
  },
  {
    label: "Stabile USA on Bluesky",
    url: "https://bsky.app/profile/stabileusa.bsky.social",
  },
  {
    label: "Stabile USA on Instagram",
    url: "https://www.instagram.com/stabileusa/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="footerIntroduction">
          <img
            src={ptlogo}
            alt=""
            aria-hidden="true"
            className="footerLogo"
            width="1024"
            height="1024"
            loading="lazy"
          />

          <div>
            <strong>Pamela J. Terrell</strong>

            <p>
              Founder &amp; Full-Stack Product Developer
            </p>
          </div>
        </div>

        <nav
          className="footerNavigation"
          aria-label="Footer navigation"
        >
          {footerNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}

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

          {socialLinks.map((link) => (
            <ExternalLink
              key={link.url}
              href={link.url}
            >
              {link.label}
            </ExternalLink>
          ))}
        </div>

        <p className="footerCopyright">
          © {currentYear} Pamela J. Terrell.
          {" "}All rights reserved.
        </p>
      </div>
    </footer>
  );
}
