import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * cPanel (Apache/LiteSpeed) has no Node.js runtime to serve a normal Next.js
   * build, so `npm run build` emits a plain static `out/` folder instead — the
   * contents of that folder get uploaded to `public_html`. Safe here because
   * the site has no API routes, no middleware, and the contact form is a
   * `mailto:` link, so nothing on this site needs a server.
   */
  output: "export",

  // next/image's optimizer needs a server — required alongside output:"export".
  images: { unoptimized: true },

  // Emits /about/index.html rather than /about.html, so Apache serves it at
  // /about/ — matching the old WordPress site's URL structure.
  trailingSlash: true,
};

export default nextConfig;
