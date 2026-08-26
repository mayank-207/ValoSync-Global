import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import { ArrowRightIcon, ZapIcon, BrainIcon, LayersIcon } from "../ui/Icons";

const portfolio = [
  {
    title: "AI-Powered Enterprise CRM Platform",
    category: "CRM & AI Automation",
    metric: "70% Faster Deal Closure",
    description:
      "Customized CRM solution with automated pipeline tracking, lead scoring, and intelligent follow-up scheduling built for high-touch service firms.",
    href: "/portfolio/ai-enterprise-crm",
    icon: <BrainIcon size={28} />,
    tags: ["Next.js", "AI Lead Scoring", "CRM Engine"],
  },
  {
    title: "Australian Lead Generation Portal",
    category: "Web & Automation",
    metric: "3.5x Qualified Inquiries",
    description:
      "High-converting landing architecture and automated quote engines specifically tailored to attract and engage Australian commercial clients.",
    href: "/portfolio/australian-lead-portal",
    icon: <ZapIcon size={28} />,
    tags: ["React 19", "Automated Workflows", "SEO Suite"],
  },
  {
    title: "Multi-Tenant Business ERP & Billing System",
    category: "Custom Software",
    metric: "99.9% Automated Billing",
    description:
      "Tailored cloud ERP managing multi-currency invoices, staff schedules, and project milestone approvals across global delivery teams.",
    href: "/portfolio/multi-tenant-erp",
    icon: <LayersIcon size={28} />,
    tags: ["Cloud Architecture", "Custom ERP", "Security"],
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="section-padding relative"
      style={{ background: "var(--background-color)" }}
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Proven Impact"
            title="Featured Case Studies & Workflows"
            description="Explore how Velosync Global delivers tailored software engineering, custom CRM systems, and AI business automation for enterprise growth."
            align="left"
            maxWidth="3xl"
            className="mb-0"
          />
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 hover:gap-3"
            style={{ color: "var(--accent-color)" }}
          >
            Explore Case Studies
            <ArrowRightIcon size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolio.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-3xl"
            >
              <article
                className="relative flex flex-col h-full rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white dark:bg-[#0F172A]"
                style={{
                  borderColor: "var(--border-color)",
                }}
              >
                {/* Visual Header Box */}
                <div className="relative p-6 bg-gradient-to-br from-[#0B1B3D] via-[#1E3A8A] to-[#0F172A] text-white flex flex-col justify-between h-48 overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="p-2 rounded-xl bg-white/10 text-cyan-400">
                      {project.icon}
                    </span>
                  </div>

                  <div className="z-10 mt-auto">
                    <span className="text-xs font-semibold text-slate-300 block uppercase tracking-wider mb-0.5">
                      KEY IMPACT METRIC
                    </span>
                    <span className="text-xl font-extrabold text-cyan-400">
                      {project.metric}
                    </span>
                  </div>

                  {/* Ambient Glow Element */}
                  <div
                    className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6 lg:p-7">
                  <h3
                    className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-cyan-500"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-surface text-text-secondary border"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
