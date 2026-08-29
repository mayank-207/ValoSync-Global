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
      "After rigorous testing, we deploy your solution and offer ongoing support, maintenance and improvement options based on your operating needs.",
    highlights: [
      "Performance testing",
      "Secure deployment",
      "Training & documentation",
      "Post-launch support options",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section
      className="section-padding relative bg-[#F7F9FC]"
      aria-labelledby="process-heading"
    >
      <div className="container cursor-pointer">
        <SectionHeading
          // eyebrow="Our Process"
          title="Our Development Process"
          // description="Our four-stage delivery approach creates shared clarity from initial discovery through launch and ongoing improvement."
          className="mb-16"
        />

        <div className="relative">
          <div
            className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-[#D9E1EC]"
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
                  className="relative h-full p-8 rounded-2xl border border-[#D9E1EC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0B3D91]/40 overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 pointer-events-none transition-all duration-300 group-hover:scale-125"
                    style={{
                      background:
                        "radial-gradient(circle at top right, #0D47A1, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D47A1]">
                        {step.title}
                      </span>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-extrabold bg-[#0D47A1]/10 text-[#0D47A1] border border-[#0D47A1]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0D47A1] group-hover:text-white">
                        {index + 1}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-6 text-[#4A5568]">
                      {step.description}
                    </p>

                    <ul className="space-y-2.5">
                      {step.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm font-medium text-[#1A1A1A]"
                        >
                          <span className="flex-shrink-0 inline-flex items-center justify-center w-4 h-4 rounded-full mt-0.5 bg-[#D4AF37]/20 text-[#B89224]">
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
