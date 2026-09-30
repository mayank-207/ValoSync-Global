import type { Metadata } from "next";
import { shareMetadata, siteOrigin } from "@/lib/shareMetadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRightIcon, CheckCircleIcon, GlobeIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: { absolute: "Network as a Service (NaaS) | ValoSync Global" },
  description:
    "Explore managed network planning, enterprise connectivity and support for business locations, remote teams and cloud systems across Australia and India.",
  keywords: [
    "network as a service Australia",
    "NaaS enterprise solutions",
    "managed LAN WAN Wi-Fi",
    "cloud connectivity Australia",
    "ValoSync Global technology",
  ],
  alternates: {
    canonical: "/departments/technology/network-as-a-service",
    languages: {
      "en-AU": `${siteOrigin}/departments/technology/network-as-a-service`,
      "en-IN": `${siteOrigin}/departments/technology/network-as-a-service`,
      "en": `${siteOrigin}/departments/technology/network-as-a-service`,
      "x-default": `${siteOrigin}/departments/technology/network-as-a-service`,
    },
  },
  ...shareMetadata({
    path: "/departments/technology/network-as-a-service",
    title: "Network as a Service (NaaS) | ValoSync Global",
    description:
      "Explore managed network planning, enterprise connectivity and support for business locations, remote teams and cloud systems across Australia and India.",
    section: "Technology Services",
    visual: "/images/naas-network-hero.webp",
  }),
};

const capabilities = [
  {
    title: "Network assessment & planning",
    description:
      "Review your existing network, business locations and growth plans to define the right connectivity approach.",
  },
  {
    title: "Managed LAN, WAN & Wi-Fi",
    description:
      "Plan and coordinate the networks that connect people, devices and offices across your organisation.",
  },
  {
    title: "Multi-location connectivity",
    description:
      "Bring distributed sites together with a network design suited to your operational requirements.",
  },
  {
    title: "Secure remote access",
    description:
      "Support remote teams with appropriate VPN and access arrangements, coordinated with your security needs.",
  },
  {
    title: "Cloud connectivity",
    description:
      "Help your business network work with the cloud applications and platforms your teams rely on.",
  },
  {
    title: "Monitoring & optimisation",
    description:
      "Review network performance and issues, then plan practical improvements and ongoing support.",
  },
];

const steps = [
  {
    label: "01",
    title: "Assess",
    description: "Understand your locations, users, current network and service requirements.",
  },
  {
    label: "02",
    title: "Design & connect",
    description: "Agree on the scope, coordinate implementation and connect the systems your teams use.",
  },
  {
    label: "03",
    title: "Support & improve",
    description: "Define monitoring and support needs, and adjust the network as your business changes.",
  },
];

export default function NetworkAsAServicePage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="relative isolate overflow-hidden bg-[#071A33] pt-32 pb-20 text-white md:pt-40 md:pb-28">
          <Image
            src="/images/naas-network-hero.webp"
            alt="Network switches and neatly routed cables in a modern data centre"
            fill
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[68%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-[#071A33]/65 md:bg-gradient-to-r md:from-[#071A33]/75 md:via-[#071A33]/45 md:to-[#071A33]/10" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <Link href="/departments/technology" className="mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37] hover:text-white">
                <GlobeIcon size={18} /> Technology Services
              </Link>
              <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl">
                Network as a Service <span className="block text-[#D4AF37]">(NaaS)</span>
              </h1>
              <p className="mb-9 max-w-xl border-l-2 border-[#D4AF37] pl-5 text-lg font-medium leading-relaxed text-slate-100 drop-shadow-md sm:text-xl">
                Flexible, managed network solutions that help businesses securely connect their teams, offices, cloud platforms and essential systems.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-4 font-bold text-[#071A33] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Discuss Your Network Requirements <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#0B3D91]">The service</span>
              <h2 className="mb-6 text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">Connectivity shaped around your business</h2>
              <p className="text-base leading-relaxed text-[#4A5568]">
                Your network connects people, locations and the tools they need to work. Our NaaS offering brings network planning, connectivity and ongoing support into a service that can evolve with your requirements. We start with your existing environment and agree on a practical scope before implementation.
              </p>
            </div>
            <div className="rounded-3xl border border-[#D9E1EC] bg-[#F7F9FC] p-8">
              <h3 className="mb-5 text-xl font-bold text-[#1A1A1A]">Where we can help</h3>
              <ul className="space-y-4">
                {[
                  "Teams working across offices, sites and remote locations",
                  "Disconnected network and cloud environments",
                  "Limited visibility into performance and recurring issues",
                  "Changing connectivity needs as the business grows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#4A5568]">
                    <CheckCircleIcon size={19} className="mt-0.5 shrink-0 text-[#0B3D91]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-padding bg-[#F7F9FC]">
          <div className="container">
            <div className="mb-12 max-w-2xl">
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#0B3D91]">What we cover</span>
              <h2 className="mb-4 text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">Network capabilities</h2>
              <p className="text-[#4A5568]">Services can be scoped to your locations, existing providers and operational needs.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability, index) => (
                <article key={capability.title} className="rounded-2xl border border-[#D9E1EC] bg-white p-7 shadow-sm">
                  <span className="mb-5 block text-sm font-bold text-[#D4AF37]">0{index + 1}</span>
                  <h3 className="mb-3 text-xl font-bold text-[#1A1A1A]">{capability.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4A5568]">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            <div className="mb-12 max-w-2xl">
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#0B3D91]">How we work</span>
              <h2 className="mb-4 text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">A clear path from assessment to support</h2>
              <p className="text-[#4A5568]">We tailor the delivery plan and support arrangements to the network you need.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.label} className="border-t-2 border-[#0B3D91] pt-6">
                  <span className="mb-4 block text-sm font-bold text-[#D4AF37]">{step.label}</span>
                  <h3 className="mb-3 text-xl font-bold text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4A5568]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F7F9FC]">
          <div className="container flex flex-col gap-6 rounded-3xl border border-[#D9E1EC] bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-[#1A1A1A]">Connected technology services</h2>
              <p className="max-w-xl text-sm leading-relaxed text-[#4A5568]">Explore how network services can work alongside cloud delivery and other Technology capabilities.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/cloud-devops" className="inline-flex items-center gap-2 font-bold text-[#0B3D91] hover:text-[#1565C0]">Cloud & DevOps <ArrowRightIcon size={16} /></Link>
              <Link href="/departments/technology" className="inline-flex items-center gap-2 font-bold text-[#0B3D91] hover:text-[#1565C0]">Technology Services <ArrowRightIcon size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#071A33] text-white">
          <div className="container flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">Let&apos;s discuss your network needs</h2>
              <p className="max-w-2xl text-slate-300">Tell us about your locations, users and existing setup. We&apos;ll help define a suitable next step.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center gap-3 self-start rounded-xl bg-[#D4AF37] px-6 py-4 font-bold text-[#071A33] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Contact Our Technology Team <ArrowRightIcon size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
