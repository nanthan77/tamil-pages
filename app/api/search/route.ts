import { NextResponse } from "next/server";
import { autocomplete, searchBusinesses } from "@/lib/store";
import type { SortOption } from "@/lib/search";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const type = searchParams.get("type") || "autocomplete"; // "autocomplete" or "full"
  const limit = Math.min(Math.max(1, Number(searchParams.get("limit") || 8)), 50);

  if (type === "full") {
    const category = searchParams.get("category") || "";
    const city = searchParams.get("city") || "";
    const province = searchParams.get("province") || "";
    const sort = (searchParams.get("sort") || "relevance") as SortOption;

    const list = searchBusinesses({ q, category, city, province, sort });
    return NextResponse.json({
      ok: true,
      query: q,
      total: list.length,
      results: list.slice(0, limit),
    });
  }

  const suggestions = autocomplete(q, limit);
  return NextResponse.json({
    ok: true,
    query: q,
    ...suggestions,
  });
}
