"use client";

import React, { useState } from "react";
import { TechLogo } from "@/components/ui/TechLogos";
import { SparkleIcon, CheckCircleIcon } from "@/components/ui/Icons";

export type TechCategory =
  | "all"
  | "frontend"
  | "mobile"
  | "backend"
  | "database-cloud"
  | "ai-automation"
  | "seo-marketing";

export interface TechItem {
  name: string;
  role: string;
  category: TechCategory;
  highlightedServices?: string[];
}

export const allTechnologies: TechItem[] = [
  // Mobile & Cross-Platform Apps
  { name: "Flutter", role: "Cross-Platform iOS & Android", category: "mobile" },
  { name: "React Native", role: "Native Performance JavaScript Engine", category: "mobile" },
  { name: "Swift", role: "Native Apple iOS Architecture", category: "mobile" },
  { name: "Kotlin", role: "Modern Native Android Development", category: "mobile" },
  { name: "Expo", role: "Rapid Mobile Development & OTA Updates", category: "mobile" },
  { name: "Firebase", role: "Realtime Database & Push Notifications", category: "mobile" },

  // Frontend & Web
  { name: "Next.js", role: "SSR & Web App Router", category: "frontend" },
  { name: "React", role: "Interactive Component UI", category: "frontend" },
  { name: "TypeScript", role: "Type-Safe Architecture", category: "frontend" },
  { name: "WordPress", role: "Custom CMS & Themes", category: "frontend" },
  { name: "Tailwind CSS", role: "Responsive Design System", category: "frontend" },
  { name: "Vercel", role: "Edge Network & Deployment", category: "frontend" },

  // Backend & PHP
  { name: "Laravel", role: "Enterprise PHP Framework", category: "backend" },
  { name: "Core PHP", role: "High-Performance Backend Logic", category: "backend" },
  { name: "Node.js", role: "Asynchronous REST & GraphQL APIs", category: "backend" },
  { name: "Python", role: "Data Logic & FastAPI Microservices", category: "backend" },

  // Databases & Cloud
  { name: "PostgreSQL", role: "Enterprise Relational Database", category: "database-cloud" },
  { name: "MongoDB", role: "Flexible NoSQL Document Store", category: "database-cloud" },
  { name: "Redis", role: "In-Memory Caching & Queues", category: "database-cloud" },
  { name: "Docker", role: "Containerization & Security", category: "database-cloud" },
  { name: "AWS Cloud", role: "Elastic Cloud Infrastructure", category: "database-cloud" },
  { name: "Microsoft Azure", role: "Enterprise Hosting & Virtual Networks", category: "database-cloud" },
  { name: "Linux", role: "Hardened Production OS", category: "database-cloud" },
  { name: "GitHub Actions", role: "Automated CI/CD Delivery", category: "database-cloud" },

  // AI & Automation
  { name: "n8n", role: "Self-Hosted Workflow Automation", category: "ai-automation" },
  { name: "OpenAI GPT-4o", role: "LLM Reasoning & Agent Engine", category: "ai-automation" },
  { name: "Anthropic Claude", role: "Complex Document & Vision Parsing", category: "ai-automation" },
  { name: "LangChain", role: "Autonomous Agent Orchestration", category: "ai-automation" },
  { name: "Pinecone DB", role: "High-Speed Vector Search", category: "ai-automation" },
  { name: "Make / Zapier", role: "No-Code Integration Pipelines", category: "ai-automation" },

  // SEO & Marketing Tools
  { name: "Google Search Console", role: "Organic Indexing & Technical SEO", category: "seo-marketing" },
  { name: "Google Ads", role: "High-Intent PPC Search Campaigns", category: "seo-marketing" },
  { name: "Semrush", role: "Keyword & Competitor Intelligence", category: "seo-marketing" },
  { name: "HubSpot", role: "CRM & Inbound Automation", category: "seo-marketing" },
  { name: "Stripe", role: "Global Payment Processing & Billing", category: "seo-marketing" },
  { name: "Twilio", role: "Omnichannel SMS & Voice API", category: "seo-marketing" },
];

const filterCategories = [
  { id: "all", label: "All Technologies" },
  { id: "mobile", label: "Mobile Apps (iOS & Android)" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "backend", label: "Backend & PHP" },
  { id: "database-cloud", label: "Databases & Cloud" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "seo-marketing", label: "SEO & Growth Tools" },
];

interface TechStackFilterShowcaseProps {
  initialServiceTitle?: string;
  defaultCategory?: TechCategory;
}

export default function TechStackFilterShowcase({
  initialServiceTitle = "Engineering Solutions",
  defaultCategory = "all",
}: TechStackFilterShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<TechCategory>(defaultCategory);

  const filteredTech =
    activeCategory === "all"
      ? allTechnologies
      : allTechnologies.filter((t) => t.category === activeCategory);

  return (
    <section className="section-padding bg-gradient-to-b from-[#041026] via-[#071A3D] to-[#041026] text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0B3D91]/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Tech Stacks, Frameworks & Tools
          </h2>
        </div>

        {/* Capsule Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-16 max-w-4xl mx-auto">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as TechCategory)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  isActive
                    ? "bg-[#0B3D91] text-white border border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105"
                    : "bg-white/[0.05] text-slate-300 border border-white/10 hover:bg-white/[0.1] hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Floating Unboxed Tech & Tool Grid with Interactive Hover Aura */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6 sm:gap-x-8 max-w-6xl mx-auto">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center cursor-pointer select-none"
            >
              {/* Glowing Nebula Aura on Hover */}
              <div
                className="absolute -top-3 w-28 h-28 rounded-full bg-gradient-to-tr from-[#0B3D91] via-[#1565C0] to-[#D4AF37] blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Floating Icon Pod */}
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-3xl bg-white/[0.04] backdrop-blur-md flex items-center justify-center p-3.5 mb-4 group-hover:-translate-y-3 group-hover:scale-110 group-hover:border-[#D4AF37]/70 group-hover:bg-[#071A33]/90 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 ease-out">
                <TechLogo name={tech.name} size={42} />

                {/* Sparkle Dot on hover */}
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" />
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 shadow-[0_0_8px_#D4AF37] pointer-events-none transition-opacity duration-300" />
              </div>

              {/* Tech Name */}
              <h4 className="text-sm sm:text-base font-extrabold text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-300 tracking-tight">
                {tech.name}
              </h4>

            </div>
          ))}
        </div>

        {/* Quality & Engineering Trust Badges */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold text-slate-300">
          <div className="flex items-center gap-2.5">
            <CheckCircleIcon size={18} className="text-[#D4AF37]" />
            <span>100% Client Source Code Ownership</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircleIcon size={18} className="text-[#D4AF37]" />
            <span>Zero Vendor Lock-In Architecture</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircleIcon size={18} className="text-[#D4AF37]" />
            <span>Enterprise Security Audited</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircleIcon size={18} className="text-[#D4AF37]" />
            <span>High-Availability Cloud Scaling</span>
          </div>
        </div>
      </div>
    </section>
  );
}
