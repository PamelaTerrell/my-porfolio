
import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import ptlogo from "../assets/ptlogo.png";
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
    label: "Collaborate",
    to: "/work-with-me",
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { pathname, hash } = location;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) return;

    const targetId = decodeURIComponent(hash.slice(1));

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname, hash, location.key]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link
          className="siteIdentity"
          to="/"
          aria-label="Pamela J. Terrell home"
          onClick={closeMenu}
        >
          <img
            className="siteLogo"
            src={ptlogo}
            alt=""
            aria-hidden="true"
            width="1024"
            height="1024"
          />

          <span className="siteIdentityText">
            <span>Pamela J. Terrell</span>

            <small>
              Founder &amp; Full-Stack Product Developer
            </small>
          </span>
        </Link>

        <button
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
