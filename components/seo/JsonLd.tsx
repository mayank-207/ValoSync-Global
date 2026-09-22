import { siteOrigin } from "@/lib/shareMetadata";

export default function JsonLd() {
  const image = new URL("/share-image", siteOrigin);
  image.searchParams.set("page", "/");
  image.searchParams.set("title", "Connected Specialist Services");
  image.searchParams.set("section", "ValoSync Global");
  image.searchParams.set("visual", "/images/departments/overview-poster.webp");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteOrigin}/#organization`,
    name: "ValoSync Global",
    url: siteOrigin,
    image: image.toString(),
    description:
      "ValoSync Global connects specialist teams across technology, accounting, conveyancing, civil engineering, real estate and home loans.",
    email: "contact@valosyncglobal.com",
    areaServed: { "@type": "Country", name: "Australia" },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteOrigin}/#website`,
    url: siteOrigin,
    name: "ValoSync Global",
    description:
      "Specialist services for business, property and growth.",
    publisher: { "@id": `${siteOrigin}/#organization` },
    inLanguage: "en-AU",
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
