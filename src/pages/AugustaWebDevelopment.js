// src/pages/AugustaWebDevelopment.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AugustaWebDevelopment.css";

const services = [
  {
    number: "01",
    title: "Business Websites",
    text:
      "Modern, responsive websites built around what your business actually needs customers to understand, trust, and do.",
  },
  {
    number: "02",
    title: "Custom Web Applications",
    text:
      "Purpose-built digital tools with thoughtful interfaces, data, authentication, integrations, and the systems needed behind the experience.",
  },
  {
    number: "03",
    title: "Website Redesigns",
    text:
      "Focused modernization of websites that feel dated, difficult to use, hard to maintain, or no longer represent the organization behind them.",
  },
  {
    number: "04",
    title: "Landing Pages & Launches",
    text:
      "Clear, polished pages for services, campaigns, products, new ventures, announcements, and ideas that need a strong online introduction.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand the need",
    text:
      "We start with the problem: who the site is for, what they need, and what the experience should accomplish.",
  },
  {
    number: "02",
    title: "Shape the experience",
    text:
      "I organize the content, hierarchy, flow, visual direction, and functionality around that purpose.",
  },
  {
    number: "03",
    title: "Build the system",
    text:
      "I develop the interface and, when needed, the data, authentication, integrations, analytics, and supporting technology.",
  },
  {
    number: "04",
    title: "Launch thoughtfully",
    text:
      "I test the real experience, publish carefully, and continue improving the product as actual use reveals what comes next.",
  },
];

const capabilities = [
  "Responsive web design",
  "React development",
  "Next.js applications",
  "Supabase",
  "Authentication",
  "Stripe integrations",
  "Content architecture",
  "SEO foundations",
  "Analytics",
  "Accessibility",
  "Deployment",
  "Ongoing improvements",
];

function getOrCreateMeta(attribute, key) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  let created = false;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
    created = true;
  }

  return { element, created };
}

function setMeta(attribute, key, content) {
  const { element, created } = getOrCreateMeta(attribute, key);
  const previousContent = element.getAttribute("content");

  element.setAttribute("content", content);

  return {
    restore() {
      if (created) {
        element.remove();
      } else if (previousContent !== null) {
        element.setAttribute("content", previousContent);
      } else {
        element.removeAttribute("content");
      }
    },
  };
}

export default function AugustaWebDevelopment() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Augusta GA Web Developer | Pamela J. Terrell";

    const metadataRestorers = [
      setMeta(
        "name",
        "description",
        "Augusta, Georgia web developer Pamela J. Terrell builds modern business websites, custom web applications, website redesigns, landing pages, and digital products."
      ),
      setMeta(
        "property",
        "og:title",
        "Augusta GA Web Development | Pamela J. Terrell"
      ),
      setMeta(
        "property",
        "og:description",
        "Thoughtful websites and digital products for Augusta-area businesses, organizations, founders, and independent ventures."
      ),
      setMeta(
        "property",
        "og:url",
        "https://pamelajterrell.com/web-development-augusta-ga"
      ),
      setMeta(
        "property",
        "og:type",
        "website"
      ),
    ];

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    const canonicalWasCreated = !canonical;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    const previousCanonical = canonical.getAttribute("href");

    canonical.setAttribute(
      "href",
      "https://pamelajterrell.com/web-development-augusta-ga"
    );

    const existingSchema = document.getElementById(
      "augusta-web-development-schema"
    );

    existingSchema?.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "augusta-web-development-schema";

    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Pamela J. Terrell Web Development",
      url:
        "https://pamelajterrell.com/web-development-augusta-ga",
      description:
        "Web development and digital product development for businesses, organizations, founders, and independent ventures.",
      founder: {
        "@type": "Person",
        name: "Pamela J. Terrell",
        jobTitle: "Founder & Full-Stack Product Developer",
        url: "https://pamelajterrell.com/",
      },
      areaServed: {
        "@type": "City",
        name: "Augusta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      serviceType: [
        "Web Development",
        "Business Websites",
        "Website Redesign",
        "Custom Web Applications",
        "Landing Pages",
        "Digital Product Development",
      ],
    });

    document.head.appendChild(schema);

    return () => {
      document.title = previousTitle;

      metadataRestorers.forEach(({ restore }) => restore());

      if (canonicalWasCreated) {
        canonical.remove();
      } else if (previousCanonical !== null) {
        canonical.setAttribute("href", previousCanonical);
      } else {
        canonical.removeAttribute("href");
      }

      document
        .getElementById("augusta-web-development-schema")
        ?.remove();
    };
  }, []);

  return (
    <main id="main-content" className="augustaPage">
      {/* HERO */}
      <section
        className="augustaHero pageShell"
        aria-labelledby="augusta-page-heading"
      >
        <div className="augustaHeroContent">
          <p className="augustaEyebrow">
            Augusta, Georgia · Web Development
          </p>

          <h1 id="augusta-page-heading">
            Thoughtful websites
            <br />
            and digital products
            <br />
            <span>built around real needs.</span>
          </h1>

          <p className="augustaHeroLead">
            I’m Pamela J. Terrell, a founder and full-stack product
            developer based in the Augusta, Georgia area. I design and
            build modern websites and digital products for businesses,
            organizations, founders, and independent ventures.
          </p>

          <div className="augustaHeroActions">
            <Link
              className="augustaPrimaryButton"
              to="/work-with-me"
            >
              Discuss a project
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              className="augustaSecondaryButton"
              to="/projects"
            >
              View selected work
            </Link>
          </div>

          <div className="augustaHeroNote">
            <span
              className="augustaStatusDot"
              aria-hidden="true"
            />
            Augusta-area projects + remote collaboration
          </div>
        </div>

        <aside
          className="augustaHeroAside"
          aria-label="Web development services"
        >
          <p>Available for</p>

          <ul>
            <li>
              <span>Custom website development</span>
              <span aria-hidden="true">01</span>
            </li>

            <li>
              <span>Small business websites</span>
              <span aria-hidden="true">02</span>
            </li>

            <li>
              <span>Website redesigns</span>
              <span aria-hidden="true">03</span>
            </li>

            <li>
              <span>Full-stack web applications</span>
              <span aria-hidden="true">04</span>
            </li>

            <li>
              <span>Landing pages</span>
              <span aria-hidden="true">05</span>
            </li>

            <li>
              <span>Product development</span>
              <span aria-hidden="true">06</span>
            </li>
          </ul>
        </aside>
      </section>

      {/* POSITIONING */}
      <section className="augustaStatement">
        <div className="pageShell augustaStatementInner">
          <p>Not a template factory.</p>

          <h2>
            The goal is not simply to put something online.
            <span>
              {" "}
              It is to build something clear, useful, credible,
              and worth keeping.
            </span>
          </h2>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section
        className="augustaIntro pageShell"
        aria-labelledby="augusta-build-heading"
      >
        <p className="augustaSectionEyebrow">What I build</p>

        <div className="augustaIntroGrid">
          <h2 id="augusta-build-heading">
            More than a website.
            <br />
            <span>A working digital experience.</span>
          </h2>

          <div className="augustaBodyCopy">
            <p className="augustaLeadCopy">
              A strong website should make your business easier to
              understand and easier to trust.
            </p>

            <p>
              It should help the right people find what they need,
              understand what makes you different, and know what to do
              next.
            </p>

            <p>
              My projects range from focused business websites to
              membership platforms, storytelling products, community
              resources, consumer tools, and full-stack applications.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="augustaServices"
        aria-label="Web development services"
      >
        <div className="pageShell">
          <div className="augustaServiceGrid">
            {services.map((service) => (
              <article
                className="augustaServiceCard"
                key={service.title}
              >
                <span className="augustaCardNumber">
                  {service.number}
                </span>

                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        className="augustaWork pageShell"
        aria-labelledby="augusta-experience-heading"
      >
        <p className="augustaSectionEyebrow">
          Real-world experience
        </p>

        <div className="augustaWorkGrid">
          <div>
            <h2 id="augusta-experience-heading">
              I build.
              <br />
              I launch.
              <br />
              <span>I operate.</span>
            </h2>
          </div>

          <div className="augustaWorkCopy">
            <p className="augustaLeadCopy">
              My perspective comes from operating real products, not
              just designing screens.
            </p>

            <p>
              My portfolio includes independent digital ventures,
              membership products, community resources, consumer
              experiences, public-information platforms, and websites
              built for businesses and organizations.
            </p>

            <p>
              I routinely work across product definition, content
              structure, UX, frontend and backend development,
              integrations, analytics, security, deployment, and
              continued maintenance.
            </p>

            <Link
              className="augustaTextLink"
              to="/projects"
            >
              Explore the complete portfolio
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="augustaProofStrip">
          <div>
            <strong>Product</strong>
            <span>Strategy &amp; structure</span>
          </div>

          <div>
            <strong>Design</strong>
            <span>Responsive experiences</span>
          </div>

          <div>
            <strong>Development</strong>
            <span>Frontend + backend</span>
          </div>

          <div>
            <strong>Launch</strong>
            <span>Deployment &amp; analytics</span>
          </div>

          <div>
            <strong>Operation</strong>
            <span>Iteration &amp; support</span>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        className="augustaApproach"
        aria-labelledby="augusta-approach-heading"
      >
        <div className="pageShell">
          <p className="augustaSectionEyebrow">
            How I work
          </p>

          <div className="augustaApproachHeading">
            <h2 id="augusta-approach-heading">
              From idea
              <br />
              <span>to working product.</span>
            </h2>

            <p>
              My process is deliberately practical. We make the
              important decisions first, then build around what the
              project actually needs.
            </p>
          </div>

          <div className="augustaApproachGrid">
            {approach.map((item) => (
              <article key={item.title}>
                <span className="augustaCardNumber">
                  {item.number}
                </span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section
        className="augustaLocal pageShell"
        aria-labelledby="augusta-local-heading"
      >
        <div>
          <p className="augustaSectionEyebrow">
            Augusta, Georgia
          </p>

          <h2 id="augusta-local-heading">
            Local perspective.
            <br />
            <span>Modern development.</span>
          </h2>
        </div>

        <div className="augustaBodyCopy">
          <p className="augustaLeadCopy">
            I’m based in the Augusta area and work with clients both
            locally and remotely.
          </p>

          <p>
            Local businesses and organizations should not have to
            choose between personal attention and modern technology.
            My work combines both.
          </p>

          <p>
            Whether you need your first professional website, a
            thoughtful redesign, or a more ambitious digital product,
            the process begins with understanding what you need the
            technology to accomplish.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="augustaTech"
        aria-labelledby="augusta-tech-heading"
      >
        <div className="pageShell">
          <p className="augustaSectionEyebrow">
            Capabilities &amp; technology
          </p>

          <div className="augustaTechGrid">
            <div>
              <h2 id="augusta-tech-heading">
                Modern tools.
                <br />
                <span>Chosen with purpose.</span>
              </h2>
            </div>

            <div>
              <p className="augustaTechIntroduction">
                Technology should support the product—not become the
                product. I choose tools according to the needs of the
                project and the people who will ultimately maintain it.
              </p>

              <div className="augustaTechList">
                {capabilities.map((capability) => (
                  <span key={capability}>
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="augustaFit pageShell">
        <p className="augustaSectionEyebrow">
          A good fit
        </p>

        <div className="augustaFitGrid">
          <h2>
            We may work well together
            <br />
            <span>if you care about the details.</span>
          </h2>

          <div className="augustaFitList">
            <p>
              <span>01</span>
              You want something built around your actual needs—not
              just a purchased template with your logo added.
            </p>

            <p>
              <span>02</span>
              You appreciate clear communication and want to
              understand what is being built and why.
            </p>

            <p>
              <span>03</span>
              You care about usability, presentation, performance,
              and what happens after the site launches.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="augustaCTA">
        <div className="pageShell">
          <p className="augustaSectionEyebrow">
            Start with the idea
          </p>

          <div className="augustaCTAGrid">
            <h2>
              Have something
              <br />
              <span>worth building?</span>
            </h2>

            <div>
              <p>
                Tell me what you are trying to build, improve, or
                launch. You do not need to arrive with every detail
                figured out.
              </p>

              <Link
                className="augustaPrimaryButton augustaFinalButton"
                to="/work-with-me"
              >
                Discuss your project
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="augustaCTAFooter">
            <span>Pamela J. Terrell</span>

            <span>
              Founder &amp; Full-Stack Product Developer
            </span>

            <span>Augusta, Georgia</span>
          </div>
        </div>
      </section>
    </main>
  );
}