import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import { CATEGORIES } from "@/lib/categories";
import { CITIES } from "@/lib/cities";
import { breadcrumbJsonLd, cityTitle, itemListJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { countByCategory, searchBusinesses } from "@/lib/store";

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const meta = CITIES.find((c) => c.slug === city);
  const name = meta?.name || city.replace(/-/g, " ");
  return {
    title: cityTitle(name, meta?.province),
    description: `Find Tamil restaurants, grocers, lawyers, clinics and temples in ${name}, Canada on ${SITE_NAME}. Free listings.`,
    alternates: { canonical: `/c/${city}` },
  };
}

export default async function CityPage({
  params,
  searchParams,
}: {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { city } = await params;
  const { page } = await searchParams;
  const meta = CITIES.find((c) => c.slug === city);
  const name = meta?.name || city.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  const list = searchBusinesses({ city: name });
  const catCounts = countByCategory();
  const catsHere = CATEGORIES.filter((c) => list.some((b) => b.category === c.slug));
  const pageSize = 24;
  const pages = Math.max(1, Math.ceil(list.length / pageSize));
  const safePage = Math.min(Math.max(1, Number(page || 1) || 1), pages);
  const slice = list.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: name, path: `/c/${city}` },
          ]),
          itemListJsonLd(`Tamil businesses in ${name}`, `/c/${city}`, slice),
        ]}
      />
      <div className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
        <Link href="/" className="text-[#002D62] hover:text-[#E00624]">
          🇨🇦 Home
        </Link>
        <span>/</span>
        <span className="text-[#0F172A]">{name}</span>
      </div>

      <div className="bg-gradient-to-r from-[#002D62] to-[#0A4D92] rounded-[2rem] p-6 sm:p-8 text-white shadow-card">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-black uppercase tracking-wider mb-2">
          <span>🍁</span> Canadian City Directory
        </div>
        <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white">
          Tamil Businesses in {name}
          {meta ? `, ${meta.province}` : ""}
        </h1>
        <p className="text-sm text-white/80 max-w-2xl mt-1">
          {list.length} verified listings for Tamil and South Asian families in {name}.{" "}
          {meta?.blurb}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {catsHere.map((c) => (
          <Link
            key={c.slug}
            href={`/c/${city}/${c.slug}`}
            className="px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-bold text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition"
          >
            {c.name} ({list.filter((b) => b.category === c.slug).length || catCounts[c.slug] || 0})
          </Link>
        ))}
      </div>
      <AdSlot label={`${name} sponsorship`} />
      <div className="grid md:grid-cols-2 gap-5">
        {slice.map((b) => (
          <BusinessCard key={b.slug} biz={b} />
        ))}
      </div>
      {pages > 1 && (
        <p className="text-sm text-center">
          {safePage > 1 && (
            <Link href={`/c/${city}?page=${safePage - 1}`} className="text-[#d80621] font-bold mr-4">
              ← Previous
            </Link>
          )}
          Page {safePage} / {pages}
          {safePage < pages && (
            <Link href={`/c/${city}?page=${safePage + 1}`} className="text-[#d80621] font-bold ml-4">
              Next →
            </Link>
          )}
        </p>
      )}
    </main>
  );
}
