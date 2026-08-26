import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CodeIcon, UsersIcon, ShieldIcon, MarketingIcon, BrainIcon } from "@/components/ui/Icons";

const teamRoles = [
  {
    title: "Full-Stack Software Engineers",
    focus: "Next.js, React, Node.js, Python, PostgreSQL, AWS Cloud Architecture",
    description:
      "Crafting high-speed frontends and resilient backend API microservices built for heavy enterprise loads.",
    icon: <CodeIcon size={26} />,
  },
  {
    title: "UI/UX & Graphic Designers",
    focus: "Figma, Design Systems, Modern Typography, Responsive Micro-Interactions",
    description:
      "Creating intuitive user interfaces and cohesive brand aesthetics that captivate users and drive conversion.",
    icon: <BrainIcon size={26} />,
  },
  {
    title: "Quality Assurance (QA) Engineers",
    focus: "Automated Testing, Security Auditing, Performance Benchmarking",
    description:
      "Executing end-to-end regression suites, stress tests, and vulnerability checks before every code release.",
    icon: <ShieldIcon size={26} />,
  },
  {
    title: "SEO & Digital Marketing Specialists",
    focus: "Technical SEO, Lead Generation Funnels, Content & Analytics",
    description:
      "Optimizing organic reach, lead acquisition funnels, and customer retention campaigns for business growth.",
    icon: <MarketingIcon size={26} />,
  },
];

export default function TeamLeadershipSection() {
  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative">
      <div className="container">
        <SectionHeading
          badge="Multidisciplinary Talent"
          title="Engineered by Experts, Built for Impact"
          subtitle="Our team combines technical rigor, aesthetic design, quality assurance, and growth marketing under one roof."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {teamRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6 border border-cyan-500/20">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {role.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  {role.focus}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {role.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 text-xs font-medium text-slate-400">
                Dedicated Velosync Global Engineering Division
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
