import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
  LayersIcon,
} from "@/components/ui/Icons";
import { departmentsData, DepartmentSlug } from "@/lib/departmentsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "technology" },
    { slug: "accounting" },
    { slug: "conveyancing" },
    { slug: "civil-engineering" },
    { slug: "real-estate" },
    { slug: "home-loans" },
    { slug: "town-planning" },
    { slug: "architecture" },
    { slug: "financial-planning" },
    { slug: "legal-advisory" },
    { slug: "insurance" },
    { slug: "hr-advisory" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as DepartmentSlug;
  const data = departmentsData[slug];

  if (!data) {
    return {
      title: "Department Not Found | ValoSync Global",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/departments/${slug}`,
    },
    openGraph: {
      title: `${data.title} | ValoSync Global`,
      description: data.metaDescription,
      url: `https://valosyncglobal.com/departments/${slug}`,
      siteName: "ValoSync Global",
      type: "website",
    },
  };
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as DepartmentSlug;
  const data = departmentsData[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main">
        {/* Department Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6">
                <SparkleIcon size={16} className="text-[#D4AF37]" />
                <span>Department {data.number} • {data.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
                {data.heroHeadline}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
                {data.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <Button
                  as="link"
                  href={`/contact?department=${data.slug}`}
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRightIcon size={18} />}
                >
                  Consult with {data.title}
                </Button>
                <Link
                  href="#capabilities"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <ZapIcon size={16} className="text-[#D4AF37]" />
                  <span>View Capabilities</span>
                </Link>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-8 border-t border-slate-800/80">
                {data.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Banner */}
        <section className="bg-[#071A3D] text-white py-10 border-y border-white/10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {data.metrics.map((metric, idx) => (
                <div key={idx} className="p-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] block mb-2">
                    {metric.value}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem vs Solution Section */}
        <section className="section-padding bg-[#F7F9FC] relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#0B3D91] font-bold text-xs uppercase tracking-wider block mb-2">
                Operational Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                Addressing Industry Challenges with Dedicated Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pain Points */}
              <div className="bg-white p-8 rounded-3xl border border-[#D9E1EC] shadow-lg">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#071A3D]/10 text-[#071A3D] flex items-center justify-center text-base font-bold">
                    ✕
                  </span>
                  Common Client Challenges
                </h3>
                <ul className="space-y-4">
                  {data.painPoints.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#4A5568]">
                      <span className="text-[#071A3D] font-bold mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineered Solution */}
              <div className="bg-white p-8 rounded-3xl border border-[#0D47A1]/30 shadow-lg">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <CheckCircleIcon size={24} className="text-[#D4AF37]" />
                  ValoSync Global Delivery Model
                </h3>
                <ul className="space-y-4">
                  {data.solutions.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#4A5568] font-medium">
                      <CheckCircleIcon size={18} className="text-[#0D47A1] flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="section-padding bg-white relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#0B3D91] font-bold text-xs uppercase tracking-wider block mb-2">
                Specialist Scope
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                Key Services & Capabilities in {data.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#D9E1EC] hover:border-[#0B3D91]/40 hover:shadow-xl hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B3D91]/10 text-[#0B3D91] font-bold flex items-center justify-center text-sm border border-[#0B3D91]/20">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Services Breakdown Cards */}
        {data.keyServices && data.keyServices.length > 0 && (
          <section className="section-padding bg-[#F7F9FC]">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#0B3D91] font-bold text-xs uppercase tracking-wider block mb-2">
                  Service Modules
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                  Explore Specific Service Solutions
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.keyServices.map((ks, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-[#D9E1EC] shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{ks.title}</h4>
                      <p className="text-xs text-[#4A5568] leading-relaxed mb-4">{ks.description}</p>
                    </div>
                    {ks.href ? (
                      <Link href={ks.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D91] hover:text-[#1565C0]">
                        Learn More <ArrowRightIcon size={14} />
                      </Link>
                    ) : (
                      <Link href={`/contact?department=${data.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D91] hover:text-[#1565C0]">
                        Enquire Now <ArrowRightIcon size={14} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container max-w-4xl">
              <div className="text-center mb-12">
                <span className="text-[#0B3D91] font-bold text-xs uppercase tracking-wider block mb-2">
                  Questions & Answers
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                  Frequently Asked Questions
                </h2>
              </div>
              <FAQAccordion items={data.faqs} />
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
