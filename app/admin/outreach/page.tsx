import type { Metadata } from "next";
import Link from "next/link";
import AdminSecurityGuard from "@/components/AdminSecurityGuard";

export const metadata: Metadata = {
  title: "Outreach retired",
  robots: { index: false, follow: false },
};

export default function OutreachAdminPage() {
  return (
    <AdminSecurityGuard>
      <main className="min-h-[65vh] bg-[#F8FAFC] px-4 py-14">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-black uppercase tracking-wider text-[#E00624]">Privacy update</p>
          <h1 className="mt-2 font-outfit text-3xl font-extrabold text-slate-900">Bulk outreach has been retired</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Public directory contact details are not newsletter consent. Future messages will be limited to people who explicitly confirm My Tamil Canada Alerts.
          </p>
          <Link className="btn-navy mt-6 inline-flex rounded-xl px-5 py-3 text-sm font-black" href="/admin">
            View opted-in subscribers
          </Link>
        </div>
      </main>
    </AdminSecurityGuard>
  );
}
