"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { countTemplesByCity, getAllTemples, searchTemples } from "@/lib/temples";
import { mapsLink, telLink } from "@/lib/utils";

export default function TemplesDirectoryPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm font-bold text-[#002D62]">Loading Canadian Tamil Temples…</div>}>
      <TemplesContent />
    </Suspense>
  );
}

function TemplesContent() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";
  const province = searchParams.get("province") || "";
  const deity = searchParams.get("deity") || "";
  const q = searchParams.get("q") || "";

  let temples = getAllTemples();

  if (q) {
    temples = searchTemples(q);
  }
  if (city) {
    temples = temples.filter((t) => t.city.toLowerCase() === city.toLowerCase());
  }
  if (province) {
    temples = temples.filter((t) => t.province.toLowerCase() === province.toLowerCase());
  }
  if (deity) {
    temples = temples.filter(
      (t) =>
        t.moolavar.toLowerCase().includes(deity.toLowerCase()) ||
        t.name.toLowerCase().includes(deity.toLowerCase()) ||
        t.tamilName.toLowerCase().includes(deity.toLowerCase()),
    );
  }

  const cityCounts = countTemplesByCity();
  const allCities = Object.keys(cityCounts).sort();

  const deities = [
    { label: "🦚 Lord Murugan", query: "Murugan" },
    { label: "🐘 Sri Vinayagar", query: "Ganapathy" },
    { label: "🔱 Lord Shiva & Lingam", query: "Shiva" },
    { label: "🌺 Durga & Amman", query: "Amman" },
    { label: "🐅 Lord Ayyappa", query: "Ayyappa" },
    { label: "🪷 Venkateshwara", query: "Venkateshwara" },
  ];

  const provinces = [
    { code: "ON", name: "Ontario" },
    { code: "QC", name: "Quebec" },
    { code: "BC", name: "British Columbia" },
    { code: "AB", name: "Alberta" },
    { code: "MB", name: "Manitoba" },
    { code: "NS", name: "Nova Scotia" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[#E00624]/15 blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
            <span>🛕</span>
            <span>Canadian Tamil Temples &amp; Spiritual Directory</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Tamil Hindu Temples in <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">Canada</span>
          </h1>

          <p className="tamil text-lg sm:text-xl font-bold text-white/95">
            கனடா முழுவதும் உள்ள தமிழ் இந்துக் கோவில்கள் — பூசை நேரங்கள், திருவிழாக்கள் மற்றும் விபரங்கள்.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Discover opening &amp; closing darshan times, daily 4-kala pooja schedules, annual Ther Thiruvizha (Chariot Festivals), priest services, and nearby vegetarian restaurants &amp; catering across Canadian cities.
          </p>

          {/* Search Form */}
          <form action="/temples" method="get" className="pt-2 flex flex-col sm:flex-row gap-2 max-w-xl">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search by temple name, deity, city, or address…"
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white text-[#0F172A] text-xs font-medium placeholder-gray-400 outline-none shadow-md"
              />
            </div>
            <button
              type="submit"
              className="btn-primary rounded-2xl px-6 py-3 text-xs font-black shrink-0 shadow-md cursor-pointer"
            >
              Search Temples
            </button>
          </form>
        </div>
      </div>

      {/* Filters Area */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-5 shadow-sm space-y-4">
        {/* Deity Filter Pills */}
        <div className="space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62] block">
            Filter by Presiding Deity (மூலவர்):
          </span>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/temples"
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                !deity && !city && !province && !q
                  ? "bg-[#002D62] text-white shadow-xs"
                  : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62]"
              }`}
            >
              All Deities ({getAllTemples().length})
            </Link>
            {deities.map((d) => {
              const isSelected = deity.toLowerCase() === d.query.toLowerCase();
              return (
                <Link
                  key={d.query}
                  href={`/temples?deity=${encodeURIComponent(d.query)}`}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                    isSelected
                      ? "bg-[#E00624] text-white shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
                  }`}
                >
                  {d.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Province / City Filters */}
        <div className="border-t border-[#E2E8F0] pt-3 space-y-2">
          <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
            <span className="text-[#002D62]">Filter by Canadian Province &amp; City:</span>
            <span className="text-[#E00624]">{temples.length} Temples Found</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/temples"
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                !province && !city
                  ? "bg-[#002D62] text-white"
                  : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62]"
              }`}
            >
              🇨🇦 All Canada
            </Link>
            {provinces.map((prov) => {
              const isSelected = province.toUpperCase() === prov.code;
              return (
                <Link
                  key={prov.code}
                  href={`/temples?province=${prov.code}`}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    isSelected
                      ? "bg-[#002D62] text-white"
                      : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62]"
                  }`}
                >
                  {prov.name}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {allCities.map((cityName) => {
              const isSelected = city.toLowerCase() === cityName.toLowerCase();
              const count = cityCounts[cityName] || 0;
              const displayName = cityName.replace(/\b\w/g, (m) => m.toUpperCase());
              return (
                <Link
                  key={cityName}
                  href={`/temples?city=${encodeURIComponent(displayName)}`}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 ${
                    isSelected
                      ? "bg-[#E00624] text-white"
                      : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
                  }`}
                >
                  <span>{displayName}</span>
                  <span className="opacity-70 text-[10px]">({count})</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Temples Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-outfit font-extrabold text-xl sm:text-2xl text-[#0F172A]">
            {city
              ? `${city} Temples`
              : province
              ? `${province} Temples`
              : deity
              ? `${deity} Temples in Canada`
              : q
              ? `Search Results for "${q}"`
              : "All Canadian Tamil Temples"}{" "}
            ({temples.length})
          </h2>
          {(city || province || deity || q) && (
            <Link href="/temples" className="text-xs font-bold text-[#E00624] hover:underline">
              ✕ Clear Filters
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temples.map((temple) => (
            <article
              key={temple.slug}
              className="bg-white rounded-[2rem] border border-[#CBD5E1] hover:border-[#002D62] shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62]" />

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black uppercase text-[10px] tracking-wider">
                    🛕 {temple.moolavar.split("(")[0]}
                  </span>
                  <span className="text-[#334155] font-bold text-xs bg-[#F8FAFC] px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                    🍁 {temple.city}, {temple.province}
                  </span>
                </div>

                <div>
                  <h3 className="font-outfit font-extrabold text-xl text-[#0F172A] group-hover:text-[#002D62] transition leading-snug">
                    <Link href={`/temples/${temple.slug}`}>{temple.name}</Link>
                  </h3>
                  <p className="tamil text-sm font-bold text-[#E00624] mt-0.5">
                    {temple.tamilName}
                  </p>
                </div>

                <div className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-3.5 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-[#002D62] font-extrabold text-sm shrink-0">🕒</span>
                    <div>
                      <span className="font-bold text-[#0F172A]">Darshan Hours:</span>
                      <p className="text-[#64748B] mt-0.5">
                        {temple.darshanHours.weekdayMorning} &amp; {temple.darshanHours.weekdayEvening}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 border-t border-[#E2E8F0] pt-2">
                    <span className="text-[#E00624] font-extrabold text-sm shrink-0">🪔</span>
                    <div>
                      <span className="font-bold text-[#0F172A]">Daily Poojas:</span>
                      <p className="text-[#64748B] mt-0.5">
                        {temple.poojaTimings.map((p) => `${p.name} (${p.time})`).join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>

                {temple.festivals.length > 0 && (
                  <div className="text-xs bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-amber-950">
                    <span className="font-extrabold block text-amber-900">
                      🎪 {temple.festivals[0].name}:
                    </span>
                    <p className="text-[11px] text-amber-800 line-clamp-2 mt-0.5">
                      {temple.festivals[0].description}
                    </p>
                  </div>
                )}

                <div className="text-xs text-[#64748B] flex items-center gap-1.5 truncate">
                  <span>📍</span>
                  <span className="truncate">{temple.address}</span>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {temple.phone && (
                    <a
                      href={telLink(temple.phone)}
                      className="btn-primary rounded-xl px-3.5 py-1.5 text-xs font-bold flex items-center gap-1"
                    >
                      <span>📞</span>
                      <span>Call</span>
                    </a>
                  )}
                  <a
                    href={mapsLink(temple.address, temple.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl border border-[#CBD5E1] bg-white text-[#002D62] hover:bg-[#F0F7FF] text-xs font-bold transition flex items-center gap-1"
                    title="Google Maps Directions"
                  >
                    <span>🗺️</span>
                  </a>
                </div>

                <Link
                  href={`/temples/${temple.slug}`}
                  className="btn-navy rounded-xl px-4 py-1.5 text-xs font-black shadow-xs flex items-center gap-1.5 ml-auto"
                >
                  <span>Temple Page</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SafeNet Creations Attribution Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center shadow-xs">
        <p className="text-xs text-[#64748B]">
          Digital Directory &amp; Temple Information System Architecture designed &amp; maintained by{" "}
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
