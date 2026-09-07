export const caseStudies = {
  "crime-recordings": {
    introduction:
      "I created Crime Recordings for true-crime audiences and people researching particular cases who want access to original material rather than relying exclusively on summarized retellings.",
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Original case material is often scattered across agencies, difficult to request, delivered in inconsistent formats, and hard to understand without context. A production may contain recordings, photographs, documents, redactions, duplicates, and files that need careful explanation.",
          "A conventional article could summarize a case, and a folder could expose downloads. Neither would connect the people, dates, places, warnings, media, access levels, and continuing additions involved. I developed Crime Recordings as a complete publishing, membership, and operational system.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "I conceived Crime Recordings, defined its purpose and access model, established its brand and content structure, and designed and developed its public, member, and publishing experiences.",
          "I also identify cases, research the responsible agencies, submit public-records requests, review the productions, decide what is relevant and appropriate to publish, organize and describe the material, assign access levels, and continue operating the archive.",
        ],
      },
      {
        title: "How the product works",
        paragraphs: [
          "Visitors can discover cases, establish their context, review selected public recordings, images, and documents, and see which expanded materials are available to members. The authenticated experience supports account access, paid membership, and return access to member content.",
          "Behind the public interface, I research agencies, prepare requests, work through fees and production limitations, evaluate the received files, create structured case information, publish selected media, and test both access experiences. The publishing workflow is a central part of the product.",
        ],
      },
    ],
    decisions: [
      {
        title: "Structured cases instead of ordinary articles",
        context: "Each case can contain people, dates, locations, warnings, recordings, photographs, and documents.",
        decision: "Model cases and their media as structured records.",
        reason: "Structure supports consistent presentation, editing, discovery, access control, and repeatable publishing.",
        tradeoff: "It required substantially more data, administrative, and interface work than a conventional blog.",
      },
      {
        title: "Mixed public and member access",
        context: "Visitors need to understand the archive before joining, while expanded material creates continuing costs and work.",
        decision: "Keep selected files public and reserve most complete or expanded material for members.",
        reason: "The model balances meaningful public discovery with support for continued operation.",
        tradeoff: "Access rules and messaging must remain reliable across every supported media type.",
      },
      {
        title: "Context around original files",
        context: "A recording or document can be confusing or misleading when separated from its circumstances.",
        decision: "Present files within structured case pages with descriptions and warnings where appropriate.",
        reason: "Visitors need to understand what a file represents and how it relates to the case.",
        tradeoff: "Every publication requires editorial review and preparation rather than simply uploading raw files.",
      },
    ],
    technical:
      "Crime Recordings uses Next.js, React, TypeScript, and Tailwind CSS. Supabase supports structured case data, authentication, and member-access information; Stripe supports subscriptions; Cloudflare R2 supports large-media storage and delivery; Resend supports transactional email; and Vercel supports hosting and deployment.",
    considerations: {
      title: "Editorial and ethical care",
      paragraphs: [
        "Public availability does not remove the need for judgment. Agency productions may contain redactions, duplicates, sensitive information, or files that add little useful understanding. Some material requires a warning or careful description; some is excluded from publication.",
        "Crime Recordings distinguishes original source material from my contextual writing. It is not presented as comprehensive, official, or affiliated with a government or law-enforcement agency.",
      ],
    },
    outcomes: [
      "Active and publicly available since 2026",
      "Seven structured cases currently published",
      "Working authentication, subscriptions, and member access",
      "Public and member-restricted recordings, images, and documents",
      "Paid membership journey verified through real transactions",
      "Repeatable publishing and public-records acquisition workflow",
    ],
    lessons: [
      "The operating workflow is part of the product, not an implementation afterthought.",
      "Membership must be tested as a complete journey across account, payment, return access, and content.",
      "Every media type expands both technical and editorial responsibility.",
      "A structured model becomes more valuable as the archive expands.",
    ],
    next:
      "I am continuing to publish carefully selected cases, improve discovery, refine the member experience, strengthen publishing workflows, and expand the archive at a responsible operational pace.",
    quote:
      "I transformed a complicated idea into a functioning system I can research for, publish through, and continue operating.",
  },
  "night-listener": {
    introduction:
      "I created Night Listener for adults who find meaning in thoughtful stories about the moments that continue shaping relationships, choices, and self-understanding.",
    sections: [
      {
        title: "The idea",
        paragraphs: [
          "Some experiences remain with us long after the event itself has ended. People replay conversations, recognize old patterns, or understand a choice differently after hearing someone describe something similar.",
          "Much of the content around these subjects is presented as advice, debate, or quick judgment. Night Listener creates something quieter: a story that gives listeners room to recognize meaning without being handed one simple conclusion.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "I conceived Night Listener and developed its purpose, identity, atmosphere, content direction, access model, and member experience.",
          "I currently write and personally narrate every published Night Listener story, recording each performance in Audacity. I publish the stories, test the membership experience, maintain the live submission workflow, and continue operating the product through Stabile USA.",
        ],
      },
      {
        title: "Listening and participation",
        paragraphs: [
          "Listeners can discover stories, hear complete free stories and selected public previews, join for member content, and return through an authenticated experience. The complete paid membership journey has been verified through real transactions.",
          "Listeners may submit personal experiences for consideration. A submission does not guarantee publication, and sensitive or identifying details may require careful editorial treatment. Any additional use is governed by Night Listener’s published submission terms and privacy language.",
        ],
      },
    ],
    decisions: [
      {
        title: "Story instead of conventional advice",
        context: "Relationship content often favors rules, judgment, or quick certainty.",
        decision: "Build around experience, interpretation, and unresolved meaning.",
        reason: "Stories let listeners recognize themselves without being told exactly what to think or do.",
        tradeoff: "The product preserves ambiguity rather than always offering an immediate answer.",
      },
      {
        title: "A quiet, intimate atmosphere",
        context: "The stories involve private memories, tenderness, regret, and changed understanding.",
        decision: "Create a restrained, personal listening environment.",
        reason: "Writing, narration, visual presentation, and pacing work together to support reflection.",
        tradeoff: "A quiet product attracts attention differently from sensational entertainment.",
      },
      {
        title: "Free stories and member access",
        context: "New listeners need to experience the voice before deciding whether to join.",
        decision: "Offer complete free stories, member content, and selected public previews.",
        reason: "Public listening establishes trust while membership supports continued development.",
        tradeoff: "Free, preview, and member boundaries must remain clear and respectful.",
      },
    ],
    technical:
      "Supabase supports authentication, product data, member-access information, and listener submissions. Stripe supports paid membership, Vercel supports hosting and deployment, Resend supports transactional email, and Vercel Analytics and Google Analytics support site measurement. I record the narration in Audacity.",
    considerations: {
      title: "Story and editorial responsibility",
      paragraphs: [
        "Stories are inspired by real experiences without automatically being verbatim testimony. Identifying details may be changed, minimized, or omitted, and sensitive experiences require editorial judgment.",
        "Night Listener offers reflective storytelling rather than professional psychological, relationship, medical, or legal advice.",
      ],
    },
    outcomes: [
      "Active audio storytelling product launched in 2026",
      "Original stories written and currently narrated by Pamela",
      "Free stories, member content, and selected previews",
      "Paid membership journey verified through real transactions",
      "Live listener-submission workflow successfully tested",
      "Distinct product identity within Stabile USA",
    ],
    lessons: [
      "A story collection needs a shared emotional purpose to become a coherent product.",
      "Atmosphere changes how a listener receives and understands a story.",
      "Real experiences require care even when creatively developed.",
      "Participation creates opportunity and editorial responsibility.",
    ],
    next:
      "I am continuing to publish stories, improve discovery, refine the member experience, and develop listener participation while protecting the product’s quiet, reflective character.",
    quote:
      "Some experiences do not end when the moment is over. They remain in what we carry forward.",
  },
  "medicare-before-you-switch": {
    introduction:
      "I created Medicare Before You Switch for beneficiaries, people approaching eligibility, caregivers, and families trying to make sense of benefit claims and coverage decisions.",
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Medicare advertising can make one appealing benefit feel like the entire decision. A message may emphasize a flex card, give-back amount, or grocery allowance while saying less about networks, prescriptions, authorization, eligibility, or existing coverage.",
          "I designed the platform to create a pause before someone responds to urgency, shares personal information, or changes coverage.",
        ],
      },
      {
        title: "My role and grounding",
        paragraphs: [
          "I conceived the product, defined its content structure, researched and wrote its educational guidance, and designed and built its pages and website-verification workflow.",
          "I have held Georgia Property & Casualty and Life & Health insurance licenses since 2001. I created the product to apply that long-standing insurance background to consumer education—not to sell a particular plan or direct visitors toward an insurer.",
        ],
      },
      {
        title: "Two layers of website review",
        paragraphs: [
          "The first layer performs educational domain analysis. It examines characteristics such as HTTPS, Medicare-related language on a private domain, government-domain indicators, and benefit-oriented wording. These are reasons to investigate, not proof of legitimacy or wrongdoing.",
          "The second layer checks the submitted URL against Google Safe Browsing for known malware, social engineering, unwanted software, and potentially harmful applications. No known match is not presented as approval of an offer, insurer, or plan.",
        ],
      },
    ],
    decisions: [
      {
        title: "Create a pause",
        context: "Advertising often uses urgency, appealing benefits, and requests for immediate contact.",
        decision: "Center the product on checking and understanding before responding or switching.",
        reason: "A deliberate pause gives someone time to identify the advertiser and consider the wider decision.",
        tradeoff: "The platform improves questions rather than providing an individualized recommendation.",
      },
      {
        title: "Benefits alongside tradeoffs",
        context: "Supplemental benefits may receive more attention than networks, prescriptions, costs, or existing coverage.",
        decision: "Pair attractive extras with questions about the underlying coverage.",
        reason: "A benefit is meaningful only in the context of the complete plan and the person’s circumstances.",
        tradeoff: "The content must explain complexity without overwhelming visitors or drifting into personal advice.",
      },
      {
        title: "Two different safety questions",
        context: "Persuasive insurance language and known technical threats are not the same problem.",
        decision: "Combine educational domain indicators with Google Safe Browsing.",
        reason: "One layer identifies reasons for scrutiny; the other checks for known technical threats.",
        tradeoff: "The interface must prevent a clean technical result from sounding like a legitimacy judgment.",
      },
      {
        title: "Avoid sensitive profiles",
        context: "People evaluating offers may already be at risk of sharing unnecessary personal information.",
        decision: "Do not require a stored personal Medicare or health profile.",
        reason: "A consumer-safety product should reduce unnecessary exposure.",
        tradeoff: "The platform cannot and does not generate individualized coverage recommendations.",
      },
    ],
    technical:
      "The website checker uses a server-side JavaScript workflow to normalize an address, perform educational URL and domain analysis, and request a Google Safe Browsing threat check. Structured results are then returned to the visitor.",
    considerations: {
      title: "Trust and independence",
      paragraphs: [
        "Medicare Before You Switch is an independent consumer education and safety product. It is not Medicare, CMS, a government service, an insurer, an insurance agency, or a brokerage, and it is not affiliated with a particular insurance company. It does not recommend a specific insurer or plan or provide individualized coverage recommendations.",
        "I designed the educational tools without requiring visitors to create a stored personal Medicare or health profile. The checker evaluates the submitted address rather than asking for health history, a Medicare number, or coverage details.",
      ],
    },
    outcomes: [
      "Active and publicly available since 2026",
      "Functioning two-layer website-verification workflow",
      "Plain-language coverage and advertising guidance",
      "Practical phone-safety and reporting resources",
      "Printable phone-safety card",
      "No insurer or plan recommendations",
    ],
    lessons: [
      "A trustworthy tool must explain what it cannot prove.",
      "Technical safety and insurance legitimacy are different questions.",
      "Good safety design creates a pause without creating panic.",
      "Data minimization can be a product feature.",
    ],
    next:
      "I am continuing to refine the checker’s explanations, review official resources, improve accessibility and readability, and add safety tools only where they address a demonstrated need.",
    quote:
      "Before someone calls, clicks, shares information, or switches coverage, they should have room to understand what still needs verification.",
  },
  "super-cleaning-lady": {
    introduction:
      "I created Super Cleaning Lady for people who know something needs to be cleaned but could use a less miserable way to begin.",
    sections: [
      {
        title: "The problem is the mess—not the person",
        paragraphs: [
          "Cleaning content often assumes the visitor is motivated, organized, and ready to follow a perfect routine. Idealized rooms and rigid schedules can make an overwhelmed person feel defeated before starting.",
          "Super Cleaning Lady changes the emotional starting point. A room becomes a rescue operation, laundry becomes Laundry Mountain, and last-minute company becomes a crisis with a practical response.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "I originated the concept and developed its characters, names, humorous voice, comic situations, cleaning missions, visual identity, and room-rescue structure.",
          "I write the stories and practical content, direct the visual work, design and build the website, and continue expanding the product through Stabile USA.",
        ],
      },
      {
        title: "Missions and characters",
        paragraphs: [
          "Recurring characters give the product recognizable voices and relationships, while missions turn broad advice into specific household situations. Comics make those situations memorable and give ordinary problems a life beyond a checklist.",
          "Laundry Mountain turns a multi-step frustration into a named mission. Company’s Coming recognizes the panic of limited time, then focuses attention on what matters most instead of demanding perfection.",
        ],
      },
    ],
    decisions: [
      {
        title: "Motivation without shame",
        context: "Cleaning content can make an overwhelmed visitor feel judged before beginning.",
        decision: "Use supportive humor and superhero mission framing.",
        reason: "People are more likely to begin when a mess is not treated as a character flaw.",
        tradeoff: "The humor must respect the difficulty and never obscure the practical guidance.",
      },
      {
        title: "Missions instead of generic articles",
        context: "Broad advice feels abstract when someone is standing in one specific messy room.",
        decision: "Organize guidance around recognizable room rescues and situations.",
        reason: "A mission creates a clearer starting point and memorable practical boundaries.",
        tradeoff: "Each mission needs its own scope, structure, tone, and visual treatment.",
      },
      {
        title: "A connected character universe",
        context: "Repeated cleaning subjects can become visually and emotionally interchangeable.",
        decision: "Create recurring characters who inhabit the same household world.",
        reason: "Characters provide continuity, recognizable voices, humor, and room for future stories.",
        tradeoff: "Appearance, personality, props, and relationships require active consistency decisions.",
      },
      {
        title: "Entertainment and usefulness together",
        context: "Entertainment attracts attention while practical instructions give it somewhere useful to go.",
        decision: "Design comics, characters, and cleaning missions to support one another.",
        reason: "Humor lowers the barrier to starting; guidance ensures the product provides practical value.",
        tradeoff: "Neither the jokes nor the instructions can be allowed to erase the other.",
      },
    ],
    technical:
      "Super Cleaning Lady is built with Next.js 16, React, TypeScript, and Tailwind CSS 4. The application supports an expanding collection of characters, missions, comics, and resources, with Next.js search and social metadata, Geist fonts, Vercel Analytics, and Google Analytics.",
    creativeProcess:
      "I developed the characters, names, comic situations, and visual concepts, then directed and refined AI-generated imagery for the finished product. Maintaining a recurring cast required active decisions about composition, personality, labels, props, continuity, and which results belonged in the Super Cleaning Lady world.",
    considerations: {
      title: "Creative and practical care",
      paragraphs: [
        "The humor exaggerates the household situation rather than shaming the visitor. General cleaning and entertainment content is not presented as a substitute for qualified help with hazardous materials, mold, pests, structural concerns, electrical work, plumbing, or other specialized risks.",
      ],
    },
    outcomes: [
      "Active and publicly available since 2026",
      "Distinct comedic identity and encouraging voice",
      "Original recurring character universe",
      "Practical room-rescue missions",
      "Comics, visual storytelling, and room-specific guidance",
      "Printable and broader interactive resources",
    ],
    lessons: [
      "Humor can lower the emotional barrier to beginning.",
      "A recurring character brand needs a consistent system.",
      "Missions make broad guidance more approachable.",
      "Entertainment and utility strengthen one another when both are intentional.",
    ],
    next:
      "Super Cleaning Lady is focused on strengthening its character universe, practical missions, comics, and audience experience. Future commercial possibilities remain open, but the product’s identity and usefulness come first.",
    quote: "I wanted the mess to be the problem—not the person dealing with it.",
  },

    "i-love-you-so-much": {
    introduction:
      "I created I Love You So Much as a digital space built around something most social platforms treat as secondary: giving people a thoughtful place to tell someone they are loved, appreciated, missed, remembered, or simply important.",

    sections: [
      {
        title: "The idea",
        paragraphs: [
          "People say meaningful things in texts, cards, social posts, and private conversations, but those experiences are usually scattered across tools designed for broader purposes. I wanted to build a product where expressing love and appreciation was the purpose rather than an incidental feature.",
          "The product developed into two connected experiences: a moderated public Love Wall where people can leave positive messages for others, and a private-note experience for something intended for one recipient rather than an audience.",
        ],
      },

      {
        title: "My role",
        paragraphs: [
          "I conceived the product, developed its name and identity, defined the public and private sharing models, designed the user experience, and built the frontend, backend, moderation workflow, sharing system, and administrative tools.",
          "I also designed the operating rules around public submissions, reactions, reporting, moderation, and private-link behavior. I continue testing the live experience, reviewing submissions and reports, refining the interface, and operating the product through Stabile USA.",
        ],
      },

      {
        title: "Public love and private sharing",
        paragraphs: [
          "The public Love Wall allows visitors to submit messages across categories including romantic love, family, friendship, gratitude, missing someone, pets, and self-love. New public submissions enter a moderation queue before appearing on the wall.",
          "Approved messages can receive persistent heart reactions and can be reported by visitors. The authenticated admin experience provides separate queues for pending submissions and reported messages so I can approve, reject, keep, or remove content as appropriate.",
          "Private love notes follow a different path. The sender writes a note, chooses an envelope theme, previews the finished experience, and receives a unique link that can be copied, shared, or sent by text. The recipient opens a themed reveal page that retrieves the saved note without placing it on the public Love Wall.",
        ],
      },
    ],

    decisions: [
      {
        title: "Public and private experiences instead of one sharing model",
        context:
          "Some expressions of love are appropriate for a community wall, while others are meant for one specific person.",
        decision:
          "Build separate public and private note workflows within the same product.",
        reason:
          "The distinction lets people choose whether their message is part of a shared community experience or a direct one-to-one gesture.",
        tradeoff:
          "The two experiences require different database rules, interfaces, routing, privacy language, and moderation expectations.",
      },

      {
        title: "Moderation before public publication",
        context:
          "Anonymous public submissions can be positive and heartfelt, but an open submission form can also be misused.",
        decision:
          "Place public submissions into a pending moderation state rather than publishing them immediately.",
        reason:
          "Moderation protects the tone of the Love Wall and gives me an opportunity to stop inappropriate, identifying, harassing, or unrelated material before it becomes public.",
        tradeoff:
          "The community experience requires ongoing human review rather than operating as a completely automatic feed.",
      },

      {
        title: "Persistent reactions without requiring an account",
        context:
          "Heart reactions should feel lightweight, but simply changing a number in the browser would not create a real shared response.",
        decision:
          "Store reactions in the backend while using a browser identifier to limit duplicate reactions from the same browser.",
        reason:
          "Visitors can participate without creating an account, while the heart count remains persistent across sessions and visitors.",
        tradeoff:
          "Browser-based identity is intentionally lightweight and is not equivalent to authenticated user identity.",
      },

      {
        title: "Reporting without public comments",
        context:
          "Community participation creates moderation responsibilities, while comments would introduce a much larger conversation and abuse surface.",
        decision:
          "Support reactions and reporting but not public comments in the initial product.",
        reason:
          "The Love Wall can remain centered on the submitted message itself while still giving visitors a way to flag content that needs review.",
        tradeoff:
          "Visitors can respond with a heart but cannot publicly discuss or reply to a message.",
      },

      {
        title: "Unlisted private links rather than accounts for recipients",
        context:
          "A private love note should be easy to send to someone who may never have visited the site before.",
        decision:
          "Use unique, unlisted share tokens instead of requiring recipients to create accounts.",
        reason:
          "The recipient can move directly from a text or shared link into the note without registration friction.",
        tradeoff:
          "Anyone who obtains the unique link can read the note, so the interface explicitly tells senders to share it only with the intended person. The notes are link-accessible rather than end-to-end encrypted.",
      },

      {
        title: "Make the envelope choice part of the whole experience",
        context:
          "The original private-note design was strongly blush and pink, which did not fit every sender, recipient, or relationship.",
        decision:
          "Add Blush, Deep Red, Navy, Forest, Black, and Ivory themes that carry from composition through preview, social sharing, and final reveal.",
        reason:
          "Color gives the sender a simple way to make the gesture feel more personal without complicating the writing experience.",
        tradeoff:
          "Theme information has to remain synchronized across database records, frontend routes, serverless preview generation, social metadata, and reveal styling.",
      },

      {
        title: "Branded share previews instead of raw URLs",
        context:
          "A plain link in a text message does not communicate the emotional experience waiting behind it.",
        decision:
          "Create themed Open Graph preview routes and matching preview artwork for private love notes.",
        reason:
          "A recipient can see that something intentional and personal is waiting before opening the link.",
        tradeoff:
          "The sharing flow requires server-side routing and metadata generation in addition to the React application itself.",
      },
    ],

    technical:
      "I Love You So Much is a React application backed by Supabase and PostgreSQL. Supabase stores public love messages, private notes, reactions, reports, moderation state, and administrative access. Row Level Security and security-definer database functions limit public operations to the specific actions required by each experience. Supabase Auth provides authenticated administrative access, with Resend configured for branded authentication email. Vercel hosts the application and provides serverless functions used for themed Open Graph sharing previews and private-note routing.",

    considerations: {
      title: "Privacy, moderation, and emotional context",
      paragraphs: [
        "The product encourages heartfelt expression without encouraging people to publish unnecessary private information. Public-facing guidance asks visitors not to include phone numbers, email addresses, home addresses, or other identifying details in Love Wall submissions.",
        "Private notes do not appear on the public Love Wall, but they are intentionally accessible to anyone who possesses the unique share link. The product describes that limitation directly rather than presenting link-accessible notes as encrypted private communication.",
        "Anonymous participation makes the experience easier to use but also increases the importance of moderation, reporting, database validation, rate-limiting considerations, and careful control over which backend operations are available to unauthenticated visitors.",
      ],
    },

    outcomes: [
      "Active full-stack product launched in 2026",
      "Moderated public Love Wall with multiple message categories",
      "Persistent heart reactions without mandatory visitor accounts",
      "Visitor reporting with an authenticated moderation workflow",
      "Secure administrative approval and removal tools",
      "Private one-to-one love-note creation using unique share tokens",
      "Six selectable envelope and reveal themes",
      "Sender preview, copy, native sharing, and text-message flows",
      "Dynamic themed Open Graph previews for shared private notes",
      "Supabase-backed public, private, moderation, and administrative workflows",
    ],

    lessons: [
      "A simple emotional idea can require substantial product architecture once public participation and private sharing are added.",
      "Anonymous participation works best when the permitted backend actions are deliberately narrow.",
      "Moderation is part of the product design, not merely an administrative feature.",
      "A private-feeling experience still needs precise language about what privacy the technology actually provides.",
      "Small visual choices such as an envelope color can become system-wide data and routing decisions when they must persist across every stage of a sharing journey.",
      "Testing the actual sender-to-recipient journey reveals problems that cannot be found by testing the composer or database independently.",
    ],

    next:
      "I am continuing to test the complete sharing and moderation journeys, strengthen protections against automated abuse, refine the private-note experience, and grow the Love Wall carefully while preserving the warm and positive identity that defines the product.",

    quote:
      "Sometimes “I love you” just isn’t big enough.",
  },

  "pinkerton-williams": {
    introduction:
      "PinkertonWilliams.org gives Pinkerton Williams DAV Chapter 18 in Augusta, Georgia, a dependable online home for events, meeting details, office information, and contact.",
    sections: [
      {
        title: "From class project to community resource",
        paragraphs: [
          "I created PinkertonWilliams.org in 2016 as my final project for a college Web Design class. When the class ended, I kept working on it because the site had become useful to a real organization.",
          "What began as a college Web Design final project became the chapter’s first and only website—and an active community resource I have maintained and modernized since 2016.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "I organize the chapter’s public information, maintain meeting and office details, support event communication, preserve information about previous events, and maintain its form and direct email options.",
          "I also continue reviewing content, improving navigation and presentation, and modernizing the technology as my development skills and web standards evolve.",
        ],
      },
      {
        title: "Clear information and contact",
        paragraphs: [
          "Visitors often arrive with one direct question: when is the meeting, where is the office, what event is next, what has the chapter been doing, or how can I contact someone? The site brings those needs into one consistent destination.",
          "Upcoming information supports participation, while previous events preserve a visible history of chapter activity. Formspree and direct email provide more than one practical contact path.",
        ],
      },
    ],
    decisions: [
      {
        title: "Continue beyond the assignment",
        context: "The website began as a college Web Design final project.",
        decision: "Keep it active and continue developing it after the course.",
        reason: "The chapter benefited from a real online home with practical community value.",
        tradeoff: "A volunteer website creates continuing responsibilities without the structure of a paid engagement.",
      },
      {
        title: "One dependable destination",
        context: "Veterans, families, and supporters need direct access to meetings, events, office details, and contact.",
        decision: "Use the website as the chapter’s central public information destination.",
        reason: "One consistent site is easier to share and navigate than temporary announcements.",
        tradeoff: "Its usefulness depends on keeping changing information current.",
      },
      {
        title: "Multiple contact paths",
        context: "Visitors have different levels of comfort with web forms and direct email.",
        decision: "Provide Formspree communication alongside direct email.",
        reason: "Multiple methods make the chapter easier to reach.",
        tradeoff: "Every public contact path must remain accurate, functional, and maintained.",
      },
      {
        title: "Modernize a live website",
        context: "A site created in 2016 cannot remain technically unchanged and continue meeting current expectations.",
        decision: "Rebuild and modernize it as skills and standards evolve.",
        reason: "Modernization improves maintenance, mobile presentation, navigation, and content updates.",
        tradeoff: "Each transition must preserve important content, links, identity, and visitor familiarity.",
      },
    ],
    technical:
      "The current website is built with React 19 and Vite 6, with React Router supporting its page structure, Formspree supporting visitor communication, and React Icons supporting interface elements.",
    considerations: {
      title: "Accessibility and community care",
      paragraphs: [
        "The audience may include older veterans and family members seeking direct information. Plain navigation, readable typography, sufficient contrast, mobile usability, keyboard access, descriptive links, and understandable forms remain ongoing design and maintenance considerations.",
      ],
    },
    outcomes: [
      "Chapter’s first and only website",
      "Active and maintained since 2016",
      "Upcoming and previous event information",
      "Monthly meeting and DAV office details",
      "Formspree and direct email contact options",
      "Current React and Vite implementation",
    ],
    lessons: [
      "A class project can become a lasting online resource.",
      "Maintenance is part of development, not work that begins after it.",
      "Volunteer work still carries professional responsibility.",
      "Community websites benefit from direct paths and limited complexity.",
    ],
    next:
      "I will continue maintaining current information, improving accessibility and mobile usability, organizing event history, refining contact paths, and making recurring updates easier to manage.",
    quote:
      "Finishing the class did not end the project. The website had become useful to a real organization, so I chose to keep supporting it.",
  },
};

export function getCaseStudy(slug) {
  return caseStudies[slug];
}
