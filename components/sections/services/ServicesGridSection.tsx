"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  CodeIcon,
  CrmIcon,
  BrainIcon,
  AutomationIcon,
  LayersIcon,
  MarketingIcon,
  FilterIcon,
} from "@/components/ui/Icons";

export const servicesData = [
  {
    slug: "custom-software",
    category: "Development",
    title: "Custom Software Development",
    description:
      "Engineered bespoke software applications tailored to your specific business workflows, high-concurrency architecture, and proprietary business logic.",
    icon: <CodeIcon size={28} />,
    href: "/services/custom-software",
    features: [
      "Bespoke SaaS & Web Portals",
      "Scalable Cloud & Microservices",
      "Legacy Code & API Modernization",
    ],
    metrics: "100% Tailored Workflows",
    techStack: ["Next.js", "Node.js", "Python", "AWS / Docker"],
  },
  {
    slug: "crm-development",
    category: "Development",
    title: "CRM Development",
    description:
      "Customized CRM platforms engineered to manage sales pipelines, customer interactions, lead scoring, and automated client onboarding effortlessly.",
    icon: <CrmIcon size={28} />,
    href: "/services/crm-development",
    features: [
      "Custom Lead Pipeline & Scoring",
      "Automated WhatsApp & Email Sync",
      "Real-Time Sales Performance Analytics",
    ],
    metrics: "3.2x Faster Lead Response",
    techStack: ["React", "TypeScript", "PostgreSQL", "REST/GraphQL"],
  },
  {
    slug: "ai-automation",
    category: "Automation",
    title: "AI Automation Solutions",
    description:
      "Harness artificial intelligence and machine learning to automate complex data processing, intelligent document parsing, and 24/7 AI chat agents.",
    icon: <BrainIcon size={28} />,
    href: "/services/ai-automation",
    features: [
      "Custom LLM & RAG Knowledge Bots",
      "Automated Medical/Invoice Extraction",
      "Predictive Analytics & Decision Engines",
    ],
    metrics: "75% Reduction in Data Entry Labor",
    techStack: ["Python", "OpenAI / LangChain", "FastAPI", "Vector DBs"],
  },
  {
    slug: "business-automation",
    category: "Automation",
    title: "Business Process Automation",
    description:
      "Eliminate repetitive manual overhead by automating cross-departmental operations, multi-app data synchronization, and automated task dispatching.",
    icon: <AutomationIcon size={28} />,
    href: "/services/business-automation",
    features: [
      "End-to-End Workflow Orchestration",
      "Third-Party ERP & Software Integration",
      "Automated SLA & Approval Alerts",
    ],
    metrics: "20+ Hours Saved / Week per Team",
    techStack: ["Node.js", "Zapier / Make APIs", "WebSockets", "Redis"],
  },
  {
    slug: "web-development",
    category: "Development",
    title: "Web Development",
    description:
      "Modern, ultra-fast web applications, enterprise corporate portals, and headless e-commerce platforms engineered with Next.js and high-performing UI design.",
    icon: <LayersIcon size={28} />,
    href: "/services/web-development",
    features: [
      "Sub-Second Next.js Performance",
      "Responsive & Accessible Design",
      "Headless CMS & E-Commerce Integration",
    ],
    metrics: "99+ Google Lighthouse Score",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "digital-marketing",
    category: "Digital Growth",
    title: "Digital Marketing & SEO",
    description:
      "Data-driven digital marketing campaigns, technical SEO optimization, lead generation funnels, and targeted audience acquisition for Australian SMEs and global brands.",
    icon: <MarketingIcon size={28} />,
    href: "/services/digital-marketing",
    features: [
      "Technical SEO & Local Search Domination",
      "High-Intent Lead Gen Funnels",
      "Social Media & Content Campaigning",
    ],
    metrics: "4.5x ROI on Ad Spend",
    techStack: ["Google Analytics 4", "Semrush", "Meta Ads", "Google Ads"],
  },
];

const categories = ["All", "Development", "Automation", "Digital Growth"];

export default function ServicesGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? servicesData
      : servicesData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="services-catalog"
      className="section-padding bg-slate-50 dark:bg-[#060e24]/60 relative"
    >
      <div className="container">
        <SectionHeading
          badge="Complete Service Portfolio"
          title="Engineered Solutions Built for Speed, Scale & ROI"
          subtitle="Select a category or click on any service to explore detailed capabilities, technical stack, and real-world outcomes."
          center
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 pr-3 text-slate-400 text-xs font-semibold uppercase tracking-wider hidden sm:flex">
            <FilterIcon size={14} />
            <span>Category:</span>
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
