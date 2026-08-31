import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

export type DepartmentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  services: Array<{ title: string; description: string }>;
  approach: string[];
  note?: string;
};

export default function DepartmentPage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  services,
  approach,
  note,
}: DepartmentPageProps) {
  return (
    <>
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-primary-dark pb-20 pt-32 text-white md:pb-24 md:pt-40">
          <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{intro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-primary-dark transition hover:-translate-y-0.5">
                  Discuss your requirements <ArrowRightIcon size={17} />
                </Link>
                <Link href="/#departments" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15">
                  View all departments
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/45 via-transparent to-primary/10" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="corporate-section bg-background">
          <div className="container">
            <div className="corporate-heading-grid">
              <div>
                <p className="corporate-eyebrow">Department capabilities</p>
                <h2 className="corporate-title">Professional support aligned to your requirements.</h2>
              </div>
              <p className="corporate-lead">Our team begins by understanding the context, expected outcome and scope before confirming the appropriate service pathway.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <article key={service.title} className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-xl font-bold text-text-primary">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="corporate-section bg-surface">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="corporate-eyebrow">Our approach</p>
              <h2 className="corporate-title">Clear, coordinated and professionally managed.</h2>
            </div>
            <div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {approach.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white p-5 text-sm font-semibold text-text-primary">
                    <span className="mt-0.5 text-primary"><CheckIcon size={17} /></span>{item}
                  </li>
                ))}
              </ul>
              {note && <p className="mt-6 text-xs leading-6 text-text-muted">{note}</p>}
            </div>
          </div>
        </section>

        <section className="bg-primary-dark py-16 text-white">
          <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Speak with this department</p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Tell us what you need and we will confirm the next step.</h2>
            </div>
            <Link href="/contact" className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-primary-dark">
              Submit an enquiry <ArrowRightIcon size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
