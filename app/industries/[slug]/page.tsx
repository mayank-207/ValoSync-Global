import type { Metadata } from "next";
import { shareMetadata, siteOrigin } from "@/lib/shareMetadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ZapIcon,
  SparkleIcon,
  ShieldIcon,
  LayersIcon,
} from "@/components/ui/Icons";
import {
  industriesDataMap,
  IndustrySlug,
} from "@/lib/industriesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "automotive" },
    { slug: "healthcare" },
    { slug: "logistics" },
    { slug: "finance" },
    { slug: "retail" },
    { slug: "realestate" },
    { slug: "professional" },
    { slug: "manufacturing" },
    { slug: "education" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as IndustrySlug;
  const data = industriesDataMap[slug];

  if (!data) {
    return {
      title: "Industry Solution Not Found | ValoSync Global",
    };
  }

  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    keywords: [
      data.title,
      `${data.title} Australia`,
      "industry software solutions",
      "enterprise digital transformation",
      "ValoSync Global",
    ],
    alternates: {
      canonical: `/industries/${slug}`,
      languages: {
        "en-AU": `${siteOrigin}/industries/${slug}`,
        "en-IN": `${siteOrigin}/industries/${slug}`,
        "en": `${siteOrigin}/industries/${slug}`,
        "x-default": `${siteOrigin}/industries/${slug}`,
      },
    },
    ...shareMetadata({
      path: `/industries/${slug}`,
      title: data.metaTitle,
      description: data.metaDescription,
      section: "Industries",
      visual: data.heroImage,
    }),
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as IndustrySlug;
  const data = industriesDataMap[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main">
        {/* ============================================================ */}
        {/* HERO SECTION WITH HIGH-RES INDUSTRY IMAGE & STATS           */}
        {/* ============================================================ */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#071A33] text-white overflow-hidden">
          {/* Subtle Grid & Gradient glow */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0B3D91]/30 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-white transition-colors">
                Industries
              </Link>
              <span>/</span>
              <span className="text-[#D4AF37] font-semibold">{data.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6">
                  <SparkleIcon size={16} className="text-[#D4AF37]" />
                  <span>{data.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
                  {data.heroHeadline}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
                  {data.heroSubtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                  <Button
                    as="link"
                    href={`/contact?industry=${data.slug}`}
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRightIcon size={16} />}
                  >
                    Consult Industry Specialist
                  </Button>

                  <a
                    href="#capabilities"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm"
                  >
                    Explore Capabilities
                  </a>
                </div>

                {/* Quick Trust / Highlights Badges */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon size={16} className="text-[#D4AF37]" />
                    <span>Enterprise SLA Guarantees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon size={16} className="text-[#D4AF37]" />
                    <span>Australian Data Residency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon size={16} className="text-[#D4AF37]" />
                    <span>Proprietary IP Ownership</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Featured Industry Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
                  <div className="aspect-[4/3] sm:aspect-[16/11] relative w-full bg-slate-900">
                    <Image
                      src={data.heroImage}
                      alt={data.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-black/20" />
                  </div>

                  {/* Floating Stat Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg text-[#1A1A1A]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold text-slate-500">
                          Sector Impact Benchmark
                        </div>
                        <div className="text-xl font-extrabold text-[#0B3D91]">
                          {data.metrics}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#0B3D91]/10 flex items-center justify-center text-[#0B3D91]">
                        <ZapIcon size={20} className="text-[#D4AF37]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 pt-8 border-t border-slate-800/80">
              {data.outcomes.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#D4AF37] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-300">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* STRATEGIC PILLARS: WHY VALOSYNC FOR THIS INDUSTRY (NCSGX STYLE) */}
        {/* ============================================================ */}
        <section className="section-padding bg-[#F7F9FC] relative">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3D91] bg-[#0B3D91]/10 px-3.5 py-1.5 rounded-full mb-3">
                Strategic Imperatives
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Why ValoSync Global for {data.category} is Critical
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3">
                We apply disciplined engineering and deep domain specialization to overcome industry-specific barriers to scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.strategicPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D9E1EC] hover:border-[#0B3D91] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0B3D91]/10 text-[#0B3D91] flex items-center justify-center font-bold text-lg mb-5">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* DEEP-DIVE: PAIN POINTS VS. ENGINEERED SOLUTIONS             */}
        {/* ============================================================ */}
        <section className="section-padding bg-white relative">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3D91] bg-[#0B3D91]/10 px-3.5 py-1.5 rounded-full mb-3">
                Problem & Solution Matrix
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                From Operational Bottlenecks to Scalable Systems
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3">
                See how our targeted software engineering directly addresses the costliest friction points in {data.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Challenges Column */}
              <div className="bg-[#FFF5F5] p-6 sm:p-8 rounded-3xl border border-red-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-100">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-base">
                    !
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      Common {data.category} Pain Points
                    </h3>
                    <p className="text-xs text-red-600 font-semibold">
                      Legacy bottlenecks slowing down revenue & performance
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {data.challenges.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">
                        ✕
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-[#1A1A1A] mb-1">
                          {c.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions Column */}
              <div className="bg-[#F7F9FC] p-6 sm:p-8 rounded-3xl border border-[#0B3D91]/30 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D9E1EC]">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-white flex items-center justify-center font-bold text-base">
                    <CheckCircleIcon size={20} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      ValoSync Engineered Architecture
                    </h3>
                    <p className="text-xs text-[#0B3D91] font-semibold">
                      High-availability software & automated workflows
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {data.solutions.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircleIcon
                        size={22}
                        className="text-[#0B3D91] flex-shrink-0 mt-1"
                      />
                      <div>
                        <h4 className="text-base font-bold text-[#1A1A1A] mb-1">
                          {s.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CORE CAPABILITIES & SECONDARY INDUSTRY IMAGE                */}
        {/* ============================================================ */}
        <section id="capabilities" className="section-padding bg-[#F7F9FC] relative">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-5">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3D91] bg-[#0B3D91]/10 px-3.5 py-1.5 rounded-full mb-3">
                  Technical Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
                  Core Solutions Built For {data.category}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {data.description}
                </p>

                {/* Secondary High-Res Industry Image */}
                <div className="relative rounded-2xl overflow-hidden border border-[#D9E1EC] shadow-md group">
                  <div className="aspect-[4/3] relative w-full bg-slate-100">
                    <Image
                      src={data.secondaryImage}
                      alt={`${data.title} operational software demonstration`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-white text-xs font-semibold text-slate-600 border-t border-[#D9E1EC] flex items-center justify-between">
                    <span>{data.title} Workflow Automation</span>
                    <span className="text-[#0B3D91] font-bold">ValoSync Global</span>
                  </div>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-[#D9E1EC] hover:border-[#0B3D91] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0B3D91]/10 text-[#0B3D91] flex items-center justify-center font-bold mb-4">
                      <LayersIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-[#1A1A1A] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {cap.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                      {cap.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F7F9FC] text-slate-600 border border-[#D9E1EC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURED CASE STUDY TRANSFORMATION                          */}
        {/* ============================================================ */}
        <section className="section-padding bg-white relative">
          <div className="container">
            <div className="bg-gradient-to-br from-[#071A33] via-[#0B3D91] to-[#071A33] text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                  <span>Featured Case Study</span>
                  <span>•</span>
                  <span>{data.caseStudy.clientType}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  {data.caseStudy.title}
                </h2>

                <p className="text-lg text-[#D4AF37] font-semibold mb-6">
                  {data.caseStudy.impact}
                </p>

                <p className="text-base text-slate-200 leading-relaxed mb-8 max-w-3xl">
                  {data.caseStudy.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 mb-8">
                  {data.caseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-300 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  as="link"
                  href={`/contact?industry=${data.slug}&ref=case-study`}
                  variant="gold"
                  size="md"
                  rightIcon={<ArrowRightIcon size={16} />}
                >
                  Discuss a Similar Solution For Your Business
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* TECH STACK & ENTERPRISE STANDARDS                           */}
        {/* ============================================================ */}
        <section className="section-padding bg-[#F7F9FC] relative">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3D91] bg-[#0B3D91]/10 px-3.5 py-1.5 rounded-full mb-3">
                Enterprise Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                Modern Technologies & Compliance Standards
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-12">
              {data.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-xl bg-white text-[#1A1A1A] text-sm font-bold border border-[#D9E1EC] shadow-sm flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0B3D91]" />
                  <span>{tech}</span>
                </div>
              ))}
              <div className="px-5 py-2.5 rounded-xl bg-white text-[#1A1A1A] text-sm font-bold border border-[#D9E1EC] shadow-sm flex items-center gap-2">
                <ShieldIcon size={14} className="text-[#D4AF37]" />
                <span>ISO 27001 Security Standard</span>
              </div>
              <div className="px-5 py-2.5 rounded-xl bg-white text-[#1A1A1A] text-sm font-bold border border-[#D9E1EC] shadow-sm flex items-center gap-2">
                <ShieldIcon size={14} className="text-[#D4AF37]" />
                <span>Australian Privacy Act & CDR Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FREQUENTLY ASKED QUESTIONS                                   */}
        {/* ============================================================ */}
        <section className="section-padding bg-white relative">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3D91] bg-[#0B3D91]/10 px-3.5 py-1.5 rounded-full mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                Questions About {data.title} Solutions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={data.faqs} />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CALL TO ACTION                                               */}
        {/* ============================================================ */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
