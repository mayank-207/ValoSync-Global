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
    "Market Understanding",
    "Clear and Collaborative Delivery",
    "Cross-Functional Project Support",
    "Professional and Responsible Delivery",
    "Ongoing Client Support Options",
    "Services Aligned to Your Requirements",
  ];

  const highlights = [
    {
      icon: <AwardIcon size={24} />,
      title: "Quality First",
      description: "Consistent standards and clear review points across engagements.",
    },
    {
      icon: <UsersIcon size={24} />,
      title: "Dedicated Teams",
      description: "Specialists aligned to the department relevant to your needs.",
    },
    {
      icon: <BriefcaseIcon size={24} />,
      title: "Connected Expertise",
      description: "Distinct departments supported by one coordinated organisation.",
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
            <div className="relative rounded-3xl p-8 border border-[#0D47A1]/30 bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] text-white shadow-2xl overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3 mb-8">
                <span className="p-3 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                  <ShieldIcon size={28} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    ValoSync Global Standard
                  </h3>
                  <p className="text-xs text-slate-300">
                    Specialist Expertise. Connected Service.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-3xl font-extrabold text-[#D4AF37] block mb-1">
                    Secure
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Project Protection
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Confidentiality measures agreed for each engagement.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-3xl font-extrabold text-[#D4AF37] block mb-1">
                    AU
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Market Alignment
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Solutions shaped around business needs.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#071A3D] border-2 border-[#041026] text-[#D4AF37] text-xs font-bold"
                      >
                        <StarIcon size={14} />
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Coordinated Department Support
                    </p>
                    <p className="text-xs text-slate-300">
                      A clear pathway from enquiry to delivery
                    </p>
                  </div>
                </div>
                <span className="p-2 rounded-xl bg-[#0D47A1]/40 text-[#D4AF37]">
                  <TargetIcon size={20} />
                </span>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white border border-[#D9E1EC] shadow-xl items-center gap-3">
              <span className="p-2.5 rounded-xl bg-[#D4AF37]/15 text-[#B89224]">
                <StarIcon size={22} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">
                  Post-Launch Support
                </p>
                <p className="text-xs text-[#4A5568]">
                  Support aligned to each service
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Text */}
          <div className="lg:col-span-6">
            <SectionHeading
              // eyebrow="About Valosync Global"
              title="One organisation, multiple specialist departments."
              // description="ValoSync Global partners with businesses to build custom software, CRM platforms, web applications and connected digital solutions. We combine business understanding with practical technology to improve operations and support long-term growth."
              align="left"
              className="mb-8"
              maxWidth="none"
            />

            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {coreValues.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium text-[#1A1A1A]"
                >
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-md mt-0.5 bg-[#0D47A1]/10 text-[#0D47A1]">
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
                  className="p-4 rounded-xl border border-[#D9E1EC] bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#0D47A1]/30"
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-2 bg-[#0D47A1]/10 text-[#0D47A1]">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold mb-1 text-[#1A1A1A]">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#4A5568]">
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
              Learn More About ValoSync Global
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
