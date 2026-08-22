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
    title: `${temple.name} · ${temple.city}, ${temple.province} — Darshan Hours & Pooja Timings`,
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
                b.category === "grocery-supermarkets")
          )
          .slice(0, 3);

  const wa = whatsappLink(temple.whatsapp || (temple.phone.startsWith("+") ? temple.phone : ""));

  return (
    <main className="min-h-screen bg-[#FDFBF7] pb-16 space-y-8">
      {/* 1. Auspicious Devotional Chant Top Bar */}
      <div className="bg-gradient-to-r from-[#78350F] via-[#991B1B] to-[#78350F] text-[#FEF3C7] py-2 px-4 text-center text-xs font-bold tracking-widest uppercase border-b border-[#F59E0B]/30 shadow-xs flex items-center justify-center gap-3 overflow-hidden">
        <span>🕉️ ஓம் கணபதயே நமஹ</span>
        <span>·</span>
        <span>🦚 ஓம் சரவணபவ</span>
        <span>·</span>
        <span>🔱 ஓம் நமச்சிவாய</span>
        <span>·</span>
        <span>🌺 ஓம் சக்தி 🕉️</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 2. Devotional Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-[#78350F]">
          <Link href="/" className="hover:text-[#991B1B]">
            🇨🇦 Home
          </Link>
          <span>/</span>
          <Link href="/temples" className="hover:text-[#991B1B]">
            🛕 Temples Directory
          </Link>
          <span>/</span>
          <Link href={"/temples?city=" + encodeURIComponent(temple.city)} className="hover:text-[#991B1B]">
            {temple.city}
          </Link>
          <span>/</span>
          <span className="text-[#450A0A] truncate max-w-xs">{temple.name}</span>
        </nav>

        {/* 3. Grand Divine Temple Profile Card */}
        <article className="bg-white rounded-[2.5rem] border-2 border-[#F59E0B]/40 overflow-hidden shadow-[0_15px_40px_rgba(245,158,11,0.15)] relative">
          <div className="h-3 w-full bg-gradient-to-r from-[#F59E0B] via-[#DC2626] to-[#F59E0B]" />

          <div className="p-6 sm:p-10 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#78350F] border border-[#F59E0B]/40 font-black uppercase tracking-wider flex items-center gap-1.5">
                <span>🛕</span>
                <span>Traditional Agamic Temple</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#FFFBEB] text-[#78350F] border border-[#FDE68A] font-bold">
                🍁 {temple.city}, {temple.province}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold flex items-center gap-1">
                <span>ℹ</span>
                <span>Community Directory Entry</span>
              </span>
            </div>

            {/* Title Area */}
            <div className="space-y-1.5">
              <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-[#1E1B4B] leading-tight">
                {temple.name}
              </h1>
              <p className="tamil text-2xl sm:text-3xl font-bold text-[#991B1B]">
                {temple.tamilName}
              </p>
              <p className="max-w-3xl rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-950">
                Temple details are a directory reference and have not been independently verified. Confirm current hours, poojas, festivals and services directly before travelling.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#FFFBEB] px-4 py-2 rounded-xl border border-[#FDE68A] text-sm font-bold text-[#78350F] mt-2">
                <span className="text-base">🪔</span>
                <span>Pradhana Moorthi (Main Deity):</span>
                <strong className="text-[#450A0A] font-black">{temple.moolavar}</strong>
              </div>
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
                  className="rounded-2xl px-6 py-3.5 text-sm font-black bg-gradient-to-r from-[#991B1B] to-[#7F1D1D] text-white hover:brightness-110 flex items-center gap-2 shadow-md transition transform hover:scale-105"
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
                  className="rounded-2xl px-5 py-3.5 text-sm font-black bg-[#25D366] text-white hover:bg-[#1EBE5D] flex items-center gap-2 shadow-md transition transform hover:scale-105"
                >
                  <i className="fa-brands fa-whatsapp text-lg" />
                  <span>WhatsApp Priest / Office</span>
                </a>
              )}
              <a
                href={mapsLink(temple.address, temple.name)}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-5 py-3.5 text-sm font-bold border-2 border-[#78350F] text-[#78350F] hover:bg-[#FEF3C7] flex items-center gap-2 transition"
              >
                <span>🗺️</span>
                <span>Google Maps Directions</span>
              </a>
              {temple.website && (
                <a
                  href={temple.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl px-5 py-3.5 text-sm font-bold border border-[#F59E0B]/50 bg-[#FFFBEB] text-[#78350F] hover:bg-[#FEF3C7] flex items-center gap-2 transition"
                >
                  <span>🌐</span>
                  <span>Official Website</span>
                </a>
              )}
            </div>
          </div>
        </article>

        {/* 4. Grid: Darshan Hours & Daily 4-Kala Pooja Schedule */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Darshan Hours */}
          <div className="bg-white rounded-3xl border-2 border-[#F59E0B]/30 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#78350F] flex items-center justify-center text-2xl shadow-xs border border-[#FDE68A]">
                🕒
              </div>
              <div>
                <h2 className="font-outfit font-extrabold text-xl sm:text-2xl text-[#450A0A]">
                  Opening &amp; Darshan Hours
                </h2>
                <p className="tamil text-xs text-[#991B1B] font-semibold">கோவில் திறக்கும் &amp; மூடும் நேரங்கள்</p>
              </div>
            </div>

            <dl className="space-y-3 pt-2 text-sm">
              <div className="bg-[#FFFBEB] rounded-2xl border border-[#FDE68A] p-4 flex justify-between items-center">
                <div>
                  <dt className="text-[10px] font-black uppercase tracking-wider text-[#78350F]">
                    Monday – Friday (Morning Darshan)
                  </dt>
                  <dd className="font-outfit font-extrabold text-base text-[#450A0A] mt-0.5">
                    {temple.darshanHours.weekdayMorning}
                  </dd>
                </div>
                <span className="text-2xl">🌅</span>
              </div>

              <div className="bg-[#FFFBEB] rounded-2xl border border-[#FDE68A] p-4 flex justify-between items-center">
                <div>
                  <dt className="text-[10px] font-black uppercase tracking-wider text-[#78350F]">
                    Monday – Friday (Evening Darshan)
                  </dt>
                  <dd className="font-outfit font-extrabold text-base text-[#450A0A] mt-0.5">
                    {temple.darshanHours.weekdayEvening}
                  </dd>
                </div>
                <span className="text-2xl">🌆</span>
              </div>

              <div className="bg-gradient-to-r from-[#FEF3C7] to-[#FFFBEB] rounded-2xl border border-[#F59E0B]/40 p-4 flex justify-between items-center">
                <div>
                  <dt className="text-[10px] font-black uppercase tracking-wider text-[#78350F]">
                    Saturdays, Sundays &amp; Public Holidays
                  </dt>
                  <dd className="font-outfit font-extrabold text-base text-[#991B1B] mt-0.5">
                    {temple.darshanHours.weekendHours}
                  </dd>
                </div>
                <span className="text-2xl">🛕</span>
              </div>

              {temple.darshanHours.specialDays && (
                <div className="bg-[#FEF2F2] rounded-2xl border border-[#FECACA] p-4 text-xs text-[#991B1B]">
                  <span className="font-extrabold block">Special Occasions &amp; Mahotsavam Days:</span>
                  <p className="mt-0.5">{temple.darshanHours.specialDays}</p>
                </div>
              )}
            </dl>
          </div>

          {/* Daily 4-Kala Pooja Timings */}
          <div className="bg-white rounded-3xl border-2 border-[#F59E0B]/30 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF2F2] text-[#991B1B] flex items-center justify-center text-2xl shadow-xs border border-[#FECACA]">
                🪔
              </div>
              <div>
                <h2 className="font-outfit font-extrabold text-xl sm:text-2xl text-[#450A0A]">
                  Listed Pooja Schedule
                </h2>
                <p className="tamil text-xs text-[#991B1B] font-semibold">தினசரி நித்திய கால பூசை விபரங்கள்</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {temple.poojaTimings.map((pooja, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFBEB] rounded-2xl border border-[#FDE68A] p-4 flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-outfit font-extrabold text-sm text-[#450A0A]">
                        {pooja.name}
                      </span>
                      {pooja.tamilName && (
                        <span className="tamil text-xs font-bold text-[#991B1B]">
                          ({pooja.tamilName})
                        </span>
                      )}
                    </div>
                    {pooja.description && (
                      <p className="text-xs text-[#78350F]">{pooja.description}</p>
                    )}
                  </div>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#78350F] text-[#FEF3C7] font-outfit font-extrabold text-xs shrink-0 shadow-xs">
                    {pooja.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Special Festivals & Annual Chariot (Ther) Thiruvizha */}
        {temple.festivals.length > 0 && (
          <section className="bg-white rounded-3xl border-2 border-[#F59E0B]/30 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#78350F] flex items-center justify-center text-2xl shadow-xs border border-[#FDE68A]">
                🎪
              </div>
              <div>
                <h2 className="font-outfit font-extrabold text-xl sm:text-2xl text-[#450A0A]">
                  Annual Festivals &amp; Ther Thiruvizha
                </h2>
                <p className="tamil text-xs text-[#991B1B] font-semibold">ஆண்டுப் பெருவிழாக்கள் மற்றும் தேர்த்திருவிழா</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {temple.festivals.map((fest, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7]/40 rounded-2xl border border-[#F59E0B]/30 p-5 space-y-2.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#991B1B] text-white text-[10px] font-black uppercase">
                        {fest.month}
                      </span>
                    </div>
                    <h3 className="font-outfit font-extrabold text-base text-[#450A0A]">
                      {fest.name}
                    </h3>
                    {fest.tamilName && (
                      <p className="tamil text-xs font-bold text-[#991B1B]">
                        {fest.tamilName}
                      </p>
                    )}
                    <p className="text-xs text-[#78350F] mt-2 leading-relaxed">
                      {fest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Priest Services & Temple Amenities */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Priest Services */}
          <div className="bg-white rounded-3xl border-2 border-[#F59E0B]/30 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF2F2] text-[#991B1B] flex items-center justify-center text-2xl shadow-xs border border-[#FECACA]">
                🙏
              </div>
              <div>
                <h3 className="font-outfit font-extrabold text-xl text-[#450A0A]">
                  Priest &amp; Homam Services
                </h3>
                <p className="tamil text-xs text-[#991B1B] font-semibold">குருக்கள் பூசை மற்றும் ஹோம சேவைகள்</p>
              </div>
            </div>

            <ul className="space-y-2 pt-2">
              {temple.priestServices.map((svc, idx) => (
                <li
                  key={idx}
                  className="bg-[#FFFBEB] rounded-xl border border-[#FDE68A] p-3 text-xs font-bold text-[#78350F] flex items-center gap-2"
                >
                  <span className="text-amber-600">✓</span>
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Facilities */}
          <div className="bg-white rounded-3xl border-2 border-[#F59E0B]/30 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#78350F] flex items-center justify-center text-2xl shadow-xs border border-[#FDE68A]">
                🏛️
              </div>
              <div>
                <h3 className="font-outfit font-extrabold text-xl text-[#450A0A]">
                  Temple Facilities &amp; Amenities
                </h3>
                <p className="tamil text-xs text-[#991B1B] font-semibold">மண்டபம் மற்றும் வசதிகள்</p>
              </div>
            </div>

            <ul className="space-y-2 pt-2">
              {temple.facilities.map((fac, idx) => (
                <li
                  key={idx}
                  className="bg-[#FFFBEB] rounded-xl border border-[#FDE68A] p-3 text-xs font-bold text-[#78350F] flex items-center gap-2"
                >
                  <span className="text-amber-600">✓</span>
                  <span>{fac}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 7. Nearby Dining & Annadhanam Catering */}
        {fallbackDining.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-outfit font-extrabold text-xl sm:text-2xl text-[#450A0A]">
                  Nearby Vegetarian Dining &amp; Catering in {temple.city}
                </h2>
                <p className="tamil text-xs text-[#991B1B] font-semibold">அருகிலுள்ள சைவ உணவகங்கள் &amp; கேட்டரிங்</p>
              </div>
              <Link
                href={"/directory?city=" + encodeURIComponent(temple.city) + "&category=restaurants-takeout"}
                className="text-xs font-black text-[#991B1B] hover:underline"
              >
                View all in {temple.city} →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {fallbackDining.map((biz) => (
                <BusinessCard key={biz.id} business={biz} />
              ))}
            </div>
          </section>
        )}

        {/* 8. Devotee Photos Upload */}
        <TemplePhotoUpload templeSlug={temple.slug} templeName={temple.name} />

        {/* 9. VERY BIG SAFENET CANADA SPIRITUAL SANCTUARIES & HERITAGE NETWORK LINK */}
        <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#450A0A] via-[#78350F] to-[#1E1B4B] border-4 border-[#F59E0B] p-8 sm:p-14 text-white shadow-[0_25px_60px_rgba(120,53,15,0.4)] text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F59E0B]/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FEF3C7]/20 border border-[#FDE68A]/40 text-[#FDE68A] text-xs font-black uppercase tracking-wider">
              <span>🇨🇦</span>
              <span>Canadian Tamil Hindu Heritage &amp; Temple Information System</span>
            </div>

            <h2 className="font-outfit font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#FEF3C7] leading-tight">
              Preserving Tamil Agamic Heritage Across Canada
            </h2>

            <p className="tamil text-lg sm:text-xl font-bold text-[#FDE68A]">
              கனடா வாழ் தமிழர்களுக்கான ஆலயம், ஆன்மீகம், பூசை விபரங்கள் மற்றும் கலாச்சார வழிகாட்டி
            </p>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              This Canadian Tamil Spiritual Sanctuaries directory is architected and maintained to support Hindu temples, registered charitable trusts, devotee pilgrimages, Annadhanam feeding networks, and Vedic priesthood services across Canada.
            </p>

            {/* Big Action Link to SafeNet Canada */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.safenetcreations.com/canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-10 py-4 text-base sm:text-lg font-black bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white hover:brightness-110 shadow-2xl transition transform hover:scale-105 active:scale-95 flex items-center gap-3 border-2 border-[#FEF3C7]"
              >
                <span>🍁</span>
                <span>Visit SafeNet Creations Canada Portal</span>
                <span>→</span>
              </a>

              <a
                href="https://www.safenetcreations.com/canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-6 py-4 text-sm font-extrabold bg-white/10 hover:bg-white/20 text-[#FEF3C7] border border-white/30 backdrop-blur-md transition flex items-center gap-2"
              >
                <span>🛕</span>
                <span>Submit / Update Temple Information</span>
              </a>
            </div>

            <p className="text-xs text-white/60 pt-2">
              Independent Canadian Tamil community directory · Confirm time-sensitive details directly with the temple
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
