export const siteConfig = {
  /**
   * Live site URL — no trailing slash, and it must match the domain the site
   * is actually served from. Used by the sitemap, robots.txt, canonical tags,
   * Open Graph and structured data. Host-agnostic: this is the only line to
   * change if the domain ever moves.
   */
  url: "https://www.brisbanefireplaceservices.com.au",
  name: "Brisbane Fireplace Services",
  shortName: "Brisbane Fireplace Services",
  tagline: "Chimney Cleaning, Repairs & Fireplace Installations",
  description:
    "Local chimney cleaning and fireplace specialists serving Brisbane and surrounding suburbs. Cleaning, repairs, safety checks and installations.",
  phone: "0421 833 506",
  phoneHref: "tel:+61421833506",
  email: "Brisbanefireplaceservices@hotmail.com",
  facebookUrl: "https://www.facebook.com/people/Brisbane-Fireplace-Services/61593009385299/",
  suburb: "Brisbane",
  hours: "Mon – Fri: 7am – 5pm",
  yearsExperience: 20,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Chimney Cleaning", href: "/services/chimney-cleaning" },
  { label: "Fireplace Installation", href: "/services/fireplace-installation" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
