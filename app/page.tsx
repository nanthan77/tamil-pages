import type { Metadata } from "next";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import Faq from "@/components/Faq";
import SearchForm from "@/components/SearchForm";
import { CATEGORIES } from "@/lib/categories";
import { CITIES } from "@/lib/cities";
import { countByCategory, countByCity, getAllBusinesses } from "@/lib/store";
import { getAllTemples } from "@/lib/temples";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  const catCounts = countByCategory();
  const cityCounts = countByCity();
  const all = getAllBusinesses();
  const bySlug = new Map(all.map((b) => [b.slug, b]));

  const allTemples = getAllTemples();
  const temples = allTemples.slice(0, 6);

  const featured = [
    "hopper-hut",
    "martins-bakery",
    "babu-takeout-and-catering",
    "canbe-foods-inc",
    "sri-varasiththi-vinaayagar-hindu-temple",
    "motherland-foods",
    "subiksha-supermarket-markham",
    "nanthus-bakery-montreal",
    "thurga-foods-vancouver",
    "calgary-murugan-temple",
    "manitoba-tamil-cultural-association",
    "cmr-tamil-fm-101-3",
  ]
    .map((slug) => bySlug.get(slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const devoteeFood = [
    "hopper-hut",
    "canbe-foods-inc",
    "babu-takeout-and-catering",
    "martins-bakery",
    "nanthus-bakery-montreal",
    "thurga-foods-vancouver",
  ]
    .map((slug) => bySlug.get(slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const popularCats = CATEGORIES.map((c) => ({ ...c, count: catCounts[c.slug] || 0 }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 16);

  const topCities = CITIES.map((c) => ({
    ...c,
    count: cityCounts[c.name.toLowerCase()] || 0,
  })).sort((a, b) => b.count - a.count);

  return (
    <main className="space-y-12 sm:space-y-16">
      <div className="border-b border-white/10 bg-[#0B1D3A] px-4 py-2.5 text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <span className="font-semibold text-white/90">🍁 Serving Tamil communities across Canada</span>
          <Link className="shrink-0 font-black text-amber-300 hover:text-white" href="/alerts">
            Join alert early access →
          </Link>
        </div>
      </div>

      <section className="hero-grid border-b border-[#CBD5E1]/60 py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F8] bg-[#F0F7FF] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#002D62]">
              <span>🎬</span>
              <span>Movies and weekends, selected for your city</span>
            </div>

            <h1 className="font-outfit text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Tamil Canada,
              <span className="block text-[#E00624]">in one place.</span>
            </h1>

            <div className="max-w-2xl space-y-2">
              <p className="tamil text-base font-semibold text-[#990014] sm:text-lg" lang="ta">
                உங்கள் நகரத்திற்கான தமிழ் திரைப்படங்கள், வார இறுதி நிகழ்வுகள் மற்றும் உள்ளூர் வணிகங்கள்.
              </p>
              <p className="text-sm leading-7 text-[#475569] sm:text-base">
                Find Tamil businesses and temples today. Join early access for email alerts that will include official source links and clear last-checked times.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-sm font-black" href="/alerts">
                Get Movie &amp; Weekend Alerts
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#002D62] bg-white px-6 text-sm font-black text-[#002D62] hover:bg-blue-50" href="/directory">
                Find a Tamil Business
              </Link>
            </div>

            <div className="pt-1">
              <p className="mb-2 text-xs font-bold text-slate-500">Search the directory</p>
              <SearchForm large />
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.25rem] border-2 border-[#002D62]/20 bg-gradient-to-br from-white via-[#FAFCFF] to-[#F0F7FF] p-7 shadow-card-hover sm:p-8">
              <div className="absolute right-5 top-4 select-none text-4xl opacity-15">🍁</div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E00624]">My Tamil Canada Alerts</p>
              <h2 className="mt-2 font-outfit text-2xl font-extrabold text-[#002D62]">Your Friday plans, before the weekend.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Choose a city, the updates you want, and English, Tamil or bilingual delivery.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <AlertBenefit icon="🎬" title="Movie alerts" text="New releases and schedule changes" />
                <AlertBenefit icon="🗓️" title="Friday digest" text="Events, temples and family ideas" />
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
                <p className="font-extrabold">Email-first early access</p>
                <p className="mt-1 text-xs leading-5">Explicit opt-in · confirm by email · unsubscribe anytime</p>
              </div>

              <Link className="btn-navy mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 text-sm font-black" href="/alerts">
                Choose my alerts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#CBD5E1] bg-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-[#E00624]">For owners</p>
            <p className="font-outfit font-extrabold text-[#0F172A]">Online listing submissions are paused during the security upgrade.</p>
            <p className="text-xs text-[#64748B] mt-1">Paid product enquiries continue through direct WhatsApp contact; online submissions will return after the security review.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/boost" className="btn-primary rounded-xl px-4 py-2 text-xs font-black">
              7-day Boost
            </Link>
            <Link href="/for-business" className="rounded-xl px-4 py-2 text-xs font-black border border-[#002D62] text-[#002D62]">
              All paid products
            </Link>
          </div>
        </div>
      </section>

      {/* 6-Pillar Super Portal Quick Access Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <PortalPillar href="/directory" icon="🏬" title="Directory" sub={`${all.length.toLocaleString()}+ Businesses`} />
          <PortalPillar href="/temples" icon="🛕" title="Temples" sub={`${allTemples.length}+ Directory Entries`} />
          <PortalPillar href="/news" icon="📰" title="News Feed" sub="Source Checks Pending" />
          <PortalPillar href="/events" icon="🎪" title="Events" sub="Concerts &amp; Ther" />
          <PortalPillar href="/cinema" icon="🎬" title="Cinema" sub="Theatre Reference Links" />
          <PortalPillar href="/tuition" icon="🎓" title="Tuition &amp; Arts" sub="Language &amp; Dance" />
        </div>
      </section>

      {/* Weekend Events & Cultural Calendar Radar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-wider mb-2 border border-white/15">
                <span>🎪</span> Events &amp; Thiruvizha Calendar
              </div>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-4xl text-white">
                Upcoming Tamil Events in Canada
              </h2>
              <p className="text-white/80 text-sm mt-1">
                Concerts, temple chariot festivals, sports tournaments, and networking summits across Ontario, Quebec, BC &amp; Alberta.
              </p>
            </div>
            <Link
              href="/events"
              className="btn-primary rounded-xl px-5 py-2.5 text-xs font-black shrink-0 self-start sm:self-auto shadow"
            >
              View Full Events Calendar →
            </Link>
          </div>

          <div className="rounded-3xl border border-amber-300/40 bg-white/10 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-black uppercase tracking-wider text-amber-300">Source verification in progress</p>
            <h3 className="mt-2 font-outfit text-xl font-extrabold text-white">No source-verified events are featured yet.</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
              Event cards will return only after each listing includes an official organizer link, accurate dates and a clear last-checked time.
            </p>
          </div>
        </div>
      </section>

      {/* Now Showing Tamil Cinema Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold text-[#002D62] uppercase tracking-widest flex items-center gap-1">
                <span>🎬</span> Theatre reference
              </span>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-1">
                Tamil Cinema &amp; Canadian Theatre Links
              </h2>
              <p className="text-[#64748B] text-sm mt-1">
                Cinema information is being checked. Confirm current showtimes, availability and tickets on the theatre&apos;s official website before travelling.
              </p>
            </div>
            <Link
              href="/cinema"
              className="text-xs font-extrabold text-[#002D62] hover:text-[#E00624] transition flex items-center gap-1"
            >
              <span>View Cinema Reference Page</span>
              <span>→</span>
            </Link>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-wider text-amber-900">Source check pending</p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              Hardcoded movie, showtime, rating and box-office cards have been removed from the homepage. Source-linked listings will be added after a manual verification workflow is operating.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Canadian Tamil News Section */}
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-12 border-y border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#E00624] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
                <span>📰</span> Community updates
              </div>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-2">
                Source-Checked Canadian Tamil Stories
              </h2>
            </div>
            <Link
              href="/news"
              className="btn-navy rounded-xl px-4 py-2.5 text-xs font-bold shrink-0 self-start sm:self-auto"
            >
              View News Verification Status →
            </Link>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-white p-6 shadow-xs sm:p-8">
            <p className="text-xs font-black uppercase tracking-wider text-amber-900">Editorial source checks pending</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#475569]">
              Unsupported community stories are not being featured on the homepage. Future articles must include their original source and a visible last-checked date.
            </p>
          </div>
        </div>
      </section>

      {/* Sacred Canadian Tamil Temples Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B1D3A] via-[#002D62] to-[#083777] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-wider mb-2 border border-white/15">
                <span>🛕</span> Canadian Tamil Spiritual Sanctuaries
              </div>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-4xl text-white">
                Tamil Hindu Temples in Canada
              </h2>
              <p className="tamil text-sm sm:text-base font-semibold text-white/90 mt-1">
                கனடா வாழ் தமிழர்களுக்கான பிரசித்தி பெற்ற இந்துக் கோவில்கள் மற்றும் பூசை விபரங்கள்.
              </p>
            </div>

            <Link
              href="/temples"
              className="btn-primary rounded-xl px-5 py-2.5 text-xs font-black shrink-0 self-start md:self-auto shadow-md"
            >
              Explore All Canada Temples ({getAllTemples().length}) →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {temples.map((t) => (
              <div
                key={t.slug}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-white/40 transition flex flex-col justify-between space-y-4 hover:-translate-y-1"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-black text-[10px] uppercase">
                      🍁 {t.city}, {t.province}
                    </span>
                    <span className="text-[10px] text-white/80 font-bold">
                      {t.darshanHours.weekdayMorning.split("–")[0].trim()} Darshan
                    </span>
                  </div>

                  <h3 className="font-outfit font-extrabold text-lg text-white hover:text-amber-300 transition leading-snug">
                    <Link href={`/temples/${t.slug}`}>{t.name}</Link>
                  </h3>
                  <p className="tamil text-xs text-white/90 font-bold">{t.tamilName}</p>
                  <p className="text-xs text-white/75 line-clamp-2">{t.description}</p>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[11px] text-white/90 font-bold">
                    🪔 {t.poojaTimings.length} Daily Poojas
                  </span>
                  <Link
                    href={`/temples/${t.slug}`}
                    className="text-xs font-black text-white hover:text-amber-300 transition flex items-center gap-1"
                  >
                    <span>View Timings</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devotee Food & Hot Tiffin Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold text-[#002D62] uppercase tracking-widest flex items-center gap-1">
                <span>🍛</span> Hot Tiffin &amp; Annadhanam
              </span>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-1">
                Restaurants, Sweets &amp; Catering for Temple Visitors
              </h2>
              <p className="text-[#64748B] text-sm mt-1">
                Authentic Ceylon rolls, kothu roti, string hoppers, pure vegetarian meals, and event catering.
              </p>
            </div>
            <Link
              href="/directory?category=restaurants-takeout"
              className="text-xs font-extrabold text-[#002D62] hover:text-[#E00624] transition flex items-center gap-1"
            >
              <span>View All Food &amp; Bakeries</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devoteeFood.map((b) => (
              <BusinessCard key={b.slug} biz={b} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold text-[#002D62] uppercase tracking-widest flex items-center gap-1">
                <span>🏷️</span> Business Categories
              </span>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-1">
                Explore 22 Professional Services
              </h2>
            </div>
            <Link
              href="/directory"
              className="text-xs font-extrabold text-[#002D62] hover:text-[#E00624] transition flex items-center gap-1"
            >
              <span>View All Categories</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularCats.map((c) => (
              <Link
                key={c.slug}
                href={`/directory?category=${c.slug}`}
                className="bg-white p-5 rounded-3xl border border-[#CBD5E1] hover:border-[#002D62] transition-all group shadow-sm hover:shadow-card hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#F0F7FF] text-[#002D62] group-hover:bg-[#E00624] group-hover:text-white transition flex items-center justify-center text-lg mb-3">
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <h3 className="font-outfit font-extrabold text-[#0F172A] group-hover:text-[#002D62] text-sm leading-snug">
                  {c.name}
                </h3>
                <p className="tamil text-xs text-[#E00624] font-semibold mt-0.5">{c.tamil}</p>
                <p className="text-[11px] text-[#64748B] font-medium mt-2">
                  {c.count} directory listings
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Canadian Tamil Businesses */}
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-14 border-y border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#E00624] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
                <span>★</span> Handpicked Canada Spotlights
              </div>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-2">
                Featured Tamil Businesses Across Canada
              </h2>
            </div>
            <Link
              href="/directory"
              className="btn-navy rounded-xl px-4 py-2.5 text-xs font-bold shrink-0 self-start sm:self-auto"
            >
              Explore All Canada Listings →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((b) => (
              <BusinessCard key={b.slug} biz={b} />
            ))}
          </div>
        </div>
      </section>

      {/* City-Wise Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold text-[#002D62] uppercase tracking-widest flex items-center gap-1">
                <span>🇨🇦</span> Nationwide City Network
              </span>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-1">
                Browse Tamil Businesses by City
              </h2>
            </div>
            <Link
              href="/directory"
              className="text-xs font-extrabold text-[#002D62] hover:text-[#E00624] transition flex items-center gap-1"
            >
              <span>See Full City List</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topCities.slice(0, 20).map((c) => (
              <Link
                key={c.slug}
                href={`/directory?city=${encodeURIComponent(c.name)}`}
                className="bg-white rounded-3xl border border-[#CBD5E1] hover:border-[#002D62] p-5 shadow-xs hover:shadow-card transition flex flex-col justify-between min-h-[145px] group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B]">
                    {c.region}
                  </span>
                  <span className="text-[11px] font-bold text-[#002D62] bg-[#F0F7FF] border border-[#CCE3F8] px-2.5 py-0.5 rounded-full">
                    {c.count} listings
                  </span>
                </div>
                <div>
                  <h3 className="font-outfit font-extrabold text-lg text-[#0F172A] group-hover:text-[#002D62] transition flex items-center gap-1">
                    <span>{c.name}</span>
                    <span className="text-xs font-bold text-[#E00624]">({c.province})</span>
                  </h3>
                  <p className="text-[11px] text-[#64748B] line-clamp-2 mt-1">{c.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-extrabold text-[#002D62] uppercase tracking-widest">
              Common Questions
            </span>
            <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
              Frequently Asked Questions
            </h2>
          </div>
          <Faq />
        </div>
      </section>
    </main>
  );
}

function PortalPillar({ href, icon, title, sub }: { href: string; icon: string; title: string; sub: string }) {
  return (
    <Link
      href={href}
      className="bg-white rounded-3xl border border-[#CBD5E1] p-4 text-center shadow-xs hover:shadow-card hover:border-[#002D62] transition group flex flex-col items-center justify-center min-h-[110px] hover:-translate-y-1"
    >
      <span className="text-2xl mb-1 group-hover:scale-110 transition">{icon}</span>
      <h3 className="font-outfit font-extrabold text-xs text-[#0F172A] group-hover:text-[#002D62]">{title}</h3>
      <p className="text-[10px] text-[#64748B] font-medium mt-0.5">{sub}</p>
    </Link>
  );
}

function AlertBenefit({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
      <span className="text-xl">{icon}</span>
      <p className="mt-2 text-sm font-extrabold text-[#0F172A]">{title}</p>
      <p className="mt-1 text-xs leading-5 text-[#64748B]">{text}</p>
    </div>
  );
}
