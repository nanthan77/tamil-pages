import AdSlot from "@/components/AdSlot";
import LeadForm from "@/components/LeadForm";
import { AD_RATES } from "@/lib/site";

export const metadata = {
  title: "Advertise — paid placements",
  description:
    "Paid ads on tamilcanadianpages.ca: search strips, city sponsors, and category spotlights. Listings are free. Advertising is paid.",
};

export default function AdvertisePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider">
          <span>🍁</span> Paid advertising
        </div>
        <h1 className="font-outfit font-extrabold text-3xl text-[#0F172A]">
          Advertise on tamilcanadianpages.ca
        </h1>
        <p className="text-[#64748B] text-sm leading-relaxed">
          A basic listing is free. Ads are not. Buy the top of a city or category page — same
          model as Yellow Pages.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {AD_RATES.map((rate) => (
          <div key={rate.name} className="bg-white rounded-2xl border border-[#CBD5E1] p-4">
            <p className="text-xs font-bold text-[#64748B]">{rate.name}</p>
            <p className="font-outfit font-black text-2xl text-[#E00624] mt-1">{rate.price}</p>
            <p className="text-xs text-[#64748B] mt-1">{rate.note}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <AdSlot label="Search results" />
        <AdSlot label="City page" />
      </div>

      <div id="exclusive" className="bg-white rounded-3xl border border-[#CBD5E1] p-6 space-y-3">
        <h2 className="font-outfit font-extrabold text-lg">City + category exclusive — $399/mo</h2>
        <p className="text-sm text-[#64748B]">
          Only one Spotlight dentist in Markham, or one immigration lawyer in Scarborough.
          Scarcity is how Yellow Pages sold the most expensive pages.
        </p>
        <LeadForm kind="exclusive" cta="Ask for exclusive in my city" />
      </div>

      <div id="newsletter" className="bg-white rounded-3xl border border-[#CBD5E1] p-6 space-y-3">
        <h2 className="font-outfit font-extrabold text-lg">Email / WhatsApp blast — $199 / send</h2>
        <p className="text-sm text-[#64748B]">
          One sponsored note to families who opted in. Sell this to grocers, concert promoters,
          and wedding halls.
        </p>
        <LeadForm kind="newsletter" cta="Book a paid blast" />
      </div>

      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-4 shadow-card">
        <h2 className="font-outfit font-extrabold text-lg text-[#0F172A]">Book a paid ad</h2>
        <p className="text-sm text-[#64748B]">Tell us the city or category. We send a paid quote.</p>
        <LeadForm kind="advertise" cta="Request a paid ad quote" />
      </div>
    </main>
  );
}
