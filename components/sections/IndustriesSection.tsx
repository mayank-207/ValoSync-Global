import SectionHeading from "../ui/SectionHeading";

const industries = [
  {
    name: "Healthcare",
    description: "HIPAA-compliant EHR, telemedicine, and patient engagement platforms",
  },
  {
    name: "Fintech & Banking",
    description: "Secure payment gateways, lending platforms, and compliance solutions",
  },
  {
    name: "E-Commerce & Retail",
    description: "Headless commerce, POS systems, and omnichannel retail solutions",
  },
  {
    name: "Education & EdTech",
    description: "LMS platforms, virtual classrooms, and e-learning ecosystems",
  },
  {
    name: "Manufacturing",
    description: "IoT integration, supply chain optimization, and ERP solutions",
  },
  {
    name: "Logistics & Transportation",
    description: "Fleet management, route optimization, and real-time tracking systems",
  },
  {
    name: "Real Estate",
    description: "Property management platforms, virtual tours, and CRM systems",
  },
  {
    name: "Hospitality & Travel",
    description: "Booking engines, PMS integration, and guest experience solutions",
  },
];

export default function IndustriesSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--surface-color)" }}
      aria-labelledby="industries-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Deep Expertise Across Key Sectors"
          description="We bring industry-specific knowledge and proven frameworks to deliver solutions that address the unique challenges and opportunities of your sector."
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group relative p-6 lg:p-8 rounded-2xl border cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:z-10"
              style={{
                background: "var(--background-color)",
                borderColor: "var(--border-color)",
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: "2px solid var(--accent-color)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <h3
                  className="text-base lg:text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-accent"
                  style={{ color: "var(--text-primary)" }}
                >
                  {industry.name}
                </h3>
                <p
                  className="text-xs lg:text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
