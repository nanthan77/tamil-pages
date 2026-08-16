import Link from "next/link";
import { AD_RATES, MONEY_PRODUCTS, PLANS, displayPrice } from "@/lib/site";

export const metadata = {
  title: "For business owners — how we charge",
  description:
    "List free. Pay only if you want more calls: Featured, Boost, deals, jobs, wedding pack, and ads.",
};

export default function ForBusinessPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <div className="space-y-3">
        <p className="text-[11px] font-black uppercase tracking-widest text-[#E00624]">Sell more, not list more</p>
        <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
          Free to be found. Pay to be first.
        </h1>
        <p className="text-sm text-[#64748B] max-w-2xl leading-relaxed">
          Yellow Pages, Yelp, and Google all use the same rule: the directory is free so Google
          and families keep coming. Money is made when a shop pays to jump the queue, buy a
          lead, or own a category.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {PLANS.map((p) => {
          const price = displayPrice(p);
          return (
            <Link key={p.id} href="/pricing" className="bg-white rounded-2xl border border-[#CBD5E1] p-5 hover:border-[#002D62]">
              <p className="text-xs font-bold text-[#64748B]">{p.name}</p>
              <p className="font-outfit font-black text-2xl text-[#002D62] mt-1">{price.now}</p>
              <p className="text-xs text-[#64748B] mt-1">{price.after}</p>
            </Link>
          );
        })}
      </div>

      <section className="space-y-4">
        <h2 className="font-outfit font-extrabold text-xl">More ways this site makes money</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {MONEY_PRODUCTS.map((p) => (
            <Link key={p.id} href={p.href} className="bg-white rounded-2xl border border-[#CBD5E1] p-5 hover:border-[#E00624]">
              <div className="flex justify-between gap-3">
                <h3 className="font-outfit font-extrabold text-[#0F172A]">{p.name}</h3>
                <span className="text-sm font-black text-[#E00624] shrink-0">{p.price}</span>
              </div>
              <p className="text-xs text-[#64748B] mt-2 leading-relaxed">{p.why}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-outfit font-extrabold text-xl">Display ads</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {AD_RATES.map((r) => (
            <div key={r.name} className="rounded-2xl border border-[#CBD5E1] bg-white p-4">
              <p className="text-xs font-bold">{r.name}</p>
              <p className="font-black text-[#E00624]">{r.price}</p>
              <p className="text-[11px] text-[#64748B]">{r.note}</p>
            </div>
          ))}
        </div>
        <Link href="/advertise" className="text-sm font-bold text-[#E00624]">
          Book a paid ad →
        </Link>
      </section>
    </main>
  );
}
