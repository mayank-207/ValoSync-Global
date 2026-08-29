import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  GlobeIcon,
  ShieldIcon,
  ZapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  ClockIcon,
} from "@/components/ui/Icons";

export default function AustralianMarketSection() {
  const enterpriseFeatures = [
    {
      title: "Data Security & Multi-Region Compliance",
      description:
        "Engineered to strictly adhere to enterprise privacy standards, statutory regulations, and secure cloud residency requirements.",
      icon: <ShieldIcon size={24} />,
    },
    {
      title: "Elimination of Manual Business Bottlenecks",
      description:
        "Solving high-cost manual work for growing enterprises by automating invoicing, client booking, CRM, and order flows.",
      icon: <ZapIcon size={24} />,
    },
    {
      title: "Time-Zone Alignment & Agile Delivery",
      description:
        "Dedicated project managers and engineering squads available during your core business hours for seamless daily collaboration.",
      icon: <ClockIcon size={24} />,
    },
    {
      title: "High-ROI Commercial Pricing Models",
      description:
        "Flexible milestone-based & monthly retainer models designed to maximize budget efficiency for ambitious growth teams.",
      icon: <TrendingUpIcon size={24} />,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-6">
              <GlobeIcon size={16} />
              <span>Enterprise Delivery Ready</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6">
              Empower Your{" "}
              <span className="text-[#D4AF37]">
                Growing Business
              </span>{" "}
              With Scalable Digital Systems
            </h2>

            <p className="text-slate-200 text-base leading-relaxed mb-8">
              Growing companies face complex operational, workflow, and compliance challenges. ValoSync Global builds purpose-driven software and automation solutions that eliminate repetitive work, increase lead conversion, and drive sustainable profit growth.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <div className="text-sm font-semibold text-[#D4AF37] mb-2">
                Tailored Architecture Commitment
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you are a specialized professional services firm, a logistics operator, or a healthcare network, our technology packages are tailored to your exact business size and operational goals.
              </p>
            </div>

            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRightIcon size={18} />}
            >
              Get Custom Proposal
            </Button>
          </div>

          {/* Right Column: Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {enterpriseFeatures.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#071A3D]/90 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-[#D4AF37]/30">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
