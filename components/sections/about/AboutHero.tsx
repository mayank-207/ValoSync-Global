"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, SparkleIcon, CheckCircleIcon, ShieldIcon, UsersIcon, AwardIcon } from "@/components/ui/Icons";

export default function AboutHero() {
  const stats = [
    { label: "Client Satisfaction Focus", value: "100%" },
    { label: "Target Market Readiness", value: "Global & Enterprise" },
    { label: "Core Solution Verticals", value: "Software, CRM, AI" },
    { label: "Development Standards", value: "ISO & Agile" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <SparkleIcon size={16} />
            <span>About ValoSync Global</span>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in-up">
            Transforming Businesses with Intelligent Technology Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in-up animate-delay-100">
            We build custom software, intelligent CRM platforms, automated workflows, and connected digital solutions that help businesses work smarter, scale faster, and deliver exceptional customer experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button
              as="link"
              href="/services"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRightIcon size={18} />}
            >
              Capabilities
            </Button>
            <Button
              as="link"
              href="/contact"
              variant="outline"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Wider Stats Bar */}
        {/* <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#D4AF37] mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
