import { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/shareMetadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${siteOrigin}/sitemap.xml`,
    host: siteOrigin,
  };
}
