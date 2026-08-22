import Link from "next/link";

export function CinemaInteractiveHub() {
  return (
    <section aria-labelledby="cinema-listings-heading" className="space-y-6">
      <div className="rounded-3xl border border-amber-300 bg-amber-50 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wider text-amber-900">
              <span aria-hidden="true">⚠️</span> Source check pending
            </span>
            <h2
              id="cinema-listings-heading"
              className="font-outfit text-2xl font-extrabold text-[#0F172A] sm:text-3xl"
            >
              Movie and showtime listings are being reviewed
            </h2>
            <p className="text-sm leading-relaxed text-amber-950">
              We have temporarily hidden movie schedules, ratings, and box-office figures while their
              sources are checked. Use the cinema links below to confirm current showtimes, ticket
              availability, accessibility, and pricing before travelling.
            </p>
          </div>

          <Link
            href="/cinema#theatres"
            className="btn-navy inline-flex shrink-0 items-center justify-center gap-1 rounded-xl px-5 py-3 text-xs font-black shadow-sm"
          >
            Browse cinema links <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
