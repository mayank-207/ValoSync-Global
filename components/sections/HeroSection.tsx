import Link from "next/link";
import Button from "../ui/Button";
import {
  ArrowRightIcon,
  SparkleIcon,
  CheckIcon,
  BriefcaseIcon,
  GlobeIcon,
  ShieldIcon,
} from "../ui/Icons";

const departments = [
  "Technology",
  "Accounting",
  "Conveyancing",
  "Civil Engineering",
  "Real Estate",
  "Home Loans",
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] pb-20 pt-32 text-white md:pb-28 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{ backgroundImage: "var(--gradient-grid)", backgroundSize: "48px 48px" }}
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold text-[#D4AF37] backdrop-blur-md md:text-sm">
              <SparkleIcon size={16} />
              One Global Group. Multiple Areas of Expertise.
            </span>
            <h1
              id="hero-heading"
              className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Specialist Services for{" "}
              <span className="block text-[#D4AF37]">Business, Property and Growth</span>
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
              ValoSync Global is an umbrella organisation bringing together six focused departments. We connect clients with practical expertise across technology, finance, property and project services through one trusted group.
            </p>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <Button as="link" href="/contact" variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                Discuss Your Requirements
              </Button>
              <Link
                href="#departments"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                Explore Our Departments
                <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {["Specialist department pathways", "Coordinated client support", "Clear and professional delivery"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-200 sm:text-sm">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                    <CheckIcon size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#041026]/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">ValoSync Global</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Our Departments</h2>
                </div>
                <span className="rounded-xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]"><GlobeIcon size={24} /></span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {departments.map((department, index) => (
                  <div key={department} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <span className="mb-2 block text-xs font-bold text-[#D4AF37]">0{index + 1}</span>
                    <span className="text-sm font-semibold text-white">{department}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-xs text-slate-300">
                <span className="flex items-center gap-2"><BriefcaseIcon size={16} className="text-[#D4AF37]" /> Specialist expertise</span>
                <span className="flex items-center gap-2"><ShieldIcon size={16} className="text-[#D4AF37]" /> Trusted coordination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
