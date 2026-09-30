import type { Metadata } from "next";
import { shareMetadata, siteOrigin } from "@/lib/shareMetadata";
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
  title: { absolute: "Enterprise Technology & Software Services for Australia | ValoSync Global" },
  description:
    "Discover enterprise custom software, AI automation, CRM development, cloud DevOps, and digital marketing services for Australian businesses from our global engineering delivery HQ.",
  keywords: [
    "technology services Australia",
    "custom software development Australia",
    "AI automation solutions Australia",
    "cloud devops consulting",
    "custom CRM development Australia",
    "offshore engineering delivery India",
  ],
  alternates: {
    canonical: "/services",
    languages: {
      "en-AU": `${siteOrigin}/services`,
      "en-IN": `${siteOrigin}/services`,
      "en": `${siteOrigin}/services`,
      "x-default": `${siteOrigin}/services`,
    },
  },
  ...shareMetadata({
    path: "/services",
    title: "Enterprise Technology & Software Services for Australia | ValoSync Global",
    description:
      "Discover enterprise custom software, AI automation, CRM development, cloud DevOps, and digital marketing services for Australian businesses from our global engineering delivery HQ.",
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
