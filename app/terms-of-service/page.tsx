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
  title: "Terms & Conditions | ValoSync Global",
  description:
    "ValoSync Global Terms and Conditions governing software engineering services, IP ownership, milestone payments, confidentiality, and client service level agreements (SLAs).",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms & Engagement Basis",
    icon: <SparkleIcon size={22} />,
    summary:
      "By accessing our website, booking discovery consultations, or executing a Statement of Work (SOW), you agree to these Terms.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          By accessing the ValoSync Global website, engaging our technical discovery sessions, or executing a formal Statement of Work (SOW) or Master Services Agreement (MSA), you acknowledge and agree to be bound by these Terms and Conditions.
        </p>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          These Terms govern all bespoke software engineering, CRM platform architecture, AI automation development, web applications, cloud infrastructure, and digital consulting services provided by <strong>ValoSync Global</strong> to corporate clients and international enterprises.
        </p>
        <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EC] flex items-start gap-3.5 mt-4">
          <CheckCircleIcon size={20} className="text-[#0B3D91] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-medium">
            <strong>Key Requirement:</strong> If an executed Statement of Work (SOW) or MSA contains specific negotiated terms that conflict with these general terms, the provisions of the signed SOW shall take legal precedence.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "services-milestones",
    number: "02",
    title: "Scope of Services, SOW & Agile Delivery",
    icon: <LayersIcon size={22} />,
    summary:
      "All engineering work is structured into documented milestones, agile sprints, and clear acceptance criteria.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          All client engagements are formally documented in an approved Statement of Work (SOW) that outlines the detailed technical specifications, architecture diagrams, delivery milestones, sprint cadences, and commercial schedule.
        </p>
        <ul className="space-y-3 mb-5">
          <li className="flex items-start gap-3 text-sm text-[#4A5568]">
            <div className="w-2 h-2 rounded-full bg-[#0B3D91] mt-2 flex-shrink-0" />
            <span>
              <strong>Iterative Sprints:</strong> Development progresses through structured 2-week agile sprints with working staging environment previews provided to the client for continuous feedback.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#4A5568]">
            <div className="w-2 h-2 rounded-full bg-[#0B3D91] mt-2 flex-shrink-0" />
            <span>
              <strong>Scope Change Control:</strong> Any requests for additional functionality or major design alterations outside the agreed SOW will be managed via formal written Change Request Orders (CRO) specifying budget and timeline adjustments.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#4A5568]">
            <div className="w-2 h-2 rounded-full bg-[#0B3D91] mt-2 flex-shrink-0" />
            <span>
              <strong>Client Responsibilities:</strong> Prompt feedback, asset provision, and test environment access are required to maintain agreed sprint timelines.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "03",
    title: "Intellectual Property (IP) & Source Code Ownership",
    icon: <LockIcon size={22} />,
    summary:
      "100% of custom source code, database architectures, and design files are transferred to you upon milestone completion.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          ValoSync Global operates on a client-first IP model. We believe clients must retain complete control over their proprietary technology assets.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          <div className="p-5 rounded-2xl bg-[#0B3D91]/5 border border-[#0B3D91]/20">
            <h4 className="font-bold text-[#0B3D91] text-sm mb-2 flex items-center gap-2">
              <CheckCircleIcon size={16} className="text-[#D4AF37]" />
              Transferred to Client
            </h4>
            <ul className="text-xs text-[#4A5568] space-y-1.5 leading-relaxed">
              <li>• 100% custom software source code repositories</li>
              <li>• Proprietary algorithms & business workflows</li>
              <li>• Database schemas & cloud configurations</li>
              <li>• UI/UX design components & brand assets</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EC]">
            <h4 className="font-bold text-[#1A1A1A] text-sm mb-2 flex items-center gap-2">
              <ShieldIcon size={16} className="text-[#718096]" />
              Retained Frameworks
            </h4>
            <ul className="text-xs text-[#4A5568] space-y-1.5 leading-relaxed">
              <li>• Standard open-source libraries (MIT/Apache)</li>
              <li>• Pre-existing third-party APIs (Stripe, OpenAI)</li>
              <li>• ValoSync Global generic internal boilerplate utilities</li>
            </ul>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-[#718096] italic">
          Full repository handover and access transfers occur automatically once milestone payment obligations for that deliverable are fulfilled.
        </p>
      </>
    ),
  },
  {
    id: "payment-terms",
    number: "04",
    title: "Commercial Terms, Invoicing & Payment Schedules",
    icon: <ZapIcon size={22} />,
    summary:
      "Transparent billing models based on approved milestone completions or monthly dedicated engineering squad retainers.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          ValoSync Global provides two transparent billing arrangements tailored to client project requirements:
        </p>
        <div className="space-y-4 mb-5">
          <div className="p-5 rounded-2xl bg-white border border-[#D9E1EC] shadow-xs">
            <h4 className="font-bold text-[#1A1A1A] text-sm mb-1.5">
              1. Fixed-Price Milestone Projects
            </h4>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              Invoiced in predetermined phases: Initial project commencement deposit, mid-project staging verification milestone, and final production deployment sign-off.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#D9E1EC] shadow-xs">
            <h4 className="font-bold text-[#1A1A1A] text-sm mb-1.5">
              2. Dedicated Engineering Squads (Monthly Retainer)
            </h4>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              Billed monthly in advance for allocated full-stack developers, UI engineers, QA specialists, and technical project managers dedicated to evolving client platforms.
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
          Standard payment terms are 14 calendar days from invoice issuance. Late payments may result in temporary pauses to active development sprints or cloud deployment pipelines.
        </p>
      </>
    ),
  },
  {
    id: "warranty-sla",
    number: "05",
    title: "Post-Launch Warranty & Service Level Agreements (SLAs)",
    icon: <ShieldIcon size={22} />,
    summary:
      "Complimentary warranty period followed by optional 24/7 SLA maintenance and cloud uptime guarantees.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          To ensure platform stability and peace of mind, all production deployments include complimentary post-launch warranty support:
        </p>
        <div className="p-6 rounded-2xl bg-[#0B3D91] text-white mb-5 shadow-md">
          <h4 className="text-lg font-extrabold text-[#D4AF37] mb-2">
            30 to 90 Days Complimentary Bug Warranty
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            During the warranty window, any functional defects, code discrepancies, or errors not matching the agreed specifications are remediated with highest priority at no additional cost.
          </p>
        </div>
        <p className="text-[#4A5568] leading-relaxed text-sm">
          Following warranty completion, ongoing 24/7 infrastructure monitoring, operating system security patching, disaster recovery backups, and guaranteed SLA response times are managed through optional ongoing maintenance packages.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality-data",
    number: "06",
    title: "Non-Disclosure Agreements (NDA) & Data Security",
    icon: <LockIcon size={22} />,
    summary:
      "Strict enterprise confidentiality, encrypted communications, and adherence to global privacy principles.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          We treat all proprietary client data, business logic, customer records, and commercial plans with the highest standards of enterprise confidentiality.
        </p>
        <ul className="space-y-2.5 text-sm text-[#4A5568] mb-4">
          <li className="flex items-center gap-2.5">
            <CheckCircleIcon size={16} className="text-[#0B3D91]" />
            <span>Mutual Non-Disclosure Agreement (NDA) signed prior to project kickoff</span>
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircleIcon size={16} className="text-[#0B3D91]" />
            <span>End-to-end encrypted code repositories and access control management</span>
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircleIcon size={16} className="text-[#0B3D91]" />
            <span>No unauthorized subcontracting or sharing of client assets</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "07",
    title: "Governing Law & Dispute Resolution",
    icon: <GlobeIcon size={22} />,
    summary:
      "Governed by standard commercial laws and international arbitration protocols.",
    content: (
      <>
        <p className="text-[#4A5568] leading-relaxed mb-4">
          These Terms and Conditions shall be governed by and construed in accordance with the laws of Australia and the jurisdiction of Australian courts for Australian client engagements, or standard international arbitration frameworks for international client contracts.
        </p>
        <p className="text-[#4A5568] leading-relaxed text-sm">
          Both parties agree to seek resolution of any disputes through good-faith executive mediation before initiating formal legal proceedings.
        </p>
      </>
    ),
  },
];

export default function TermsOfServicePage() {
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
                Terms & Conditions
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
                Transparent contractual guidelines governing bespoke software development, CRM engineering, AI automation workflows, and SLA maintenance with ValoSync Global.
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

                {/* Legal Assistance Box */}
                <div className="p-6 sm:p-7 rounded-3xl bg-[#071A33] text-white border border-white/10 shadow-lg">
                <div className="flex gap-4 mb-2">
                  <span className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] inline-block mb-4">
                    <MailIcon size={22} />
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Contract Clarification?
                  </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    Need customized Enterprise Master Service Agreements (MSAs), bespoke SLA clauses, or vendor onboarding forms?
                  </p>
                  <Button
                    as="link"
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                    rightIcon={<ArrowRightIcon size={14} />}
                  >
                    Contact Legal Team
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
                      Ready to kick off your project?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 max-w-lg">
                      Schedule a technical discovery session with our architects to review scope, milestone timelines, and commercial estimates.
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
                    Book Discovery Call
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
