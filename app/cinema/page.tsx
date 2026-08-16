"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getAllTheatres, getNowShowingMovies } from "@/lib/cinema";
import { mapsLink, telLink } from "@/lib/utils";

export default function CinemaPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm font-bold text-[#002D62]">Loading Tamil Cinema Showtimes…</div>}>
      <CinemaContent />
    </Suspense>
  );
}

function CinemaContent() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";

  const theatres = getAllTheatres();
  const nowShowing = getNowShowingMovies();

  const filteredTheatres = city
    ? theatres.filter((t) => t.city.toLowerCase() === city.toLowerCase())
    : theatres;

  const cinemaCities = ["Scarborough", "Toronto", "Montreal", "Surrey", "Calgary", "Edmonton"];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[#E00624]/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
            <span>🎬</span>
            <span>Canadian Tamil Cinema &amp; Theatres Hub</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Tamil Movies &amp; Showtimes in <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">Canada</span>
          </h1>

          <p className="tamil text-lg sm:text-xl font-bold text-white/95">
            கனடாவில் திரையிடப்படும் தமிழ் திரைப்படங்கள், திரையரங்குகள் மற்றும் காட்சிகளின் நேரங்கள்.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Find daily Tamil cinema showtimes at Woodside Cinemas (Scarborough), Albion Cinemas (Etobicoke), Cineplex Forum (Montreal), Landmark Cinemas (Surrey/Vancouver), and Cineplex (Calgary &amp; Edmonton).
          </p>
        </div>
      </div>

      {/* Cinema Hub City Bar */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#64748B] px-1">
          <span className="flex items-center gap-1.5 text-[#002D62]">
            <span>📍</span> Filter Theatres by City
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

      {/* Now Showing Movies Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
            Now Showing in Canadian Theatres
          </h2>
          <span className="text-xs font-bold text-[#E00624] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            ★ Blockbuster Releases
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {nowShowing.map((movie) => (
            <article
              key={movie.slug}
              className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-8 space-y-6 shadow-card relative overflow-hidden flex flex-col justify-between"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#E00624] text-white font-black uppercase text-[10px] tracking-wider">
                    {movie.status}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-bold text-[11px]">
                    {movie.certification} · {movie.duration}
                  </span>
                  <span className="text-[#64748B] font-medium">{movie.language}</span>
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
                    <strong className="text-[#0F172A]">Genre:</strong> {movie.genre.join(" · ")}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {movie.synopsis}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62] block">
                    Canadian Showtimes &amp; Theatres:
                  </span>
                  <div className="space-y-2">
                    {movie.theatreShowtimes.map((st) => (
                      <div
                        key={st.theatreId}
                        className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#CBD5E1] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <p className="font-bold text-xs text-[#0F172A]">{st.theatreName}</p>
                          <p className="text-[11px] text-[#64748B]">🍁 {st.city}, {st.province}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {st.times.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-[#002D62] text-white text-[11px] font-black"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#64748B]">Book tickets directly at theatre box office</span>
                <Link
                  href="/cinema#theatres"
                  className="btn-primary rounded-xl px-5 py-2 text-xs font-black shadow flex items-center gap-1"
                >
                  <span>View All Theatre Addresses</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Canadian Theatres Directory with Directions */}
      <section id="theatres" className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-outfit font-extrabold text-2xl text-[#0F172A]">
              Canadian Tamil Cinema Theatres Directory
            </h2>
            <p className="text-xs text-[#64748B]">
              Authentic screens screening Tamil &amp; South Asian releases in Canada
            </p>
          </div>
          {city && (
            <Link href="/cinema" className="text-xs font-bold text-[#E00624] hover:underline">
              ✕ View All Canada Theatres
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTheatres.map((th) => (
            <div
              key={th.id}
              className="bg-white rounded-3xl border border-[#CBD5E1] p-6 space-y-4 shadow-sm flex flex-col justify-between hover:border-[#002D62] transition"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F0F7FF] text-[#002D62] font-black text-[10px] uppercase border border-[#CCE3F8]">
                    {th.chain}
                  </span>
                  <span className="text-[#64748B] font-bold text-xs">
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
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2">
                <a
                  href={mapsLink(th.address, th.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary rounded-xl px-4 py-2 text-xs font-bold flex-1 text-center shadow-xs"
                >
                  🗺️ Maps Directions
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
                    className="btn-navy rounded-xl px-4 py-2 text-xs font-bold text-center"
                  >
                    Website
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
