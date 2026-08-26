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
      accentColor: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-500",
    },
    {
      title: "Our Vision",
      description:
        "To become a globally recognized IT solutions leader and trusted digital transformation partner for Australian SMEs and international organizations.",
      icon: <EyeIcon size={28} />,
      accentColor: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-500",
    },
    {
      title: "Our Core Focus",
      description:
        "Solving high-value operational challenges through domain-specific software engineering, strict data privacy compliance, and continuous ROI delivery.",
      icon: <TargetIcon size={28} />,
      accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-500",
    },
  ];

  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060e24]/70 relative">
      <div className="container">
        <SectionHeading
          badge="Mission & Vision"
          title="Empowering Australian Businesses Through Intelligent Technology"
          subtitle="At Velosync Global, we don't just write code—we re-engineer business operations to achieve unprecedented speed, accuracy, and profitability."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 inline-block mb-6">
                  {pillar.icon}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-cyan-500">
                <CheckCircleIcon size={16} />
                <span>Velosync Global Pillar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
