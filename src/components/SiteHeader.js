import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ptlogo from "../assets/ptlogo.png";
import "./SiteHeader.css";

const navigation = [
  { label: "Selected Work", to: "/projects" },
  { label: "About", to: "/#about" },
  { label: "Stabile USA", to: "/stabile-usa" },
  { label: "Collaborate", to: "/work-with-me" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <a className="skipLink" href="#main-content">Skip to content</a>
      <header className="siteHeader">
        <div className="siteHeaderInner">
          <Link className="siteIdentity" to="/" aria-label="Pamela J. Terrell home">
            <img className="siteLogo" src={ptlogo} alt="Pamela J. Terrell home" width="1024" height="1024" />
            <span className="siteIdentityText"><span>Pamela J. Terrell</span><small>Founder &amp; Full-Stack Product Developer</small></span>
          </Link>
          <button className="navigationToggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((current) => !current)}>
            <span className="srOnly">{menuOpen ? "Close" : "Open"} navigation</span>
            <span aria-hidden="true">{menuOpen ? "Close" : "Menu"}</span>
          </button>
          <nav id="primary-navigation" className={`primaryNavigation ${menuOpen ? "isOpen" : ""}`} aria-label="Primary navigation">
            {navigation.map((item) => item.to.includes("#") ? (
              <Link key={item.to} to={item.to}>{item.label}</Link>
            ) : (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? "isCurrent" : undefined}>{item.label}</NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
