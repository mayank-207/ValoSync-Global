import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Software & CRM Consultation Australia | Valosync Global",
  description:
    "Schedule a technical discovery session with Valosync Global. Inquire about custom software development, CRM engineering, and AI automation for Australian and international businesses.",
  keywords: [
    "Contact Valosync Global",
    "Hire Software Developers Australia",
    "Custom Software Consultation Australia",
    "CRM Development Inquiry Sydney Melbourne",
    "AI Automation Consultation Australia",
    "IT Solutions Contact Australia",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Software & CRM Consultation Australia | Valosync Global",
    description:
      "Book a free technical consultation with senior solution architects for your software, CRM, or AI project.",
    url: "https://valosyncglobal.com/contact",
    siteName: "Valosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Valosync Global Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Software & CRM Consultation Australia | Valosync Global",
    description:
      "Book a free technical discovery consultation for your custom software or CRM build.",
    images: ["/images/og-contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
