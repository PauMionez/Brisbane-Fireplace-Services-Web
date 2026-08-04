export const regions = [
  "Brisbane Central",
  "Brisbane North",
  "Brisbane South",
  "Brisbane East",
  "Brisbane West",
  "Ipswich",
  "Logan",
  "Redlands",
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
};

export const serviceAreas: ServiceArea[] = [
  // ---------------------------------------------------------------------
  // Every area has copy supplied by the client. Adding a new one without
  // an `intro` falls back to the generated wording in areaIntro() below.
  // ---------------------------------------------------------------------
  {
    slug: "moreton-bay",
    name: "Moreton Bay",
    region: "Brisbane South",
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
];

/**
 * Client-supplied copy, applied to every area page with the place name swapped
 * in. An individual area can override either one via its `heading` / `intro`
 * fields — do that wherever you have something specific to say, because these
 * two functions produce the same text on every page apart from the name.
 */
export function areaHeading(area: ServiceArea) {
  return area.heading ?? `Professional Chimney Cleaning in ${area.name}`;
}

/** Returns one string per paragraph. */
export function areaIntro(area: ServiceArea): string[] {
  return (
    area.intro ?? [
      `Keep your fireplace safe, efficient, and performing at its best with our professional chimney cleaning services in ${area.name}. We remove soot, creosote, blockages, and debris to improve airflow and reduce the risk of chimney fires. Whether you have a wood-burning fireplace, stove, or flue, our experienced team provides reliable, thorough, and affordable service for residential and commercial properties. We take pride in delivering clean workmanship, honest advice, and dependable customer service to help keep your home warm and safe year-round.`,
    ]
  );
}

/** All areas, A–Z by name — the order the service areas list uses. */
export function areasAlphabetical() {
  return [...serviceAreas].sort((a, b) => a.name.localeCompare(b.name));
}

/** Areas grouped by region, skipping any region with no entries. */
export function areasByRegion() {
  return regions
    .map((region) => ({
      region,
      areas: serviceAreas.filter((area) => area.region === region),
    }))
    .filter((group) => group.areas.length > 0);
}

export function findArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
