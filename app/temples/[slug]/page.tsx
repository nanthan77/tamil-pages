import Link from "next/link";
import { notFound } from "next/navigation";
import BusinessCard from "@/components/BusinessCard";
import TemplePhotoUpload from "@/components/TemplePhotoUpload";
import { getAllBusinesses } from "@/lib/store";
import { getAllTemples, getTempleBySlug } from "@/lib/temples";
import { mapsLink, telLink, whatsappLink } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllTemples().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const temple = getTempleBySlug(slug);
  if (!temple) return { title: "Temple Not Found" };
  return {
    title: `${temple.name} · ${temple.city}, ${temple.province} — Pooja Timings & Thiruvizha`,
    description: `Opening and closing darshan hours, 4-kala pooja timings, annual Ther Thiruvizha, priest booking, and directions for ${temple.name} in ${temple.city}, Canada.`,
  };
}

export default async function TempleProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const temple = getTempleBySlug(slug);
  if (!temple) notFound();

  // Find nearby dining / catering options from store
  const allBiz = getAllBusinesses();
  const nearbyDining = temple.nearbyDiningSlugs
    .map((s) => allBiz.find((b) => b.slug === s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  // If none matched exact slugs, fallback to same city food
  const fallbackDining =
    nearbyDining.length > 0
      ? nearbyDining
      : allBiz
          .filter(
            (b) =>
              b.city.toLowerCase() === temple.city.toLowerCase() &&
              (b.category === "restaurants-takeout" ||
                b.category === "catering-event-food" ||
                b.category === "bakeries-sweets" ||
                b.category === "grocery-supermarkets"),
          )
          .slice(0, 3);

  const wa = whatsappLink(temple.whatsapp || (temple.phone.startsWith("+") ? temple.phone : ""));

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
        <Link href="/" className="text-[#002D62] hover:text-[#E00624]">
          🇨🇦 Home
        </Link>
        <span>/</span>
        <Link href="/temples" className="text-[#002D62] hover:text-[#E00624]">
          🛕 Temples Directory
        </Link>
        <span>/</span>
        <Link href={`/temples?city=${encodeURIComponent(temple.city)}`} className="text-[#002D62] hover:text-[#E00624]">
          {temple.city}
        </Link>
        <span>/</span>
        <span className="text-[#0F172A] truncate max-w-xs">{temple.name}</span>
      </nav>

      {/* Main Temple Header Profile */}
      <article className="bg-white rounded-[2.5rem] border border-[#CBD5E1] overflow-hidden shadow-card relative">
        <div className="h-2 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62]" />

        <div className="p-6 sm:p-10 space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3.5 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black uppercase tracking-wider">
              🛕 Traditional Hindu Temple
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1] font-bold">
              🍁 {temple.city}, {temple.province}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
              ✓ Verified Canadian Temple Sanctuary
            </span>
          </div>

          {/* Title Area */}
          <div className="space-y-1">
            <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-[#0F172A] leading-tight">
              {temple.name}
            </h1>
            <p className="tamil text-xl sm:text-2xl font-bold text-[#E00624]">
              {temple.tamilName}
            </p>
            <p className="text-sm font-semibold text-[#002D62] pt-1">
              Pradhana Moorthi (Main Deity): <strong className="text-[#0F172A]">{temple.moolavar}</strong>
            </p>
          </div>

          {/* Description */}
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-4xl">
            {temple.description}
          </p>

          {/* One-Tap Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {temple.phone && (
              <a
                href={telLink(temple.phone)}
                className="btn-primary rounded-2xl px-6 py-3.5 text-sm font-black flex items-center gap-2 shadow-md hover:shadow-lg transition"
              >
                <span>📞</span>
                <span>Call Temple Office ({temple.phone})</span>
              </a>
            )}
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-5 py-3.5 text-sm font-black bg-[#25D366] text-white hover:bg-[#1EBE5D] flex items-center gap-2 shadow-md transition"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                <span>WhatsApp Temple</span>
              </a>
            )}
            <a
              href={mapsLink(temple.address, temple.name)}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-5 py-3.5 text-sm font-bold border-2 border-[#002D62] text-[#002D62] hover:bg-[#F0F7FF] flex items-center gap-2 transition"
            >
              <span>🗺️</span>
              <span>Get Directions on Google Maps</span>
            </a>
            {temple.website && (
              <a
                href={temple.website}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-5 py-3.5 text-sm font-bold border border-[#CBD5E1] bg-white text-[#475569] hover:border-[#002D62] hover:text-[#002D62] flex items-center gap-2 transition"
              >
                <span>🌐</span>
                <span>Official Temple Website</span>
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Grid: Darshan Hours & Daily Pooja Schedule */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Darshan Hours */}
        <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F0F7FF] text-[#002D62] flex items-center justify-center text-xl shadow-xs">
              🕒
            </div>
            <div>
              <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                Opening &amp; Darshan Hours
              </h2>
              <p className="tamil text-xs text-[#E00624] font-semibold">கோவில் திறக்கும் &amp; மூடும் நேரங்கள்</p>
            </div>
          </div>

          <dl className="space-y-3 pt-2 text-sm">
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-4 flex justify-between items-center">
              <div>
                <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                  Monday – Friday (Morning)
                </dt>
                <dd className="font-outfit font-extrabold text-base text-[#002D62] mt-0.5">
                  {temple.darshanHours.weekdayMorning}
                </dd>
              </div>
              <span className="text-xl">🌅</span>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-4 flex justify-between items-center">
              <div>
                <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                  Monday – Friday (Evening)
                </dt>
                <dd className="font-outfit font-extrabold text-base text-[#002D62] mt-0.5">
                  {temple.darshanHours.weekdayEvening}
                </dd>
              </div>
              <span className="text-xl">🌆</span>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-4 flex justify-between items-center">
              <div>
                <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                  Saturday, Sunday &amp; Holidays
                </dt>
                <dd className="font-outfit font-extrabold text-base text-[#E00624] mt-0.5">
                  {temple.darshanHours.weekendHours}
                </dd>
              </div>
              <span className="text-xl">🛕</span>
            </div>

            {temple.darshanHours.specialDays && (
              <p className="text-xs text-[#64748B] italic px-1">
                * Note: {temple.darshanHours.specialDays}
              </p>
            )}
          </dl>
        </div>

        {/* Daily Pooja Schedule */}
        <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E00624] flex items-center justify-center text-xl shadow-xs">
              🪔
            </div>
            <div>
              <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                Daily 4-Kala Pooja Timings
              </h2>
              <p className="tamil text-xs text-[#E00624] font-semibold">தினசரி நித்திய பூசை கால அட்டவணை</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {temple.poojaTimings.map((pooja) => (
              <div
                key={pooja.name}
                className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="font-outfit font-extrabold text-sm text-[#0F172A]">
                    {pooja.name}
                  </div>
                  {pooja.tamilName && (
                    <div className="tamil text-xs font-semibold text-[#E00624]">
                      {pooja.tamilName}
                    </div>
                  )}
                  {pooja.description && (
                    <div className="text-[11px] text-[#64748B] mt-0.5">
                      {pooja.description}
                    </div>
                  )}
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-[#002D62] text-white font-outfit font-black text-xs shrink-0 shadow-xs">
                  {pooja.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Functions, Festivals & Annual Thiruvizha */}
      <section className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl shadow-xs border border-amber-200">
            🎪
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#E00624] uppercase tracking-wider">
              <span>★</span> Temple Utsavam &amp; Calendar
            </div>
            <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
              Annual Thiruvizha &amp; Special Festivals
            </h2>
            <p className="tamil text-sm font-semibold text-[#E00624]">
              வருடாந்த உற்சவம், தேர்த்திருவிழா மற்றும் விசேட விரத நாட்கள்
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 pt-2">
          {temple.festivals.map((fest) => (
            <div
              key={fest.name}
              className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-5 space-y-2 hover:border-[#002D62] transition"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-outfit font-extrabold text-base text-[#0F172A]">
                  {fest.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[10px] font-black uppercase">
                  {fest.month}
                </span>
              </div>
              {fest.tamilName && (
                <p className="tamil text-xs font-bold text-[#E00624]">
                  {fest.tamilName}
                </p>
              )}
              <p className="text-xs text-[#475569] leading-relaxed">
                {fest.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Priest Services & Temple Facilities */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Priest Services */}
        <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F0F7FF] text-[#002D62] flex items-center justify-center text-xl">
              🙏
            </div>
            <div>
              <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                Priest &amp; Kurukkal Services
              </h2>
              <p className="tamil text-xs text-[#E00624]">குருக்கள் சேவைகள் &amp; ஆராதனைகள்</p>
            </div>
          </div>
          <ul className="space-y-2 pt-1 text-sm text-[#0F172A]">
            {temple.priestServices.map((service) => (
              <li key={service} className="flex items-center gap-2 bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-[#CBD5E1] text-xs font-bold">
                <span className="text-[#002D62]">✓</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl">
              🏛️
            </div>
            <div>
              <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                Temple Facilities &amp; Annadhanam
              </h2>
              <p className="tamil text-xs text-[#E00624]">மண்டப வசதிகள் &amp; அன்னதானம்</p>
            </div>
          </div>
          <ul className="space-y-2 pt-1 text-sm text-[#0F172A]">
            {temple.facilities.map((fac) => (
              <li key={fac} className="flex items-center gap-2 bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-[#CBD5E1] text-xs font-bold">
                <span className="text-emerald-600">✓</span>
                <span>{fac}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Photo Upload & Gallery Component */}
      <TemplePhotoUpload templeName={temple.name} />

      {/* Nearby Authentic Tamil Vegetarian Restaurants, Annadhanam & Catering */}
      <section className="bg-gradient-to-br from-[#F0F7FF] to-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#002D62] uppercase tracking-wider">
              <span>🍽️</span> Devotee Food &amp; Catering Guide
            </div>
            <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-1">
              Nearby Tamil Restaurants, Bakeries &amp; Catering
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Recommended pure vegetarian food, hot tiffin, and catering spots near {temple.name}.
            </p>
          </div>
          <Link
            href={`/directory?city=${encodeURIComponent(temple.city)}&category=restaurants-takeout`}
            className="text-xs font-bold text-[#002D62] hover:text-[#E00624] transition shrink-0"
          >
            All Food in {temple.city} →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {fallbackDining.map((biz) => (
            <BusinessCard key={biz.slug} biz={biz} compact />
          ))}
        </div>
      </section>

      {/* SafeNet Creations Official Link Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 text-center space-y-2 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider">
          <span>🌐</span> Digital Web Partner
        </div>
        <p className="font-outfit font-extrabold text-base text-[#0F172A]">
          Canadian Tamil Community Portal &amp; Directory Architecture
        </p>
        <p className="text-xs text-[#64748B] max-w-xl mx-auto">
          Website Created, Maintained &amp; Supported by{" "}
          <a
            href="https://www.safenetcreations.com/canada/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-[#E00624] hover:underline"
          >
            SafeNet Creations Canada
          </a>
          . Connect with Canadian digital web solutions and business growth strategies.
        </p>
      </div>
    </main>
  );
}
