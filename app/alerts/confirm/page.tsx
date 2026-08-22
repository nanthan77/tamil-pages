import type { Metadata } from "next";
import EmailLinkConfirmation from "@/components/alerts/EmailLinkConfirmation";

export const metadata: Metadata = {
  title: "Confirm Tamil Canada Alerts",
  description: "Securely confirm your TamilCanadianPages email alert preferences.",
  robots: { index: false, follow: false },
};

export default function AlertConfirmationPage() {
  return (
    <main className="hero-grid flex min-h-[70vh] items-center px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <EmailLinkConfirmation />
      </div>
    </main>
  );
}
