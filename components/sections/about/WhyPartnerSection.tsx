import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, CheckCircleIcon, ZapIcon, ShieldIcon } from "@/components/ui/Icons";

export default function WhyPartnerSection() {
  const comparison = [
    {
      feature: "Service Access",
      valosync: "One clear entry point across six departments",
      others: "Separate providers and disconnected enquiries",
    },
    {
      feature: "Specialist Ownership",
      valosync: "Requirements directed to the relevant department",
      others: "Unclear responsibility across generalist teams",
    },
    {
      feature: "Cross-Department Coordination",
      valosync: "Connected support when requirements overlap",
      others: "Clients coordinate multiple providers themselves",
    },
    {
      feature: "Communication",
      valosync: "Defined contacts, responsibilities and next steps",
      others: "Inconsistent updates across separate suppliers",
    },
    {
      feature: "Professional Standards",
      valosync: "Consistent service principles under one parent brand",
      others: "Different standards across unrelated providers",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white relative overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          badge="The Valosync Advantage"
          title="Why Leading Businesses Choose ValoSync Global"
          subtitle="A coordinated model designed to make specialist business and property services easier to navigate."
          center
          titleClassName="text-white"
        />

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-[#071A3D]/90 shadow-2xl mb-12">
          <div className="grid grid-cols-12 bg-[#041026] p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-white/10">
            <div className="col-span-4 text-white">Feature / Capability</div>
            <div className="col-span-4 text-[#D4AF37]">ValoSync Global</div>
            <div className="col-span-4 text-slate-400">Traditional Agencies</div>
          </div>

          <div className="divide-y divide-white/10">
            {comparison.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm hover:bg-white/5 transition-colors duration-200"
              >
                <div className="col-span-4 font-bold text-white pr-2">
                  {row.feature}
                </div>
                <div className="col-span-4 text-[#D4AF37] font-medium flex items-center gap-2 pr-2">
                  <CheckCircleIcon size={16} className="text-[#D4AF37] flex-shrink-0 hidden sm:inline" />
                  <span>{row.valosync}</span>
                </div>
                <div className="col-span-4 text-slate-300 font-normal">
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
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
}
