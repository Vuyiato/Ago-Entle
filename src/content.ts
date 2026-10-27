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
      "We shape how people see, hear and connect with brands through strategic communication and distinctive creative.",
    services: [
      "Public relations & media relations",
      "Brand storytelling & digital strategy",
      "Web design & graphic design",
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
      "Activations & brand launches",
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
      "From the first touchpoint to the final detail, we bring brand identity into the physical world with care and consistency.",
    services: [
      "Corporate gifting & merchandise",
      "Campaign collateral",
      "Banners & signage",
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
      "We offer strategic advisory to brands, public figures and purpose-driven organisations ready to move with intention.",
    services: ["Strategic advisory", "Brand and communications counsel"],
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
  { name: "Shazz Kubheka", role: "Head of Production / Digital Strategist", image: "/images/profile/profile-p13-img63-xref866.png" },
  { name: "Sabelo Thiyane", role: "Project Manager / SEO Specialist", image: "/images/profile/profile-p13-img64-xref871.png" },
  { name: "Kgomotso Ndwandwe", role: "Head of Media Relations & Strategy", image: "/images/profile/profile-p13-img62-xref861.png" },
  { name: "Nkosana Modipa", role: "Senior Web Designer", image: "/images/profile/profile-p13-img66-xref883.jpeg" },
];

export const values = ["Integrity", "Excellence", "Creativity", "Empowerment"];

export const clientMarks = [
  { name: "MTN", category: "Events & PR", image: "/images/profile/profile-p08-img53-xref660.jpeg", alt: "MTN logo" },
  { name: "Absa", category: "Events & PR", image: "/images/profile/profile-p07-img50-xref598.jpeg", alt: "Absa logo" },
  { name: "Kellogg's", category: "Events & PR", image: "/images/profile/profile-p07-img51-xref601.jpeg", alt: "Kellogg's red K brand mark" },
  { name: "SAMA30", category: "Events & PR", image: "/images/profile/profile-p07-img52-xref604.jpeg", alt: "SAMA30 logo" },
  { name: "Kolisi Foundation", category: "Events & PR", image: "/images/profile/profile-p08-img54-xref663.jpeg", alt: "Kolisi Foundation logo" },
  { name: "Farmer's Friend", category: "Events & PR", image: "/images/profile/profile-p09-img57-xref734.jpeg", alt: "Farmers Friend logo" },
  { name: "Drip", category: "Events & PR", image: "/images/profile/profile-p10-img58-xref772.jpeg", alt: "Drip logo" },
  { name: "Albany Bakeries", category: "Events & PR", image: "/images/profile/profile-p11-img15-xref173.jpeg", alt: "Albany Bakeries logo" },
  { name: "Gijima", category: "Events & PR", image: "/images/profile/profile-p11-img18-xref176.jpeg", alt: "Gijima Technology People logo" },
  { name: "Hellopaisa", category: "Events & PR", image: "/images/profile/profile-p11-img19-xref177.jpeg", alt: "Hellopaisa logo" },
  { name: "Audiomack Africa", category: "Events & PR", image: "/images/profile/profile-p11-img20-xref178.jpeg", alt: "Audiomack Africa logo" },
  { name: "Moti", category: "Events & PR", image: "/images/profile/profile-p11-img22-xref180.jpeg", alt: "Moti logo" },
  { name: "The Lebo Lion Show", category: "Events & PR", image: "/images/profile/profile-p11-img23-xref181.jpeg", alt: "The Lebo Lion Show logo" },
  { name: "Mlungis Nkos Maths & Science Centre", category: "Events & PR", image: "/images/profile/profile-p11-img24-xref182.jpeg", alt: "Mlungis Nkos Maths and Science Centre logo" },
  { name: "Khulu Fine Wine", category: "Events & PR", image: "/images/profile/profile-p11-img26-xref184.jpeg", alt: "Khulu Fine Wine logo" },
  { name: "Obaro", category: "Events & PR", image: "/images/profile/profile-p11-img27-xref185.jpeg", alt: "Obaro logo" },
  { name: "m.com", category: "Events & PR", image: "/images/profile/profile-p11-img29-xref187.jpeg", alt: "m.com logo" },
  { name: "The Legal Indaba", category: "Events & PR", image: "/images/profile/profile-p11-img30-xref188.jpeg", alt: "The Legal Indaba logo" },
  { name: "Muvhango", category: "Events & PR", image: "/images/profile/profile-p11-img31-xref189.png", alt: "Muvhango logo" },
  { name: "Sue Phalane Trading & Projects", category: "Web Design", image: "/images/profile/profile-p12-img36-xref197.png", alt: "Sue Phalane Trading and Projects logo" },
  { name: "O'Pila Haircare", category: "Web Design", image: "/images/profile/profile-p12-img37-xref198.png", alt: "O'Pila Haircare logo" },
  { name: "Smonky Trader", category: "Web Design", image: "/images/profile/profile-p12-img38-xref199.png", alt: "Smonky Trader logo" },
  { name: "Sengweni Projects", category: "Web Design", image: "/images/profile/profile-p12-img39-xref200.png", alt: "Sengweni Projects logo" },
  { name: "Mafube Technologies", category: "Web Design", image: "/images/profile/profile-p12-img41-xref202.png", alt: "Mafube Technologies logo" },
  { name: "Daza Human Capital", category: "Web Design", image: "/images/profile/profile-p12-img42-xref203.png", alt: "Daza Human Capital logo" },
  { name: "Kabelano Training Solutions", category: "Web Design", image: "/images/profile/profile-p12-img43-xref204.png", alt: "Kabelano Training Solutions logo" },
];
