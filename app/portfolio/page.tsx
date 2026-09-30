import type { Metadata } from "next";
import { shareMetadata, siteOrigin } from "@/lib/shareMetadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGridSection from "@/components/sections/portfolio/PortfolioGridSection";
import CaseStudyDetailSection from "@/components/sections/portfolio/CaseStudyDetailSection";
import PortfolioStatsSection from "@/components/sections/portfolio/PortfolioStatsSection";
import PortfolioFAQSection from "@/components/sections/portfolio/PortfolioFAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Enterprise Case Studies & Delivered Systems | ValoSync Global" },
  description:
    "Explore enterprise software case studies, custom CRMs, AI automation platforms, and cloud solutions delivered for Australian businesses and global clients.",
  keywords: [
    "software case studies Australia",
    "enterprise CRM implementations",
    "AI automation case study",
    "custom software portfolio",
    "ValoSync Global delivered projects",
  ],
  alternates: {
    canonical: "/portfolio",
    languages: {
      "en-AU": `${siteOrigin}/portfolio`,
      "en-IN": `${siteOrigin}/portfolio`,
      "en": `${siteOrigin}/portfolio`,
      "x-default": `${siteOrigin}/portfolio`,
    },
  },
  ...shareMetadata({
    path: "/portfolio",
    title: "Enterprise Case Studies & Delivered Systems | ValoSync Global",
    description:
      "Explore enterprise software case studies, custom CRMs, AI automation platforms, and cloud solutions delivered for Australian businesses and global clients.",
    section: "Client Case Studies",
    visual: "/images/services/ai-automation-hero.webp",
  }),
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Portfolio Hero Banner */}
        <PortfolioHero />

        {/* Filterable Case Studies Grid */}
        <PortfolioGridSection />

        {/* Deep-Dive Case Study Spotlight */}
        <CaseStudyDetailSection />

        {/* Quantified Business ROI Stats */}
        <PortfolioStatsSection />

        {/* Frequently Asked Questions */}
        <PortfolioFAQSection />

        {/* Action Trigger Banner */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

