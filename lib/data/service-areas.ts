export const regions = [
  "Brisbane Central",
  "Brisbane North",
  "Brisbane South",
  "Brisbane East",
  "Brisbane West",
  "Ipswich",
  "Somerset",
  "Logan",
  "Redlands",
  "Moreton Bay",
  "Sunshine Coast",
  "Gold Coast",
] as const;

export type Region = (typeof regions)[number];

export type ServiceArea = {
  /** URL segment: /service-areas/<slug> */
  slug: string;
  name: string;
  region: Region;
  /**
   * One line of genuinely local detail — how often you're there, the kind of
   * chimneys common in the area, a job you've done nearby. Optional, but it's
   * what makes these pages worth having rather than filler. Fill them in as
   * you learn them.
   */
  note?: string;
  /** Overrides the generated H1 when the client has supplied their own. */
  heading?: string;
  /** Overrides the generated opening copy. One string per paragraph. */
  intro?: string[];
  /** Background photo for the "A local sweep" section on this area's page. */
  image?: string;
  /**
   * Marks this as a sub-suburb tagged under a "hub" area (by slug). Unless
   * this area sets its own `heading`/`intro` above, it inherits the parent's —
   * with every occurrence of the parent's name swapped for this area's name.
   * Edit the hub's copy once and every suburb tagged under it updates too.
   */
  parentSlug?: string;
};

export const serviceAreas: ServiceArea[] = [
  // ---------------------------------------------------------------------
  // Hub areas — each has its own client-supplied copy. The rest fall back
  // to the generated wording in areaHeading() / areaIntro() further down.
  // ---------------------------------------------------------------------
  {
    slug: "moreton-bay",
    name: "Moreton Bay",
    region: "Moreton Bay",
    image: "/images/hero-moreton-bay.jpg",
  },
  {
    slug: "redland-bay",
    name: "Redland Bay",
    region: "Redlands",
    image: "/images/area-redland-bay.jpg",
    intro: [
      "Keep your home safe, clean, and efficient with expert chimney cleaning services in Redland Bay. We provide thorough chimney sweeping, flue cleaning, fireplace maintenance, and chimney inspections for residential properties. Our experienced team removes soot, creosote, and blockages that can reduce heating efficiency and increase the risk of chimney fires.",
      "Serving Redland Bay and surrounding suburbs, we're committed to providing prompt, affordable, and high-quality chimney cleaning solutions. Contact us today to schedule your chimney service and enjoy a safer, cleaner fireplace all year round.",
    ],
  },
  {
    slug: "brisbane-central",
    name: "Brisbane Central",
    region: "Brisbane Central",
    image: "/images/area-brisbane-central.jpg",
    intro: [
      "We are committed to delivering reliable workmanship, prompt appointments, and exceptional customer service across Brisbane Central. Every job is completed with care and attention to detail, leaving your fireplace and surrounding area clean and ready to use.",
    ],
  },
  {
    slug: "brisbane-north",
    name: "Brisbane North",
    region: "Brisbane North",
    image: "/images/area-brisbane-north.jpg",
    intro: [
      "Looking after your chimney is an important part of fireplace maintenance. Our Brisbane North chimney cleaning service helps keep your fireplace safe, efficient, and ready for use. From routine cleaning to removing stubborn buildup and checking for common issues, we provide dependable service for local homes.",
      "Enjoy a warmer home with the confidence that your chimney has been professionally cleaned and maintained.",
    ],
  },
  {
    slug: "brisbane-south",
    name: "Brisbane South",
    region: "Brisbane South",
    image: "/images/area-brisbane-south.jpg",
    intro: [
      "Keep your fireplace safe, clean, and operating efficiently with our professional chimney cleaning services in Brisbane South. We provide expert chimney sweeping, flue cleaning, and fireplace maintenance for residential and commercial properties throughout the southern suburbs of Brisbane.",
    ],
  },
  {
    slug: "brisbane-east",
    name: "Brisbane East",
    region: "Brisbane East",
    image: "/images/area-brisbane-east.jpg",
    intro: [
      "Maintain a safe, clean, and efficient fireplace with our professional chimney cleaning services in Brisbane East. We provide expert chimney sweeping, flue cleaning, and fireplace maintenance for homes and businesses across Brisbane's eastern suburbs.",
    ],
  },
  {
    slug: "brisbane-west",
    name: "Brisbane West",
    region: "Brisbane West",
    heading: "Brisbane West Chimney Cleaning Experts",
    image: "/images/area-brisbane-west.jpg",
    intro: [
      "Keep your fireplace in top condition with expert chimney cleaning throughout Brisbane West. Our detailed cleaning process removes buildup, checks for common chimney issues, and helps ensure your heating system performs safely and efficiently.",
      "From routine maintenance to seasonal chimney preparation, we deliver professional care you can trust for a warmer, safer home.",
    ],
  },
  {
    slug: "ipswich-city",
    name: "Ipswich City",
    region: "Ipswich",
    heading: "Ipswich City Chimney Cleaning",
    image: "/images/area-ipswich-city.jpg",
    intro: [
      "A clean chimney means a safer fireplace. Our Ipswich City chimney cleaning service removes soot, creosote, and debris to improve performance, reduce smoke, and keep your fireplace working efficiently. Professional, reliable, and hassle-free service for local homes.",
    ],
  },
  {
    slug: "somerset-regional",
    name: "Somerset Regional",
    region: "Somerset",
    heading: "Somerset Regional Chimney Cleaning",
    image: "/images/area-somerset-regional.jpg",
    intro: [
      "A well-maintained chimney is essential for a safe and efficient fireplace. Our Somerset Regional chimney cleaning specialists provide detailed cleaning services to remove buildup, improve ventilation, and help extend the life of your fireplace system.",
      "With careful attention to detail and professional equipment, we deliver reliable chimney care for homes throughout the region.",
    ],
  },

  // ---------------------------------------------------------------------
  // Suburbs tagged under each hub above. No copy of their own — each one
  // inherits its hub's heading/intro with the place name swapped in.
  // ---------------------------------------------------------------------

  // Brisbane North
  { slug: "bracken-ridge", name: "Bracken Ridge", region: "Brisbane North", parentSlug: "brisbane-north" },
  { slug: "chermside", name: "Chermside", region: "Brisbane North", parentSlug: "brisbane-north" },
  { slug: "nudgee", name: "Nudgee", region: "Brisbane North", parentSlug: "brisbane-north" },
  { slug: "clayfield", name: "Clayfield", region: "Brisbane North", parentSlug: "brisbane-north" },
  { slug: "everton-park", name: "Everton Park", region: "Brisbane North", parentSlug: "brisbane-north" },
  { slug: "carseldine", name: "Carseldine", region: "Brisbane North", parentSlug: "brisbane-north" },

  // Brisbane Central
  // "Redhill"/"Highgate" as supplied are shorthand for the official suburb
  // names below — using the real name matters for local search.
  { slug: "red-hill", name: "Red Hill", region: "Brisbane Central", parentSlug: "brisbane-central" },
  { slug: "highgate-hill", name: "Highgate Hill", region: "Brisbane Central", parentSlug: "brisbane-central" },

  // Brisbane East
  { slug: "bulimba", name: "Bulimba", region: "Brisbane East", parentSlug: "brisbane-east" },
  { slug: "coorparoo", name: "Coorparoo", region: "Brisbane East", parentSlug: "brisbane-east" },
  { slug: "wynnum", name: "Wynnum", region: "Brisbane East", parentSlug: "brisbane-east" },
  { slug: "chandler", name: "Chandler", region: "Brisbane East", parentSlug: "brisbane-east" },

  // Brisbane South
  { slug: "forest-lake", name: "Forest Lake", region: "Brisbane South", parentSlug: "brisbane-south" },
  { slug: "acacia-ridge", name: "Acacia Ridge", region: "Brisbane South", parentSlug: "brisbane-south" },
  { slug: "moorooka", name: "Moorooka", region: "Brisbane South", parentSlug: "brisbane-south" },
  { slug: "upper-mt-gravatt", name: "Upper Mt Gravatt", region: "Brisbane South", parentSlug: "brisbane-south" },
  { slug: "sunnybank-hills", name: "Sunnybank Hills", region: "Brisbane South", parentSlug: "brisbane-south" },
  { slug: "rochdale", name: "Rochdale", region: "Brisbane South", parentSlug: "brisbane-south" },

  // Brisbane West
  { slug: "chuwar", name: "Chuwar", region: "Brisbane West", parentSlug: "brisbane-west" },
  { slug: "brookfield", name: "Brookfield", region: "Brisbane West", parentSlug: "brisbane-west" },
  { slug: "the-gap", name: "The Gap", region: "Brisbane West", parentSlug: "brisbane-west" },
  { slug: "kenmore", name: "Kenmore", region: "Brisbane West", parentSlug: "brisbane-west" },
  { slug: "toowong", name: "Toowong", region: "Brisbane West", parentSlug: "brisbane-west" },

  // Redland Bay
  { slug: "mount-cotton", name: "Mount Cotton", region: "Redlands", parentSlug: "redland-bay" },
  { slug: "capalaba", name: "Capalaba", region: "Redlands", parentSlug: "redland-bay" },
  { slug: "wellington-point", name: "Wellington Point", region: "Redlands", parentSlug: "redland-bay" },

  // Ipswich City
  { slug: "boonah", name: "Boonah", region: "Ipswich", parentSlug: "ipswich-city" },
  { slug: "springfield", name: "Springfield", region: "Ipswich", parentSlug: "ipswich-city" },
  { slug: "fernvale", name: "Fernvale", region: "Ipswich", parentSlug: "ipswich-city" },
  { slug: "yamanto", name: "Yamanto", region: "Ipswich", parentSlug: "ipswich-city" },

  // Moreton Bay
  { slug: "north-lakes", name: "North Lakes", region: "Moreton Bay", parentSlug: "moreton-bay" },
  { slug: "caboolture", name: "Caboolture", region: "Moreton Bay", parentSlug: "moreton-bay" },
  { slug: "woodford", name: "Woodford", region: "Moreton Bay", parentSlug: "moreton-bay" },
];

/**
 * Client-supplied copy, applied to every hub page with the place name swapped
 * in. A hub can override either via its `heading` / `intro` fields — do that
 * wherever you have something specific to say, because these two functions
 * produce the same text on every page apart from the name.
 *
 * A suburb tagged under a hub (via `parentSlug`) with no copy of its own
 * inherits the hub's resolved heading/intro, with the hub's name swapped for
 * the suburb's — so editing a hub's copy updates every suburb tagged under
 * it automatically.
 */
export function areaHeading(area: ServiceArea): string {
  if (area.heading) return area.heading;
  if (area.parentSlug) {
    const parent = findArea(area.parentSlug);
    if (parent) {
      return areaHeading(parent).split(parent.name).join(area.name);
    }
  }
  return `Professional Chimney Cleaning in ${area.name}`;
}

/** Returns one string per paragraph. */
export function areaIntro(area: ServiceArea): string[] {
  if (area.intro) return area.intro;
  if (area.parentSlug) {
    const parent = findArea(area.parentSlug);
    if (parent) {
      return areaIntro(parent).map((paragraph) =>
        paragraph.split(parent.name).join(area.name)
      );
    }
  }
  return [
    `Keep your fireplace safe, efficient, and performing at its best with our professional chimney cleaning services in ${area.name}. We remove soot, creosote, blockages, and debris to improve airflow and reduce the risk of chimney fires. Whether you have a wood-burning fireplace, stove, or flue, our experienced team provides reliable, thorough, and affordable service for residential and commercial properties. We take pride in delivering clean workmanship, honest advice, and dependable customer service to help keep your home warm and safe year-round.`,
  ];
}

/** All areas, A–Z by name. */
export function areasAlphabetical() {
  return [...serviceAreas].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Hub areas paired with the suburbs tagged under each one, in the order
 * hubs appear in `serviceAreas`. This is what the service-areas index page
 * renders — a hub, then its suburbs as small tags underneath.
 */
export function hubsWithChildren() {
  const hubs = serviceAreas.filter((area) => !area.parentSlug);
  return hubs.map((hub) => ({
    hub,
    children: serviceAreas.filter((area) => area.parentSlug === hub.slug),
  }));
}

export function findArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
