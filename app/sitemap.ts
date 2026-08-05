import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/data/service-areas";
import { absoluteUrl } from "@/lib/seo";

// Required alongside output:"export" — without it, `next build` fails on
// this route with "revalidate not configured".
export const dynamic = "force-static";

/** Fixed pages. Add new routes here so Google finds them. */
const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services/chimney-cleaning", priority: 0.9 },
  { path: "/services/fireplace-installation", priority: 0.9 },
  { path: "/service-areas", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const fixed = routes.map(({ path, priority, changeFrequency }) => ({
    // absoluteUrl() adds the trailing slash that `trailingSlash: true` makes
    // the real URL. Without it every entry here points at a redirect.
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: changeFrequency ?? ("monthly" as const),
    priority,
  }));

  // One entry per service area, generated from the same list as the pages.
  // Hub areas carry their own copy and rank for broader terms, so they sit a
  // step above the suburbs tagged under them.
  const areas = serviceAreas.map((area) => ({
    url: absoluteUrl(`/service-areas/${area.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: area.parentSlug ? 0.5 : 0.6,
  }));

  return [...fixed, ...areas];
}
