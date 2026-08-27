"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion, { FAQItem } from "@/components/ui/FAQAccordion";

const defaultFaqs: FAQItem[] = [
  {
    question: "What types of projects does VeloSync Global deliver?",
    answer:
      "We work across custom software, CRM platforms, web and WordPress development, business automation, cloud and DevOps support, SEO, digital marketing and social media management.",
  },
  {
    question: "Do you work with Australian businesses?",
    answer:
      "Yes. Our services and communication approach are designed with Australian businesses in mind, including practical scoping, clear milestones and regular project updates.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "Our capabilities include Laravel, PHP, WordPress, .NET, React, Next.js, Node.js, MEAN and MERN technologies, along with cloud, automation and digital marketing platforms.",
  },
  {
    question: "Can you modernise or extend an existing system?",
    answer:
      "Yes. We can assess an existing application, identify priority improvements and plan integrations, feature development, performance work or phased modernisation.",
  },
  {
    question: "How do you manage project communication?",
    answer:
      "We agree on communication channels, milestones, review points and responsibilities during project setup so stakeholders have clear visibility throughout delivery.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Handover, maintenance and ongoing improvement options are defined according to the solution and your operational requirements.",
  },
]

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
  subtitle = "Find answers about our services, technology capabilities, delivery approach and post-launch support.",
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

