"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const techLayers = [
  {
    category: "Frontend & UI Engineering",
    description: "Lightning-fast client interfaces built with React, Next.js, and modern CSS design systems.",
    tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Redux / Zustand", "HTML5 / WebSockets"],
  },
  {
    category: "Backend, Databases & APIs",
    description: "High-concurrency cloud architecture, microservices, and secure relational & vector data storage.",
    tools: ["Node.js / Express", "Python / FastAPI", "PostgreSQL", "MongoDB", "Redis Cache", "GraphQL & REST APIs"],
  },
  {
    category: "AI, Machine Learning & Automation",
    description: "Custom RAG knowledge retrieval systems, LLM fine-tuning, and intelligent OCR extraction pipelines.",
    tools: ["OpenAI GPT-4o", "LangChain / LlamaIndex", "Pinecone Vector DB", "Python PyTorch", "Zapier / Make APIs", "Custom OCR Engines"],
  },
  {
    category: "Cloud, Infrastructure & Security",
    description: "ISO/HIPAA compliant hosting, containerized Docker microservices, and CI/CD pipelines.",
    tools: ["AWS Cloud", "Docker Containers", "Kubernetes", "Vercel", "GitHub Actions", "OAuth2 & JWT Security"],
  },
  {
    category: "Digital Growth & Analytics",
    description: "Enterprise analytics, conversion funnels, ad platforms, and keyword tracking tools.",
    tools: ["Google Analytics 4", "Google Search Console", "Google Ads / Meta Ads", "Semrush / Ahrefs", "HubSpot CRM", "Hotjar Heatmaps"],
  },
];

export default function ServiceTechStackSection() {
  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          badge="Technology Stack & Ecosystem"
          title="Built With Premier Battle-Tested Technologies"
          subtitle="We leverage cutting-edge frameworks, secure cloud infrastructure, and AI platforms to deliver future-proof solutions."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {techLayers.map((layer, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-sm mb-5">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {layer.category}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                {layer.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/60">
                {layer.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-cyan-300 text-xs font-semibold border border-slate-700/50"
                  >
                    {tool}
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
