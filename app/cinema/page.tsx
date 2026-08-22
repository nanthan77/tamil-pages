"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CANADA_BOX_OFFICE, getAllTheatres, getAllMovies, type MovieListing } from "@/lib/cinema";
import { getCanadianTodayFormatted, mapsLink, telLink } from "@/lib/utils";

export default function CinemaPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm font-bold text-[#002D62]">Loading Tamil Cinema Showtimes &amp; Box Office…</div>}>
      <CinemaContent />
    </Suspense>
  );
}

function CinemaContent() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";

  const theatres = getAllTheatres();
  const allMovies = getAllMovies();
  const boxOffice = CANADA_BOX_OFFICE;

  const [currentDateDisplay, setCurrentDateDisplay] = useState<string>("Today");
  const [lastSyncTime, setLastSyncTime] = useState<string>("Synced Daily at 6:30 PM EST");
  const [syncing, setSyncing] = useState(false);
  const [activeTrailerId, setActiveTrailerId] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<"today" | "tomorrow" | "weekend">("today");
  const [movieFilter, setMovieFilter] = useState<"all" | "Now Showing" | "Advance Booking" | "Coming Soon">("all");

  useEffect(() => {
    setCurrentDateDisplay(getCanadianTodayFormatted());
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLastSyncTime(`Today, ${timeStr} EST`);
  }, []);

  const filteredTheatres = city
    ? theatres.filter((t) => t.city.toLowerCase() === city.toLowerCase())
    : theatres;

  const displayedMovies = allMovies.filter((m) => {
    if (movieFilter !== "all" && m.status !== movieFilter) return false;
    if (city) {
      return m.theatreShowtimes.some((st) => st.city.toLowerCase() === city.toLowerCase());
    }
    return true;
  });

  const cinemaCities = ["Scarborough", "Toronto", "Montreal", "Surrey", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Halifax"];

  const handleManualSync = async () => {
    setSyncing(true);
    try {
      const res = await fetch("/api/cron/sync-cinema");
      const data = await res.json();
      if (data.status === "success") {
        setCurrentDateDisplay(data.date || getCanadianTodayFormatted());
        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setLastSyncTime(`Just now (${timeStr} EST)`);
      }
    } catch (err) {
      console.error("Cinema sync error:", err);
    } finally {
      setTimeout(() => setSyncing(false), 500);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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

          {/* Daily Automated Scanner Status Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-black/30 border border-white/20 text-xs font-semibold text-white/90">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>📅 <strong>{currentDateDisplay}</strong> · Last Synced: <strong>{lastSyncTime}</strong></span>
            </div>
            <button
              type="button"
              onClick={handleManualSync}
              disabled={syncing}
              className="px-3.5 py-1.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition flex items-center gap-1.5 border border-white/20 cursor-pointer disabled:opacity-50"
            >
              <span className={syncing ? "animate-spin" : ""}>🔄</span>
              <span>{syncing ? "Scanning Theatres…" : "Scan Latest Showtimes"}</span>
            </button>
          </div>
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

      {/* Showtime Schedule Day Selector & Status Filters */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-[#CBD5E1] shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-black text-[#002D62] uppercase tracking-wider mr-1">🎬 Release Filter:</span>
          {(["all", "Now Showing", "Advance Booking", "Coming Soon"] as const).map((filterVal) => (
            <button
              key={filterVal}
              type="button"
              onClick={() => setMovieFilter(filterVal)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                movieFilter === filterVal
                  ? "bg-[#E00624] text-white shadow-xs"
                  : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:text-[#002D62]"
              }`}
            >
              {filterVal === "all" ? `All Releases (${allMovies.length})` : filterVal}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-black text-[#002D62] uppercase tracking-wider mr-1">📅 Day:</span>
          <button
            type="button"
            onClick={() => setSelectedDay("today")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedDay === "today"
                ? "bg-[#002D62] text-white shadow-xs"
                : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:text-[#002D62]"
            }`}
          >
            Today ({currentDateDisplay.split(",")[0] || "Today"})
          </button>
          <button
            type="button"
            onClick={() => setSelectedDay("tomorrow")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedDay === "tomorrow"
                ? "bg-[#002D62] text-white shadow-xs"
                : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:text-[#002D62]"
            }`}
          >
            Tomorrow
          </button>
          <button
            type="button"
            onClick={() => setSelectedDay("weekend")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedDay === "weekend"
                ? "bg-[#002D62] text-white shadow-xs"
                : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:text-[#002D62]"
            }`}
          >
            Weekend Matinees
          </button>
        </div>
      </div>

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
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
              !city
                ? "bg-[#002D62] text-white shadow-sm"
                : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
            }`}
          >
            🇨🇦 All Canada ({theatres.length} Theatres)
          </Link>
          {cinemaCities.map((cName) => {
            const isSelected = city.toLowerCase() === cName.toLowerCase();
            return (
              <Link
                key={cName}
                href={`/cinema?city=${encodeURIComponent(cName)}`}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
                  isSelected
                    ? "bg-[#E00624] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
                }`}
              >
                📍 {cName}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Movie Showcase Cards */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
              Featured Tamil Movies &amp; Showtimes
            </h2>
            <p className="tamil text-xs sm:text-sm text-[#E00624] font-semibold mt-0.5">
              திரையரங்குகளில் இப்போது திரையிடப்படும் &amp; வரவிருக்கும் முக்கிய படங்கள் ({currentDateDisplay})
            </p>
          </div>
          <span className="text-xs font-bold text-[#E00624] bg-red-50 px-3 py-1 rounded-full border border-red-200 self-start sm:self-auto">
            ★ Verified Live Showtimes
          </span>
        </div>

        {displayedMovies.length === 0 ? (
          <div className="bg-white rounded-3xl border border-[#CBD5E1] p-12 text-center text-[#64748B]">
            No movies found for the selected city or filter.{" "}
            <Link href="/cinema" className="text-[#E00624] font-bold underline">
              View all Canada releases
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {displayedMovies.map((movie) => (
              <article
                key={movie.slug}
                className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-8 space-y-6 shadow-card relative overflow-hidden flex flex-col justify-between hover:shadow-card-hover transition"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

                <div className="space-y-4 pt-1">
                  {/* Visual Poster & Trailer Trigger Banner */}
                  <div
                    className={`relative w-full h-48 sm:h-56 rounded-3xl overflow-hidden bg-gradient-to-r ${movie.posterBg} shadow-md group cursor-pointer`}
                    onClick={() => movie.trailerYoutubeId && setActiveTrailerId(movie.trailerYoutubeId)}
                  >
                    {movie.posterImg ? (
                      <img
                        src={movie.posterImg}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          if (movie.trailerYoutubeId) {
                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${movie.trailerYoutubeId}/hqdefault.jpg`;
                          }
                        }}
                      />
                    ) : movie.trailerYoutubeId ? (
                      <img
                        src={`https://img.youtube.com/vi/${movie.trailerYoutubeId}/hqdefault.jpg`}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : null}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-center justify-center">
                      {movie.trailerYoutubeId && (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E00624] text-white flex items-center justify-center text-xl shadow-xl transition-transform duration-300 group-hover:scale-110">
                          ▶
                        </div>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="bg-black/60 backdrop-blur-xs px-3 py-1 rounded-xl font-bold">
                        🎬 {movie.genre.join(" · ")}
                      </span>
                      {movie.audienceScore && (
                        <span className="bg-amber-400 text-black px-2.5 py-1 rounded-xl font-black shadow-xs">
                          ★ {movie.audienceScore}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Badges & Status */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#E00624] text-white font-black uppercase text-[10px] tracking-wider">
                      {movie.status}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-bold text-[11px]">
                      {movie.certification} · {movie.duration}
                    </span>
                    {movie.boxOfficeCanadaCAD && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-extrabold text-[11px]">
                        🇨🇦 {movie.boxOfficeCanadaCAD}
                      </span>
                    )}
                    {movie.criticRating && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-extrabold text-[11px]">
                        {movie.criticRating}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
                      {movie.title}
                    </h3>
                    <p className="tamil text-base font-bold text-[#E00624] mt-0.5">
                      {movie.tamilTitle}
                    </p>
                  </div>

                  <div className="text-xs text-[#64748B] space-y-1 bg-[#F8FAFC] p-4 rounded-2xl border border-[#CBD5E1]">
                    <p>
                      <strong className="text-[#0F172A]">Director:</strong> {movie.director}
                    </p>
                    <p>
                      <strong className="text-[#0F172A]">Starring:</strong> {movie.cast.join(", ")}
                    </p>
                    <p>
                      <strong className="text-[#0F172A]">Language:</strong> {movie.language}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {movie.synopsis}
                  </p>

                  {/* Showtimes per Canadian Hub */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62] block">
                      Canadian Showtimes &amp; Theatres ({selectedDay === "today" ? currentDateDisplay : selectedDay === "tomorrow" ? "Tomorrow" : "Weekend Special"}):
                    </span>
                    <div className="space-y-2">
                      {movie.theatreShowtimes.map((st) => (
                        <div
                          key={st.theatreId}
                          className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-[#CBD5E1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#002D62] transition"
                        >
                          <div>
                            <p className="font-bold text-xs text-[#0F172A]">{st.theatreName}</p>
                            <p className="text-[11px] text-[#64748B]">🍁 {st.city}, {st.province}</p>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {st.times.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-lg bg-[#002D62] text-white text-[11px] font-black shadow-xs"
                              >
                                {t}
                              </span>
                            ))}
                            {st.bookingLink && (
                              <a
                                href={st.bookingLink}
                                target="_blank"
                                rel="noreferrer"
                                className="px-2.5 py-1 rounded-lg bg-[#E00624] text-white text-[11px] font-bold hover:bg-[#B0041B] transition ml-1 shadow-xs whitespace-nowrap"
                              >
                                Tickets →
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-[#64748B]">
                    Verified via Woodside, Albion, Cineplex &amp; Landmark
                  </span>
                  <div className="flex items-center gap-2">
                    {movie.trailerYoutubeId && (
                      <button
                        type="button"
                        onClick={() => setActiveTrailerId(movie.trailerYoutubeId)}
                        className="btn-navy rounded-xl px-4 py-2 text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <span>▶️</span> Watch Trailer
                      </button>
                    )}
                    <Link
                      href="/cinema#theatres"
                      className="btn-primary rounded-xl px-4 py-2 text-xs font-black shadow-xs flex items-center gap-1"
                    >
                      <span>All Theatres</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Full-Screen Trailer Modal */}
      {activeTrailerId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="flex items-center justify-between p-4 bg-slate-900 text-white">
              <span className="text-sm font-bold flex items-center gap-2">
                <span>🎬</span> Official Movie Trailer Preview
              </span>
              <button
                type="button"
                onClick={() => setActiveTrailerId(null)}
                className="text-white/70 hover:text-white px-3 py-1 rounded-lg text-sm font-bold bg-white/10 hover:bg-white/20 transition cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeTrailerId}?autoplay=1`}
                title="Movie Trailer"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

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
          {city && (
            <Link href="/cinema" className="text-xs font-bold text-[#E00624] hover:underline">
              ✕ View All Canada Theatres
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTheatres.map((th) => (
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
