export default function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket?.remoteAddress;

  const userAgent = req.headers["user-agent"] || "Unknown";

  console.log("Visitor:", { ip, userAgent });

  res.status(200).json({ message: "IP logged successfully" });
}
