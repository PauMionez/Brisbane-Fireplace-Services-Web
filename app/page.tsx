import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";


export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesGrid />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
