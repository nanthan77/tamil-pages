import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vendor dashboard temporarily unavailable",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14">
      <section className="rounded-[2.5rem] border border-[#CBD5E1] bg-white p-7 shadow-card sm:p-10">
        <p className="text-[11px] font-black uppercase tracking-wider text-[#E00624]">Security upgrade</p>
        <h1 className="mt-2 font-outfit text-3xl font-extrabold text-[#0F172A]">Vendor dashboard temporarily unavailable</h1>
        <p className="mt-3 text-sm leading-7 text-[#475569]">
          The legacy local-session dashboard has been disabled. It will return only after owner authentication, persistent storage and authorization have been verified on the deployed site.
        </p>
        <Link href="/directory" className="btn-navy mt-6 inline-flex min-h-12 items-center rounded-xl px-5 py-3 text-sm font-black">
          Browse the directory
        </Link>
      </section>
    </main>
  );
}
