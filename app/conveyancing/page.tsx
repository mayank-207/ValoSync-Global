import type { Metadata } from "next";
import DepartmentPage, { type DepartmentPageData } from "@/components/sections/departments/DepartmentPage";

export const metadata: Metadata = {
  title: "Conveyancing Support Services | ValoSync Global",
  description: "Coordinated conveyancing support for property purchases, sales, contracts, transfers and settlements.",
  alternates: { canonical: "/conveyancing" },
};

const data: DepartmentPageData = {
  eyebrow: "Conveyancing Services",
  title: "Coordinated Support Through Every Property Transaction",
  introduction: "Property transactions involve important documents, deadlines and multiple stakeholders. ValoSync Global helps buyers, sellers and property professionals coordinate the conveyancing process with clarity from initial review through settlement.",
  services: [
    { title: "Property Purchase Support", description: "Coordinate document review, enquiries, key dates and settlement preparation for property buyers." },
    { title: "Property Sale Support", description: "Assist sellers with required documentation, contract coordination and transaction milestones." },
    { title: "Contract Review Coordination", description: "Arrange the appropriate review of property contracts, conditions and transaction requirements." },
    { title: "Title & Property Checks", description: "Coordinate relevant searches and checks to identify matters requiring attention." },
    { title: "Transfer & Settlement Coordination", description: "Manage communication, documentation and agreed actions leading to settlement." },
    { title: "Stakeholder Communication", description: "Keep clients, agents, lenders and authorised professionals aligned throughout the transaction." },
  ],
  audiences: ["First-home buyers navigating an unfamiliar process.", "Property owners preparing to sell.", "Investors managing purchases, sales or refinancing-related transactions.", "Real estate and lending professionals requiring coordinated transaction support."],
  process: [
    { title: "Initial Property Review", description: "Understand the transaction, parties, property and key timing requirements." },
    { title: "Document Coordination", description: "Collect and route contracts, searches and supporting information for appropriate review." },
    { title: "Transaction Management", description: "Track conditions, questions, approvals and stakeholder responsibilities." },
    { title: "Settlement Support", description: "Coordinate final requirements and communication through settlement and completion." },
  ],
  disclaimer: "Conveyancing and legal work is delivered or supervised by appropriately authorised professionals where required. Content on this page is general information and not legal advice.",
};

export default function ConveyancingPage() {
  return <DepartmentPage data={data} />;
}
