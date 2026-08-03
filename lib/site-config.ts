export const siteConfig = {
  name: "Brisbane Fireplace Services",
  shortName: "Brisbane Fireplace Services",
  tagline: "Chimney Cleaning, Repairs & Fireplace Installations",
  description:
    "Local chimney cleaning and fireplace specialists serving Brisbane and surrounding suburbs. Cleaning, repairs, safety checks and installations.",
  phone: "0421 833 506",
  phoneHref: "tel:+61421833506",
  email: "unlikanin28@gmail.com",
  suburb: "Brisbane",
  hours: "Mon – Fri: 7am – 5pm",
  yearsExperience: 20,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Chimney Cleaning", href: "/services/chimney-cleaning" },
  { label: "Fireplace Installation", href: "/services/fireplace-installation" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
