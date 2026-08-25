import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const engagements = [
  ["Product definition and focused MVPs", "Turn a useful idea into a clear initial product with an intentional scope and working foundation."],
  ["Full-stack product implementation", "Design and build the public experience and the systems, data, services, and workflows behind it."],
  ["Existing-product improvement", "Clarify a product’s structure, user flow, content model, or technical direction when its first version no longer fits."],
  ["Specialized digital platforms", "Develop focused membership, education, content, storytelling, or community products around a real audience need."],
  ["Stabile USA collaborations", "Explore thoughtful partnerships involving an existing Stabile USA product or a related opportunity."],
];

export default function WorkWithMe() {
  return (
    <main id="main-content" className="portfolioSite collaboratePage">
      <header className="pageIntroduction pageShell"><p className="sectionEyebrow">Collaborate</p><h1>Let’s build a useful product.</h1><p>I work best on ideas that need both thoughtful direction and hands-on execution—from understanding the problem through building and launching the working product.</p><a className="primaryAction" href="mailto:agentpamelajterrell@gmail.com">Discuss a project</a></header>
      <section className="homeSection pageShell" aria-labelledby="fit-heading"><div className="sectionHeading"><p className="sectionEyebrow">Good-fit work</p><h2 id="fit-heading">Where I can contribute</h2></div><div className="engagementGrid">{engagements.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="contributionSection homeSection"><div className="pageShell splitSection"><div><p className="sectionEyebrow">How I contribute</p><h2>One product, seen as a complete system</h2></div><div><p>I can help define the product, organize its content and user experience, design and implement the frontend and backend, connect services, test the critical journeys, and prepare it for launch.</p><p>The exact role depends on the work. The constant is that product decisions and technical implementation stay connected.</p></div></div></section>
      <section className="homeSection pageShell"><div className="sectionHeading"><p className="sectionEyebrow">How a project begins</p><h2>Start with the problem, then shape the scope</h2></div><ol className="collaborationSteps"><li><strong>Share the idea</strong><span>Tell me what you want the product to make possible and who it needs to serve.</span></li><li><strong>Understand the current state</strong><span>We identify what exists, what is unclear, and what constraints matter.</span></li><li><strong>Define a useful first phase</strong><span>We establish responsibilities, priorities, and an achievable starting scope.</span></li><li><strong>Build, review, and learn</strong><span>The product develops through working increments and practical feedback.</span></li></ol></section>
      <section className="contactPreparation homeSection"><div className="pageShell splitSection"><div><p className="sectionEyebrow">When you write</p><h2>What helps me understand the opportunity</h2></div><ul className="checkList"><li>What the product should help someone do</li><li>Who it is intended to serve</li><li>Where the work stands today</li><li>Any existing content, designs, code, or systems</li><li>Your desired timing and known constraints</li></ul></div></section>
      <section className="collaborationCallout pageShell"><p className="sectionEyebrow">Start here</p><h2>Tell me what you’re trying to make possible.</h2><p>A short, direct introduction is enough to begin.</p><a className="primaryAction" href="mailto:agentpamelajterrell@gmail.com">Email Pamela</a><Link className="textAction" to="/projects">Review selected work</Link></section>
    </main>
  );
}
