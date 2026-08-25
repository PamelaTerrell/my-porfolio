import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "../components/ExternalLink";
import ProductSwitchboard from "../components/ProductSwitchboard";
import { externalSites, featuredProjects, getSupportingProject, switchboardGroups } from "../data/projects";
import pjtImage from "../assets/pamela-hero-portrait.jpg";
import "./Portfolio.css";

const buildPrinciples = [
  { title: "Identify the problem", text: "Understand who the product is for, what they need to do, and where the current experience becomes confusing or unnecessarily difficult." },
  { title: "Shape the product", text: "Define the content, flow, features, boundaries, and visual direction around the product’s actual purpose." },
  { title: "Build the system", text: "Develop the interface and the underlying data, services, integrations, and operational tools that make it work." },
  { title: "Operate what launched", text: "Test the real experience, publish or support the live product, and keep learning from what operation reveals." },
];

export default function Home() {
  const pinkertonWilliams = featuredProjects.find((project) => project.slug === "pinkerton-williams");
  const vinoPairings = getSupportingProject("VinoPairings");

  function focusSwitchboard() {
    window.setTimeout(() => document.getElementById("product-switchboard")?.focus({ preventScroll: true }), 0);
  }

  return (
    <main id="main-content" className="portfolioSite">
      <section className="quietFounderHero pageShell" aria-labelledby="quiet-founder-heading">
        <div className="quietHeroIdentity">
          <h1 id="quiet-founder-heading">Pamela J. Terrell</h1>
          <p className="heroRole">Founder &amp; Full-Stack Product Developer</p>

          <div className="heroActions"><a className="primaryAction" href="#product-switchboard" onClick={focusSwitchboard}>View My Work</a><Link className="secondaryAction" to="/work-with-me">Collaborate</Link></div>
          <ExternalLink className="heroStudioLink" href={externalSites.stabileUSA}>Founder of Stabile USA</ExternalLink>
        </div>
        <div className="quietHeroPortrait">
          <img src={pjtImage} alt="Pamela J. Terrell" width="1290" height="1790" />
        </div>
      </section>

      <section id="product-switchboard" className="homeSection pageShell" aria-labelledby="switchboard-heading" tabIndex="-1">
        <div className="sectionHeading switchboardIntroduction"><p className="sectionEyebrow">Pamela Product Index · Featured work</p><h2 id="switchboard-heading">The Product Switchboard</h2><p>Six featured products. Different audiences. One end-to-end approach: identify the problem, shape the product, build the system, and operate what launches.</p></div>
        <ProductSwitchboard groups={switchboardGroups} />
        <div className="sectionAction"><Link className="textAction" to="/projects">Explore the complete portfolio <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="buildApproach homeSection" aria-labelledby="build-heading">
        <div className="pageShell"><div className="sectionHeading"><p className="sectionEyebrow">Pamela’s product method</p><h2 id="build-heading">Identify the problem → Shape the product → Build the system → Operate what launched</h2><p className="methodStatement">I do not just build the interface. I decide what the product should be, build the systems behind it, and continue operating what launches.</p></div><div className="principleGrid">{buildPrinciples.map((principle, index) => <article className="buildPrinciple" key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div>
      </section>

      <section id="about" className="aboutPamela homeSection pageShell" aria-labelledby="about-heading">
        <div><p className="sectionEyebrow">About Pamela</p><h2 id="about-heading">Founder, developer, and hands-on product builder</h2><p>I’m Pamela J. Terrell, founder of Stabile USA. I create independent digital products and work with people whose ideas need both thoughtful direction and practical execution.</p><p>My role often crosses boundaries separated on larger teams: research, product definition, content structure, design, frontend and backend development, integrations, launch, and continued operation.</p></div>
        <ol className="developmentTimeline" aria-label="Development timeline">
          <li><strong>2016</strong><span><ExternalLink href={pinkertonWilliams.liveUrl}>PinkertonWilliams.org</ExternalLink> began as my college Web Design final project and became a lasting community website I continue maintaining.</span></li>
          <li><strong>2024</strong><span>I completed the Per Scholas Software Engineering program and built <ExternalLink href={vinoPairings.url}>VinoPairings</ExternalLink> as my first full-stack application, then continued reshaping it into an actively maintained wine-pairing product with a user-facing AI sommelier.</span></li>
          <li><strong>2026</strong><span>I launched a growing group of founder-led products through Stabile USA.</span></li>
        </ol>
      </section>

      <section className="stabileIntroduction homeSection">
        <div className="pageShell"><p className="sectionEyebrow">My independent venture studio</p><h2>Stabile USA gives focused ideas a place to become real products.</h2><p>Stabile USA is the parent company and creative home for my independent products. Each venture has its own purpose, audience, and identity while remaining part of a studio built around useful ideas and long-term ownership.</p><ExternalLink className="secondaryAction" href={externalSites.stabileUSA}>Explore Stabile USA</ExternalLink></div>
      </section>

      <section className="collaborationCallout pageShell"><p className="sectionEyebrow">Collaborate</p><h2>Have a product that needs both direction and execution?</h2><p>I’m interested in thoughtful product-development work, strategic collaborations, and partnerships around useful digital ideas.</p><Link className="primaryAction" to="/work-with-me">Discuss a project</Link></section>
    </main>
  );
}
