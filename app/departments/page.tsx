import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import DepartmentHeroMotion from "@/components/ui/DepartmentHeroMotion";
import { ArrowRightIcon, BriefcaseIcon, CheckCircleIcon, CodeIcon, FinanceIcon, LayersIcon, RealEstateIcon, ShieldIcon, ManufacturingIcon } from "@/components/ui/Icons";
import { departmentsData } from "@/lib/departmentsData";

export const metadata: Metadata = {
  title: "Specialist Departments | ValoSync Global",
  description:
    "Explore ValoSync Global's 6 main departments: Engineering & Project Management, Loan & Finance Management, Accounting, Taxation & Compliance, Property & Real Estate Management, Conveyancing & Property Settlement, and Software Company.",
  alternates: {
    canonical: "/departments",
  },
};

interface DepartmentGroup {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  slugs: (keyof typeof departmentsData)[];
}

const departmentGroups: DepartmentGroup[] = [
  {
    id: "engineering-project-management",
    title: "Engineering & Project Management",
    description:
      "End-to-end civil infrastructure, council town planning approvals, architectural design, and comprehensive on-site project oversight.",
    icon: <ManufacturingIcon size={23} />,
    slugs: ["engineering-project-management", "civil-engineering", "town-planning", "architecture"],
  },
  {
    id: "loan-finance-management",
    title: "Loan & Finance Management",
    description:
      "Accredited residential mortgages, commercial debt structuring, financial planning, wealth accumulation, and asset risk protection.",
    icon: <FinanceIcon size={23} />,
    slugs: ["loan-finance-management", "home-loans", "financial-planning", "insurance"],
  },
  {
    id: "accounting-taxation-compliance",
    title: "Accounting, Taxation & Compliance",
    description:
      "Corporate bookkeeping, statutory tax optimization, corporate governance, legal contract advisory, and compliant payroll systems.",
    icon: <BriefcaseIcon size={23} />,
    slugs: ["accounting-taxation-compliance", "accounting", "legal-advisory"],
  },
  {
    id: "property-real-estate-management",
    title: "Property & Real Estate Management",
    description:
      "Strategic residential and commercial property sales, active asset management, high-visibility leasing, and development feasibility.",
    icon: <RealEstateIcon size={23} />,
    slugs: ["property-real-estate-management", "real-estate"],
  },
  {
    id: "conveyancing-property-settlement",
    title: "Conveyancing & Property Settlement",
    description:
      "Certified legal title transfers, fast Section 32 contract reviews, stamp duty processing, and electronic PEXA property settlements.",
    icon: <ShieldIcon size={23} />,
    slugs: ["conveyancing-property-settlement", "conveyancing"],
  },
  {
    id: "software-company",
    title: "Software Company",
    description:
      "Custom software, applications, cloud and DevOps delivery, managed networks, and practical AI automation.",
    icon: <CodeIcon size={23} />,
    slugs: ["software-company", "technology", "hr-advisory"],
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero Section */}
        <section className="relative isolate min-h-[36rem] overflow-hidden bg-[#071A33] pb-20 pt-32 text-white md:pb-28 md:pt-40">
          <div className="absolute inset-0 bg-[url('/images/departments/overview-poster.webp')] bg-cover bg-center" aria-hidden="true" />
          <DepartmentHeroMotion />
          <div className="absolute inset-0 bg-[#071A33]/80 lg:bg-[#071A33]/72" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6">
                <LayersIcon size={16} className="text-[#D4AF37]" />
                <span>One Global Group • 6 Core Departments</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
                Specialist Capability Across Key Business Sectors
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
                ValoSync Global delivers integrated operational expertise across Engineering & Project Management, Loan & Finance, Accounting & Compliance, Property & Real Estate, Conveyancing, and Software Development under one trusted group.
              </p>

              {/* Quick Jump Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                {departmentGroups.map((grp) => (
                  <a
                    key={grp.id}
                    href={`#${grp.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/30 bg-[#071A33]/60 hover:bg-[#0B3D91]/70 hover:border-[#D4AF37]/60 text-xs sm:text-sm font-semibold text-white transition-all backdrop-blur-sm motion-safe:hover:-translate-y-0.5"
                  >
                    <span>{grp.title}</span>
                    <span className="text-xs text-[#D4AF37]">({grp.slugs.length})</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grouped Departments Catalog */}
        <section className="section-padding bg-[#F7F9FC]">
          <div className="container space-y-16 sm:space-y-20">
            {departmentGroups.map((grp) => (
              <div key={grp.id} id={grp.id} className="scroll-mt-28 space-y-8">
                <div className="flex items-start gap-4 border-b border-[#D9E1EC] pb-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#0B3D91]/15 bg-white text-[#0B3D91] shadow-sm" aria-hidden="true">{grp.icon}</span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B3D91]">Division</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A33] mt-1">{grp.title}</h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">{grp.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {grp.slugs.map((slug) => {
                    const dept = departmentsData[slug];
                    return (
                      <Link
                        key={dept.slug}
                        href={`/departments/${dept.slug}`}
                        className="group bg-white rounded-3xl overflow-hidden border border-[#D9E1EC] shadow-sm hover:border-[#0B3D91]/40 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-[#D4AF37] transition-all duration-300 motion-safe:hover:-translate-y-1 flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative aspect-[16/9] overflow-hidden bg-[#071A3D]">
                            <Image
                              src={dept.image}
                              alt={dept.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/80 via-[#071A3D]/20 to-transparent" aria-hidden="true" />
                            <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#071A3D]/80 px-3 py-1 text-xs font-bold tracking-widest text-[#D4AF37] backdrop-blur">
                              {dept.number}
                            </span>
                          </div>

                          <div className="p-6 sm:p-7 pb-4">
                            <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider block mb-2">
                              {dept.badge}
                            </span>
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                              {dept.title}
                            </h3>
                            <p className="text-sm text-[#4A5568] leading-relaxed mb-5">
                              {dept.heroSubtitle}
                            </p>

                            <ul className="space-y-2 border-t border-[#D9E1EC] pt-4">
                              {dept.highlights.slice(0, 3).map((hl, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1A1A1A]">
                                  <CheckCircleIcon size={14} className="text-[#D4AF37]" />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pb-6 pt-1 text-center">
                          <span className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[#0B3D91] group-hover:text-[#1565C0] transition-colors">
                            <span>Learn More</span>
                            <ArrowRightIcon size={15} className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
