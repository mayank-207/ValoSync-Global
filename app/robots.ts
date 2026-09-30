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
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteOrigin}/sitemap.xml`,
    host: siteOrigin,
  };
}
