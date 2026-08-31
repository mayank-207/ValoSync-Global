"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion, { FAQItem } from "@/components/ui/FAQAccordion";

const defaultFaqs: FAQItem[] = [
  {
    question: "What services does ValoSync Global provide?",
    answer:
      "ValoSync Global operates through six departments: Technology, Accounting, Conveyancing, Civil Engineering, Real Estate and Home Loans. Each department has a dedicated service pathway under the wider ValoSync Global organisation.",
  },
  {
    question: "Do you work with businesses across different regions and time zones?",
    answer:
      "Yes. Our services and communication approach are structured for seamless collaboration, including aligned working hours, practical scoping, clear milestones and regular project updates.",
  },
  {
    question: "Can more than one department support my enquiry?",
    answer:
      "Yes. Where requirements cross service areas, we coordinate the initial conversation and connect you with the relevant specialists. Responsibilities and engagement terms are confirmed by each department.",
  },
  {
    question: "Does each department have specialist expertise?",
    answer:
      "Yes. Every department has its own capabilities, process and enquiry pathway while operating under the ValoSync Global brand. Service availability is confirmed for each engagement.",
  },
  {
    question: "How do you manage project communication?",
    answer:
      "We agree on communication channels, milestones, review points and responsibilities during project setup so stakeholders have clear visibility throughout delivery.",
  },
  {
    question: "What happens after the initial enquiry?",
    answer:
      "We review your requirement, direct it to the appropriate department and confirm the next steps, scope and responsible contacts.",
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
  subtitle = "Find answers about our departments, coordinated service model and client engagement approach.",
  badge = "Got Questions?",
  faqs = defaultFaqs,
  className = "",
  defaultOpenIndex = 1,
}: FAQSectionProps) {
  return (
    <section id="faq" className={`section-padding bg-white ${className}`}>
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

