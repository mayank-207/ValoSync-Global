import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RocketIcon, EyeIcon, TargetIcon, CheckCircleIcon } from "@/components/ui/Icons";

export default function CompanyMissionSection() {
  const pillars = [
    {
      title: "Our Mission",
      description:
        "To make specialist business and property services easier to access through clearly defined departments operating under one trusted organisation.",
      icon: <RocketIcon size={28} />,
    },
    {
      title: "Our Vision",
      description:
        "To build a globally respected multi-service organisation known for professional standards, coordinated support and practical client outcomes.",
      icon: <EyeIcon size={28} />,
    },
    {
      title: "Our Core Focus",
      description:
        "Connecting clients with the right departmental expertise while maintaining clear ownership, responsible delivery and consistent communication.",
      icon: <TargetIcon size={28} />,
    },
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="container">
        <SectionHeading
          badge="Mission & Vision"
          title="Bringing Specialist Expertise Together Under One Brand"
          subtitle="ValoSync Global connects focused departments across technology, finance, property and engineering through a coordinated service model."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#D9E1EC] shadow-sm hover:shadow-xl hover:bg-white hover:border-[#0B3D91]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="p-3 rounded-2xl bg-[#0D47A1]/10 text-[#0D47A1] inline-block mb-6 border border-[#0D47A1]/20">
                  {pillar.icon}
                </span>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0F4FA] flex items-center gap-2 text-xs font-semibold text-[#0D47A1]">
                <CheckCircleIcon size={16} className="text-[#D4AF37]" />
                <span>ValoSync Global Pillar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
