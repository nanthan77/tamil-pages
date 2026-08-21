"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { countTemplesByCity, getAllTemples, searchTemples } from "@/lib/temples";
import { mapsLink, telLink } from "@/lib/utils";

export default function TemplesDirectoryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 bg-[#FFFBEB] p-12 text-center">
          <span className="text-4xl animate-bounce">🛕</span>
          <p className="text-base font-extrabold text-[#78350F]">
            ஓம் நமச்சிவாய · Loading Canadian Tamil Spiritual Sanctuaries…
          </p>
        </div>
      }
    >
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
        t.tamilName.toLowerCase().includes(deity.toLowerCase())
    );
  }

  const cityCounts = countTemplesByCity();
  const allCities = Object.keys(cityCounts).sort();

  const deities = [
    { label: "🦚 Lord Murugan (முருகன்)", query: "Murugan" },
    { label: "🐘 Sri Vinayagar (விநாயகர்)", query: "Ganapathy" },
    { label: "🔱 Lord Shiva & Lingam (சிவன்)", query: "Shiva" },
    { label: "🌺 Durga & Amman (துர்க்கை / அம்மன்)", query: "Amman" },
    { label: "🐅 Lord Ayyappa (ஐயப்பன்)", query: "Ayyappa" },
    { label: "🪷 Sri Venkateshwara (பெருமாள்)", query: "Venkateshwara" },
  ];

  const provinces = [
    { code: "ON", name: "Ontario (ஒன்ராறியோ)" },
    { code: "QC", name: "Quebec (கியூபெக்)" },
    { code: "BC", name: "British Columbia (பிரிட்டிஷ் கொலம்பியா)" },
    { code: "AB", name: "Alberta (ஆல்பர்ட்டா)" },
    { code: "MB", name: "Manitoba (மனிடோபா)" },
    { code: "NS", name: "Nova Scotia (நோவா ஸ்கோடியா)" },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] pb-16 space-y-10">
      {/* 1. Auspicious Devotional Chant Bar */}
      <div className="bg-gradient-to-r from-[#78350F] via-[#991B1B] to-[#78350F] text-[#FEF3C7] py-2.5 px-4 text-center text-xs font-bold tracking-widest uppercase border-b border-[#F59E0B]/30 shadow-xs flex items-center justify-center gap-3 overflow-hidden">
        <span className="hidden sm:inline">🕉️ ஓம் கணபதயே நமஹ</span>
        <span>·</span>
        <span>🦚 ஓம் சரவணபவ</span>
        <span>·</span>
        <span>🔱 ஓம் நமச்சிவாய</span>
        <span>·</span>
        <span>🌺 ஓம் சக்தி</span>
        <span>·</span>
        <span className="hidden sm:inline">🪷 ஓம் நமோ நாராயணாய 🕉️</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 2. Grand Spiritual Hero Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#450A0A] via-[#7F1D1D] to-[#1E1B4B] border-2 border-[#F59E0B]/40 p-8 sm:p-14 text-white shadow-[0_20px_50px_rgba(127,29,29,0.3)]">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-[#DC2626]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/50 text-[#FDE68A] text-xs font-black uppercase tracking-wider backdrop-blur-md">
              <span className="text-base">🛕</span>
              <span>Canadian Tamil Spiritual Sanctuaries · கனடா வாழ் தமிழர்களுக்கான பிரசித்தி பெற்ற ஆலயங்கள்</span>
            </div>

            <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Tamil Hindu Temples in <span className="text-[#FDE68A] underline decoration-[#F59E0B] decoration-4 underline-offset-8">Canada</span>
            </h1>

            <p className="tamil text-xl sm:text-2xl font-bold text-[#FDE68A] leading-relaxed">
              கனடா வாழ் தமிழர்களுக்கான பிரசித்தி பெற்ற இந்துக் கோவில்கள் மற்றும் நித்திய பூசை நேரங்கள்
            </p>

            <p className="text-[#FDE68A]/90 text-sm sm:text-base leading-relaxed max-w-3xl">
              Find verified opening darshan timings, daily 4-kala pooja schedules, annual Ther Thiruvizha (Chariot Festivals), Vedic priest services, and authentic temple prasadam / Annadhanam across Ontario, Quebec, BC, Alberta, Manitoba, and Nova Scotia.
            </p>

            {/* Spiritual Search Bar */}
            <form action="/temples" method="get" className="pt-3 flex flex-col sm:flex-row gap-3 max-w-2xl">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-lg">🪔</span>
                <input
                  type="text"
                  name="q"
                  defaultValue={q}
                  placeholder="Search temple name, deity (e.g. Murugan, Ganapathy), city, or pooja…"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-[#1E1B4B] text-sm font-semibold placeholder-slate-400 outline-none border-2 border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/30 shadow-lg"
                />
              </div>
              <button
                type="submit"
                className="rounded-2xl px-8 py-3.5 text-sm font-black bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white hover:brightness-110 shadow-lg cursor-pointer transition transform active:scale-95 shrink-0 flex items-center justify-center gap-2"
              >
                <span>🔍</span>
                <span>Search Sanctuaries</span>
              </button>
            </form>

            {/* Quick Live Stats */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-[#FEF3C7]">
              <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-amber-400">🛕</span>
                <span>{getAllTemples().length} Consecrated Temples</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-amber-400">🍁</span>
                <span>6 Canadian Provinces</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-amber-400">🪔</span>
                <span>Daily 4-Kala Agamic Poojas</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-amber-400">✓</span>
                <span>Verified Canadian Registered Charities</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Devotional Filter & Selection Area */}
        <div className="bg-gradient-to-br from-[#FFFBEB] via-white to-[#FEF3C7]/40 rounded-3xl border-2 border-[#F59E0B]/30 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Deity Filter Pills */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#78350F] flex items-center gap-2">
                <span>🪔</span>
                <span>Filter by Presiding Deity (மூலவர் வழிபாடு):</span>
              </span>
              {(deity || city || province || q) && (
                <Link href="/temples" className="text-xs font-bold text-[#991B1B] hover:underline flex items-center gap-1">
                  <span>✕</span>
                  <span>Reset All Filters</span>
                </Link>
              )}
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/temples"
                className={
                  !deity && !city && !province && !q
                    ? "px-4 py-2 rounded-2xl text-xs font-black transition-all duration-200 flex items-center gap-1.5 bg-[#78350F] text-[#FEF3C7] shadow-md ring-2 ring-[#F59E0B]"
                    : "px-4 py-2 rounded-2xl text-xs font-black transition-all duration-200 flex items-center gap-1.5 bg-white text-[#78350F] border border-[#F59E0B]/40 hover:bg-[#FEF3C7]/50"
                }
              >
                <span>🛕 All Deities</span>
                <span className="opacity-80">({getAllTemples().length})</span>
              </Link>
              {deities.map((d) => {
                const isSelected = deity.toLowerCase() === d.query.toLowerCase();
                return (
                  <Link
                    key={d.query}
                    href={"/temples?deity=" + encodeURIComponent(d.query)}
                    className={
                      isSelected
                        ? "px-4 py-2 rounded-2xl text-xs font-black transition-all duration-200 bg-[#991B1B] text-white shadow-md ring-2 ring-[#F59E0B]"
                        : "px-4 py-2 rounded-2xl text-xs font-black transition-all duration-200 bg-white text-[#78350F] border border-[#F59E0B]/40 hover:border-[#991B1B] hover:bg-[#FEF3C7]/60"
                    }
                  >
                    {d.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Canadian Provinces & Major Cities */}
          <div className="border-t border-[#F59E0B]/20 pt-4 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#78350F] flex items-center gap-2">
              <span>🇨🇦</span>
              <span>Filter by Canadian Province &amp; City:</span>
            </span>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/temples"
                className={
                  !province && !city
                    ? "px-3.5 py-1.5 rounded-xl text-xs font-bold transition bg-[#78350F] text-[#FEF3C7]"
                    : "px-3.5 py-1.5 rounded-xl text-xs font-bold transition bg-white text-[#78350F] border border-[#F59E0B]/30 hover:bg-[#FEF3C7]/40"
                }
              >
                🍁 All Canada
              </Link>
              {provinces.map((prov) => {
                const isSelected = province.toUpperCase() === prov.code;
                return (
                  <Link
                    key={prov.code}
                    href={"/temples?province=" + prov.code}
                    className={
                      isSelected
                        ? "px-3.5 py-1.5 rounded-xl text-xs font-bold transition bg-[#991B1B] text-white shadow-xs"
                        : "px-3.5 py-1.5 rounded-xl text-xs font-bold transition bg-white text-[#78350F] border border-[#F59E0B]/30 hover:border-[#991B1B]"
                    }
                  >
                    {prov.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {allCities.map((cityName) => {
                const isSelected = city.toLowerCase() === cityName.toLowerCase();
                const count = cityCounts[cityName] || 0;
                const displayName = cityName.replace(/\b\w/g, (m) => m.toUpperCase());
                return (
                  <Link
                    key={cityName}
                    href={"/temples?city=" + encodeURIComponent(displayName)}
                    className={
                      isSelected
                        ? "px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-[#F59E0B] text-[#450A0A] shadow-xs font-black ring-1 ring-[#B45309]"
                        : "px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-[#FEF3C7]/60 text-[#78350F] border border-[#F59E0B]/20 hover:bg-[#FDE68A]"
                    }
                  >
                    <span>📍 {displayName}</span>
                    <span className="bg-white/80 px-1.5 py-0.2 rounded-md text-[10px] text-[#78350F]">
                      {count}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Temples Showcase Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#F59E0B]/30 pb-3">
            <div>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#450A0A]">
                {city
                  ? city + " Temples"
                  : province
                  ? province + " Temples"
                  : deity
                  ? deity + " Temples in Canada"
                  : q
                  ? 'Search Results for "' + q + '"'
                  : "All Canadian Tamil Spiritual Sanctuaries"}
              </h2>
              <p className="text-xs font-bold text-[#78350F] mt-0.5">
                Showing {temples.length} consecrated temples across Canada
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#78350F] bg-[#FEF3C7] px-3.5 py-1.5 rounded-xl border border-[#F59E0B]/40">
              <span>🪔</span>
              <span>Updated for Today: August 20, 2026</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {temples.map((temple) => (
              <article
                key={temple.slug}
                className="bg-white rounded-[2.2rem] border-2 border-[#F59E0B]/30 hover:border-[#991B1B] shadow-sm hover:shadow-[0_12px_30px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
              >
                <div className="h-2 w-full bg-gradient-to-r from-[#F59E0B] via-[#DC2626] to-[#F59E0B]" />

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-3.5 py-1 rounded-full bg-[#FEF3C7] text-[#78350F] border border-[#F59E0B]/40 font-black uppercase text-[10px] tracking-wider flex items-center gap-1">
                      <span>🛕</span>
                      <span>{temple.moolavar.split("(")[0]}</span>
                    </span>
                    <span className="text-[#78350F] font-bold text-xs bg-[#FFFBEB] px-2.5 py-1 rounded-full border border-[#FDE68A]">
                      🍁 {temple.city}, {temple.province}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-outfit font-extrabold text-xl text-[#1E1B4B] group-hover:text-[#991B1B] transition leading-snug">
                      <Link href={"/temples/" + temple.slug}>{temple.name}</Link>
                    </h3>
                    <p className="tamil text-sm font-bold text-[#991B1B] mt-0.5">
                      {temple.tamilName}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7]/40 rounded-2xl border border-[#F59E0B]/30 p-4 space-y-2.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#991B1B] font-extrabold text-base shrink-0">🕒</span>
                      <div>
                        <span className="font-black text-[#78350F]">Darshan Hours:</span>
                        <p className="text-[#450A0A] font-semibold mt-0.5">
                          {temple.darshanHours.weekdayMorning} &amp; {temple.darshanHours.weekdayEvening}
                        </p>
                        <p className="text-[#78350F] text-[11px] font-medium mt-0.5">
                          Weekends: {temple.darshanHours.weekendHours}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 border-t border-[#F59E0B]/20 pt-2.5">
                      <span className="text-[#D97706] font-extrabold text-base shrink-0">🪔</span>
                      <div>
                        <span className="font-black text-[#78350F]">Daily Agamic Poojas:</span>
                        <p className="text-[#450A0A] font-semibold mt-0.5">
                          {temple.poojaTimings.map((p) => p.name + " (" + p.time + ")").join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {temple.festivals.length > 0 && (
                    <div className="text-xs bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-3 text-[#991B1B]">
                      <span className="font-extrabold block text-[#7F1D1D] flex items-center gap-1.5">
                        <span>🎪</span>
                        <span>{temple.festivals[0].name} ({temple.festivals[0].month}):</span>
                      </span>
                      <p className="text-[11px] text-[#991B1B] line-clamp-2 mt-0.5">
                        {temple.festivals[0].description}
                      </p>
                    </div>
                  )}

                  <div className="text-xs text-[#78350F] flex items-center gap-1.5 truncate">
                    <span>📍</span>
                    <span className="truncate">{temple.address}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#FFFBEB] border-t border-[#F59E0B]/20 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {temple.phone && (
                      <a
                        href={telLink(temple.phone)}
                        className="rounded-xl px-3.5 py-1.5 text-xs font-black bg-[#991B1B] text-white hover:bg-[#7F1D1D] transition flex items-center gap-1 shadow-xs"
                        title="Call Temple Office"
                      >
                        <span>📞</span>
                        <span>Call</span>
                      </a>
                    )}
                    <a
                      href={mapsLink(temple.address, temple.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-xl border border-[#F59E0B]/40 bg-white text-[#78350F] hover:bg-[#FEF3C7] text-xs font-bold transition flex items-center gap-1"
                      title="Google Maps Directions"
                    >
                      <span>🗺️</span>
                    </a>
                  </div>

                  <Link
                    href={"/temples/" + temple.slug}
                    className="rounded-xl px-4 py-1.5 text-xs font-black bg-[#78350F] text-[#FEF3C7] hover:bg-[#450A0A] shadow-xs flex items-center gap-1.5 ml-auto transition"
                  >
                    <span>Temple Page</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 5. VERY BIG SAFENET CANADA SPIRITUAL SANCTUARIES & HERITAGE NETWORK LINK */}
        <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#450A0A] via-[#78350F] to-[#1E1B4B] border-4 border-[#F59E0B] p-8 sm:p-14 text-white shadow-[0_25px_60px_rgba(120,53,15,0.4)] text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F59E0B]/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FEF3C7]/20 border border-[#FDE68A]/40 text-[#FDE68A] text-xs font-black uppercase tracking-wider">
              <span>🇨🇦</span>
              <span>Canadian Tamil Hindu Heritage &amp; Temple Information System</span>
            </div>

            <h2 className="font-outfit font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#FEF3C7] leading-tight">
              Preserving Tamil Agamic Heritage Across Canada
            </h2>

            <p className="tamil text-lg sm:text-xl font-bold text-[#FDE68A]">
              கனடா வாழ் தமிழர்களுக்கான ஆலயம், ஆன்மீகம், பூசை விபரங்கள் மற்றும் கலாச்சார வழிகாட்டி
            </p>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              This Canadian Tamil Spiritual Sanctuaries directory is architected and maintained to support Hindu temples, registered charitable trusts, devotee pilgrimages, Annadhanam feeding networks, and Vedic priesthood services across Canada.
            </p>

            {/* Big Action Link to SafeNet Canada */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.safenetcreations.com/canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-10 py-4 text-base sm:text-lg font-black bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white hover:brightness-110 shadow-2xl transition transform hover:scale-105 active:scale-95 flex items-center gap-3 border-2 border-[#FEF3C7]"
              >
                <span>🍁</span>
                <span>Visit SafeNet Creations Canada Portal</span>
                <span>→</span>
              </a>

              <a
                href="https://www.safenetcreations.com/canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-6 py-4 text-sm font-extrabold bg-white/10 hover:bg-white/20 text-[#FEF3C7] border border-white/30 backdrop-blur-md transition flex items-center gap-2"
              >
                <span>🛕</span>
                <span>Submit / Update Temple Information</span>
              </a>
            </div>

            <p className="text-xs text-white/60 pt-2">
              Official SafeNet Creations Canada Directory Architecture · Verified Canadian Registered Charities &amp; Hindu Religious Sanctuaries
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
