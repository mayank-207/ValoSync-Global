import type { Metadata } from "next";
import DepartmentPage, { DepartmentPageData } from "@/components/sections/departments/DepartmentPage";

export const metadata: Metadata = {
  title: "Real Estate Services | ValoSync Global",
  description: "Coordinated property sales, purchases, leasing, management and market-support services.",
  alternates: { canonical: "/real-estate" },
};

const data: DepartmentPageData = {
  eyebrow: "Real Estate Services",
  title: "Property Support Built Around Your Goals",
  introduction: "Whether you are buying, selling, leasing or managing property, ValoSync Global brings together market support, transaction coordination and connected professional services to help you move forward with confidence.",
  services: [
    { title: "Property Sales Support", description: "Coordinate property preparation, campaign requirements, buyer communication and transaction progress." },
    { title: "Buyer Assistance", description: "Support property search, enquiry coordination, inspections and the next steps toward purchase." },
    { title: "Leasing Support", description: "Assist with property presentation, tenant enquiries, applications and lease coordination." },
    { title: "Property Management Coordination", description: "Support recurring communication, maintenance workflows, documentation and property administration." },
    { title: "Market Research", description: "Provide relevant property and area information to support informed discussions and planning." },
    { title: "Investment Property Support", description: "Connect real estate requirements with home-loan, conveyancing and accounting service pathways." },
  ],
  audiences: ["Homeowners preparing to sell or lease property.", "Buyers looking for structured assistance through the property journey.", "Investors managing property acquisition and ongoing administration.", "Developers coordinating property, engineering and professional services."],
  process: [
    { title: "Understand Your Property Goal", description: "Clarify the property, timing, commercial objective and required support." },
    { title: "Prepare the Service Plan", description: "Define activities, stakeholders, documentation and communication expectations." },
    { title: "Manage the Journey", description: "Coordinate enquiries, updates, actions and professional-service dependencies." },
    { title: "Complete and Support", description: "Assist with transaction completion, handover and relevant ongoing services." },
  ],
  disclaimer: "Real estate agency services are delivered through appropriately licensed professionals where required. Property information is general and should not be treated as financial, legal or investment advice.",
};

export default function RealEstatePage() {
  return <DepartmentPage data={data} />;
}
