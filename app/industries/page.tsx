import type { Metadata } from "next";
import { shareMetadata, siteOrigin } from "@/lib/shareMetadata";
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
  title: { absolute: "Industry Technology Solutions | Australian Enterprises & Global Delivery | ValoSync Global" },
  description:
    "Explore enterprise software, AI automation, and cloud platforms engineered for Australian healthcare, finance, logistics, real estate, and retail sectors.",
  keywords: [
    "enterprise software industries Australia",
    "healthcare AI solutions",
    "fintech development Australia",
    "logistics software engineering",
    "custom software Australia",
  ],
  alternates: {
    canonical: "/industries",
    languages: {
      "en-AU": `${siteOrigin}/industries`,
      "en-IN": `${siteOrigin}/industries`,
      "en": `${siteOrigin}/industries`,
      "x-default": `${siteOrigin}/industries`,
    },
  },
  ...shareMetadata({
    path: "/industries",
    title: "Industry Technology Solutions | Australian Enterprises & Global Delivery | ValoSync Global",
    description:
      "Explore enterprise software, AI automation, and cloud platforms engineered for Australian healthcare, finance, logistics, real estate, and retail sectors.",
    section: "Industry Solutions",
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

