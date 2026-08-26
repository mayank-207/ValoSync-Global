"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion, { FAQItem } from "@/components/ui/FAQAccordion";

const defaultFaqs: FAQItem[] = [
  {
    question: "What does the 30-hour risk-free trial actually mean?",
    answer:
      "Our 30-hour risk-free trial allows you to test our engineering squads and workflow on your actual project without upfront financial commitment. If you aren't completely satisfied with the velocity, code quality, and communication during the first 30 hours, you pay nothing.",
  },
  {
    question: "How quickly can I scale my team up or down?",
    answer:
      "We operate on a flexible monthly model. You can add or remove team members with 2 weeks' notice. There are no minimum contract durations; we earn your continued business by delivering great work, not by locking you in.",
  },
  {
    question: "Do you work as a white-label partner for agencies?",
    answer:
      "Yes. We frequently act as dedicated white-label engineering and delivery partners for design studios, consulting firms, and digital agencies worldwide. All code, documentation, and client deliverables remain strictly under your brand and NDAs.",
  },
  {
    question: "Who owns the source code and intellectual property (IP)?",
    answer:
      "You own 100% of the custom source code, databases, design assets, and intellectual property. Full repository ownership and deploy credentials are transferred directly to your organization with zero lock-in.",
  },
  {
    question: "How do you ensure seamless communication across different time zones?",
    answer:
      "We assign dedicated technical project managers and align working sprint hours to provide substantial daily overlap with your team (US, UK, Australia, and APAC). We maintain transparency via Slack, Jira, bi-weekly video sprint reviews, and live staging environments.",
  },
  {
    question: "What tech stacks and architectures do you specialize in?",
    answer:
      "We build modern, scalable web and mobile ecosystems using Next.js, React, Node.js, Python, TypeScript, React Native, Flutter, AWS, Azure, PostgreSQL, MongoDB, and integrated AI / LLM pipeline services.",
  },
];

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  faqs?: FAQItem[];
  className?: string;
  defaultOpenIndex?: number | null;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Have questions? Here are answers to our most commonly asked questions about our process, engagement models, and delivery guarantees.",
  badge = "Got Questions?",
  faqs = defaultFaqs,
  className = "",
  defaultOpenIndex = 1,
}: FAQSectionProps) {
  return (
    <section id="faq" className={`section-padding bg-slate-50/50 dark:bg-[#060e24] ${className}`}>
      <div className="container max-w-4xl">
        <div className="text-left mb-10">
          <SectionHeading
            badge={badge}
            title={title}
            subtitle={subtitle}
            center={false}
          />
        </div>

        <FAQAccordion items={faqs} defaultOpenIndex={defaultOpenIndex} />
      </div>
    </section>
  );
}

