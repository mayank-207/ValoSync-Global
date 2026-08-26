"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryCard from "@/components/ui/IndustryCard";
import {
  HealthcareIcon,
  LogisticsIcon,
  FinanceIcon,
  RetailIcon,
  RealEstateIcon,
  ManufacturingIcon,
  EducationIcon,
  BriefcaseIcon,
  FilterIcon,
} from "@/components/ui/Icons";

export const industriesData = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    category: "Healthcare",
    description:
      "HIPAA/AHPRA compliant digital health solutions, automated patient intake, EHR/EMR integration, and AI-driven clinical workflow automation.",
    icon: <HealthcareIcon size={28} />,
    keyFeatures: [
      "Automated Patient Booking & Portal",
      "Compliant Telehealth & EHR Integration",
      "AI Medical Billing & Record Extraction",
    ],
    metrics: "45% Faster Patient Intake",
    techStack: ["React", "Next.js", "Python AI", "AWS Health"],
    highlight: true,
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    category: "Logistics",
    description:
      "Real-time fleet tracking portals, dispatch automation, inventory management systems, and automated shipment notification pipelines.",
    icon: <LogisticsIcon size={28} />,
    keyFeatures: [
      "Real-Time GPS & Dispatch Automation",
      "Warehouse Inventory CRM & ERP Sync",
      "Predictive Route Optimization",
    ],
    metrics: "30% Reduction in Logistics Overhead",
    techStack: ["Node.js", "PostgreSQL", "Google Maps API", "WebSockets"],
    highlight: false,
  },
  {
    id: "finance",
    title: "Financial Services & Fintech",
    category: "Finance",
    description:
      "Secure client onboarding portals, automated loan & credit approval engines, compliance tracking CRMs, and encrypted document management.",
    icon: <FinanceIcon size={28} />,
    keyFeatures: [
      "Automated KYC & Onboarding Engine",
      "Encrypted Document & Contract Vault",
      "Custom Financial CRM & Analytics",
    ],
    metrics: "99.9% Security & Compliance",
    techStack: ["Next.js", "TypeScript", "Python Security", "OAuth2"],
    highlight: false,
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    category: "Retail",
    description:
      "Custom multi-channel storefronts, inventory synchronization across channels, AI product recommendation engines, and customer retention CRMs.",
    icon: <RetailIcon size={28} />,
    keyFeatures: [
      "Custom Next.js Headless E-Commerce",
      "Automated Multi-Channel Inventory",
      "AI Loyalty & Lead Generation CRM",
    ],
    metrics: "3.5x Conversions Increase",
    techStack: ["Next.js", "Stripe API", "Tailwind CSS", "Shopify API"],
    highlight: false,
  },
  {
    id: "realestate",
    title: "Real Estate & Property",
    category: "Real Estate",
    description:
      "Property listing portals, automated lead nurturing CRMs, virtual property walkthrough integrations, and digital lease agreement management.",
    icon: <RealEstateIcon size={28} />,
    keyFeatures: [
      "Automated Buyer/Tenant Lead CRM",
      "Interactive Property Search Portal",
      "Digital Contract & Lease Automation",
    ],
    metrics: "60% Faster Lead Response Time",
    techStack: ["Next.js", "Python Automation", "REST APIs", "Mapbox"],
    highlight: false,
  },
  {
    id: "professional",
    title: "Professional Services",
    category: "Services",
    description:
      "Custom client portals, automated project time tracking, proposal generators, and end-to-end client engagement management.",
    icon: <BriefcaseIcon size={28} />,
    keyFeatures: [
      "Client Collaboration & File Portal",
      "Automated Proposal & Contract Billing",
      "Project Progress Dashboards",
    ],
    metrics: "25+ Hrs/Week Saved Per Team",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    highlight: false,
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Operations",
    category: "Manufacturing",
    description:
      "IoT data monitoring dashboards, automated shop-floor scheduling, quality control tracking, and custom ERP workflow software.",
    icon: <ManufacturingIcon size={28} />,
    keyFeatures: [
      "Shop-Floor Process Automation",
      "Inventory & Raw Materials CRM",
      "Quality Assurance & Defect Analytics",
    ],
    metrics: "40% Operational Efficiency Gain",
    techStack: ["Python", "React", "PostgreSQL", "Docker"],
    highlight: false,
  },
  {
    id: "education",
    title: "Education & EdTech",
    category: "Education",
    description:
      "Custom learning management systems (LMS), student enrolment portals, automated course scheduling, and interactive assessment modules.",
    icon: <EducationIcon size={28} />,
    keyFeatures: [
      "Student Enrolment & Payment Portal",
      "Interactive Learning Analytics",
      "Automated Certificate Generation",
    ],
    metrics: "95% Student Satisfaction",
    techStack: ["Next.js", "Node.js", "Tailwind CSS", "Vercel"],
    highlight: false,
  },
];

const categories = [
  "All",
  "Healthcare",
  "Logistics",
  "Finance",
  "Retail",
  "Real Estate",
  "Services",
  "Manufacturing",
  "Education",
];

export default function IndustriesGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredIndustries =
    activeCategory === "All"
      ? industriesData
      : industriesData.filter((item) => item.category === activeCategory);

  return (
    <section id="sector-grid" className="section-padding bg-slate-50 dark:bg-[#060e24]/60 relative">
      <div className="container">
        <SectionHeading
          badge="Specialized Industry Solutions"
          title="Engineered for Your Industry's Specific Challenges"
          subtitle="Discover how Velosync Global delivers tailored software, CRM, AI automation, and digital marketing strategies suited for your vertical."
          center
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 pr-3 text-slate-400 text-xs font-semibold uppercase tracking-wider hidden sm:flex">
            <FilterIcon size={14} />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20 scale-105"
                  : "bg-white dark:bg-[#0F172A] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredIndustries.map((ind) => (
            <IndustryCard key={ind.id} {...ind} />
          ))}
        </div>
      </div>
    </section>
  );
}
