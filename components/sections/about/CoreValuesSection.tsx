import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ShieldIcon,
  CodeIcon,
  UsersIcon,
  ZapIcon,
  AwardIcon,
  GlobeIcon,
} from "@/components/ui/Icons";

const values = [
  {
    title: "Engineering Quality & Standards",
    description:
      "We strictly build maintainable, type-safe, and modular codebases using Next.js, React, Node, and Python designed for enterprise scale.",
    icon: <CodeIcon size={24} />,
  },
  {
    title: "Uncompromising Data Security",
    description:
      "Data protection, privacy policies, NDAs, and ISO compliance standards are embedded into every layer of our system architecture.",
    icon: <ShieldIcon size={24} />,
  },
  {
    title: "Client-Centric Customization",
    description:
      "We never force generic templates. Every CRM, web portal, and automation sequence is custom-crafted around your precise business workflow.",
    icon: <UsersIcon size={24} />,
  },
  {
    title: "Measurable Business ROI",
    description:
      "Our solutions are evaluated on concrete outcomes—saving admin hours, reducing process costs, and increasing lead conversion rates.",
    icon: <AwardIcon size={24} />,
  },
  {
    title: "Agile & Transparent Delivery",
    description:
      "Clear milestone reporting, bi-weekly development demos, and dedicated communication keep you fully informed from start to finish.",
    icon: <ZapIcon size={24} />,
  },
  {
    title: "Australian & Global Compliance",
    description:
      "Tailored for Australian regulatory guidelines (APPs, ACCC) and global enterprise standards to ensure frictionless market launch.",
    icon: <GlobeIcon size={24} />,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative">
      <div className="container">
        <SectionHeading
          badge="Guiding Principles"
          title="The Core Values That Define Our Work"
          subtitle="How Velosync Global delivers excellence, trust, and long-term value to every business partnership."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors duration-200">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
