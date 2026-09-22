import type { Metadata } from "next";
import { shareMetadata } from "@/lib/shareMetadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGridSection from "@/components/sections/services/ServicesGridSection";
import ServiceDetailSection from "@/components/sections/services/ServiceDetailSection";
import ServiceTechStackSection from "@/components/sections/services/ServiceTechStackSection";
import ServiceProcessSection from "@/components/sections/services/ServiceProcessSection";
import ServiceFAQSection from "@/components/sections/services/ServiceFAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Technology Services | ValoSync Global" },
  description: "Explore application development, AI automation, web and mobile apps, cloud delivery, managed networks and digital marketing at ValoSync Global.",
  alternates: { canonical: "/services" },
  ...shareMetadata({
    path: "/services",
    title: "Technology Services | ValoSync Global",
    description: "Explore application development, AI automation, web and mobile apps, cloud delivery, managed networks and digital marketing at ValoSync Global.",
    section: "Technology Services",
    visual: "/images/services/custom-software-hero.webp",
  }),
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Services Hero Banner */}
        <ServicesHero />

        {/* Core Services Grid Catalog */}
        <ServicesGridSection />

        {/* Deep-Dive Problem & Solution Breakdowns */}
        <ServiceDetailSection />

        {/* Technology Ecosystem Stack */}
        <ServiceTechStackSection />

        {/* Agile 5-Step Delivery Methodology */}
        <ServiceProcessSection />

        {/* Frequently Asked Questions */}
        <ServiceFAQSection />

        {/* Action Call-to-Action Banner */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
