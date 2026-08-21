"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import SearchForm from "@/components/SearchForm";
import { itemListJsonLd } from "@/lib/seo";
import { CATEGORIES } from "@/lib/categories";
import { CITIES, PROVINCES } from "@/lib/cities";
import { countByCategory, countByCity, countByProvince, searchBusinesses } from "@/lib/store";
import type { SortOption } from "@/lib/search";

export default function DirectoryPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm font-bold text-[#002D62]">Loading Canada Tamil Directory…</div>}>
      <DirectoryContent />
    </Suspense>
  );
}

function DirectoryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const city = searchParams.get("city") || "";
  const province = (searchParams.get("province") || "").toUpperCase();
  const sort = (searchParams.get("sort") || (q ? "relevance" : "featured")) as SortOption;
  const page = Math.max(1, Number(searchParams.get("page") || 1) || 1);
  const pageSize = 24;

  const results = searchBusinesses({ q, category, city, province, sort });
  const pages = Math.max(1, Math.ceil(results.length / pageSize));
  const safePage = Math.min(page, pages);
  const slice = results.slice((safePage - 1) * pageSize, safePage * pageSize);

  const qs = (extra: Record<string, string | number> = {}) => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (category) p.set("category", category);
    if (city) p.set("city", city);
    if (province) p.set("province", province);
    if (sort && sort !== "featured" && sort !== "relevance") p.set("sort", sort);
    Object.entries(extra).forEach(([k, v]) => {
      if (v) p.set(k, String(v));
      else p.delete(k);
    });
    const s = p.toString();
    return s ? `?${s}` : "";
  };

  const handleSortChange = (newSort: string) => {
    const p = new URLSearchParams(searchParams.toString());
    if (newSort) p.set("sort", newSort);
    else p.delete("sort");
    p.set("page", "1");
    router.push(`/directory?${p.toString()}`);
  };

  const catCounts = countByCategory();
  const cityCounts = countByCity();
  const provCounts = countByProvince();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <JsonLd
        data={itemListJsonLd(
          "Canadian Tamil Business Directory",
          "/directory",
          slice,
        )}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002D62] via-[#083777] to-[#0F172A] rounded-[2.5rem] p-6 sm:p-10 lg:p-12 text-white shadow-card relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[11px] font-black uppercase tracking-wider">
            <span>🇨🇦</span> All 10 Provinces &amp; 3 Territories Covered
          </div>
          <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Canadian Tamil <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">Business Directory</span>
          </h1>
          <p className="tamil text-sm sm:text-base font-bold text-white/95 leading-relaxed">
            கனடா முழுவதும் உள்ள தமிழ் நிறுவனங்கள், உணவகங்கள், சட்ட ஆலோசகர்கள், மருத்துவர்கள் மற்றும் சேவைகள்.
          </p>
          <p className="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Browse {results.length.toLocaleString()} verified listings across Scarborough, Toronto, Markham, Montreal, Vancouver, Calgary, Edmonton, and nationwide with smart fuzzy search &amp; transliteration.
          </p>
        </div>

        <div className="mt-6 relative z-10">
          <SearchForm q={q} category={category} city={city} province={province} large />
        </div>

        {/* Quick Search Intent Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold relative z-10 text-white/90">
          <span className="text-[11px] uppercase tracking-wider text-white/70 font-extrabold">Popular Searches:</span>
          {[
            { label: "🔥 Hoppers & Kothu", q: "kothu" },
            { label: "🛕 Temples", q: "temple" },
            { label: "⚖️ Immigration Lawyers", q: "immigration" },
            { label: "🦷 Dental Clinics", q: "dentist" },
            { label: "📊 Tax & CPA", q: "tax" },
            { label: "💍 22K Gold & Sarees", q: "saree" },
            { label: "🚗 Auto Mechanics", q: "mechanic" },
          ].map((chip) => (
            <Link
              key={chip.q}
              href={`/directory?q=${encodeURIComponent(chip.q)}`}
              className="px-2.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs transition"
            >
              {chip.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-3xl border border-[#CBD5E1] p-5 shadow-card space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-outfit font-extrabold text-sm uppercase tracking-wider text-[#002D62]">
                Filter Directory
              </h2>
              {(q || category || city || province) && (
                <Link
                  href="/directory"
                  className="text-xs font-bold text-[#E00624] hover:underline"
                >
                  Clear All
                </Link>
              )}
            </div>

            {/* Active Filters Summary */}
            {(q || category || city || province) && (
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">
                  Active Filters
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {q && (
                    <Link
                      href={`/directory${qs({ q: "", page: 1 })}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 text-[#E00624] text-xs font-bold border border-red-200"
                    >
                      <span>🔍 &quot;{q}&quot;</span>
                      <span className="text-xs">✕</span>
                    </Link>
                  )}
                  {category && (
                    <Link
                      href={`/directory${qs({ category: "", page: 1 })}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-[#002D62] text-xs font-bold border border-blue-200"
                    >
                      <span>🏷️ {CATEGORIES.find((c) => c.slug === category)?.name || category}</span>
                      <span className="text-xs">✕</span>
                    </Link>
                  )}
                  {city && (
                    <Link
                      href={`/directory${qs({ city: "", page: 1 })}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200"
                    >
                      <span>🍁 {city}</span>
                      <span className="text-xs">✕</span>
                    </Link>
                  )}
                  {province && (
                    <Link
                      href={`/directory${qs({ province: "", page: 1 })}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200"
                    >
                      <span>Province: {province}</span>
                      <span className="text-xs">✕</span>
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Province Filter */}
            <div className="space-y-2 border-t border-[#E2E8F0] pt-4">
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                Province / Territory
              </label>
              <div className="flex flex-wrap gap-1">
                <Link
                  href={`/directory${qs({ province: "", page: 1 })}`}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    !province
                      ? "bg-[#002D62] text-white"
                      : "bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]"
                  }`}
                >
                  All ({results.length})
                </Link>
                {PROVINCES.map((p) => {
                  const count = provCounts[p.code] || 0;
                  if (count === 0 && province !== p.code) return null;
                  const active = province === p.code;
                  return (
                    <Link
                      key={p.code}
                      href={`/directory${qs({ province: active ? "" : p.code, page: 1 })}`}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                        active
                          ? "bg-[#E00624] text-white shadow-xs"
                          : "bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]"
                      }`}
                    >
                      {p.code} {count > 0 && <span className="opacity-70 text-[10px]">({count})</span>}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2 border-t border-[#E2E8F0] pt-4">
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                Category ({CATEGORIES.length})
              </label>
              <div className="space-y-0.5 max-h-64 overflow-y-auto pr-1">
                <Link
                  href={`/directory${qs({ category: "", page: 1 })}`}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-bold transition ${
                    !category
                      ? "bg-[#002D62] text-white"
                      : "text-[#334155] hover:bg-[#F1F5F9]"
                  }`}
                >
                  <span>All Categories</span>
                </Link>
                {CATEGORIES.map((c) => {
                  const count = catCounts[c.slug] || 0;
                  const active = category === c.slug;
                  return (
                    <Link
                      key={c.slug}
                      href={`/directory${qs({ category: active ? "" : c.slug, page: 1 })}`}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition ${
                        active
                          ? "bg-[#E00624] text-white font-bold shadow-xs"
                          : "text-[#334155] hover:bg-[#F1F5F9]"
                      }`}
                    >
                      <span className="truncate flex items-center gap-1.5">
                        <span>{c.name}</span>
                      </span>
                      <span className={`text-[10px] ml-1 shrink-0 ${active ? "text-white" : "text-[#94A3B8]"}`}>
                        {count}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* City Filter */}
            <div className="space-y-2 border-t border-[#E2E8F0] pt-4">
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                Top Canadian Cities
              </label>
              <div className="flex flex-wrap gap-1 max-h-48 overflow-y-auto pr-1">
                <Link
                  href={`/directory${qs({ city: "", page: 1 })}`}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    !city
                      ? "bg-[#002D62] text-white"
                      : "bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]"
                  }`}
                >
                  All Cities
                </Link>
                {CITIES.map((c) => {
                  const count = cityCounts[c.name.toLowerCase()] || 0;
                  if (count === 0 && city.toLowerCase() !== c.name.toLowerCase()) return null;
                  const active = city.toLowerCase() === c.name.toLowerCase();
                  return (
                    <Link
                      key={c.slug}
                      href={`/directory${qs({ city: active ? "" : c.name, page: 1 })}`}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                        active
                          ? "bg-[#E00624] text-white shadow-xs"
                          : "bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]"
                      }`}
                    >
                      {c.name} {count > 0 && <span className="opacity-70 text-[10px]">({count})</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <AdSlot label="Directory Sidebar Sponsor" />
        </aside>

        {/* Listings Section */}
        <section className="lg:col-span-9 space-y-6">
          <div className="bg-white rounded-2xl border border-[#CBD5E1] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div>
              <p className="text-xs font-extrabold text-[#002D62] uppercase tracking-wider">
                Showing {slice.length} of {results.length.toLocaleString()} Canadian businesses
              </p>
              <p className="text-xs text-[#64748B] mt-0.5">
                {q && `Keyword: "${q}" · `}
                {category && `Category: "${CATEGORIES.find((c) => c.slug === category)?.name || category}" · `}
                {city && `City: ${city} · `}
                {province && `Province: ${province}`}
                {!q && !category && !city && !province && "All verified businesses nationwide"}
              </p>
            </div>

            {/* Sort & Action controls */}
            <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[#64748B] font-bold">Sort:</span>
                <select
                  value={sort}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-2.5 py-1.5 text-xs font-bold text-[#0F172A] outline-none cursor-pointer"
                >
                  <option value="relevance">Most Relevant</option>
                  <option value="featured">Featured First</option>
                  <option value="name-asc">Name (A–Z)</option>
                  <option value="name-desc">Name (Z–A)</option>
                  <option value="verified">Verified First</option>
                </select>
              </div>

              <Link
                href="/add-business"
                className="btn-primary rounded-xl px-3.5 py-1.5 text-xs font-extrabold shadow-sm shrink-0"
              >
                + Add Listing
              </Link>
            </div>
          </div>

          {slice.length === 0 ? (
            <div className="bg-white rounded-[2rem] border border-[#CBD5E1] p-12 text-center space-y-4 shadow-card">
              <span className="text-4xl">🔍</span>
              <h3 className="font-outfit font-extrabold text-xl text-[#0F172A]">No businesses found</h3>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
                We couldn&apos;t find any listings matching your search filters. Try clearing some filters or searching by a broader keyword.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <Link
                  href="/directory"
                  className="btn-navy rounded-xl px-5 py-2.5 text-xs font-bold"
                >
                  View All Listings
                </Link>
                <Link
                  href="/add-business"
                  className="btn-primary rounded-xl px-5 py-2.5 text-xs font-bold shadow"
                >
                  + Add Your Business
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {slice.map((biz) => (
                <BusinessCard key={biz.id} biz={biz} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {pages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              {safePage > 1 && (
                <Link
                  href={`/directory${qs({ page: safePage - 1 })}`}
                  className="px-3.5 py-2 rounded-xl border border-[#CBD5E1] bg-white text-xs font-bold text-[#002D62] hover:bg-[#F8FAFC] transition"
                >
                  ← Prev
                </Link>
              )}
              {Array.from({ length: Math.min(pages, 7) }, (_, i) => {
                let pageNum = i + 1;
                if (pages > 7 && safePage > 4) {
                  pageNum = safePage - 3 + i;
                  if (pageNum > pages) pageNum = pages - (6 - i);
                }
                const active = pageNum === safePage;
                return (
                  <Link
                    key={pageNum}
                    href={`/directory${qs({ page: pageNum })}`}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-extrabold transition ${
                      active
                        ? "bg-[#002D62] text-white shadow-xs"
                        : "border border-[#CBD5E1] bg-white text-[#475569] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}
              {safePage < pages && (
                <Link
                  href={`/directory${qs({ page: safePage + 1 })}`}
                  className="px-3.5 py-2 rounded-xl border border-[#CBD5E1] bg-white text-xs font-bold text-[#002D62] hover:bg-[#F8FAFC] transition"
                >
                  Next →
                </Link>
              )}
            </div>
          )}
        </section>
      </div>

      {/* SafeNet Creations Partner Link Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center shadow-xs">
        <p className="text-xs text-[#64748B]">
          Canada&apos;s Tamil Business Network architected &amp; deployed by{" "}
          <a
            href="https://www.safenetcreations.com/canada/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-[#002D62] hover:text-[#E00624] underline transition"
          >
            SafeNet Creations Canada
          </a>
        </p>
      </div>
    </main>
  );
}
