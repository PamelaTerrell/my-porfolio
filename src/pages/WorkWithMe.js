import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const services = [
  {
    title: "New Small-Business Websites",
    text:
      "A new website designed and built from the ground up around your business, customers, content, and goals — with a polished experience across desktop and mobile.",
  },
  {
    title: "Website Redesign & Replacement",
    text:
      "Replace an outdated or ineffective website with a clean, modern site built on a fresh foundation. The existing site can help identify useful content and requirements without limiting what the new experience can become.",
  },
  {
    title: "Custom Web Applications",
    text:
      "Build more advanced digital products with features such as authentication, databases, memberships, payments, private content, forms, dashboards, or AI-powered functionality.",
  },
  {
    title: "Founder & Product Builds",
    text:
      "Turn a useful idea into a focused first product by defining what it needs to do, shaping the experience, and building a working foundation that can grow over time.",
  },
];

const projectSteps = [
  {
    title: "Start with the goal",
    text:
      "Tell me about your business, website, or product idea and what you want the new experience to accomplish.",
  },
  {
    title: "Define what needs to be built",
    text:
      "I review the requirements, existing content when relevant, technical needs, and customer experience to establish a practical scope.",
  },
  {
    title: "Create a fresh foundation",
    text:
      "Rather than being constrained by an outdated implementation, I build the new experience around what the project needs today.",
  },
  {
    title: "Build, review, and launch",
    text:
      "The project moves through working milestones, focused review, testing, and final preparation for launch.",
  },
];

export default function WorkWithMe() {
  return (
    <main id="main-content" className="portfolioSite collaboratePage">
      <header className="pageIntroduction pageShell workWithMeHero">
        <p className="sectionEyebrow">Work With Me</p>

        <h1>Let’s build something that works for your business.</h1>

        <p className="workWithMeIntro">
          I design and build new websites and digital products for small
          businesses, independent professionals, and founders — from
          straightforward business websites to more advanced applications with
          custom functionality.
        </p>

        <div className="heroActions">
          <a
            className="primaryAction"
            href="mailto:agentpamelajterrell@gmail.com?subject=Project%20Inquiry"
          >
            Discuss a project
          </a>

          <Link className="textAction" to="/projects">
            View selected work
          </Link>
        </div>
      </header>

      <section
        className="homeSection pageShell"
        aria-labelledby="services-heading"
      >
        <div className="sectionHeading">
          <p className="sectionEyebrow">Services</p>
          <h2 id="services-heading">What I can build</h2>

          <p>
            Whether you need a professional web presence or a more specialized
            digital product, I prefer to start with a clear foundation and
            build intentionally around what the project needs.
          </p>
        </div>

        <div className="engagementGrid serviceGrid">
          {services.map(({ title, text }) => (
            <article className="serviceCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contributionSection homeSection">
        <div className="pageShell splitSection">
          <div>
            <p className="sectionEyebrow">My approach</p>
            <h2>Built from the ground up, with the whole experience in mind.</h2>
          </div>

          <div>
            <p>
              I prefer to build on a clean foundation rather than inherit a
              patchwork of old decisions. That makes it possible to think
              carefully about the structure, design, customer journey, mobile
              experience, and technology as one connected system.
            </p>

            <p>
              Depending on the project, I can work across interface design,
              frontend development, backend systems, databases,
              authentication, payments, third-party services, testing,
              deployment, and launch preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="homeSection pageShell">
        <div className="sectionHeading">
          <p className="sectionEyebrow">A good fit</p>
          <h2>You may want to contact me if...</h2>
        </div>

        <ul className="clientFitList">
          <li>
            Your business needs its first professional website.
          </li>

          <li>
            Your current website feels outdated and you would rather replace
            it than continue patching it.
          </li>

          <li>
            Your business has changed and your website no longer represents
            what you actually do.
          </li>

          <li>
            You have an idea for a useful web application or online service
            and need help turning it into a working product.
          </li>

          <li>
            You need functionality beyond a basic website, such as accounts,
            memberships, payments, private content, forms, databases, or
            integrations.
          </li>

          <li>
            You want someone who can think about both the experience your
            customers see and the systems working behind it.
          </li>
        </ul>
      </section>

      <section className="homeSection projectProcessSection">
        <div className="pageShell">
          <div className="sectionHeading">
            <p className="sectionEyebrow">How it works</p>
            <h2>A clear path from idea to launch</h2>
          </div>

          <ol className="collaborationSteps">
            {projectSteps.map(({ title, text }) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contactPreparation homeSection">
        <div className="pageShell splitSection">
          <div>
            <p className="sectionEyebrow">When you write</p>
            <h2>You do not need to know the technical details.</h2>

            <p>
              Tell me about the business, the problem, or the idea. We can
              determine what needs to be built from there.
            </p>
          </div>

          <ul className="checkList">
            <li>Your business, organization, or product idea</li>
            <li>What you would like the new website or product to accomplish</li>
            <li>Your current website, if you have one</li>
            <li>Features or capabilities you already know you need</li>
            <li>Your preferred timing, if you have one</li>
          </ul>
        </div>
      </section>

      <section className="collaborationCallout pageShell">
        <p className="sectionEyebrow">Start here</p>

        <h2>Have something you’d like to build?</h2>

        <p>
          Send me a short introduction and tell me what you are trying to make
          possible. You do not need a technical plan before getting in touch.
        </p>

        <div className="heroActions">
          <a
            className="primaryAction"
            href="mailto:agentpamelajterrell@gmail.com?subject=Website%20or%20Project%20Inquiry"
          >
            Email Pamela
          </a>

          <Link className="textAction" to="/projects">
            Review selected work
          </Link>
        </div>
      </section>
    </main>
  );
}