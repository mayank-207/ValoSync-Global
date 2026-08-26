"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CodeIcon,
  CrmIcon,
  BrainIcon,
  AutomationIcon,
  LayersIcon,
  MarketingIcon,
  HealthcareIcon,
  LogisticsIcon,
  FinanceIcon,
  RetailIcon,
  RealEstateIcon,
  ManufacturingIcon,
  ArrowRightIcon,
  FilterIcon,
} from "@/components/ui/Icons";

export const portfolioProjects = [
  {
    slug: "ai-enterprise-crm",
    title: "AI-Powered Enterprise CRM Platform",
    category: "CRM Development",
    industry: "Financial Services",
    country: "Australia",
    metric: "70% Faster Deal Closure",
    description:
      "Customized CRM solution with automated pipeline tracking, AI lead scoring, and intelligent follow-up scheduling built for high-touch service firms.",
    icon: <CrmIcon size={24} />,
    tags: ["Next.js", "AI Lead Scoring", "CRM Engine", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "australian-lead-portal",
    title: "Australian Lead Generation & Quote Engine",
    category: "Digital Marketing",
    industry: "Professional Services",
    country: "Australia",
    metric: "3.5x Qualified Inquiries",
    description:
      "High-converting landing architecture and automated quote engines specifically tailored to attract and engage Australian commercial clients.",
    icon: <MarketingIcon size={24} />,
    tags: ["React 19", "Automated Workflows", "SEO Suite", "Google Ads"],
    featured: true,
  },
  {
    slug: "multi-tenant-erp",
    title: "Multi-Tenant Business ERP & Billing System",
    category: "Custom Software",
    industry: "Enterprise Operations",
    country: "Global",
    metric: "99.9% Automated Billing",
    description:
      "Tailored cloud ERP managing multi-currency invoices, staff schedules, and project milestone approvals across global delivery teams.",
    icon: <CodeIcon size={24} />,
    tags: ["Cloud Architecture", "Custom ERP", "Stripe API", "AWS"],
    featured: true,
  },
  {
    slug: "healthcare-telehealth-portal",
    title: "Compliant Telehealth & EHR Patient Portal",
    category: "Custom Software",
    industry: "Healthcare",
    country: "Australia",
    metric: "60% Lower No-Show Rate",
    description:
      "HIPAA/AHPRA compliant digital health portal featuring automated appointment scheduling, EHR integration, and instant SMS reminders.",
    icon: <HealthcareIcon size={24} />,
    tags: ["AHPRA Compliant", "Next.js", "Python AI", "WebSockets"],
    featured: false,
  },
  {
    slug: "logistics-dispatch-tracker",
    title: "Real-Time Fleet Tracking & Dispatch Engine",
    category: "AI & Automation",
    industry: "Logistics",
    country: "Australia",
    metric: "25+ Hrs Saved / Week",
    description:
      "Centralized fleet telematics dashboard with live GPS route optimization and automated dispatch communication for logistics operators.",
    icon: <LogisticsIcon size={24} />,
    tags: ["Node.js", "Live GPS API", "PostgreSQL", "Automation"],
    featured: false,
  },
  {
    slug: "fintech-kyc-onboarding",
    title: "Secure Fintech KYC & Loan Approval Engine",
    category: "Custom Software",
    industry: "Fintech",
    country: "Global",
    metric: "Instant Onboarding Turnaround",
    description:
      "Encrypted digital customer onboarding pipeline with automated identity verification, fraud detection, and instant loan evaluation.",
    icon: <FinanceIcon size={24} />,
    tags: ["OAuth2 Security", "Automated KYC", "TypeScript", "Python Security"],
    featured: false,
  },
  {
    slug: "headless-ecommerce-store",
    title: "Next.js Headless E-Commerce Platform",
    category: "Web & E-Commerce",
    industry: "Retail",
    country: "Australia",
    metric: "38% Increase in Repeat Purchases",
    description:
      "Ultra-fast headless commerce storefront with sub-second page loads, multi-channel inventory sync, and AI product recommendations.",
    icon: <RetailIcon size={24} />,
    tags: ["Next.js", "Headless Commerce", "Tailwind CSS", "Stripe"],
    featured: false,
  },
  {
    slug: "industrial-iot-dashboard",
    title: "Industrial Manufacturing IoT & OEE Dashboard",
    category: "AI & Automation",
    industry: "Manufacturing",
    country: "Global",
    metric: "40% Downtime Reduction",
    description:
      "Shop-floor operations dashboard connecting IoT sensors with predictive machine maintenance alerts and production schedule planning.",
    icon: <ManufacturingIcon size={24} />,
    tags: ["IoT Sensors", "Python AI", "React", "Docker Container"],
    featured: false,
  },
];

const categories = [
  "All",
  "Custom Software",
  "CRM Development",
  "AI & Automation",
  "Web & E-Commerce",
  "Digital Marketing",
];

export default function PortfolioGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((item) => item.category === activeCategory);

  return (
    <section
      id="case-studies-grid"
      className="section-padding bg-slate-50 dark:bg-[#060e24]/60 relative"
    >
      <div className="container">
        <SectionHeading
          badge="Verified Client Deliveries"
          title="Case Studies Driven by Measurable ROI"
          subtitle="Explore our recent software engineering, CRM builds, AI workflow automations, and digital marketing campaigns."
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-3xl"
            >
              <article className="relative flex flex-col h-full rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white dark:bg-[#0F172A] border-slate-200 dark:border-slate-800">
                {/* Visual Header Box */}
                <div className="relative p-6 bg-gradient-to-br from-[#0B1B3D] via-[#1E3A8A] to-[#0F172A] text-white flex flex-col justify-between h-48 overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-white/10 text-slate-300">
                        {project.country}
                      </span>
                      <span className="p-2 rounded-xl bg-white/10 text-cyan-400">
                        {project.icon}
                      </span>
                    </div>
                  </div>

                  <div className="z-10 mt-auto">
                    <span className="text-[11px] font-semibold text-slate-300 block uppercase tracking-wider mb-0.5">
                      KEY IMPACT METRIC
                    </span>
                    <span className="text-xl font-extrabold text-cyan-400">
                      {project.metric}
                    </span>
                  </div>

                  {/* Glow effect */}
                  <div
                    className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150"
                    aria-hidden="true"
                  />
                </div>

                {/* Body Content */}
                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                    {project.industry}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-500">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-1 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-2 flex items-center gap-2 text-sm font-semibold text-cyan-500 group-hover:gap-3 transition-all duration-300">
                    <span>Read Full Case Study</span>
                    <ArrowRightIcon size={16} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
