// pages/api/log-ip.js
// A clean version that logs only real browser visits

// --- Minimal UUID Generator ---
const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

// --- Known bots, crawlers, or server-side tools ---
const BOT_UA_PATTERNS = [
  /bot/i, /spider/i, /crawler/i, /crawl/i,
  /curl/i, /wget/i, /python/i, /node-fetch/i, /axios/i, /httpclient/i,
  /java/i, /okhttp/i, /go-http/i, /powershell/i, /php/i,
  /bingbot/i, /googlebot/i, /duckduckbot/i, /baiduspider/i, /yandexbot/i,
  /ahrefsbot/i, /semrushbot/i, /facebookexternalhit/i, /twitterbot/i,
  /applebot/i, /discordbot/i, /telegrambot/i, /whatsapp/i,
  /linkedinbot/i
];

function isBotUA(ua = "") {
  return BOT_UA_PATTERNS.some(re => re.test(ua));
}

// --- Ensure it's actually a browser ---
function isLikelyBrowser(req) {
  const accept = req.headers["accept"] || "";
  const secChUa = req.headers["sec-ch-ua"];
  return accept.includes("text/html") || !!secChUa;
}

// --- Restrict to your known domains ---
const ORIGIN_HOSTS = [
  "https://www.pamelajterrell.com",
  "https://pamelajterrell.com",
  "https://www.lifestoriesnow.com",
  "https://lifestoriesnow.com",
  "https://www.vinopairings.com",
  "https://vinopairings.com",
  "https://www.pinkertonwilliams.org",
  "https://pinkertonwilliams.org",
  "http://localhost:3000"
];

function validOrigin(req) {
  const ref = req.headers["referer"] || "";
  return ORIGIN_HOSTS.some(host => ref.startsWith(host));
}

// --- Main Handler ---
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, skipped: "use POST" });
  }

  const expectedKey = process.env.NEXT_PUBLIC_VISIT_KEY || "";
  const visitKey = req.headers["x-visit-key"] || "";

  if (!expectedKey || visitKey !== expectedKey) {
    return res.status(200).json({ ok: true, skipped: "bad-key" });
  }

  if (!validOrigin(req)) {
    return res.status(200).json({ ok: true, skipped: "bad-origin" });
  }

  const userAgent = req.headers["user-agent"] || "Unknown";
  if (isBotUA(userAgent) || !isLikelyBrowser(req)) {
    return res.status(200).json({ ok: true, skipped: "bot" });
  }

  // --- Extract visitor data ---
  const cookies = Object.fromEntries(
    (req.headers.cookie || "")
      .split(";")
      .map(c => c.trim().split("="))
      .filter(x => x.length === 2)
  );
  const visitId = cookies.visit_id || uuid();

  const xff = req.headers["x-forwarded-for"] || "";
  const clientIp =
    xff.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown";

  const country = req.headers["x-vercel-ip-country"] || "??";
  const city = req.headers["x-vercel-ip-city"] || "";
  const region = req.headers["x-vercel-ip-country-region"] || "";
  const asn = req.headers["x-vercel-ip-asn"] || "";
  const referer = req.headers["referer"] || "";

  // --- Log it (only real people reach here) ---
  console.log("👤 Real Visitor:", {
    ts: new Date().toISOString(),
    visitId,
    clientIp,
    country,
    region,
    city,
    asn,
    userAgent,
    referer
  });

  res.setHeader(
    "Set-Cookie",
    `visit_id=${visitId}; Path=/; Max-Age=15552000; SameSite=Lax`
  );
  res.status(200).json({ ok: true, logged: true });
}
