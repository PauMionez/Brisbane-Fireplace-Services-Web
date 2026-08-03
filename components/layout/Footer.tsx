import Link from "next/link";
import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <Container className="grid gap-10 py-14 sm:grid-cols-[1fr_0.5fr_1fr]">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed">{siteConfig.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-white uppercase">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ember">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-white uppercase">
            Get In Touch
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{siteConfig.suburb}</li>
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-ember">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-ember">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
