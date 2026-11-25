# Pamela J. Terrell Portfolio

Use Node.js 22.13 or later in the Node 22 line, Node 24, or Node 26 and later.

```sh
npm ci
npm run dev
```

| Command | Purpose |
| --- | --- |
| `npm run dev` or `npm start` | Start Vite locally. |
| `npm test` | Run the Vitest suite once. |
| `npm run test:watch` | Rerun tests when files change. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Serve the production build locally. |

Vercel uses the repository root, the Vite preset, and the build command and
output directory in `vercel.json`. It serves existing files and functions
first, then checks for a route’s generated HTML. Unrecognized paths receive
the React not-found page with HTTP 404. Requests under `/api` bypass this
fallback.

Update `src/data/pageMetadata.mjs` when adding or renaming a public route.
The build uses this list to generate route-specific HTML metadata and
`dist/sitemap.xml`. React Router renders the page content in the browser.

Project inquiries use the existing email address and a prefilled draft.
Google Analytics, Google Ads, and Vercel Analytics initialize on the
production domain.
