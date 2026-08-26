import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";
import {
  ShieldIcon,
  SparkleIcon,
  UsersIcon,
  LayersIcon,
  TargetIcon,
  ZapIcon,
} from "../ui/Icons";

const features = [
  {
    icon: <TargetIcon size={24} />,
    title: "Australian Lead Focus",
    description:
      "Engineered to capture and convert high-value leads across Australian markets with localized strategies.",
  },
  {
    icon: <UsersIcon size={24} />,
    title: "Dedicated Cross-Functional Team",
    description:
      "Direct access to senior developers, UI designers, QA specialists, and dedicated project managers.",
  },
  {
    icon: <ZapIcon size={24} />,
    title: "Agile Rapid Delivery",
    description:
      "Iterative 2-week sprint delivery cycles with total transparency and continuous deployment updates.",
  },
  {
    icon: <SparkleIcon size={24} />,
    title: "AI & Business Automation",
    description:
      "Cutting-edge AI automation models to streamline manual business processes and cut operational costs.",
  },
  {
    icon: <ShieldIcon size={24} />,
    title: "Strict Security & NDA",
    description:
      "100% data protection, enterprise confidentiality agreements, and secure cloud infrastructure.",
  },
  {
    icon: <LayersIcon size={24} />,
    title: "End-to-End SLA Support",
    description:
      "From technical consultation to post-launch maintenance, bug fixes, and continuous feature scaling.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="section-padding relative"
      style={{ background: "var(--background-color)" }}
      aria-labelledby="why-choose-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The Velosync Global Engineering Advantage"
              description="We combine deep technical expertise, robust cloud architecture, and modern AI automation to build high-ROI digital solutions for businesses."
              align="center"
            />

            <div
              className="p-8 rounded-3xl border mb-16 relative overflow-hidden"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--surface-color)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                    <ShieldIcon size={24} />
                  </span>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Enterprise Reliability & Transparent Delivery
                    </h3>
                    <p
                      className="text-sm mt-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Every project at Velosync Global is backed by strict quality assurance, transparent communication, and dedicated ongoing support.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 pt-4 border-t border-slate-700/60 text-xs">
                  <div>
                    <span className="block text-2xl font-extrabold text-cyan-400">
                      100%
                    </span>
                    <span className="text-slate-400">On-Time Sprint Record</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-cyan-400">
                      24/7
                    </span>
                    <span className="text-slate-400">Expert Technical Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
