"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

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
    question: "Are your software and CRM solutions compliant with privacy laws?",
    answer:
      "Yes. All digital platforms engineered for clients strictly follow Privacy Principles, AHPRA guidelines for health software, and Australian data residency requirements on local AWS/Azure data centers.",
  },
  {
    question: "Can Valosync Global integrate custom software with our existing tools?",
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
  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative">
      <div className="container max-w-3xl mx-auto">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Our Services"
          subtitle="Transparent details regarding source code IP ownership, pricing models, delivery timelines, and compliance."
          center
        />

        <FAQAccordion items={faqs} defaultOpenIndex={0} />
      </div>
    </section>
  );
}

