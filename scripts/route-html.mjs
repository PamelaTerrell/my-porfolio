import { extname } from "node:path";
import { getPageMetadata, metadataTags, pages } from "../src/data/pageMetadata.mjs";

const marker = "<!-- route-metadata -->";
const escapeHtml = (value) => value.replace(/[&<>"]/g, (character) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]
);

function renderHead(html, page) {
  const tags = metadataTags(page).map(([tag, attributes]) =>
    `<${tag} data-route-meta ${Object.entries(attributes).map(([key, value]) =>
      `${key}="${escapeHtml(value)}"`
    ).join(" ")}>`
  );
  return html.replace(marker, [`<title>${escapeHtml(page.title)}</title>`, ...tags].join("\n    "));
}

export default function routeHtml() {
  return {
    name: "portfolio-route-html",
    transformIndexHtml(html, context) {
      if (!context.server) return html;
      const pathname = new URL(context.originalUrl || context.path, "http://localhost").pathname;
      const path = pathname.replace(/\/+$/, "").toLowerCase() || "/";
      const image = Object.hasOwn(pages, path) ? pages[path][2] : undefined;
      const src = image && (image.startsWith("/") ? image : `/src/assets/${image}`);
      return renderHead(html, getPageMetadata(path, src));
    },
    generateBundle: {
      order: "post",
      handler(_, bundle) {
        const entry = bundle["index.html"];
        const template = String(entry.source);
        if (!template.includes(marker)) this.error("Portfolio HTML is missing the route metadata marker.");

        for (const [path, [, , image]] of Object.entries(pages)) {
          let imageUrl = image;
          if (image && !image.startsWith("/")) {
            const asset = Object.values(bundle).find((item) =>
              item.type === "asset" && item.originalFileNames?.some((file) => file.endsWith(`/${image}`))
            );
            if (!asset || !extname(asset.fileName)) this.error(`Missing social image for ${path}: ${image}`);
            imageUrl = `/${asset.fileName}`;
          }
          const html = renderHead(template, getPageMetadata(path, imageUrl));
          if (path === "/") entry.source = html;
          else this.emitFile({ type: "asset", fileName: `${path.slice(1)}.html`, source: html });
        }
        this.emitFile({ type: "asset", fileName: "404.html", source: renderHead(template, getPageMetadata("/not-found")) });
        const urls = Object.keys(pages).map((path) => `  <url><loc>${getPageMetadata(path).canonical}</loc></url>`);
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...urls, "</urlset>", ""].join("\n"),
        });
      },
    },
  };
}
