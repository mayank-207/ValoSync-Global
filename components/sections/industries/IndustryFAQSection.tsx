"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDownIcon } from "@/components/ui/Icons";

const faqs = [
  {
    question: "Do you customize software for specific Australian industry compliance?",
    answer:
      "Yes. All our solutions for Australian clients are built in compliance with local regulations, including the Australian Privacy Principles (APPs), AHPRA guidelines for healthcare, financial audit requirements, and local data residency standards.",
  },
  {
    question: "Can Velosync Global integrate custom software with our existing legacy ERP/CRM?",
    answer:
      "Absoutely. We specialize in API engineering and middleware integration. Whether you use SAP, Salesforce, Xero, MYOB, custom legacy databases, or proprietary hardware, we connect your existing systems without disrupting day-to-day operations.",
  },
  {
    question: "How long does it take to deliver a custom industry solution?",
    answer:
      "Project timelines vary based on scope. MVP solutions or custom CRM modules typically launch within 4 to 8 weeks, while enterprise multi-channel platforms take 12 to 16 weeks. We operate with bi-weekly sprints so you see tangible progress continuously.",
  },
  {
    question: "What is your ongoing support and maintenance model after launch?",
    answer:
      "We provide 24/7 technical monitoring, security patch management, performance optimization, and SLA-backed support packages tailored to your operational criticality.",
  },
  {
    question: "How do we get started with a consultation for our industry?",
    answer:
      "Simply click 'Book Industry Consultation' or fill out our enquiry form. Our technical architects will schedule a discovery call within 24 hours to review your requirements, workflows, and provide a detailed roadmap and estimate.",
  },
];

export default function IndustryFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative">
      <div className="container">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Our Industry Engineering"
          subtitle="Clear answers regarding compliance, legacy integration, timelines, and engagement terms."
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
