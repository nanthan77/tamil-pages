import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { randomBytes } from "crypto";
import type { Lead, Review } from "./types";

const DATA = path.join(process.cwd(), "data");
const REVIEWS = path.join(DATA, "reviews.json");
const LEADS = path.join(DATA, "leads.json");

function ensure() {
  if (!existsSync(DATA)) mkdirSync(DATA, { recursive: true });
  if (!existsSync(REVIEWS)) writeFileSync(REVIEWS, "[]");
  if (!existsSync(LEADS)) writeFileSync(LEADS, "[]");
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

export function getReviews(slug?: string) {
  ensure();
  const all = readJson<Review[]>(REVIEWS, []);
  if (!slug) return all;
  return all.filter((r) => r.slug === slug);
}

export function reviewStats(slug: string) {
  const list = getReviews(slug);
  if (!list.length) return { count: 0, average: 0 };
  const average = list.reduce((sum, r) => sum + r.rating, 0) / list.length;
  return { count: list.length, average: Math.round(average * 10) / 10 };
}

export function addReview(input: Omit<Review, "id" | "createdAt">) {
  const list = getReviews();
  const review: Review = {
    ...input,
    id: `rev-${randomBytes(6).toString("hex")}`,
    createdAt: new Date().toISOString(),
  };
  list.unshift(review);
  writeJson(REVIEWS, list);
  return review;
}

export function addLead(input: Omit<Lead, "id" | "createdAt">) {
  ensure();
  const list = readJson<Lead[]>(LEADS, []);
  const lead: Lead = {
    ...input,
    id: `lead-${randomBytes(6).toString("hex")}`,
    createdAt: new Date().toISOString(),
  };
  list.unshift(lead);
  writeJson(LEADS, list);
  return lead;
}
