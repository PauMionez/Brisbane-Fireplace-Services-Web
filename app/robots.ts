import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Required alongside output:"export" — without it, `next build` fails on
// this route with "revalidate not configured".
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
