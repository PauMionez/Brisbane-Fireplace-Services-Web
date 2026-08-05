import type { Metadata } from "next";
import { serviceAreas } from "@/lib/data/service-areas";
import { siteConfig } from "@/lib/site-config";

/**
 * Absolute URL, always with a trailing slash to match `trailingSlash: true`
 * in next.config.ts.
 *
 * This matters more than it looks. Apache serves these pages at `/about/`,
 * so a canonical pointing at `/about` is a canonical pointing at a redirect —
 * Google discounts those. Canonicals, Open Graph URLs and the sitemap all go
 * through here so they can never drift apart.
 */
export function absoluteUrl(path = "/"): string {
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed ? `${siteConfig.url}/${trimmed}/` : `${siteConfig.url}/`;
}

const defaultOgImage = "/images/hero.jpg";

/**
 * Builds the metadata block every page needs: a self-referencing canonical
 * plus matching Open Graph and Twitter cards. Pages differing only in copy
 * should never hand-roll this — the canonical is the bit that's easy to get
 * silently wrong.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const businessId = `${siteConfig.url}/#business`;

/** The 9 regions — areas with no parent. Used wherever listing all 446 would
 *  bloat the page without telling Google anything extra. */
function regionHubs() {
  return serviceAreas.filter((area) => !area.parentSlug);
}

/**
 * LocalBusiness — the anchor for local search. No `address.streetAddress` or
 * `geo` on purpose: this is a service-area business with no shopfront, and
 * Google's guidance is to describe the area served rather than invent a
 * storefront location.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    image: `${siteConfig.url}${defaultOgImage}`,
    logo: `${siteConfig.url}/images/logo.png`,
    priceRange: "$$",
    currenciesAccepted: "AUD",
    sameAs: [siteConfig.facebookUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    areaServed: regionHubs().map((hub) => ({
      "@type": "City",
      name: hub.name,
      containedInPlace: {
        "@type": "State",
        name: "Queensland",
      },
    })),
    knowsAbout: [
      "Chimney cleaning",
      "Chimney sweeping",
      "Flue cleaning",
      "Fireplace installation",
      "Fireplace repairs",
      "Wood heater servicing",
      "Chimney inspections",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chimney and fireplace services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chimney Cleaning",
            url: absoluteUrl("/services/chimney-cleaning"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fireplace Installation",
            url: absoluteUrl("/services/fireplace-installation"),
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
  };
}

/**
 * Breadcrumbs. Home is prepended automatically, so callers pass only the
 * trail below it. Google uses this to replace the bare URL in results with a
 * readable path, which lifts click-through.
 */
export function breadcrumbSchema(
  trail: { name: string; path: string }[]
) {
  const items = [{ name: "Home", path: "/" }, ...trail];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/*
 * There is deliberately no faqSchema() here. Google retired FAQ rich results
 * on 7 May 2026 — FAQPage no longer appears in its rich results gallery, so
 * the markup renders nothing and the questions are already in the page HTML
 * for crawlers to read. Same reasoning for the ItemList that used to sit on
 * /service-areas: the visible link grid does that job.
 */

/** A single service offered across the whole coverage area. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: regionHubs().map((hub) => ({
      "@type": "City",
      name: hub.name,
    })),
  };
}

/**
 * Per-suburb service. Narrows `areaServed` to the one suburb so each of the
 * 40-odd area pages carries a distinct local signal instead of 42 pages all
 * claiming the same thing.
 */
export function areaServiceSchema({
  areaName,
  description,
  path,
}: {
  areaName: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Chimney Cleaning in ${areaName}`,
    description,
    serviceType: "Chimney cleaning and fireplace services",
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: {
      "@type": "City",
      name: areaName,
      containedInPlace: { "@type": "State", name: "Queensland" },
    },
  };
}
