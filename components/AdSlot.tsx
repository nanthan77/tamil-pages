import Link from "next/link";

export default function AdSlot({
  label = "Sponsored",
}: {
  label?: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-[#002D62]/30 bg-[#F0F7FF] px-4 py-5 text-center">
      <p className="text-[10px] font-black uppercase tracking-widest text-[#002D62]">{label}</p>
      <p className="font-outfit font-extrabold text-[#0F172A] mt-1">Advertise here — paid</p>
      <p className="text-xs text-[#64748B] mt-1">
        Listings are free. This spot is a paid ad, from $149/mo.
      </p>
      <Link href="/advertise" className="inline-block mt-3 text-xs font-black text-[#E00624] hover:underline">
        Buy this ad spot →
      </Link>
    </div>
  );
}
