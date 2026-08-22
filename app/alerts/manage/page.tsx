import type { Metadata } from "next";
import Link from "next/link";
import AlertManagement from "@/components/alerts/AlertManagement";

export const metadata: Metadata = {
  title: "Manage or Unsubscribe from Tamil Canada Alerts",
  description: "Securely view or remove your TamilCanadianPages email alert preferences.",
  robots: { index: false, follow: false },
};

export default function ManageAlertsPage() {
  return (
    <main className="hero-grid min-h-[70vh] px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <Link href="/alerts" className="mb-4 inline-flex min-h-11 items-center text-sm font-bold text-[#002D62] hover:text-[#E00624]">
          ← Movie &amp; Weekend Alerts
        </Link>
        <AlertManagement />
      </div>
    </main>
  );
}
