import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/data/service-areas";
import { siteConfig } from "@/lib/site-config";

/** Fixed pages. Add new routes here so Google finds them. */
const routes = [
  { path: "", priority: 1 },
  { path: "/services/chimney-cleaning", priority: 0.9 },
  { path: "/services/fireplace-installation", priority: 0.9 },
  { path: "/service-areas", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const fixed = routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority,
  }));

  // One entry per service area, generated from the same list as the pages.
  const areas = serviceAreas.map((area) => ({
    url: `${siteConfig.url}/service-areas/${area.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...fixed, ...areas];
}
