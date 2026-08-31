import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import {
  CodeIcon,
  BrainIcon,
  AutomationIcon,
  LayersIcon,
  GlobeIcon,
  MarketingIcon,
  ArrowRightIcon,
  SmartphoneIcon,
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
    icon: <SmartphoneIcon size={28} />,
    title: "Mobile App Development",
    description:
      "Design and engineer native iOS (Swift), Android (Kotlin), and cross-platform (Flutter & React Native) mobile applications with seamless offline sync.",
    href: "/services/mobile-app-development",
  },
  {
    icon: <CodeIcon size={28} />,
    title: "Application Development",
    description:
      "Build web, mobile and business applications using Laravel, PHP, .NET, MEAN, MERN and technologies suited to your operating requirements.",
    href: "/services/application-development",
  },
  {
    icon: <BrainIcon size={28} />,
    title: "AI Automation",
    description:
      "Implement AI-powered intelligent solutions to automate repetitive tasks, customer communication, data processing, and decision-making workflows.",
    href: "/services/ai-automation",
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
      "Strengthen your digital presence through SEO, content, paid campaigns and social media management aligned with target commercial audiences.",
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
          badge="Technology Department"
          title="Technology Services and Digital Capabilities"
          // description="From custom software and CRM platforms to cloud delivery and digital growth, we help businesses choose and implement technology that creates practical value."
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
            Talk to Our Technology Team
          </Button>
        </div>
      </div>
    </section>
  );
}
