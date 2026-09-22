import type { Metadata } from "next";
import { shareMetadata } from "@/lib/shareMetadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IndustriesHero from "@/components/sections/industries/IndustriesHero";
import IndustriesGridSection from "@/components/sections/industries/IndustriesGridSection";
import IndustryDetailSection from "@/components/sections/industries/IndustryDetailSection";
import AustralianMarketSection from "@/components/sections/industries/AustralianMarketSection";
import IndustryProcessSection from "@/components/sections/industries/IndustryProcessSection";
import IndustryFAQSection from "@/components/sections/industries/IndustryFAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Industries | ValoSync Global" },
  description: "Explore technology solutions for healthcare, finance, logistics, retail, education and other industries supported by ValoSync Global.",
  alternates: { canonical: "/industries" },
  ...shareMetadata({
    path: "/industries",
    title: "Industries | ValoSync Global",
    description: "Explore technology solutions for healthcare, finance, logistics, retail, education and other industries supported by ValoSync Global.",
    section: "Industries",
    visual: "/images/departments/engineering-project-management.webp",
  }),
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero Banner Section */}
        <IndustriesHero />

        {/* Filterable Sector Grid */}
        <IndustriesGridSection />

        {/* Deep-Dive Problem & Solution Breakdowns */}
        <IndustryDetailSection />

        {/* Enterprise Market Execution & Delivery */}
        <AustralianMarketSection />

        {/* Engagement Methodology & Process */}
        <IndustryProcessSection />

        {/* Frequently Asked Questions */}
        <IndustryFAQSection />

        {/* Call to Action Banner */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

