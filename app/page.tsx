import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import Faq from "@/components/Faq";
import SearchForm from "@/components/SearchForm";
import { CATEGORIES } from "@/lib/categories";
import { getNowShowingMovies } from "@/lib/cinema";
import { CITIES } from "@/lib/cities";
import { getUpcomingEvents } from "@/lib/events";
import { getLatestNews } from "@/lib/news";
import { countByCategory, countByCity, getAllBusinesses } from "@/lib/store";
import { getAllTemples } from "@/lib/temples";


export default function HomePage() {
  const catCounts = countByCategory();
  const cityCounts = countByCity();
  const all = getAllBusinesses();
  const bySlug = new Map(all.map((b) => [b.slug, b]));

  const allNews = getLatestNews();
  const latestNews = allNews.slice(0, 4);
  const upcomingEvents = getUpcomingEvents().slice(0, 3);
  const nowShowingMovies = getNowShowingMovies().slice(0, 4);

  const allTemples = getAllTemples();
  const temples = allTemples.slice(0, 6);

  const onCount = all.filter((b) => b.province.toUpperCase() === "ON").length;
  const bcCount = all.filter((b) => b.province.toUpperCase() === "BC").length;
  const abCount = all.filter((b) => b.province.toUpperCase() === "AB").length;
  const qcCount = all.filter((b) => b.province.toUpperCase() === "QC").length;
  const mbCount = all.filter((b) => b.province.toUpperCase() === "MB").length;
  const nsCount = all.filter((b) => b.province.toUpperCase() === "NS" || b.province.toUpperCase() === "NL").length || 10;

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
      {/* Breaking News Ticker */}
      <div className="bg-[#0B1D3A] text-white py-2 px-4 border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden truncate">
            <span className="px-2 py-0.5 rounded-md bg-[#E00624] text-white font-black text-[10px] uppercase tracking-wider shrink-0 animate-pulse">
              ⚡ LIVE NEWS
            </span>
            <span className="truncate text-white/90 font-medium">
              {latestNews[0]?.title || "Canadian Tamil Community Daily Dispatch & Updates"}
            </span>
          </div>
          <Link
            href="/news"
            className="text-amber-300 hover:text-white font-bold shrink-0 hidden sm:inline"
          >
            All News →
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-grid border-b border-[#CBD5E1]/60 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            {/* Canadian Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FF] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider text-[#002D62]">
              <span className="text-sm">🍁</span>
              <span>Canada’s All-in-One Tamil Diaspora Super-Portal</span>
            </div>

            {/* Headline */}
            <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] leading-[1.15] tracking-tight">
              Directory, Temples, News, Events &amp; Cinema in{" "}
              <span className="text-[#E00624] relative inline-block">
                Canada
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-[#002D62]"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            {/* Bilingual subtitle */}
            <div className="space-y-1">
              <p className="tamil text-[#B0041B] font-semibold text-base sm:text-lg">
                கனடா வாழ் தமிழர்களுக்கான முழுமையான இணையதளம் — வணிகங்கள், கோவில்கள், செய்திகள், கலைநிகழ்ச்சிகள் &amp; சினிமா.
              </p>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl">
                The authoritative digital ecosystem connecting over 300,000 Tamil Canadians across Toronto, Scarborough, Markham, Montreal, Vancouver, Calgary, Edmonton, and nationwide.
              </p>
            </div>

            {/* Search Box */}
            <div className="pt-2">
              <SearchForm large />
            </div>

            {/* Quick Hub Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold">
              <Link
                href="/directory"
                className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition shadow-xs"
              >
                🏬 {all.length.toLocaleString()}+ Businesses
              </Link>
              <Link
                href="/temples"
                className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition shadow-xs"
              >
                🛕 {allTemples.length}+ Temples &amp; Sanctuaries
              </Link>
              <Link
                href="/news"
                className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition shadow-xs"
              >
                📰 Daily News
              </Link>
              <Link
                href="/events"
                className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition shadow-xs"
              >
                🎪 Upcoming Events
              </Link>
              <Link
                href="/cinema"
                className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition shadow-xs"
              >
                🎬 Tamil Cinema
              </Link>
              <Link
                href="/tuition"
                className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition shadow-xs"
              >
                🎓 Culture &amp; Tuition
              </Link>
            </div>
          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-white via-[#FAFCFF] to-[#F0F7FF] rounded-[2.5rem] border-2 border-[#002D62]/20 p-8 shadow-card-hover relative overflow-hidden">
              <div className="absolute top-4 right-4 text-3xl opacity-20 select-none">🍁</div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#002D62] to-[#0A4D92] text-white flex items-center justify-center text-2xl shadow-md">
                  🍁
                </div>
                <div>
                  <h3 className="font-outfit font-black text-2xl text-[#002D62]">tamilcanadianpages.ca</h3>
                  <p className="text-xs text-[#E00624] font-bold uppercase tracking-wider">
                    Canada Tamil Super-Portal
                  </p>
                </div>
              </div>

              {/* Grid Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <HeroStatBadge icon="🏬" k={`${all.length.toLocaleString()}+`} v="Canada Listings" />
                <HeroStatBadge icon="🛕" k={`${allTemples.length}+`} v="Tamil Temples" />
                <HeroStatBadge icon="📰" k={`${allNews.length}+`} v="Daily Reports" />
                <HeroStatBadge icon="🎬" k="7 Hubs" v="Tamil Theatres" />
              </div>

              {/* Quick Province Jump bar */}
              <div className="border-t border-[#E2E8F0] pt-4">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#64748B] block mb-2">
                  Browse by Canadian Province
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <ProvincePill code="ON" name="Ontario" count={onCount} />
                  <ProvincePill code="BC" name="BC" count={bcCount} />
                  <ProvincePill code="AB" name="Alberta" count={abCount} />
                  <ProvincePill code="QC" name="Quebec" count={qcCount} />
                  <ProvincePill code="MB" name="Manitoba" count={mbCount} />
                  <ProvincePill code="NS" name="Atlantic" count={nsCount} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#CBD5E1] bg-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-[#E00624]">For owners</p>
            <p className="font-outfit font-extrabold text-[#0F172A]">Listing is free. Pay only to get more calls.</p>
            <p className="text-xs text-[#64748B] mt-1">Boost $49 · Deals $39 · Jobs $49 · Featured $29/mo · Ads from $149/mo</p>
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
          <PortalPillar href="/temples" icon="🛕" title="Temples" sub={`${allTemples.length}+ Daily Poojas`} />
          <PortalPillar href="/news" icon="📰" title="News Feed" sub="Daily Diaspora" />
          <PortalPillar href="/events" icon="🎪" title="Events" sub="Concerts &amp; Ther" />
          <PortalPillar href="/cinema" icon="🎬" title="Cinema" sub="Woodside &amp; Cineplex" />
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

          <div className="grid md:grid-cols-3 gap-5">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.slug}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-white/40 transition flex flex-col justify-between space-y-4 hover:-translate-y-1"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E00624] text-white font-black text-[10px] uppercase">
                      {evt.category}
                    </span>
                    <span className="text-[10px] text-white/80 font-bold">
                      🍁 {evt.city}, {evt.province}
                    </span>
                  </div>

                  <h3 className="font-outfit font-extrabold text-lg text-white hover:text-amber-300 transition leading-snug">
                    <Link href={`/events/${evt.slug}`}>{evt.title}</Link>
                  </h3>

                  <p className="text-xs text-white/80 flex items-center gap-1.5">
                    <span>📅</span>
                    <span>{evt.startDate} ({evt.startTime})</span>
                    <span>·</span>
                    <span>{evt.startTime}</span>
                  </p>

                  <p className="text-xs text-white/75 line-clamp-2">{evt.description}</p>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300">{evt.ticketType}</span>
                  <Link
                    href={`/events/${evt.slug}`}
                    className="text-xs font-black text-white hover:text-amber-300 transition flex items-center gap-1"
                  >
                    <span>Details</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Now Showing Tamil Cinema Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold text-[#002D62] uppercase tracking-widest flex items-center gap-1">
                <span>🎬</span> Canada Box Office
              </span>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-1">
                Tamil Cinema &amp; Showtimes in Canadian Theatres
              </h2>
              <p className="text-[#64748B] text-sm mt-1">
                Woodside Cinemas (Scarborough), Albion Cinemas (Etobicoke), Cineplex Forum (Montreal), and Landmark (Surrey).
              </p>
            </div>
            <Link
              href="/cinema"
              className="text-xs font-extrabold text-[#002D62] hover:text-[#E00624] transition flex items-center gap-1"
            >
              <span>View All Showtimes &amp; Theatres</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {nowShowingMovies.map((m) => (
              <div
                key={m.slug}
                className="bg-white rounded-[2rem] border border-[#CBD5E1] p-6 space-y-4 shadow-sm hover:border-[#002D62] transition flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E00624] text-white font-black text-[10px] uppercase">
                      {m.status}
                    </span>
                    <span className="text-xs font-bold text-[#64748B]">
                      {m.certification} · {m.duration}
                    </span>
                  </div>

                  <h3 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                    {m.title}
                  </h3>
                  <p className="tamil text-xs font-bold text-[#E00624]">{m.tamilTitle}</p>
                  <p className="text-xs text-[#64748B]">
                    <strong className="text-[#0F172A]">Starring:</strong> {m.cast.slice(0, 3).join(", ")}
                  </p>
                  <p className="text-xs text-[#475569] line-clamp-2">{m.synopsis}</p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#002D62]">
                    🎟️ {m.theatreShowtimes.length} Theatres Screening
                  </span>
                  <Link
                    href="/cinema"
                    className="btn-navy rounded-xl px-4 py-2 text-xs font-bold"
                  >
                    Check Showtimes →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Canadian Tamil News Section */}
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-12 border-y border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#E00624] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
                <span>📰</span> Daily Community Feed
              </div>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-2">
                Latest Canadian Tamil News &amp; Stories
              </h2>
            </div>
            <Link
              href="/news"
              className="btn-navy rounded-xl px-4 py-2.5 text-xs font-bold shrink-0 self-start sm:self-auto"
            >
              Explore All News Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {latestNews.map((n) => (
              <article
                key={n.slug}
                className="bg-white rounded-3xl border border-[#CBD5E1] p-5 shadow-xs hover:shadow-card hover:border-[#002D62] transition flex flex-col justify-between space-y-3 group hover:-translate-y-1"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase text-[#002D62] block">
                    {n.category}
                  </span>
                  <h3 className="font-outfit font-bold text-sm text-[#0F172A] group-hover:text-[#002D62] leading-snug line-clamp-2">
                    <Link href={`/news/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="text-[11px] text-[#64748B] line-clamp-3 leading-relaxed">
                    {n.summary}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] text-[#64748B]">
                  <span>📍 {n.city}</span>
                  <Link href={`/news/${n.slug}`} className="font-bold text-[#E00624] hover:underline">
                    Read →
                  </Link>
                </div>
              </article>
            ))}
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
                  {c.count} verified listings
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

function HeroStatBadge({ icon, k, v }: { icon: string; k: string; v: string }) {
  return (
    <div className="bg-white rounded-2xl border border-[#CBD5E1] p-3 shadow-xs">
      <div className="flex items-center gap-1.5">
        <span className="text-sm">{icon}</span>
        <div className="font-outfit font-black text-[#002D62] text-lg">{k}</div>
      </div>
      <div className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider mt-0.5">{v}</div>
    </div>
  );
}

function ProvincePill({ code, name, count }: { code: string; name: string; count: number }) {
  return (
    <Link
      href={`/directory?province=${code}`}
      className="px-2.5 py-1 rounded-xl bg-white border border-[#CBD5E1] text-[11px] font-bold text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition flex items-center gap-1"
    >
      <span>{name}</span>
      <span className="text-[#64748B] text-[10px]">({count})</span>
    </Link>
  );
}
