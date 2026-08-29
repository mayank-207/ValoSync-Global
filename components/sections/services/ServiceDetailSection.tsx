"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  CodeIcon,
  CrmIcon,
  BrainIcon,
  AutomationIcon,
  LayersIcon,
  MarketingIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ZapIcon,
} from "@/components/ui/Icons";

const serviceDetails = [
  {
    id: "custom-software",
    name: "Custom Software Development",
    icon: <CodeIcon size={22} />,
    tagline: "Tailored SaaS platforms and high-concurrency systems built to match your exact workflows.",
    challenges: [
      "Off-the-shelf software imposing clunky workarounds and ongoing license costs.",
      "Inability to scale infrastructure as transaction volume spikes.",
      "Legacy monolithic systems preventing integration with modern APIs and mobile tools.",
    ],
    solutions: [
      "100% custom web & mobile architecture tailored specifically around your business rules.",
      "Cloud-native microservices infrastructure designed for infinite scalability and security.",
      "API-first integration layer connecting legacy databases with modern cloud apps.",
    ],
    deliverables: [
      "Custom SaaS / Web Application Platform",
      "RESTful / GraphQL API Infrastructure",
      "Automated CI/CD Pipeline & Documentation",
    ],
    outcomes: [
      { label: "Operational Overhead", value: "-45%" },
      { label: "System Uptime Guarantee", value: "99.9%" },
      { label: "IP Ownership", value: "100% Client" },
    ],
  },
  {
    id: "crm-development",
    name: "CRM Development",
    icon: <CrmIcon size={22} />,
    tagline: "Intelligent customer relationship management engines built around your unique sales process.",
    challenges: [
      "Sales reps wasting 15+ hours weekly manually updating spreadsheets and leads.",
      "Leads cooling down due to delayed initial outreach and lack of automated assignment.",
      "No real-time visibility for executives into deal pipelines and revenue forecasts.",
    ],
    solutions: [
      "Custom CRM dashboard with instant lead capture, auto-assignment, and stage triggers.",
      "Automated multi-channel messaging (WhatsApp, Email, SMS) synced directly to contacts.",
      "Real-time pipeline analytics, conversion tracking, and automated sales reporting.",
    ],
    deliverables: [
      "Custom Lead & Deal Tracking Dashboard",
      "Omnichannel Messaging & Email Automation",
      "Role-Based Access Control (RBAC) System",
    ],
    outcomes: [
      { label: "Lead Response Time", value: "< 2 Mins" },
      { label: "Sales Conversion Rate", value: "+35%" },
      { label: "Admin Hours Saved", value: "15+ Hrs/Wk" },
    ],
  },
  {
    id: "ai-automation",
    name: "AI Automation Solutions",
    icon: <BrainIcon size={22} />,
    tagline: "Unlocking enterprise efficiency through custom LLMs, RAG bots, and machine learning pipelines.",
    challenges: [
      "Human team burdened with tedious document processing and data verification.",
      "Customer support queues delayed during off-peak hours and weekends.",
      "Inability to leverage internal corporate knowledge files for instant decision making.",
    ],
    solutions: [
      "Custom RAG (Retrieval-Augmented Generation) knowledge bot trained strictly on company docs.",
      "Intelligent OCR & Document Extraction engine parsing invoices, medical forms, and contracts.",
      "24/7 AI conversational agent performing instant customer booking and inquiry handling.",
    ],
    deliverables: [
      "Private Enterprise AI Assistant",
      "Automated Document Processing Pipeline",
      "AI Safety & Hallucination Guardrails",
    ],
    outcomes: [
      { label: "Support Queue Wait", value: "0 Seconds" },
      { label: "Data Extraction Accuracy", value: "99.2%" },
      { label: "Cost Per Transaction", value: "-70%" },
    ],
  },
  {
    id: "business-automation",
    name: "Business Process Automation",
    icon: <AutomationIcon size={22} />,
    tagline: "Eliminating manual bottlenecks by interconnecting operational tools into seamless workflows.",
    challenges: [
      "Double data entry across separate inventory, accounting, and logistics platforms.",
      "Critical approval requests getting stuck in employee email inboxes.",
      "Human error causing costly invoicing mistakes and compliance oversights.",
    ],
    solutions: [
      "Custom integration bus connecting ERP, accounting (Xero/MYOB), and client portals.",
      "Automated approval workflows with instant Slack/Teams/SMS escalation triggers.",
      "Real-time audit logging and error alert monitoring guaranteeing process reliability.",
    ],
    deliverables: [
      "Multi-System API Integration Hub",
      "Automated Document & Invoice Generator",
      "Real-Time Process Monitoring Console",
    ],
    outcomes: [
      { label: "Process Execution Speed", value: "10x Faster" },
      { label: "Human Error Rate", value: "Near 0%" },
      { label: "Team Productivity", value: "+50%" },
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: <LayersIcon size={22} />,
    tagline: "High-performance web applications and headless platforms engineered for maximum engagement.",
    challenges: [
      "Slow, sluggish legacy WordPress/Wix websites turning away mobile visitors.",
      "Difficulties managing content and updating products without technical developers.",
      "Poor search engine rankings due to bad Core Web Vitals and outdated code.",
    ],
    solutions: [
      "Modern Next.js & React architecture delivering sub-second page loads globally.",
      "User-friendly Headless CMS setup allowing non-technical teams to publish content instantly.",
      "Mobile-first responsive design optimized for conversions, speed, and accessibility.",
    ],
    deliverables: [
      "Custom Next.js Web Application",
      "Headless CMS Integration (Contentful/Sanity)",
      "SEO & Speed Optimization Package",
    ],
    outcomes: [
      { label: "Page Load Speed", value: "< 0.6s" },
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Organic Bounce Rate", value: "-40%" },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing & SEO",
    icon: <MarketingIcon size={22} />,
    tagline: "ROI-driven search engine optimization, PPC advertising, and conversion rate optimization.",
    challenges: [
      "Wasting marketing budget on low-intent ad campaigns that produce unqualified leads.",
      "Invisibility on Google search results for lucrative local & national buyer keywords.",
      "Lack of clear analytics connecting digital marketing spend directly to closed revenue.",
    ],
    solutions: [
      "Data-backed Technical & Content SEO strategies targeting top commercial intent terms.",
      "Precision PPC ad funnels on Google Ads & Meta Ads with strict CPA targets.",
      "End-to-end attribution analytics connecting website visits to CRM deals.",
    ],
    deliverables: [
      "Technical & Local SEO Domination Plan",
      "Targeted Google & Social Ad Funnels",
      "Monthly ROI & Revenue Analytics Portal",
    ],
    outcomes: [
      { label: "Organic Search Traffic", value: "3.5x Increase" },
      { label: "Cost Per Acquisition", value: "-35%" },
      { label: "Qualified Lead Volume", value: "+220%" },
    ],
  },
];

export default function ServiceDetailSection() {
  const [activeServiceId, setActiveServiceId] = useState("custom-software");

  const currentService =
    serviceDetails.find((s) => s.id === activeServiceId) || serviceDetails[0];

  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="In-Depth Service Breakdown"
          title="How We Solve Your Operational & Growth Challenges"
          subtitle="Explore the exact challenges, custom solution architecture, key deliverables, and ROI metrics for each service."
          center
        />

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {serviceDetails.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveServiceId(service.id)}
              className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D47A1] ${
                activeServiceId === service.id
                  ? "bg-[#071A3D] text-white shadow-xl scale-105"
                  : "bg-[#F7F9FC] text-[#4A5568] border border-[#D9E1EC] hover:bg-[#EEF3FA]"
              }`}
            >
              <span
                className={
                  activeServiceId === service.id ? "text-[#D4AF37]" : "text-[#0D47A1]"
                }
              >
                {service.icon}
              </span>
              <span>{service.name}</span>
            </button>
          ))}
        </div>

        {/* Active Service Card */}
        <div className="bg-[#F7F9FC] rounded-3xl p-6 sm:p-10 border border-[#D9E1EC] shadow-2xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10 pb-8 border-b border-[#D9E1EC]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] text-xs font-semibold uppercase tracking-wider mb-3">
                <ZapIcon size={14} />
                <span>Service Spotlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
                {currentService.name}
              </h3>
              <p className="text-[#4A5568] font-medium text-base mt-2">
                {currentService.tagline}
              </p>
            </div>

            <Button
              as="link"
              href={`/services/${currentService.id}`}
              variant="primary"
              size="md"
              rightIcon={<ArrowRightIcon size={16} />}
            >
              View Dedicated {currentService.name} Page
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
            {/* Common Pain Points Column */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D9E1EC] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#071A3D]/10 text-[#071A3D] flex items-center justify-center font-bold text-lg">
                  !
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A]">
                    The Bottlenecks You Face
                  </h4>
                  <p className="text-xs text-[#718096]">
                    Common obstacles destroying growth & speed
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {currentService.challenges.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#4A5568]">
                    <span className="w-5 h-5 rounded-full bg-[#071A3D]/10 text-[#071A3D] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Valosync Solution Column */}
            <div className="bg-[#071A3D] p-8 rounded-3xl border border-[#0D47A1]/40 shadow-xl text-white">
              <span className="px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider mb-6 inline-block">
                The Solution
              </span>
              <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <CheckCircleIcon size={24} className="text-[#D4AF37]" />
                ValoSync Global Engineered Solution
              </h4>

              <ul className="space-y-4">
                {currentService.solutions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#4A5568]">
                    <CheckCircleIcon size={18} className="text-[#0D47A1] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Deliverables & ROI Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#D9E1EC]">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#718096] mb-4">
                Key Project Deliverables
              </h4>
              <ul className="space-y-2.5">
                {currentService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#1A1A1A]">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#718096] mb-4 text-center md:text-left">
                Target Business Impact & ROI
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {currentService.outcomes.map((o, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-2xl text-center border border-[#D9E1EC]"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-[#0D47A1] mb-0.5">
                      {o.value}
                    </div>
                    <div className="text-[11px] font-semibold text-[#4A5568]">
                      {o.label}
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
