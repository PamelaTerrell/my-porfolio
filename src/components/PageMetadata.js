import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getFeaturedProject } from "../data/projects";
import { getPageMetadata, metadataTags } from "../data/pageMetadata.mjs";

export default function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = /^\/projects\/([^/]+)\/?$/i.exec(pathname)?.[1]?.toLowerCase();
    const project = getFeaturedProject(slug);
    const page = getPageMetadata(pathname, project?.socialImage || project?.image);
    document.title = page.title;
    const tags = metadataTags(page).map(([tag, attributes]) => {
      const element = document.createElement(tag);
      element.setAttribute("data-route-meta", "");
      for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
      return element;
    });
    document.head.querySelectorAll("[data-route-meta]").forEach((element) => element.remove());
    document.head.append(...tags);
  }, [pathname]);

  return null;
}
