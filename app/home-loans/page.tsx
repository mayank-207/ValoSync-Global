import type { Metadata } from "next";
import DepartmentPage, { DepartmentPageData } from "@/components/sections/departments/DepartmentPage";

export const metadata: Metadata = {
  title: "Home Loan Support Services | ValoSync Global",
  description: "Structured support for home buyers, refinancing and property-investment loan enquiries.",
  alternates: { canonical: "/home-loans" },
};

const data: DepartmentPageData = {
  eyebrow: "Home Loan Services",
  title: "A Clearer Path Through Your Home Loan Journey",
  introduction: "ValoSync Global helps home buyers and property investors organise their lending requirements, understand the application journey and coordinate supporting information with relevant lending professionals.",
  services: [
    { title: "First-Home Buyer Support", description: "Understand the lending journey, required information and practical steps toward an application." },
    { title: "Home Loan Review", description: "Review current objectives and coordinate discussions about potentially suitable lending structures." },
    { title: "Refinancing Support", description: "Organise information and next steps when reviewing an existing home loan arrangement." },
    { title: "Investment Property Loans", description: "Coordinate lending enquiries connected with investment-property purchases and portfolio goals." },
    { title: "Application Preparation", description: "Help gather required documents, organise application information and track outstanding items." },
    { title: "Property Service Coordination", description: "Connect lending requirements with relevant real estate, conveyancing and accounting support." },
  ],
  audiences: ["First-home buyers seeking guidance through the application process.", "Homeowners reviewing or refinancing existing lending.", "Property investors exploring finance for another purchase.", "Buyers requiring coordinated lending, conveyancing and real estate support."],
  process: [
    { title: "Understand Your Objective", description: "Discuss the property goal, timing, financial position and support required." },
    { title: "Prepare Information", description: "Identify the documents and information needed for an informed lending discussion." },
    { title: "Coordinate the Application", description: "Support communication, outstanding requirements and application progress." },
    { title: "Support Through Completion", description: "Coordinate relevant next steps with lending and property stakeholders." },
  ],
  disclaimer: "Loan availability, suitability, rates and approval are determined by lenders and authorised credit professionals. This page does not provide financial or credit advice and does not guarantee approval.",
};

export default function HomeLoansPage() {
  return <DepartmentPage data={data} />;
}
