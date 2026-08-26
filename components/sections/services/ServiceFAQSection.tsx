"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDownIcon } from "@/components/ui/Icons";

const faqs = [
  {
    question: "Who owns the source code and intellectual property (IP)?",
    answer:
      "You own 100% of the custom source code, databases, design assets, and intellectual property. Once final payment milestones are completed, full repository rights are transferred directly to your organization.",
  },
  {
    question: "What pricing models do you offer for custom services?",
    answer:
      "We offer flexible engagement models: Fixed-Price Milestone Projects (best for clearly defined custom software or CRM builds) and Dedicated Engineering Squads (monthly sprint-based model ideal for evolving platforms and AI automation).",
  },
  {
    question: "Are your software and CRM solutions compliant with Australian privacy laws?",
    answer:
      "Yes. All digital platforms engineered for Australian clients strictly follow Australian Privacy Principles (APPs), AHPRA guidelines for health software, and Australian data residency requirements on local AWS/Azure data centers.",
  },
  {
    question: "Can Velosync Global integrate custom software with our existing tools?",
    answer:
      "Yes. We specialize in API middleware engineering. We seamlessly connect custom software and CRMs with Xero, MYOB, Salesforce, SAP, Stripe, Google Workspace, and legacy SQL databases without disrupting your daily operations.",
  },
  {
    question: "What is your typical project delivery timeline?",
    answer:
      "MVP builds and customized CRM modules typically deploy in 4 to 8 weeks. Enterprise-grade platforms or full AI workflow automation suites range between 8 to 16 weeks, broken down into bi-weekly client demo sprints.",
  },
  {
    question: "What post-launch support and SLA guarantees do you provide?",
    answer:
      "We provide 30 to 90 days of complimentary post-launch warranty support, followed by optional SLA maintenance packages covering 24/7 technical monitoring, security patches, cloud backups, and feature enhancements.",
  },
];

export default function ServiceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative">
      <div className="container">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Our Services"
          subtitle="Transparent details regarding source code IP ownership, pricing models, delivery timelines, and Australian compliance."
          center
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0F172A]/60 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-cyan-500 text-white dark:bg-cyan-500" : ""
                    }`}
                  >
                    <ChevronDownIcon size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
