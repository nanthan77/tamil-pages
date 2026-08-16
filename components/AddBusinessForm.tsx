"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CATEGORIES } from "@/lib/categories";
import { CITIES, PROVINCES } from "@/lib/cities";

export default function AddBusinessForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/businesses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form.entries())),
    });
    const data = await res.json();
    setPending(false);
    if (!res.ok) {
      setError(data.error || "Could not publish listing");
      return;
    }
    router.push(`/directory/${data.slug}`);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
      <label className="sm:col-span-2 space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Business Name *
        </span>
        <input
          name="name"
          required
          placeholder="e.g. Ceylon Spices & Takeout"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white"
        />
      </label>

      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Tamil Name (Optional)
        </span>
        <input
          name="tamilName"
          placeholder="e.g. சிலோன் ஸ்பைசஸ்"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm tamil outline-none focus:bg-white"
        />
      </label>

      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Category *
        </span>
        <select
          name="category"
          required
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white cursor-pointer"
        >
          {CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Canadian City *
        </span>
        <input
          name="city"
          required
          list="city-list"
          placeholder="e.g. Scarborough, Toronto, Vancouver…"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white"
        />
        <datalist id="city-list">
          {CITIES.map((c) => (
            <option key={c.slug} value={c.name} />
          ))}
        </datalist>
      </label>

      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Province *
        </span>
        <select
          name="province"
          defaultValue="ON"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white cursor-pointer"
        >
          {PROVINCES.map((p) => (
            <option key={p.code} value={p.code}>
              {p.name} ({p.code})
            </option>
          ))}
        </select>
      </label>

      <label className="sm:col-span-2 space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Hours (helps Google)
        </span>
        <input
          name="hours"
          placeholder="Mon–Sat 11am–10pm"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm"
        />
      </label>
      <label className="sm:col-span-2 space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Street Address
        </span>
        <input
          name="address"
          placeholder="e.g. 1234 Markham Rd, Scarborough, ON M1X 1E2"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white"
        />
      </label>

      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Telephone Phone Number *
        </span>
        <input
          name="phone"
          required
          placeholder="e.g. +1 416-555-0199"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white"
        />
      </label>

      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          WhatsApp Number
        </span>
        <input
          name="whatsapp"
          placeholder="e.g. +1 416-555-0199"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white"
        />
      </label>

      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Website URL
        </span>
        <input
          name="website"
          placeholder="https://mybusiness.ca"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white"
        />
      </label>

      <label className="space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Email Address
        </span>
        <input
          name="email"
          type="email"
          placeholder="contact@mybusiness.ca"
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white"
        />
      </label>

      <label className="sm:col-span-2 space-y-1">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
          Description &amp; Services Offered *
        </span>
        <textarea
          name="description"
          required
          rows={4}
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm outline-none focus:bg-white"
          placeholder="Describe your dishes, services, opening hours, parking, or specialities for the Canadian Tamil community…"
        />
      </label>

      {error && (
        <div className="sm:col-span-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E00624] font-bold">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="sm:col-span-2 btn-primary rounded-2xl py-3.5 text-sm font-black shadow-md cursor-pointer"
      >
        {pending ? "Publishing to Canada Directory…" : "🍁 Publish Free Business Listing"}
      </button>
    </form>
  );
}
