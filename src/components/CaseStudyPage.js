import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import ExternalLink from "./ExternalLink";
import ProductSignature from "./ProductSignature";
import { featuredProjects, getFeaturedProject, getProjectLiveLabel } from "../data/projects";
import { getCaseStudy } from "../data/caseStudies";
import "../pages/CaseStudy.css";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getFeaturedProject(slug);
  const study = getCaseStudy(slug);
  if (!project || !study) return <Navigate to="/not-found" replace />;
  const related = featuredProjects.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <main id="main-content" className={`caseStudyPage caseStudy-${project.tone}`}>
      <header className="caseStudyHeader pageShell">
        <Link className="backLink" to="/projects">← Selected Work</Link>
        <div className="projectIdentityLine"><span className="projectIndex" aria-label={`Project ${project.index}`}>{project.index}</span><p className="sectionEyebrow">{project.classification} · {project.launchYear}</p></div>
        <h1>{project.name}</h1>
        <p className="projectOwnership">{project.ownership}</p>
        <p className="caseStudyThesis">{project.thesis}</p>
        <ExternalLink className="primaryAction" href={project.liveUrl}>{getProjectLiveLabel(project)}</ExternalLink>
      </header>
      <div className="caseStudyHeroMedia pageShell"><img src={project.image} alt={project.imageAlt} /></div>
      <div className="pageShell"><ProductSignature project={project} /></div>
      <div className="caseStudyBody pageShell">
        <p className="caseStudyIntroduction">{study.introduction}</p>
        {study.sections.map((section) => <section className="editorialSection" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <blockquote className="caseStudyQuote">{study.quote}</blockquote>
        <section className="decisionsSection">
          <p className="sectionEyebrow">Product judgment</p><h2>Decisions that shaped the product</h2>
          <div className="decisionGrid">{study.decisions.map((decision, index) => <article className="decisionCard" key={decision.title}><span className="decisionIndex" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><p><strong>Context</strong>{decision.context}</p><p><strong>Decision</strong>{decision.decision}</p><p><strong>Reason</strong>{decision.reason}</p><p><strong>Tradeoff</strong>{decision.tradeoff}</p></article>)}</div>
        </section>
        {study.creativeProcess && <section className="editorialSection creativeProcess"><h2>Visual development</h2><p>{study.creativeProcess}</p></section>}
        <section className="technicalPanel"><div><p className="sectionEyebrow">Technical approach</p><h2>Built as a working system</h2><p>{study.technical}</p></div><ul className="stackList" aria-label="Verified technology">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="editorialSection considerationsSection"><h2>{study.considerations.title}</h2>{study.considerations.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
        <div className="outcomesAndLessons"><section><p className="sectionEyebrow">Current outcome</p><h2>What is working now</h2><ul className="checkList">{study.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></section><section><p className="sectionEyebrow">Lessons</p><h2>What the work taught me</h2><ul className="lessonList">{study.lessons.map((item) => <li key={item}>{item}</li>)}</ul></section></div>
        <section className="nextDirection"><p className="sectionEyebrow">Next direction</p><h2>Continuing thoughtfully</h2><p>{study.next}</p></section>
        <nav className="relatedWork" aria-label="Related work"><p className="sectionEyebrow">Continue exploring</p><div>{related.map((item) => <Link className={`relatedProject ${item.tone}`} key={item.slug} to={`/projects/${item.slug}`}><span className="projectIndex" aria-hidden="true">{item.index}</span><span>{item.name}</span><span aria-hidden="true">→</span></Link>)}</div></nav>
      </div>
    </main>
  );
}
