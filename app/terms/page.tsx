import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using TamilCanadianPages and its Movie & Weekend Alerts service.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "August 22, 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-bold text-[#002D62] hover:text-[#E00624]">← TamilCanadianPages</Link>
      <article className="mt-4 rounded-[2rem] border border-[#CBD5E1] bg-white p-6 shadow-card sm:p-10">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#E00624]">Terms</p>
        <h1 className="mt-2 font-outfit text-3xl font-extrabold text-[#0F172A] sm:text-4xl">Terms of Use</h1>
        <p className="mt-2 text-sm text-[#64748B]">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 space-y-8 text-sm leading-7 text-[#475569]">
          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Using the service</h2>
            <p className="mt-2">
              These terms apply to TamilCanadianPages and the Movie &amp; Weekend Alerts MVP. By requesting and confirming alerts, you confirm that you control the email address provided and are able to consent to receiving the selected messages.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Email alert consent</h2>
            <p className="mt-2">
              Alert signup is passwordless and email-only. Your preferences are stored only after you open the Firebase confirmation link. Automated delivery has not started in this preference-collection pilot. WhatsApp and browser notifications are not part of this consent. You may withdraw consent through the secure <Link href="/alerts/manage" className="font-bold text-[#002D62] underline underline-offset-2">Manage or unsubscribe</Link> page and, once sending begins, through the unsubscribe method included with each commercial alert email.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Information accuracy</h2>
            <p className="mt-2">
              We aim to use official theatre, venue, organizer or temple sources before sending alerts. Schedules, ticket availability, prices and event details can still change after verification. Always confirm time-sensitive information with the linked official source before travelling or purchasing.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Independent directory</h2>
            <p className="mt-2">
              TamilCanadianPages is an independent directory and information service. Unless clearly stated, it is not the theatre, ticket seller, event organizer, temple, business or professional shown in a listing. External purchases and services are governed by the provider’s own terms.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Acceptable use</h2>
            <p className="mt-2">You must not misuse the service, submit an address you do not control, interfere with confirmation or security systems, scrape private subscriber data, or use the site for unlawful activity.</p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Availability and changes</h2>
            <p className="mt-2">
              Features may be corrected, suspended or changed to protect users, improve reliability or comply with legal requirements. We may decline or stop alerts when an address cannot be confirmed, repeatedly bounces or appears connected to abuse.
            </p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Privacy</h2>
            <p className="mt-2">Our <Link href="/privacy" className="font-bold text-[#002D62] underline underline-offset-2">Privacy Policy</Link> explains what the alerts flow collects and how it is used.</p>
          </section>

          <section>
            <h2 className="font-outfit text-xl font-extrabold text-[#0F172A]">Contact and updates</h2>
            <p className="mt-2">
              Questions may be directed through the official contact option in the website footer. Updated terms will be posted on this page with a revised date.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-[#E2E8F0] pt-6">
          <Link href="/alerts" className="btn-primary inline-flex min-h-11 items-center rounded-xl px-5 py-2.5 text-sm font-black">Get Movie &amp; Weekend Alerts</Link>
          <Link href="/privacy" className="inline-flex min-h-11 items-center rounded-xl border border-[#002D62] px-5 py-2.5 text-sm font-black text-[#002D62]">Read the Privacy Policy</Link>
        </div>
      </article>
    </main>
  );
}
