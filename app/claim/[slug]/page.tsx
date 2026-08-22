import { notFound } from "next/navigation";
import BusinessClaimForm from "@/components/BusinessClaimForm";
import { getAllBusinesses, getBusiness } from "@/lib/store";

export async function generateStaticParams() {
  return getAllBusinesses().map((b) => ({ slug: b.slug }));
}

export default async function ClaimPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const biz = getBusiness(slug);
  if (!biz) notFound();

  return (
    <main className="max-w-xl mx-auto px-4 py-10 sm:py-14 space-y-6">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-7 sm:p-9 space-y-6 shadow-card relative overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-[#E00624] via-[#002D62] to-[#25D366] absolute top-0 left-0 right-0" />

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider">
            <span>🍁</span> Free Business Verification &amp; Claim
          </div>

          <h1 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
            Claim {biz.name}
          </h1>
          {biz.tamilName && (
            <p className="tamil text-sm font-bold text-[#E00624]">
              {biz.tamilName}
            </p>
          )}
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Verify ownership of <strong>{biz.name}</strong> ({biz.city}, {biz.province}) to manage your official profile, update opening hours, receive customer inquiries directly on WhatsApp, and earn the Verified Badge.
          </p>
        </div>

        {/* 1-Step High Converting Claim Form */}
        <div className="border-t border-[#E2E8F0] pt-6">
          <BusinessClaimForm
            slug={slug}
            businessName={biz.name}
            city={biz.city}
            category={biz.category}
            existingPhone={biz.phone}
            existingEmail={biz.email}
          />
        </div>
      </div>
    </main>
  );
}
