"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

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
  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative">
      <div className="container max-w-3xl mx-auto">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Our Industry Engineering"
          subtitle="Clear answers regarding compliance, legacy integration, timelines, and engagement terms."
          center
        />

        <FAQAccordion items={faqs} defaultOpenIndex={0} />
      </div>
    </section>
  );
}

