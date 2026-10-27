
import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "../components/ExternalLink";
import ProductSwitchboard from "../components/ProductSwitchboard";

import {
  externalSites,
  featuredProjects,
  getSupportingProject,
  switchboardGroups,
} from "../data/projects";

import pjtImage from "../assets/pamela-hero-portrait2.jpg";
import "./Portfolio.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/i-love-you-so-much/id6810764631";

const buildPrinciples = [
  {
    title: "Identify the problem",
    text:
      "Understand the audience, the problem they need solved, and where existing experiences create confusion, friction, or unnecessary complexity.",
  },
  {
    title: "Shape the product",
    text:
      "Define the experience, content, features, user journeys, and visual direction around the product's purpose and the people it serves.",
  },
  {
    title: "Build the system",
    text:
      "Develop the frontend experience and the underlying data, services, integrations, and operational tools that make the product work.",
  },
  {
    title: "Operate what launched",
    text:
      "Test, release, maintain, and improve the product through real-world use, ongoing evaluation, and practical iteration.",
  },
];

export default function Home() {
  const pinkertonWilliams = featuredProjects.find(
    (project) => project.slug === "pinkerton-williams"
  );

  const vinoPairings = getSupportingProject("VinoPairings");

  function focusSwitchboard() {
    window.setTimeout(() => {
      document
        .getElementById("product-switchboard")
        ?.focus({ preventScroll: true });
    }, 0);
  }

  return (
    <main id="main-content" className="portfolioSite">
      {/* HERO */}

      <section
        className="quietFounderHero pageShell"
        aria-labelledby="quiet-founder-heading"
      >
        <div className="quietHeroIdentity">
          <h1 id="quiet-founder-heading">
            Pamela J. Terrell
          </h1>

          <p className="heroRole">
            Founder &amp; Full-Stack Product Developer
          </p>

          <div className="heroActions">
            <a
              className="primaryAction"
              href="#product-switchboard"
              onClick={focusSwitchboard}
            >
              View My Work
            </a>

            <Link
              className="secondaryAction"
              to="/work-with-me"
            >
              Collaborate
            </Link>
          </div>

          <ExternalLink
            className="heroStudioLink"
            href={externalSites.stabileUSA}
          >
            Founder of Stabile USA
          </ExternalLink>
        </div>

        <div className="quietHeroPortrait">
          <img
            src={pjtImage}
            alt="Portrait of Pamela J. Terrell"
            width="1290"
            height="1790"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* PRODUCT SWITCHBOARD */}

      <section
        id="product-switchboard"
        className="homeSection pageShell"
        aria-labelledby="switchboard-heading"
        tabIndex={-1}
      >
        <div className="sectionHeading switchboardIntroduction">
          <p className="sectionEyebrow">
            Pamela Product Index · Featured Work
          </p>

          <h2 id="switchboard-heading">
            The Product Switchboard
          </h2>

          <p>
            Explore digital products I've conceived,
            designed, developed, launched, and maintained
            across web and mobile. Each serves a different
            audience and purpose, but all reflect an
            end-to-end approach to building thoughtful,
            useful experiences that continue evolving
            beyond launch.
          </p>
        </div>

        <ProductSwitchboard groups={switchboardGroups} />

        <div className="sectionAction">
          <Link
            className="textAction"
            to="/projects"
          >
            Explore the complete portfolio{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* PRODUCT DEVELOPMENT APPROACH */}

      <section
        className="buildApproach homeSection"
        aria-labelledby="build-heading"
      >
        <div className="pageShell">
          <div className="sectionHeading">
            <p className="sectionEyebrow">
              My Product Development Approach
            </p>

            <h2 id="build-heading">
              From idea to launch—and everything that
              comes after.
            </h2>

            <p className="methodStatement">
              I build more than interfaces. I help shape
              the product, design the experience, develop
              the systems behind it, and take responsibility
              for making it work in the real world.
            </p>
          </div>

          <div className="principleGrid">
            {buildPrinciples.map((principle, index) => (
              <article
                className="buildPrinciple"
                key={principle.title}
              >
                <span aria-hidden="true">
                  0{index + 1}
                </span>

                <h3>{principle.title}</h3>

                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="aboutPamela homeSection pageShell"
        aria-labelledby="about-heading"
      >
        <div>
          <p className="sectionEyebrow">
            About Pamela
          </p>

          <h2 id="about-heading">
            Founder, developer, and hands-on product builder
          </h2>

          <p>
            I'm Pamela J. Terrell, founder of Stabile USA.
            I design, develop, launch, and operate independent
            digital products across web and mobile. My work
            brings together technical development, thoughtful
            user experiences, and the practical decisions
            required to turn an idea into a working product.
          </p>

          <p>
            My strengths include frontend development with
            React, responsive interface design, and creating
            experiences that make complex information easier
            to understand and use. I also work across backend
            development, databases, authentication, payments,
            APIs, AI integrations, moderation systems,
            testing, deployment, and ongoing maintenance.
          </p>

          <p>
            As an independent product developer, I often
            take responsibility for the entire lifecycle:
            defining the product, designing the experience,
            building the application, preparing it for
            release, and supporting it after launch.
            My work includes publicly available web
            platforms and a consumer application published
            through the Apple App Store.
          </p>
        </div>

        {/* DEVELOPMENT TIMELINE */}

        <ol
          className="developmentTimeline"
          aria-label="Development timeline"
        >
          <li>
            <strong>2016</strong>

            <span>
              {pinkertonWilliams ? (
                <ExternalLink
                  href={pinkertonWilliams.liveUrl}
                >
                  PinkertonWilliams.org
                </ExternalLink>
              ) : (
                "PinkertonWilliams.org"
              )}{" "}
              began as my college Web Design final project
              and grew into a long-running community
              website that I continue maintaining and
              modernizing.
            </span>
          </li>

          <li>
            <strong>2024</strong>

            <span>
              I completed the Per Scholas Software
              Engineering program and created{" "}
              {vinoPairings ? (
                <ExternalLink href={vinoPairings.url}>
                  VinoPairings
                </ExternalLink>
              ) : (
                "VinoPairings"
              )}{" "}
              as my first full-stack application. What
              began as a final project evolved into an
              independently maintained wine-pairing
              platform featuring an AI sommelier.
            </span>
          </li>

          <li>
            <strong>2026</strong>

            <span>
              I expanded Stabile USA into a growing
              collection of digital products spanning
              consumer tools, storytelling, membership
              platforms, community experiences, and mobile
              software. I also designed, developed, and
              published{" "}
              <ExternalLink href={APP_STORE_URL}>
                I Love You So Much
              </ExternalLink>{" "}
              on the Apple App Store, taking the application
              through development, testing, iOS packaging,
              App Store Connect, and Apple's review process.
            </span>
          </li>
        </ol>
      </section>

      {/* STABILE USA */}

      <section
        className="stabileIntroduction homeSection"
        aria-labelledby="stabile-heading"
      >
        <div className="pageShell">
          <p className="sectionEyebrow">
            My Independent Venture Studio
          </p>

          <h2 id="stabile-heading">
            Stabile USA gives focused ideas a place
            to become real products.
          </h2>

          <p>
            Stabile USA is the parent company and creative
            home for my independent digital products.
            Each venture has its own purpose, audience,
            and identity, while sharing a commitment to
            useful ideas, thoughtful execution, long-term
            ownership, and continuous improvement.
          </p>

          <ExternalLink
            className="secondaryAction"
            href={externalSites.stabileUSA}
          >
            Explore Stabile USA
          </ExternalLink>
        </div>
      </section>

      {/* COLLABORATION */}

      <section
        className="collaborationCallout pageShell"
        aria-labelledby="collaboration-heading"
      >
        <p className="sectionEyebrow">
          Collaborate
        </p>

        <h2 id="collaboration-heading">
          Have an idea that needs both direction
          and execution?
        </h2>

        <p>
          I welcome thoughtful product-development
          opportunities, frontend and full-stack projects,
          and strategic collaborations with people who
          value useful, well-designed digital experiences.
        </p>

        <Link
          className="primaryAction"
          to="/work-with-me"
        >
          Discuss a project
        </Link>
      </section>
    </main>
  );
}
