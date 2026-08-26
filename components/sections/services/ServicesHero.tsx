"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, SparkleIcon, CheckCircleIcon, ZapIcon } from "@/components/ui/Icons";

export default function ServicesHero() {
  const highlights = [
    "Tailored Enterprise Engineering",
    "Custom High-Converting CRMs",
    "AI & Intelligent Automation",
    "ROI-Driven Growth & SEO",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white overflow-hidden">
      {/* Background Glow & Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide mb-6 animate-fade-in">
            <SparkleIcon size={16} className="text-cyan-400" />
            <span>Full-Spectrum IT & Software Engineering</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 animate-fade-in-up">
            Targeted Services to Accelerate Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Digital Transformation & Growth
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in-up animate-delay-100">
            Velosync Global delivers end-to-end technology solutions — from bespoke software engineering and intelligent CRM systems to AI workflow automation and high-converting digital marketing strategies tailored for Australian SMEs and global enterprises.
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
              Book Free Service Consultation
            </Button>
            <Button
              as="link"
              href="#services-catalog"
              variant="outline"
              size="lg"
              leftIcon={<ZapIcon size={18} className="text-cyan-400" />}
            >
              Explore Our Core Services
            </Button>
          </div>

          {/* Key Value Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-8 border-t border-slate-800/80 animate-fade-in-up animate-delay-300">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircleIcon size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
