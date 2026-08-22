import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business submissions temporarily paused",
  robots: { index: false, follow: false },
};

export default function AddBusinessPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-10 space-y-6 shadow-card relative overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

        <div className="space-y-1 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-black uppercase tracking-wider">
            <span>🔒</span> Security upgrade in progress
          </div>
          <h1 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-2">
            Business submissions are temporarily paused
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The previous form depended on a server route that is not available on static Hosting. It has been disabled so the site does not claim to save a submission that cannot be persisted.
          </p>
        </div>

        <div className="rounded-2xl border border-[#CCE3F8] bg-[#F0F7FF] p-5 text-sm leading-6 text-[#334155]">
          A new authenticated submission and moderation workflow is being prepared. Existing directory entries remain available to browse.
        </div>
        <Link href="/directory" className="btn-navy inline-flex min-h-12 items-center rounded-xl px-5 py-3 text-sm font-black">
          Browse the directory
        </Link>
      </div>
    </main>
  );
}
