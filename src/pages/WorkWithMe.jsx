import React from "react";
import { Link } from "react-router-dom";
import { contactEmail, projectInquiryUrl } from "../data/contact";
import "./Portfolio.css";

const services = [
  {
    title: "New business websites",
    text:
      "Give customers a clear place to learn what you offer, find your details, and take the next step on desktop or mobile.",
  },
  {
    title: "Website redesign and modernization",
    text:
      "Refresh an existing site with clearer content, easier navigation, and a better mobile experience. Keep the pages and features that still serve your customers.",
  },
  {
    title: "Custom web applications",
    text:
      "Build an online tool around the way your business works, with features such as customer accounts, memberships, payments, or dashboards.",
  },
  {
    title: "Website maintenance and improvements",
    text:
      "Keep an existing site useful with content updates, accessibility fixes, performance improvements, or support after launch.",
  },
  {
    title: "Interactive features and integrations",
    text:
      "Add a form, searchable directory, member area, or a connection to an existing service so customers can do more on your site.",
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
    title: "Agree on a scope and quote",
    text:
      "I outline the deliverables, timing, and an individual quote so you can decide whether to proceed.",
  },
  {
    title: "Build, launch, and plan support",
    text:
      "We review working milestones before launch and agree on any maintenance or improvements you need afterward.",
  },
];

export default function WorkWithMe() {
  return (
    <main id="main-content" tabIndex={-1} className="portfolioSite collaboratePage">
      <header className="pageIntroduction pageShell workWithMeHero">
        <p className="sectionEyebrow">Work With Me</p>

        <h1>Let’s build something that works for your business.</h1>

        <p className="workWithMeIntro">
          I’m an independent web developer working with small businesses,
          professional organizations, and founders in the Augusta, Georgia
          area and remotely. I can help with design, development, launch,
          and ongoing updates.
        </p>

        <div className="heroActions">
          <a
            className="primaryAction"
            href={projectInquiryUrl}
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
            <h2>One point of contact from design to launch</h2>
          </div>

          <div>
            <p>
              I look at how customers use your website and where they get
              stuck. From there, we can decide whether a focused improvement,
              a redesign, or a new application makes sense.
            </p>

            <p>
              For more involved builds, I work with React, JavaScript,
              TypeScript, and Next.js, along with APIs, databases, account
              access, subscriptions, and cloud deployment.
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
            Your current website needs an update, a redesign, or easier maintenance.
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
          Send a short introduction and tell me what you’d like to improve.
          The button opens a draft in your email app. You can also copy the
          address below and use webmail.
        </p>

        <p><a className="textAction" href={projectInquiryUrl}>{contactEmail}</a></p>

        <div className="heroActions">
          <a
            className="primaryAction"
            href={projectInquiryUrl}
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
