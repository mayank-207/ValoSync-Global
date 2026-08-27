import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import {
  CodeIcon,
  CrmIcon,
  BrainIcon,
  AutomationIcon,
  LayersIcon,
  GlobeIcon,
  MarketingIcon,
  ArrowRightIcon,
} from "../ui/Icons";
import Button from "../ui/Button";

const services = [
  {
    icon: <CodeIcon size={28} />,
    title: "Custom Software Development",
    description:
      "Develop tailored, scalable software solutions built around your unique business workflows, operational requirements, and growth strategy.",
    href: "/services/custom-software",
  },
  {
    icon: <CrmIcon size={28} />,
    title: "CRM Development",
    description:
      "Build custom CRM systems to streamline customer management, automate sales pipelines, organize lead tracking, and manage business operations.",
    href: "/services/crm-development",
  },
  {
    icon: <BrainIcon size={28} />,
    title: "AI Automation",
    description:
      "Implement AI-powered intelligent solutions to automate repetitive tasks, customer communication, data processing, and decision-making workflows.",
    href: "/services/ai-automation",
  },
  {
    icon: <AutomationIcon size={28} />,
    title: "Business Process Automation",
    description:
      "Automate complex manual business workflows to improve operational efficiency, eliminate human errors, and drastically reduce repetitive work.",
    href: "/services/business-automation",
  },
  {
    icon: <LayersIcon size={28} />,
    title: "Web Development",
    description:
      "Build responsive websites, WordPress solutions, web applications and client portals using technologies suited to your business requirements.",
    href: "/services/web-development",
  },
  {
    icon: <GlobeIcon size={28} />,
    title: "Cloud & DevOps Support",
    description:
      "Improve deployment reliability with cloud setup, CI/CD pipelines, containerisation, monitoring, backup planning and infrastructure optimisation.",
    href: "/services/cloud-devops",
  },
  {
    icon: <MarketingIcon size={28} />,
    title: "Digital Marketing & SEO",
    description:
      "Strengthen your digital presence through SEO, content, paid campaigns and social media management aligned with Australian audiences.",
    href: "/services/digital-marketing",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative"
      style={{ background: "var(--surface-color)" }}
      aria-labelledby="services-heading"
    >
      <div className="container">
        <SectionHeading
          badge="Our Services"
          title="Digital Solutions Built Around Real Business Needs"
          description="From custom software and CRM platforms to cloud delivery and digital growth, we help businesses choose and implement technology that creates practical value."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            as="link"
            href="/contact"
            variant="outline"
            size="lg"
            rightIcon={<ArrowRightIcon size={18} />}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
