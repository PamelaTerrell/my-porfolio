import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import routeHtml from "./scripts/route-html.mjs";

export default defineConfig({
  plugins: [react(), routeHtml()],
  css: {
    postcss: {
      plugins: [autoprefixer({ flexbox: "no-2009" })],
    },
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{js,jsx}"],
  },
});
