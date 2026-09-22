import type { Metadata } from "next";
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
} from "@/components/ui/Icons";
import { departmentsData, DepartmentSlug } from "@/lib/departmentsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "engineering-project-management" },
    { slug: "loan-finance-management" },
    { slug: "accounting-taxation-compliance" },
    { slug: "property-real-estate-management" },
    { slug: "conveyancing-property-settlement" },
    { slug: "software-company" },
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
        <section className="relative isolate flex min-h-[42rem] items-center overflow-hidden bg-[#071A33] pb-16 pt-32 text-white md:pb-20 md:pt-40">
          <Image
            src={data.image}
            alt=""
            fill
            sizes="100vw"
            fetchPriority="high"
            className="object-cover object-[65%_center]"
          />
          <div
            className={`absolute inset-0 ${slug === "town-planning"
              ? "bg-[#071A33]/65 lg:bg-gradient-to-r lg:from-[#071A33]/75 lg:via-[#071A33]/45 lg:to-[#071A33]/10"
              : "bg-[#071A33]/80 lg:bg-gradient-to-r lg:from-[#071A33]/95 lg:via-[#071A33]/80 lg:to-[#071A33]/30"}`}
            aria-hidden="true"
          />

          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#071A33]/60 border border-[#D4AF37]/45 text-[#F5E6B3] text-xs sm:text-sm font-semibold tracking-wide mb-7 backdrop-blur-sm">
                <SparkleIcon size={16} className="text-[#D4AF37]" />
                <span>Department {data.number} • {data.badge}</span>
              </div>

              <h1 className="max-w-4xl border-l-4 border-[#D4AF37] pl-5 text-4xl font-extrabold tracking-tight leading-[1.15] drop-shadow-md sm:text-5xl md:pl-7 md:text-6xl mb-6">
                {data.heroHeadline}
              </h1>

              <p className="max-w-2xl text-lg sm:text-xl text-slate-100 font-normal leading-relaxed mb-9 drop-shadow-sm">
                {data.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white rounded-xl border border-white/45 bg-[#071A33]/55 hover:bg-[#071A33]/80 hover:border-white/70 backdrop-blur-sm transition-all duration-200"
                >
                  <ZapIcon size={16} className="text-[#D4AF37]" />
                  <span>View Capabilities</span>
                </Link>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/20 bg-[#071A33]/65 p-5 text-left backdrop-blur-md">
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
                  className="group p-8 rounded-3xl bg-[#F7F9FC] border border-[#D9E1EC] hover:border-[#0B3D91]/40 hover:shadow-xl hover:bg-white motion-safe:hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B3D91]/10 text-[#0B3D91] font-bold flex items-center justify-center text-sm border border-[#0B3D91]/20 transition-colors group-hover:bg-[#0B3D91] group-hover:text-white">
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
                  <div key={idx} className="group bg-white p-6 rounded-2xl border border-[#D9E1EC] shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-[#0B3D91]/40 hover:shadow-lg focus-within:border-[#0B3D91]/40 focus-within:shadow-lg motion-safe:hover:-translate-y-1">
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
