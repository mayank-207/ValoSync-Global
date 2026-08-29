"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogos";

const techLayers = [
  {
    category: "Frontend & UI Engineering",
    description: "Responsive interfaces built with proven frontend frameworks, type safety, and maintainable design systems.",
    tools: ["Next.js", "React", "TypeScript", "WordPress", "Tailwind CSS", "Vercel"],
  },
  {
    category: "Backend, Databases & APIs",
    description: "Backend applications, integrations and data layers selected around performance, security and maintainability.",
    tools: ["Laravel", "Core PHP", "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "AI, Machine Learning & Automation",
    description: "AI integrations, workflow automation and document-processing capabilities matched to practical enterprise use cases.",
    tools: ["n8n", "OpenAI APIs", "Anthropic Claude", "LangChain", "Pinecone DB", "Make / Zapier"],
  },
  {
    category: "Cloud, Infrastructure & Security",
    description: "Cloud deployment, containerisation, release automation, monitoring and security-conscious infrastructure practices.",
    tools: ["AWS Cloud", "Azure", "Docker", "Linux", "GitHub Actions", "Vercel"],
  },
  {
    category: "Digital Growth & Analytics",
    description: "Analytics, search, advertising and social platforms used to measure and improve digital performance.",
    tools: ["Google Analytics 4", "Google Search Console", "Google Ads", "Meta Ads", "Semrush", "HubSpot CRM"],
  },
];

export default function ServiceTechStackSection() {
  return (
    <section className="section-padding bg-[#071A3D] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          badge="Technology Stack & Ecosystem"
          title="Technology Selected for the Solution, Not the Trend"
          subtitle="Our stack spans modern web frameworks, established enterprise technologies, cloud platforms, AI engines and digital growth tools."
          center
          titleClassName="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {techLayers.map((layer, idx) => (
            <div
              key={idx}
              className="bg-[#041026]/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] font-bold flex items-center justify-center text-sm mb-5 border border-[#D4AF37]/30">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {layer.category}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                  {layer.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {layer.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#071A3D] text-[#D4AF37] text-xs font-semibold border border-white/15 hover:border-[#D4AF37]/50 hover:bg-[#0B3D91] hover:text-white transition-all"
                  >
                    <TechLogo name={tool} size={16} />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
