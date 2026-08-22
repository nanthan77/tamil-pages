import type { Metadata } from "next";
import Link from "next/link";
import AlertSignupForm from "@/components/alerts/AlertSignupForm";

export const metadata: Metadata = {
  title: "Tamil Movie & Weekend Alerts in Canada",
  description:
    "Choose your Canadian city and receive passwordless email alerts for source-checked Tamil movies, weekend events and temple festivals.",
  alternates: { canonical: "/alerts" },
};

const BENEFITS = [
  {
    icon: "🎬",
    title: "Movie changes that matter",
    text: "Source-linked Canadian release and schedule updates when the pilot begins.",
  },
  {
    icon: "📅",
    title: "A useful Friday plan",
    text: "A city-aware weekend digest instead of a generic newsletter.",
  },
  {
    icon: "✓",
    title: "Source-checked before sending",
    text: "Alerts should point back to an official theatre, venue, temple or organizer source.",
  },
] as const;

export default function AlertsPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <section className="hero-grid border-b border-[#CBD5E1]/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-16">
          <div className="self-start lg:col-span-5 lg:sticky lg:top-28">
            <Link href="/" className="inline-flex min-h-11 items-center text-sm font-bold text-[#002D62] hover:text-[#E00624]">
              ← TamilCanadianPages
            </Link>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#CCE3F8] bg-[#F0F7FF] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#002D62]">
              <span aria-hidden="true">🍁</span>
              My Tamil Canada Alerts
            </div>
            <h1 className="mt-5 font-outfit text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl">
              Get Tamil Movie &amp; Weekend Alerts
            </h1>
            <p className="tamil mt-4 text-lg font-semibold leading-8 text-[#B0041B]" lang="ta">
              உங்கள் நகரத்திற்கான தமிழ் திரைப்படம் மற்றும் வார இறுதி அறிவிப்புகள்.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#475569]">
              Choose your city and interests for the email-alert pilot. Preferences are stored only after you confirm a secure passwordless link.
            </p>

            <div className="mt-7 space-y-3">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xs">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0F7FF] text-lg text-[#002D62]" aria-hidden="true">
                    {benefit.icon}
                  </span>
                  <div>
                    <h2 className="text-sm font-extrabold text-[#0F172A]">{benefit.title}</h2>
                    <p className="mt-1 text-xs leading-5 text-[#64748B]">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-950">
              <strong className="block text-sm">A deliberately small first release</strong>
              This release collects confirmed preferences first; automated alert delivery has not started. Email is the only planned pilot channel. Browser notifications and WhatsApp require separate permission and are not silently included.
            </div>
            <Link href="/alerts/manage" className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-[#002D62] underline underline-offset-4 hover:text-[#E00624]">
              Already joined? Manage or unsubscribe
            </Link>
          </div>

          <div className="lg:col-span-7">
            <AlertSignupForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="how-it-works" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#E00624]">Private by design</p>
          <h2 id="how-it-works" className="mt-2 font-outfit text-3xl font-extrabold text-[#0F172A]">How confirmation works</h2>
          <p className="mt-3 text-sm leading-6 text-[#64748B]">No password is created and no unauthenticated subscription is written to Firestore.</p>
        </div>
        <ol className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            ["1", "Choose", "Select your city, topics, language and email frequency."],
            ["2", "Confirm", "Open the passwordless link Firebase sends to your email."],
            ["3", "Save", "Only then is your private preference document securely saved for the pilot."],
          ].map(([number, title, description]) => (
            <li key={number} className="rounded-3xl border border-[#CBD5E1] bg-white p-6 shadow-xs">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#002D62] font-outfit text-sm font-black text-white">{number}</span>
              <h3 className="mt-4 font-outfit text-lg font-extrabold text-[#0F172A]">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#64748B]">{description}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
