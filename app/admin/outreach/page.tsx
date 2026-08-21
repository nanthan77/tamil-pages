"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import seedData from "@/data/seed-businesses.json";

import type { Business } from "@/lib/types";

type OutreachRecord = {
  id: string;
  name: string;
  tamilName: string;
  category: string;
  city: string;
  province: string;
  phone: string;
  waPhone: string;
  slug: string;
  message: string;
  waLink: string;
};

function cleanPhone(p: string) {
  if (!p) return null;
  const digits = p.replace(/\D/g, "");
  if (digits.length === 10) return "1" + digits;
  if (digits.length === 11 && digits.startsWith("1")) return digits;
  return null;
}

function getMessage(name: string, city: string, category: string, slug: string) {
  const claimUrl = `https://tamil-pages-961fd.web.app/claim/${slug}`;
  const profileUrl = `https://tamil-pages-961fd.web.app/directory/${slug}`;
  
  return `வணக்கம் ${name}! 🍁

Your business is featured on TamilPages.ca — Canada's #1 Tamil Directory.

Over 40+ people in ${city} searched for ${category.replace(/-/g, " ")} this week.

Claim your official listing & unlock customer call inquiries for free:
👉 ${claimUrl}

View your public listing:
👉 ${profileUrl}

(Takes 30 seconds · 100% Free · Verified Canadian Directory)`;
}

export default function AdminOutreachPage() {
  const [cityFilter, setCityFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sentList, setSentList] = useState<Record<string, boolean>>({});

  const allRecords: OutreachRecord[] = useMemo(() => {
    return (seedData as unknown as Business[])
      .map((b) => {
        const waPhone = cleanPhone(b.phone || "");
        if (!waPhone) return null;
        const msg = getMessage(b.name, b.city, b.category, b.slug);
        const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(msg)}`;
        return {
          id: b.id,
          name: b.name,
          tamilName: b.tamilName || "",
          category: b.category,
          city: b.city,
          province: b.province,
          phone: b.phone,
          waPhone,
          slug: b.slug,
          message: msg,
          waLink,
        };
      })
      .filter((r): r is OutreachRecord => Boolean(r));
  }, []);

  const cities = useMemo(() => {
    const set = new Set<string>();
    allRecords.forEach((r) => r && set.add(r.city));
    return Array.from(set).sort();
  }, [allRecords]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    allRecords.forEach((r) => r && set.add(r.category));
    return Array.from(set).sort();
  }, [allRecords]);

  const filtered = useMemo(() => {
    return allRecords.filter((r) => {
      if (!r) return false;
      if (cityFilter !== "all" && r.city.toLowerCase() !== cityFilter.toLowerCase()) return false;
      if (categoryFilter !== "all" && r.category !== categoryFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = r.name.toLowerCase().includes(q);
        const matchesTamil = r.tamilName.toLowerCase().includes(q);
        const matchesPhone = r.phone.includes(q);
        if (!matchesName && !matchesTamil && !matchesPhone) return false;
      }
      return true;
    });
  }, [allRecords, cityFilter, categoryFilter, searchQuery]);

  const markSent = (id: string) => {
    setSentList((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#002D62] rounded-3xl p-8 text-white shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <span>💬</span>
              <span>WhatsApp Admin Outreach Engine</span>
            </div>
            <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white">
              Canadian Tamil Business Outreach Hub
            </h1>
            <p className="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
              1-Click WhatsApp Claim &amp; Verification Dispatcher for all {allRecords.length} verified Canadian Tamil businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/data/whatsapp_broadcast_all.csv"
              download
              className="rounded-2xl px-5 py-3 text-xs font-black bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-md flex items-center justify-center gap-2 transition"
            >
              <span>📥</span>
              <span>Download Master CSV ({allRecords.length})</span>
            </a>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-bold uppercase">Ready to WhatsApp</span>
            <p className="font-outfit font-black text-2xl text-[#002D62] mt-1">{allRecords.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-bold uppercase">Filtered Matching</span>
            <p className="font-outfit font-black text-2xl text-[#E00624] mt-1">{filtered.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-bold uppercase">Messages Sent</span>
            <p className="font-outfit font-black text-2xl text-emerald-600 mt-1">{Object.keys(sentList).length}</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-bold uppercase">Cities Covered</span>
            <p className="font-outfit font-black text-2xl text-amber-600 mt-1">{cities.length}</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs grid sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Filter by City:</label>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#002D62]"
            >
              <option value="all">🇨🇦 All Canadian Cities ({cities.length})</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Filter by Category:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#002D62]"
            >
              <option value="all">🏬 All Categories ({categories.length})</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.replace(/-/g, " ")}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Search Name / Phone:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search business name or phone…"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#002D62]"
            />
          </div>
        </div>

        {/* Business Broadcast List */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <span className="font-outfit font-extrabold text-sm text-[#0F172A]">
              Showing {filtered.length} Businesses
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Click &quot;Send WhatsApp&quot; to open pre-filled chat
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {filtered.slice(0, 100).map((r: OutreachRecord) => {
              const isSent = Boolean(sentList[r.id]);
              return (
                <div
                  key={r.id}
                  className={`p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition hover:bg-slate-50/80 ${
                    isSent ? "bg-emerald-50/30" : ""
                  }`}
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-outfit font-bold text-base text-[#0F172A]">
                        {r.name}
                      </h3>
                      {r.tamilName && (
                        <span className="tamil text-xs font-bold text-[#E00624]">
                          ({r.tamilName})
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase">
                        {r.category}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        🍁 {r.city}, {r.province}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 flex items-center gap-3">
                      <span>📞 {r.phone}</span>
                      <span>·</span>
                      <span>WhatsApp ID: +{r.waPhone}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <Link
                      href={`/directory/${r.slug}`}
                      target="_blank"
                      className="px-3 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-white text-xs font-bold transition"
                    >
                      View Profile
                    </Link>

                    <a
                      href={r.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => markSent(r.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm transition transform active:scale-95 ${
                        isSent
                          ? "bg-slate-700 text-white"
                          : "bg-[#25D366] hover:bg-[#1EBE5D] text-white"
                      }`}
                    >
                      <i className="fa-brands fa-whatsapp text-sm" />
                      <span>{isSent ? "Sent ✓ (Click again)" : "Send WhatsApp"}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length > 100 && (
            <div className="p-4 text-center bg-slate-50 text-xs text-slate-500 font-bold border-t border-slate-200">
              Showing first 100 businesses. Use City &amp; Category filters above or download Master CSV for full bulk sender tools.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
