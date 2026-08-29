"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const statsData = [
  {
    number: "$12M+",
    label: "Client Revenue Generated",
    description: "Quantified sales revenue & funding unlocked for client platforms.",
  },
  {
    number: "50,000+",
    label: "Hours Saved Via Automation",
    description: "Manual administrative hours eliminated using AI & custom workflows.",
  },
  {
    number: "99.9%",
    label: "Cloud Uptime & Reliability",
    description: "Enterprise SLA compliance on AWS and containerized microservices.",
  },
  {
    number: "100%",
    label: "IP Code Ownership",
    description: "Complete source code rights transferred directly to clients.",
  },
];

export default function PortfolioStatsSection() {
  return (
    <section className="section-padding bg-[#071A3D] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          badge="Quantified Client Impact"
          title="Engineering Results That Drive Scale"
          subtitle="Our focus is on delivering concrete, trackable business outcomes rather than just lines of code."
          center
          titleClassName="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#041026]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#D4AF37] mb-2">
                {stat.number}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
