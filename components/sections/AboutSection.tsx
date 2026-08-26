import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import {
  ArrowRightIcon,
  CheckIcon,
  AwardIcon,
  UsersIcon,
  BriefcaseIcon,
  ShieldIcon,
  TargetIcon,
  StarIcon,
} from "../ui/Icons";

export default function AboutSection() {
  const coreValues = [
    "Australian Market Focused Strategy",
    "Agile & Transparent Development",
    "Dedicated Cross-Functional Team",
    "100% Data Security & Confidentiality",
    "Post-Launch Maintenance & SLA",
    "Tailored ROI-Driven Solutions",
  ];

  const highlights = [
    {
      icon: <AwardIcon size={24} />,
      title: "Quality First",
      description: "Rigorous QA testing, code review, and CI/CD standards.",
    },
    {
      icon: <UsersIcon size={24} />,
      title: "Dedicated Teams",
      description: "Full-stack engineers, UI designers, and project managers.",
    },
    {
      icon: <BriefcaseIcon size={24} />,
      title: "Scalable Architecture",
      description: "Cloud-native infrastructure built to grow with your business.",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background-color)" }}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card Cluster */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-8 border bg-gradient-to-br from-slate-900 via-[#0B1B3D] to-slate-900 text-white shadow-2xl overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3 mb-8">
                <span className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <ShieldIcon size={28} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Velosync Global Standard
                  </h3>
                  <p className="text-xs text-slate-300">
                    Built for Enterprise Performance & Lead Growth
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-3xl font-extrabold text-cyan-400 block mb-1">
                    100%
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Confidential NDA
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Your IP & data remains completely protected.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-3xl font-extrabold text-cyan-400 block mb-1">
                    AU
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Targeted Lead Tech
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Engineered to capture high-value market leads.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 text-cyan-400 text-xs font-bold"
                      >
                        <StarIcon size={14} />
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      5-Star Technology Delivery
                    </p>
                    <p className="text-xs text-slate-300">
                      Top-Tier Engineering & Support
                    </p>
                  </div>
                </div>
                <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <TargetIcon size={20} />
                </span>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white dark:bg-[#0F172A] border shadow-xl items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <StarIcon size={22} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  99.9% Uptime SLA
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Reliable Infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Text */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="About Velosync Global"
              title="Architecting Digital Solutions That Drive Australian Business Success"
              description="Velosync Global is a forward-looking technology company specializing in custom software development, custom CRM systems, AI automation, and ROI-centric digital marketing. We empower businesses to operate smarter and scale faster."
              align="left"
              className="mb-8"
              maxWidth="none"
            />

            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {coreValues.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span
                    className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-md mt-0.5"
                    style={{
                      background: "rgba(6, 182, 212, 0.15)",
                      color: "var(--accent-color)",
                    }}
                  >
                    <CheckIcon size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border transition-all duration-300 hover:shadow-md"
                  style={{
                    borderColor: "var(--border-color)",
                    background: "var(--surface-color)",
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-2"
                    style={{
                      background: "rgba(6, 182, 212, 0.1)",
                      color: "var(--accent-color)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              as="link"
              href="/about"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRightIcon size={18} />}
            >
              Learn More About Our Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
