import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RocketIcon, EyeIcon, TargetIcon, CheckCircleIcon } from "@/components/ui/Icons";

export default function CompanyMissionSection() {
  const pillars = [
    {
      title: "Our Mission",
      description:
        "To liberate businesses from manual administrative bottlenecks by building high-performing custom software, intelligent CRMs, and automated workflow ecosystems.",
      icon: <RocketIcon size={28} />,
    },
    {
      title: "Our Vision",
      description:
        "To become a globally recognized IT solutions leader and trusted digital transformation partner for SMEs and international organizations.",
      icon: <EyeIcon size={28} />,
    },
    {
      title: "Our Core Focus",
      description:
        "Solving high-value operational challenges through domain-specific software engineering, strict data privacy compliance, and continuous ROI delivery.",
      icon: <TargetIcon size={28} />,
    },
  ];

  return (
    <section className="section-padding bg-[#F7F9FC] relative">
      <div className="container">
        <SectionHeading
          badge="Mission & Vision"
          title="Empowering Businesses Through Intelligent Technology"
          subtitle="At ValoSync Global, we don't just write code—we re-engineer business operations to achieve unprecedented speed, accuracy, and profitability."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-3xl bg-white border border-[#D9E1EC] shadow-md flex flex-col justify-between"
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
