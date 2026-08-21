import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { CATEGORIES } from "@/lib/categories";
import { addUserListing, searchBusinesses, uniqueSlug } from "@/lib/store";
import { slugify } from "@/lib/utils";
import type { SortOption } from "@/lib/search";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const city = searchParams.get("city") || "";
  const province = searchParams.get("province") || "";
  const sort = (searchParams.get("sort") || "relevance") as SortOption;
  const page = Math.max(1, Number(searchParams.get("page") || 1) || 1);
  const limit = Math.min(Math.max(1, Number(searchParams.get("limit") || 24)), 100);

  const allMatching = searchBusinesses({ q, category, city, province, sort });
  const total = allMatching.length;
  const totalPages = Math.ceil(total / limit);
  const slice = allMatching.slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    ok: true,
    total,
    page,
    totalPages,
    pageSize: limit,
    businesses: slice,
  });
}

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Please sign in to post a listing." }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const name = String(body.name || "").trim();
  const category = String(body.category || "").trim();
  const city = String(body.city || "").trim();
  const province = String(body.province || "ON").trim().toUpperCase();
  const phone = String(body.phone || "").trim();
  const description = String(body.description || "").trim();
  if (!name || !category || !city || !phone || !description) {
    return NextResponse.json({ error: "Name, category, city, phone and description are required." }, { status: 400 });
  }
  if (!CATEGORIES.some((c) => c.slug === category)) {
    return NextResponse.json({ error: "Choose a valid category." }, { status: 400 });
  }
  const slug = uniqueSlug(slugify(name));
  const biz = addUserListing({
    id: `usr-${randomBytes(6).toString("hex")}`,
    slug,
    name,
    tamilName: String(body.tamilName || "").trim(),
    category,
    city,
    province,
    address: String(body.address || "").trim(),
    phone,
    website: String(body.website || "").trim(),
    email: String(body.email || "").trim(),
    whatsapp: String(body.whatsapp || "").trim(),
    description,
    hours: String(body.hours || "").trim(),
    verified: false,
    featured: false,
    claimed: true,
    plan: "basic",
    source: "community",
    ownerId: user.id,
    createdAt: new Date().toISOString(),
  });
  return NextResponse.json({ ok: true, slug: biz.slug });
}
