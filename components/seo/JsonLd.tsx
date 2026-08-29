import React from "react";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "ITService"],
    "@id": "https://valosyncglobal.com/#organization",
    name: "ValoSync Global",
    alternateName: ["ValoSync", "ValoSync Global Software", "Valosync IT Solutions"],
    url: "https://valosyncglobal.com",
    logo: "https://valosyncglobal.com/images/logo.png",
    image: "https://valosyncglobal.com/images/og-image.jpg",
    description:
      "ValoSync Global provides enterprise custom software development, bespoke CRM platforms, AI workflow automation, web applications, and cloud DevOps engineering for Australian businesses and global enterprises.",
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
      "Custom Software Development Australia",
      "CRM Development Services Australia",
      "AI Workflow Automation Australia",
      "Web Application Development Sydney",
      "Software Engineering Melbourne",
      "Business Process Automation Australia",
      "Cloud & DevOps Support Australia",
      "Australian Privacy Principles Software Compliance",
      "Next.js Development",
      "Full Stack Software Engineering",
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
      "Custom Software, CRM Platforms, AI Automation & Digital Solutions for Australian and Global Businesses.",
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
