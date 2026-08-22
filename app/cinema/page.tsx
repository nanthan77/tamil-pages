
import Link from "next/link";
import { type Metadata } from "next";
import { CANADA_BOX_OFFICE, getAllTheatres, getAllMovies } from "@/lib/cinema";
import { getCanadianTodayFormatted, mapsLink, telLink } from "@/lib/utils";
import { CinemaInteractiveHub } from "@/components/cinema/CinemaInteractiveHub";

export const metadata: Metadata = {
  title: "Tamil Cinema Showtimes & Box Office Canada | Woodside, Albion & Cineplex",
  description:
    "Official Canadian Tamil movie showtimes, Woodside Cinemas Scarborough tickets, Albion Cinemas Etobicoke, Cineplex Forum Montreal, and Canada Box Office rankings in CAD.",
  keywords: [
    "Tamil movies Canada",
    "Woodside Cinemas showtimes",
    "Scarborough Tamil movies",
    "Albion Cinemas Etobicoke",
    "Cineplex Forum Montreal Tamil",
    "Canada Tamil Box Office",
    "Thalapathy Vijay GOAT Canada",
    "Vishwanath and Sons showtimes",
  ],
};

export default function CinemaPage() {
  const theatres = getAllTheatres();
  const allMovies = getAllMovies();
  const boxOffice = CANADA_BOX_OFFICE;
  const todayFormatted = getCanadianTodayFormatted();
  const cinemaCities = ["Scarborough", "Toronto", "Montreal", "Surrey", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Halifax"];

  // JSON-LD Schema for Movies & Theatres
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Canadian Tamil Cinema Showtimes & Theatres",
    "description": "Daily verified showtimes for Tamil movies in Canada",
    "itemListElement": allMovies.map((m, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Movie",
        "name": m.title,
        "alternateName": m.tamilTitle,
        "director": {
          "@type": "Person",
          "name": m.director
        },
        "genre": m.genre,
        "duration": m.duration
      }
    }))
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[#E00624]/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
            <span>🎬</span>
            <span>Canadian Tamil Cinema &amp; Box Office Intelligence Hub</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Tamil Cinema &amp; <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">Showtimes Canada</span>
          </h1>

          <p className="tamil text-lg sm:text-xl font-bold text-white/95">
            கனடா பாக்ஸ் ஆபீஸ் வசூல், திரையரங்கு காட்சிகள் &amp; டிக்கெட் விபரங்கள்.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Daily verified showtimes across{" "}
            <a
              href="https://www.newwoodsidecinemas.com/showtimes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 font-extrabold hover:underline"
            >
              Woodside Cinemas (Scarborough)
            </a>
            , <strong>Albion Cinemas (Etobicoke)</strong>, <strong>Cineplex Forum (Montreal)</strong>, and <strong>Landmark Cinemas (Surrey/Vancouver)</strong>.
          </p>
        </div>
      </div>

      {/* CANADA BOX OFFICE LEADERBOARD */}
      <section className="bg-gradient-to-br from-slate-900 via-[#0B1D3A] to-slate-900 rounded-[2.5rem] p-6 sm:p-10 text-white shadow-card relative overflow-hidden border-2 border-amber-400/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-amber-400 tracking-wider">
              <span>🏆</span> Canada Box Office Tracker (CAD)
            </div>
            <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Top Grossing Tamil Movies in Canadian Theatres
            </h2>
            <p className="tamil text-xs sm:text-sm text-amber-200 mt-0.5">
              கனடிய திரையரங்குகளில் அதிக வசூல் ஈட்டிய தமிழ் திரைப்படங்களின் விபரங்கள்.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/15 text-xs">
            <span>🍁 All Earnings in Canadian Dollars (CAD)</span>
          </div>
        </div>

        {/* Box Office Table Grid */}
        <div className="overflow-x-auto pt-6">
          <table className="w-full text-left text-xs sm:text-sm min-w-[650px]">
            <thead>
              <tr className="border-b border-white/15 text-[11px] font-black uppercase tracking-wider text-slate-400">
                <th className="pb-3 pr-4">Rank</th>
                <th className="pb-3 pr-4">Movie Title</th>
                <th className="pb-3 pr-4">Weekend (CAD)</th>
                <th className="pb-3 pr-4">Total Canada Gross</th>
                <th className="pb-3 pr-4">Screens</th>
                <th className="pb-3 pr-4">Occupancy</th>
                <th className="pb-3">Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {boxOffice.map((entry) => (
                <tr key={entry.rank} className="hover:bg-white/5 transition">
                  <td className="py-4 pr-4 font-outfit font-black text-amber-400 text-base">
                    #{entry.rank}
                  </td>
                  <td className="py-4 pr-4">
                    <div className="font-outfit font-extrabold text-sm sm:text-base text-white">
                      {entry.movieTitle}
                    </div>
                    <div className="tamil text-xs text-[#E00624] font-semibold">
                      {entry.tamilTitle}
                    </div>
                  </td>
                  <td className="py-4 pr-4 font-bold text-slate-200">
                    {entry.weekendGrossCAD}
                  </td>
                  <td className="py-4 pr-4 font-outfit font-black text-emerald-400 text-sm sm:text-base">
                    {entry.totalGrossCAD}
                  </td>
                  <td className="py-4 pr-4 font-semibold text-slate-300">
                    {entry.canadianScreens} screens
                  </td>
                  <td className="py-4 pr-4 text-xs text-slate-300">
                    {entry.occupancy}
                  </td>
                  <td className="py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 whitespace-nowrap">
                      {entry.verdict}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cinema Hub City Bar */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#64748B] px-1">
          <span className="flex items-center gap-1.5 text-[#002D62]">
            <span>📍</span> Filter Theatres by Canadian City
          </span>
          <span className="text-[#E00624]">{theatres.length} Key Cinema Hubs</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/cinema"
            className="px-4 py-2 rounded-2xl text-xs font-bold transition bg-[#002D62] text-white shadow-sm"
          >
            🇨🇦 All Canada ({theatres.length} Theatres)
          </Link>
          {cinemaCities.map((cName) => (
            <Link
              key={cName}
              href={`/cinema#theatres`}
              className="px-4 py-2 rounded-2xl text-xs font-bold transition bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
            >
              📍 {cName}
            </Link>
          ))}
        </div>
      </div>

      {/* Interactive Hub (Trailers, Day selector, Filters) */}
      <CinemaInteractiveHub
        allMovies={allMovies}
        theatres={theatres}
        initialDateDisplay={todayFormatted}
      />

      {/* Canadian Theatres Directory with Directions */}
      <section id="theatres" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
              Canadian Tamil Cinema Theatres Directory
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Primary cinema chains screening Tamil releases in Ontario, Quebec, BC, Alberta, Manitoba &amp; Atlantic Canada
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {theatres.map((th) => (
            <div
              key={th.id}
              className="bg-white rounded-3xl border border-[#CBD5E1] p-6 space-y-4 shadow-sm flex flex-col justify-between hover:border-[#002D62] transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F0F7FF] text-[#002D62] font-black text-[10px] uppercase border border-[#CCE3F8]">
                    {th.chain}
                  </span>
                  <span className="text-[#64748B] font-bold text-xs bg-[#F8FAFC] px-2.5 py-1 rounded-full border border-[#CBD5E1]">
                    🍁 {th.city}, {th.province}
                  </span>
                </div>

                <h3 className="font-outfit font-extrabold text-lg text-[#0F172A]">{th.name}</h3>

                <p className="text-xs text-[#64748B] flex items-start gap-1">
                  <span>📍</span>
                  <span>{th.address}</span>
                </p>

                <p className="text-xs text-[#64748B] flex items-center gap-1">
                  <span>📞</span>
                  <span>{th.phone}</span>
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {th.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2 py-0.5 rounded-md bg-[#F8FAFC] text-slate-700 text-[10px] font-semibold border border-slate-200"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2">
                <a
                  href={mapsLink(th.address, th.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary rounded-xl px-4 py-2 text-xs font-bold flex-1 text-center shadow-xs"
                >
                  🗺️ Directions
                </a>
                <a
                  href={telLink(th.phone)}
                  className="p-2 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#002D62] hover:bg-white text-xs font-bold"
                  title="Call Theatre"
                >
                  📞
                </a>
                {th.bookingUrl && (
                  <a
                    href={th.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-navy rounded-xl px-4 py-2 text-xs font-bold text-center shadow-xs whitespace-nowrap"
                  >
                    Tickets ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SafeNet Creations Partner Link Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center shadow-xs">
        <p className="text-xs text-[#64748B]">
          Canada Tamil Cinema &amp; Entertainment Guide developed by{" "}
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
