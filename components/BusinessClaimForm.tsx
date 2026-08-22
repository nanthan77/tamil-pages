"use client";

import { useState } from "react";
import Link from "next/link";

interface BusinessClaimFormProps {
  slug: string;
  businessName: string;
  city: string;
  category: string;
  existingPhone?: string;
  existingEmail?: string;
}

export default function BusinessClaimForm({
  slug,
  businessName,
  city,
  category,
  existingPhone,
  existingEmail,
}: BusinessClaimFormProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState(existingPhone || "");
  const [email, setEmail] = useState(existingEmail || "");
  const [role, setRole] = useState("Owner / Founder");
  const [notes, setNotes] = useState("");
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name or name with initial.");
      return;
    }
    if (!whatsapp.trim()) {
      setError("Please enter your WhatsApp mobile number.");
      return;
    }

    setPending(true);
    setError("");

    try {
      // 1. Submit lead/claim record
      const payload = {
        kind: "claim",
        slug,
        business: businessName,
        name: name.trim(),
        phone: whatsapp.trim(),
        whatsapp: whatsapp.trim(),
        email: email.trim(),
        role,
        message: `Claim for ${businessName} (${category}, ${city}) - Role: ${role}. Notes: ${notes}`,
      };

      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      // 2. Mark locally as claimed
      try {
        const key = `tp_claim_${slug}`;
        localStorage.setItem(key, JSON.stringify({ name, whatsapp, email, date: new Date().toISOString() }));
      } catch {}

      setSubmitted(true);
    } catch {
      setError("An error occurred while submitting. Please try again or WhatsApp support.");
    } finally {
      setPending(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#F0FDF4] border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 space-y-4 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">
          ✓
        </div>
        <div className="space-y-1">
          <span className="inline-block px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-xs font-black uppercase tracking-wider">
            Claim Request Received
          </span>
          <h2 className="font-outfit font-black text-2xl text-emerald-950">
            நன்றி, {name}!
          </h2>
          <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            We have received your verification request to claim <strong>{businessName}</strong>.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-emerald-200 text-left text-xs space-y-2 max-w-md mx-auto shadow-xs">
          <div className="flex justify-between border-b border-slate-100 pb-1.5">
            <span className="text-slate-500 font-bold">Claimant Name:</span>
            <span className="font-extrabold text-slate-800">{name}</span>
          </div>
          <div className="flex justify-between border-b border-slate-100 pb-1.5">
            <span className="text-slate-500 font-bold">WhatsApp Number:</span>
            <span className="font-extrabold text-emerald-700">💬 {whatsapp}</span>
          </div>
          {email && (
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-500 font-bold">Email:</span>
              <span className="font-extrabold text-slate-800">{email}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-slate-500 font-bold">Status:</span>
            <span className="font-extrabold text-amber-600">⏳ Verification in Progress</span>
          </div>
        </div>

        <p className="text-[11px] text-emerald-700">
          Our Canadian Tamil community manager will send your admin claim approval directly to your WhatsApp.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={`/directory/${slug}`}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-black shadow transition"
          >
            ← Back to Business Profile
          </Link>
          <a
            href={`https://wa.me/14162982228?text=${encodeURIComponent(`Hi TamilCanadianPages, I just claimed ${businessName} (${slug}). Please verify my listing.`)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-black flex items-center justify-center gap-1.5 shadow transition"
          >
            <span>💬</span>
            <span>Fast-Track on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 1. Single Name Box (Full Name or with Initial) */}
      <div className="space-y-1.5">
        <label className="block text-xs font-black text-[#002D62] uppercase tracking-wider">
          Full Name / பெயர் <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Siva Kumar or S. Kumar / முழு பெயர்"
            className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-[#002D62] transition shadow-xs"
          />
        </div>
        <p className="text-[11px] text-slate-500 font-medium">
          Enter your full name or name with initial as the owner or manager.
        </p>
      </div>

      {/* 2. WhatsApp Mobile Number */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
            <span>WhatsApp Mobile Number / வாட்ஸ்அப் எண்</span>
            <span className="text-red-500">*</span>
          </label>
          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            💬 WhatsApp
          </span>
        </div>
        <input
          type="tel"
          required
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="e.g. +1 416-555-0199 or 4165550199"
          className="w-full rounded-2xl border-2 border-emerald-300 bg-emerald-50/30 hover:bg-white focus:bg-white px-4 py-3 text-sm font-bold text-slate-900 outline-none focus:border-[#25D366] transition shadow-xs"
        />
        <p className="text-[11px] text-emerald-800 font-medium leading-normal">
          💡 We send your verified badge confirmation, customer reviews &amp; quote inquiries directly to this WhatsApp.
        </p>
      </div>

      {/* 3. Business / Owner Email */}
      <div className="space-y-1.5">
        <label className="block text-xs font-black text-[#002D62] uppercase tracking-wider">
          Owner / Business Email <span className="text-slate-400 font-normal">(Recommended)</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. owner@restaurant.ca or name@gmail.com"
          className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-[#002D62] transition shadow-xs"
        />
      </div>

      {/* 4. Role Selection */}
      <div className="space-y-1.5">
        <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
          Your Position / Role:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            "Owner / Founder",
            "General Manager",
            "Family Partner",
          ].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`py-2 px-3 rounded-xl text-xs font-bold border transition cursor-pointer text-center ${
                role === r
                  ? "bg-[#002D62] text-white border-[#002D62] shadow-xs"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Additional Notes (Optional) */}
      <div className="space-y-1.5">
        <label className="block text-xs font-black text-slate-600 uppercase tracking-wider">
          Updates / Special Offers <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. Update our opening hours, website URL, or add 10% Tamil community discount…"
          className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white px-4 py-2.5 text-xs font-medium text-slate-800 outline-none focus:border-[#002D62] transition"
        />
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-[#E00624]">
          ⚠️ {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#002D62] via-[#0A4D92] to-[#002D62] hover:from-[#001F45] hover:to-[#001F45] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <span>{pending ? "Verifying..." : "✅ Claim & Verify My Listing Free"}</span>
      </button>

      <p className="text-center text-[11px] text-slate-500 font-medium">
        🔒 100% Free for Canadian Tamil Businesses. No credit card required.
      </p>
    </form>
  );
}
