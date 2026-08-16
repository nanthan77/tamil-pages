import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllEvents, getEventBySlug } from "@/lib/events";
import { mapsLink } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const evt = getEventBySlug(slug);
  if (!evt) return { title: "Event Not Found" };
  return {
    title: `${evt.title} · ${evt.city}, Canada Events`,
    description: evt.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const evt = getEventBySlug(slug);
  if (!evt) notFound();

  const related = getAllEvents()
    .filter((e) => e.slug !== evt.slug)
    .slice(0, 3);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
        <Link href="/" className="text-[#002D62] hover:text-[#E00624]">
          🇨🇦 Home
        </Link>
        <span>/</span>
        <Link href="/events" className="text-[#002D62] hover:text-[#E00624]">
          🎪 Events Calendar
        </Link>
        <span>/</span>
        <Link href={`/events?city=${encodeURIComponent(evt.city)}`} className="text-[#002D62] hover:text-[#E00624]">
          {evt.city}
        </Link>
        <span>/</span>
        <span className="text-[#0F172A] truncate max-w-xs">{evt.title}</span>
      </nav>

      {/* Main Event Article */}
      <article className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-12 space-y-8 shadow-card relative overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3.5 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black uppercase tracking-wider text-[10px]">
              {evt.category}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1] font-bold">
              🍁 {evt.city}, {evt.province}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
              {evt.ticketType} {evt.ticketPrice ? `(${evt.ticketPrice})` : ""}
            </span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-[#0F172A] leading-tight">
            {evt.title}
          </h1>

          {evt.tamilTitle && (
            <p className="tamil text-xl sm:text-2xl font-bold text-[#E00624] leading-snug">
              {evt.tamilTitle}
            </p>
          )}

          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            {evt.description}
          </p>
        </div>

        {/* Date, Time & Venue Grid */}
        <div className="grid sm:grid-cols-2 gap-4 bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-6 text-sm">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-extrabold block mb-1">
              Date &amp; Schedule
            </span>
            <p className="font-outfit font-extrabold text-base text-[#002D62]">
              📅 {new Date(evt.startDate + "T00:00:00").toLocaleDateString("en-CA", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-xs text-[#64748B] font-bold mt-1">🕒 {evt.startTime}</p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-extrabold block mb-1">
              Venue &amp; Location
            </span>
            <p className="font-outfit font-extrabold text-base text-[#0F172A]">
              📍 {evt.venueName}
            </p>
            <p className="text-xs text-[#64748B] mt-0.5">{evt.address}</p>
          </div>
        </div>

        {/* Highlights */}
        {evt.highlights.length > 0 && (
          <div className="space-y-3">
            <h2 className="font-outfit font-extrabold text-lg text-[#0F172A]">
              Event Highlights &amp; Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {evt.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 bg-[#F8FAFC] p-3 rounded-xl border border-[#CBD5E1] text-xs font-bold text-[#0F172A]"
                >
                  <span className="text-[#E00624]">★</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E2E8F0]">
          <a
            href={mapsLink(evt.address, evt.venueName)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary rounded-2xl px-6 py-3.5 text-xs font-black shadow flex items-center gap-2"
          >
            <span>🗺️</span>
            <span>Get Directions on Google Maps</span>
          </a>
          {evt.ticketUrl && (
            <a
              href={evt.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-navy rounded-2xl px-6 py-3.5 text-xs font-black shadow flex items-center gap-2"
            >
              <span>🎟️</span>
              <span>Official Event Tickets / Info</span>
            </a>
          )}
          {evt.phone && (
            <a
              href={`tel:${evt.phone}`}
              className="rounded-2xl px-5 py-3.5 text-xs font-bold border border-[#CBD5E1] bg-[#F8FAFC] text-[#002D62] hover:bg-white flex items-center gap-2"
            >
              <span>📞</span>
              <span>Contact Organizer ({evt.phone})</span>
            </a>
          )}
        </div>
      </article>

      {/* Related Events */}
      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">
            More Upcoming Canadian Tamil Events
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((e) => (
              <div
                key={e.slug}
                className="bg-white rounded-2xl border border-[#CBD5E1] p-5 space-y-2 hover:border-[#002D62] transition shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-[#002D62]">
                    {e.category}
                  </span>
                  <h3 className="font-outfit font-bold text-sm text-[#0F172A] hover:text-[#002D62]">
                    <Link href={`/events/${e.slug}`}>{e.title}</Link>
                  </h3>
                  <p className="text-[11px] text-[#64748B]">📍 {e.city}, {e.province}</p>
                </div>
                <Link
                  href={`/events/${e.slug}`}
                  className="text-xs font-bold text-[#E00624] hover:underline pt-2 block"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SafeNet Creations Official Link Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center space-y-1 shadow-xs">
        <p className="text-xs text-[#64748B]">
          Digital Event Calendar &amp; Ticketing Architecture by{" "}
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
