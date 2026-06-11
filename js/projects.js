// ============================================================
// PROJECT DATA — edit this file to change any text on the site.
// Images: drop files into /images/ using the filenames below.
// ============================================================

const PROJECTS = [
  {
    id: "koiworld",
    year: "2015",
    category: "Art",
    title: "Futuristic Koiworld",
    tagline: "Where it started: paint, depth, and an audience that looked twice.",
    summary:
      "A painting of a 3D koi pond on a vertical board — flat surface, dimensional illusion. Before any product work, this was the first lesson in making people stop and look.",
    body: [
      "Futuristic Koiworld was painted on a vertical board, built to read as a koi pond you could fall into. The challenge was depth: layering color and light until a flat panel held real dimension.",
      "It's the earliest piece on this timeline for a reason. Everything after it — branding, products, furniture — comes back to the same instinct: make the thing worth a second look."
    ],
    specs: { Medium: "Painting on board", Role: "Artist", Deliverables: "Original painting" },
    images: ["koiworld-hero.jpg", "koiworld-detail.jpg"]
  },
  {
    id: "eatdrinkmakeart",
    year: "2015",
    category: "Client Work",
    title: "Eat Drink Make Art",
    tagline: "First client brief — a flyer for Dream Love Grow.",
    summary:
      "A flyer designed for the Eat Drink Make Art event: template, final flyer, and an in-context mockup. The first time my work had a deadline, a client, and a job to do.",
    body: [
      "Dream Love Grow needed a flyer for their Eat Drink Make Art event. The work covered the full small-brief arc: a reusable template, the finished flyer, and a mockup showing it in the wild.",
      "Small project, big shift — design stopped being just expression and became communication with a purpose."
    ],
    specs: { Client: "Dream Love Grow", Role: "Graphic Designer", Deliverables: "Template, flyer, mockup" },
    images: ["edma-template.jpg", "edma-flyer.jpg", "edma-mockup.jpg"]
  },
  {
    id: "thegrind",
    year: "2018",
    category: "Client Work",
    title: "The Grind",
    tagline: "A coffee shop identity, from sketchbook to storefront mockup.",
    summary:
      "Branding for a coffee shop: exploratory sketches, the final logo, and a mockup of the mark in context. An early sign that identity work would become a throughline.",
    body: [
      "The Grind started in the sketchbook — rounds of marks and wordforms before landing on a logo that felt like the shop: no-nonsense, warm, caffeinated.",
      "The final deliverables included the logo and a contextual mockup, showing how the identity holds up where it actually lives: on signage, on cups, in someone's hand."
    ],
    specs: { Client: "Coffee shop", Role: "Brand Designer", Deliverables: "Sketches, logo, mockup" },
    images: ["thegrind-sketches.jpg", "thegrind-logo.jpg", "thegrind-mockup.jpg"]
  },
  {
    id: "dost",
    year: "2018",
    category: "Industrial Design",
    title: "Dost",
    tagline: "First product: a phone stand made of cardboard that refused to be flimsy.",
    summary:
      "A phone and tablet stand made from cardboard with a rubber grip — documented from first sketch to final working prototype. The project where industrial design clicked.",
    body: [
      "Dost is a phone and tablet stand built from cardboard with a rubber grip — a cheap material asked to do a serious job. The constraint was the point: if it works in cardboard, the thinking is sound.",
      "The process is documented end to end: ideation sketches, form studies, and a final physical prototype that holds a device at a usable angle without sliding. It set the pattern for everything since — sketch it, build it, test it for real."
    ],
    specs: { Materials: "Cardboard, rubber grip", Role: "Industrial Designer", Deliverables: "Sketches → final prototype" },
    images: ["dost-sketches.jpg", "dost-process.jpg", "dost-prototype.jpg"]
  },
  {
    id: "luvmy",
    year: "2019",
    category: "Industrial Design",
    title: "LuvMy",
    tagline: "A watering can for small hands — full process, sketch to render.",
    summary:
      "A child's watering can taken through the complete design process: concept sketches, a technical drawing, a how-to-use diagram, and finished renders.",
    body: [
      "LuvMy is a watering can designed for kids — scaled grip, manageable pour weight, and a form friendly enough to make watering plants feel like play rather than a chore.",
      "This was the first project with a complete professional document trail: ideation sketches, a proper technical drawing, a how-to-use diagram for the end user, and final renders. Process became the product."
    ],
    specs: { User: "Children", Role: "Industrial Designer", Deliverables: "Sketches, technical drawing, usage diagram, renders" },
    images: ["luvmy-sketches.jpg", "luvmy-technical.jpg", "luvmy-howto.jpg", "luvmy-render.jpg"]
  },
  {
    id: "twoball",
    year: "2023",
    category: "Concept",
    title: "2 Ball",
    tagline: "Basketball, but with two balls. Chaos by design.",
    summary:
      "A game concept that puts two basketballs in play at once — mockups plus a worked-out rule set. Designing a system instead of an object.",
    body: [
      "2 Ball asks a simple question: what happens to basketball when there are two balls on the court? The answer is a different game — split attention, doubled scoring threats, and entirely new defensive math.",
      "The project includes visual mockups and detailed game rules. It marks a shift in the work: from designing objects to designing experiences and systems people play inside of."
    ],
    specs: { Type: "Game concept", Role: "Concept Designer", Deliverables: "Mockups, rule documentation" },
    images: ["twoball-mockup.jpg", "twoball-rules.jpg"]
  },
  {
    id: "shift",
    year: "2025",
    category: "Industrial Design",
    title: "SHIFT",
    tagline: "A water bottle with attitude — back in the studio at Centennial.",
    summary:
      "Sketches and renders for a water bottle concept, developed during the Industrial Design diploma at Centennial College. The return to product design, sharper than before.",
    body: [
      "SHIFT is a water bottle concept developed through sketching and 3D rendering — an exercise in giving a saturated product category a reason to be looked at again.",
      "It belongs to the Centennial chapter of this timeline: the same instincts from Dost and LuvMy, now backed by formal training, better tools, and faster iteration."
    ],
    specs: { Context: "Centennial College", Role: "Industrial Designer", Deliverables: "Sketches, renders" },
    images: ["shift-sketches.jpg", "shift-render.jpg"]
  },
  {
    id: "mila",
    year: "2025",
    category: "Industrial Design",
    title: "Mila",
    tagline: "A chair with no screws, no glue, no excuses.",
    summary:
      "A small-scale chair held together by nothing but its own joinery — no screws, no glue, no external fasteners. Sketches, renders, and video of the CNC-milled wooden pieces.",
    body: [
      "Mila is a scaled chair designed around one hard rule: no screws, no glue, no external attachments of any kind. Every connection is solved in the geometry of the wood itself.",
      "The pieces were CNC-milled and assembled by hand, documented in sketches, renders, and video. It's precision as a design language — if the joinery is right, the chair simply holds."
    ],
    specs: { Materials: "CNC-milled wood", Constraint: "Zero fasteners", Deliverables: "Sketches, renders, video" },
    images: ["mila-sketches.jpg", "mila-render.jpg", "mila-cnc.jpg"],
    video: "mila-assembly.mp4"
  },
  {
    id: "ballin",
    year: "2025",
    category: "Industrial Design",
    title: "Ballin",
    tagline: "Given the lenses. Build everything else.",
    summary:
      "Version one of activewear eyewear frames, designed around pre-supplied lenses. A masterclass in working from a fixed constraint outward.",
    body: [
      "Ballin started with the one thing that couldn't change: the lenses were given. The brief was to design athletic frames around them — fit, retention, ventilation, and a look that earns a place on someone's face mid-game.",
      "Version 1 was developed through sketches and renders, designing outward from the fixed component. Constraint-first design is the realest kind: most products in the world start with a part you don't control."
    ],
    specs: { Constraint: "Pre-supplied lenses", Role: "Industrial Designer", Deliverables: "Sketches, renders (v1)" },
    images: ["ballin-sketches.jpg", "ballin-render.jpg"]
  },
  {
    id: "springy",
    year: "2026",
    category: "Industrial Design",
    title: "Springy",
    tagline: "A stackable stool for two. Rated for real life — tested at 300+ lbs.",
    summary:
      "A stackable two-person stool built from metal rods and ratchet straps — sketched, rendered, maquetted, and actually built. Then sat on by a 300+ lb designer. It held.",
    body: [
      "Springy is a stackable stool that seats two, built from a metal rod frame with ratchet straps as the seating surface — industrial materials doing honest work. The straps give; the frame doesn't.",
      "The process ran the full arc: sketches, renders, scale maquettes, and a real build. The final test was the most direct one available — I'm over 300 lbs, and I sat on it. It handled my weight without complaint. That's not a render claim; that's a load test.",
      "As the most recent stop on this timeline, Springy is the thesis of the whole portfolio: design it properly, build it for real, and let the object prove itself."
    ],
    specs: { Materials: "Metal rod frame, ratchet straps", "Load tested": "300+ lbs", Deliverables: "Sketches, renders, maquettes, build photos" },
    images: ["springy-sketches.jpg", "springy-render.jpg", "springy-maquette.jpg", "springy-build.jpg"]
  }
];

// ---------- Logos & Graphics gallery ----------
const GRAPHICS = [
  { file: "tshirt-01.jpg", label: "T-shirt graphic — 2025" },
  { file: "tshirt-02.jpg", label: "T-shirt graphic — 2025" },
  { file: "tshirt-03.jpg", label: "T-shirt graphic — 2025" },
  { file: "logo-01.jpg", label: "Logo work" },
  { file: "logo-02.jpg", label: "Logo work" },
  { file: "logo-03.jpg", label: "Logo work" },
  { file: "logo-04.jpg", label: "Logo work" },
  { file: "logo-05.jpg", label: "Logo work" }
];

// ---------- Vault (password-gated) ----------
const VAULT_PROJECTS = [
  {
    title: "No Small Feat",
    year: "2025–",
    blurb:
      "A premium Canadian sock brand for large feet (US 13–23). Full brand system, two collections, a two-layer knitted message system, custom fabric blend, kraft tube packaging, and a one-bought-one-donated give-back model. Manufacturer outreach in progress.",
    image: "vault-nsf.jpg"
  },
  {
    title: "Cuore Pazzo",
    year: "2024–",
    blurb:
      "A 72-hour cold-fermented focaccia sandwich concept. Finalized menu, full brand identity, five operational documents, and a governance structure built around profit-sharing and eventual steward ownership.",
    image: "vault-cuorepazzo.jpg"
  },
  {
    title: "Circle",
    year: "2025",
    blurb:
      "A voice-note friendship app for staying genuinely close to a small circle of people. Landing page and interactive demo fully built.",
    image: "vault-circle.jpg"
  }
];
