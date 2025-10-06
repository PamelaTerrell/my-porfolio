// api/log-ip.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const visitKey = req.headers["x-visit-key"] || "";
  if (visitKey !== process.env.VISIT_KEY) {
    return res.status(401).json({ ok: false, error: "bad key" });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown";

  console.log("pageview", { ip, ua: req.headers["user-agent"], at: new Date().toISOString() });
  return res.status(200).json({ ok: true });
}
