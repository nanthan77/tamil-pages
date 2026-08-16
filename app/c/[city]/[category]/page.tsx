import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import { getCategory } from "@/lib/categories";
import { CITIES } from "@/lib/cities";
import { breadcrumbJsonLd, categoryTitle, itemListJsonLd } from "@/lib/seo";
import { cityCategoryPairs, searchBusinesses } from "@/lib/store";
import { citySlug } from "@/lib/utils";

export async function generateStaticParams() {
  return cityCategoryPairs().map((p) => ({
    city: citySlug(p.city),
    category: p.category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; category: string }>;
}) {
  const { city, category } = await params;
  const meta = CITIES.find((c) => c.slug === city);
  const name = meta?.name || city.replace(/-/g, " ");
  const cat = getCategory(category);
  return {
    title: categoryTitle(cat?.name || category, name),
    description: `Tamil ${cat?.name || "businesses"} in ${name}, Canada. Phone numbers, addresses, and reviews on tamilpages.ca.`,
    alternates: { canonical: `/c/${city}/${category}` },
  };
}

export default async function CityCategoryPage({
  params,
}: {
  params: Promise<{ city: string; category: string }>;
}) {
  const { city, category } = await params;
  const meta = CITIES.find((c) => c.slug === city);
  const name = meta?.name || city.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  const cat = getCategory(category);
  const list = searchBusinesses({ city: name, category });
  const pageSize = 24;
  const slice = list.slice(0, pageSize);
  const pages = Math.max(1, Math.ceil(list.length / pageSize));

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name, path: `/c/${city}` },
            { name: cat?.name || category, path: `/c/${city}/${category}` },
          ]),
          itemListJsonLd(`${cat?.name} in ${name}`, `/c/${city}/${category}`, slice),
        ]}
      />
      <div className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
        <Link href="/" className="text-[#002D62] hover:text-[#E00624]">
          🇨🇦 Home
        </Link>
        <span>/</span>
        <Link href={`/c/${city}`} className="text-[#002D62] hover:text-[#E00624]">
          {name}
        </Link>
        <span>/</span>
        <span className="text-[#0F172A]">{cat?.name}</span>
      </div>

      <div className="bg-gradient-to-r from-[#002D62] to-[#0A4D92] rounded-[2rem] p-6 sm:p-8 text-white shadow-card">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-black uppercase tracking-wider mb-2">
          <span>🍁</span> {name}, {meta?.province || "Canada"}
        </div>
        <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white">
          {cat?.name || "Listings"} in {name}
        </h1>
        <p className="text-sm text-white/80 max-w-2xl mt-1">
          {list.length} verified Tamil &amp; South Asian {cat?.name?.toLowerCase()} listings in {name}.
        </p>
      </div>

      <AdSlot label={`Top of ${name} ${cat?.name}`} />
      <div className="grid md:grid-cols-2 gap-5">
        {slice.map((b) => (
          <BusinessCard key={b.slug} biz={b} />
        ))}
      </div>
      {pages > 1 && (
        <div className="text-center pt-4">
          <Link
            href={`/directory?city=${name}&category=${category}`}
            className="btn-navy rounded-xl px-5 py-2.5 text-xs font-bold inline-block"
          >
            View all {list.length} listings in Directory →
          </Link>
        </div>
      )}
    </main>
  );
}
