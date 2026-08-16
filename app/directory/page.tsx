import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import SearchForm from "@/components/SearchForm";
import { itemListJsonLd } from "@/lib/seo";
import { CATEGORIES } from "@/lib/categories";
import { CITIES, PROVINCES } from "@/lib/cities";
import { countByCategory, countByCity, countByProvince, searchBusinesses } from "@/lib/store";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Canada Tamil business directory",
  description:
    "Browse Tamil restaurants, grocers, lawyers, clinics and temples across Canada. Free listings. Sitemap-ready pages for Google.",
  alternates: { canonical: "/directory" },
};

export default async function DirectoryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; city?: string; province?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const q = sp.q || "";
  const category = sp.category || "";
  const city = sp.city || "";
  const province = (sp.province || "").toUpperCase();
  const page = Math.max(1, Number(sp.page || 1) || 1);
  const pageSize = 24;

  const results = searchBusinesses({ q, category, city, province });
  const pages = Math.max(1, Math.ceil(results.length / pageSize));
  const safePage = Math.min(page, pages);
  const slice = results.slice((safePage - 1) * pageSize, safePage * pageSize);

  const qs = (extra: Record<string, string | number> = {}) => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (category) p.set("category", category);
    if (city) p.set("city", city);
    if (province) p.set("province", province);
    Object.entries(extra).forEach(([k, v]) => {
      if (v) p.set(k, String(v));
      else p.delete(k);
    });
    const s = p.toString();
    return s ? `?${s}` : "";
  };

  const catCounts = countByCategory();
  const cityCounts = countByCity();
  const provCounts = countByProvince();

  // Filter cities by active province if selected
  const displayCities = (
    province ? CITIES.filter((c) => c.province.toUpperCase() === province) : CITIES
  )
    .map((c) => ({
      ...c,
      count: cityCounts[c.name.toLowerCase()] || 0,
    }))
    .sort((a, b) => b.count - a.count);

  const topCities = displayCities.slice(0, 24);
  const activeCategoryObj = CATEGORIES.find((c) => c.slug === category);
  const hasFilters = Boolean(q || category || city || province);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <JsonLd data={itemListJsonLd("Canada Tamil directory", "/directory", slice)} />
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2rem] p-6 sm:p-8 text-white shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-full bg-[#E00624]/10 blur-2xl pointer-events-none" />
        
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-black uppercase tracking-wider text-white">
            <span>🇨🇦</span>
            <span>Coast-to-Coast Canada Directory</span>
          </div>
          <h1 className="font-outfit font-extrabold text-2xl sm:text-4xl text-white">
            {city
              ? `${city} Tamil Businesses`
              : province
              ? `${PROVINCES.find((p) => p.code === province)?.name || province} Tamil Businesses`
              : "Canada Tamil Directory"}
          </h1>
          <p className="text-white/80 text-sm max-w-xl">
            Found <strong className="text-white font-black">{results.length.toLocaleString()}</strong> verified listings
            {results.length > 0 ? ` · Showing page ${safePage} of ${pages}` : ""}
            {city ? ` in ${city}` : province ? ` in ${province}` : " across Canada"}
            {activeCategoryObj ? ` · ${activeCategoryObj.name}` : ""}
          </p>
        </div>

        {hasFilters && (
          <Link
            href="/directory"
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#002D62] hover:bg-[#F0F7FF] text-xs font-black shadow-md transition"
          >
            <span>✕</span>
            <span>Reset All Filters</span>
          </Link>
        )}
      </div>

      {/* Main Search Bar */}
      <SearchForm q={q} category={category} city={city} province={province} />
      <AdSlot label="Top of directory" />

      {/* Province Tabs */}
      <div className="bg-white rounded-2xl border border-[#CBD5E1] p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto">
        <Link
          href={`/directory?${new URLSearchParams({ ...(category ? { category } : {}), ...(q ? { q } : {}) }).toString()}`}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
            !province
              ? "bg-[#002D62] text-white shadow-xs"
              : "text-[#475569] hover:bg-[#F0F7FF] hover:text-[#002D62]"
          }`}
        >
          <span>🇨🇦 All Canada</span>
        </Link>
        {PROVINCES.map((p) => {
          const isSelected = province === p.code;
          const count = provCounts[p.code] || 0;
          return (
            <Link
              key={p.code}
              href={`/directory?province=${p.code}${category ? `&category=${category}` : ""}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                isSelected
                  ? "bg-[#E00624] text-white shadow-xs"
                  : "text-[#475569] hover:bg-[#F0F7FF] hover:text-[#002D62]"
              }`}
            >
              <span>{p.name}</span>
              <span className={`text-[10px] ${isSelected ? "text-white/80" : "text-[#64748B]"}`}>
                ({count})
              </span>
            </Link>
          );
        })}
      </div>

      {/* Quick City Filter Bar */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-4 shadow-sm space-y-2">
        <div className="flex items-center justify-between text-[11px] font-extrabold text-[#64748B] uppercase tracking-wider px-1">
          <span className="flex items-center gap-1">
            <span>🍁</span> Quick City Navigator {province ? `(${province})` : ""}
          </span>
          <span className="text-[#002D62] font-black">
            {displayCities.filter((c) => c.count > 0).length} Cities with Listings
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Link
            href={`/directory?${new URLSearchParams({ ...(province ? { province } : {}), ...(category ? { category } : {}), ...(q ? { q } : {}) }).toString()}`}
            className={`px-3 py-1 rounded-full text-xs font-bold transition ${
              !city
                ? "bg-[#002D62] text-white shadow-xs"
                : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
            }`}
          >
            All {province || "Canada"} ({results.length})
          </Link>
          {topCities.map((c) => {
            const isSelected = city.toLowerCase() === c.name.toLowerCase();
            return (
              <Link
                key={c.slug}
                href={`/directory?city=${encodeURIComponent(c.name)}${province ? `&province=${province}` : ""}${category ? `&category=${category}` : ""}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                className={`px-3 py-1 rounded-full text-xs transition flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#E00624] text-white font-extrabold shadow-xs"
                    : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
                }`}
              >
                <span>{c.name}</span>
                <span className={`text-[10px] ${isSelected ? "text-white/80" : "text-[#64748B]"}`}>
                  ({c.count})
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Content Layout */}
      <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">
        {/* Sidebar */}
        <aside className="space-y-5 hidden lg:block">
          {/* City Selection Sidebar */}
          <div className="bg-white rounded-3xl border border-[#CBD5E1] p-5 space-y-3 shadow-xs max-h-[480px] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="font-outfit font-extrabold text-[#0F172A] text-sm flex items-center gap-1.5">
                <span>📍</span> Canadian Cities
              </h2>
              {city && (
                <Link
                  href={`/directory?${new URLSearchParams({ ...(province ? { province } : {}), ...(category ? { category } : {}), ...(q ? { q } : {}) }).toString()}`}
                  className="text-[11px] font-bold text-[#E00624] hover:underline"
                >
                  Clear
                </Link>
              )}
            </div>
            <div className="space-y-1">
              <Link
                href={`/directory?${new URLSearchParams({ ...(province ? { province } : {}), ...(category ? { category } : {}), ...(q ? { q } : {}) }).toString()}`}
                className={`flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs transition ${
                  !city
                    ? "bg-[#F0F7FF] text-[#002D62] font-black border border-[#CCE3F8]"
                    : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#002D62]"
                }`}
              >
                <span>All {province ? `${province} Cities` : "Canada"}</span>
                <span className="text-[11px] text-[#64748B] font-bold">{results.length}</span>
              </Link>
              {displayCities.map((c) => {
                const isSelected = city.toLowerCase() === c.name.toLowerCase();
                return (
                  <Link
                    key={c.slug}
                    href={`/directory?city=${encodeURIComponent(c.name)}${c.province ? `&province=${c.province}` : ""}${category ? `&category=${category}` : ""}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                    className={`flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs transition ${
                      isSelected
                        ? "bg-[#F0F7FF] text-[#002D62] font-black border border-[#CCE3F8]"
                        : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#002D62]"
                    }`}
                  >
                    <span>{c.name}, {c.province}</span>
                    <span className={`text-[11px] ${isSelected ? "text-[#002D62] font-bold" : "text-[#64748B]"}`}>
                      {c.count}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Categories Sidebar */}
          <div className="bg-white rounded-3xl border border-[#CBD5E1] p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <h2 className="font-outfit font-extrabold text-[#0F172A] text-sm flex items-center gap-1.5">
                <span>🏷️</span> Categories
              </h2>
              {category && (
                <Link
                  href={`/directory?${new URLSearchParams({ ...(city ? { city } : {}), ...(province ? { province } : {}), ...(q ? { q } : {}) }).toString()}`}
                  className="text-[11px] font-bold text-[#E00624] hover:underline"
                >
                  Clear
                </Link>
              )}
            </div>
            <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
              <Link
                href={`/directory?${new URLSearchParams({ ...(city ? { city } : {}), ...(province ? { province } : {}), ...(q ? { q } : {}) }).toString()}`}
                className={`flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs transition ${
                  !category
                    ? "bg-[#F0F7FF] text-[#002D62] font-black border border-[#CCE3F8]"
                    : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#002D62]"
                }`}
              >
                <span>All Categories</span>
                <span className="text-[11px] text-[#64748B] font-bold">{results.length}</span>
              </Link>
              {CATEGORIES.map((c) => {
                const isSelected = category === c.slug;
                const count = catCounts[c.slug] || 0;
                return (
                  <Link
                    key={c.slug}
                    href={`/directory?category=${c.slug}${city ? `&city=${encodeURIComponent(city)}` : ""}${province ? `&province=${province}` : ""}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                    className={`flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs transition ${
                      isSelected
                        ? "bg-[#F0F7FF] text-[#002D62] font-black border border-[#CCE3F8]"
                        : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#002D62]"
                    }`}
                  >
                    <span className="truncate pr-1">{c.name}</span>
                    <span className={`text-[11px] ${isSelected ? "text-[#002D62] font-bold" : "text-[#64748B]"}`}>
                      {count}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Listings Section */}
        <div className="space-y-6">
          {results.length === 0 ? (
            <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-12 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#F0F7FF] text-[#002D62] text-3xl flex items-center justify-center mx-auto shadow-xs">
                🔍
              </div>
              <h3 className="text-[#0F172A] font-outfit font-extrabold text-xl">
                No listings match your search
              </h3>
              <p className="text-[#64748B] text-sm max-w-md mx-auto leading-relaxed">
                We couldn&apos;t find any businesses matching &ldquo;{q || city || category}&rdquo;. Try another Canadian city or service category — or add your business free!
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/directory"
                  className="rounded-xl px-4 py-2.5 text-xs font-bold border border-[#CBD5E1] bg-white text-[#002D62] hover:bg-[#F0F7FF] transition"
                >
                  View All Canada Listings
                </Link>
                <Link
                  href="/add-business"
                  className="btn-primary rounded-xl px-5 py-2.5 text-xs font-extrabold shadow"
                >
                  + Add Free Business Listing
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {slice.map((b) => (
                <BusinessCard key={b.slug} biz={b} />
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {pages > 1 && (
            <div className="bg-white rounded-3xl border border-[#CBD5E1] p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div className="text-xs text-[#64748B]">
                Showing page <strong className="text-[#0F172A]">{safePage}</strong> of <strong className="text-[#0F172A]">{pages}</strong> ({results.length.toLocaleString()} total listings)
              </div>
              <div className="flex items-center gap-2">
                {safePage > 1 && (
                  <>
                    <Link
                      href={`/directory${qs({ page: 1 })}`}
                      className="px-3 py-1.5 rounded-xl border border-[#CBD5E1] text-xs font-bold text-[#475569] hover:border-[#002D62] hover:text-[#002D62] transition"
                    >
                      « First
                    </Link>
                    <Link
                      href={`/directory${qs({ page: safePage - 1 })}`}
                      className="px-3 py-1.5 rounded-xl border border-[#CBD5E1] text-xs font-bold text-[#002D62] bg-[#F0F7FF] hover:bg-[#CCE3F8] transition"
                    >
                      ← Prev
                    </Link>
                  </>
                )}

                <span className="px-3.5 py-1.5 rounded-xl bg-[#002D62] text-white text-xs font-black shadow-xs">
                  {safePage}
                </span>

                {safePage < pages && (
                  <>
                    <Link
                      href={`/directory${qs({ page: safePage + 1 })}`}
                      className="px-3 py-1.5 rounded-xl border border-[#CBD5E1] text-xs font-bold text-[#002D62] bg-[#F0F7FF] hover:bg-[#CCE3F8] transition"
                    >
                      Next →
                    </Link>
                    <Link
                      href={`/directory${qs({ page: pages })}`}
                      className="px-3 py-1.5 rounded-xl border border-[#CBD5E1] text-xs font-bold text-[#475569] hover:border-[#002D62] hover:text-[#002D62] transition"
                    >
                      Last »
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
