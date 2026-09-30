import type { Metadata } from "next";
import { shareMetadata, siteOrigin } from "@/lib/shareMetadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import CompanyMissionSection from "@/components/sections/about/CompanyMissionSection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import CompanyStorySection from "@/components/sections/about/CompanyStorySection";
import TeamLeadershipSection from "@/components/sections/about/TeamLeadershipSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: { absolute: "About ValoSync Global | Global Engineering & Australian Client Success" },
  description:
    "Learn how ValoSync Global connects multidisciplinary specialists across custom software, AI automation, and enterprise consulting, powered by our India Engineering HQ and Australian client hub.",
  keywords: [
    "about ValoSync Global",
    "software engineering firm Australia",
    "global technology company India HQ",
    "specialist enterprise services",
  ],
  alternates: {
    canonical: "/about",
    languages: {
      "en-AU": `${siteOrigin}/about`,
      "en-IN": `${siteOrigin}/about`,
      "en": `${siteOrigin}/about`,
      "x-default": `${siteOrigin}/about`,
    },
  },
  ...shareMetadata({
    path: "/about",
    title: "About ValoSync Global | Global Engineering & Australian Client Success",
    description:
      "Learn how ValoSync Global connects multidisciplinary specialists across custom software, AI automation, and enterprise consulting, powered by our India Engineering HQ and Australian client hub.",
    section: "About Us",
    visual: "/images/departments/property-real-estate-management.webp",
  }),
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* About Hero Section */}
        <AboutHero />

        {/* Mission, Vision & Core Focus */}
        <CompanyMissionSection />

        {/* Guiding Principles & Core Values */}
        <CoreValuesSection />

        {/* Company Evolution & Growth Timeline */}
        <CompanyStorySection />

        {/* Multidisciplinary Team & Expertise */}
        <TeamLeadershipSection />

        {/* Action Trigger Banner */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

