import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

jest.mock("@vercel/analytics/react", () => ({ Analytics: () => null }), { virtual: true });

import App from "./App";
import { featuredProjects, portfolioProjects, supportingProjects, switchboardGroups } from "./data/projects";

global.IS_REACT_ACT_ENVIRONMENT = true;

function renderRoute(route) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></MemoryRouter>); });
  return { container, cleanup() { act(() => root.unmount()); container.remove(); } };
}

test("renders the shared navigation and homepage positioning", () => {
  const view = renderRoute("/");
  expect(view.container.textContent).toContain("Founder & Full-Stack Product Developer");
  expect(view.container.querySelector('[aria-label="Primary navigation"]')).not.toBeNull();
  expect(view.container.querySelector('a[href="/projects"]')).not.toBeNull();
  view.cleanup();
});

test("renders the Quiet Founder Hero without duplicating project content", () => {
  const view = renderRoute("/");
  const hero = view.container.querySelector(".quietFounderHero");
  expect(hero.querySelectorAll("h1")).toHaveLength(1);
  expect(hero.querySelector("h1").textContent).toBe("Pamela J. Terrell");
  expect(hero.textContent).not.toContain("Understand · Decide · Listen · Act · Begin");
  expect(hero.textContent).not.toContain("Since 2016");
  expect(hero.querySelectorAll("p")).toHaveLength(1);
  const portrait = hero.querySelector('.quietHeroPortrait img[alt="Pamela J. Terrell"]');
  expect(portrait).not.toBeNull();
  expect(portrait.getAttribute("src")).toContain("pamela-hero-portrait.jpg");
  expect(hero.querySelector('a[href="https://stabileusa.com"]')).not.toBeNull();
  expect(hero.querySelector('a[href="#product-switchboard"]')).not.toBeNull();
  expect(hero.querySelector('a[href="#product-switchboard"]').textContent).toBe("View My Work");
  expect(hero.querySelector('a[href="/work-with-me"]').textContent).toBe("Collaborate");
  expect(hero.querySelector("[role='tablist'], .switchboardPanel, .projectFrame")).toBeNull();
  expect(view.container.querySelector("#product-switchboard").getAttribute("tabindex")).toBe("-1");
  view.cleanup();
});

test("renders the Selected Work page from centralized project data", () => {
  const view = renderRoute("/projects");
  expect(view.container.textContent).toContain("Products I’ve shaped, built, and brought online");
  featuredProjects.forEach((project) => {
    expect(view.container.textContent).toContain(project.name);
    expect(view.container.textContent).toContain(project.index);
    expect(view.container.querySelector(`a[href="/projects/${project.slug}"]`)).not.toBeNull();
    expect(view.container.querySelector(`a[href="${project.liveUrl}"]`)).not.toBeNull();
  });
  supportingProjects.forEach((project) => expect(view.container.querySelector(`a[href="${project.url}"]`)).not.toBeNull());
  expect(supportingProjects.some((project) => project.name === "VinoPairings")).toBe(true);
  view.cleanup();
});

test("uses the Pamela Product Index and preserves project ownership boundaries", () => {
  expect(featuredProjects.map((project) => project.index)).toEqual(["01", "02", "03", "04", "05"]);
  const pinkerton = featuredProjects.find((project) => project.slug === "pinkerton-williams");
  expect(pinkerton.ownership).toContain("Volunteer community commitment");
  expect(pinkerton.ownership).not.toContain("Stabile USA product");

  const view = renderRoute("/");
  expect(view.container.textContent).toContain("Identify the problem → Shape the product → Build the system → Operate what launched");
  const headerLogo = view.container.querySelector('.siteIdentity img[alt="Pamela J. Terrell home"]');
  expect(headerLogo).not.toBeNull();
  expect(headerLogo.getAttribute("src")).toContain("ptlogo.png");
  view.cleanup();
});

test("Product Switchboard selects Crime Recordings by default", () => {
  const view = renderRoute("/");
  const tabs = view.container.querySelectorAll('[role="tab"]');
  expect(tabs).toHaveLength(portfolioProjects.length);
  expect(tabs[0].getAttribute("aria-selected")).toBe("true");
  expect(view.container.querySelector('[role="tabpanel"] h3').textContent).toBe("Crime Recordings");
  view.cleanup();
});

test("Product Switchboard represents every centralized project in grouped sections", () => {
  expect(portfolioProjects).toHaveLength(featuredProjects.length + supportingProjects.length);
  expect(switchboardGroups.map((group) => group.name)).toEqual([
    "Featured Products",
    "Story, Reflection, and Human Experience",
    "Practical and Community Platforms",
    "Consumer Products and Experiments",
  ]);
  const view = renderRoute("/");
  portfolioProjects.forEach((project) => expect(view.container.textContent).toContain(project.name));
  switchboardGroups.forEach((group) => expect(view.container.textContent).toContain(group.name));
  view.cleanup();
});

test("Product Switchboard index avoids redundant category and View labels", () => {
  const view = renderRoute("/");
  const groups = view.container.querySelectorAll(".switchboardGroup");
  groups.forEach((group) => {
    const groupName = group.querySelector("h3").textContent;
    group.querySelectorAll(".switchboardTab").forEach((tab) => {
      expect(tab.querySelector(".switchboardTabText").textContent).not.toContain(groupName);
      expect(tab.querySelector(".switchboardTabState").textContent).not.toBe("View");
    });
  });
  expect(view.container.querySelector(".switchboardTab[aria-selected='true'] .switchboardTabState").textContent).toBe("→");
  expect(view.container.textContent).toContain("Development Milestone");
  expect(view.container.textContent).toContain("Volunteer");
  view.cleanup();
});

test("Product Switchboard changes the active project", () => {
  const view = renderRoute("/");
  const tabs = view.container.querySelectorAll('[role="tab"]');
  act(() => tabs[1].dispatchEvent(new MouseEvent("click", { bubbles: true })));
  expect(tabs[1].getAttribute("aria-selected")).toBe("true");
  expect(view.container.querySelector('[role="tabpanel"] h3').textContent).toBe("Night Listener");
  view.cleanup();
});

test("Product Switchboard supports arrow-key navigation", () => {
  const view = renderRoute("/");
  const tabs = view.container.querySelectorAll('[role="tab"]');
  tabs[0].focus();
  act(() => tabs[0].dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })));
  expect(document.activeElement).toBe(tabs[1]);
  expect(tabs[1].getAttribute("aria-selected")).toBe("true");
  view.cleanup();
});

test("Product Switchboard renders a simpler supporting-project panel", () => {
  const view = renderRoute("/");
  const tabs = view.container.querySelectorAll('[role="tab"]');
  act(() => tabs[featuredProjects.length].dispatchEvent(new MouseEvent("click", { bubbles: true })));
  expect(view.container.querySelector(".switchboardPanelSupporting")).not.toBeNull();
  expect(view.container.querySelector('[role="tabpanel"] a[href^="/projects/"]')).toBeNull();
  expect(view.container.querySelector(`[role="tabpanel"] a[href="${supportingProjects[0].url}"]`)).not.toBeNull();
  view.cleanup();
});

test("Product Switchboard mobile selector exposes every project and updates the panel", () => {
  const view = renderRoute("/");
  const select = view.container.querySelector("#switchboard-project-select");
  expect(select.querySelectorAll("option")).toHaveLength(portfolioProjects.length);
  const mixerIndex = portfolioProjects.findIndex((project) => project.name === "Mixer");
  act(() => {
    select.value = String(mixerIndex);
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });
  expect(view.container.querySelector('[role="tabpanel"] h3').textContent).toBe("Mixer");
  expect(view.container.querySelector(".switchboardMediaUnavailable").getAttribute("aria-label")).toBe("Preview image not available");
  view.cleanup();
});

test("Product Switchboard preserves available case-study and live-project links", () => {
  const view = renderRoute("/");
  const tabs = view.container.querySelectorAll('[role="tab"]');
  portfolioProjects.forEach((project, index) => {
    act(() => tabs[index].dispatchEvent(new MouseEvent("click", { bubbles: true })));
    const panel = view.container.querySelector('[role="tabpanel"]');
    if (project.caseStudyPath) expect(panel.querySelector(`a[href="${project.caseStudyPath}"]`)).not.toBeNull();
    else expect(panel.querySelector('a[href^="/projects/"]')).toBeNull();
    expect(panel.querySelector(`a[href="${project.liveUrl || project.url}"]`)).not.toBeNull();
  });
  view.cleanup();
});

test("Product Switchboard keeps project information outside the image stage", () => {
  const view = renderRoute("/");
  const tabs = view.container.querySelectorAll('[role="tab"]');
  portfolioProjects.forEach((project, index) => {
    act(() => tabs[index].dispatchEvent(new MouseEvent("click", { bubbles: true })));
    const panel = view.container.querySelector('[role="tabpanel"]');
    const heading = panel.querySelector(".switchboardHeading");
    const media = panel.querySelector(".switchboardMedia");
    const information = panel.querySelector(".switchboardInformation");
    expect([...panel.children]).toEqual([information, media]);
    expect(information.contains(heading)).toBe(true);
    expect(information.contains(panel.querySelector(".projectActions"))).toBe(true);
    if (project.image) expect(media.querySelector("img")).not.toBeNull();
    else expect(media.getAttribute("aria-label")).toBe("Preview image not available");
    expect(media.querySelector("a, button, [class*='badge'], [class*='marker'], [class*='overlay'], [class*='caption']")).toBeNull();
    expect(media.textContent).toBe("");
  });
  view.cleanup();
});

test("Product Switchboard preserves the VinoPairings development milestone", () => {
  const view = renderRoute("/");
  const vinoIndex = portfolioProjects.findIndex((project) => project.name === "VinoPairings");
  const tabs = view.container.querySelectorAll('[role="tab"]');
  act(() => tabs[vinoIndex].dispatchEvent(new MouseEvent("click", { bubbles: true })));
  expect(view.container.querySelector('[role="tabpanel"]').textContent).toContain("Pamela’s first full-stack application");
  expect(view.container.querySelector('[role="tabpanel"]').textContent).toContain("2024");
  view.cleanup();
});

test("Product Switchboard includes VinoPairings and RedLipsticks.com in All and Consumer views", () => {
  const vino = supportingProjects.find((project) => project.name === "VinoPairings");
  const redLipsticks = supportingProjects.find((project) => project.name === "RedLipsticks.com");
  expect(vino.classification).toBe("Founder-led product");
  expect(vino.marker).toBe("Development Milestone · First Full-Stack Application");
  expect(redLipsticks.classification).toBe("Founder-led consumer product");

  const view = renderRoute("/");
  expect(view.container.textContent).toContain("VinoPairings");
  expect(view.container.textContent).toContain("RedLipsticks.com");
  const consumerFilter = [...view.container.querySelectorAll(".switchboardFilters button")].find((button) => button.textContent === "Consumer Products and Experiments");
  act(() => consumerFilter.dispatchEvent(new MouseEvent("click", { bubbles: true })));
  const tabs = view.container.querySelectorAll('[role="tab"]');
  expect(tabs).toHaveLength(3);
  expect([...tabs].map((tab) => tab.textContent)).toEqual(expect.arrayContaining([expect.stringContaining("VinoPairings"), expect.stringContaining("RedLipsticks.com")]));

  act(() => tabs[0].dispatchEvent(new MouseEvent("click", { bubbles: true })));
  let panel = view.container.querySelector('[role="tabpanel"]');
  expect(panel.textContent).toContain(vino.description);
  expect(panel.querySelector(`a[href="${vino.url}"]`).textContent).toContain("Visit VinoPairings");
  expect(panel.querySelector('a[href^="/projects/"]')).toBeNull();

  tabs[0].focus();
  act(() => tabs[0].dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })));
  panel = view.container.querySelector('[role="tabpanel"]');
  expect(panel.textContent).toContain(redLipsticks.description);
  expect(panel.querySelector(`a[href="${redLipsticks.url}"]`).textContent).toContain("Visit RedLipsticks.com");
  expect(panel.querySelector('a[href^="/projects/"]')).toBeNull();
  view.cleanup();
});

test.each(featuredProjects.map((project) => [project.slug, project.name]))("renders the %s case study", (slug, name) => {
  const view = renderRoute(`/projects/${slug}`);
  const project = featuredProjects.find((item) => item.slug === slug);
  expect(view.container.querySelector("h1").textContent).toBe(name);
  expect(view.container.querySelector(".projectIndex").textContent).toBe(project.index);
  expect(view.container.querySelector('[aria-label$="product signature"]')).not.toBeNull();
  expect(view.container.textContent).toContain("Decisions that shaped the product");
  expect(view.container.textContent).toContain("What is working now");
  const liveLink = view.container.querySelector(`a[href="${project.liveUrl}"]`);
  expect(liveLink).not.toBeNull();
  expect(liveLink.getAttribute("rel")).toBe("noopener noreferrer");
  view.cleanup();
});

test("renders the collaboration page without package pricing", () => {
  const view = renderRoute("/work-with-me");
  expect(view.container.textContent).toContain("Let’s build a useful product");
  expect(view.container.textContent).not.toMatch(/Starting at \$/i);
  view.cleanup();
});

test("renders a useful not-found page for an unknown route", () => {
  const view = renderRoute("/this-route-does-not-exist");
  expect(view.container.textContent).toContain("This page isn’t part of the current collection");
  view.cleanup();
});
