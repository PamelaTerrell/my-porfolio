import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "../components/ExternalLink";
import ProjectPreview from "../components/ProjectPreview";
import { featuredProjects, getProjectLiveLabel, supportingGroups, supportingProjects } from "../data/projects";
import "./Portfolio.css";

export default function Work() {
  const [flagship, ...selected] = featuredProjects;
  return (
    <main id="main-content" className="portfolioSite selectedWorkPage">
      <header className="pageIntroduction pageShell"><p className="sectionEyebrow">Selected Work</p><h1>Products I’ve shaped, built, and brought online</h1><p>This work includes founder-led products created through Stabile USA and a long-running community platform. The detailed case studies focus on what I owned, the decisions behind the product, how it was built, and what I learned.</p></header>
      <section className="homeSection pageShell"><ProjectPreview project={flagship} flagship /></section>
      <section className="homeSection pageShell"><div className="selectedProjectGrid">{selected.map((project) => <ProjectPreview key={project.slug} project={project} />)}</div></section>
      <section id="directory" className="projectDirectory homeSection pageShell" aria-labelledby="directory-heading">
        <div className="sectionHeading"><p className="sectionEyebrow">Supporting directory</p><h2 id="directory-heading">Other products and experiments</h2><p>A wider body of active platforms, focused tools, and explorations.</p></div>
        {supportingGroups.map((group) => <section className="directoryGroup" key={group}><h3>{group}</h3><div className="directoryGrid">{supportingProjects.filter((project) => project.group === group).map((project) => <article className={`directoryEntry${project.image ? "" : " directoryEntryNoMedia"}`} key={project.name}>{project.image && <div className="directoryMedia"><img src={project.image} alt={project.imageAlt || `${project.name} project preview`} loading="lazy" /></div>}<div><h4>{project.name}</h4><p>{project.description}</p><ExternalLink href={project.url}>{getProjectLiveLabel(project)}</ExternalLink></div></article>)}</div></section>)}
      </section>
      <section className="productApproach homeSection"><div className="pageShell"><p className="sectionEyebrow">Product approach</p><h2>Technology follows the purpose</h2><p>I often work where content and software meet: making complex information approachable, creating focused experiences for specialized audiences, and building the operational tools behind the public interface.</p></div></section>
      <section className="collaborationCallout pageShell"><p className="sectionEyebrow">Collaborate</p><h2>Building something useful?</h2><p>Tell me what the product should make possible and where the work stands today.</p><Link className="primaryAction" to="/work-with-me">Start a conversation</Link></section>
    </main>
  );
}
