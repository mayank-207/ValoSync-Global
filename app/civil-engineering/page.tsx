import type { Metadata } from "next";
import DepartmentPage, { DepartmentPageData } from "@/components/sections/departments/DepartmentPage";

export const metadata: Metadata = {
  title: "Civil Engineering Project Support | ValoSync Global",
  description: "Civil engineering planning, documentation, consultant coordination and project-support services.",
  alternates: { canonical: "/civil-engineering" },
};

const data: DepartmentPageData = {
  eyebrow: "Civil Engineering Services",
  title: "Practical Engineering Support From Planning to Delivery",
  introduction: "ValoSync Global coordinates civil engineering expertise, project documentation and stakeholder communication to help property and development projects progress with greater clarity and control.",
  services: [
    { title: "Project Feasibility Support", description: "Review project objectives, site considerations, dependencies and early-stage delivery requirements." },
    { title: "Engineering Documentation", description: "Coordinate drawings, specifications, reports and project records required for delivery." },
    { title: "Consultant & Vendor Coordination", description: "Manage communication with surveyors, laboratories, architects, structural consultants and other specialists." },
    { title: "Approvals Coordination", description: "Track documentation and stakeholder actions connected with relevant authority processes." },
    { title: "Project Planning & Milestones", description: "Structure project stages, responsibilities, dependencies and progress checkpoints." },
    { title: "Site & Delivery Support", description: "Support inspections, issue tracking, documentation updates and project communication." },
  ],
  audiences: ["Property owners planning construction or development work.", "Developers coordinating multiple consultants and project stages.", "Businesses requiring structured engineering documentation and project visibility.", "Project managers seeking stronger coordination across technical stakeholders."],
  process: [
    { title: "Project Discovery", description: "Clarify the site, objective, stakeholders, constraints and expected deliverables." },
    { title: "Scope & Consultant Plan", description: "Define required disciplines, documentation, responsibilities and sequencing." },
    { title: "Coordination & Tracking", description: "Manage deliverables, communications, dependencies and project records." },
    { title: "Handover & Close-Out", description: "Coordinate final documentation, outstanding actions and completion information." },
  ],
  disclaimer: "Engineering designs, certifications and statutory submissions will only be completed or approved by appropriately qualified and registered professionals where required.",
};

export default function CivilEngineeringPage() {
  return <DepartmentPage data={data} />;
}
