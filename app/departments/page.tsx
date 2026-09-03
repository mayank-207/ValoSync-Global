import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { ArrowRightIcon, CheckCircleIcon, LayersIcon } from "@/components/ui/Icons";
import { departmentsData } from "@/lib/departmentsData";

export const metadata: Metadata = {
  title: "Specialist Departments | ValoSync Global",
  description:
    "Explore ValoSync Global's specialist departments: Technology Services, Accounting Services, Conveyancing, Civil Engineering, Real Estate, and Home Loans.",
  alternates: {
    canonical: "/departments",
  },
};

interface DepartmentGroup {
  id: string;
  title: string;
  description: string;
  slugs: (keyof typeof departmentsData)[];
}

const departmentGroups: DepartmentGroup[] = [
  {
    id: "property",
    title: "Property & Built Environment",
    description:
      "End-to-end expertise spanning conveyancing, civil engineering, real estate, town planning, and architectural building design.",
    slugs: ["conveyancing", "civil-engineering", "real-estate", "town-planning", "architecture"],
  },
  {
    id: "finance",
    title: "Finance, Risk & Advisory",
    description:
      "Integrated financial precision, mortgage brokerage, strategic wealth planning, corporate legal governance, and risk protection.",
    slugs: ["accounting", "home-loans", "financial-planning", "legal-advisory", "insurance"],
  },
  {
    id: "technology",
    title: "Technology & People",
    description:
      "Enterprise custom software engineering, cloud infrastructure, AI automation workflows, and strategic human resource talent advisory.",
    slugs: ["technology", "hr-advisory"],
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6">
                <LayersIcon size={16} className="text-[#D4AF37]" />
                <span>One Global Group • 3 Department Divisions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
                Specialist Capability Across Key Business Sectors
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
                ValoSync Global provides dedicated operational expertise across Property & Built Environment, Finance, Risk & Advisory, and Technology & People under one trusted organization.
              </p>

              {/* Quick Jump Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                {departmentGroups.map((grp) => (
                  <a
                    key={grp.id}
                    href={`#${grp.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold text-white transition-all backdrop-blur-sm"
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
                <div className="border-b border-[#D9E1EC] pb-5">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B3D91]">Division</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A33] mt-1">{grp.title}</h2>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">{grp.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {grp.slugs.map((slug) => {
                    const dept = departmentsData[slug];
                    return (
                      <div
                        key={dept.slug}
                        className="group bg-white rounded-3xl overflow-hidden border border-[#D9E1EC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                          <Link
                            href={`/departments/${dept.slug}`}
                            className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[#0B3D91] hover:text-[#1565C0] transition-colors group/link"
                          >
                            <span>Learn More</span>
                            <ArrowRightIcon size={15} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
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
