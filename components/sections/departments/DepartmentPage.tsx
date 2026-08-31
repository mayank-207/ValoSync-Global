import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

export type DepartmentPageData = {
  eyebrow: string;
  title: string;
  introduction: string;
  services: { title: string; description: string }[];
  audiences: string[];
  process: { title: string; description: string }[];
  disclaimer?: string;
};

export default function DepartmentPage({ data }: { data: DepartmentPageData }) {
  return (
    <>
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-[#071A33] pt-32 pb-20 text-white md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(21,101,192,0.28),transparent_42%)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <span className="mb-5 inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                {data.eyebrow}
              </span>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {data.title}
              </h1>
              <p className="mb-9 max-w-3xl text-lg leading-relaxed text-slate-200">
                {data.introduction}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0B3D91] px-6 py-3.5 font-bold text-white transition hover:bg-[#1565C0]"
                >
                  Discuss Your Requirements <ArrowRightIcon size={18} />
                </Link>
                <Link
                  href="#department-services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="department-services" className="section-padding bg-white">
          <div className="container">
            <div className="mb-12 max-w-3xl">
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-[#0B3D91]">
                Department Services
              </span>
              <h2 className="mb-4 text-3xl font-extrabold text-[#071A33] sm:text-4xl">
                Practical Support for Your Next Step
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Select the support you need and our team will help clarify the appropriate scope, responsibilities and next actions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.services.map((service, index) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-[#D9E1EC] bg-[#F7F9FC] p-7 transition hover:-translate-y-1 hover:border-[#0B3D91]/40 hover:shadow-lg"
                >
                  <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3D91]/10 text-sm font-extrabold text-[#0B3D91]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-[#071A33]">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F7F9FC]">
          <div className="container grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-3xl bg-[#071A33] p-8 text-white md:p-10">
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                Who We Support
              </span>
              <h2 className="mb-6 text-3xl font-extrabold">Support Designed Around Your Situation</h2>
              <ul className="space-y-4">
                {data.audiences.map((audience) => (
                  <li key={audience} className="flex items-start gap-3 text-slate-200">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                      <CheckIcon size={14} />
                    </span>
                    {audience}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-[#0B3D91]">
                How We Work
              </span>
              <h2 className="mb-8 text-3xl font-extrabold text-[#071A33]">A Clear and Coordinated Process</h2>
              <div className="space-y-5">
                {data.process.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-2xl border border-[#D9E1EC] bg-white p-5">
                    <span className="text-lg font-extrabold text-[#D4AF37]">0{index + 1}</span>
                    <div>
                      <h3 className="mb-1 font-bold text-[#071A33]">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {data.disclaimer && (
          <section className="bg-white py-8">
            <div className="container">
              <p className="rounded-2xl border border-[#D4AF37]/35 bg-[#D4AF37]/5 px-6 py-5 text-sm leading-relaxed text-slate-600">
                <strong className="text-[#071A33]">Important:</strong> {data.disclaimer}
              </p>
            </div>
          </section>
        )}

        <section className="bg-[#0B3D91] py-16 text-white">
          <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-extrabold">Ready to Discuss Your Requirements?</h2>
              <p className="text-blue-100">Tell us which department you need and we will route your enquiry appropriately.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3.5 font-bold text-[#071A33] transition hover:bg-[#e2c35c]"
            >
              Contact ValoSync Global <ArrowRightIcon size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
