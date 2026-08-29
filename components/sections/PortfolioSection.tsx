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
    title: "Lead Generation Portal",
    category: "Web & Automation",
    metric: "3.5x Qualified Inquiries",
    description:
      "High-converting landing architecture and automated quote engines specifically tailored to attract and engage commercial clients.",
    href: "/portfolio/lead-portal",
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
      className="section-padding relative bg-[#F7F9FC]"
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Proven Impact"
            title="Featured Case Studies & Workflows"
            description="Explore how Valosync Global delivers tailored software engineering, custom CRM systems, and AI business automation for enterprise growth."
            align="left"
            maxWidth="3xl"
            className="mb-0"
          />
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#0D47A1] transition-colors duration-200 hover:gap-3"
          >
            Explore Case Studies
            <ArrowRightIcon size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolio.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D47A1]/50 rounded-3xl"
            >
              <article className="relative flex flex-col h-full rounded-3xl border border-[#D9E1EC] bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#0D47A1]/40">
                {/* Visual Header Box: Deep Blue to Royal Blue */}
                <div className="relative p-6 bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white flex flex-col justify-between h-48 overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="p-2 rounded-xl bg-white/10 text-[#D4AF37]">
                      {project.icon}
                    </span>
                  </div>

                  <div className="z-10 mt-auto">
                    <span className="text-xs font-semibold text-slate-300 block uppercase tracking-wider mb-0.5">
                      KEY IMPACT METRIC
                    </span>
                    <span className="text-xl font-extrabold text-[#D4AF37]">
                      {project.metric}
                    </span>
                  </div>

                  {/* Ambient Glow Element */}
                  <div
                    className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0D47A1]/30 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6 lg:p-7">
                  <h3 className="text-lg font-bold mb-3 text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#0D47A1]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-6 text-[#4A5568]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F0F4FA]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#F7F9FC] text-[#4A5568] border border-[#D9E1EC]"
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
