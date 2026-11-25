const origin = "https://pamelajterrell.com";
const portrait = "/PJT2.jpg";

export const pages = {
  "/": ["Independent Web Developer in Augusta, GA", "Pamela J. Terrell builds small-business websites and custom web applications, with design, launch, and ongoing support. Based near Augusta, Georgia."],
  "/work-with-me": ["Website and Web Application Services", "Request a quote for a business website, redesign, custom web app, maintenance, or integration. Work with Pamela J. Terrell in Augusta or remotely."],
  "/web-development-augusta-ga": ["Web Development for Augusta Businesses", "Independent web design and development for Augusta-area businesses and organizations. Explore responsive websites, modern redesigns, and custom React applications."],
  "/projects": ["Web Development Portfolio", "Explore Pamela J. Terrell’s websites and web applications, including membership platforms, consumer tools, and a community website maintained since 2016."],
  "/stabile-usa": ["About Stabile USA", "Learn about Stabile USA, Pamela J. Terrell’s independent digital product studio for web and mobile products."],
  "/projects/crime-recordings": ["Crime Recordings Case Study", "How Pamela J. Terrell built a public-records archive with structured publishing tools, media storage, and subscriber access.", "crime-recordings-preview.jpg"],
  "/projects/night-listener": ["Night Listener Case Study", "How Pamela J. Terrell created an audio storytelling platform with a listening experience, memberships, and story submissions.", "/images/night-listener-preview.png"],
  "/projects/medicare-before-you-switch": ["Medicare Before You Switch Case Study", "How Pamela J. Terrell combined consumer education with a Medicare website verification tool and clear explanations of its checks.", "medicare-before-you-switch.jpg"],
  "/projects/super-cleaning-lady": ["Super Cleaning Lady Case Study", "How Pamela J. Terrell developed a character-led site that presents everyday cleaning and home projects as approachable missions.", "supercleaninglady.jpg"],
  "/projects/i-love-you-so-much": ["I Love You So Much Case Study", "How Pamela J. Terrell built a moderated community Love Wall and private love-note sharing for the web and Apple App Store.", "i-love-you-so-much-preview.jpg"],
  "/projects/pinkerton-williams": ["Pinkerton Williams DAV Chapter 18 Case Study", "How Pamela J. Terrell built and has maintained a volunteer website for Pinkerton Williams DAV Chapter 18 since 2016.", "PW.jpg"],
};

export function getPageMetadata(pathname, imageUrl) {
  const path = pathname.replace(/\/+$/, "").toLowerCase() || "/";
  const page = Object.hasOwn(pages, path) ? pages[path] : undefined;
  const [label, description] = page ?? ["Page Not Found", "Find current services and selected work from Pamela J. Terrell."];
  return {
    title: `${label} | Pamela J. Terrell`,
    description,
    canonical: page ? origin + path : null,
    image: new URL(imageUrl || portrait, origin).href,
    imageAlt: imageUrl ? label.replace(/ Case Study$/, "") + " project screenshot" : "Pamela J. Terrell, independent web developer",
    robots: page ? "index,follow" : "noindex,follow",
  };
}

export function metadataTags({ title, description, canonical, image, imageAlt, robots }) {
  return [
    ["meta", { name: "description", content: description }],
    ["meta", { name: "robots", content: robots }],
    ...(canonical ? [["link", { rel: "canonical", href: canonical }]] : []),
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    ...(canonical ? [["meta", { property: "og:url", content: canonical }]] : []),
    ["meta", { property: "og:image", content: image }],
    ["meta", { property: "og:image:alt", content: imageAlt }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:description", content: description }],
    ["meta", { name: "twitter:image", content: image }],
    ["meta", { name: "twitter:image:alt", content: imageAlt }],
  ];
}
