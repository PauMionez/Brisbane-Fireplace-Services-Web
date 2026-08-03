import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ember">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_50%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-16 -bottom-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="animate-blob-delay absolute right-1/4 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="animate-shine absolute inset-y-0 -left-1/4 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container className="relative flex flex-col items-center gap-6 py-16 text-center text-white sm:flex-row sm:justify-between sm:text-left">
        <Reveal direction="right">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to book your chimney service?
          </h2>
          <p className="mt-2 text-white/90">
            Call {siteConfig.phone} or send us a message — {siteConfig.hours}.
          </p>
        </Reveal>
        <Reveal direction="left" delay={0.15} className="shrink-0">
          <Button href="/contact" className="bg-charcoal! hover:bg-charcoal-light! shrink-0">
            Contact Us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
