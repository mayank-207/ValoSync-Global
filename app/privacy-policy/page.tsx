import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import {
  SparkleIcon,
  ShieldIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LayersIcon,
  GlobeIcon,
  LockIcon,
  MailIcon,
  ZapIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Privacy Policy | ValoSync Global",
  description:
    "ValoSync Global Privacy Policy outlining compliance with Privacy Principles, data protection, confidentiality, and enterprise security standards.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    id: "collection",
    number: "01",
    title: "Information We Collect & Sources",
    icon: <SparkleIcon size={22} />,
    summary:
      "We collect business contact information, technical discovery requirements, and project specifications.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          ValoSync Global collects corporate and personal information directly provided by business clients, authorized representatives, and website visitors when submitting consultation forms, scheduling discovery sessions, or engaging our engineering teams.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="p-5 rounded-2xl bg-[#0B3D91]/5 border border-[#0B3D91]/20">
            <h4 className="font-bold text-[#0B3D91] text-sm mb-2">Corporate & Contact Details</h4>
            <ul className="text-xs text-[#4A5568] space-y-1.5 leading-relaxed">
              <li>• Full name & executive title</li>
              <li>• Corporate email & direct phone number</li>
              <li>• Company name, domain & headquarters location</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EC]">
            <h4 className="font-bold text-[#1A1A1A] text-sm mb-2">Project & Technical Specs</h4>
            <ul className="text-xs text-[#4A5568] space-y-1.5 leading-relaxed">
              <li>• Architecture scope & business workflow diagrams</li>
              <li>• Third-party software integration targets (Xero, Salesforce)</li>
              <li>• Performance, compliance & user capacity benchmarks</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "usage",
    number: "02",
    title: "How We Use & Process Your Data",
    icon: <LayersIcon size={22} />,
    summary:
      "Data is used strictly to engineer solutions, manage milestone deliveries, and communicate technical updates.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          We use collected information exclusively to provide high-caliber technology services and fulfill contractual agreements:
        </p>
        <ul className="space-y-3 mb-5">
          <li className="flex items-start gap-3 text-sm text-[#4A5568]">
            <CheckCircleIcon size={18} className="text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Proposal & Scope Formulation:</strong> Evaluating system requirements to generate accurate technical proposals and milestone estimates.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#4A5568]">
            <CheckCircleIcon size={18} className="text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Service Delivery & Sprint Coordination:</strong> Delivering custom software, building CRM pipelines, setting up AI automation, and providing staging access.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#4A5568]">
            <CheckCircleIcon size={18} className="text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <span>
              <strong>No Data Selling or Commercial Brokering:</strong> ValoSync Global never sells, rents, monetizes, or shares client data with third-party advertising brokers.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "compliance-residency",
    number: "03",
    title: "Data Residency & Compliance Framework",
    icon: <GlobeIcon size={22} />,
    summary:
      "Compliant with Privacy Principles and ISO 27001-certified local data center standards.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          We engineer applications with strict compliance boundaries matched to client operational jurisdictions:
        </p>
        <div className="p-5 rounded-2xl bg-[#0B3D91] text-white mb-4 shadow-md">
          <h4 className="text-base font-bold text-[#D4AF37] mb-1.5">
            Local Cloud Residency & Isolation
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Client production databases, file storage, and server clusters can be provisioned in dedicated, ISO 27001-certified regional zones on AWS, Microsoft Azure, or Google Cloud.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "nda-confidentiality",
    number: "04",
    title: "Non-Disclosure Protection & IP Safeguards",
    icon: <LockIcon size={22} />,
    summary:
      "All proprietary client workflows, source code, and data feeds are shielded under legally binding NDAs.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          Confidentiality is fundamental to our engineering partnerships:
        </p>
        <ul className="space-y-2.5 text-sm text-[#4A5568]">
          <li className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#0B3D91]" />
            <span>Executed Non-Disclosure Agreement (NDA) before sharing technical schemas</span>
          </li>
          <li className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#0B3D91]" />
            <span>Role-based access restrictions ensuring only assigned engineers access repositories</span>
          </li>
          <li className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#0B3D91]" />
            <span>100% intellectual property and database ownership transferred upon final payment</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security-measures",
    number: "05",
    title: "Enterprise Security & Encryption Standards",
    icon: <ShieldIcon size={22} />,
    summary:
      "AES-256 encryption at rest, TLS 1.3 in transit, automated vulnerability testing, and secure OAuth2 protocols.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          ValoSync Global enforces rigorous DevSecOps practices across all client platforms:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="p-5 rounded-2xl bg-white border border-[#D9E1EC] shadow-xs">
            <h4 className="font-bold text-[#1A1A1A] text-sm mb-1.5">Encryption In Transit & At Rest</h4>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              All network communications are secured using TLS 1.3 encryption, and sensitive database columns use AES-256 bit encryption keys.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#D9E1EC] shadow-xs">
            <h4 className="font-bold text-[#1A1A1A] text-sm mb-1.5">Continuous Vulnerability Audits</h4>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              Automated static analysis (SAST) and dynamic code scanning integrated into GitHub Actions CI/CD pipelines.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "privacy-contact",
    number: "06",
    title: "Data Access Requests & Privacy Officer",
    icon: <MailIcon size={22} />,
    summary:
      "Request data reviews, updates, or complete record erasure through our dedicated privacy desk.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          You have the right to request access to the personal data we hold about your organization, request corrections, or request complete record deletion from our systems.
        </p>
        <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EC]">
          <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
            To make an inquiry or submit a data subject access request, please contact our Data Protection & Privacy Desk at{" "}
            <a href="mailto:privacy@valosyncglobal.com" className="text-[#0B3D91] font-bold hover:underline">
              privacy@valosyncglobal.com
            </a>. Inquiries are formally acknowledged and processed within 48 business hours.
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Sleek Hero Header */}
        <section className="relative pt-20 pb-10 md:pt-20 md:pb-14 bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Privacy Policy
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
                Transparent protocols detailing data security, strict NDA confidentiality, cloud residency options, and regulatory privacy compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="section-padding bg-[#F7F9FC]">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Sticky Table of Contents & Quick Help */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
                {/* Navigation Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D9E1EC] shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B3D91] mb-4 flex items-center gap-2">
                    <LayersIcon size={18} />
                    <span>Table of Contents</span>
                  </h3>
                  <nav className="space-y-1.5">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#4A5568] hover:text-[#0B3D91] hover:bg-[#F7F9FC] transition-all"
                      >
                        <span className="truncate">{sec.title}</span>
                        {/* <span className="text-[11px] font-mono text-[#718096] group-hover:text-[#0B3D91]">
                          {sec.number}
                        </span> */}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Privacy Officer Contact Box */}
                <div className="p-6 sm:p-7 rounded-3xl bg-[#071A33] text-white border border-white/10 shadow-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] inline-block">
                      <LockIcon size={22} />
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      Privacy Inquiries?
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    Reach out to our Data Protection Desk for security audits, data processing agreements (DPAs), or custom NDAs.
                  </p>
                  <Button
                    as="link"
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                    rightIcon={<ArrowRightIcon size={14} />}
                  >
                    Contact Privacy Desk
                  </Button>
                </div>
              </div>

              {/* Right Column: Detailed Clause Breakdown Cards */}
              <div className="lg:col-span-8 space-y-8">
                {sections.map((sec) => (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D9E1EC] shadow-sm transition-all duration-300 hover:shadow-md scroll-mt-36"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-[#D9E1EC]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0B3D91]/10 text-[#0B3D91] flex items-center justify-center font-bold text-lg border border-[#0B3D91]/20 flex-shrink-0">
                          {sec.number}
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A]">
                            {sec.title}
                          </h2>
                          <p className="text-xs text-[#718096] mt-1 font-medium">
                            {sec.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="prose max-w-none text-[#4A5568]">
                      {sec.content}
                    </div>
                  </article>
                ))}

                {/* Bottom Assistance Banner */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Need custom DPA or NDA terms?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 max-w-lg">
                      Our solutions architects and legal desk are available to review specific compliance requirements for your enterprise.
                    </p>
                  </div>
                  <Button
                    as="link"
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="flex-shrink-0"
                    rightIcon={<ArrowRightIcon size={16} />}
                  >
                    Discuss Enterprise NDA
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
