import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/categories";
import { CITIES } from "@/lib/cities";
import { getAllEvents } from "@/lib/events";
import { getAllNews } from "@/lib/news";
import { SITE_URL } from "@/lib/site";
import { cityCategoryPairs, getAllBusinesses } from "@/lib/store";
import { getAllTemples } from "@/lib/temples";
import { citySlug } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    "",
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
    "/register",
    "/login",
    "/add-business",
  ].map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const temples = getAllTemples().map((t) => ({
    url: `${SITE_URL}/temples/${t.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.95,
  }));

  const news = getAllNews().map((n) => ({
    url: `${SITE_URL}/news/${n.slug}`,
    lastModified: new Date(n.publishedAt),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const events = getAllEvents().map((e) => ({
    url: `${SITE_URL}/events/${e.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const listings = getAllBusinesses().map((b) => ({
    url: `${SITE_URL}/directory/${b.slug}`,
    lastModified: b.createdAt ? new Date(b.createdAt) : now,
    changeFrequency: "weekly" as const,
    priority: b.featured ? 0.9 : 0.8,
  }));

  const cities = CITIES.map((c) => ({
    url: `${SITE_URL}/c/${c.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.85,
  }));

  const categories = CATEGORIES.map((c) => ({
    url: `${SITE_URL}/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const combos = cityCategoryPairs().map((p) => ({
    url: `${SITE_URL}/c/${citySlug(p.city)}/${p.category}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...temples, ...news, ...events, ...cities, ...categories, ...combos, ...listings];
}
