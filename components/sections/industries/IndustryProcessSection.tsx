import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  BrainIcon,
  CodeIcon,
  CheckCircleIcon,
  ZapIcon,
  UsersIcon,
  ShieldIcon,
} from "@/components/ui/Icons";

const processSteps = [
  {
    step: "01",
    title: "Domain Discovery & Workflow Audit",
    description:
      "We analyze your industry-specific operations, compliance mandates, current manual bottlenecks, and software dependencies.",
    icon: <BrainIcon size={24} />,
  },
  {
    step: "02",
    title: "Custom System Architecture",
    description:
      "Our architects design tailored software, CRM, and AI automation blueprints engineered for high scalability and security.",
    icon: <CodeIcon size={24} />,
  },
  {
    step: "03",
    title: "Agile Development & Integration",
    description:
      "We build robust frontends, backends, and API pipelines using Next.js, Node.js, and Python with bi-weekly client feedback.",
    icon: <ZapIcon size={24} />,
  },
  {
    step: "04",
    title: "Quality Assurance & Compliance Testing",
    description:
      "Rigorous end-to-end testing, vulnerability scanning, and data compliance checks ensure your platform is 100% launch-ready.",
    icon: <ShieldIcon size={24} />,
  },
  {
    step: "05",
    title: "Smooth Deployment & 24/7 Operations",
    description:
      "Seamless staging-to-production deployment, staff onboarding, continuous monitoring, and ongoing optimization.",
    icon: <CheckCircleIcon size={24} />,
  },
];

export default function IndustryProcessSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060e24]/80 relative">
      <div className="container">
        <SectionHeading
          badge="Our Engagement Workflow"
          title="How We Deliver Custom Industry Engineering"
          subtitle="A structured, proven 5-step methodology that guarantees on-time delivery, security compliance, and maximum ROI."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-cyan-500/30 group-hover:text-cyan-500 transition-colors duration-300">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-500 flex items-center justify-center border border-cyan-100 dark:border-cyan-900/30">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors duration-200">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
