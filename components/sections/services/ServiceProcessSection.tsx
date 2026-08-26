"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Discovery & Architecture Planning",
    description:
      "We analyze your business workflows, define technical requirements, scope software features, and map out scalable database schemas and UX wireframes.",
  },
  {
    step: "02",
    title: "Agile Development & Bi-Weekly Sprints",
    description:
      "Our full-stack engineering team builds your product in 2-week iterative sprints, providing staging preview links so you see continuous tangible progress.",
  },
  {
    step: "03",
    title: "AI Integration & Third-Party APIs",
    description:
      "We seamlessly integrate custom AI models, payment gateways (Stripe/PayPal), CRM pipelines, and third-party APIs (Xero, Salesforce, Maps).",
  },
  {
    step: "04",
    title: "Security, QA & Compliance Testing",
    description:
      "Rigorously testing for performance under load, cross-device responsiveness, end-to-end encryption, and Australian data privacy compliance.",
  },
  {
    step: "05",
    title: "Deployment & Ongoing SLA Support",
    description:
      "Smooth production release on AWS/Vercel with 24/7 technical monitoring, automated data backups, and SLA-backed ongoing support.",
  },
];

export default function ServiceProcessSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060e24]/80 relative">
      <div className="container">
        <SectionHeading
          badge="Agile Delivery Framework"
          title="Our Proven 5-Step Service Execution Process"
          subtitle="From initial discovery to continuous production deployment, we guarantee transparency, speed, and enterprise quality at every milestone."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0F172A] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-cyan-500/80 dark:text-cyan-400/80 block mb-3">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
