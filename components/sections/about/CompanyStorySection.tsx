import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircleIcon, SparkleIcon, ZapIcon, GlobeIcon } from "@/components/ui/Icons";

const milestones = [
  {
    phase: "Phase 1 — August 2026",
    title: "Legal & Administrative Foundation",
    description:
      "Company registration, business domain setup, official communication channels, comprehensive NDAs, privacy policies, and financial framework.",
  },
  {
    phase: "Phase 2 — Infrastructure",
    title: "Development & CI/CD Infrastructure",
    description:
      "Establishment of centralized Git organization, staging testing servers, automated backup systems, branching strategy, and QA standards.",
  },
  {
    phase: "Phase 3 — Presence",
    title: "Website & Digital Infrastructure Launch",
    description:
      "Deployment of modern Next.js website, service portals, lead enquiry forms, consultation booking workflows, analytics, and SEO baseline.",
  },
  {
    phase: "Phase 4 — Operations",
    title: "Operational Office Launch",
    description:
      "Full setup of developer workstations, project management whiteboards, QA environments, and team onboarding ready for 1 September launch.",
  },
  {
    phase: "Phase 5 — September 2026+",
    title: "Australian Market Expansion",
    description:
      "Acquiring and delivering high-value software, CRM development, AI automation, and digital marketing projects for Australian SMEs.",
  },
];

export default function CompanyStorySection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060e24]/80 relative overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="Company Evolution"
          title="Built on Structure, Engineered for Growth"
          subtitle="Our systematic August implementation roadmap laid the groundwork for a world-class IT consultancy."
          center
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-500 text-white items-center justify-center font-bold text-sm shadow-lg shadow-cyan-500/30 z-10">
                    {idx + 1}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                      {m.phase}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
