import Link from "next/link";
import EventSubmissionModal from "@/components/EventSubmissionModal";
import { countEventsByCity, getAllEvents, getEventsByCity } from "@/lib/events";
import { mapsLink } from "@/lib/utils";

export const metadata = {
  title: "Canadian Tamil Events & Thiruvizha Calendar · Concerts, Festivals & Sports",
  description:
    "Explore upcoming Tamil events, temple chariot festivals, Carnatic music concerts, Bharatanatyam arangetrams, and community tournaments in Toronto, Montreal, Vancouver, Calgary, and across Canada.",
};

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; category?: string }>;
}) {
  const sp = await searchParams;
  const city = sp.city || "";
  const category = sp.category || "";

  let events = getAllEvents();
  if (city) {
    events = getEventsByCity(city);
  }
  if (category) {
    events = events.filter((e) => e.category.toLowerCase() === category.toLowerCase());
  }

  const cityCounts = countEventsByCity();
  const allCities = Object.keys(cityCounts).sort();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[#E00624]/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
            <span>🎪</span>
            <span>Canadian Tamil Community Events Calendar</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Upcoming Tamil Events &amp; <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">Thiruvizha</span> in Canada
          </h1>

          <p className="tamil text-lg sm:text-xl font-bold text-white/95">
            கனடாவில் நடைபெறும் தமிழ் கலை நிகழ்ச்சிகள், இசைக்கச்சேரிகள் மற்றும் திருவிழாக்கள்.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Discover live Carnatic &amp; fusion concerts, temple chariot festivals, community sports tournaments, and business expos across Canadian cities.
          </p>

          <div className="pt-2">
            <EventSubmissionModal />
          </div>
        </div>
      </div>

      {/* City Filters Bar */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#64748B] px-1">
          <span className="flex items-center gap-1.5 text-[#002D62]">
            <span>📍</span> Filter Events by Canadian City
          </span>
          <span className="text-[#E00624]">{getAllEvents().length} Events Scheduled</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/events"
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
              !city
                ? "bg-[#002D62] text-white shadow-sm"
                : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
            }`}
          >
            🇨🇦 All Canada ({getAllEvents().length})
          </Link>
          {allCities.map((cityName) => {
            const isSelected = city.toLowerCase() === cityName.toLowerCase();
            const count = cityCounts[cityName] || 0;
            const displayName = cityName.replace(/\b\w/g, (m) => m.toUpperCase());
            return (
              <Link
                key={cityName}
                href={`/events?city=${encodeURIComponent(displayName)}`}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#E00624] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
                }`}
              >
                <span>{displayName}</span>
                <span className={`text-[10px] ${isSelected ? "text-white/80" : "text-[#64748B]"}`}>
                  ({count})
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Events Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-outfit font-extrabold text-xl sm:text-2xl text-[#0F172A]">
            {city ? `${city} Events` : "All Upcoming Canadian Events"} ({events.length})
          </h2>
          {city && (
            <Link href="/events" className="text-xs font-bold text-[#E00624] hover:underline">
              ✕ Show All Canada Events
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((evt) => (
            <article
              key={evt.slug}
              className="bg-white rounded-[2rem] border border-[#CBD5E1] hover:border-[#002D62] shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62]" />

              <div className="p-6 space-y-4">
                {/* Top Badges */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black uppercase text-[10px] tracking-wider">
                    {evt.category}
                  </span>
                  <span className="text-[#334155] font-bold text-xs bg-[#F8FAFC] px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                    🍁 {evt.city}, {evt.province}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-outfit font-extrabold text-xl text-[#0F172A] group-hover:text-[#002D62] transition leading-snug">
                    <Link href={`/events/${evt.slug}`}>{evt.title}</Link>
                  </h3>
                  {evt.tamilTitle && (
                    <p className="tamil text-sm font-bold text-[#E00624] mt-0.5">
                      {evt.tamilTitle}
                    </p>
                  )}
                </div>

                {/* Date & Time Box */}
                <div className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-3.5 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[#002D62] font-black text-sm">📅</span>
                    <span className="font-extrabold text-[#0F172A]">
                      {new Date(evt.startDate + "T00:00:00").toLocaleDateString("en-CA", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-[#64748B]">·</span>
                    <span className="text-[#64748B] font-bold">{evt.startTime}</span>
                  </div>

                  <div className="flex items-start gap-2 border-t border-[#E2E8F0] pt-2">
                    <span className="text-[#E00624] font-black text-sm shrink-0">📍</span>
                    <div className="truncate">
                      <p className="font-bold text-[#0F172A] truncate">{evt.venueName}</p>
                      <p className="text-[#64748B] text-[11px] truncate">{evt.address}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {evt.description}
                </p>

                {/* Highlights */}
                {evt.highlights.length > 0 && (
                  <div className="text-[11px] bg-amber-50/80 border border-amber-200 rounded-xl p-2.5 text-amber-950 font-medium">
                    ★ {evt.highlights[0]}
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                <span className="text-xs font-black text-[#002D62] px-2.5 py-1 rounded-xl bg-white border border-[#CBD5E1]">
                  {evt.ticketType}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={mapsLink(evt.address, evt.venueName)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl border border-[#CBD5E1] bg-white text-[#002D62] hover:bg-[#F0F7FF] text-xs font-bold transition flex items-center gap-1"
                    title="Google Maps Directions"
                  >
                    <span>🗺️</span>
                  </a>
                  <Link
                    href={`/events/${evt.slug}`}
                    className="btn-navy rounded-xl px-3.5 py-1.5 text-xs font-black shadow-xs flex items-center gap-1"
                  >
                    <span>Details</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SafeNet Creations Partner Link Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center shadow-xs">
        <p className="text-xs text-[#64748B]">
          Canadian Tamil Community Events System powered by{" "}
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
