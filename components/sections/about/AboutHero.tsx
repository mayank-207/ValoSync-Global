import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/Icons";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] pb-20 pt-32 text-white md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
              About ValoSync Global
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Connected expertise for business, property and growth.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              We are a global umbrella organisation bringing specialist departments together under one professional brand, with clear ownership and coordinated client support.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Six focused service departments", "One coordinated enquiry pathway"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <CheckCircleIcon size={17} className="text-[#D4AF37]" />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button as="link" href="/#departments" variant="primary" size="lg" rightIcon={<ArrowRightIcon size={18} />}>
                Explore Departments
              </Button>
              <Button as="link" href="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=82"
                alt="Diverse professional team collaborating around a table"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041026]/55 via-transparent to-[#0D47A1]/10" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#071A3D]/90 p-5 backdrop-blur-md sm:left-8 sm:right-auto sm:max-w-xs">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37]">Global perspective</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white">Professional collaboration shaped around each client requirement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
