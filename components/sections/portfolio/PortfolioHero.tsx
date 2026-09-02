"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, SparkleIcon, CheckCircleIcon, ZapIcon, AwardIcon } from "@/components/ui/Icons";

export default function PortfolioHero() {
  const stats = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Client Satisfaction", value: "99.4%" },
    { label: "Average Client ROI", value: "3.5x" },
    { label: "Global Reach", value: "Multi-Region" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041026]/95 via-[#071A3D]/85 to-[#0D47A1]/70" aria-hidden="true" />
      {/* Background Glow & Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-[#D4AF37]/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6 animate-fade-in">
            <AwardIcon size={16} className="text-[#D4AF37]" />
            <span>Proven Engineering Excellence & Case Studies</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 animate-fade-in-up">
            Transforming Enterprise Vision Into{" "}
            <span className="text-[#D4AF37]">
              Measurable Business Results
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in-up animate-delay-100">
            Explore how Valosync Global engineers high-impact custom software, intelligent CRM systems, AI workflow automation, and digital lead generation engines for clients worldwide.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up animate-delay-200">
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRightIcon size={18} />}
            >
              Discuss Your Project Idea
            </Button>
            <Link
              href="#case-studies-grid"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-bold rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              <ZapIcon size={16} className="text-[#D4AF37]" />
              Explore Case Studies
            </Link>
          </div>

          {/* Stats Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pt-8 border-t border-white/15 animate-fade-in-up animate-delay-300">
            {stats.map((s, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-0.5">
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
