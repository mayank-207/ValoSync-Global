import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import { ArrowRightIcon } from "../ui/Icons";

const departments = [
  {
    title: "Technology Services",
    description: "Custom software, applications, web platforms, AI automation, cloud delivery and digital growth.",
    href: "/services",
    accent: "#0B3D91",
    number: "01",
  },
  {
    title: "Accounting Services",
    description: "Organised accounting, bookkeeping, reporting and business administration support.",
    href: "/accounting",
    accent: "#157347",
    number: "02",
  },
  {
    title: "Conveyancing Services",
    description: "Coordinated support for property contracts, transfers, settlements and documentation.",
    href: "/conveyancing",
    accent: "#6F42C1",
    number: "03",
  },
  {
    title: "Civil Engineering Services",
    description: "Practical planning, documentation, coordination and project-support services.",
    href: "/civil-engineering",
    accent: "#C65D21",
    number: "04",
  },
  {
    title: "Real Estate Services",
    description: "Property sales, purchases, leasing, management and market-support services.",
    href: "/real-estate",
    accent: "#A47C11",
    number: "05",
  },
  {
    title: "Home Loan Services",
    description: "Structured support for home buyers, refinancing and property-investment lending enquiries.",
    href: "/home-loans",
    accent: "#0F766E",
    number: "06",
  },
];

export default function ServiceDepartmentsSection() {
  return (
    <section id="departments" className="section-padding bg-[#071A33] text-white">
      <div className="container">
        <SectionHeading
          badge="Service Departments"
          title="Expertise Across Technology, Business and Property"
          subtitle="Choose the department relevant to your needs. Each service area has its own specialists, process and enquiry pathway."
          center
          inverted
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <Link
              key={department.title}
              href={department.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-white/[0.1]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: department.accent }}
              />
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#D4AF37]">{department.number}</span>
                <ArrowRightIcon
                  size={20}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{department.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{department.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
