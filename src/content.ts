export type Division = {
  slug: string;
  name: string;
  number: string;
  descriptor: string;
  description: string;
  services: string[];
  tone: string;
};

export const divisions: Division[] = [
  {
    slug: "media",
    name: "Ago Entle Media",
    number: "01",
    descriptor: "Stories with staying power.",
    description:
      "Every brand has a narrative. We bring yours to life, grounded in strategy, infused with creative soul, delivered with excellence.",
    services: [
      "Public relations",
      "Brand storytelling",
      "Web design",
      "Graphic design",
      "Digital strategy",
      "Influencer management",
      "Media training",
      "Crisis & reputation management",
    ],
    tone: "moss",
  },
  {
    slug: "experiences",
    name: "Ago Entle Experiences",
    number: "02",
    descriptor: "Make the moment matter.",
    description:
      "We turn a clear idea into a considered, memorable experience—built for the people in the room and the story that travels beyond it.",
    services: [
      "Concept development",
      "Event production",
      "Activations",
      "Brand launches",
      "Team-building experiences",
      "Curated celebrations",
    ],
    tone: "teal",
  },
  {
    slug: "branding",
    name: "Ago Entle Branding",
    number: "03",
    descriptor: "Make identity tangible.",
    description:
      "We translate your values into physical touchpoints that speak loudly and last long.",
    services: [
      "Corporate gifting",
      "Merchandise",
      "Campaign collateral",
      "Banners",
      "Signage",
      "Pitch decks",
      "Branding elements",
    ],
    tone: "clay",
  },
  {
    slug: "consulting",
    name: "Ago Entle Consulting",
    number: "04",
    descriptor: "Clarity for what comes next.",
    description:
      "We guide leaders, shape narratives, and build strategies that position you for influence and impact.",
    services: ["Strategic advisory for brands, public figures, and purpose-driven organisations"],
    tone: "ink",
  },
];

export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  summary: string;
  outcome?: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
};

export const projects: Project[] = [
  {
    slug: "mtn-summer-campaign",
    client: "MTN SA",
    title: "Summer Campaign Launch",
    category: "Media & experiences",
    summary:
      "A campaign launch bringing a major summer story to life through strategic communications and an in-person experience.",
    outcome: "R300 million campaign budget managed.",
    featured: true,
    image: "/images/profile/profile-p08-img53-xref660.jpeg",
    imageAlt: "MTN logo on its yellow brand background",
    imageFit: "contain",
  },
  {
    slug: "sama30",
    client: "SAMA30",
    title: "Nominee Announcements",
    category: "Media",
    summary:
      "A high-profile announcement programme built to bring nominees and the awards story into the public conversation.",
    outcome: "More than R700 million in advertising value equivalent reported.",
    featured: true,
    image: "/images/profile/profile-p07-img52-xref604.jpeg",
    imageAlt: "SAMA30 event logo",
    imageFit: "contain",
  },
  {
    slug: "kolisi-foundation-kelloggs",
    client: "Kolisi Foundation × Kellogg's",
    title: "B2B Public Relations",
    category: "Media",
    summary:
      "Public relations work connecting a purpose-led partnership with its business and community audiences.",
    outcome: "R2 million in media coverage reported within one week.",
    featured: true,
    image: "/images/profile/profile-p08-img54-xref663.jpeg",
    imageAlt: "Kolisi Foundation logo",
    imageFit: "contain",
  },
  {
    slug: "absa-car-giveaway",
    client: "Absa",
    title: "Car Giveaway",
    category: "Experiences",
    summary: "A customer-facing giveaway experience delivered for Absa.",
    image: "/images/profile/profile-p07-img50-xref598.jpeg",
    imageAlt: "Absa logo",
    imageFit: "contain",
  },
  {
    slug: "kelloggs-turns-100",
    client: "Kellogg's",
    title: "100-Year Celebration",
    category: "Experiences",
    summary: "A milestone celebration honouring a century of the Kellogg's brand.",
    image: "/images/profile/profile-p07-img51-xref601.jpeg",
    imageAlt: "Kellogg's red K brand mark",
    imageFit: "contain",
  },
  {
    slug: "ofentse-peete",
    client: "Ofentse Peete",
    title: "Sponsorship",
    category: "Consulting",
    summary:
      "Sponsorship support that enabled Ofentse to travel to China and India.",
    image: "/images/profile/profile-p08-img55-xref666.jpeg",
    imageAlt: "Ofentse Peete holding a drum",
    imageFit: "cover",
  },
  {
    slug: "wendy-selebi-book-launch",
    client: "Wendy Selebi",
    title: "Book Launch",
    category: "Experiences",
    summary: "A launch event celebrating Wendy Selebi's new book.",
    image: "/images/profile/profile-p09-img56-xref731.jpeg",
    imageAlt: "Copies of Wendy Selebi's book I Wish Someone Had Told Me",
    imageFit: "cover",
  },
  {
    slug: "farmers-friend",
    client: "Farmer's Friend",
    title: "Product Launch",
    category: "Media & experiences",
    summary: "A product launch introducing Farmer's Friend to its audience.",
    image: "/images/profile/profile-p09-img57-xref734.jpeg",
    imageAlt: "Farmers Friend logo on a green background",
    imageFit: "contain",
  },
  {
    slug: "drip-turns-2",
    client: "Drip",
    title: "#DripTurns2",
    category: "Experiences",
    summary: "An anniversary event marking two years of the Drip brand.",
    image: "/images/profile/profile-p10-img58-xref772.jpeg",
    imageAlt: "Drip logo",
    imageFit: "contain",
  },
  {
    slug: "kelloggs-tolaram-swaziland",
    client: "Kellogg's × Tolaram",
    title: "Swaziland Plant Launch",
    category: "Experiences",
    summary: "A launch event for the Kellogg's Tolaram plant in Swaziland.",
    image: "/images/profile/profile-p10-img59-xref775.jpeg",
    imageAlt: "Kellogg's red K brand mark",
    imageFit: "contain",
  },
  {
    slug: "sunday-kos",
    client: "Sunday Kos",
    title: "Community Event",
    category: "Experiences",
    summary: "A community event created with Sunday Kos.",
    image: "/images/profile/profile-p10-img60-xref778.jpeg",
    imageAlt: "Sunday Kos event poster",
    imageFit: "contain",
  },
];

export const team = [
  { name: "Jacob Mohlaka", role: "Managing Director", image: "/images/profile/profile-p13-img61-xref856.png" },
  { name: "Thuli Thiyane", role: "Head of Content / Copywriter", image: "/images/profile/profile-p13-img65-xref876.png" },
  { name: "Shazz Kubheka", role: "Head of Production / Digital Strategist", image: "/images/profile/profile-p13-img62-xref861.png" },
  { name: "Sabelo Thiyane", role: "Project Manager / SEO Specialist", image: "/images/profile/profile-p13-img64-xref871.png" },
  { name: "Kgomotso Ndwandwe", role: "Head of Media Relations & Strategy", image: "/images/profile/profile-p13-img63-xref866.png" },
  { name: "Nkosana Modipa", role: "Senior Web Designer", image: "/images/profile/profile-p13-img66-xref883.jpeg" },
];

export const valuesIntro =
  "Ago Entle exists to build with purpose and precision, inspire creativity, collaboration, and serve with integrity and excellence.";

export const values = [
  { name: "Integrity", text: "We do the right thing, even when no one is watching." },
  { name: "Excellence", text: "We aim high and deliver beyond expectations." },
  { name: "Creativity", text: "We lead with originality, innovation, and fearless thinking." },
  { name: "Empowerment", text: "We invest in people, ideas, and communities because growth must be shared." },
];

export const whyChoose = [
  { title: "Proven Impact", text: "Our campaigns deliver measurable results that build credibility." },
  { title: "Tailored Solutions", text: "We craft custom strategies for every client." },
  { title: "Multidisciplinary Excellence", text: "From PR to production, we connect all dots under one vision." },
  { title: "Bold Partnerships", text: "We work with bold brands and institutions shaping the future." },
];

export type ProjectDetail = {
  subtitle?: string;
  tags: string[];
  highlights: { title: string; text: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "absa-car-giveaway": {
    subtitle: "Car Give Away Handover",
    tags: ["Event Planning & Management"],
    highlights: [
      { title: "Creative Event Execution", text: "Organized a unique handover experience for competition winners." },
      { title: "Media Amplification", text: "Enhanced the campaign's reach with PR and event management." },
    ],
  },
  "kelloggs-turns-100": {
    subtitle: "#100",
    tags: ["Media Management", "Event Planning & Management"],
    highlights: [
      { title: "Internal Event Success", text: "Planned and executed a milestone celebration for Kellogg's 100th anniversary, focusing on staff engagement and appreciation in Johannesburg." },
      { title: "Key Results", text: "Delivered an immersive experience that celebrated the brand's history and achievements." },
    ],
  },
  sama30: {
    subtitle: "#SAMA30",
    tags: ["PR & Event Management"],
    highlights: [
      { title: "Record-Breaking Coverage", text: "Delivered an AVE exceeding R700 million, surpassing previous records." },
      { title: "Event Success", text: "Executed seamless nominee announcement events with extensive media and public engagement." },
    ],
  },
  "mtn-summer-campaign": {
    subtitle: "Media relations & events",
    tags: ["Summer Campaign Launch", "Managed R300 Million Budget", "PR & Influencer Led Campaigns"],
    highlights: [
      { title: "Innovative Execution", text: "Introduced creative strategies like helicopter prize deliveries to customers." },
      { title: "Budget Oversight", text: "Managed a R300 million campaign budget." },
      { title: "Reach", text: "Expanded campaign coverage across provinces, ensuring high engagement and participation." },
    ],
  },
  "kolisi-foundation-kelloggs": {
    subtitle: "B2B Public Relations",
    tags: ["Record Breaking Coverage", "Partnership Facilitation", "ROI of 1:8"],
    highlights: [
      { title: "Campaign Impact", text: "Positioned Kellogg's and the Kolisi Foundation as leaders in the fight against hunger in South Africa." },
      { title: "Results", text: "Achieved R2 million in media coverage within one week, with six broadcast media features and four print placements." },
    ],
  },
  "ofentse-peete": {
    subtitle: "Sponsorship",
    tags: ["Secured Top Tier Media Interviews", "Secured Funding for Ofentse", "Ofentse was able to travel to China & India"],
    highlights: [
      { title: "Achievement", text: "Secured a fully funded sponsorship for South Africa's 8-year-old chess champion and her mother to compete internationally in China and India." },
      { title: "Impact", text: "Gained corporate support through strategic media exposure, including interviews with top-tier outlets." },
    ],
  },
  "wendy-selebi-book-launch": {
    subtitle: "Book Launch",
    tags: ["Event Planning & Management"],
    highlights: [
      { title: "Book Launch Execution", text: "Successfully hosted a launch event with key industry figures and media generating strong engagement." },
      { title: "Media & Interview Success", text: "Secured top-tier media interviews across print, online, radio, and TV, positioning Wendy Selebi as a financial literacy thought leader." },
      { title: "SAfm Book Reading Feature", text: "Confirmed and completed a book reading segment on SAfm, enhancing book visibility and credibility." },
    ],
  },
  "farmers-friend": {
    subtitle: "Product Launch",
    tags: ["Public Relations"],
    highlights: [
      { title: "Farming App Launch", text: "Successfully launched and introduced the farming app to the media, generating industry interest and awareness." },
      { title: "Media Coverage Secured", text: "Obtained coverage across top-tier print, online, and broadcast platforms, highlighting the app's impact on agriculture." },
      { title: "Industry Engagement", text: "Engaged key stakeholders, farmers, and tech enthusiasts, driving discussions on innovation in farming." },
    ],
  },
  "drip-turns-2": {
    subtitle: "2 Year Anniversary Event",
    tags: ["Event Planning & Management"],
    highlights: [
      { title: "Celebratory Event", text: "Organized a milestone event with staff, sponsors, and celebrity guests, creating an unforgettable experience." },
      { title: "Outcome", text: "Sold out tickets and boosted brand loyalty." },
    ],
  },
  "kelloggs-tolaram-swaziland": {
    subtitle: "Toloram Plant Launch Event",
    tags: ["Media Management", "Live TV Coverage", "Event Coordination"],
    highlights: [
      { title: "Cross-Border Media Management", text: "Coordinated South African and Swaziland journalists for impactful coverage." },
      { title: "Live TV Coverage", text: "Ensured high-profile visibility for the event." },
    ],
  },
  "sunday-kos": {
    subtitle: "Event",
    tags: ["Sold Out Tickets"],
    highlights: [
      { title: "Community Impact", text: "Developed and hosted this quarterly food event in Soweto, bringing communities together to share meals and create memories." },
      { title: "Outcome", text: "Fostered strong community relationships and positioned Sunday Kos as a hallmark of culinary and cultural unity." },
    ],
  },
};

export const clientMarks: { name: string; category: string; image?: string; alt?: string }[] = [
  { name: "MTN", category: "Events & PR", image: "/images/profile/profile-p08-img53-xref660.jpeg", alt: "MTN logo" },
  { name: "Absa", category: "Events & PR", image: "/images/profile/profile-p07-img50-xref598.jpeg", alt: "Absa logo" },
  { name: "Kellogg's", category: "Events & PR", image: "/images/profile/profile-p07-img51-xref601.jpeg", alt: "Kellogg's red K brand mark" },
  { name: "SAMA30", category: "Events & PR", image: "/images/profile/profile-p07-img52-xref604.jpeg", alt: "SAMA30 logo" },
  { name: "Kolisi Foundation", category: "Events & PR", image: "/images/profile/profile-p08-img54-xref663.jpeg", alt: "Kolisi Foundation logo" },
  { name: "Farmer's Friend", category: "Events & PR", image: "/images/profile/profile-p09-img57-xref734.jpeg", alt: "Farmers Friend logo" },
  { name: "Drip", category: "Events & PR", image: "/images/profile/profile-p10-img58-xref772.jpeg", alt: "Drip logo" },
  { name: "Albany Bakeries", category: "Events & PR", image: "/images/profile/profile-p11-img15-xref173.jpeg", alt: "Albany Bakeries logo" },
  { name: "Gijima Technology People", category: "Events & PR", image: "/images/profile/profile-p11-img18-xref176.jpeg", alt: "Gijima Technology People logo" },
  { name: "Hellopaisa", category: "Events & PR", image: "/images/profile/profile-p11-img19-xref177.jpeg", alt: "Hellopaisa logo" },
  { name: "Audiomack Africa", category: "Events & PR", image: "/images/profile/profile-p11-img20-xref178.jpeg", alt: "Audiomack Africa logo" },
  { name: "MOTI", category: "Events & PR", image: "/images/profile/profile-p11-img22-xref180.jpeg", alt: "Moti logo" },
  { name: "The Lebo Lion Show", category: "Events & PR", image: "/images/profile/profile-p11-img23-xref181.jpeg", alt: "The Lebo Lion Show logo" },
  { name: "Mlungisi Nkosi Maths & Science Centre", category: "Events & PR", image: "/images/profile/profile-p11-img24-xref182.jpeg", alt: "Mlungisi Nkosi Maths and Science Centre logo" },
  { name: "Khulu Fine Wine", category: "Events & PR", image: "/images/profile/profile-p11-img26-xref184.jpeg", alt: "Khulu Fine Wine logo" },
  { name: "Obaro", category: "Events & PR", image: "/images/profile/profile-p11-img27-xref185.jpeg", alt: "Obaro logo" },
  { name: "m.com", category: "Events & PR", image: "/images/profile/profile-p11-img29-xref187.jpeg", alt: "m.com logo" },
  { name: "The Legal Indaba", category: "Events & PR", image: "/images/profile/profile-p11-img30-xref188.jpeg", alt: "The Legal Indaba logo" },
  { name: "Muvhango", category: "Events & PR", image: "/images/profile/profile-p11-img31-xref189.png", alt: "Muvhango logo" },
  { name: "Defy", category: "Events & PR" },
  { name: "SBI Advisory Services", category: "Web Design" },
  { name: "Ndlondlofied", category: "Web Design" },
  { name: "Digital Dash (Pty) Ltd", category: "Web Design" },
  { name: "Sue Phalane Trading & Projects", category: "Web Design", image: "/images/profile/profile-p12-img36-xref197.png", alt: "Sue Phalane Trading and Projects logo" },
  { name: "O'pila Haircare", category: "Web Design", image: "/images/profile/profile-p12-img37-xref198.png", alt: "O'Pila Haircare logo" },
  { name: "Smonky Trader", category: "Web Design", image: "/images/profile/profile-p12-img38-xref199.png", alt: "Smonky Trader logo" },
  { name: "Sengweni Projects", category: "Web Design", image: "/images/profile/profile-p12-img39-xref200.png", alt: "Sengweni Projects logo" },
  { name: "Mafube Technologies", category: "Web Design", image: "/images/profile/profile-p12-img41-xref202.png", alt: "Mafube Technologies logo" },
  { name: "Human Capital", category: "Web Design", image: "/images/profile/profile-p12-img42-xref203.png", alt: "Human Capital logo" },
  { name: "Kabelano Training Solutions", category: "Web Design", image: "/images/profile/profile-p12-img43-xref204.png", alt: "Kabelano Training Solutions logo" },
];



