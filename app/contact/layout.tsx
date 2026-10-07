import type { Metadata } from "next";
import { shareMetadata, siteOrigin } from "@/lib/shareMetadata";

export const metadata: Metadata = {
  title: { absolute: "Contact ValoSync Global | Australian Client Support & Global Delivery" },
  description:
    "Reach our Australian client relations team or India Global Engineering HQ for bespoke software development, AI automation, and multidisciplinary project consultations.",
  keywords: [
    "contact ValoSync Global",
    "software project inquiry Australia",
    "dedicated development squad consultation",
    "IT services Australia India",
  ],
  alternates: {
    canonical: "/contact",
    languages: {
      "en-AU": `${siteOrigin}/contact`,
      "en-IN": `${siteOrigin}/contact`,
      "en": `${siteOrigin}/contact`,
      "x-default": `${siteOrigin}/contact`,
    },
  },
  ...shareMetadata({
    path: "/contact",
    title: "Contact ValoSync Global | Australian Client Support & Global Delivery",
    description:
      "Reach our Australian client relations team or India Global Engineering HQ for bespoke software development, AI automation, and multidisciplinary project consultations.",
    section: "Client Support & Inquiries",
    visual: "/images/departments/conveyancing.webp",
  }),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteOrigin,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${siteOrigin}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}

