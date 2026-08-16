"use client";

import { useState } from "react";
import type { LeadKind } from "@/lib/types";

export default function LeadForm({
  kind,
  slug,
  business,
  cta,
}: {
  kind: LeadKind;
  slug?: string;
  business?: string;
  cta: string;
}) {
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind,
        slug,
        business: business || form.get("business"),
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        message: form.get("message"),
      }),
    });
    const data = await res.json();
    setPending(false);
    if (!res.ok) {
      setError(data.error || "Could not send");
      return;
    }
    setOk(true);
  }

  if (ok) {
    return (
      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-sm font-bold text-emerald-800">
        ✓ Request received. This is a paid placement — we will email a quote for your {kind}{" "}
        spot.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">Your Name</span>
        <input name="name" required placeholder="Full Name" className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white" />
      </label>
      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">Email Address</span>
        <input name="email" type="email" required placeholder="name@domain.ca" className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white" />
      </label>
      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">Phone Number</span>
        <input name="phone" placeholder="+1 416-555-0199" className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white" />
      </label>
      {!business && (
        <label className="space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">Business Name</span>
          <input name="business" placeholder="Company Name" className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white" />
        </label>
      )}
      <label className="sm:col-span-2 space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">Notes / City / Target Audience</span>
        <textarea name="message" rows={3} placeholder="Tell us which city or category you want priority placement in…" className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white" />
      </label>
      {error && <div className="sm:col-span-2 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E00624] font-bold">{error}</div>}
      <button type="submit" disabled={pending} className="sm:col-span-2 btn-primary rounded-2xl py-3.5 text-sm font-black shadow-md cursor-pointer">
        {pending ? "Sending request…" : cta}
      </button>
    </form>
  );
}
