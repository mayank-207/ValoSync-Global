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
  title: "Technology & Software Engineering Services Australia | Valosync Global",
  description:
    "Explore ValoSync Global technology services, including custom software, applications, AI automation, web development, Cloud & DevOps, and Network as a Service for Australian and global businesses.",
  keywords: [
    "Valosync Global Services",
    "Custom Software Development Australia",
    "CRM Development Services Australia",
    "AI Automation Agency Australia",
    "Business Process Automation Australia",
    "Web Application Development Sydney Melbourne",
    "Cloud DevOps Support Australia",
    "Network as a Service Australia",
    "Digital Marketing & SEO Australia",
    "Enterprise Software Solutions Australia",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Technology & Software Engineering Services Australia | Valosync Global",
    description:
      "Software, applications, AI automation, cloud delivery, managed networks and digital growth services for Australian and global businesses.",
    url: "https://valosyncglobal.com/services",
    siteName: "Valosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Valosync Global Core Technology Services Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology & Software Engineering Services Australia | Valosync Global",
    description:
      "Engineered custom software, intelligent CRM systems, AI workflow automation, and digital growth for Australian and global enterprises.",
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
