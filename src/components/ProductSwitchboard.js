import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ExternalLink from "./ExternalLink";
import { getProjectLiveLabel } from "../data/projects";
import "./ProductSwitchboard.css";

export default function ProductSwitchboard({ groups }) {
  const projects = useMemo(() => groups.flatMap((group) => group.projects), [groups]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const tabRefs = useRef([]);
  const activeProject = projects[activeIndex];
  const activeTone = activeProject.tone || "supporting";
  const visibleGroups = activeFilter === "All" ? groups : groups.filter((group) => group.name === activeFilter);
  const visibleProjects = visibleGroups.flatMap((group) => group.projects);

  function selectProject(index, moveFocus = false) {
    setActiveIndex(index);
    if (moveFocus) tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event, project) {
    const visibleIndex = visibleProjects.indexOf(project);
    let nextVisibleIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextVisibleIndex = (visibleIndex + 1) % visibleProjects.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextVisibleIndex = (visibleIndex - 1 + visibleProjects.length) % visibleProjects.length;
    if (event.key === "Home") nextVisibleIndex = 0;
    if (event.key === "End") nextVisibleIndex = visibleProjects.length - 1;
    if (nextVisibleIndex === undefined) return;
    event.preventDefault();
    selectProject(projects.indexOf(visibleProjects[nextVisibleIndex]), true);
  }

  function filterProjects(groupName) {
    setActiveFilter(groupName);
    if (groupName === "All") return;
    const group = groups.find((item) => item.name === groupName);
    if (!group.projects.includes(activeProject)) selectProject(projects.indexOf(group.projects[0]));
  }

  function renderTab(project) {
    const index = projects.indexOf(project);
    const selected = index === activeIndex;
    const indexMarker = project.classification?.toLowerCase().includes("volunteer")
      ? "Volunteer"
      : project.marker
        ? "Development Milestone"
        : project.featured
          ? "Featured"
          : null;
    return (
      <button
        className="switchboardTab"
        id={`switchboard-tab-${project.slug || `supporting-${index}`}`}
        key={project.slug || project.name}
        onClick={() => selectProject(index)}
        onKeyDown={(event) => handleKeyDown(event, project)}
        ref={(element) => { tabRefs.current[index] = element; }}
        role="tab"
        aria-controls="switchboard-panel"
        aria-selected={selected}
        tabIndex={selected ? 0 : -1}
        type="button"
      >
        <span className="switchboardTabNumber" aria-hidden="true">{project.index || ""}</span>
        <span className="switchboardTabText"><strong>{project.name}</strong>{indexMarker && <small>{indexMarker}</small>}</span>
        <span className="switchboardTabState" aria-hidden="true">{selected ? "→" : ""}</span>
      </button>
    );
  }

  return (
    <div className={`productSwitchboard ${activeTone}`}>
      <div className="switchboardFilters" role="group" aria-label="Filter portfolio projects">
        {["All", ...groups.map((group) => group.name)].map((filter) => <button type="button" key={filter} aria-pressed={filter === activeFilter} onClick={() => filterProjects(filter)}>{filter}</button>)}
      </div>
      <div className="switchboardDesktopIndex" aria-label="Portfolio project index">
        {visibleGroups.map((group) => (
          <section className="switchboardGroup" key={group.name}>
            <h3>{group.name}</h3>
            <div role="tablist" aria-label={group.name} aria-orientation="vertical">
              {group.projects.map(renderTab)}
            </div>
          </section>
        ))}
      </div>

      <div className="switchboardMobileSelector">
        <label htmlFor="switchboard-project-select">Choose a project</label>
        <select id="switchboard-project-select" value={activeIndex} aria-controls="switchboard-panel" onChange={(event) => selectProject(Number(event.target.value))}>
          {visibleGroups.map((group) => (
            <optgroup label={group.name} key={group.name}>
              {group.projects.map((project) => {
                const index = projects.indexOf(project);
                return <option value={index} key={project.slug || project.name}>{project.index ? `${project.index} · ` : ""}{project.name}</option>;
              })}
            </optgroup>
          ))}
        </select>
      </div>

      <article
        className={`switchboardPanel${activeProject.featured ? " switchboardPanelFeatured" : " switchboardPanelSupporting"}`}
        id="switchboard-panel"
        key={activeProject.slug || activeProject.name}
        role="tabpanel"
        aria-labelledby={`switchboard-tab-${activeProject.slug || `supporting-${activeIndex}`}`}
        aria-label={`${activeProject.name} project details`}
        tabIndex="0"
      >
        <div className="switchboardInformation">
          <header className="switchboardHeading">
            {activeProject.index && <span className="projectIndex" aria-hidden="true">{activeProject.index}</span>}
            <div>
              <p className="sectionEyebrow">{activeProject.featured ? "Featured product" : activeProject.classification || activeProject.group}</p>
              <h3>{activeProject.name}</h3>
            </div>
          </header>
          <div className="switchboardEvidence">
            {activeProject.featured ? (
              <>
                <p className="switchboardThesis">{activeProject.thesis}</p>
                <dl className="switchboardFacts">
                  <div><dt>Problem</dt><dd>{activeProject.signature.problem}</dd></div>
                  <div><dt>Pamela’s ownership</dt><dd>{activeProject.signature.owned}</dd></div>
                  <div><dt>Operating now</dt><dd>{activeProject.signature.operating}</dd></div>
                  <div><dt>Status</dt><dd>{activeProject.status} · {activeProject.launchYear}</dd></div>
                </dl>
                <blockquote className="switchboardDecision"><span>Product decision</span>{activeProject.featuredDecision}</blockquote>
              </>
            ) : (
              <>
                <p className="switchboardThesis">{activeProject.description}</p>
                <dl className="supportingProjectFacts">
                  <div><dt>Category</dt><dd>{activeProject.group}</dd></div>
                  {activeProject.relationship && <div><dt>Relationship</dt><dd>{activeProject.relationship}</dd></div>}
                  {activeProject.status && <div><dt>Status</dt><dd>{activeProject.status}{activeProject.launchYear ? ` · ${activeProject.launchYear}` : ""}</dd></div>}
                  {(activeProject.milestone || activeProject.marker) && <div><dt>Development milestone</dt><dd>{activeProject.milestone || activeProject.marker}</dd></div>}
                  {activeProject.architecture && <div><dt>Current architecture</dt><dd>{activeProject.architecture}</dd></div>}
                  {activeProject.stack && <div><dt>Current technology</dt><dd>{activeProject.stack.join(" · ")}</dd></div>}
                </dl>
              </>
            )}

            <div className="projectActions">
              {activeProject.caseStudyPath && <Link className="primaryAction" to={activeProject.caseStudyPath}>Read the case study</Link>}
              <ExternalLink className={activeProject.caseStudyPath ? "textAction" : "primaryAction"} href={activeProject.liveUrl || activeProject.url}>{getProjectLiveLabel(activeProject)}</ExternalLink>
            </div>
          </div>
        </div>
        <div className={`switchboardMedia${activeProject.image ? "" : " switchboardMediaUnavailable"}`} aria-label={activeProject.image ? undefined : "Preview image not available"}>
          {activeProject.image && <img src={activeProject.image} alt={activeProject.imageAlt || `${activeProject.name} project preview`} loading={activeIndex === 0 ? "eager" : "lazy"} />}
        </div>
      </article>
    </div>
  );
}
