"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, SparkleIcon, CheckCircleIcon, ShieldIcon, UsersIcon, AwardIcon } from "@/components/ui/Icons";

export default function AboutHero() {
  const stats = [
    { label: "Client Satisfaction Focus", value: "100%" },
    { label: "Target Market Preparedness", value: "Australia & Global" },
    { label: "Core Solution Verticals", value: "Software, CRM, AI" },
    { label: "Development Standards", value: "ISO & Agile" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <SparkleIcon size={16} />
            <span>About Velosync Global</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 animate-fade-in-up">
            Architecting Purpose-Built Software, CRMs & AI Workflows for Modern Growth
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in-up animate-delay-100">
            Velosync Global is a forward-thinking technology company dedicated to empowering Australian businesses and global enterprises with bespoke software platforms, intelligent CRM systems, and AI-driven process automation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              as="link"
              href="/services"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRightIcon size={18} />}
            >
              Explore Our Capabilities
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

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
