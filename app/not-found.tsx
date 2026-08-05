import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site-config";

/**
 * `noindex` is the point of this file. Without a custom 404 the built page
 * inherits the root layout's canonical and tells Google it *is* the home page.
 */
export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
  robots: { index: false, follow: true },
  alternates: {},
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="We couldn't find that page"
        description="The link may be out of date, or the page may have moved."
      />

      <section className="py-20">
        <Container className="max-w-2xl">
          <h2 className="text-xl font-semibold text-charcoal">
            Try one of these instead
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-line px-4 py-3 font-semibold text-charcoal-light transition-colors hover:border-ember hover:text-ember"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-mist leading-relaxed">
            Looking for a sweep in your suburb? The{" "}
            <Link
              href="/service-areas"
              className="font-semibold text-ember hover:underline"
            >
              service areas
            </Link>{" "}
            page lists everywhere we work. Or just give us a call.
          </p>

          <a
            href={siteConfig.phoneHref}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-semibold tracking-wide text-white uppercase shadow-lg transition hover:bg-ember-dark"
          >
            <Phone size={18} />
            {siteConfig.phone}
          </a>
        </Container>
      </section>
    </>
  );
}
