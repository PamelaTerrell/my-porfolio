import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "./ExternalLink";
import ProductSignature from "./ProductSignature";
import { getProjectLiveLabel } from "../data/projects";

export default function ProjectPreview({ project, flagship = false }) {
  return (
    <article className={`${flagship ? "flagshipProject" : "selectedProject"} projectFrame ${project.tone}`}>
      <div className="projectPreviewContent">
        <div className="projectIdentityLine"><span className="projectIndex" aria-label={`Project ${project.index}`}>{project.index}</span><p className="sectionEyebrow">{project.classification} · {project.launchYear}</p></div>
        <h3>{project.name}</h3>
        <p className="projectOwnership">{project.ownership}</p>
        <p className="projectCategory">{project.category}</p>
        <p className="projectThesis">{project.thesis}</p>
        <p>{project.preview}</p>
        <ul className="projectLabels" aria-label={`${project.name} capabilities`}>
          {project.labels.map((label) => <li key={label}>{label}</li>)}
        </ul>
        <ProductSignature project={project} compact />
        <div className="projectActions">
          <Link className="primaryAction" to={`/projects/${project.slug}`}>Read the case study</Link>
          <ExternalLink className="textAction" href={project.liveUrl}>{getProjectLiveLabel(project)}</ExternalLink>
        </div>
      </div>
      <div className="projectPreviewMedia"><img src={project.image} alt={project.imageAlt} loading={flagship ? "eager" : "lazy"} /></div>
    </article>
  );
}
