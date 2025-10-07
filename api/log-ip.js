/*
Place this at:  /api/log-ip.js  (project root, sibling of package.json)
Vercel will deploy it as a serverless function.
*/
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "method-not-allowed" });
  }

  // Accept VISIT_KEY (server) or REACT_APP_VISIT_KEY (fallback)
  const expected =
    process.env.VISIT_KEY ||
    process.env.REACT_APP_VISIT_KEY ||
    "";

  const sent = req.headers["x-visit-key"] || "";

  if (!expected) {
    return res.status(200).json({ ok: false, reason: "server-missing-key" });
  }
  if (!sent) {
    return res.status(200).json({ ok: false, reason: "missing-visit-key-header" });
  }
  if (sent !== expected) {
    return res.status(200).json({ ok: false, reason: "wrong-visit-key" });
  }

  // Basic bot filtering (lightweight)
  const ua = (req.headers["user-agent"] || "").toLowerCase();
  const looksBot = /(bot|spider|crawler
