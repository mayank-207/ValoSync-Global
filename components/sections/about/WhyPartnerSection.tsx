import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, CheckCircleIcon, ZapIcon, ShieldIcon } from "@/components/ui/Icons";

export default function WhyPartnerSection() {
  const comparison = [
    {
      feature: "Custom Workflow Architecture",
      valosync: "100% Tailored to your exact business operations",
      others: "Rigid pre-made templates with forced limits",
    },
    {
      feature: "Data Privacy & Compliance",
      valosync: "Built-in Privacy Act, HIPAA & ISO standards",
      others: "Ad-hoc compliance added as an afterthought",
    },
    {
      feature: "Technology Stack",
      valosync: "Modern Next.js 16, React, Node.js, Python AI",
      others: "Outdated monolithic platforms & bloated code",
    },
    {
      feature: "Support & Communication",
      valosync: "Dedicated technical leads with AEST/AWST availability",
      others: "Offshore ticket queues with slow response times",
    },
    {
      feature: "Full Lifecycle Ownership",
      valosync: "Strategy, Custom Software, CRM, AI & Growth Marketing",
      others: "Siloed developers who ignore marketing & CRM integration",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white relative overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          badge="The Valosync Advantage"
          title="Why Leading Businesses Choose ValoSync Global"
          subtitle="A comparative look at how our engineering excellence and client dedication set us apart."
          center
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
            Start Your Project Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
