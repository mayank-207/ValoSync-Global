import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://valosyncglobal.com";
  const lastModified = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Service routes
  const serviceSlugs = [
    "custom-software",
    "mobile-app-development",
    "crm-development",
    "ai-automation",
    "web-development",
    "cloud-devops",
    "digital-marketing",
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic Case Study routes
  const portfolioSlugs = [
    "ai-enterprise-crm",
    "lead-portal",
    "multi-tenant-erp",
    "healthcare-telehealth-portal",
    "logistics-dispatch-tracker",
    "fintech-kyc-onboarding",
    "headless-ecommerce",
    "iot-telematics-dashboard",
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Department routes
  const departmentSlugs = [
    "technology",
    "accounting",
    "conveyancing",
    "civil-engineering",
    "real-estate",
    "home-loans",
    "town-planning",
    "architecture",
    "financial-planning",
    "legal-advisory",
    "insurance",
    "hr-advisory",
  ];

  const departmentRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/departments`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...departmentSlugs.map((slug) => ({
      url: `${baseUrl}/departments/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];

  return [...staticRoutes, ...departmentRoutes, ...serviceRoutes, ...portfolioRoutes];
}
