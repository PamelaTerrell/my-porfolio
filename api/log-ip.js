// api/log-ip.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // Simple shared-secret gate (set VISIT_KEY in Vercel env)
  const supplied = req.headers["x-visit-key"] || "";
  if (supplied !== process.env.VISIT_KEY) {
    return res.status(401).json({ ok: false, error: "bad key" });
  }

  // IP: Vercel injects x-forwarded-for
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "";

  const ua = req.headers["user-agent"] || "";
  const ref = req.headers["referer"] || req.headers["referrer"] || "";

  // Parse JSON body safely
  let body = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  } catch { /* ignore */ }

  // Very light bot sniff (keep this naive to avoid false positives)
  const looksLikeBot = /\b(bot|spider|crawler|preview|monitor|curl|wget)\b/i.test(
    ua
  );

  // Log to Vercel function logs (visible in dashboard)
  console.log(
    JSON.stringify(
      {
        type: "visit",
        ts: new Date().toISOString(),
        ip,
        ua,
        ref,
        path: body?.path || "",
        lang: body?.lang || "",
        tz: body?.tz || "",
        vw: body?.vw || 0,
        vh: body?.vh || 0,
        looksLikeBot,
      },
      null,
      0
    )
  );

  // Respond quickly
  return res.status(200).json({ ok: true });
}
