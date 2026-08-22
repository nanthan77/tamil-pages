import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/categories";
import { CITIES } from "@/lib/cities";
import { SITE_URL } from "@/lib/site";
import { cityCategoryPairs, getAllBusinesses } from "@/lib/store";
import { getAllTemples } from "@/lib/temples";
import { citySlug } from "@/lib/utils";


export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/alerts",
    "/directory",
    "/temples",
    "/news",
    "/events",
    "/cinema",
    "/tuition",
    "/pricing",
    "/advertise",
    "/for-business",
    "/boost",
    "/deals",
    "/jobs",
    "/weddings",
    "/about",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const temples = getAllTemples().map((t) => ({
    url: `${SITE_URL}/temples/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const listings = getAllBusinesses().map((b) => ({
    url: `${SITE_URL}/directory/${b.slug}`,
    lastModified: b.createdAt ? new Date(b.createdAt) : undefined,
    changeFrequency: "weekly" as const,
    priority: b.featured ? 0.9 : 0.8,
  }));

  const cities = CITIES.map((c) => ({
    url: `${SITE_URL}/c/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const categories = CATEGORIES.map((c) => ({
    url: `${SITE_URL}/category/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const combos = cityCategoryPairs().map((p) => ({
    url: `${SITE_URL}/c/${citySlug(p.city)}/${p.category}`,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...temples,
    ...cities,
    ...categories,
    ...combos,
    ...listings,
  ];
}
