// api/log-ip.js  — works as a Vercel Serverless Function

const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

const BOT_UA_PATTERNS = [
  /bot/i, /spider/i, /crawler/i, /crawl/i,
  /curl/i, /wget/i, /python/i, /node-fetch/i, /axios/i, /httpclient/i,
  /java/i, /okhttp/i, /go-http/i, /powershell/i, /php/i,
  /bingbot/i, /googlebot/i, /duckduckbot/i, /baiduspider/i, /yandexbot/i,
  /ahrefsbot/i, /semrushbot/i, /facebookexternalhit/i, /twitterbot/i,
  /applebot/i, /discordbot/i, /telegrambot/i, /whatsapp/i, /linkedinbot/i
];

function isBotUA(ua = "") {
  return BOT_UA_PATTERNS.some(re => re.test(ua));
}

function isLikelyBrowser(headers) {
  const accept = headers["accept"] || "";
  const secChUa = headers["sec-ch-ua"];
  return accept.includes("text/html") || !!secChUa;
}

function validOrigin(headers) {
  const ref = headers["referer"] || "";
  if (!ref) return true; // allow direct visit
  return [
    "https://www.pamelajterrell.com",
    "https://pamelajterrell.com",
    "https://www.lifestoriesnow.com",
    "https://lifestoriesnow.com",
    "https://www.vinopairings.com",
    "https://vinopairings.com",
    "https://www.pinkertonwilliams.org",
    "https://pinkertonwilliams.org",
    "http://localhost:3000"
  ].some(host => ref.startsWith(host));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, skipped: "use POST" });
  }

  const expectedKey = process.env.REACT_APP_VISIT_KEY || "";
  const visitKey = req.headers["x-visit-key"] || "";
  if (!expectedKey || visitKey !== expectedKey) {
    return res.status(200).json({ ok: true, skipped: "bad-key" });
  }

  if (!validOrigin(req.headers)) {
    return res.status(200).json({ ok: true, skipped: "bad-origin" });
  }

  const ua = req.headers["user-agent"] || "";
  if (isBotUA(ua) || !isLikelyBrowser(req.headers)) {
    return res.status(200).json({ ok: true, skipped: "bot" });
  }

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
  const cookies = Object.fromEntries(
    (req.headers.cookie || "")
      .split(";")
      .map(c => c.trim().split("="))
      .filter(x => x.length === 2)
  );
  const visitId = cookies.visit_id || uuid();

  console.log("👤 Real Visitor:", {
    ts: new Date().toISOString(),
    visitId,
    clientIp,
    country,
    region,
    city,
    asn,
    ua,
    referer
  });

  res.setHeader(
    "Set-Cookie",
    `visit_id=${visitId}; Path=/; Max-Age=15552000; SameSite=Lax`
  );
  return res.status(200).json({ ok: true, logged: true });
}
