import SectionHeading from "../ui/SectionHeading";
import { CheckIcon } from "../ui/Icons";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by deeply understanding your business, goals, users, and challenges through collaborative workshops and thorough research.",
    highlights: [
      "Business analysis & goals",
      "Competitor research",
      "Technical discovery",
      "Project roadmap",
    ],
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our designers craft intuitive, high-fidelity interfaces and interactive prototypes, ensuring the best user experience before development.",
    highlights: [
      "UI/UX wireframing",
      "Visual design systems",
      "Interactive prototypes",
      "User testing feedback",
    ],
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "We build your solution using proven agile methodologies with regular sprints, demos, and transparent progress tracking.",
    highlights: [
      "Iterative sprints",
      "Clean, scalable code",
      "Weekly progress updates",
      "Quality assurance",
    ],
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "After rigorous testing, we deploy your solution and provide ongoing support, maintenance, and optimization to ensure lasting success.",
    highlights: [
      "Performance testing",
      "Secure deployment",
      "Training & documentation",
      "24/7 post-launch support",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--surface-color)" }}
      aria-labelledby="process-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Deliver Successful Projects"
          description="Our proven 4-step methodology ensures your project is delivered on time, within budget, and to the highest quality standards—every single time."
          className="mb-16"
        />

        <div className="relative">
          <div
            className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5"
            style={{
              background: `linear-gradient(90deg, transparent, var(--border-color), var(--border-color), transparent)`,
            }}
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <article
                key={step.step}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="relative h-full p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                  style={{
                    background: "var(--background-color)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none transition-all duration-500 group-hover:opacity-10 group-hover:scale-125"
                    style={{
                      background:
                        "radial-gradient(circle at top right, var(--accent-color), transparent 70%)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="text-sm font-bold uppercase tracking-widest"
                        style={{ color: "var(--accent-color)" }}
                      >
                        Step {step.step}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-extrabold transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "rgb(6 182 212 / 0.1)",
                          color: "var(--accent-color)",
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <h3
                      className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-accent"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {step.description}
                    </p>

                    <ul className="space-y-2.5">
                      {step.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          <span
                            className="flex-shrink-0 inline-flex items-center justify-center w-4 h-4 rounded-full mt-0.5"
                            style={{
                              background: "rgb(6 182 212 / 0.15)",
                              color: "var(--accent-color)",
                            }}
                          >
                            <CheckIcon size={10} />
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
