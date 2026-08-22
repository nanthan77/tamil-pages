import type { LeadKind } from "@/lib/types";

const TAMILPAGES_WHATSAPP = "14162982228";

export default function LeadForm({
  kind,
  business,
  cta,
}: {
  kind: LeadKind;
  slug?: string;
  business?: string;
  cta: string;
}) {
  const subject = business ? `${cta} (${business})` : cta;
  const message = encodeURIComponent(
    `Hello TamilCanadianPages, I am interested in ${subject}. Please send the next steps and pricing. Reference: ${kind}.`,
  );

  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <p className="text-sm font-extrabold text-amber-950">Secure web requests are being upgraded.</p>
      <p className="mt-1 text-xs leading-5 text-amber-900">
        No details are collected on this page. Continue on WhatsApp to contact TamilCanadianPages directly.
      </p>
      <a
        href={`https://wa.me/${TAMILPAGES_WHATSAPP}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#128C4A] px-5 py-3 text-sm font-black text-white hover:bg-[#0E733C]"
      >
        Continue securely on WhatsApp
      </a>
    </div>
  );
}
