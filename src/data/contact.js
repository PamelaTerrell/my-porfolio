export const contactEmail = "agentpamelajterrell@gmail.com";

const subject = "Web development project inquiry";
const body = [
  "Hi Pamela,",
  "",
  "I'd like to discuss a web development project.",
  "",
  "Business or organization:",
  "Current website (if any):",
  "What I'd like to build or improve:",
  "Preferred timing (if known):",
].join("\r\n");

export const projectInquiryUrl =
  `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
