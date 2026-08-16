import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { CURATED } from "./curated";
import type { Business, User } from "./types";

const DATA = path.join(process.cwd(), "data");
const SEED = path.join(DATA, "seed-businesses.json");
const USERS = path.join(DATA, "users.json");
const USER_LISTINGS = path.join(DATA, "user-listings.json");

function ensure() {
  if (!existsSync(DATA)) mkdirSync(DATA, { recursive: true });
  if (!existsSync(USERS)) writeFileSync(USERS, "[]");
  if (!existsSync(USER_LISTINGS)) writeFileSync(USER_LISTINGS, "[]");
}

function readJson<T>(file: string, fallback: T): T {
  try {
    if (!existsSync(file)) return fallback;
    return JSON.parse(readFileSync(file, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function writeJson(file: string, value: unknown) {
  ensure();
  writeFileSync(file, JSON.stringify(value, null, 2), "utf8");
}

export function getSeedBusinesses(): Business[] {
  return readJson<Business[]>(SEED, []);
}

export function getUserListings(): Business[] {
  ensure();
  return readJson<Business[]>(USER_LISTINGS, []);
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

export function getBusiness(slug: string) {
  return getAllBusinesses().find((b) => b.slug === slug) ?? null;
}

export function searchBusinesses(opts: {
  q?: string;
  category?: string;
  city?: string;
  province?: string;
}) {
  const q = (opts.q || "").trim().toLowerCase();
  const category = (opts.category || "").trim();
  const city = (opts.city || "").trim().toLowerCase();
  const province = (opts.province || "").trim().toUpperCase();

  return getAllBusinesses().filter((b) => {
    if (category && b.category !== category) return false;
    
    if (city) {
      const bCity = (b.city || "").toLowerCase();
      const citySlug = bCity.replace(/[^a-z0-9]+/g, "-");
      const targetSlug = city.replace(/[^a-z0-9]+/g, "-");
      if (bCity !== city && citySlug !== targetSlug && !bCity.includes(city)) {
        return false;
      }
    }
    
    if (province && (b.province || "").toUpperCase() !== province) {
      return false;
    }
    
    if (!q) return true;
    
    const hay = `${b.name} ${b.tamilName || ""} ${b.description} ${b.address} ${b.city} ${b.province} ${b.category}`.toLowerCase();
    return hay.includes(q);
  });
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
  writeJson(USER_LISTINGS, list);
  return biz;
}

export function updateUserListing(slug: string, ownerId: string, patch: Partial<Business>) {
  const list = getUserListings();
  const idx = list.findIndex((b) => b.slug === slug && b.ownerId === ownerId);
  if (idx < 0) return null;
  list[idx] = { ...list[idx], ...patch, slug, ownerId };
  writeJson(USER_LISTINGS, list);
  return list[idx];
}

export function deleteUserListing(slug: string, ownerId: string) {
  const list = getUserListings();
  const next = list.filter((b) => !(b.slug === slug && b.ownerId === ownerId));
  writeJson(USER_LISTINGS, next);
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
  const DATA = path.join(process.cwd(), "data");
  writeJson(path.join(DATA, "user-listings.json"), users);
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
  ensure();
  return readJson<User[]>(USERS, []).find((u) => u.email === email.toLowerCase()) ?? null;
}

export function findUserById(id: string) {
  ensure();
  return readJson<User[]>(USERS, []).find((u) => u.id === id) ?? null;
}

export function saveUser(user: User) {
  ensure();
  const users = readJson<User[]>(USERS, []);
  users.push(user);
  writeJson(USERS, users);
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
