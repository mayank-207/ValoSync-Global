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
    "Australian Lead Generation Focus",
    "100% Confidential NDA Guarantee",
    "Agile & Dedicated Development",
  ];

  return (
    <section
      className="relative pt-32 lg:pt-36 pb-24 lg:pb-32 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background Ambient Glows & Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] rounded-full blur-[120px] animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(30, 58, 138, 0.5) 0%, transparent 70%)",
            animationDelay: "3s",
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
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
              <span
                className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-full mb-6 border backdrop-blur-md"
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  borderColor: "rgba(6, 182, 212, 0.35)",
                  color: "var(--accent-color)",
                }}
              >
                <SparkleIcon size={16} />
                Empowering Businesses Across Australia & Globally
              </span>
            </div>

            {/* SINGLE H1 Tag for SEO */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 animate-fade-in-up animate-delay-100"
              style={{ color: "var(--text-light)" }}
            >
              Custom Software,{" "}
              <span className="block">
                <span className="gradient-text">AI & Business Automation</span>
              </span>
              Engineered for Growth.
            </h1>

            {/* Hero Subtitle */}
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-in-up animate-delay-200"
              style={{ color: "rgba(203, 213, 225, 0.9)" }}
            >
              Velosync Global transforms business visions into scalable digital reality. We build bespoke software, intelligent CRM systems, and AI automation engines designed to scale high-growth enterprises.
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
                className="group inline-flex items-center gap-2.5 px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 border backdrop-blur-md"
                style={{
                  color: "var(--text-light)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
              >
                Explore Our Services
                <ArrowRightIcon size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Checklist */}
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-in-up animate-delay-400">
              {trustHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium"
                  style={{ color: "rgba(203, 213, 225, 0.9)" }}
                >
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(6, 182, 212, 0.2)",
                      color: "var(--accent-color)",
                    }}
                  >
                    <CheckIcon size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Visual Tech Mockup & Floating Metric Cards */}
          <div className="lg:col-span-5 relative animate-fade-in animate-delay-300">
            <div
              className="relative rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(11, 27, 61, 0.95) 100%)",
                borderColor: "rgba(6, 182, 212, 0.25)",
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* Decorative Tech Graphic Box Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    velosync-engine.v1.0.ts
                  </span>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Code Snippet / Visual Dashboard Representation */}
              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <BrainIcon size={18} />
                    </span>
                    <div>
                      <p className="text-white font-semibold font-sans text-sm">
                        AI Automation Workflow
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Lead Processing & CRM Sync
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold font-sans">
                    99.8% Efficiency
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <CodeIcon size={18} />
                    </span>
                    <div>
                      <p className="text-white font-semibold font-sans text-sm">
                        Custom Software Architecture
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Next.js + Microservices
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold font-sans">
                    Enterprise Ready
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <ZapIcon size={18} />
                    </span>
                    <div>
                      <p className="text-white font-semibold font-sans text-sm">
                        Lead Generation Pipeline
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Australian Market Targeting
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-amber-400 font-semibold font-sans">
                    3.5x Conversion Rate
                  </span>
                </div>
              </div>

              {/* Progress metric footer inside mockup */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Security & NDA Protection</span>
                <span className="text-cyan-400 font-medium">100% Guaranteed</span>
              </div>
            </div>

            {/* Floating Floating Metric Card 1 */}
            <div
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-6 p-4 rounded-2xl shadow-2xl backdrop-blur-md border animate-float"
              style={{
                background: "rgba(255, 255, 255, 0.96)",
                borderColor: "var(--border-color)",
                animationDelay: "1s",
              }}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{
                    background: "rgba(6, 182, 212, 0.12)",
                    color: "var(--accent-color)",
                  }}
                >
                  <ShieldIcon size={24} />
                </div>
                <div>
                  <p
                    className="text-xl font-extrabold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    100% NDA
                  </p>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Client Confidentiality
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Metric Card 2 */}
            <div
              className="absolute -top-6 -right-4 md:-top-6 md:-right-6 p-4 rounded-2xl shadow-2xl backdrop-blur-md border animate-float"
              style={{
                background: "rgba(255, 255, 255, 0.96)",
                borderColor: "var(--border-color)",
                animationDelay: "3s",
              }}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{
                    background: "rgba(11, 27, 61, 0.1)",
                    color: "var(--primary-color)",
                  }}
                >
                  <GlobeIcon size={24} />
                </div>
                <div>
                  <p
                    className="text-xl font-extrabold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Australia Focus
                  </p>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Targeted Lead Tech
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
