export const regions = [
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
  /** Overrides the generated opening paragraph. */
  intro?: string;
  /** Per-area hero background. Falls back to the chimney cleaning hero. */
  heroImage?: string;
};

export const serviceAreas: ServiceArea[] = [
  // Heading and intro now come from areaHeading() / areaIntro() below, so
  // this entry needs no bespoke copy.
  { slug: "moreton-bay", name: "Moreton Bay", region: "Brisbane South" },

  // Brisbane North
  { slug: "chermside", name: "Chermside", region: "Brisbane North" },
  { slug: "albany-creek", name: "Albany Creek", region: "Brisbane North" },
  { slug: "ashgrove", name: "Ashgrove", region: "Brisbane North" },
  { slug: "everton-park", name: "Everton Park", region: "Brisbane North" },

  // Brisbane South
  { slug: "mount-gravatt", name: "Mount Gravatt", region: "Brisbane South" },
  { slug: "sunnybank", name: "Sunnybank", region: "Brisbane South" },
  { slug: "holland-park", name: "Holland Park", region: "Brisbane South" },

  // Brisbane East
  { slug: "wynnum", name: "Wynnum", region: "Brisbane East" },
  { slug: "carindale", name: "Carindale", region: "Brisbane East" },

  // Brisbane West
  { slug: "indooroopilly", name: "Indooroopilly", region: "Brisbane West" },
  { slug: "the-gap", name: "The Gap", region: "Brisbane West" },
  { slug: "kenmore", name: "Kenmore", region: "Brisbane West" },

  // Ipswich
  { slug: "ipswich", name: "Ipswich", region: "Ipswich" },
  { slug: "springfield", name: "Springfield", region: "Ipswich" },

  // Logan
  { slug: "beenleigh", name: "Beenleigh", region: "Logan" },
  { slug: "springwood", name: "Springwood", region: "Logan" },

  // Redlands
  { slug: "cleveland", name: "Cleveland", region: "Redlands" },
  { slug: "capalaba", name: "Capalaba", region: "Redlands" },

  // Sunshine Coast
  { slug: "caloundra", name: "Caloundra", region: "Sunshine Coast" },
  { slug: "maroochydore", name: "Maroochydore", region: "Sunshine Coast" },
  { slug: "nambour", name: "Nambour", region: "Sunshine Coast" },

  // Gold Coast
  { slug: "southport", name: "Southport", region: "Gold Coast" },
  { slug: "nerang", name: "Nerang", region: "Gold Coast" },
  { slug: "robina", name: "Robina", region: "Gold Coast" },
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

export function areaIntro(area: ServiceArea) {
  return (
    area.intro ??
    `Keep your fireplace safe, efficient, and performing at its best with our professional chimney cleaning services in ${area.name}. We remove soot, creosote, blockages, and debris to improve airflow and reduce the risk of chimney fires. Whether you have a wood-burning fireplace, stove, or flue, our experienced team provides reliable, thorough, and affordable service for residential and commercial properties. We take pride in delivering clean workmanship, honest advice, and dependable customer service to help keep your home warm and safe year-round.`
  );
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
