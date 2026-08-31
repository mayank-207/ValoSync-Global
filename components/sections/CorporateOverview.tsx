import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckIcon,
  GlobeIcon,
  LayersIcon,
  ShieldIcon,
  UsersIcon,
} from "../ui/Icons";

const valueCards = [
  {
    icon: <GlobeIcon size={26} />,
    title: "One global organisation",
    description: "A single parent brand connecting multiple specialist service areas with a consistent professional standard.",
  },
  {
    icon: <BriefcaseIcon size={26} />,
    title: "Six focused departments",
    description: "Dedicated capabilities across technology, accounting, conveyancing, civil engineering, real estate and home loans.",
  },
  {
    icon: <UsersIcon size={26} />,
    title: "Coordinated client support",
    description: "A clear starting point for every enquiry, including requirements that involve more than one service area.",
  },
  {
    icon: <LayersIcon size={26} />,
    title: "Practical delivery",
    description: "Defined responsibilities, transparent communication and an engagement model shaped around each requirement.",
  },
];

const businessAreas = [
  {
    number: "01",
    title: "Technology Services",
    description: "Applications, digital platforms, automation, cloud delivery and digital growth.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82",
    alt: "Detailed blue electronic circuit board representing technology services",
  },
  {
    number: "02",
    title: "Accounting Services",
    description: "Structured bookkeeping, reporting, accounting and business administration support.",
    href: "/accounting",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=82",
    alt: "Financial documents and calculator arranged for professional accounting work",
  },
  {
    number: "03",
    title: "Conveyancing Services",
    description: "Coordinated support for property contracts, transfers, settlements and documentation.",
    href: "/conveyancing",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=82",
    alt: "House keys and property documents representing conveyancing support",
  },
  {
    number: "04",
    title: "Civil Engineering Services",
    description: "Planning, documentation, coordination and practical project-support services.",
    href: "/civil-engineering",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82",
    alt: "Civil engineering team reviewing plans at a construction site",
  },
  {
    number: "05",
    title: "Real Estate Services",
    description: "Property sales, purchases, leasing, management and market-support services.",
    href: "/real-estate",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=82",
    alt: "Contemporary residential property representing real estate services",
  },
  {
    number: "06",
    title: "Home Loan Services",
    description: "Guided support for home buyers, refinancing and property-investment lending enquiries.",
    href: "/home-loans",
    image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=82",
    alt: "Modern family home representing home loan support",
  },
];

const engagementSteps = [
  {
    title: "Understand your requirement",
    description: "We clarify your objectives, priorities and the type of specialist support required.",
  },
  {
    title: "Connect the right department",
    description: "Your enquiry is directed to the department with the most relevant capability and responsibility.",
  },
  {
    title: "Confirm scope and next steps",
    description: "The responsible team outlines the service pathway, expected inputs and commercial approach.",
  },
  {
    title: "Deliver with visibility",
    description: "Communication, milestones and responsibilities remain clear throughout the engagement.",
  },
];

export default function CorporateOverview() {
  return (
    <>
      <section className="corporate-section bg-background" aria-labelledby="overview-heading">
        <div className="container">
          <div className="corporate-heading-grid">
            <div>
              <p className="corporate-eyebrow">Who we are</p>
              <h2 id="overview-heading" className="corporate-title">
                Connected expertise for a changing business environment.
              </h2>
            </div>
            <p className="corporate-lead">
              ValoSync Global is the parent organisation for focused business, property and professional-service departments. We make specialist support easier to access through one coordinated group.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
            {valueCards.map((item) => (
              <article key={item.title} className="group min-h-64 bg-white p-7 transition-colors hover:bg-surface lg:p-8">
                <span className="corporate-icon">{item.icon}</span>
                <h3 className="mt-10 text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="departments" className="corporate-section bg-surface" aria-labelledby="departments-heading">
        <div className="container">
          <div className="corporate-heading-grid">
            <div>
              <p className="corporate-eyebrow">Our departments</p>
              <h2 id="departments-heading" className="corporate-title">
                Six specialist areas. Equal importance. One trusted organisation.
              </h2>
            </div>
            <p className="corporate-lead">
              Each department has dedicated capabilities, its own service pathway and equal standing within ValoSync Global. Select the area that best matches your requirement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {businessAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-primary-dark">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent" aria-hidden="true" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-primary-dark/70 px-3 py-1 text-xs font-bold tracking-widest text-gold backdrop-blur">
                    {area.number}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{area.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Explore department <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="corporate-industry-band" aria-labelledby="connected-heading">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="corporate-eyebrow text-gold">Connected service model</p>
            <h2 id="connected-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The right expertise, without navigating separate organisations.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Some requirements sit within one department. Others may involve finance, property, engineering or technology together. Our umbrella structure provides a clear starting point.
            </p>
            <Button as="link" href="/contact" variant="gold" size="md" className="mt-8" rightIcon={<ArrowRightIcon size={17} />}>
              Discuss your requirements
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Dedicated department expertise",
              "Coordinated initial assessment",
              "Clear ownership and communication",
              "Professional service standards",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 border-b border-white/15 py-5 text-sm font-semibold text-white">
                <span className="mt-0.5 text-gold"><CheckIcon size={17} /></span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="corporate-section bg-background" aria-labelledby="engagement-heading">
        <div className="container">
          <div className="corporate-heading-grid">
            <div>
              <p className="corporate-eyebrow">How we engage</p>
              <h2 id="engagement-heading" className="corporate-title">
                A clear pathway from enquiry to accountable delivery.
              </h2>
            </div>
            <p className="corporate-lead">
              Our approach is designed to make a diversified service organisation simple to navigate while preserving specialist ownership within every department.
            </p>
          </div>

          <div className="mt-12 border-t border-border">
            {engagementSteps.map((step, index) => (
              <article key={step.title} className="grid gap-5 border-b border-border py-8 lg:grid-cols-[80px_0.8fr_1.2fr] lg:gap-10">
                <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                <p className="text-sm leading-7 text-text-secondary">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="corporate-trust-panel mt-12">
            <div>
              <p className="corporate-eyebrow">The ValoSync standard</p>
              <h3 className="text-2xl font-bold text-text-primary sm:text-3xl">
                Specialist knowledge, coordinated service and transparent communication.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <ShieldIcon size={20} />, label: "Responsible service delivery" },
                { icon: <UsersIcon size={20} />, label: "Relevant specialist teams" },
                { icon: <GlobeIcon size={20} />, label: "Global business perspective" },
                { icon: <LayersIcon size={20} />, label: "Connected department model" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 text-sm font-semibold text-text-primary">
                  <span className="text-primary">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
