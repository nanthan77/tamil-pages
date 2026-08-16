import Link from "next/link";
import { notFound } from "next/navigation";
import ClaimButton from "@/components/ClaimButton";
import LeadForm from "@/components/LeadForm";
import { getSessionUser } from "@/lib/auth";
import { getBusiness } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function ClaimPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const biz = getBusiness(slug);
  if (!biz) notFound();
  const user = await getSessionUser();

  return (
    <main className="max-w-xl mx-auto px-4 py-12 space-y-6">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-8 space-y-5 shadow-card relative overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider">
          <span>🍁</span> Verified Owner Verification
        </div>

        <h1 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
          Claim {biz.name}
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
          Confirm that you own this business to edit contact information, update opening hours, and respond to direct inquiries.
        </p>

        {biz.claimed && biz.ownerId && biz.ownerId !== user?.id ? (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
            This listing is already claimed. If you believe this is an error, please contact support.
          </div>
        ) : user ? (
          <ClaimButton slug={slug} />
        ) : (
          <div className="space-y-3 pt-2">
            <Link href="/register" className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-xs font-black shadow">
              Create a free account to claim →
            </Link>
            <p className="text-xs text-[#64748B]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#002D62] font-black hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        )}

        <div className="border-t border-[#E2E8F0] pt-6 space-y-3">
          <h2 className="font-outfit font-extrabold text-base text-[#0F172A]">Need Assistance Claiming?</h2>
          <LeadForm kind="claim" slug={slug} business={biz.name} cta="Request Verification Support" />
        </div>
      </div>
    </main>
  );
}
