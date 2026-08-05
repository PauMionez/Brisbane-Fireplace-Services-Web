"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flame } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import EmberParticles from "@/components/ui/EmberParticles";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backdropY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal text-white"
    >
      <motion.div aria-hidden style={{ y: backdropY }} className="absolute inset-0 scale-110">
        {/* Muted regardless of the source clip having audio — autoplay in
            every browser requires it, and a hero background shouldn't make
            noise on its own anyway. hero.jpg covers the moment before the
            video has enough data to paint a frame. */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-fireplace-loop.mp4" type="video/mp4" />
        </video>
        {/* Scrim is directional, not flat: heavy on the left where the text
            sits, lifting to the right so the fireplace stays visible. */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />
        {/* Just enough blue to tie the footage to the theme. */}
        <div className="absolute inset-0 bg-ember/10" />
      </motion.div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-32 -left-20 h-96 w-96 rounded-full bg-ember/35 blur-3xl" />
        <div className="animate-blob-delay absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-ember-light/20 blur-3xl" />
      </div>

      <EmberParticles />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative"
      >
        <Container className="py-24 sm:py-32">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.3em] text-ember uppercase"
          >
            <Flame size={16} className="fill-ember" />
            Need a service? Call {siteConfig.phone}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-white/70">
            {siteConfig.tagline} — proudly serving homes and businesses across{" "}
            {siteConfig.suburb.split(",")[0]} and the surrounding suburbs.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Get a Quote</Button>
            <Button href="/services/chimney-cleaning" variant="outline">
              Our Services
            </Button>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
