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
  GlobeIcon,
  MarketingIcon,
  FilterIcon,
  SmartphoneIcon,
} from "@/components/ui/Icons";

export const servicesData = [
  {
    slug: "custom-software",
    category: "Development",
    title: "Custom Software Development",
    description:
      "Custom software designed around your workflows, users, integrations and long-term operating requirements.",
    icon: <CodeIcon size={28} />,
    href: "/services/custom-software",
    features: [
      "Bespoke SaaS & Web Portals",
      "Scalable Cloud & Microservices",
      "Legacy Code & API Modernization",
    ],
    metrics: "Built Around Your Workflow",
    techStack: ["Next.js", "Node.js", "Python", "AWS / Docker"],
  },
  {
    slug: "mobile-app-development",
    category: "Development",
    title: "Mobile App Development",
    description:
      "Design, build and scale native iOS, Android and cross-platform Flutter/React Native mobile applications with offline sync.",
    icon: <SmartphoneIcon size={28} />,
    href: "/services/mobile-app-development",
    features: [
      "Native iOS (Swift) & Android (Kotlin)",
      "Cross-Platform Flutter & React Native",
      "Guaranteed App Store & Play Store Approval",
    ],
    metrics: "High-Performance Mobile Delivery",
    techStack: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    slug: "crm-development",
    category: "Development",
    title: "CRM Development",
    description:
      "CRM platforms tailored to your customer journey, sales process, follow-ups, reporting and internal operations.",
    icon: <CrmIcon size={28} />,
    href: "/services/crm-development",
    features: [
      "Custom Lead Pipeline & Scoring",
      "Automated WhatsApp & Email Sync",
      "Real-Time Sales Performance Analytics",
    ],
    metrics: "Connected Customer Operations",
    techStack: ["React", "TypeScript", "PostgreSQL", "REST/GraphQL"],
  },
  {
    slug: "ai-automation",
    category: "AI & Automation",
    title: "AI Automation Solutions",
    description:
      "Apply AI where it delivers practical value, including document processing, knowledge support, workflow assistance and intelligent chatbots.",
    icon: <BrainIcon size={28} />,
    href: "/services/ai-automation",
    features: [
      "Custom LLM & RAG Knowledge Bots",
      "Automated Medical/Invoice Extraction",
      "Predictive Analytics & Decision Engines",
    ],
    metrics: "Practical AI Integration",
    techStack: ["Python", "OpenAI / LangChain", "FastAPI", "Vector DBs"],
  },
  {
    slug: "web-development",
    category: "Development",
    title: "Web Development",
    description:
      "Responsive websites, WordPress solutions, web applications, customer portals and digital platforms built for usability and performance.",
    icon: <LayersIcon size={28} />,
    href: "/services/web-development",
    features: [
      "Performance-Focused Development",
      "Responsive & Accessible Design",
      "Headless CMS & E-Commerce Integration",
    ],
    metrics: "Responsive, Accessible Delivery",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "cloud-devops",
    category: "Cloud & Infrastructure",
    title: "Cloud & DevOps Support",
    description:
      "Plan reliable deployments, automate release workflows and improve the visibility, resilience and maintainability of your infrastructure.",
    icon: <GlobeIcon size={28} />,
    href: "/services/cloud-devops",
    features: [
      "Cloud Setup & Application Deployment",
      "CI/CD Pipelines & Containerisation",
      "Monitoring, Backups & Optimisation",
    ],
    metrics: "Reliable Delivery Foundations",
    techStack: ["AWS / Azure", "Docker", "GitHub Actions", "Linux"],
  },
  {
    slug: "network-as-a-service",
    category: "Cloud & Infrastructure",
    title: "Network as a Service (NaaS)",
    description:
      "Flexible, managed network solutions that help businesses securely connect their teams, offices, cloud platforms and essential systems.",
    icon: <GlobeIcon size={28} />,
    href: "/departments/technology/network-as-a-service",
    features: ["Network Planning & Connectivity", "Multi-location & Remote Access", "Monitoring & Optimisation"],
    metrics: "Connected Business Operations",
    techStack: ["LAN / WAN", "Wi-Fi", "VPN", "Cloud Connectivity"],
  },
  {
    slug: "digital-marketing",
    category: "Digital Growth",
    title: "Digital Marketing & SEO",
    description:
      "SEO, paid media, content and social media services designed to improve visibility and generate relevant commercial opportunities.",
    icon: <MarketingIcon size={28} />,
    href: "/services/digital-marketing",
    features: [
      "Technical SEO & Local Search",
      "Lead Generation Campaigns",
      "Social Media & Content Planning",
    ],
    metrics: "Measurable Digital Growth",
    techStack: ["Google Analytics 4", "Semrush", "Meta Ads", "Google Ads"],
  },
];

const categories = ["All", "Development", "AI & Automation", "Cloud & Infrastructure", "Digital Growth"];

export default function ServicesGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? servicesData
      : servicesData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="services-catalog"
      className="section-padding bg-[#F7F9FC] relative"
    >
      <div className="container">
        <SectionHeading
          badge="Service Portfolio"
          title="Choose the Right Capability for Your Next Initiative"
          subtitle="Explore our development, automation, cloud and digital growth services, then speak with us about the right delivery approach."
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
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D47A1] ${
                activeCategory === cat
                  ? "bg-[#0B3D91] text-white shadow-md"
                  : "bg-[#F7F9FC] text-[#4A5568] border border-[#D9E1EC] hover:bg-[#EEF3FA] hover:text-[#0B3D91]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
