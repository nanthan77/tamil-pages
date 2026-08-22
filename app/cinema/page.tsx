
import { type Metadata } from "next";
import { getAllTheatres } from "@/lib/cinema";
import { mapsLink, telLink } from "@/lib/utils";
import { CinemaInteractiveHub } from "@/components/cinema/CinemaInteractiveHub";

export const metadata: Metadata = {
  title: "Tamil Cinema & Theatre Links in Canada",
  description:
    "Browse Canadian cinema links for Tamil films and confirm current showtimes, tickets, and venue details directly with each cinema.",
  keywords: [
    "Tamil movies Canada",
    "Woodside Cinemas",
    "Scarborough Tamil movies",
    "Albion Cinemas Etobicoke",
    "Cineplex Forum Montreal Tamil",
    "Tamil cinema links Canada",
  ],
};

export default function CinemaPage() {
  const theatres = getAllTheatres();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[#E00624]/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
            <span>🎬</span>
            <span>Canadian Tamil Cinema Link Directory</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Tamil Cinema &amp; <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">Showtimes Canada</span>
          </h1>

          <p className="tamil text-lg sm:text-xl font-bold text-white/95">
            கனடா திரையரங்குகள் மற்றும் டிக்கெட் இணையதள இணைப்புகள்.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Browse links for{" "}
            <a
              href="https://www.newwoodsidecinemas.com/showtimes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 font-extrabold hover:underline"
            >
              Woodside Cinemas (Scarborough)
            </a>
            , <strong>Albion Cinemas (Etobicoke)</strong>, <strong>Cineplex Forum (Montreal)</strong>, and <strong>Landmark Cinemas (Surrey/Vancouver)</strong>. Confirm current showtimes and tickets on the cinema&apos;s own website before travelling.
          </p>
        </div>
      </div>

      <CinemaInteractiveHub />

      {/* Canadian Theatres Directory with Directions */}
      <section id="theatres" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
              Canadian Tamil Cinema Theatres Directory
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Reference links for Canadian cinemas that may carry Tamil releases. Confirm every detail with the cinema before travelling.
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

                <p className="rounded-xl border border-amber-200 bg-amber-50 p-2.5 text-[11px] font-semibold text-amber-950">
                  Check the cinema website or call ahead for current films, showtimes, tickets, and accessibility.
                </p>
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
