import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "../components/ExternalLink";
import ProjectPreview from "../components/ProjectPreview";
import {
  featuredProjects,
  getProjectLiveLabel,
  supportingGroups,
  supportingProjects,
} from "../data/projects";
import "./Portfolio.css";

export default function Work() {
  const [flagship, ...selected] = featuredProjects;

  return (
    <main
      id="main-content"
      className="portfolioSite selectedWorkPage"
    >
      <header className="pageIntroduction pageShell">
        <p className="sectionEyebrow">
          Selected Work
        </p>

        <h1>
          Products I’ve shaped, built, launched, and operated
        </h1>

        <p>
          This work includes founder-led digital products
          created through Stabile USA, web applications,
          consumer experiences, a published mobile
          application, and a long-running community platform.
          The detailed case studies focus on what I owned,
          the decisions behind each product, how the system
          was built, how it reached users, and what I learned
          from operating it.
        </p>
      </header>

      {flagship && (
        <section
          className="homeSection pageShell"
          aria-label="Flagship project"
        >
          <ProjectPreview
            project={flagship}
            flagship
          />
        </section>
      )}

      {selected.length > 0 && (
        <section
          className="homeSection pageShell"
          aria-labelledby="featured-projects-heading"
        >
          <div className="sectionHeading">
            <p className="sectionEyebrow">
              Featured Products
            </p>

            <h2 id="featured-projects-heading">
              Products built for different people and different
              purposes
            </h2>

            <p>
              Each product begins with a different problem, but
              the work follows the same principle: understand
              what the experience needs to accomplish, build the
              system behind it, launch thoughtfully, and keep
              improving what is operating in the real world.
            </p>
          </div>

          <div className="selectedProjectGrid">
            {selected.map((project) => (
              <ProjectPreview
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>
      )}

      <section
        id="directory"
        className="projectDirectory homeSection pageShell"
        aria-labelledby="directory-heading"
      >
        <div className="sectionHeading">
          <p className="sectionEyebrow">
            Supporting Directory
          </p>

          <h2 id="directory-heading">
            Other products and experiments
          </h2>

          <p>
            A wider body of active platforms, focused tools,
            client work, and product explorations across web
            and mobile.
          </p>
        </div>

        {supportingGroups.map((group) => {
          const projects = supportingProjects.filter(
            (project) => project.group === group
          );

          if (!projects.length) {
            return null;
          }

          return (
            <section
              className="directoryGroup"
              key={group}
              aria-labelledby={`directory-${group
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
            >
              <h3
                id={`directory-${group
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
              >
                {group}
              </h3>

              <div className="directoryGrid">
                {projects.map((project) => (
                  <article
                    className={`directoryEntry${
                      project.image
                        ? ""
                        : " directoryEntryNoMedia"
                    }`}
                    key={project.name}
                  >
                    {project.image && (
                      <div className="directoryMedia">
                        <img
                          src={project.image}
                          alt={
                            project.imageAlt ||
                            `${project.name} project preview`
                          }
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div>
                      <h4>{project.name}</h4>

                      <p>{project.description}</p>

                      <ExternalLink href={project.url}>
                        {getProjectLiveLabel(project)}
                      </ExternalLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </section>

      <section
        className="productApproach homeSection"
        aria-labelledby="product-approach-heading"
      >
        <div className="pageShell">
          <p className="sectionEyebrow">
            Product Approach
          </p>

          <h2 id="product-approach-heading">
            Technology follows the purpose
          </h2>

          <p>
            I work where product thinking, content, design,
            and software meet: making complex information
            approachable, creating focused experiences for
            specialized audiences, building the systems
            behind the public interface, and choosing the
            right path to deployment or distribution for
            each product.
          </p>

          <p>
            Depending on the product, that can include
            frontend and backend development, data systems,
            authentication, payments, AI features,
            moderation workflows, analytics, web deployment,
            or mobile distribution. The technology changes;
            the goal is always to build the system the
            product actually needs.
          </p>
        </div>
      </section>

      <section
        className="collaborationCallout pageShell"
        aria-labelledby="collaboration-heading"
      >
        <p className="sectionEyebrow">
          Collaborate
        </p>

        <h2 id="collaboration-heading">
          Building something useful?
        </h2>

        <p>
          Tell me what the product should make possible, who
          it is for, and where the work stands today.
        </p>

        <Link
          className="primaryAction"
          to="/work-with-me"
        >
          Start a conversation
        </Link>
      </section>
    </main>
  );
}