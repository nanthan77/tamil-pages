import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TamilCanadianPages handles alert preferences, account data and analytics.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "August 22, 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-bold text-[#002D62] hover:text-[#E00624]">← TamilCanadianPages</Link>
      <article className="mt-4 rounded-[2rem] border border-[#CBD5E1] bg-white p-6 shadow-card sm:p-10">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#E00624]">Privacy</p>
        <h1 className="mt-2 font-outfit text-3xl font-extrabold text-[#0F172A] sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[#64748B]">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 space-y-8 text-sm leading-7 text-[#475569]">
          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Our approach</h2>
            <p className="mt-2">
              TamilCanadianPages is a Canadian Tamil community directory. For the Movie &amp; Weekend Alerts MVP, we collect only the information needed to confirm and personalize the email alerts you request. Publicly listed business contact details are not treated as newsletter or alert consent.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Information used for alerts</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Your confirmed email address.</li>
              <li>Your selected city, topics, language and email frequency.</li>
              <li>Your consent wording and version, confirmation status and relevant timestamps.</li>
              <li>Technical authentication and security information processed by Firebase to send and validate the passwordless email link.</li>
            </ul>
            <p className="mt-3">The current MVP does not request WhatsApp consent, browser-notification permission, phone numbers or passwords.</p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">How we use the information</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>To verify that you control the submitted email address.</li>
              <li>To prepare and, when the pilot begins, deliver the city and topic alerts you selected.</li>
              <li>To maintain consent, unsubscribe and security records.</li>
              <li>To prevent abuse and troubleshoot delivery problems.</li>
            </ul>
            <p className="mt-3">We do not sell alert subscriber information or use directory contact exports as an alert audience.</p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Firebase and service processing</h2>
            <p className="mt-2">
              Firebase Authentication sends the passwordless confirmation link, and Cloud Firestore stores the confirmed private preference document. These services may process data in locations outside your province or country under their service safeguards.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Analytics</h2>
            <p className="mt-2">
              We may measure aggregate actions such as viewing the signup page, selecting a topic, sending a confirmation link and completing confirmation. Names, email addresses and phone numbers are not sent to Analytics.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Retention and your choices</h2>
            <p className="mt-2">
              A confirmation draft is stored in your browser and is accepted for no more than 24 hours. It is removed after confirmation, a failed send, when you choose a different email, or when expiry is detected. Confirmed preferences are retained while your alerts are active and as reasonably required for consent, security and legal records. Every commercial alert email should provide a working unsubscribe method.
            </p>
            <p className="mt-3">
              You can use the secure <Link href="/alerts/manage" className="font-bold text-[#002D62] underline underline-offset-2">Manage or unsubscribe</Link> page to view or remove the active preference document after confirming control of the email address. You may also request access, correction or deletion through the official contact option shown in the website footer. We may need to confirm your identity before acting on a private-data request.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Security and changes</h2>
            <p className="mt-2">
              The alert flow is designed to use passwordless email confirmation and authenticated, owner-scoped data access. No online system can promise absolute security. If this notice changes materially, the updated date and wording will be published here.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-[#E2E8F0] pt-6">
          <Link href="/alerts" className="btn-primary inline-flex min-h-11 items-center rounded-xl px-5 py-2.5 text-sm font-black">Choose alert preferences</Link>
          <Link href="/alerts/manage" className="inline-flex min-h-11 items-center rounded-xl border border-[#002D62] px-5 py-2.5 text-sm font-black text-[#002D62]">Manage or unsubscribe</Link>
          <Link href="/terms" className="inline-flex min-h-11 items-center rounded-xl border border-[#002D62] px-5 py-2.5 text-sm font-black text-[#002D62]">Read the Terms</Link>
        </div>
      </article>
    </main>
  );
}
