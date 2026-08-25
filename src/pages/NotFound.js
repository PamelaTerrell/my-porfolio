import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function NotFound() {
  return <main id="main-content" className="notFoundPage pageShell"><p className="sectionEyebrow">404</p><h1>This page isn’t part of the current collection.</h1><p>The link may have changed, or the page may never have existed.</p><div><Link className="primaryAction" to="/">Return home</Link><Link className="textAction" to="/projects">View selected work</Link></div></main>;
}
