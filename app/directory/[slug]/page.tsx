import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ReviewForm from "@/components/ReviewForm";
import { getCategory } from "@/lib/categories";
import { getReviews, reviewStats } from "@/lib/leads";
import { breadcrumbJsonLd, listingDescription, listingTitle, localBusinessJsonLd } from "@/lib/seo";
import { QUOTE_CATEGORIES } from "@/lib/site";
import { getAllBusinesses, getBusiness } from "@/lib/store";
import { getTempleBySlug } from "@/lib/temples";
import { citySlug, mapsLink, telLink, whatsappLink } from "@/lib/utils";

export const dynamic = "force-dynamic";

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
    alternates: { canonical: `/directory/${biz.slug}` },
    openGraph: {
      title: listingTitle(biz),
      description: listingDescription(biz),
      type: "website",
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
  const related = getAllBusinesses()
    .filter((b) => b.slug !== biz.slug && (b.category === biz.category || b.city === biz.city))
    .slice(0, 3);
  const wa = whatsappLink(biz.whatsapp || biz.phone);
  const reviews = getReviews(slug);
  const stats = reviewStats(slug);
  const cityPath = `/c/${citySlug(biz.city)}`;
  const catPath = `${cityPath}/${biz.category}`;

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
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
        <span className="text-[#0F172A] truncate max-w-xs">{biz.name}</span>
      </div>

      {/* Temple Banner if it is a Temple */}
      {temple && (
        <div className="bg-gradient-to-r from-[#002D62] to-[#0A4D92] rounded-3xl p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛕</span>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-amber-300">
                Canadian Hindu Temple Profile Available
              </p>
              <h3 className="font-outfit font-extrabold text-base text-white">
                View Daily 4-Kala Poojas, Darshan Hours &amp; Annual Thiruvizha
              </h3>
            </div>
          </div>
          <Link
            href={`/temples/${temple.slug}`}
            className="btn-primary rounded-xl px-5 py-2 text-xs font-black shrink-0 shadow"
          >
            Open Dedicated Temple Page →
          </Link>
        </div>
      )}

      {/* Main Profile Card */}
      <article className="bg-white rounded-[2.5rem] border border-[#CBD5E1] overflow-hidden shadow-card relative">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62]" />

        <div className="p-6 sm:p-10 space-y-6">
          {/* Top Badges */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black uppercase text-[10px] tracking-wider">
              {cat?.name}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1] font-bold">
              🍁 {biz.city}, {biz.province}
            </span>
            {biz.verified && (
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                ✓ Verified Business
              </span>
            )}
            {biz.featured && (
              <span className="px-3 py-1 rounded-full bg-[#E00624] text-white font-black text-[10px] uppercase tracking-wider">
                ★ Featured Canadian Business
              </span>
            )}
            {stats.count > 0 && (
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-bold">
                ★ {stats.average} ({stats.count} reviews)
              </span>
            )}
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
              {biz.name}
            </h1>
            {biz.tamilName && (
              <p className="tamil text-[#E00624] font-bold text-xl sm:text-2xl mt-1">
                {biz.tamilName}
              </p>
            )}
          </div>

          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-3xl">
            {biz.description}
          </p>

          {/* Meta Grid */}
          <dl className="grid sm:grid-cols-2 gap-4 bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-6 text-xs sm:text-sm">
            {biz.address && (
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-[#64748B] font-extrabold">Address</dt>
                <dd className="font-semibold text-[#0F172A] mt-0.5">{biz.address}</dd>
              </div>
            )}
            {biz.phone && (
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-[#64748B] font-extrabold">Telephone</dt>
                <dd className="font-semibold text-[#0F172A] mt-0.5">{biz.phone}</dd>
              </div>
            )}
            {biz.hours && (
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-[#64748B] font-extrabold">Operating Hours</dt>
                <dd className="font-semibold text-[#0F172A] mt-0.5">{biz.hours}</dd>
              </div>
            )}
            {biz.website && (
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-[#64748B] font-extrabold">Website</dt>
                <dd className="mt-0.5">
                  <a
                    href={biz.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#002D62] font-bold hover:text-[#E00624] underline break-all"
                  >
                    {biz.website}
                  </a>
                </dd>
              </div>
            )}
            {biz.email && (
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-[#64748B] font-extrabold">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${biz.email}`} className="text-[#002D62] font-bold hover:text-[#E00624]">
                    {biz.email}
                  </a>
                </dd>
              </div>
            )}
          </dl>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {biz.phone && (
              <a
                href={telLink(biz.phone)}
                className="btn-primary rounded-2xl px-6 py-3.5 text-xs font-black shadow flex items-center gap-2"
              >
                <span>📞</span>
                <span>Call Now ({biz.phone})</span>
              </a>
            )}
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-5 py-3.5 text-xs font-black bg-[#25D366] text-white hover:bg-[#1EBE5D] flex items-center gap-2 shadow transition"
              >
                <i className="fa-brands fa-whatsapp text-base" />
                <span>WhatsApp</span>
              </a>
            )}
            {(biz.address || biz.name) && (
              <a
                href={mapsLink(biz.address, biz.name)}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-5 py-3.5 text-xs font-bold border-2 border-[#002D62] text-[#002D62] hover:bg-[#F0F7FF] flex items-center gap-1.5 transition"
              >
                <span>🗺️</span>
                <span>Directions on Google Maps</span>
              </a>
            )}
            {!biz.claimed && (
              <Link
                href={`/claim/${biz.slug}`}
                className="rounded-2xl px-5 py-3.5 text-xs font-bold border border-[#CBD5E1] bg-[#F8FAFC] text-[#475569] hover:border-[#002D62] hover:text-[#002D62] transition ml-auto"
              >
                Claim This Listing Free →
              </Link>
            )}
          </div>
        </div>
      </article>

      <AdSlot label="Directory Sponsorship Placement" />

      {QUOTE_CATEGORIES.has(biz.category) && (
        <section className="bg-white rounded-[2rem] border border-[#CBD5E1] p-6 sm:p-8 space-y-3">
          <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">Request a quote</h2>
          <p className="text-xs text-[#64748B]">
            Families fill this in. After you buy quote leads, we send you the enquiry. $15–$35 per
            lead — listing stays free.
          </p>
          <LeadForm kind="quote" slug={biz.slug} business={biz.name} cta="Send my quote request" />
        </section>
      )}

      {/* Reviews Section */}
      <section className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-outfit font-extrabold text-2xl text-[#0F172A]">
            Customer Reviews {stats.count ? `· ★ ${stats.average}/5` : ""}
          </h2>
          <span className="text-xs text-[#64748B]">{stats.count} Verified Community Reviews</span>
        </div>

        {reviews.length === 0 ? (
          <div className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-6 text-center text-xs text-[#64748B]">
            No reviews yet. Share your experience to help Canadian Tamil families find trusted services!
          </div>
        ) : (
          <ul className="space-y-4">
            {reviews.map((r) => (
              <li key={r.id} className="bg-[#F8FAFC] rounded-2xl border border-[#CBD5E1] p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold text-[#0F172A]">{r.name}</p>
                  <span className="text-amber-500 text-xs font-bold">
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                  </span>
                </div>
                <p className="text-xs text-[#475569]">{r.comment}</p>
              </li>
            ))}
          </ul>
        )}
        <ReviewForm slug={slug} />
      </section>

      {/* Related Listings */}
      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">
            More Businesses in {biz.city} &amp; Related Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((b) => (
              <BusinessCard key={b.slug} biz={b} compact />
            ))}
          </div>
        </section>
      )}

      {/* SafeNet Creations Official Link Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center space-y-1 shadow-xs">
        <p className="text-xs text-[#64748B]">
          Website Architecture &amp; Local Business SEO designed by{" "}
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
