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
    <section className="corporate-hero" aria-labelledby="hero-heading">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=82"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-35"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041026] via-[#071A3D]/95 to-[#071A3D]/65" aria-hidden="true" />
      <div className="corporate-hero-grid" aria-hidden="true" />

      <div className="relative container pt-32 sm:pt-36 lg:pt-44">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-end pb-16 lg:pb-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-gold">
              <span className="w-8 h-px bg-gold" />
              One global group. Multiple areas of expertise
            </p>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.02] text-white"
            >
              Specialist services for
              <span className="block text-gold">business, property</span>
              and sustainable growth.
            </h1>
            <p className="mt-7 max-w-2xl text-base sm:text-lg leading-8 text-slate-200">
              ValoSync Global brings together specialist capabilities across technology, accounting, conveyancing, civil engineering, real estate and home loans through one trusted organisation.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button
                as="link"
                href="/contact"
                variant="gold"
                size="lg"
                rightIcon={<ArrowRightIcon size={19} />}
              >
                Schedule a consultation
              </Button>
              <Link href="/departments" className="corporate-hero-link">
                Explore our 6 departments <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>

          <aside className="corporate-hero-aside">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Integrated delivery</p>
            <h2 className="mt-4 text-2xl font-bold text-white">
              One relationship. The right specialist expertise.
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: <LayersIcon size={18} />, text: "Specialist support across six departments" },
                { icon: <ShieldIcon size={18} />, text: "Clear, responsible client engagement" },
                { icon: <GlobeIcon size={18} />, text: "Global perspective with focused collaboration" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                  <span className="mt-0.5 text-gold">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-6 border-t border-white/15 flex items-center gap-3 text-sm font-semibold text-white">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold text-primary-dark">
                <CheckIcon size={15} />
              </span>
              Clear scope, milestones and ownership
            </div>
          </aside>
        </div>

        <div className="corporate-proof-grid">
          {proofPoints.map((item) => (
            <div key={item.label} className="px-5 sm:px-7 py-6 border-white/15">
              <strong className="block text-lg sm:text-xl font-bold text-white">{item.value}</strong>
              <span className="mt-1 block text-xs uppercase tracking-wider text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
