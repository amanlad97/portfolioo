import { MetadataRoute } from "next";
import { seoConfig } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  };
}
