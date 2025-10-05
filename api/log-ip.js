// Minimal UUID generator (no dependency)
const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export default function handler(req, res) {
  // Parse or create a persistent (per-browser) visit id
  const cookies = Object.fromEntries(
    (req.headers.cookie || "").split(";").map(c => c.trim().split("=")).filter(x => x.length === 2)
  );
  const visitId = cookies.visit_id || uuid();

  // IPs and networking
  const xff = req.headers["x-forwarded-for"] || "";
  const clientIp = xff.split(",")[0]?.trim() || req.headers["x-real-ip"] || req.socket?.remoteAddress || "unknown";

  // Useful Vercel geo headers
  const country = req.headers["x-vercel-ip-country"] || "??";
  const city = req.headers["x-vercel-ip-city"] || "";
  const region = req.headers["x-vercel-ip-country-region"] || "";
  const asn = req.headers["x-vercel-ip-asn"] || "";

  // Client/device context
  const userAgent = req.headers["user-agent"] || "Unknown";
  const referer = req.headers["referer"] || "";

  console.log("Visit log ▶", {
    ts: new Date().toISOString(),
    visitId,
    clientIp,
    xForwardedFor: xff,
    country, region, city, asn,
    userAgent,
    referer
  });

  // Set the cookie so subsequent requests from the same browser carry the same id
  res.setHeader("Set-Cookie", `visit_id=${visitId}; Path=/; Max-Age=15552000; SameSite=Lax`);
  res.status(200).json({ ok: true });
}
