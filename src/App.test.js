
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

jest.mock(
  "@vercel/analytics/react",
  () => ({ Analytics: () => null }),
  { virtual: true }
);

import App from "./App";

import {
  featuredProjects,
  portfolioProjects,
  supportingProjects,
  switchboardFeaturedProjects,
  switchboardGroups,
} from "./data/projects";

global.IS_REACT_ACT_ENVIRONMENT = true;

function renderRoute(route) {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container);

  act(() => {
    root.render(
      <MemoryRouter
        initialEntries={[route]}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </MemoryRouter>
    );
  });

  return {
    container,
    cleanup() {
      act(() => root.unmount());
      container.remove();
    },
  };
}

function click(element) {
  expect(element).not.toBeNull();

  act(() => {
    element.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
      })
    );
  });
}

function selectProject(view, name) {
  const index = portfolioProjects.findIndex(
    (project) => project.name === name
  );

  expect(index).toBeGreaterThanOrEqual(0);

  const tabs = view.container.querySelectorAll(
    '[role="tab"]'
  );

  click(tabs[index]);

  return view.container.querySelector(
    '[role="tabpanel"]'
  );
}

// --------------------------------------------------
// SHARED LAYOUT AND HOMEPAGE
// --------------------------------------------------

test("renders shared navigation and homepage positioning", () => {
  const view = renderRoute("/");

  expect(view.container.textContent).toContain(
    "Founder & Full-Stack Product Developer"
  );

  expect(
    view.container.querySelector(
      '[aria-label="Primary navigation"]'
    )
  ).not.toBeNull();

  expect(
    view.container.querySelector(
      'a[href="/projects"]'
    )
  ).not.toBeNull();

  expect(
    view.container.querySelectorAll("main")
  ).toHaveLength(1);

  expect(
    view.container.querySelectorAll("#main-content")
  ).toHaveLength(1);

  view.cleanup();
});

test("renders the Quiet Founder Hero", () => {
  const view = renderRoute("/");

  const hero = view.container.querySelector(
    ".quietFounderHero"
  );

  expect(hero).not.toBeNull();

  expect(
    hero.querySelectorAll("h1")
  ).toHaveLength(1);

  expect(
    hero.querySelector("h1").textContent
  ).toBe("Pamela J. Terrell");

  expect(
    hero.querySelectorAll("p")
  ).toHaveLength(1);

  const portrait = hero.querySelector(
    ".quietHeroPortrait img"
  );

  expect(portrait).not.toBeNull();

  expect(
    portrait.getAttribute("alt")
  ).toContain("Pamela J. Terrell");

  expect(
    portrait.getAttribute("src")
  ).toContain("pamela-hero-portrait2.jpg");

  expect(
    hero.querySelector(
      'a[href="https://stabileusa.com"]'
    )
  ).not.toBeNull();

  expect(
    hero.querySelector(
      'a[href="#product-switchboard"]'
    ).textContent
  ).toBe("View My Work");

  expect(
    hero.querySelector(
      'a[href="/work-with-me"]'
    ).textContent
  ).toBe("Collaborate");

  expect(
    hero.querySelector(
      "[role='tablist'], .switchboardPanel, .projectFrame"
    )
  ).toBeNull();

  expect(
    view.container
      .querySelector("#product-switchboard")
      .getAttribute("tabindex")
  ).toBe("-1");

  view.cleanup();
});

test("renders the product development approach", () => {
  const view = renderRoute("/");

  expect(
    view.container.querySelector(
      ".buildApproach"
    )
  ).not.toBeNull();

  expect(
    view.container.querySelectorAll(
      ".buildPrinciple"
    )
  ).toHaveLength(4);

  [
    "Identify the problem",
    "Shape the product",
    "Build the system",
    "Operate what launched",
  ].forEach((title) => {
    expect(
      view.container.querySelector(
        ".buildApproach"
      ).textContent
    ).toContain(title);
  });

  const headerLogo = view.container.querySelector(
    ".siteIdentity .siteLogo"
  );

  expect(headerLogo).not.toBeNull();

  expect(
    headerLogo.getAttribute("src")
  ).toContain("ptlogo.png");

  view.cleanup();
});

// --------------------------------------------------
// SELECTED WORK AND PROJECT DATA
// --------------------------------------------------

test("renders Selected Work from centralized project data", () => {
  const view = renderRoute("/projects");

  expect(view.container.textContent).toContain(
    "Products I’ve shaped, built, launched, and operated"
  );

  featuredProjects.forEach((project) => {
    expect(
      view.container.textContent
    ).toContain(project.name);

    expect(
      view.container.textContent
    ).toContain(project.index);

    expect(
      view.container.querySelector(
        `a[href="${project.caseStudyPath}"]`
      )
    ).not.toBeNull();

    expect(
      view.container.querySelector(
        `a[href="${project.liveUrl}"]`
      )
    ).not.toBeNull();
  });

  supportingProjects.forEach((project) => {
    expect(
      view.container.querySelector(
        `a[href="${project.url}"]`
      )
    ).not.toBeNull();
  });

  expect(
    supportingProjects.some(
      (project) => project.name === "VinoPairings"
    )
  ).toBe(true);

  view.cleanup();
});

test("preserves six featured case-study projects", () => {
  expect(featuredProjects).toHaveLength(6);

  expect(
    featuredProjects.map(
      (project) => project.index
    )
  ).toEqual([
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
  ]);

  expect(
    featuredProjects.map(
      (project) => project.name
    )
  ).toEqual([
    "Crime Recordings",
    "Night Listener",
    "Medicare Before You Switch",
    "Super Cleaning Lady",
    "I Love You So Much",
    "Pinkerton Williams DAV Chapter 18",
  ]);
});

test("preserves volunteer project ownership boundaries", () => {
  const pinkerton = featuredProjects.find(
    (project) =>
      project.slug === "pinkerton-williams"
  );

  expect(pinkerton).toBeDefined();

  expect(
    pinkerton.ownership
  ).toContain("Volunteer community commitment");

  expect(
    pinkerton.ownership
  ).not.toContain("Stabile USA product");
});

test("supporting project images appear in Selected Work", () => {
  const view = renderRoute("/projects");

  supportingProjects.forEach((project) => {
    if (!project.image) return;

    const image = [
      ...view.container.querySelectorAll(
        ".directoryEntry img"
      ),
    ].find(
      (element) =>
        element.getAttribute("src") === project.image
    );

    expect(image).toBeDefined();
  });

  view.cleanup();
});

// --------------------------------------------------
// PRODUCT SWITCHBOARD
// --------------------------------------------------

test("Product Switchboard selects Crime Recordings by default", () => {
  const view = renderRoute("/");

  const tabs = view.container.querySelectorAll(
    '[role="tab"]'
  );

  expect(tabs).toHaveLength(
    portfolioProjects.length
  );

  expect(
    tabs[0].getAttribute("aria-selected")
  ).toBe("true");

  expect(
    view.container.querySelector(
      '[role="tabpanel"] h3'
    ).textContent
  ).toBe("Crime Recordings");

  view.cleanup();
});

test("Product Switchboard includes every current project", () => {
  expect(portfolioProjects).toHaveLength(
    featuredProjects.length +
      supportingProjects.length
  );

  expect(
    switchboardGroups.map(
      (group) => group.name
    )
  ).toEqual([
    "Featured Products",
    "Story, Reflection, and Human Experience",
    "Practical and Community Platforms",
    "Consumer Products and Experiments",
  ]);

  const view = renderRoute("/");

  portfolioProjects.forEach((project) => {
    expect(
      view.container.textContent
    ).toContain(project.name);
  });

  switchboardGroups.forEach((group) => {
    expect(
      view.container.textContent
    ).toContain(group.name);
  });

  view.cleanup();
});

test("promotes VinoPairings without adding a case study", () => {
  expect(
    switchboardFeaturedProjects
  ).toHaveLength(7);

  expect(
    switchboardFeaturedProjects.map(
      (project) => project.name
    )
  ).toEqual([
    "Crime Recordings",
    "Night Listener",
    "Medicare Before You Switch",
    "Super Cleaning Lady",
    "I Love You So Much",
    "Pinkerton Williams DAV Chapter 18",
    "VinoPairings",
  ]);

  expect(
    switchboardFeaturedProjects.map(
      (project) => project.index
    )
  ).toEqual([
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
  ]);

  expect(
    portfolioProjects.filter(
      (project) =>
        project.name === "VinoPairings"
    )
  ).toHaveLength(1);

  expect(
    switchboardFeaturedProjects[6].caseStudyPath
  ).toBeUndefined();
});

test("Switchboard avoids redundant category and View labels", () => {
  const view = renderRoute("/");

  const groups = view.container.querySelectorAll(
    ".switchboardGroup"
  );

  groups.forEach((group) => {
    const groupName = group.querySelector(
      "h3"
    ).textContent;

    group
      .querySelectorAll(".switchboardTab")
      .forEach((tab) => {
        expect(
          tab.querySelector(
            ".switchboardTabText"
          ).textContent
        ).not.toContain(groupName);

        expect(
          tab.querySelector(
            ".switchboardTabState"
          ).textContent
        ).not.toBe("View");
      });
  });

  expect(
    view.container.querySelector(
      ".switchboardTab[aria-selected='true'] .switchboardTabState"
    ).textContent
  ).toBe("→");

  view.cleanup();
});

test("Switchboard changes the active project", () => {
  const view = renderRoute("/");

  const tabs = view.container.querySelectorAll(
    '[role="tab"]'
  );

  click(tabs[1]);

  expect(
    tabs[1].getAttribute("aria-selected")
  ).toBe("true");

  expect(
    view.container.querySelector(
      '[role="tabpanel"] h3'
    ).textContent
  ).toBe("Night Listener");

  view.cleanup();
});

test("Switchboard supports arrow-key navigation", () => {
  const view = renderRoute("/");

  const tabs = view.container.querySelectorAll(
    '[role="tab"]'
  );

  tabs[0].focus();

  act(() => {
    tabs[0].dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
      })
    );
  });

  expect(
    document.activeElement
  ).toBe(tabs[1]);

  expect(
    tabs[1].getAttribute("aria-selected")
  ).toBe("true");

  view.cleanup();
});

test("Switchboard renders supporting project details", () => {
  const view = renderRoute("/");

  const project = supportingProjects[0];

  const panel = selectProject(
    view,
    project.name
  );

  expect(panel).not.toBeNull();

  expect(
    panel.textContent
  ).toContain(project.name);

  expect(
    panel.textContent
  ).toContain(project.description);

  expect(
    panel.querySelector(
      'a[href^="/projects/"]'
    )
  ).toBeNull();

  expect(
    panel.querySelector(
      `a[href="${project.url}"]`
    )
  ).not.toBeNull();

  view.cleanup();
});

test("mobile selector displays RedLipsticks.com", () => {
  const view = renderRoute("/");

  const select = view.container.querySelector(
    "#switchboard-project-select"
  );

  expect(select).not.toBeNull();

  expect(
    select.querySelectorAll("option")
  ).toHaveLength(portfolioProjects.length);

  const projectIndex = portfolioProjects.findIndex(
    (project) =>
      project.name === "RedLipsticks.com"
  );

  expect(projectIndex).toBeGreaterThanOrEqual(0);

  act(() => {
    select.value = String(projectIndex);

    select.dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );
  });

  expect(
    view.container.querySelector(
      '[role="tabpanel"] h3'
    ).textContent
  ).toBe("RedLipsticks.com");

  const image = view.container.querySelector(
    ".switchboardMedia img"
  );

  expect(image).not.toBeNull();

  expect(
    image.getAttribute("src")
  ).toContain("redlipsticks.png");

  expect(
    view.container.querySelector(
      ".switchboardMediaUnavailable"
    )
  ).toBeNull();

  view.cleanup();
});

test("Switchboard preserves project links", () => {
  const view = renderRoute("/");

  const tabs = view.container.querySelectorAll(
    '[role="tab"]'
  );

  portfolioProjects.forEach((project, index) => {
    click(tabs[index]);

    const panel = view.container.querySelector(
      '[role="tabpanel"]'
    );

    if (project.caseStudyPath) {
      expect(
        panel.querySelector(
          `a[href="${project.caseStudyPath}"]`
        )
      ).not.toBeNull();
    } else {
      expect(
        panel.querySelector(
          'a[href^="/projects/"]'
        )
      ).toBeNull();
    }

    expect(
      panel.querySelector(
        `a[href="${project.liveUrl || project.url}"]`
      )
    ).not.toBeNull();
  });

  view.cleanup();
});

test("Switchboard keeps information separate from media", () => {
  const view = renderRoute("/");

  const tabs = view.container.querySelectorAll(
    '[role="tab"]'
  );

  portfolioProjects.forEach((project, index) => {
    click(tabs[index]);

    const panel = view.container.querySelector(
      '[role="tabpanel"]'
    );

    const information = panel.querySelector(
      ".switchboardInformation"
    );

    const media = panel.querySelector(
      ".switchboardMedia"
    );

    const heading = panel.querySelector(
      ".switchboardHeading"
    );

    expect([
      ...panel.children,
    ]).toEqual([
      information,
      media,
    ]);

    expect(
      information.contains(heading)
    ).toBe(true);

    expect(
      information.contains(
        panel.querySelector(
          ".projectActions"
        )
      )
    ).toBe(true);

    if (project.image) {
      expect(
        media.querySelector("img")
      ).not.toBeNull();
    } else {
      expect(
        media.getAttribute("aria-label")
      ).toBe(
        "Preview image not available"
      );
    }

    expect(media.textContent).toBe("");
  });

  view.cleanup();
});

// --------------------------------------------------
// VINOPAIRINGS
// --------------------------------------------------

test("preserves VinoPairings development milestone", () => {
  const vino = supportingProjects.find(
    (project) =>
      project.name === "VinoPairings"
  );

  expect(vino.description).toContain(
    "user-facing AI sommelier"
  );

  expect(vino.description).toContain(
    "first full-stack application"
  );

  expect(vino.stack).not.toEqual(
    expect.arrayContaining([
      "Mongoose",
      "MongoDB",
    ])
  );

  expect(vino.architecture).toContain(
    "protected server-side AI routes"
  );

  const view = renderRoute("/");

  const panel = selectProject(
    view,
    "VinoPairings"
  );

  expect(
    panel.textContent
  ).toContain(
    "Pamela’s first full-stack application"
  );

  expect(
    panel.textContent
  ).toContain(
    "OpenAI Responses API"
  );

  expect(
    panel.textContent
  ).toContain("2024");

  expect(
    view.container.querySelector(
      ".developmentTimeline"
    ).textContent
  ).toContain("AI sommelier");

  view.cleanup();
});

test("featured and consumer filters show correct projects", () => {
  const view = renderRoute("/");

  const filters = [
    ...view.container.querySelectorAll(
      ".switchboardFilters button"
    ),
  ];

  const featuredFilter = filters.find(
    (button) =>
      button.textContent === "Featured Products"
  );

  click(featuredFilter);

  let tabs = view.container.querySelectorAll(
    '[role="tab"]'
  );

  expect(tabs).toHaveLength(7);

  expect(
    tabs[6].textContent
  ).toContain("VinoPairings");

  tabs[5].focus();

  act(() => {
    tabs[5].dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
      })
    );
  });

  let panel = view.container.querySelector(
    '[role="tabpanel"]'
  );

  expect(
    panel.querySelector("h3").textContent
  ).toBe("VinoPairings");

  const consumerFilter = filters.find(
    (button) =>
      button.textContent ===
      "Consumer Products and Experiments"
  );

  click(consumerFilter);

  tabs = view.container.querySelectorAll(
    '[role="tab"]'
  );

  expect(tabs).toHaveLength(1);

  expect(
    tabs[0].textContent
  ).toContain("RedLipsticks.com");

  click(tabs[0]);

  panel = view.container.querySelector(
    '[role="tabpanel"]'
  );

  const redLipsticks = supportingProjects.find(
    (project) =>
      project.name === "RedLipsticks.com"
  );

  expect(
    panel.textContent
  ).toContain(redLipsticks.description);

  expect(
    panel.querySelector(
      `a[href="${redLipsticks.url}"]`
    )
  ).not.toBeNull();

  view.cleanup();
});

// --------------------------------------------------
// CASE STUDIES
// --------------------------------------------------

test.each(
  featuredProjects.map(
    (project) => [
      project.slug,
      project.name,
    ]
  )
)(
  "renders the %s case study",
  (slug, name) => {
    const view = renderRoute(
      `/projects/${slug}`
    );

    const project = featuredProjects.find(
      (item) =>
        item.slug === slug
    );

    expect(
      view.container.querySelector(
        "h1"
      ).textContent
    ).toBe(name);

    expect(
      view.container.querySelector(
        ".projectIndex"
      ).textContent
    ).toBe(project.index);

    expect(
      view.container.querySelector(
        '[aria-label$="product signature"]'
      )
    ).not.toBeNull();

    expect(
      view.container.textContent
    ).toContain(
      "Decisions that shaped the product"
    );

    expect(
      view.container.textContent
    ).toContain(
      "What is working now"
    );

    const liveLink = view.container.querySelector(
      `a[href="${project.liveUrl}"]`
    );

    expect(liveLink).not.toBeNull();

    expect(
      liveLink.getAttribute("rel")
    ).toContain("noopener");

    expect(
      liveLink.getAttribute("rel")
    ).toContain("noreferrer");

    view.cleanup();
  }
);

// --------------------------------------------------
// COLLABORATION AND NOT FOUND
// --------------------------------------------------

test("renders collaboration page without package pricing", () => {
  const view = renderRoute("/work-with-me");

  expect(
    view.container.textContent
  ).toContain(
    "Let’s build something that works for your business."
  );

  expect(
    view.container.textContent
  ).toContain("What I can build");

  expect(
    view.container.textContent
  ).not.toMatch(/Starting at \$/i);

  view.cleanup();
});

test("renders a useful not-found page", () => {
  const view = renderRoute(
    "/this-route-does-not-exist"
  );

  expect(
    view.container.textContent
  ).toContain(
    "This page isn’t part of the current collection"
  );

  view.cleanup();
});

test("retired project route displays Not Found", () => {
  const view = renderRoute("/mixer");

  expect(
    view.container.textContent
  ).toContain(
    "This page isn’t part of the current collection"
  );

  view.cleanup();
});
