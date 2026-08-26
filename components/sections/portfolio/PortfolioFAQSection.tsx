"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDownIcon } from "@/components/ui/Icons";

const faqs = [
  {
    question: "Are your client projects protected under Non-Disclosure Agreements (NDAs)?",
    answer:
      "Yes. We strictly respect client confidentiality. All case studies published on our website are done so with explicit client approval or under anonymized data metrics to protect proprietary commercial advantages.",
  },
  {
    question: "Can we speak with past clients or request references?",
    answer:
      "Absoutely. Upon request during our technical discovery consultation, we can connect you with references and past project stakeholders relevant to your industry vertical.",
  },
  {
    question: "How do you ensure data security and regulatory compliance?",
    answer:
      "Every software architecture we build strictly complies with relevant local regulations, including the Australian Privacy Principles (APPs), AHPRA guidelines for medtech, HIPAA compliance, and OAuth2 security protocols.",
  },
  {
    question: "What technology stack do you use for custom projects?",
    answer:
      "We utilize modern, high-performance tech stacks including Next.js, React 19, TypeScript, Node.js, Python FastAPI, PostgreSQL, AWS Cloud, Docker, and enterprise AI APIs (OpenAI, LangChain).",
  },
  {
    question: "How is source code and IP transferred after project delivery?",
    answer:
      "Once final project milestones are completed and approved, full GitHub/GitLab repository ownership, database credentials, design files, and IP assets are transferred directly to your team.",
  },
];

export default function PortfolioFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative">
      <div className="container">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Our Case Studies"
          subtitle="Clear answers regarding confidentiality, client references, technology handover, and security standards."
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
