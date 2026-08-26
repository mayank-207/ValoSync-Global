import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, CheckCircleIcon, ZapIcon, ShieldIcon } from "@/components/ui/Icons";

export default function WhyPartnerSection() {
  const comparison = [
    {
      feature: "Custom Workflow Architecture",
      velosync: "100% Tailored to your exact business operations",
      others: "Rigid pre-made templates with forced limits",
    },
    {
      feature: "Data Privacy & Compliance",
      velosync: "Built-in Privacy Act, HIPAA & ISO standards",
      others: "Ad-hoc compliance added as an afterthought",
    },
    {
      feature: "Technology Stack",
      velosync: "Modern Next.js 16, React, Node.js, Python AI",
      others: "Outdated monolithic platforms & bloated code",
    },
    {
      feature: "Support & Communication",
      velosync: "Dedicated technical leads with AEST/AWST availability",
      others: "Offshore ticket queues with slow response times",
    },
    {
      feature: "Full Lifecycle Ownership",
      velosync: "Strategy, Custom Software, CRM, AI & Growth Marketing",
      others: "Siloed developers who ignore marketing & CRM integration",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white relative overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          badge="The Velosync Advantage"
          title="Why Leading Businesses Choose Velosync Global"
          subtitle="A comparative look at how our engineering excellence and client dedication set us apart."
          center
        />

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-800 bg-[#0F172A]/90 shadow-2xl mb-12">
          <div className="grid grid-cols-12 bg-slate-900/90 p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
            <div className="col-span-4">Feature / Capability</div>
            <div className="col-span-4 text-cyan-400">Velosync Global</div>
            <div className="col-span-4 text-slate-400">Traditional Agencies</div>
          </div>

          <div className="divide-y divide-slate-800">
            {comparison.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm hover:bg-slate-800/40 transition-colors duration-200"
              >
                <div className="col-span-4 font-bold text-white pr-2">
                  {row.feature}
                </div>
                <div className="col-span-4 text-cyan-300 font-medium flex items-center gap-2 pr-2">
                  <CheckCircleIcon size={16} className="text-cyan-400 flex-shrink-0 hidden sm:inline" />
                  <span>{row.velosync}</span>
                </div>
                <div className="col-span-4 text-slate-400 font-normal">
                  {row.others}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="text-center">
          <Button
            as="link"
            href="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRightIcon size={18} />}
          >
            Start Your Project Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
