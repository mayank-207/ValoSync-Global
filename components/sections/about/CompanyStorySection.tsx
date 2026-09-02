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
    title: "Market Expansion",
    description:
      "Acquiring and delivering high-value software, CRM development, AI automation, and digital marketing projects for high-growth enterprises and businesses.",
  },
];

export default function CompanyStorySection() {
  return (
    <section className="pt-8 pb-6 sm:pt-10 sm:pb-8 bg-white relative overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="Company Evolution"
          title="Built on Structure, Engineered for Growth"
          subtitle="Our systematic August implementation roadmap laid the groundwork for a world-class IT consultancy."
          center
          className="mb-6 sm:mb-8"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-[#0D47A1]/30 -translate-x-1/2" />

          <div className="space-y-4 sm:space-y-6">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0D47A1] text-white items-center justify-center font-bold text-xs shadow-md z-10">
                    {idx + 1}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] p-5 sm:p-6 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EC] shadow-sm hover:shadow-xl hover:bg-white hover:border-[#0B3D91]/40 transition-all duration-300">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-1">
                      {m.phase}
                    </span>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-1.5">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
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
