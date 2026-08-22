import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import { CATEGORIES, getCategory } from "@/lib/categories";
import { breadcrumbJsonLd, categoryTitle, itemListJsonLd } from "@/lib/seo";
import { searchBusinesses } from "@/lib/store";
import { citySlug } from "@/lib/utils";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  return {
    title: categoryTitle(cat?.name || category),
    description: `Find Tamil ${cat?.name || "businesses"} across Canada — Toronto, Scarborough, Montreal, Vancouver and more.`,
    alternates: { canonical: `/category/${category}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  const list = searchBusinesses({ category });
  const cities = Array.from(new Set(list.map((b) => b.city))).slice(0, 16);
  const pageSize = 24;
  const slice = list.slice(0, pageSize);
  const pages = Math.max(1, Math.ceil(list.length / pageSize));

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: cat?.name || "Category", path: `/category/${category}` },
          ]),
          itemListJsonLd(cat?.name || "Listings", `/category/${category}`, slice),
        ]}
      />
      <div className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
        <Link href="/" className="text-[#002D62] hover:text-[#E00624]">
          🇨🇦 Home
        </Link>
        <span>/</span>
        <span className="text-[#0F172A]">{cat?.name || "Category"}</span>
      </div>

      <div className="bg-gradient-to-r from-[#002D62] to-[#0A4D92] rounded-[2rem] p-6 sm:p-8 text-white shadow-card">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-black uppercase tracking-wider mb-2">
          <span>🏷️</span> Canadian Service Category
        </div>
        <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white">
          {cat?.name || "Category"} in Canada
        </h1>
        <p className="text-sm text-white/80 max-w-2xl mt-1">
          {list.length} directory listings across Canadian cities. Confirm important details directly with the business.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <Link
            key={city}
            href={`/c/${citySlug(city)}/${category}`}
            className="px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-bold text-[#002D62] hover:border-[#E00624] hover:text-[#E00624] transition"
          >
            {city}
          </Link>
        ))}
      </div>
      <AdSlot />
      <div className="grid md:grid-cols-2 gap-5">
        {slice.map((b) => (
          <BusinessCard key={b.slug} biz={b} />
        ))}
      </div>
      {pages > 1 && (
        <div className="text-center pt-4">
          <Link
            href={`/directory?category=${category}`}
            className="btn-navy rounded-xl px-5 py-2.5 text-xs font-bold inline-block"
          >
            View all {list.length} listings in Directory →
          </Link>
        </div>
      )}
    </main>
  );
}
