import Link from "next/link";
import Button from "../ui/Button";
import {
  ArrowRightIcon,
  SparkleIcon,
  ShieldIcon,
  GlobeIcon,
  CheckIcon,
  ZapIcon,
  BrainIcon,
  CodeIcon,
} from "../ui/Icons";

export default function HeroSection() {
  const trustHighlights = [
    "Business-First Technology Strategy",
    "Secure and Transparent Delivery",
    "Dedicated Project Collaboration",
  ];

  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-white"\n      style={{ background: "var(--gradient-hero)" }}
      aria-labelledby="hero-heading"
    >
      {/* Subtle Background Lighting & Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "var(--gradient-grid)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Eyebrow Badge */}
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-full mb-6 border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] backdrop-blur-md">
                <SparkleIcon size={16} />
                Technology Solutions for Businesses
              </span>
            </div>

            {/* SINGLE H1 Tag for SEO */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white animate-fade-in-up animate-delay-100"
            >
              Custom Software & CRM{" "} 
              <span className="block mt-1">
                <span className="text-[#D4AF37]">Built Around Your Business</span>
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl text-slate-200 animate-fade-in-up animate-delay-200">
              ValoSync Global designs and develops custom software, CRM platforms, web applications and practical automation solutions that help businesses simplify operations and grow with confidence.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in-up animate-delay-300">
              <Button
                as="link"
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRightIcon size={20} />}
              >
                Book Free Consultation
              </Button>
              <Link
                href="#services"
                className="group inline-flex items-center gap-2.5 px-6 py-4 text-base font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Explore Our Services
                <ArrowRightIcon size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Checklist */}
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-in-up animate-delay-400">
              {trustHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 bg-[#D4AF37]/20 text-[#D4AF37]">
                    <CheckIcon size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Visual Tech Mockup & Floating Metric Cards */}
          <div className="lg:col-span-5 relative animate-fade-in animate-delay-300">
            <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-[#071A3D]/95 to-[#041026]/95 backdrop-blur-xl">
              {/* Decorative Tech Graphic Box Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0D47A1]" />
                  <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                  <div className="w-3 h-3 rounded-full bg-[#F5E6B3]" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    valosync-engine.v1.1
                  </span>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Code Snippet / Visual Dashboard Representation */}
              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-[#041026] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-[#0D47A1]/20 text-[#D4AF37]">
                      <BrainIcon size={18} />
                    </span>
                    <div>
                      <p className="text-white font-semibold font-sans text-sm">
                        AI Automation
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Lead Processing & CRM Sync
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#D4AF37] font-semibold font-sans">
                    Connected Workflow
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#041026] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-[#0D47A1]/20 text-[#D4AF37]">
                      <CodeIcon size={18} />
                    </span>
                    <div>
                      <p className="text-white font-semibold font-sans text-sm">
                        Custom Software
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Next.js + Microservices
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#D4AF37] font-semibold font-sans">
                    Built to Scale
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                      <ZapIcon size={18} />
                    </span>
                    <div>
                      <p className="text-white font-semibold font-sans text-sm">
                        Lead Generation
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Market Targeting
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#D4AF37] font-semibold font-sans">
                    Market Focused
                  </span>
                </div>
              </div>

              {/* Progress metric footer inside mockup */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Security & NDA Protection</span>
                <span className="text-[#D4AF37] font-medium">Built In</span>
              </div>
            </div>

            {/* Floating Metric Card 1 */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-6 p-4 rounded-2xl shadow-2xl bg-white border border-[#D9E1EC] animate-float">
              <div className="flex items-center gap-3.5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0D47A1]/10 text-[#0D47A1]">
                  <ShieldIcon size={24} />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-[#1A1A1A]">
                    Secure Delivery
                  </p>
                  <p className="text-xs font-semibold text-[#4A5568]">
                    Client Confidentiality
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Metric Card 2 */}
            <div className="absolute -top-6 -right-4 md:-top-6 md:-right-6 p-4 rounded-2xl shadow-2xl bg-white border border-[#D9E1EC] animate-float">
              <div className="flex items-center gap-3.5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#B89224]">
                  <GlobeIcon size={24} />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-[#1A1A1A]">
                    Quality
                  </p>
                  <p className="text-xs font-semibold text-[#4A5568]">
                    Built with quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
