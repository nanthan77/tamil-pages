import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vendor sign-in temporarily unavailable",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto px-4 py-14">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-8 space-y-5 shadow-card relative overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />
        
        <div className="text-center space-y-2 pt-2">
          <img src="/logo-dark.png" alt="tamilcanadianpages.ca" width="240" height="40" className="h-10 mx-auto object-contain" />
          <h1 className="font-outfit font-extrabold text-2xl text-[#0F172A]">Vendor sign-in is being upgraded</h1>
          <p className="text-xs leading-5 text-[#64748B]">The legacy account flow is disabled because its server session route is not available on static Hosting.</p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          No login details are collected here. A Firebase-authenticated owner workflow will replace this page.
        </div>

        <div className="border-t border-[#E2E8F0] pt-4 text-center">
          <p className="text-xs text-[#64748B]">
            Need to browse an existing listing?{" "}
            <Link href="/directory" className="text-[#002D62] font-black hover:text-[#E00624] transition">
              Open the directory →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
