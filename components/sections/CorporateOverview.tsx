import Link from "next/link";
import Button from "../ui/Button";
import {
  ArrowRightIcon,
  AutomationIcon,
  BrainIcon,
  BriefcaseIcon,
  CheckIcon,
  CodeIcon,
  GlobeIcon,
  LayersIcon,
  MarketingIcon,
  ShieldIcon,
  UsersIcon,
} from "../ui/Icons";

const valueCards = [
  {
    icon: <BriefcaseIcon size={26} />,
    title: "Business-led solutions",
    description:
      "We begin with your operational priorities, then shape the right technology and delivery model around them.",
  },
  {
    icon: <CodeIcon size={26} />,
    title: "Modern technology",
    description:
      "Practical platforms, applications and integrations engineered for reliability, usability and long-term value.",
  },
  {
    icon: <UsersIcon size={26} />,
    title: "Cross-functional expertise",
    description:
      "Strategy, design, engineering, QA and growth specialists coordinated through one accountable delivery team.",
  },
  {
    icon: <LayersIcon size={26} />,
    title: "Scalable execution",
    description:
      "Clear phases, measurable milestones and maintainable architecture that can evolve as your business grows.",
  },
];

const services = [
  {
    number: "01",
    icon: <CodeIcon size={25} />,
    title: "Custom Software & Applications",
    description:
      "Purpose-built web and mobile applications that simplify workflows, improve visibility and support business growth.",
    href: "/services/custom-software",
  },
  {
    number: "02",
    icon: <LayersIcon size={25} />,
    title: "CRM & Business Platforms",
    description:
      "Connected systems for customers, projects, referrals, operations, reporting and cross-team collaboration.",
    href: "/services/crm-development",
  },
  {
    number: "03",
    icon: <BrainIcon size={25} />,
    title: "AI & Intelligent Automation",
    description:
      "Practical automation for repetitive processes, document handling, customer engagement and internal knowledge.",
    href: "/services/ai-automation",
  },
  {
    number: "04",
    icon: <GlobeIcon size={25} />,
    title: "Web & Digital Experience",
    description:
      "Fast, accessible and SEO-ready websites designed to communicate credibility and convert business enquiries.",
    href: "/services/web-development",
  },
  {
    number: "05",
    icon: <AutomationIcon size={25} />,
    title: "Cloud & DevOps Support",
    description:
      "Reliable deployment, infrastructure, monitoring and delivery practices for secure, scalable digital products.",
    href: "/services/cloud-devops",
  },
  {
    number: "06",
    icon: <MarketingIcon size={25} />,
    title: "Digital Growth Services",
    description:
      "SEO, paid campaigns, content and social media support aligned to visibility, demand generation and measurable leads.",
    href: "/services/digital-marketing",
  },
];

const industries = [
  "Professional Services",
  "Finance & Accounting",
  "Real Estate",
  "Civil Engineering",
  "Home Loans",
  "Healthcare",
  "Retail & Commerce",
  "Logistics",
];

const deliveryGroups = [
  {
    title: "Your business challenge",
    description:
      "We clarify the operational problem, stakeholders, risks and expected outcomes before recommending a solution.",
    points: ["Discovery workshops", "Process mapping", "Scope and priority definition"],
  },
  {
    title: "Technology enablement",
    description:
      "We translate approved priorities into usable, secure and maintainable digital systems.",
    points: ["Application engineering", "Integrations and automation", "Cloud-ready delivery"],
  },
  {
    title: "Controlled execution",
    description:
      "Transparent milestones and review cycles keep business and delivery teams aligned.",
    points: ["Dedicated coordination", "Quality assurance", "Progress visibility"],
  },
  {
    title: "Continuous improvement",
    description:
      "After launch, we support stability, adoption and phased enhancement based on real operational feedback.",
    points: ["Handover and training", "Maintenance options", "Growth roadmap"],
  },
];

export default function CorporateOverview() {
  return (
    <>
      <section className="corporate-section bg-background" aria-labelledby="value-heading">
        <div className="container">
          <div className="corporate-heading-grid">
            <div>
              <p className="corporate-eyebrow">What we do</p>
              <h2 id="value-heading" className="corporate-title">
                Simplifying operations for a complex business world.
              </h2>
            </div>
            <p className="corporate-lead">
              ValoSync Global combines business understanding, technology and disciplined execution to create solutions that are practical today and ready for tomorrow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px mt-12 overflow-hidden rounded-2xl border border-border bg-border">
            {valueCards.map((item) => (
              <article key={item.title} className="group bg-white p-7 lg:p-8 min-h-64 transition-colors hover:bg-surface">
                <span className="corporate-icon">{item.icon}</span>
                <h3 className="mt-10 text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="corporate-section bg-surface" aria-labelledby="services-heading">
        <div className="container">
          <div className="corporate-heading-grid">
            <div>
              <p className="corporate-eyebrow">Integrated services</p>
              <h2 id="services-heading" className="corporate-title">
                One delivery partner across strategy, technology and growth.
              </h2>
            </div>
            <div>
              <p className="corporate-lead">
                Our service portfolio supports the full digital lifecycle—from defining the right solution through implementation, launch and ongoing improvement.
              </p>
              <Link href="/services" className="corporate-text-link">
                View all services <ArrowRightIcon size={17} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
            {services.map((service) => (
              <article key={service.title} className="corporate-service-card group">
                <div className="flex items-start justify-between gap-4">
                  <span className="corporate-icon">{service.icon}</span>
                  <span className="text-xs font-bold tracking-widest text-text-muted">{service.number}</span>
                </div>
                <h3 className="mt-8 text-xl font-bold text-text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{service.description}</p>
                <Link href={service.href} className="corporate-card-link" aria-label={`Learn more about ${service.title}`}>
                  Learn more <ArrowRightIcon size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="corporate-industry-band" aria-labelledby="industries-heading">
        <div className="container">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20">
            <div>
              <p className="corporate-eyebrow text-gold">Industries</p>
              <h2 id="industries-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Domain-aware solutions, built around real operations.
              </h2>
              <p className="mt-5 max-w-xl text-sm sm:text-base leading-7 text-slate-300">
                We combine technology capability with an understanding of how service-based and operational businesses actually work.
              </p>
              <Button as="link" href="/industries" variant="gold" size="md" className="mt-8" rightIcon={<ArrowRightIcon size={17} />}>
                Explore industries
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 border-t border-white/15">
              {industries.map((industry, index) => (
                <Link
                  key={industry}
                  href="/industries"
                  className="group flex items-center justify-between gap-4 py-5 border-b border-white/15 sm:odd:pr-6 sm:even:pl-6 text-sm font-semibold text-white hover:text-gold transition-colors"
                >
                  <span><span className="mr-3 text-xs text-slate-500">{String(index + 1).padStart(2, "0")}</span>{industry}</span>
                  <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="corporate-section bg-background" aria-labelledby="delivery-heading">
        <div className="container">
          <div className="corporate-heading-grid">
            <div>
              <p className="corporate-eyebrow">What we deliver</p>
              <h2 id="delivery-heading" className="corporate-title">
                Business outcomes supported by clear, accountable execution.
              </h2>
            </div>
            <p className="corporate-lead">
              Our approach connects people, process and technology. Every engagement is structured around visibility, quality and measurable progress.
            </p>
          </div>

          <div className="mt-12 border-t border-border">
            {deliveryGroups.map((group, index) => (
              <article key={group.title} className="grid lg:grid-cols-[80px_0.8fr_1.2fr] gap-5 lg:gap-10 py-8 border-b border-border">
                <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{group.description}</p>
                </div>
                <ul className="grid sm:grid-cols-3 gap-3 lg:pt-1">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-semibold text-text-primary">
                      <span className="mt-0.5 text-primary"><CheckIcon size={16} /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 corporate-trust-panel">
            <div>
              <p className="corporate-eyebrow">Why ValoSync</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                A focused team, transparent communication and solutions built for practical adoption.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <ShieldIcon size={20} />, label: "Security-conscious delivery" },
                { icon: <UsersIcon size={20} />, label: "Cross-functional project team" },
                { icon: <GlobeIcon size={20} />, label: "Global delivery perspective" },
                { icon: <LayersIcon size={20} />, label: "Scalable solution architecture" },
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
