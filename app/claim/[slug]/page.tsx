import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBusinesses, getBusiness } from "@/lib/store";

export const metadata: Metadata = {
  title: "Listing claims temporarily paused",
  robots: { index: false, follow: false },
};

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

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <img src="/logo-dark.png" alt="tamilcanadianpages.ca" width="240" height="40" className="h-8 object-contain" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider">
            <span>🔒</span> Secure workflow in progress
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
            Claim requests are temporarily paused
          </h1>
          {biz.tamilName && (
            <p className="tamil text-sm font-bold text-[#E00624]">
              {biz.tamilName}
            </p>
          )}
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The previous claim form for <strong>{biz.name}</strong> ({biz.city}, {biz.province}) depended on a server route that is not available on static Hosting. It has been disabled so ownership details are not submitted into a non-persistent workflow.
          </p>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6">
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            A Firebase-authenticated owner verification and moderation flow is being prepared.
          </p>
          <Link href={`/directory/${slug}`} className="btn-navy mt-4 inline-flex min-h-12 items-center rounded-xl px-5 py-3 text-sm font-black">
            Return to this listing
          </Link>
        </div>
      </div>
    </main>
  );
}
