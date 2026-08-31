import React from "react";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://valosyncglobal.com/#organization",
    name: "ValoSync Global",
    alternateName: ["ValoSync", "ValoSync Global Group"],
    url: "https://valosyncglobal.com",
    logo: "https://valosyncglobal.com/images/logo.png",
    image: "https://valosyncglobal.com/images/og-image.jpg",
    description:
      "ValoSync Global is a multi-department professional services organisation operating across technology, accounting, conveyancing, civil engineering, real estate and home loans.",
    email: "contact@valosyncglobal.com",
    areaServed: [
      {
        "@type": "Country",
        name: "Australia",
      },
      {
        "@type": "City",
        name: "Sydney",
      },
      {
        "@type": "City",
        name: "Melbourne",
      },
      {
        "@type": "City",
        name: "Brisbane",
      },
      {
        "@type": "City",
        name: "Perth",
      },
      {
        "@type": "City",
        name: "Adelaide",
      },
      {
        "@type": "Place",
        name: "Global",
      },
    ],
    serviceArea: [
      "Australia",
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Global",
    ],
    knowsAbout: [
      "Technology Services",
      "Accounting Services",
      "Conveyancing Services",
      "Civil Engineering Services",
      "Real Estate Services",
      "Home Loan Services",
      "Professional Services Australia",
      "Integrated Business Services",
    ],
    sameAs: [
      "https://linkedin.com/company/valosyncglobal",
      "https://twitter.com/valosyncglobal",
      "https://instagram.com/valosyncglobal",
      "https://github.com/valosyncglobal",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@valosyncglobal.com",
      availableLanguage: ["English"],
      areaServed: ["AU", "Global"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://valosyncglobal.com/#website",
    url: "https://valosyncglobal.com",
    name: "ValoSync Global",
    description:
      "Integrated business, property, engineering, finance and technology services for Australian and global clients.",
    publisher: {
      "@id": "https://valosyncglobal.com/#organization",
    },
    inLanguage: ["en-AU", "en-US", "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
