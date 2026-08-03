"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" align="center" />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.author}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-line p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote className="text-ember/40" size={28} />
              <blockquote className="mt-3 text-mist leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-4 font-semibold text-charcoal">
                {testimonial.author}
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
