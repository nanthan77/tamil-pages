import LeadForm from "@/components/LeadForm";
import type { LeadKind } from "@/lib/types";

export default function SellPage({
  kicker,
  title,
  price,
  body,
  kind,
  cta,
  points,
}: {
  kicker: string;
  title: string;
  price: string;
  body: string;
  kind: LeadKind;
  cta: string;
  points: string[];
}) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-3">
        <p className="text-[11px] font-black uppercase tracking-widest text-[#E00624]">{kicker}</p>
        <h1 className="font-outfit font-extrabold text-3xl text-[#0F172A]">{title}</h1>
        <p className="font-outfit font-black text-3xl text-[#002D62]">{price}</p>
        <p className="text-sm text-[#64748B] leading-relaxed">{body}</p>
      </div>
      <ul className="bg-white rounded-3xl border border-[#CBD5E1] p-6 space-y-2 text-sm">
        {points.map((p) => (
          <li key={p}>✓ {p}</li>
        ))}
      </ul>
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 space-y-3">
        <h2 className="font-outfit font-extrabold text-lg">Request this paid product</h2>
        <p className="text-xs text-[#64748B]">We send a quote. Listing stays free. This add-on is paid.</p>
        <LeadForm kind={kind} cta={cta} />
      </div>
    </main>
  );
}
