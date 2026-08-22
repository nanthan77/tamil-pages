import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard", "/login", "/register", "/admin", "/admin/outreach", "/alerts/confirm", "/alerts/manage"],
      },
      {
        userAgent: ["Googlebot", "Bingbot", "Applebot", "Google-Extended", "GPTBot", "ClaudeBot", "PerplexityBot"],
        allow: "/",
        disallow: ["/api/", "/dashboard", "/login", "/register", "/admin", "/admin/outreach", "/alerts/confirm", "/alerts/manage"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
