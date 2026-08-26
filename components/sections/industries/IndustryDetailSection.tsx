"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  HealthcareIcon,
  LogisticsIcon,
  FinanceIcon,
  RetailIcon,
  RealEstateIcon,
  ManufacturingIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  ShieldIcon,
  ZapIcon,
} from "@/components/ui/Icons";

const detailedSectors = [
  {
    id: "healthcare-detail",
    name: "Healthcare & Life Sciences",
    icon: <HealthcareIcon size={24} />,
    tagline: "Digitizing patient experiences with zero-friction compliance.",
    challenges: [
      "Manual appointment scheduling leading to missed appointments and operational clutter.",
      "Fragmented patient record management across legacy software systems.",
      "High administrative overhead for prescription refills and insurance verifications.",
    ],
    solutions: [
      "Custom Automated Patient Portal with instant SMS/Email reminder triggers.",
      "Unified EHR/EMR Integration Hub ensuring instant, secure record accessibility.",
      "AI-driven medical document parser for instant insurance and prescription processing.",
    ],
    outcomes: [
      { label: "Patient No-Show Rate", value: "-60%" },
      { label: "Intake Processing Time", value: "< 2 Mins" },
      { label: "HIPAA/AHPRA Compliance", value: "100%" },
    ],
  },
  {
    id: "logistics-detail",
    name: "Logistics & Supply Chain",
    icon: <LogisticsIcon size={24} />,
    tagline: "End-to-end fleet tracking and automated dispatch management.",
    challenges: [
      "Inability to track fleet status and driver location in real time.",
      "Inaccurate inventory reporting leading to stockouts and shipping delays.",
      "Manual dispatch communication consuming 20+ hours of team labor weekly.",
    ],
    solutions: [
      "Centralized Fleet Telematics Dashboard with live GPS route optimization.",
      "Automated Warehouse CRM syncing real-time stock levels with client portals.",
      "AI Dispatch Engine matching driver routes automatically based on load and distance.",
    ],
    outcomes: [
      { label: "On-Time Deliveries", value: "98.4%" },
      { label: "Weekly Admin Hours Saved", value: "25+ Hrs" },
      { label: "Fuel Cost Savings", value: "18%" },
    ],
  },
  {
    id: "finance-detail",
    name: "Financial Services & Fintech",
    icon: <FinanceIcon size={24} />,
    tagline: "High-security financial portals and automated approval engines.",
    challenges: [
      "Slow, paper-heavy customer onboarding and verification workflows.",
      "Security vulnerabilities and compliance audit headaches.",
      "Poor customer visibility into application status.",
    ],
    solutions: [
      "Digital KYC & Identity Verification pipeline with automated fraud detection.",
      "End-to-End Encrypted Customer Portal with real-time audit logging.",
      "Automated Loan & Credit Evaluation Engine for instantaneous decisions.",
    ],
    outcomes: [
      { label: "Onboarding Turnaround", value: "Instant" },
      { label: "Audit Compliance Rate", value: "100%" },
      { label: "Customer Drop-off Rate", value: "-45%" },
    ],
  },
  {
    id: "retail-detail",
    name: "Retail & E-Commerce",
    icon: <RetailIcon size={24} />,
    tagline: "High-converting headless commerce & AI customer retention.",
    challenges: [
      "Slow page load times on legacy platforms destroying mobile conversions.",
      "Disconnected inventory across physical stores and web channels.",
      "Generic marketing outreach failing to retain repeat customers.",
    ],
    solutions: [
      "Ultra-Fast Next.js Headless Storefront with lightning sub-second load speed.",
      "Automated Inventory Sync Engine across Shopify, Amazon, and ERP systems.",
      "AI Recommendation & Automated Email Retention Sequences.",
    ],
    outcomes: [
      { label: "Page Load Speed", value: "< 0.8s" },
      { label: "Repeat Purchase Rate", value: "+38%" },
      { label: "Cart Abandonment", value: "-32%" },
    ],
  },
  {
    id: "realestate-detail",
    name: "Real Estate & Property",
    icon: <RealEstateIcon size={24} />,
    tagline: "Automating property management and high-intent lead conversion.",
    challenges: [
      "Inquiries getting lost due to slow manual lead follow-up.",
      "Cluttered property inspection schedules and manual tenant agreements.",
      "Lack of centralized tracking for property maintenance requests.",
    ],
    solutions: [
      "Custom Real Estate CRM with instant WhatsApp & Email lead responder.",
      "Self-service Tenant & Owner Portal for maintenance tracking and payments.",
      "Automated Agreement Generator with e-Signature integration.",
    ],
    outcomes: [
      { label: "Lead Response Time", value: "< 3 Mins" },
      { label: "Agreement Signature Time", value: "-70%" },
      { label: "Client Satisfaction", value: "98%" },
    ],
  },
  {
    id: "manufacturing-detail",
    name: "Manufacturing & Industry 4.0",
    icon: <ManufacturingIcon size={24} />,
    tagline: "Shop-floor visibility and automated production scheduling.",
    challenges: [
      "Paper-based machine logbooks causing maintenance delays.",
      "Unplanned machine downtime disrupting order fulfillment.",
      "Lack of real-time production status visibility for management.",
    ],
    solutions: [
      "Custom Industrial Operations Dashboard with IoT sensor integration.",
      "Predictive Maintenance Alert System tracking machine health metrics.",
      "Automated Production Scheduling software syncing materials with orders.",
    ],
    outcomes: [
      { label: "Unplanned Downtime", value: "-40%" },
      { label: "Production Output", value: "+22%" },
      { label: "OEE Tracking", value: "Real-Time" },
    ],
  },
];

export default function IndustryDetailSection() {
  const [selectedSectorId, setSelectedSectorId] = useState("healthcare-detail");

  const currentSector =
    detailedSectors.find((s) => s.id === selectedSectorId) || detailedSectors[0];

  return (
    <section className="section-padding bg-white dark:bg-[#060e24] relative overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="Deep-Dive Industry Breakdown"
          title="From Operational Bottlenecks to Digital Excellence"
          subtitle="Explore how our targeted software engineering directly solves the costliest pain points in your industry."
          center
        />

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {detailedSectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setSelectedSectorId(sector.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                selectedSectorId === sector.id
                  ? "bg-slate-900 dark:bg-slate-800 text-white shadow-xl shadow-slate-900/10 ring-2 ring-cyan-500/50"
                  : "bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              <span
                className={
                  selectedSectorId === sector.id ? "text-cyan-400" : "text-slate-400"
                }
              >
                {sector.icon}
              </span>
              <span>{sector.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Sector Deep-Dive Card */}
        <div className="bg-slate-50 dark:bg-[#0F172A] rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-2xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <ZapIcon size={14} />
                <span>Sector Spotlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {currentSector.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-base mt-2">
                {currentSector.tagline}
              </p>
            </div>

            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="md"
              rightIcon={<ArrowRightIcon size={16} />}
            >
              Discuss {currentSector.name} Solution
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
            {/* Challenges Column */}
            <div className="bg-white dark:bg-[#060e24] p-6 sm:p-8 rounded-2xl border border-red-500/20 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-lg">
                  !
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Common Industry Pain Points
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Obstacles slowing down growth & efficiency
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {currentSector.challenges.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="bg-white dark:bg-[#060e24] p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                  <CheckCircleIcon size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Velosync Global Engineered Solution
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Tailored software, CRM & AI automation
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {currentSector.solutions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircleIcon size={18} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Impact Metrics */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 text-center">
              Proven Business ROI & Performance Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentSector.outcomes.map((o, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#060e24] p-5 rounded-2xl text-center border border-slate-200 dark:border-slate-800/80"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-500 mb-1">
                    {o.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {o.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
