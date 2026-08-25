import crimeRecordingsPreview from "../assets/crime-recordings-preview.png";
import medicarePreview from "../assets/medicare-before-you-switch.png";
import superCleaningLadyPreview from "../assets/supercleaninglady.png";
import pinkertonWilliamsPreview from "../assets/PW.jpg";
import vinoPairingsPreview from "../assets/pairings.png";
import lifeStoriesPreview from "../assets/LifeStories.png";
import redLipsticksPreview from "../assets/redlipsticks.png";
import psychologicalManipulationPreview from "../assets/psych.png";
import carePathWellPreview from "../assets/carepath.png";
import beforeAfterPreview from "../assets/beforeandafter.png";
import cosmicZodiacPreview from "../assets/cosmic.png";
import bigPacePreview from "../assets/pace.png";
import vaBuddyPreview from "../assets/getvabuddy.jpg";
import manWomenDesirePreview from "../assets/desire.jpg";
import sensualityQuizPreview from "../assets/senses.png";
import mixerPreview from "../assets/mixer.png";

export const externalSites = {
  stabileUSA: "https://stabileusa.com",
};

export const featuredProjects = [
  {
    featured: true,
    index: "01",
    name: "Crime Recordings",
    slug: "crime-recordings",
    category: "Public-records archive and membership platform",
    classification: "Founder-led product",
    status: "Active and continuing to grow",
    launchYear: 2026,
    role: "Founder, product owner, and full-stack product developer",
    parent: "Stabile USA",
    image: crimeRecordingsPreview,
    imageAlt: "Crime Recordings public archive",
    liveUrl: "https://crimerecordings.com",
    liveLabel: "Visit Crime Recordings",
    caseStudyPath: "/projects/crime-recordings",
    ownership: "A Stabile USA product · Conceived, built, and operated by Pamela J. Terrell",
    signature: {
      problem: "Difficult-to-navigate public-records productions",
      owned: "Product direction, full-stack build, research, and publishing",
      operating: "Public archive, membership, and repeatable publishing workflow",
    },
    featuredDecision: "Structure each case and its media as a repeatable publishing system rather than an ordinary article or file directory.",
    thesis:
      "Crime Recordings turns difficult-to-navigate public-records productions into structured case experiences containing original recordings, documents, photographs, and contextual information.",
    preview:
      "I conceived and built the product, defined its public and member access model, created its publishing tools, and continue to research cases, submit public-records requests, organize material, publish content, and operate the platform.",
    labels: [
      "Product strategy and design",
      "Full-stack development",
      "Membership and subscriptions",
      "Structured content systems",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Cloudflare R2",
      "Resend",
      "Vercel",
    ],
    tone: "flagship",
  },
  {
    featured: true,
    index: "02",
    name: "Night Listener",
    slug: "night-listener",
    category: "Audio storytelling product",
    classification: "Founder-led product",
    status: "Active and continuing to grow",
    launchYear: 2026,
    role: "Founder, product owner, product developer, writer, and narrator",
    parent: "Stabile USA",
    image: "/images/night-listener-preview.png",
    imageAlt: "Night Listener listening experience",
    liveUrl: "https://stabileusa.com/listen",
    liveLabel: "Listen to Night Listener",
    caseStudyPath: "/projects/night-listener",
    ownership: "A Stabile USA product · Conceived, built, and operated by Pamela J. Terrell",
    signature: {
      problem: "Meaningful personal experiences without a quiet place to be heard",
      owned: "Product direction, writing, narration, development, and publishing",
      operating: "Listening, membership, and tested submission experiences",
    },
    featuredDecision: "Build around reflective storytelling rather than conventional advice, leaving listeners room to recognize their own meaning.",
    thesis:
      "Night Listener shares and uncovers the life experiences people continue to carry—especially the moments that shape how they understand relationships, choices, and themselves.",
    preview:
      "I conceived the product, developed its reflective atmosphere, and created its story, listening, membership, and submission experiences. I currently write and personally narrate every published story.",
    labels: [
      "Product direction and identity",
      "Story development and writing",
      "Membership experience",
      "Listener participation",
    ],
    stack: [
      "Supabase",
      "Stripe",
      "Vercel",
      "Resend",
      "Vercel Analytics",
      "Google Analytics",
      "Audacity",
    ],
    tone: "reflective",
  },
  {
    featured: true,
    index: "03",
    name: "Medicare Before You Switch",
    slug: "medicare-before-you-switch",
    category: "Consumer education and safety platform",
    classification: "Founder-led product",
    status: "Active and publicly available",
    launchYear: 2026,
    role: "Founder, product owner, product developer, and content creator",
    parent: "Stabile USA",
    image: medicarePreview,
    imageAlt: "Medicare Before You Switch website checker",
    liveUrl: "https://medicarebeforeyouswitch.com",
    liveLabel: "Visit Medicare Before You Switch",
    caseStudyPath: "/projects/medicare-before-you-switch",
    ownership: "A Stabile USA product · Conceived, built, and operated by Pamela J. Terrell",
    signature: {
      problem: "Coverage decisions shaped by urgency and incomplete benefit claims",
      owned: "Product strategy, insurance-grounded content, and development",
      operating: "Education, practical guidance, and a website verification tool",
    },
    featuredDecision: "Separate educational domain indicators from technical-threat checking so one result never implies what the other cannot prove.",
    thesis:
      "Medicare Before You Switch helps people pause, verify Medicare-related advertising, and understand coverage tradeoffs before changing coverage or sharing personal information.",
    preview:
      "I created the platform to apply my long-standing insurance background to consumer education—not to sell a particular plan or direct visitors toward an insurer.",
    labels: [
      "Consumer education and safety",
      "Product strategy and content",
      "Website verification tool",
      "Privacy-conscious design",
    ],
    stack: ["Server-side JavaScript", "Google Safe Browsing API"],
    tone: "trust",
  },
  {
    featured: true,
    index: "04",
    name: "Super Cleaning Lady",
    slug: "super-cleaning-lady",
    category: "Comedic cleaning and home-living brand",
    classification: "Founder-led product",
    status: "Active and publicly available",
    launchYear: 2026,
    role: "Founder, product owner, product developer, writer, and creative director",
    parent: "Stabile USA",
    image: superCleaningLadyPreview,
    imageAlt: "Super Cleaning Lady character and cleaning mission",
    liveUrl: "https://supercleaninglady.com",
    liveLabel: "Visit Super Cleaning Lady",
    caseStudyPath: "/projects/super-cleaning-lady",
    ownership: "A Stabile USA product · Conceived, built, and operated by Pamela J. Terrell",
    signature: {
      problem: "Household work that feels overwhelming or shame-filled",
      owned: "Product development, writing, characters, and creative direction",
      operating: "Practical missions, comics, and a connected character universe",
    },
    featuredDecision: "Make the mess the problem—not the person dealing with it—and use humor to create a practical starting point.",
    thesis:
      "Super Cleaning Lady turns everyday messes, repairs, clutter, and household frustration into approachable superhero missions through practical guidance, original characters, comics, and visual storytelling.",
    preview:
      "I created the connected character universe, comic situations, and room-rescue approach, then designed and built the product so cleaning feels less overwhelming—and beginning does not require shame or perfection.",
    labels: [
      "Product and brand development",
      "Original characters and comics",
      "Practical room-rescue missions",
      "Creative direction",
    ],
    stack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS 4",
      "Vercel Analytics",
      "Google Analytics",
    ],
    tone: "playful",
  },
  {
    featured: true,
    index: "05",
    name: "Pinkerton Williams DAV Chapter 18",
    slug: "pinkerton-williams",
    category: "Volunteer community website",
    classification: "Volunteer community work",
    status: "Active and maintained since 2016",
    launchYear: 2016,
    role: "Volunteer website developer and long-term maintainer",
    organization: "Pinkerton Williams DAV Chapter 18",
    image: pinkertonWilliamsPreview,
    imageAlt: "Pinkerton Williams DAV Chapter 18 website",
    liveUrl: "https://pinkertonwilliams.org",
    liveLabel: "Visit PinkertonWilliams.org",
    caseStudyPath: "/projects/pinkerton-williams",
    ownership: "Volunteer community commitment · Maintained since 2016",
    signature: {
      problem: "Chapter information without a dependable online home",
      owned: "Volunteer website development and long-term maintenance",
      operating: "Events, meetings, office information, and contact options",
    },
    featuredDecision: "Modernize the technology while preserving the familiar information and dependable access the chapter relies on.",
    thesis:
      "What began as a college Web Design final project became the chapter’s first and only website—and an active community resource I have maintained and modernized since 2016.",
    preview:
      "PinkertonWilliams.org gives the chapter a dependable online home for upcoming and previous events, monthly meeting details, DAV office information, and multiple contact options.",
    labels: [
      "Volunteer community work",
      "Long-term website maintenance",
      "Information architecture",
      "React and Vite modernization",
    ],
    stack: ["React 19", "Vite 6", "React Router", "Formspree", "React Icons"],
    tone: "community",
  },
];

export const supportingProjects = [
  {
    featured: false,
    group: "Story, Reflection, and Human Experience",
    name: "Life Stories Now",
    description: "A narrative platform centered on memory, reflection, and shared human experience.",
    url: "https://lifestoriesnow.com",
    image: lifeStoriesPreview,
  },
  {
    featured: false,
    group: "Story, Reflection, and Human Experience",
    name: "Psychological Manipulation",
    description: "A reference exploring influence, emotional patterns, and behavioral dynamics.",
    url: "https://psychological-manipulation.com",
    image: psychologicalManipulationPreview,
  },
  {
    featured: false,
    group: "Story, Reflection, and Human Experience",
    name: "The Man Women Desire",
    description: "An interactive assessment exploring confidence, attraction, and relational dynamics.",
    url: "https://themanwomendesire.com",
    image: manWomenDesirePreview,
  },
  {
    featured: false,
    group: "Story, Reflection, and Human Experience",
    name: "Sensuality Quiz",
    description: "A guided experience exploring connection, awareness, and emotional presence.",
    url: "https://sensualityquiz.com",
    image: sensualityQuizPreview,
  },
  {
    featured: false,
    group: "Story, Reflection, and Human Experience",
    name: "Cosmic Zodiac Astrology",
    description: "An astrology experience focused on symbolic interpretation.",
    url: "https://cosmiczodiacastrology.com",
    image: cosmicZodiacPreview,
  },
  {
    featured: false,
    group: "Practical and Community Platforms",
    name: "Get VA Buddy",
    description: "A simplified helper for finding and navigating printable VA forms.",
    url: "https://getvabuddy.com",
    image: vaBuddyPreview,
  },
  {
    featured: false,
    group: "Practical and Community Platforms",
    name: "CarePathWell",
    description: "A centralized intake and scheduling experience for behavioral health coordination.",
    url: "https://carepathwell.com",
    image: carePathWellPreview,
  },
  {
    featured: false,
    group: "Practical and Community Platforms",
    name: "Before and After Vault",
    description: "A private and community-based platform for documenting transformation.",
    url: "https://beforeandaftervault.com",
    image: beforeAfterPreview,
  },
  {
    featured: false,
    group: "Practical and Community Platforms",
    name: "Big Pace Barbershop & Beauty Salon 2",
    description: "A local-business website supporting visibility and appointment flow.",
    url: "https://bigpacebarbershopandbeautysalon2.com",
    image: bigPacePreview,
  },
  {
    featured: false,
    group: "Consumer Products and Experiments",
    name: "VinoPairings",
    description: "VinoPairings is an interactive wine-pairing product that helps visitors explore pairing ideas and consult a user-facing AI sommelier. What began as my 2024 Per Scholas Software Engineering final project and first full-stack application became an actively maintained product that I continued reshaping after the course ended.",
    url: "https://vinopairings.com",
    liveLabel: "Visit VinoPairings",
    image: vinoPairingsPreview,
    classification: "Founder-led product",
    status: "Actively operated",
    launchYear: 2024,
    relationship: "Created and operated by Pamela J. Terrell",
    marker: "Development Milestone · First Full-Stack Application",
    switchboardFeatured: true,
    switchboardIndex: "06",
    switchboardEyebrow: "Development Milestone · First Full-Stack Application · 2024",
    switchboardCategory: "Interactive wine-pairing product",
    switchboardSignature: {
      problem: "Help visitors move from uncertainty about wine pairings toward useful, approachable recommendations.",
      owned: "Created as Pamela’s first full-stack application and continued as an independently operated product after the course ended.",
      operating: "Interactive pairing content and a user-facing AI sommelier supported by protected server-side responses.",
    },
    switchboardDecision: "I treated the course project as a beginning rather than a finished assignment, continuing to reshape both the experience and its architecture.",
    switchboardTechnical: "Next.js App Router and React with Tailwind CSS, local pairing content, and the OpenAI Responses API through protected server-side streaming and fallback routes. Chat history remains browser-local, and the current product has no database dependency.",
    origin: "VinoPairings began in 2024 as my Per Scholas Software Engineering final project and first full-stack application. I continued developing it after the course, later adding a user-facing AI sommelier and replacing its original database-backed architecture with a leaner Next.js implementation.",
    milestone: "Pamela’s first full-stack application and Per Scholas Software Engineering final project",
    architecture: "Next.js application with local pairing content and protected server-side AI routes",
    stack: ["Next.js 13.5", "React 18", "Tailwind CSS 3", "OpenAI Responses API", "Vercel Analytics", "Google Analytics"],
    capabilities: ["Pairing finder", "User-facing AI sommelier", "AI chatbot integration"],
  },
  {
    featured: false,
    group: "Consumer Products and Experiments",
    name: "RedLipsticks.com",
    description: "A beauty and lifestyle platform about red lipstick, personal style, and confidence.",
    url: "https://redlipsticks.com",
    liveLabel: "Visit RedLipsticks.com",
    image: redLipsticksPreview,
    classification: "Founder-led consumer product",
  },
  {
    featured: false,
    group: "Consumer Products and Experiments",
    name: "Mixer",
    description: "A playful interactive martini-building experiment.",
    url: "https://mixer.pamelajterrell.com",
    image: mixerPreview,
    imageAlt: "Mixer interface for choosing a base, modifiers, and garnish before shaking a custom martini",
  },
];

export const supportingGroups = [
  "Story, Reflection, and Human Experience",
  "Practical and Community Platforms",
  "Consumer Products and Experiments",
];

export const switchboardFeaturedProjects = [
  ...featuredProjects,
  ...supportingProjects
    .filter((project) => project.switchboardFeatured)
    .map((project) => ({
      ...project,
      featured: true,
      index: project.switchboardIndex,
      category: project.switchboardCategory || project.group,
      thesis: project.description,
      signature: project.switchboardSignature,
      featuredDecision: project.switchboardDecision,
    })),
];

export const switchboardGroups = [
  { name: "Featured Products", projects: switchboardFeaturedProjects },
  ...supportingGroups.map((name) => ({
    name,
    projects: supportingProjects.filter((project) => project.group === name && !project.switchboardFeatured),
  })),
];

export const portfolioProjects = switchboardGroups.flatMap((group) => group.projects);

export function getFeaturedProject(slug) {
  return featuredProjects.find((project) => project.slug === slug);
}

export function getSupportingProject(name) {
  return supportingProjects.find((project) => project.name === name);
}

export function getProjectLiveLabel(project) {
  return project.liveLabel || `Visit ${project.name}`;
}
