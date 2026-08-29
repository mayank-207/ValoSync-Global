"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CrmIcon,
  MarketingIcon,
  CodeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ZapIcon,
  TrendingUpIcon,
} from "@/components/ui/Icons";

const spotlightCaseStudies = [
  {
    id: "spotlight-crm",
    slug: "ai-enterprise-crm",
    title: "AI-Powered Enterprise CRM Platform",
    category: "CRM Development",
    icon: <CrmIcon size={24} />,
    summary:
      "Engineered for an B2B consulting firm dealing with complex multi-touch sales cycles and high-value contracts.",
    challenge:
      "Legacy CRM caused 20+ hours of lost administrative labor per week per sales manager, while manual follow-up delays caused a 40% lead drop-off rate.",
    solution:
      "Built a custom Next.js & PostgreSQL CRM with AI lead scoring, automated WhatsApp/Email sequence triggers, and real-time deal pipeline dashboards.",
    deliverables: [
      "Custom Automated Sales Pipeline Engine",
      "AI Lead Quality Scoring Algorithm",
      "WhatsApp & Email Omnichannel Sync",
      "Executive Revenue Forecasting Portal",
    ],
    results: [
      { label: "Deal Closure Velocity", value: "+70%" },
      { label: "Lead Response Time", value: "< 2 Mins" },
      { label: "Weekly Admin Hours Saved", value: "20+ Hrs" },
    ],
  },
  {
    id: "spotlight-marketing",
    slug: "lead-portal",
    title: "Lead Generation Engine",
    category: "Digital Marketing & SEO",
    icon: <MarketingIcon size={24} />,
    summary:
      "Designed for a commercial equipment supplier targeting high-intent business decision-makers across Sydney, Melbourne, and Brisbane.",
    challenge:
      "High ad spend on generic keywords returning low-quality inquiries, paired with slow mobile page speed reducing landing page conversions.",
    solution:
      "Developed a sub-second Next.js landing ecosystem paired with targeted Google Search intent campaigns and instant interactive quote engines.",
    deliverables: [
      "Sub-Second Next.js Landing Funnels",
      "High-Intent Google PPC Ad Strategy",
      "Automated Business Quote Calculator",
      "GA4 Conversion & ROAS Attribution",
    ],
    results: [
      { label: "Qualified Lead Volume", value: "3.5x" },
      { label: "Cost Per Lead (CPL)", value: "-42%" },
      { label: "Page Load Speed", value: "0.5s" },
    ],
  },
  {
    id: "spotlight-erp",
    slug: "multi-tenant-erp",
    title: "Multi-Tenant Business ERP & Billing",
    category: "Custom Software Development",
    icon: <CodeIcon size={24} />,
    summary:
      "Architected for a global logistics and IT service provider operating across Australia, Southeast Asia, and Europe.",
    challenge:
      "Disconnected invoicing and manual milestone tracking created accounting bottlenecks, delayed client billing, and compliance headaches.",
    solution:
      "Built a multi-tenant cloud ERP with automated Stripe & Xero integration, automated milestone billing triggers, and multi-currency support.",
    deliverables: [
      "Multi-Tenant Cloud ERP Core",
      "Automated Xero & Stripe Billing Sync",
      "Role-Based Permission System",
      "Encrypted Client Document Portal",
    ],
    results: [
      { label: "Billing Accuracy", value: "99.9%" },
      { label: "Payment Collection Speed", value: "3x Faster" },
      { label: "Client SLA Compliance", value: "100%" },
    ],
  },
];

export default function CaseStudyDetailSection() {
  const [selectedId, setSelectedId] = useState("spotlight-crm");

  const currentStudy =
    spotlightCaseStudies.find((s) => s.id === selectedId) || spotlightCaseStudies[0];

  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="Deep-Dive Case Studies"
          title="Inside Successful Client Digital Transformations"
          subtitle="Explore the exact challenges, architectural solutions, key deliverables, and ROI performance achieved for our clients."
          center
        />

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {spotlightCaseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedId(study.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D47A1]/40 ${
                selectedId === study.id
                  ? "bg-[#071A3D] text-white shadow-xl shadow-[#071A3D]/20 ring-2 ring-[#0D47A1]/50 scale-105"
                  : "bg-[#F7F9FC] text-[#4A5568] border border-[#D9E1EC] hover:bg-white hover:text-[#0D47A1]"
              }`}
            >
              <span
                className={
                  selectedId === study.id ? "text-[#D4AF37]" : "text-[#718096]"
                }
              >
                {study.icon}
              </span>
              <span>{study.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Case Study Detail Card */}
        <div className="bg-[#F7F9FC] rounded-3xl p-6 sm:p-10 border border-[#D9E1EC] shadow-2xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10 pb-8 border-b border-[#D9E1EC]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] text-xs font-bold uppercase tracking-wider mb-3">
                <ZapIcon size={14} className="text-[#D4AF37]" />
                <span>Featured Case Study</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
                {currentStudy.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-base mt-2">
                {currentStudy.summary}
              </p>
            </div>

            <Button
              as="link"
              href={`/portfolio/${currentStudy.slug}`}
              variant="primary"
              size="md"
              rightIcon={<ArrowRightIcon size={16} />}
            >
              Read Full Case Study
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
            {/* Challenge Column */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D9E1EC] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#071A3D]/10 text-[#071A3D] flex items-center justify-center font-bold text-lg">
                  !
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A]">
                    The Client Challenge
                  </h4>
                  <p className="text-xs text-[#718096]">
                    Operational friction & revenue loss
                  </p>
                </div>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                {currentStudy.challenge}
              </p>
            </div>

            {/* Solution Column */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#0D47A1]/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0D47A1]/10 text-[#0D47A1] flex items-center justify-center font-bold">
                  <CheckCircleIcon size={22} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0D47A1] uppercase tracking-wider">
                    ValoSync Global Solution
                  </h4>
                  <p className="text-xs text-[#718096]">
                    Engineered architecture & automation
                  </p>
                </div>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                {currentStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#D9E1EC]">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#718096] mb-4">
                Key Deliverables Built
              </h4>
              <ul className="space-y-2.5">
                {currentStudy.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#1A1A1A]">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#718096] mb-4 text-center md:text-left">
                Verified Business ROI
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {currentStudy.results.map((r, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F7F9FC] p-4 rounded-2xl text-center border border-[#D9E1EC]"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-[#0D47A1] mb-0.5">
                      {r.value}
                    </div>
                    <div className="text-[11px] font-semibold text-[#4A5568]">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
