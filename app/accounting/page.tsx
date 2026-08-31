import type { Metadata } from "next";
import DepartmentPage, { DepartmentPageData } from "@/components/sections/departments/DepartmentPage";

export const metadata: Metadata = {
  title: "Accounting & Business Support Services | ValoSync Global",
  description: "Accounting, bookkeeping, payroll, reporting and business administration support coordinated for Australian businesses.",
  alternates: { canonical: "/accounting" },
};

const data: DepartmentPageData = {
  eyebrow: "Accounting Services",
  title: "Clearer Financial Operations for Better Business Decisions",
  introduction: "ValoSync Global supports businesses with organised accounting processes, accurate records and practical financial administration. Our approach is designed to improve visibility, reduce administrative pressure and keep essential obligations on track.",
  services: [
    { title: "Bookkeeping & Transaction Management", description: "Maintain structured records for income, expenses, invoices, payments and reconciliations." },
    { title: "Payroll Administration", description: "Support regular payroll processing, employee records and related reporting requirements." },
    { title: "Management Reporting", description: "Prepare useful financial summaries that help management understand performance and cash flow." },
    { title: "Business Registration Support", description: "Coordinate documentation and administrative steps for suitable business structures and registrations." },
    { title: "Tax & Compliance Coordination", description: "Organise records, deadlines and professional coordination for applicable reporting obligations." },
    { title: "Accounting Systems Support", description: "Assist with the setup and effective use of platforms such as Xero, QuickBooks and related business tools." },
  ],
  audiences: ["Small and growing businesses requiring reliable financial administration.", "Business owners seeking clearer reporting and record management.", "Property and professional-service businesses coordinating multiple financial workflows.", "Teams moving from spreadsheets to structured accounting systems."],
  process: [
    { title: "Understand the Current Position", description: "Review your business structure, records, systems and immediate priorities." },
    { title: "Define Responsibilities", description: "Agree on required services, information flow, deadlines and professional responsibilities." },
    { title: "Organise and Deliver", description: "Establish repeatable processes for records, reporting and ongoing administration." },
    { title: "Review and Improve", description: "Monitor the agreed process and identify opportunities to improve financial visibility." },
  ],
  disclaimer: "Accounting and tax services are subject to engagement scope. Tax or regulated financial advice will only be provided or coordinated through appropriately qualified and registered professionals where required.",
};

export default function AccountingPage() {
  return <DepartmentPage data={data} />;
}
