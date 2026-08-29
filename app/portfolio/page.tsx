import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGridSection from "@/components/sections/portfolio/PortfolioGridSection";
import CaseStudyDetailSection from "@/components/sections/portfolio/CaseStudyDetailSection";
import PortfolioStatsSection from "@/components/sections/portfolio/PortfolioStatsSection";
import PortfolioFAQSection from "@/components/sections/portfolio/PortfolioFAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies & Client Results Australia | Valosync Global",
  description:
    "Explore Valosync Global's portfolio of custom software engineering, intelligent CRM platforms, AI workflow automations, and digital growth campaigns delivered for Australian businesses and global clients.",
  keywords: [
    "Valosync Global Portfolio",
    "Software Engineering Case Studies Australia",
    "Custom CRM Case Study Australia",
    "AI Automation Success Stories",
    "Web Application Portfolio Australia",
    "Digital Marketing Case Studies Australia",
    "Enterprise Software Solutions Sydney Melbourne",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Case Studies & Client Results Australia | Valosync Global",
    description:
      "Verified case studies demonstrating custom software platforms, high-conversion CRMs, AI automation, and ROI growth delivered for Australian and international clients.",
    url: "https://valosyncglobal.com/portfolio",
    siteName: "Valosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Valosync Global Case Studies & Portfolio Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Client Results Australia | Valosync Global",
    description:
      "Verified case studies demonstrating custom software, intelligent CRMs, and AI automation delivered for Australian and international clients.",
    images: ["/images/og-portfolio.jpg"],
  },
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
