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
    title: "Professional Standards",
    description:
      "We apply clear responsibilities, consistent quality expectations and appropriate professional oversight to every engagement.",
    icon: <CodeIcon size={24} />,
  },
  {
    title: "Trust and Responsibility",
    description:
      "We handle client information and service responsibilities carefully, with confidentiality and relevant compliance considerations.",
    icon: <ShieldIcon size={24} />,
  },
  {
    title: "Client-Focused Service",
    description:
      "Each department begins with the client's actual requirement and shapes its service pathway around the appropriate outcome.",
    icon: <UsersIcon size={24} />,
  },
  {
    title: "Practical Value",
    description:
      "Our work is designed to produce clear, useful outcomes rather than unnecessary complexity.",
    icon: <AwardIcon size={24} />,
  },
  {
    title: "Transparent Communication",
    description:
      "Defined contacts, visible next steps and timely updates help clients remain informed throughout the engagement.",
    icon: <ZapIcon size={24} />,
  },
  {
    title: "Global Perspective",
    description:
      "We combine global business awareness with the professional and regulatory requirements relevant to each service.",
    icon: <GlobeIcon size={24} />,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="section-padding bg-[#F7F9FC] relative">
      <div className="container">
        <SectionHeading
          badge="Guiding Principles"
          title="The Core Values That Define Our Work"
          subtitle="How ValoSync Global delivers excellence, trust, and long-term value to every business partnership."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D9E1EC] hover:border-[#0D47A1]/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0D47A1]/10 text-[#0D47A1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#0D47A1]/20">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 group-hover:text-[#0D47A1] transition-colors duration-200">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
