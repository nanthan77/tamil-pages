import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { ANNUAL_DISCOUNT, displayPrice, listingFreeUntilLabel, MONEY_PRODUCTS, PLANS } from "@/lib/site";

export const metadata = {
  title: "Pricing — listings free, ads paid",
  description:
    "Post a basic Tamil business listing in Canada free for the first year. Featured, Spotlight, and advertising are paid placements.",
};

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider">
          <span>🍁</span> Listings free · Ads paid
        </div>
        <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
          Your listing is free. Advertising is not.
        </h1>
        <p className="text-[#64748B] text-sm leading-relaxed">
          A basic listing is <strong className="text-[#002D62]">free until {listingFreeUntilLabel()}</strong>.
          Featured, Spotlight, and ads are paid — the same way Yellow Pages works.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {PLANS.map((plan) => {
          const price = displayPrice(plan);
          return (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl border p-6 space-y-4 shadow-sm ${
                plan.popular ? "border-[#002D62] shadow-card ring-2 ring-[#002D62]/10" : "border-[#CBD5E1]"
              }`}
            >
              {plan.popular && (
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#E00624] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                  ★ Paid upgrade
                </span>
              )}
              <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">{plan.name}</h2>
              <p className="text-xs text-[#64748B]">{plan.blurb}</p>
              <p className="font-outfit font-black text-3xl text-[#002D62]">{price.now}</p>
              <p className="text-[11px] text-[#64748B]">{price.after}</p>
              <ul className="space-y-2 text-sm text-[#0F172A]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs font-semibold">
                    <span className="text-[#002D62]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.id === "basic" ? "/add-business" : plan.id === "featured" ? "#buy-featured" : "/advertise"}
                className="btn-primary inline-flex w-full justify-center rounded-2xl py-2.5 text-sm font-bold shadow cursor-pointer"
              >
                {plan.id === "basic" ? "List free now" : "Buy this placement"}
              </Link>
            </div>
          );
        })}
      </div>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 space-y-2 shadow-xs">
          <h2 className="font-outfit font-extrabold text-lg text-[#0F172A]">What is free</h2>
          <ul className="text-xs sm:text-sm text-[#64748B] space-y-2 leading-relaxed">
            <li><strong className="text-[#0F172A]">Basic listing</strong> — name, phone, address, city, category.</li>
            <li><strong className="text-[#0F172A]">Claim your shop</strong> and collect reviews.</li>
            <li>Free until {listingFreeUntilLabel()}.</li>
          </ul>
        </div>
        <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 space-y-2 shadow-xs">
          <h2 className="font-outfit font-extrabold text-lg text-[#0F172A]">What you pay for</h2>
          <ul className="text-xs sm:text-sm text-[#64748B] space-y-2 leading-relaxed">
            <li><strong className="text-[#0F172A]">Featured — $29/mo</strong> badge and higher rank.</li>
            <li><strong className="text-[#0F172A]">Spotlight — $79/mo</strong> top of a city or category.</li>
            <li><strong className="text-[#0F172A]">Display ads</strong> from $149/mo — see Advertise.</li>
            <li>{ANNUAL_DISCOUNT}</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-outfit font-extrabold text-2xl text-[#0F172A]">More paid products</h2>
        <p className="text-sm text-[#64748B]">This is how directories actually grow revenue after the free list is full.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MONEY_PRODUCTS.map((p) => (
            <Link key={p.id} href={p.href} className="bg-white rounded-2xl border border-[#CBD5E1] p-4 hover:border-[#E00624]">
              <p className="font-outfit font-extrabold text-[#0F172A] text-sm">{p.name}</p>
              <p className="text-[#E00624] font-black mt-1">{p.price}</p>
              <p className="text-[11px] text-[#64748B] mt-2 leading-relaxed">{p.why}</p>
            </Link>
          ))}
        </div>
        <Link href="/for-business" className="text-sm font-bold text-[#002D62]">
          Full owner menu →
        </Link>
      </section>

      <section id="buy-featured" className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-4 shadow-card">
        <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">
          Buy Featured or Spotlight
        </h2>
        <p className="text-sm text-[#64748B]">
          Paid placement only. We will email you the invoice before your ad goes live.
        </p>
        <LeadForm kind="featured" cta="Request paid Featured placement" />
      </section>

      <section id="quote-leads" className="bg-[#002D62] text-white rounded-3xl p-6 sm:p-8 space-y-3">
        <h2 className="font-outfit font-extrabold text-xl">Quote leads — $15 to $35 each</h2>
        <p className="text-sm text-white/80">
          Lawyers, immigration, real estate, insurance, and tutors do not want a monthly badge.
          They want a family who filled in “I need a quote.” We add a form on those profiles and
          charge per lead — the highest-margin product in local search.
        </p>
        <LeadForm kind="quote" cta="Turn on paid quote leads" />
      </section>
    </main>
  );
}
