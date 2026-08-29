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
    title: "Market Understanding",
    description:
      "We consider local audiences, business expectations and commercial priorities when shaping each solution.",
  },
  {
    icon: <UsersIcon size={24} />,
    title: "Collaborative Delivery Team",
    description:
      "Development, design, QA and project coordination work together around agreed outcomes.",
  },
  {
    icon: <ZapIcon size={24} />,
    title: "Transparent Project Delivery",
    description:
      "Clear milestones, regular progress updates and practical decision points keep stakeholders informed.",
  },
  {
    icon: <SparkleIcon size={24} />,
    title: "AI & Business Automation",
    description:
      "Practical automation designed to reduce repetitive work and connect everyday business processes.",
  },
  {
    icon: <ShieldIcon size={24} />,
    title: "Security-Conscious Approach",
    description:
      "Confidentiality, access controls and security requirements are considered from project discovery.",
  },
  {
    icon: <LayersIcon size={24} />,
    title: "Support Beyond Launch",
    description:
      "Maintenance and improvement options help your solution evolve after its initial release.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="section-padding relative bg-white"
      aria-labelledby="why-choose-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why Businesses Partner With ValoSync Global"
              description="We combine business understanding, suitable technologies and transparent delivery to build reliable digital solutions."
              align="left"
              className="mb-8"
            />

            <div className="p-8 rounded-3xl border border-[#D9E1EC] bg-[#F7F9FC] shadow-sm mb-8 relative overflow-hidden">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="p-3 rounded-2xl bg-[#0D47A1]/10 text-[#0D47A1] border border-[#0D47A1]/20 flex-shrink-0">
                    <ShieldIcon size={24} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">
                      Quality-Focused and Transparent Delivery
                    </h3>
                    <p className="text-sm mt-1 text-[#4A5568] leading-relaxed">
                      Every engagement follows a structured approach to scoping, delivery, quality assurance and handover.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 pt-4 border-t border-[#D9E1EC] text-xs">
                  <div>
                    <span className="block text-2xl font-extrabold text-[#0D47A1]">
                      Clear
                    </span>
                    <span className="text-[#718096] font-medium">Milestones & Updates</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-[#0D47A1]">
                      Ongoing
                    </span>
                    <span className="text-[#718096] font-medium">Support Options</span>
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
                className="bg-[#F7F9FC] hover:bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
