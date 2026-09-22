import type { Metadata } from "next";
import { shareMetadata } from "@/lib/shareMetadata";

export const metadata: Metadata = {
  title: { absolute: "Contact ValoSync Global | Service Enquiries" },
  description: "Contact ValoSync Global about technology, accounting, property, conveyancing, engineering, loans or an enquiry involving multiple departments.",
  alternates: { canonical: "/contact" },
  ...shareMetadata({
    path: "/contact",
    title: "Contact ValoSync Global | Service Enquiries",
    description: "Contact ValoSync Global about technology, accounting, property, conveyancing, engineering, loans or an enquiry involving multiple departments.",
    section: "Contact",
    visual: "/images/departments/conveyancing.webp",
  }),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

