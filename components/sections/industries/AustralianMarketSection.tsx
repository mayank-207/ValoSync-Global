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
  const australianFeatures = [
    {
      title: "Australian Data Security & Compliance",
      description:
        "Engineered to strictly adhere to Privacy Act standards, ACCC guidelines, and local data residency requirements.",
      icon: <ShieldIcon size={24} />,
    },
    {
      title: "Elimination of Manual Business Bottlenecks",
      description:
        "Solving high-cost manual work for Australian SMEs by automating invoicing, client booking, CRM, and order flows.",
      icon: <ZapIcon size={24} />,
    },
    {
      title: "Time-Zone Alignment & Agile Delivery",
      description:
        "Dedicated project managers available during Australian business hours (AEST/AWST) for seamless daily collaboration.",
      icon: <ClockIcon size={24} />,
    },
    {
      title: "High-ROI Commercial Pricing Models",
      description:
        "Flexible milestone-based & monthly retainer models designed to maximize budget efficiency for Australian growth teams.",
      icon: <TrendingUpIcon size={24} />,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide mb-6">
              <GlobeIcon size={16} />
              <span>Australian Market Ready</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6">
              Empower Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                Australian SME
              </span>{" "}
              With Scalable Digital Systems
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Australian businesses face unique operational, staffing, and compliance challenges. Velosync Global builds purpose-driven software and automation solutions that eliminate repetitive work, increase lead generation, and drive sustainable profit growth.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <div className="text-sm font-semibold text-cyan-300 mb-2">
                Ideal Customer Profile (ICP) Commitment
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you are a growing service firm in Sydney, a logistics operator in Melbourne, or a healthcare practice in Brisbane, our technology packages are tailored to your exact business size and operational goals.
              </p>
            </div>

            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRightIcon size={18} />}
            >
              Get Australian Market Proposal
            </Button>
          </div>

          {/* Right Column: Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {australianFeatures.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F172A]/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
