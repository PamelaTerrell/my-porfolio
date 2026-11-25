
import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import ptlogo from "../assets/ptlogo-small.webp";
import "./SiteHeader.css";

const navigation = [
  {
    label: "Selected Work",
    to: "/projects",
  },
  {
    label: "About",
    to: "/#about",
  },
  {
    label: "Stabile USA",
    to: "/stabile-usa",
  },
  {
    label: "Work With Me",
    to: "/work-with-me",
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const location = useLocation();

  const { pathname, hash } = location;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="siteHeader"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          closeMenu();
          toggleRef.current?.focus();
        }
      }}
    >
      <a className="skipLink" href="#main-content" onClick={closeMenu}>
        Skip to main content
      </a>
      <div className="siteHeaderInner">
        <Link
          className="siteIdentity"
          to="/"
          onClick={closeMenu}
        >
          <img
            className="siteLogo"
            src={ptlogo}
            alt=""
            aria-hidden="true"
            width="128"
            height="128"
          />

          <span className="siteIdentityText">
            <span>Pamela J. Terrell</span>

            <small>
              Independent Web Developer
            </small>
          </span>
          <span className="srOnly"> home</span>
        </Link>

        <button
          ref={toggleRef}
          className="navigationToggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() => {
            setMenuOpen((current) => !current);
          }}
        >
          <span aria-hidden="true">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`primaryNavigation ${
            menuOpen ? "isOpen" : ""
          }`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            if (item.to.includes("#")) {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  aria-current={
                    pathname === "/" && hash === "#about"
                      ? "location"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "isCurrent" : undefined
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
