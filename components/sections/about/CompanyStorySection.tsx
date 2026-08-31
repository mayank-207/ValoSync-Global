import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    phase: "Phase 1 — August 2026",
    title: "Corporate Foundation",
    description:
      "Establishing the parent organisation, corporate identity, governance principles and shared operating foundation.",
  },
  {
    phase: "Phase 2 — Infrastructure",
    title: "Department Structure",
    description:
      "Defining focused departments across technology, accounting, conveyancing, civil engineering, real estate and home loans.",
  },
  {
    phase: "Phase 3 — Presence",
    title: "Connected Service Experience",
    description:
      "Creating clear enquiry pathways, shared communication standards and a consistent experience across every department.",
  },
  {
    phase: "Phase 4 — Operations",
    title: "Operational Readiness",
    description:
      "Building specialist capacity, documented processes and coordinated support for professional client delivery.",
  },
  {
    phase: "Phase 5 — September 2026+",
    title: "Market Expansion",
    description:
      "Expanding department capabilities and client relationships across Australian and international markets.",
  },
];

export default function CompanyStorySection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="Company Evolution"
          title="Built on Structure, Connected for Growth"
          subtitle="Our operating model is designed to grow specialist departments without losing consistency, accountability or client focus."
          center
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-[#0D47A1]/30 -translate-x-1/2" />

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
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0D47A1] text-white items-center justify-center font-bold text-sm shadow-lg z-10">
                    {idx + 1}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] p-6 sm:p-8 rounded-3xl bg-[#F7F9FC] border border-[#D9E1EC] shadow-sm hover:shadow-xl hover:bg-white hover:border-[#0B3D91]/40 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] text-xs font-bold uppercase tracking-wider mb-3">
                      {m.phase}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
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
