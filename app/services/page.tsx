import type { Metadata } from "next";
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
  title: "Services | Custom Software, CRM, AI Automation & Digital Marketing",
  description:
    "Explore Velosync Global's end-to-end technology services: Custom Software Development, CRM Engineering, AI Workflow Automation, Business Process Automation, Web Applications, and Digital Marketing for Australian SMEs and global enterprises.",
  keywords: [
    "Velosync Global Services",
    "Custom Software Development Australia",
    "CRM Development Services",
    "AI Automation Agency",
    "Business Process Automation",
    "Web Application Development",
    "Digital Marketing & SEO Australia",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Technology & Software Engineering Services | Velosync Global",
    description:
      "Engineered custom software platforms, high-conversion CRMs, AI workflow automation, and digital marketing funnels tailored to enterprise growth.",
    url: "https://velosyncglobal.com/services",
    siteName: "Velosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Velosync Global Core Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology & Software Engineering Services | Velosync Global",
    description:
      "Engineered custom software, intelligent CRM systems, AI workflow automation, and digital growth.",
    images: ["/images/og-services.jpg"],
  },
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
