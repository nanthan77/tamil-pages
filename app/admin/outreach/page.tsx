"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import AdminSecurityGuard from "@/components/AdminSecurityGuard";
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
  email?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  linkedin?: string;
  slug: string;
  message: string;
  waLink: string;
  smsLink: string;
  claimUrl: string;
  profileUrl: string;
};

type StatusType = "pending" | "whatsapp" | "sms" | "called" | "claimed" | "invalid";

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

Your business profile is featured on TamilPages.ca — Canada's #1 Tamil Community Directory.

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
  const [statusFilter, setStatusFilter] = useState("all");
  const [hasWebsiteOnly, setHasWebsiteOnly] = useState(false);
  const [hasEmailOnly, setHasEmailOnly] = useState(false);
  const [hasSocialOnly, setHasSocialOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusMap, setStatusMap] = useState<Record<string, StatusType>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showCallScript, setShowCallScript] = useState(false);
  const [activeCallBiz, setActiveCallBiz] = useState<OutreachRecord | null>(null);

  // Load status from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tp_outreach_status");
      if (saved) setStatusMap(JSON.parse(saved));
    } catch {}
  }, []);

  const updateStatus = (id: string, st: StatusType) => {
    const updated = { ...statusMap, [id]: st };
    setStatusMap(updated);
    try {
      localStorage.setItem("tp_outreach_status", JSON.stringify(updated));
    } catch {}
  };

  const allRecords: OutreachRecord[] = useMemo(() => {
    return (seedData as unknown as Business[]).flatMap((b) => {
      const waPhone = cleanPhone(b.phone || "");
      if (!waPhone) return [];
      const msg = getMessage(b.name, b.city, b.category, b.slug);
      const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(msg)}`;
      const smsLink = `sms:+${waPhone}?body=${encodeURIComponent(msg)}`;
      const claimUrl = `https://tamil-pages-961fd.web.app/claim/${b.slug}`;
      const profileUrl = `https://tamil-pages-961fd.web.app/directory/${b.slug}`;

      return [
        {
          id: b.id,
          name: b.name,
          tamilName: b.tamilName || "",
          category: b.category,
          city: b.city,
          province: b.province,
          phone: b.phone,
          waPhone,
          email: b.email,
          website: b.website,
          instagram: b.instagram,
          facebook: b.facebook,
          tiktok: b.tiktok,
          youtube: b.youtube,
          linkedin: b.linkedin,
          slug: b.slug,
          message: msg,
          waLink,
          smsLink,
          claimUrl,
          profileUrl,
        },
      ];
    });
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

  const statsCount = useMemo(() => {
    let whatsappCount = 0;
    let smsCount = 0;
    let calledCount = 0;
    let claimedCount = 0;
    Object.values(statusMap).forEach((st) => {
      if (st === "whatsapp") whatsappCount++;
      if (st === "sms") smsCount++;
      if (st === "called") calledCount++;
      if (st === "claimed") claimedCount++;
    });
    return {
      whatsappCount,
      smsCount,
      calledCount,
      claimedCount,
      totalContacted: whatsappCount + smsCount + calledCount + claimedCount,
    };
  }, [statusMap]);

  const filtered = useMemo(() => {
    return allRecords.filter((r) => {
      if (cityFilter !== "all" && r.city.toLowerCase() !== cityFilter.toLowerCase()) return false;
      if (categoryFilter !== "all" && r.category !== categoryFilter) return false;
      if (hasWebsiteOnly && !r.website) return false;
      if (hasEmailOnly && !r.email) return false;
      if (hasSocialOnly && !r.instagram && !r.facebook && !r.tiktok) return false;

      const currentStatus = statusMap[r.id] || "pending";
      if (statusFilter !== "all" && currentStatus !== statusFilter) return false;

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = r.name.toLowerCase().includes(q);
        const matchesTamil = r.tamilName.toLowerCase().includes(q);
        const matchesPhone = r.phone.includes(q);
        const matchesEmail = r.email ? r.email.toLowerCase().includes(q) : false;
        if (!matchesName && !matchesTamil && !matchesPhone && !matchesEmail) return false;
      }
      return true;
    });
  }, [allRecords, cityFilter, categoryFilter, statusFilter, hasWebsiteOnly, hasEmailOnly, hasSocialOnly, searchQuery, statusMap]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadFilteredCsv = () => {
    const sanitize = (s: unknown) => `"${String(s || "").replace(/"/g, '""')}"`;
    const csvHeader =
      "Phone,Email,BusinessName,TamilName,City,Province,Category,Website,Instagram,Facebook,TikTok,ClaimURL,WALink,Message\\n";
    const csvRows = filtered
      .map((r) => {
        return [
          sanitize("+" + r.waPhone),
          sanitize(r.email),
          sanitize(r.name),
          sanitize(r.tamilName),
          sanitize(r.city),
          sanitize(r.province),
          sanitize(r.category),
          sanitize(r.website),
          sanitize(r.instagram),
          sanitize(r.facebook),
          sanitize(r.tiktok),
          sanitize(r.claimUrl),
          sanitize(r.waLink),
          sanitize(r.message.replace(/\\n/g, " \\\\n ")),
        ].join(",");
      })
      .join("\\n");

    const blob = new Blob([csvHeader + csvRows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `tamilpages_outreach_${cityFilter}_${filtered.length}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminSecurityGuard>
      <main className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#002D62] via-[#0A4D92] to-[#002D62] rounded-3xl p-8 sm:p-10 text-white shadow-card flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-3 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-black uppercase tracking-wider border border-white/20">
              <span>📡</span>
              <span>Multi-Channel Outreach &amp; Call Center Hub</span>
            </div>
            <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white">
              Canadian Tamil Business Outreach Hub
            </h1>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Reach all <strong>{allRecords.length} Canadian Tamil businesses</strong> across WhatsApp, SMS, Direct Phone Calls, and Website DMs. Track who is on WhatsApp vs Landlines and verify claims.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 relative z-10">
            <button
              onClick={() => {
                setActiveCallBiz(filtered[0] || null);
                setShowCallScript(true);
              }}
              className="rounded-2xl px-5 py-3 text-xs font-black bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-md flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>📞</span>
              <span>Open 30-Sec Call Script</span>
            </button>
            <button
              onClick={downloadFilteredCsv}
              className="rounded-2xl px-5 py-3 text-xs font-black bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-md flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>📥</span>
              <span>Download Filtered CSV ({filtered.length})</span>
            </button>
          </div>
        </div>

        {/* Multi-Channel Outreach Playbook Guidance Card */}
        <div className="bg-white rounded-3xl border-2 border-[#002D62]/20 p-6 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">💡</span>
            <h3 className="font-outfit font-extrabold text-base text-[#002D62]">
              How to Reach Canadian Businesses (WhatsApp vs Landline Strategy)
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-[#F0FDF4] border border-emerald-200 rounded-2xl p-4 space-y-1">
              <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                <span>💬</span> 1. WhatsApp (Cell Phones)
              </span>
              <p className="text-emerald-800">
                Click <strong>&quot;Send WhatsApp&quot;</strong> for mobile owners. If the number doesn&apos;t have WhatsApp, use SMS or Phone Call below.
              </p>
            </div>
            <div className="bg-[#EFF6FF] border border-blue-200 rounded-2xl p-4 space-y-1">
              <span className="font-extrabold text-blue-900 flex items-center gap-1.5">
                <span>📱</span> 2. 1-Click SMS / Text Message
              </span>
              <p className="text-blue-800">
                Click <strong>&quot;Send SMS&quot;</strong> to text the claim link directly to iPhone/Android mobile phones without needing WhatsApp.
              </p>
            </div>
            <div className="bg-[#FFFBEB] border border-amber-200 rounded-2xl p-4 space-y-1">
              <span className="font-extrabold text-amber-900 flex items-center gap-1.5">
                <span>📞</span> 3. 30-Sec Call (Landlines)
              </span>
              <p className="text-amber-800">
                For restaurant &amp; shop landlines, click <strong>&quot;Call Shop&quot;</strong> and use the 30-second Tamil script to get their mobile number.
              </p>
            </div>
          </div>
        </div>

        {/* Live Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Total Listings</span>
            <p className="font-outfit font-black text-2xl text-[#002D62] mt-0.5">{allRecords.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <span className="text-[10px] text-slate-500 font-bold uppercase">WhatsApp Sent</span>
            <p className="font-outfit font-black text-2xl text-[#25D366] mt-0.5">{statsCount.whatsappCount}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <span className="text-[10px] text-slate-500 font-bold uppercase">SMS Texted</span>
            <p className="font-outfit font-black text-2xl text-blue-600 mt-0.5">{statsCount.smsCount}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Landlines Called</span>
            <p className="font-outfit font-black text-2xl text-amber-600 mt-0.5">{statsCount.calledCount}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Verified Claimed</span>
            <p className="font-outfit font-black text-2xl text-purple-600 mt-0.5">{statsCount.claimedCount}</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs grid sm:grid-cols-4 gap-4">
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
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Outreach Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#002D62]"
            >
              <option value="all">All Statuses</option>
              <option value="pending">⏳ Pending (Not Contacted)</option>
              <option value="whatsapp">💬 WhatsApp Sent</option>
              <option value="sms">📱 SMS Sent</option>
              <option value="called">📞 Landline Called</option>
              <option value="claimed">✅ Claimed &amp; Verified</option>
              <option value="invalid">❌ Invalid / No Answer</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Search Name / Phone:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name or phone…"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-[#002D62]"
            />
            <label className="flex items-center gap-1.5 mt-2 cursor-pointer text-[11px] font-bold text-slate-600">
              <input
                type="checkbox"
                checked={hasWebsiteOnly}
                onChange={(e) => setHasWebsiteOnly(e.target.checked)}
                className="rounded text-[#002D62] focus:ring-0"
              />
              <span>🌐 With website</span>
            </label>
            <label className="flex items-center gap-1.5 mt-1 cursor-pointer text-[11px] font-bold text-indigo-700">
              <input
                type="checkbox"
                checked={hasEmailOnly}
                onChange={(e) => setHasEmailOnly(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-0"
              />
              <span>✉️ With verified email</span>
            </label>
            <label className="flex items-center gap-1.5 mt-1 cursor-pointer text-[11px] font-bold text-pink-700">
              <input
                type="checkbox"
                checked={hasSocialOnly}
                onChange={(e) => setHasSocialOnly(e.target.checked)}
                className="rounded text-pink-600 focus:ring-0"
              />
              <span>📸 With Social (IG/FB/TikTok)</span>
            </label>
          </div>
        </div>

        {/* Business Broadcast & Call Center List */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-outfit font-extrabold text-sm text-[#0F172A]">
              Showing {filtered.length} Businesses
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Click buttons to Send WhatsApp · SMS · Call Shop · Copy Link
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {filtered.slice(0, 100).map((r: OutreachRecord) => {
              const currentStatus = statusMap[r.id] || "pending";
              return (
                <div
                  key={r.id}
                  className={`p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 transition hover:bg-slate-50/90 ${
                    currentStatus === "claimed"
                      ? "bg-purple-50/40"
                      : currentStatus === "whatsapp"
                      ? "bg-emerald-50/30"
                      : currentStatus === "sms"
                      ? "bg-blue-50/30"
                      : currentStatus === "called"
                      ? "bg-amber-50/30"
                      : ""
                  }`}
                >
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-outfit font-bold text-lg text-[#0F172A]">
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
                      <span className="text-xs text-slate-500 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                        🍁 {r.city}, {r.province}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-600 flex-wrap">
                      <span className="font-bold text-[#002D62]">📞 {r.phone}</span>
                      {r.email && (
                        <>
                          <span>·</span>
                          <a
                            href={`mailto:${r.email}?subject=${encodeURIComponent(`TamilPages.ca: Claim your verified listing for ${r.name}`)}&body=${encodeURIComponent(r.message)}`}
                            className="font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded hover:underline flex items-center gap-1"
                          >
                            <span>✉️</span>
                            <span>{r.email}</span>
                          </a>
                        </>
                      )}
                      <span>·</span>
                      {r.website ? (
                        <a
                          href={r.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                        >
                          <span>🌐 Website</span>
                          <span>↗</span>
                        </a>
                      ) : (
                        <span className="text-slate-400">No website listed</span>
                      )}
                      {r.instagram && (
                        <>
                          <span>·</span>
                          <a
                            href={r.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold text-pink-700 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded hover:underline flex items-center gap-1"
                          >
                            <span>📸</span>
                            <span>Instagram</span>
                            <span>↗</span>
                          </a>
                        </>
                      )}
                      {r.facebook && (
                        <>
                          <span>·</span>
                          <a
                            href={r.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded hover:underline flex items-center gap-1"
                          >
                            <span>📘</span>
                            <span>Facebook</span>
                            <span>↗</span>
                          </a>
                        </>
                      )}
                    </div>

                    {/* Status Pills Selector */}
                    <div className="flex items-center gap-1.5 pt-1 flex-wrap text-[11px]">
                      <span className="text-slate-400 font-bold text-[10px] uppercase mr-1">Tag:</span>
                      <button
                        onClick={() => updateStatus(r.id, "whatsapp")}
                        className={`px-2 py-0.5 rounded-md font-bold transition cursor-pointer ${
                          currentStatus === "whatsapp"
                            ? "bg-[#25D366] text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        💬 WhatsApp
                      </button>
                      <button
                        onClick={() => updateStatus(r.id, "sms")}
                        className={`px-2 py-0.5 rounded-md font-bold transition cursor-pointer ${
                          currentStatus === "sms"
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        📱 SMS
                      </button>
                      <button
                        onClick={() => updateStatus(r.id, "called")}
                        className={`px-2 py-0.5 rounded-md font-bold transition cursor-pointer ${
                          currentStatus === "called"
                            ? "bg-amber-500 text-slate-900"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        📞 Called
                      </button>
                      <button
                        onClick={() => updateStatus(r.id, "claimed")}
                        className={`px-2 py-0.5 rounded-md font-bold transition cursor-pointer ${
                          currentStatus === "claimed"
                            ? "bg-purple-600 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        ✅ Claimed
                      </button>
                      {currentStatus !== "pending" && (
                        <button
                          onClick={() => updateStatus(r.id, "pending")}
                          className="text-slate-400 hover:text-slate-600 text-[10px] ml-1 underline cursor-pointer"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Multi-Channel Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {/* 1. WhatsApp Dispatch */}
                    <a
                      href={r.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => updateStatus(r.id, "whatsapp")}
                      className="px-3.5 py-2 rounded-xl text-xs font-black bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center gap-1.5 shadow-xs transition"
                      title="Send WhatsApp Message"
                    >
                      <i className="fa-brands fa-whatsapp text-sm" />
                      <span>WhatsApp</span>
                    </a>

                    {/* 2. SMS Direct Dispatch */}
                    <a
                      href={r.smsLink}
                      onClick={() => updateStatus(r.id, "sms")}
                      className="px-3 py-2 rounded-xl text-xs font-black bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-xs transition"
                      title="Send Direct SMS / Text to Mobile"
                    >
                      <span>📱</span>
                      <span>SMS</span>
                    </a>

                    {/* 2.5 Email Direct Dispatch */}
                    {r.email && (
                      <a
                        href={`mailto:${r.email}?subject=${encodeURIComponent(`TamilPages.ca: Claim your verified listing for ${r.name}`)}&body=${encodeURIComponent(r.message)}`}
                        className="px-3 py-2 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 shadow-xs transition"
                        title={`Send Direct Email to ${r.email}`}
                      >
                        <span>✉️</span>
                        <span>Email</span>
                      </a>
                    )}

                    {/* 2.8 Instagram Direct Message */}
                    {r.instagram && (
                      <a
                        href={r.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white flex items-center gap-1.5 shadow-xs transition"
                        title="Open Instagram Profile for DM"
                      >
                        <span>📸</span>
                        <span>IG DM</span>
                      </a>
                    )}

                    {/* 2.9 Facebook Message */}
                    {r.facebook && (
                      <a
                        href={r.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl text-xs font-black bg-[#1877F2] hover:bg-blue-600 text-white flex items-center gap-1.5 shadow-xs transition"
                        title="Open Facebook Page for Message"
                      >
                        <span>📘</span>
                        <span>Facebook</span>
                      </a>
                    )}

                    {/* 3. Phone Call */}
                    <a
                      href={`tel:${r.phone}`}
                      onClick={() => {
                        updateStatus(r.id, "called");
                        setActiveCallBiz(r);
                        setShowCallScript(true);
                      }}
                      className="px-3 py-2 rounded-xl text-xs font-black bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center gap-1.5 shadow-xs transition"
                      title="Call Shop Phone / Landline"
                    >
                      <span>📞</span>
                      <span>Call Shop</span>
                    </a>

                    {/* 4. Copy Claim Link */}
                    <button
                      type="button"
                      onClick={() => copyToClipboard(r.claimUrl, r.id + "-link")}
                      className="px-3 py-2 rounded-xl text-xs font-bold border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition cursor-pointer"
                      title="Copy Claim URL"
                    >
                      {copiedId === r.id + "-link" ? "Copied! ✓" : "Copy Link"}
                    </button>

                    {/* 5. View Profile */}
                    <Link
                      href={`/directory/${r.slug}`}
                      target="_blank"
                      className="p-2 rounded-xl border border-slate-300 text-slate-600 hover:text-[#002D62] text-xs font-bold transition"
                      title="Open Profile Page"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length > 100 && (
            <div className="p-4 text-center bg-slate-50 text-xs text-slate-500 font-bold border-t border-slate-200">
              Showing first 100 businesses. Use filters above or download CSV for full batch dialing.
            </div>
          )}
        </div>
      </div>

      {/* 30-Second Calling Script Drawer / Modal */}
      {showCallScript && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] border-2 border-[#002D62] p-8 max-w-2xl w-full space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                    30-Second Phone Call Script (Tamil &amp; English)
                  </h3>
                  <p className="text-xs text-slate-500">
                    For Calling: <strong>{activeCallBiz?.name || "Business Owner"}</strong> ({activeCallBiz?.phone || ""})
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCallScript(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-black text-sm flex items-center justify-center hover:bg-slate-200 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Tamil Script */}
            <div className="bg-[#FFFBEB] border border-amber-200 rounded-2xl p-4 space-y-2 text-xs text-amber-950">
              <span className="font-black text-amber-900 uppercase tracking-wider block">
                🗣️ தமிழ் உரையாடல் (Tamil Script):
              </span>
              <p className="tamil text-sm leading-relaxed font-semibold">
                &quot;வணக்கம் அண்ணா / அக்கா! நான் <strong>TamilPages.ca</strong> (கனடா தமிழ் அடைவு) லிருந்து அழைக்கிறேன்.
                உங்கள் <strong>{activeCallBiz?.name || "கடையின் பெயர்"}</strong> விவரங்கள் எங்கள் இணையதளத்தில் பதிவு செய்யப்பட்டுள்ளது.
              </p>
              <p className="tamil text-sm leading-relaxed">
                உங்கள் கடை நேரங்கள் மற்றும் தொடர்பு எண்களை சரிபார்த்து இலவசமாக உறுதிப்படுத்த (Claim) உங்கள் <strong>Mobile / WhatsApp நம்பருக்கு Link அனுப்பலாமா?</strong>&quot;
              </p>
            </div>

            {/* English Script */}
            <div className="bg-[#F0FDF4] border border-emerald-200 rounded-2xl p-4 space-y-2 text-xs text-emerald-950">
              <span className="font-black text-emerald-900 uppercase tracking-wider block">
                🗣️ English Script:
              </span>
              <p className="text-xs leading-relaxed font-semibold">
                &quot;Hello! I&apos;m calling from <strong>TamilPages.ca</strong>, Canada&apos;s Tamil Business Directory.
                We have your business profile for <strong>{activeCallBiz?.name || "your shop"}</strong> in {activeCallBiz?.city || "your area"}.
              </p>
              <p className="text-xs leading-relaxed">
                We are verifying listings for free today. What is the best cell phone number or WhatsApp to text you your private claim link so you can receive direct customer inquiries?&quot;
              </p>
            </div>

            {/* Quick Actions in Modal */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              {activeCallBiz && (
                <button
                  onClick={() => {
                    copyToClipboard(activeCallBiz.claimUrl, "modal-link");
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
                >
                  {copiedId === "modal-link" ? "Claim Link Copied! ✓" : "Copy Claim Link"}
                </button>
              )}

              <button
                onClick={() => setShowCallScript(false)}
                className="btn-primary rounded-xl px-6 py-2 text-xs font-black cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
    </AdminSecurityGuard>
  );
}
