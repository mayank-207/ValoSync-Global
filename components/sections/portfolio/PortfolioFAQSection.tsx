"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

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
      "Every software architecture we build strictly complies with relevant local regulations, including the Privacy Principles (APPs), AHPRA guidelines for medtech, HIPAA compliance, and OAuth2 security protocols.",
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
  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative">
      <div className="container max-w-3xl mx-auto">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Our Case Studies"
          subtitle="Clear answers regarding confidentiality, client references, technology handover, and security standards."
          center
        />

        <FAQAccordion items={faqs} defaultOpenIndex={0} />
      </div>
    </section>
  );
}

