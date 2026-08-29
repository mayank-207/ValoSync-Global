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
    <section className="section-padding bg-white relative">
      <div className="container">
        <SectionHeading
          badge="Our Engagement Workflow"
          title="How We Deliver Custom Industry Engineering"
          subtitle="A structured, proven 5-step methodology that guarantees on-time delivery, security compliance, and maximum ROI."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#F7F9FC] border border-[#D9E1EC] hover:border-[#0B3D91]/40 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-[#0D47A1]/40 group-hover:text-[#0D47A1] transition-colors duration-300">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#0D47A1]/10 text-[#0D47A1] flex items-center justify-center border border-[#0D47A1]/20">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#1A1A1A] mb-2 group-hover:text-[#0D47A1] transition-colors duration-200">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#4A5568] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
