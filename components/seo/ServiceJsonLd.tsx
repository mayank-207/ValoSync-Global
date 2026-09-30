import { siteOrigin } from "@/lib/shareMetadata";
import { siteConfig } from "@/lib/siteConfig";

interface ServiceJsonLdProps {
  name: string;
  description: string;
  slug: string;
  faqs?: { question: string; answer: string }[];
}

export default function ServiceJsonLd({
  name,
  description,
  slug,
  faqs = [],
}: ServiceJsonLdProps) {
  const serviceUrl = `${siteOrigin}/services/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name,
    description,
    url: serviceUrl,
    provider: {
      "@type": "Organization",
      "@id": `${siteOrigin}/#organization`,
      name: siteConfig.name,
      url: siteOrigin,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Australia",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    serviceType: name,
    termsOfService: `${siteOrigin}/terms-of-service`,
  };

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
        name: "Services",
        item: `${siteOrigin}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: serviceUrl,
      },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
