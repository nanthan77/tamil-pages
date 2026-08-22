import Link from "next/link";
import { notFound } from "next/navigation";
import BusinessCard from "@/components/BusinessCard";
import BusinessShareBar from "@/components/BusinessShareBar";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ReviewForm from "@/components/ReviewForm";
import { getCategory } from "@/lib/categories";
import { getReviews, reviewStats } from "@/lib/leads";
import { breadcrumbJsonLd, listingDescription, listingTitle, localBusinessJsonLd } from "@/lib/seo";
import { QUOTE_CATEGORIES } from "@/lib/site";
import { getAllBusinesses, getBusiness } from "@/lib/store";
import { getTempleBySlug } from "@/lib/temples";
import { citySlug, getCategoryTheme, getYouTubeEmbedUrl, initials, mapsLink, telLink, whatsappLink } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllBusinesses().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const biz = getBusiness(slug);
  if (!biz) return { title: "Listing Not Found" };
  return {
    title: listingTitle(biz),
    description: listingDescription(biz),
    alternates: { canonical: `https://tamilcanadianpages.ca/directory/${biz.slug}` },
    openGraph: {
      title: listingTitle(biz),
      description: listingDescription(biz),
      type: "website",
      url: `https://tamilcanadianpages.ca/directory/${biz.slug}`,
      siteName: "TamilCanadianPages.ca",
    },
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const biz = getBusiness(slug);
  if (!biz) notFound();

  const temple = getTempleBySlug(slug);
  const cat = getCategory(biz.category);
  const theme = getCategoryTheme(biz.category);
  const ytEmbedUrl = getYouTubeEmbedUrl(biz.youtube);

  const related = getAllBusinesses()
    .filter((b) => b.slug !== biz.slug && (b.category === biz.category || b.city === biz.city))
    .slice(0, 3);

  const wa = whatsappLink(biz.whatsapp || biz.phone);
  const reviews = getReviews(slug);
  const stats = reviewStats(slug);
  const cityPath = `/c/${citySlug(biz.city)}`;
  const catPath = `${cityPath}/${biz.category}`;
  const pageUrl = `https://tamilcanadianpages.ca/directory/${biz.slug}`;

  // Localized AI SEO Hashtags
  const cleanCity = biz.city.replace(/\s+/g, "");
  const cleanCat = (cat?.name || "Business").replace(/[^a-zA-Z]/g, "");
  const hashtags = [
    `#${cleanCity}Tamil`,
    `#${cleanCity}${cleanCat}`,
    `#CanadaTamilBusiness`,
    `#TamilCanadianPages`,
    `#GTA${cleanCat}`,
  ];

  const hasSocials = Boolean(
    biz.instagram || biz.facebook || biz.tiktok || biz.youtube || biz.linkedin
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-16 space-y-8">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: biz.city, path: cityPath },
            { name: cat?.name || "Category", path: catPath },
            { name: biz.name, path: `/directory/${biz.slug}` },
          ]),
          localBusinessJsonLd(biz, stats),
        ]}
      />

      {/* 1. Category-Themed Top Accent Bar */}
      <div className={`bg-gradient-to-r ${theme.gradient} text-white py-2 px-4 text-center text-xs font-black tracking-wider uppercase shadow-xs flex items-center justify-center gap-2`}>
        <span>{theme.icon}</span>
        <span>{theme.highlightTag}</span>
        <span className="hidden sm:inline">·</span>
        <span className="tamil font-bold hidden sm:inline">{theme.tamilTag}</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 2. Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-[#64748B] pt-2">
          <Link href="/" className="text-[#002D62] hover:text-[#E00624]">
            🇨🇦 Home
          </Link>
          <span>/</span>
          <Link href="/directory" className="text-[#002D62] hover:text-[#E00624]">
            Directory
          </Link>
          <span>/</span>
          <Link href={cityPath} className="text-[#002D62] hover:text-[#E00624]">
            {biz.city}
          </Link>
          <span>/</span>
          <Link href={catPath} className="text-[#002D62] hover:text-[#E00624]">
            {cat?.name || "Category"}
          </Link>
          <span>/</span>
          <span className="text-[#0F172A] truncate max-w-xs">{biz.name}</span>
        </nav>

        {/* 3. Temple Banner (if also a temple) */}
        {temple && (
          <div className="bg-gradient-to-r from-[#78350F] via-[#991B1B] to-[#78350F] rounded-3xl p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-300/40">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🛕</span>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-amber-300">
                  Agamic Temple Profile &amp; Darshan Timings Available
                </p>
                <h3 className="font-outfit font-extrabold text-base text-white">
                  {temple.name}
                </h3>
              </div>
            </div>
            <Link
              href={`/temples/${temple.slug}`}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-black shrink-0 shadow transition"
            >
              View Full Temple Page ↗
            </Link>
          </div>
        )}

        {/* 4. Grand Business Profile Card */}
        <article className="bg-white rounded-[2.5rem] border border-[#CBD5E1] overflow-hidden shadow-card relative">
          <div className={`h-2.5 w-full bg-gradient-to-r ${theme.gradient}`} />

          <div className="p-6 sm:p-10 space-y-8">
            {/* Top Badges & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3.5 py-1.5 rounded-full border ${theme.badgeBg} ${theme.badgeText} text-xs font-black uppercase tracking-wider flex items-center gap-1.5`}>
                  <span>{theme.icon}</span>
                  <span>{cat?.name || biz.category}</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1">
                  <span>🍁</span>
                  <span>{biz.city}, {biz.province}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold flex items-center gap-1">
                  <span>✓</span>
                  <span>Verified Canadian Listing</span>
                </span>
              </div>

              {/* Claim Button in Header */}
              <Link
                href={`/claim/${biz.slug}`}
                className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-black hover:bg-amber-100 transition shadow-2xs"
              >
                🏷️ Claim This Business ↗
              </Link>
            </div>

            {/* Main Title & Tamil Name Header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br ${theme.gradient} text-white flex items-center justify-center font-outfit font-black text-2xl sm:text-3xl shadow-md shrink-0`}>
                {initials(biz.name)}
              </div>

              <div className="space-y-2 min-w-0 flex-1">
                <h1 className="font-outfit font-extrabold text-2xl sm:text-4xl text-[#0F172A] leading-tight">
                  {biz.name}
                </h1>
                {biz.tamilName && (
                  <p className="tamil text-lg sm:text-xl font-bold text-[#E00624]">
                    {biz.tamilName}
                  </p>
                )}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {biz.description}
                </p>
              </div>
            </div>

            {/* 5. Primary 1-Click Action Hub (WhatsApp, Call, Maps, Website) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {wa ? (
                <a
                  href={`${wa}?text=${encodeURIComponent(`வணக்கம் ${biz.name}! I found your listing on TamilCanadianPages.ca and would like more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white flex flex-col items-center justify-center gap-1 shadow-md transition group text-center"
                >
                  <i className="fa-brands fa-whatsapp text-xl group-hover:scale-110 transition" />
                  <span className="text-xs font-black uppercase tracking-wider">WhatsApp Chat</span>
                  <span className="text-[10px] text-white/90 truncate max-w-full">Direct Inquiry</span>
                </a>
              ) : null}

              {biz.phone ? (
                <a
                  href={telLink(biz.phone)}
                  className="p-3.5 rounded-2xl bg-[#002D62] hover:bg-[#001F45] text-white flex flex-col items-center justify-center gap-1 shadow-md transition group text-center"
                >
                  <i className="fa-solid fa-phone text-lg group-hover:scale-110 transition" />
                  <span className="text-xs font-black uppercase tracking-wider">Call Directly</span>
                  <span className="text-[10px] text-white/90 font-mono">{biz.phone}</span>
                </a>
              ) : null}

              {biz.address ? (
                <a
                  href={mapsLink(biz.address, biz.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white border-2 border-slate-300 hover:border-[#002D62] text-slate-800 flex flex-col items-center justify-center gap-1 shadow-xs transition group text-center"
                >
                  <i className="fa-solid fa-location-dot text-lg text-[#E00624] group-hover:scale-110 transition" />
                  <span className="text-xs font-black uppercase tracking-wider">Get Directions</span>
                  <span className="text-[10px] text-slate-500 truncate max-w-full">{biz.city}, {biz.province}</span>
                </a>
              ) : null}

              {biz.website ? (
                <a
                  href={biz.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white border-2 border-slate-300 hover:border-[#002D62] text-slate-800 flex flex-col items-center justify-center gap-1 shadow-xs transition group text-center"
                >
                  <i className="fa-solid fa-globe text-lg text-[#002D62] group-hover:scale-110 transition" />
                  <span className="text-xs font-black uppercase tracking-wider">Official Website</span>
                  <span className="text-[10px] text-slate-500 truncate max-w-full">Visit Site ↗</span>
                </a>
              ) : (
                <Link
                  href={`/claim/${biz.slug}`}
                  className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 hover:bg-amber-100 text-amber-900 flex flex-col items-center justify-center gap-1 shadow-xs transition group text-center"
                >
                  <span className="text-lg">🏷️</span>
                  <span className="text-xs font-black uppercase tracking-wider">Claim Profile</span>
                  <span className="text-[10px] text-amber-800">100% Free Owner Setup</span>
                </Link>
              )}
            </div>

            {/* 6. Social Channels Bar (If available) */}
            {hasSocials && (
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <span>🌐</span>
                  <span>Official Social Media Channels:</span>
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {biz.instagram && (
                    <a
                      href={biz.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs font-bold hover:opacity-95 shadow-xs flex items-center gap-1.5"
                    >
                      <i className="fa-brands fa-instagram" />
                      <span>Instagram</span>
                    </a>
                  )}
                  {biz.facebook && (
                    <a
                      href={biz.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-[#1877F2] text-white text-xs font-bold hover:bg-[#0C63D4] shadow-xs flex items-center gap-1.5"
                    >
                      <i className="fa-brands fa-facebook" />
                      <span>Facebook</span>
                    </a>
                  )}
                  {biz.tiktok && (
                    <a
                      href={biz.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-slate-800 shadow-xs flex items-center gap-1.5"
                    >
                      <i className="fa-brands fa-tiktok" />
                      <span>TikTok</span>
                    </a>
                  )}
                  {biz.youtube && (
                    <a
                      href={biz.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-[#FF0000] text-white text-xs font-bold hover:bg-[#CC0000] shadow-xs flex items-center gap-1.5"
                    >
                      <i className="fa-brands fa-youtube" />
                      <span>YouTube</span>
                    </a>
                  )}
                  {biz.linkedin && (
                    <a
                      href={biz.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-[#0A66C2] text-white text-xs font-bold hover:bg-[#084E96] shadow-xs flex items-center gap-1.5"
                    >
                      <i className="fa-brands fa-linkedin" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* 7. YouTube Video Showcase (Render only if valid video embed exists) */}
            {ytEmbedUrl && (
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                    ▶
                  </span>
                  <div>
                    <h3 className="font-outfit font-black text-lg text-white">
                      Featured Video Showcase
                    </h3>
                    <p className="text-xs text-slate-300">
                      Watch {biz.name} in action · Canadian Tamil Business Spotlight
                    </p>
                  </div>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-inner">
                  <iframe
                    src={ytEmbedUrl}
                    title={`${biz.name} Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            )}

            {/* 8. Category Highlights & Key Services */}
            <div className="space-y-4 border-t border-slate-200 pt-6">
              <h3 className="font-outfit font-black text-lg text-[#0F172A] flex items-center gap-2">
                <span>✨</span>
                <span>Specialized Services &amp; Highlights</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {theme.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 font-black">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 9. Contact Details, Address & Hours Table */}
            <div className="grid sm:grid-cols-2 gap-6 border-t border-slate-200 pt-6 text-xs">
              <div className="space-y-3">
                <h4 className="font-outfit font-extrabold text-sm uppercase tracking-wider text-[#002D62] flex items-center gap-2">
                  <span>📍</span>
                  <span>Location &amp; Coordinates</span>
                </h4>
                <div className="space-y-2 text-slate-600">
                  {biz.address && (
                    <p className="flex items-start gap-2">
                      <strong className="text-slate-900 shrink-0">Street:</strong>
                      <span>{biz.address}</span>
                    </p>
                  )}
                  <p className="flex items-start gap-2">
                    <strong className="text-slate-900 shrink-0">Metro Hub:</strong>
                    <span>{biz.city}, {biz.province}, Canada</span>
                  </p>
                  {biz.phone && (
                    <p className="flex items-start gap-2">
                      <strong className="text-slate-900 shrink-0">Telephone:</strong>
                      <a href={telLink(biz.phone)} className="text-[#002D62] font-bold hover:underline">
                        {biz.phone}
                      </a>
                    </p>
                  )}
                  {biz.email && (
                    <p className="flex items-start gap-2">
                      <strong className="text-slate-900 shrink-0">Email:</strong>
                      <a href={`mailto:${biz.email}`} className="text-[#002D62] font-bold hover:underline">
                        {biz.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-outfit font-extrabold text-sm uppercase tracking-wider text-[#002D62] flex items-center gap-2">
                  <span>⏰</span>
                  <span>Business Hours &amp; Access</span>
                </h4>
                <div className="space-y-2 text-slate-600">
                  {biz.hours ? (
                    <p className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                      {biz.hours}
                    </p>
                  ) : (
                    <p className="text-slate-500 italic">
                      Standard Canadian retail &amp; service hours apply. Please call ahead or WhatsApp for holiday timings.
                    </p>
                  )}
                  <p className="text-[11px] text-slate-400">
                    Languages Spoken: <strong>Tamil (தமிழ்), English</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* 10. Interactive 1-Click Social Sharing Bar */}
            <div className="pt-2">
              <BusinessShareBar
                url={pageUrl}
                businessName={biz.name}
                city={biz.city}
              />
            </div>

            {/* 11. AI Geo-Keywords & Google Search Hashtags */}
            <div className="border-t border-slate-200 pt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                <span>🤖</span>
                <span>AI Search &amp; Google Geo-Targeting Index</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {hashtags.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 transition cursor-default"
                  >
                    {h}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                Indexed for Tamil Canadians in <strong>{biz.city}, {biz.province}</strong> searching for certified <em>{cat?.name || biz.category}</em>, telephone contact numbers, WhatsApp inquiries, and verified reviews.
              </p>
            </div>

            {/* 12. SafeNet Creations High-Authority Backlink Badge */}
            <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-[#002D62] text-white">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <span className="text-2xl">🍁</span>
                <div>
                  <h4 className="font-outfit font-black text-xs sm:text-sm text-white">
                    Canadian Digital Architecture &amp; SEO
                  </h4>
                  <p className="text-[11px] text-white/80">
                    High-performance business directory infrastructure for Canadian Tamils.
                  </p>
                </div>
              </div>

              <a
                href="https://www.safenetcreations.com/canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shrink-0 shadow transition flex items-center gap-1.5"
              >
                <span>SafeNet Creations Canada</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </article>

        {/* 13. Owner Verification & Claim Callout */}
        <section className="bg-gradient-to-r from-[#002D62] to-[#0A4D92] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <span>🏷️</span> Business Owner Verification
            </div>
            <h3 className="font-outfit font-extrabold text-xl sm:text-2xl text-white">
              Do you own or manage {biz.name}?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Claim this listing in 30 seconds for 100% free. Update opening hours, direct WhatsApp inquiry links, photos, and receive genuine customer quote leads.
            </p>
          </div>

          <Link
            href={`/claim/${biz.slug}`}
            className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-xs uppercase tracking-wider shrink-0 shadow-lg transition"
          >
            Claim This Listing Free →
          </Link>
        </section>

        {/* 14. Quote / Lead Inquiry Form (For Service Categories) */}
        {QUOTE_CATEGORIES.has(biz.category) && (
          <section className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-4 shadow-card">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#002D62]">
                💬 Free Customer Inquiry
              </span>
              <h2 className="font-outfit font-extrabold text-2xl text-[#0F172A]">
                Request a Free Quote from {biz.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Send your service request directly. You will receive a response on your phone or WhatsApp within 24 hours.
              </p>
            </div>
            <LeadForm
              kind="quote"
              slug={biz.slug}
              business={biz.name}
              cta={`Request Free Quote from ${biz.name}`}
            />
          </section>
        )}

        {/* 15. Reviews & Ratings Section */}
        <section className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-6 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="space-y-1">
              <h2 className="font-outfit font-extrabold text-2xl text-[#0F172A]">
                Customer Reviews &amp; Ratings
              </h2>
              <p className="text-xs text-slate-500">
                Genuine feedback from the Canadian Tamil community.
              </p>
            </div>

            {stats.count > 0 ? (
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl">
                <span className="text-amber-500 font-black text-lg">★ {stats.average.toFixed(1)}</span>
                <span className="text-xs font-bold text-slate-600">({stats.count} reviews)</span>
              </div>
            ) : (
              <span className="text-xs font-bold text-slate-400 italic">
                Be the first to write a review!
              </span>
            )}
          </div>

          {/* List Existing Reviews */}
          {reviews.length > 0 && (
            <div className="space-y-3">
              {reviews.map((r) => (
                <div key={r.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-800">{r.name}</span>
                    <span className="text-amber-500 font-bold text-xs">{"★".repeat(r.rating)}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{r.comment}</p>
                </div>
              ))}
            </div>
          )}

          {/* Review Submission Form */}
          <div className="pt-2">
            <h3 className="font-outfit font-bold text-sm text-[#002D62] mb-3">
              Leave a Review for {biz.name}
            </h3>
            <ReviewForm slug={biz.slug} />
          </div>
        </section>

        {/* 16. Related Businesses in Same City / Category */}
        {related.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                More {cat?.name || "Businesses"} in {biz.city}
              </h3>
              <Link
                href={catPath}
                className="text-xs font-bold text-[#002D62] hover:text-[#E00624] transition"
              >
                View all in {biz.city} →
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <BusinessCard key={r.id} biz={r} compact />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
