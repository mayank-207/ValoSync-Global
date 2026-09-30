import { siteOrigin } from "@/lib/shareMetadata";
import { siteConfig } from "@/lib/siteConfig";

export default function JsonLd() {
  const image = new URL("/share-image", siteOrigin);
  image.searchParams.set("page", "/");
  image.searchParams.set("title", "Connected Specialist Services");
  image.searchParams.set("section", siteConfig.name);
  image.searchParams.set("visual", "/images/departments/overview-poster.webp");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteOrigin}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteOrigin,
    logo: `${siteOrigin}/images/logo.png`,
    image: `${siteOrigin}/og-image.png`,
    description:
      "ValoSync Global connects specialist enterprise teams across custom software, AI automation, cloud systems, and professional services, powered by our India Engineering HQ and Australian client delivery.",
    email: siteConfig.email.contact,
    telephone: siteConfig.phone.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.indiaHq.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.primary,
        contactType: "customer support & sales",
        areaServed: "AU",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.secondary,
        contactType: "global engineering hq",
        areaServed: ["IN", "AU", "Global"],
        availableLanguage: ["en", "hi"],
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Custom Software Development",
      "Enterprise AI & LLM Automation",
      "CRM Development & Integration",
      "Mobile App Development",
      "Cloud Infrastructure & DevOps",
      "Digital Marketing & SEO",
    ],
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.instagram,
      siteConfig.socials.twitter,
    ].filter(Boolean),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteOrigin}/#website`,
    url: siteOrigin,
    name: siteConfig.name,
    description:
      "Enterprise software, AI automation, and multidisciplinary specialist services for Australian enterprises from our global engineering delivery HQ.",
    publisher: { "@id": `${siteOrigin}/#organization` },
    inLanguage: ["en-AU", "en-IN", "en"],
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
