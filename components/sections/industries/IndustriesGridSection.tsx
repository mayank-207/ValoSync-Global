import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryCard from "@/components/ui/IndustryCard";
import {
  AutomotiveIcon,
  HealthcareIcon,
  LogisticsIcon,
  FinanceIcon,
  RetailIcon,
  RealEstateIcon,
  ManufacturingIcon,
  EducationIcon,
  BriefcaseIcon,
} from "@/components/ui/Icons";

export const industriesData = [
  {
    id: "automotive",
    title: "Automotive & Smart Mobility",
    category: "Automotive",
    description:
      "Connected vehicle telematics, EV charging networks, automated spare parts supply chains, and high-performance dealership CRM software.",
    icon: <AutomotiveIcon size={28} />,
    keyFeatures: [
      "Connected Vehicle Telematics & CAN-Bus",
      "EV Fleet Charging & Battery Analytics",
      "Automated Dealership & Spare Parts SCM",
    ],
    metrics: "35% Faster Parts Dispatch",
    techStack: ["Next.js", "Python IoT", "MQTT", "AWS IoT Core"],
    highlight: false,
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    category: "Healthcare",
    description:
      "HIPAA/AHPRA compliant digital health solutions, automated patient intake, EHR/EMR integration, and AI-driven clinical workflow automation.",
    icon: <HealthcareIcon size={28} />,
    keyFeatures: [
      "Automated Patient Booking & Portal",
      "Compliant Telehealth & EHR Integration",
      "AI Medical Billing & Record Extraction",
    ],
    metrics: "45% Faster Patient Intake",
    techStack: ["React", "Next.js", "Python AI", "AWS Health"],
    highlight: false,
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    category: "Logistics",
    description:
      "Real-time fleet tracking portals, dispatch automation, inventory management systems, and automated shipment notification pipelines.",
    icon: <LogisticsIcon size={28} />,
    keyFeatures: [
      "Real-Time GPS & Dispatch Automation",
      "Warehouse Inventory CRM & ERP Sync",
      "Predictive Route Optimization",
    ],
    metrics: "30% Reduction in Logistics Overhead",
    techStack: ["Node.js", "PostgreSQL", "Google Maps API", "WebSockets"],
    highlight: false,
  },
  {
    id: "finance",
    title: "Financial Services & Fintech",
    category: "Finance",
    description:
      "Secure client onboarding portals, automated loan & credit approval engines, compliance tracking CRMs, and encrypted document management.",
    icon: <FinanceIcon size={28} />,
    keyFeatures: [
      "Automated KYC & Onboarding Engine",
      "Encrypted Document & Contract Vault",
      "Custom Financial CRM & Analytics",
    ],
    metrics: "99.9% Security & Compliance",
    techStack: ["Next.js", "TypeScript", "Python Security", "OAuth2"],
    highlight: false,
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    category: "Retail",
    description:
      "Custom multi-channel storefronts, inventory synchronization across channels, AI product recommendation engines, and customer retention CRMs.",
    icon: <RetailIcon size={28} />,
    keyFeatures: [
      "Custom Next.js Headless E-Commerce",
      "Automated Multi-Channel Inventory",
      "AI Loyalty & Lead Generation CRM",
    ],
    metrics: "3.5x Conversions Increase",
    techStack: ["Next.js", "Stripe API", "Tailwind CSS", "Shopify API"],
    highlight: false,
  },
  {
    id: "realestate",
    title: "Real Estate & Property",
    category: "Real Estate",
    description:
      "Property listing portals, automated lead nurturing CRMs, virtual property walkthrough integrations, and digital lease agreement management.",
    icon: <RealEstateIcon size={28} />,
    keyFeatures: [
      "Automated Buyer/Tenant Lead CRM",
      "Interactive Property Search Portal",
      "Digital Contract & Lease Automation",
    ],
    metrics: "60% Faster Lead Response Time",
    techStack: ["Next.js", "Python Automation", "REST APIs", "Mapbox"],
    highlight: false,
  },
  {
    id: "professional",
    title: "Professional Services",
    category: "Services",
    description:
      "Custom client portals, automated project time tracking, proposal generators, and end-to-end client engagement management.",
    icon: <BriefcaseIcon size={28} />,
    keyFeatures: [
      "Client Collaboration & File Portal",
      "Automated Proposal & Contract Billing",
      "Project Progress Dashboards",
    ],
    metrics: "25+ Hrs/Week Saved Per Team",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    highlight: false,
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Operations",
    category: "Manufacturing",
    description:
      "IoT data monitoring dashboards, automated shop-floor scheduling, quality control tracking, and custom ERP workflow software.",
    icon: <ManufacturingIcon size={28} />,
    keyFeatures: [
      "Shop-Floor Process Automation",
      "Inventory & Raw Materials CRM",
      "Quality Assurance & Defect Analytics",
    ],
    metrics: "40% Operational Efficiency Gain",
    techStack: ["Python", "React", "PostgreSQL", "Docker"],
    highlight: false,
  },
  {
    id: "education",
    title: "Education & EdTech",
    category: "Education",
    description:
      "Custom learning management systems (LMS), student enrolment portals, automated course scheduling, and interactive assessment modules.",
    icon: <EducationIcon size={28} />,
    keyFeatures: [
      "Student Enrolment & Payment Portal",
      "Interactive Learning Analytics",
      "Automated Certificate Generation",
    ],
    metrics: "95% Student Satisfaction",
    techStack: ["Next.js", "Node.js", "Tailwind CSS", "Vercel"],
    highlight: false,
  },
];

export default function IndustriesGridSection() {
  return (
    <section id="sector-grid" className="section-padding bg-white relative">
      <div className="container">
        <SectionHeading
          badge="Specialized Industry Solutions"
          title="Engineered for Your Industry's Specific Challenges"
          subtitle="Discover how ValoSync Global delivers tailored software, CRM, AI automation, and digital marketing strategies suited for your vertical."
          center
        />

        {/* Industry Cards Grid (Direct display with all industries, no redundant filter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industriesData.map((ind) => (
            <IndustryCard key={ind.id} {...ind} />
          ))}
        </div>
      </div>
    </section>
  );
}
