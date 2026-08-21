/* eslint-disable prefer-const */
import { CURATED } from "./curated";
import type { Business, User } from "./types";
import SEED_DATA from "@/data/seed-businesses.json";

let cachedUsers: User[] = [];
let cachedUserListings: Business[] = [];

export function getSeedBusinesses(): Business[] {
  return (SEED_DATA || []) as unknown as Business[];
}

export function getUserListings(): Business[] {
  return cachedUserListings;
}

export function getAllBusinesses(): Business[] {
  const seed = getSeedBusinesses();
  const users = getUserListings();
  const bySlug = new Map<string, Business>();
  
  for (const item of seed) {
    bySlug.set(item.slug, item);
  }
  
  for (const item of CURATED) {
    const prev = bySlug.get(item.slug);
    bySlug.set(item.slug, prev ? { ...prev, ...item, id: prev.id || item.id } : item);
  }
  
  for (const item of users) {
    bySlug.set(item.slug, item);
  }
  
  return Array.from(bySlug.values()).sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

import { executeSearch, getAutocompleteSuggestions, type SortOption } from "./search";

export function getBusiness(slug: string) {
  return getAllBusinesses().find((b) => b.slug === slug) ?? null;
}

export function searchBusinesses(opts: {
  q?: string;
  category?: string;
  city?: string;
  province?: string;
  sort?: SortOption;
}) {
  return executeSearch(getAllBusinesses(), opts);
}

export function autocomplete(query: string, limit = 8) {
  return getAutocompleteSuggestions(getAllBusinesses(), query, limit);
}

export function countByCategory() {
  const counts: Record<string, number> = {};
  for (const b of getAllBusinesses()) {
    counts[b.category] = (counts[b.category] || 0) + 1;
  }
  return counts;
}

export function countByCity() {
  const counts: Record<string, number> = {};
  for (const b of getAllBusinesses()) {
    const key = (b.city || "").toLowerCase();
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

export function countByProvince() {
  const counts: Record<string, number> = {};
  for (const b of getAllBusinesses()) {
    const key = (b.province || "").toUpperCase();
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

export function addUserListing(biz: Business) {
  const list = getUserListings();
  list.unshift(biz);
  cachedUserListings = list;
  return biz;
}

export function updateUserListing(slug: string, ownerId: string, patch: Partial<Business>) {
  const list = getUserListings();
  const idx = list.findIndex((b) => b.slug === slug && b.ownerId === ownerId);
  if (idx < 0) return null;
  list[idx] = { ...list[idx], ...patch, slug, ownerId };
  cachedUserListings = list;
  return list[idx];
}

export function deleteUserListing(slug: string, ownerId: string) {
  const list = getUserListings();
  const next = list.filter((b) => !(b.slug === slug && b.ownerId === ownerId));
  cachedUserListings = next;
  return next.length !== list.length;
}

export function listingsForOwner(ownerId: string) {
  return getUserListings().filter((b) => b.ownerId === ownerId);
}

export function claimBusiness(slug: string, ownerId: string) {
  const biz = getBusiness(slug);
  if (!biz) return null;
  if (biz.ownerId && biz.ownerId !== ownerId) return null;
  const users = getUserListings();
  const idx = users.findIndex((b) => b.slug === slug);
  const claimed: Business = {
    ...biz,
    ownerId,
    claimed: true,
    plan: biz.plan || "basic",
    source: "community",
  };
  if (idx >= 0) users[idx] = { ...users[idx], ...claimed };
  else users.unshift(claimed);
  cachedUserListings = users;
  return claimed;
}

export function cityCategoryPairs() {
  const pairs = new Map<string, { city: string; category: string; count: number }>();
  for (const b of getAllBusinesses()) {
    const city = (b.city || "").trim();
    if (!city || !b.category) continue;
    const key = `${city.toLowerCase()}::${b.category}`;
    const prev = pairs.get(key);
    pairs.set(key, { city, category: b.category, count: (prev?.count || 0) + 1 });
  }
  return Array.from(pairs.values());
}

export function findUserByEmail(email: string) {
  return cachedUsers.find((u) => u.email === email.toLowerCase()) ?? null;
}

export function findUserById(id: string) {
  return cachedUsers.find((u) => u.id === id) ?? null;
}

export function saveUser(user: User) {
  cachedUsers.push(user);
}

export function uniqueSlug(base: string) {
  let slug = base;
  let i = 2;
  const taken = new Set(getAllBusinesses().map((b) => b.slug));
  while (taken.has(slug)) {
    slug = `${base}-${i}`;
    i += 1;
  }
  return slug;
}

export function stats() {
  const all = getAllBusinesses();
  const cities = new Set(all.map((b) => (b.city || "").toLowerCase()));
  const cats = new Set(all.map((b) => b.category));
  return {
    listings: all.length,
    cities: cities.size,
    categories: cats.size,
  };
}
