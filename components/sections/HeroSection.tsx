import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import {
  ArrowRightIcon,
  CheckIcon,
  GlobeIcon,
  LayersIcon,
  ShieldIcon,
} from "../ui/Icons";

const proofPoints = [
  { value: "Business-first", label: "Solution strategy" },
  { value: "End-to-end", label: "Delivery capability" },
  { value: "Transparent", label: "Project collaboration" },
  { value: "Scalable", label: "Technology foundations" },
];

export default function HeroSection() {
  return (
    <section className="corporate-hero relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between" aria-labelledby="hero-heading">
      <Image
        src="/images/heroes/home-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041026] via-[#071A3D]/95 to-[#071A3D]/65" aria-hidden="true" />
      <div className="corporate-hero-grid" aria-hidden="true" />

      {/* Main Content Area */}
      <div className="relative container pt-24 sm:pt-28 lg:pt-32 pb-6 my-auto">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12 items-center">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold mb-2.5">
              <span className="w-6 h-px bg-gold" />
              One global group • Multiple areas of expertise
            </p>
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-white"
            >
              Specialist services for{" "}
              <span className="text-gold">business, property</span>{" "}
              and sustainable growth.
            </h1>
            <p className="mt-3.5 sm:mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200">
              ValoSync Global brings together specialist capabilities across technology, accounting, conveyancing, civil engineering, real estate and home loans through one trusted organisation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <Button
                as="link"
                href="/contact"
                variant="primary"
                size="md"
                rightIcon={<ArrowRightIcon size={16} />}
              >
                Schedule a consultation
              </Button>
              <Link href="/departments" className="corporate-hero-link">
                Explore our 6 departments <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>

          <aside className="corporate-hero-aside rounded-2xl p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Integrated delivery</p>
            <h2 className="mt-2 text-lg sm:text-xl font-bold text-white">
              One relationship. The right specialist expertise.
            </h2>
            <ul className="mt-3.5 space-y-2.5">
              {[
                { icon: <LayersIcon size={16} />, text: "Specialist support across six departments" },
                { icon: <ShieldIcon size={16} />, text: "Clear, responsible client engagement" },
                { icon: <GlobeIcon size={16} />, text: "Global perspective with focused collaboration" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug text-slate-200">
                  <span className="mt-0.5 text-gold flex-shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold text-primary-dark flex-shrink-0">
                <CheckIcon size={12} />
              </span>
              Clear scope, milestones and ownership
            </div>
          </aside>
        </div>
      </div>

      {/* Proof Points Bar */}
      <div className="relative container pb-6 sm:pb-8">
        <div className="corporate-proof-grid rounded-xl overflow-hidden border border-white/15">
          {proofPoints.map((item) => (
            <div key={item.label} className="px-4 py-2.5 sm:py-3 text-center sm:text-left">
              <strong className="block text-sm sm:text-base font-bold text-white">{item.value}</strong>
              <span className="mt-0.5 block text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
