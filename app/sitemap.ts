import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/** Every page on the site. Add new routes here so Google finds them. */
const routes = [
  { path: "", priority: 1 },
  { path: "/services/chimney-cleaning", priority: 0.9 },
  { path: "/services/fireplace-installation", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
