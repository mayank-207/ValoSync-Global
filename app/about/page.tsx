import type { Metadata } from "next";
import { shareMetadata } from "@/lib/shareMetadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import CompanyMissionSection from "@/components/sections/about/CompanyMissionSection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import CompanyStorySection from "@/components/sections/about/CompanyStorySection";
import TeamLeadershipSection from "@/components/sections/about/TeamLeadershipSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: { absolute: "About ValoSync Global | Connected Specialist Services" },
  description: "Learn how ValoSync Global connects specialist departments across business, property, lending, engineering and technology.",
  alternates: { canonical: "/about" },
  ...shareMetadata({
    path: "/about",
    title: "About ValoSync Global | Connected Specialist Services",
    description: "Learn how ValoSync Global connects specialist departments across business, property, lending, engineering and technology.",
    section: "About",
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

