import type { Metadata } from "next";
import { shareMetadata } from "@/lib/shareMetadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGridSection from "@/components/sections/portfolio/PortfolioGridSection";
import CaseStudyDetailSection from "@/components/sections/portfolio/CaseStudyDetailSection";
import PortfolioStatsSection from "@/components/sections/portfolio/PortfolioStatsSection";
import PortfolioFAQSection from "@/components/sections/portfolio/PortfolioFAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Selected Projects | ValoSync Global" },
  description: "Explore selected technology projects and delivery approaches across software platforms, automation, cloud and digital growth.",
  alternates: { canonical: "/portfolio" },
  ...shareMetadata({
    path: "/portfolio",
    title: "Selected Projects | ValoSync Global",
    description: "Explore selected technology projects and delivery approaches across software platforms, automation, cloud and digital growth.",
    section: "Selected Projects",
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

