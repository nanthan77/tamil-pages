"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import seedData from "@/data/seed-businesses.json";
import leadsData from "@/data/leads.json";
import reviewsData from "@/data/reviews.json";
import type { Business, Lead, Review } from "@/lib/types";

type TabKey = "overview" | "leads" | "listings" | "reviews" | "monetization" | "tools";

export default function MasterAdminPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [leadStatusMap, setLeadStatusMap] = useState<Record<string, string>>({});
  const [showCallModal, setShowCallModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const businesses = seedData as unknown as Business[];
  const initialLeads = leadsData as unknown as Lead[];
  const initialReviews = reviewsData as unknown as Review[];

  // Load status from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tp_crm_lead_status");
      if (saved) setLeadStatusMap(JSON.parse(saved));
    } catch {}
  }, []);

  const updateLeadStatus = (id: string, st: string) => {
    const updated = { ...leadStatusMap, [id]: st };
    setLeadStatusMap(updated);
    try {
      localStorage.setItem("tp_crm_lead_status", JSON.stringify(updated));
    } catch {}
  };

  // Metrics computation
  const metrics = useMemo(() => {
    let emailCount = 0;
    let igCount = 0;
    let fbCount = 0;
    let waCount = 0;
    let websiteCount = 0;

    businesses.forEach((b) => {
      if (b.email) emailCount++;
      if (b.instagram) igCount++;
      if (b.facebook) fbCount++;
      if (b.phone) waCount++;
      if (b.website) websiteCount++;
    });

    return {
      totalListings: businesses.length,
      emailCount,
      igCount,
      fbCount,
      waCount,
      websiteCount,
      leadsCount: initialLeads.length,
      reviewsCount: initialReviews.length,
    };
  }, [businesses, initialLeads, initialReviews]);

  // Filtered Businesses
  const filteredBusinesses = useMemo(() => {
    return businesses.filter((b) => {
      if (cityFilter !== "all" && b.city.toLowerCase() !== cityFilter.toLowerCase()) return false;
      if (categoryFilter !== "all" && b.category !== categoryFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const mName = b.name.toLowerCase().includes(q);
        const mTamil = (b.tamilName || "").toLowerCase().includes(q);
        const mPhone = (b.phone || "").includes(q);
        const mEmail = (b.email || "").toLowerCase().includes(q);
        if (!mName && !mTamil && !mPhone && !mEmail) return false;
      }
      return true;
    });
  }, [businesses, cityFilter, categoryFilter, searchQuery]);

  const cities = useMemo(() => {
    const set = new Set<string>();
    businesses.forEach((b) => b.city && set.add(b.city));
    return Array.from(set).sort();
  }, [businesses]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    businesses.forEach((b) => b.category && set.add(b.category));
    return Array.from(set).sort();
  }, [businesses]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Top Navbar */}
      <header className="bg-[#002D62] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🍁</span>
              <span className="font-outfit font-black text-lg tracking-tight">TamilPages</span>
            </Link>
            <span className="text-white/40 font-light">|</span>
            <span className="text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-900 px-2.5 py-0.5 rounded-md">
              Admin &amp; CRM Hub
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/outreach"
              className="px-3.5 py-2 rounded-xl text-xs font-black bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center gap-1.5 shadow transition"
            >
              <span>📡</span>
              <span>Multi-Channel Outreach Hub</span>
            </Link>
            <Link
              href="/add-business"
              className="hidden sm:flex px-3.5 py-2 rounded-xl text-xs font-black bg-white/10 hover:bg-white/20 text-white items-center gap-1.5 transition"
            >
              <span>+ Post Listing</span>
            </Link>
            <Link
              href="/"
              target="_blank"
              className="p-2 rounded-xl text-white/70 hover:text-white text-xs font-bold transition"
              title="View Public Site"
            >
              ↗
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#002D62] via-[#0A4D92] to-[#002D62] rounded-3xl p-6 sm:p-8 text-white shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-emerald-300 text-xs font-black uppercase tracking-wider border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Database Connected · 2,240 Canadian Listings</span>
            </div>
            <h1 className="font-outfit font-extrabold text-2xl sm:text-3xl text-white">
              Canadian Tamil Enterprise CRM &amp; Admin Hub
            </h1>
            <p className="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Manage all 2,240 businesses, incoming customer leads, claim verifications, reviews, and multi-channel campaigns (WhatsApp, Email, Instagram DM, Facebook).
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 relative z-10 shrink-0">
            <Link
              href="/admin/outreach"
              className="px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-black shadow flex items-center gap-2 transition"
            >
              <span>💬</span>
              <span>Launch Outreach Hub</span>
            </Link>
            <button
              onClick={() => setShowCallModal(true)}
              className="px-4 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-black shadow flex items-center gap-2 transition cursor-pointer"
            >
              <span>📞</span>
              <span>30-Sec Script</span>
            </button>
          </div>
        </div>

        {/* 6 Key Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500">Total Listings</span>
            <div className="font-outfit font-black text-2xl text-[#002D62]">{metrics.totalListings}</div>
            <span className="text-[10px] text-emerald-600 font-bold">🍁 44 Cities</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-indigo-100 shadow-xs space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-indigo-600">Verified Emails</span>
            <div className="font-outfit font-black text-2xl text-indigo-700">{metrics.emailCount}</div>
            <span className="text-[10px] text-indigo-500 font-bold">✉️ 1-Click Email</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-xs space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-pink-600">Instagram Handles</span>
            <div className="font-outfit font-black text-2xl text-pink-600">{metrics.igCount}</div>
            <span className="text-[10px] text-pink-500 font-bold">📸 Direct DMs</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-xs space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-blue-600">Facebook Pages</span>
            <div className="font-outfit font-black text-2xl text-blue-700">{metrics.fbCount}</div>
            <span className="text-[10px] text-blue-500 font-bold">📘 Messenger</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-xs space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-700">WhatsApp / SMS</span>
            <div className="font-outfit font-black text-2xl text-emerald-700">{metrics.waCount}</div>
            <span className="text-[10px] text-emerald-600 font-bold">💬 Broadcast Ready</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-amber-100 shadow-xs space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-700">ARR Potential</span>
            <div className="font-outfit font-black text-2xl text-amber-600">$24.5k</div>
            <span className="text-[10px] text-amber-600 font-bold">💰 Monthly Pipeline</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-2 text-xs font-black">
          {[
            { key: "overview", label: "📊 CRM Dashboard", count: null },
            { key: "leads", label: "📥 Leads & Claims CRM", count: initialLeads.length },
            { key: "listings", label: "🏬 Directory Manager", count: businesses.length },
            { key: "reviews", label: "⭐ Reviews Moderation", count: initialReviews.length },
            { key: "monetization", label: "💰 Monetization Hub", count: null },
            { key: "tools", label: "⚙️ System & Exports", count: null },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as TabKey)}
              className={`px-4 py-2.5 rounded-xl font-outfit uppercase tracking-wider transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === t.key
                  ? "bg-[#002D62] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>{t.label}</span>
              {t.count !== null && (
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    activeTab === t.key ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab 1: CRM Dashboard / Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Quick Actions Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
                <h3 className="font-outfit font-extrabold text-base text-[#002D62] flex items-center gap-2">
                  <span>⚡</span>
                  <span>Quick Multi-Channel Actions</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs font-bold">
                  <Link
                    href="/admin/outreach"
                    className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition space-y-1 block"
                  >
                    <div className="flex items-center gap-1.5 font-black text-sm">
                      <span>💬</span> WhatsApp &amp; SMS Center
                    </div>
                    <p className="text-[11px] text-emerald-700 font-normal">
                      1-click send messages to 2,198 businesses.
                    </p>
                  </Link>

                  <a
                    href="/data/whatsapp_broadcast_all.csv"
                    download
                    className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 hover:bg-indigo-100 transition space-y-1 block"
                  >
                    <div className="flex items-center gap-1.5 font-black text-sm">
                      <span>✉️</span> Download Master CSV
                    </div>
                    <p className="text-[11px] text-indigo-700 font-normal">
                      857 emails, 801 Instagram handles, phone numbers.
                    </p>
                  </a>

                  <Link
                    href="/add-business"
                    className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 hover:bg-sky-100 transition space-y-1 block"
                  >
                    <div className="flex items-center gap-1.5 font-black text-sm">
                      <span>🏬</span> Add Canadian Business
                    </div>
                    <p className="text-[11px] text-sky-700 font-normal">
                      Add restaurant, lawyer, temple, or service.
                    </p>
                  </Link>

                  <button
                    onClick={() => setShowCallModal(true)}
                    className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100 transition space-y-1 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 font-black text-sm">
                      <span>📞</span> 30-Sec Call Script
                    </div>
                    <p className="text-[11px] text-amber-700 font-normal">
                      Tamil &amp; English landline verification pitch.
                    </p>
                  </button>
                </div>
              </div>

              {/* City Breakdown Overview */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
                <h3 className="font-outfit font-extrabold text-base text-[#002D62] flex items-center gap-2">
                  <span>🍁</span>
                  <span>Top Canadian Business Hubs</span>
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
                  {[
                    { city: "Scarborough, ON", count: "1,240+", badge: "Primary Hub" },
                    { city: "Markham, ON", count: "320+", badge: "High Density" },
                    { city: "Toronto, ON", count: "280+", badge: "Downtown & North" },
                    { city: "Mississauga & Brampton", count: "190+", badge: "Peel Region" },
                    { city: "Vancouver & Surrey, BC", count: "110+", badge: "West Coast" },
                    { city: "Montreal & Laval, QC", count: "90+", badge: "Quebec Hub" },
                  ].map((c) => (
                    <div key={c.city} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-800">{c.city}</div>
                        <div className="text-[10px] text-slate-500">{c.badge}</div>
                      </div>
                      <span className="font-black text-[#002D62] bg-white px-2 py-0.5 rounded-lg border border-slate-200 text-xs">
                        {c.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Leads Preview */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h3 className="font-outfit font-extrabold text-base text-[#002D62]">
                  📥 Recent Incoming Leads &amp; Quote Inquiries
                </h3>
                <button
                  onClick={() => setActiveTab("leads")}
                  className="text-xs font-bold text-[#002D62] hover:underline"
                >
                  View All Leads →
                </button>
              </div>

              {initialLeads.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs font-medium">
                  No incoming leads yet. Once customers request quotes on /claim or /quote pages, they will appear here.
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {initialLeads.slice(0, 5).map((ld) => (
                    <div key={ld.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                      <div>
                        <span className="font-bold text-slate-800">{ld.name}</span> ·{" "}
                        <span className="text-slate-500">{ld.business || "General Inquiry"}</span> ·{" "}
                        <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-extrabold text-[10px] uppercase">
                          {ld.kind}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {ld.phone && (
                          <a
                            href={`https://wa.me/${ld.phone}?text=Hi%20${ld.name}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-[#25D366] text-white text-[11px] font-bold"
                          >
                            💬 WhatsApp
                          </a>
                        )}
                        {ld.email && (
                          <a
                            href={`mailto:${ld.email}`}
                            className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold"
                          >
                            ✉️ Email
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Leads & Claims CRM */}
        {activeTab === "leads" && (
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs space-y-4 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-outfit font-extrabold text-lg text-[#002D62]">
                  Incoming Customer Quote Inquiries &amp; Claim Requests
                </h3>
                <p className="text-xs text-slate-500">
                  Manage inquiries submitted through /claim, /quote, and /advertise.
                </p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                {initialLeads.length} Total Leads
              </span>
            </div>

            {initialLeads.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs font-bold">
                No customer inquiries submitted yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-black uppercase text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="p-3">Customer / Claimant</th>
                      <th className="p-3">Business</th>
                      <th className="p-3">Lead Type</th>
                      <th className="p-3">Message / Notes</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {initialLeads.map((ld) => {
                      const st = leadStatusMap[ld.id] || "Pending";
                      return (
                        <tr key={ld.id} className="hover:bg-slate-50/80">
                          <td className="p-3 space-y-0.5">
                            <div className="font-bold text-slate-900">{ld.name}</div>
                            <div className="text-slate-500 font-mono text-[11px]">
                              {ld.phone ? `📞 ${ld.phone}` : ""} {ld.email ? `✉️ ${ld.email}` : ""}
                            </div>
                          </td>
                          <td className="p-3 font-semibold text-[#002D62]">
                            {ld.business || "—"}
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-extrabold text-[10px] uppercase">
                              {ld.kind}
                            </span>
                          </td>
                          <td className="p-3 text-slate-600 max-w-xs truncate">
                            {ld.message || "—"}
                          </td>
                          <td className="p-3">
                            <select
                              value={st}
                              onChange={(e) => updateLeadStatus(ld.id, e.target.value)}
                              className="px-2 py-1 rounded-lg text-xs font-bold border border-slate-300 bg-white"
                            >
                              <option value="Pending">⏳ Pending</option>
                              <option value="Contacted">💬 Contacted</option>
                              <option value="Approved">✅ Verified / Won</option>
                              <option value="Closed">❌ Closed</option>
                            </select>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-1.5">
                              {ld.phone && (
                                <a
                                  href={`https://wa.me/${ld.phone}?text=${encodeURIComponent(`Hi ${ld.name}, regarding your inquiry on TamilPages.ca:`)}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-2.5 py-1 rounded-lg bg-[#25D366] text-white text-[10px] font-bold"
                                >
                                  WhatsApp
                                </a>
                              )}
                              {ld.email && (
                                <a
                                  href={`mailto:${ld.email}?subject=TamilPages Inquiry Reply`}
                                  className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-bold"
                                >
                                  Email
                                </a>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Directory Listing Manager */}
        {activeTab === "listings" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-outfit font-extrabold text-lg text-[#002D62]">
                  Canadian Tamil Business Directory Manager
                </h3>
                <p className="text-xs text-slate-500">
                  Showing {filteredBusinesses.length} of {businesses.length} Canadian businesses.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/admin/outreach"
                  className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-black shadow flex items-center gap-1.5"
                >
                  <span>📡</span>
                  <span>Outreach Dispatcher</span>
                </Link>
                <Link
                  href="/add-business"
                  className="px-4 py-2 rounded-xl bg-[#002D62] text-white text-xs font-black shadow"
                >
                  + Add Business
                </Link>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="grid sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search business name, phone or email…"
                className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#002D62]"
              />
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold"
              >
                <option value="all">🍁 All Cities ({cities.length})</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold"
              >
                <option value="all">📂 All Categories ({categories.length})</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Businesses List */}
            <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
              {filteredBusinesses.slice(0, 100).map((b) => (
                <div key={b.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-xl">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-[#0F172A]">{b.name}</span>
                      {b.tamilName && (
                        <span className="tamil text-xs font-bold text-[#E00624]">({b.tamilName})</span>
                      )}
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase">
                        {b.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">🍁 {b.city}, {b.province}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-600 flex-wrap">
                      <span className="font-bold text-[#002D62]">📞 {b.phone}</span>
                      {b.email && <span className="text-indigo-700 font-semibold">✉️ {b.email}</span>}
                      {b.instagram && (
                        <a href={b.instagram} target="_blank" rel="noreferrer" className="text-pink-600 font-bold hover:underline">
                          📸 IG
                        </a>
                      )}
                      {b.facebook && (
                        <a href={b.facebook} target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">
                          📘 FB
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(`https://tamil-pages-961fd.web.app/claim/${b.slug}`, b.id + "-claim")}
                      className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:bg-slate-100 cursor-pointer"
                      title="Copy Claim URL"
                    >
                      {copiedLink === b.id + "-claim" ? "Copied! ✓" : "Copy Link"}
                    </button>
                    <Link
                      href={`/claim/${b.slug}`}
                      target="_blank"
                      className="px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100"
                    >
                      Claim Page ↗
                    </Link>
                    <Link
                      href={`/directory/${b.slug}`}
                      target="_blank"
                      className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:bg-slate-100"
                    >
                      View Profile ↗
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Review Moderation */}
        {activeTab === "reviews" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <h3 className="font-outfit font-extrabold text-lg text-[#002D62]">
              Customer Reviews Moderation
            </h3>
            {initialReviews.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs font-bold">
                No customer reviews submitted yet. Reviews submitted on business profile pages will appear here for verification.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {initialReviews.map((rev) => (
                  <div key={rev.id} className="py-3 flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-slate-800">{rev.name}</span> · ⭐ {rev.rating} / 5
                      <p className="text-slate-600 mt-1">{rev.comment}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Approved
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Monetization & Revenue Hub */}
        {activeTab === "monetization" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <div className="text-2xl">🥇</div>
                <h4 className="font-outfit font-black text-base text-[#0F172A]">Category Spotlight</h4>
                <div className="font-outfit font-black text-2xl text-[#002D62]">$199 / mo</div>
                <p className="text-xs text-slate-600">
                  Fixed top #1 placement in high-traffic categories (Restaurants, Driving Schools, Lawyers, Real Estate).
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <div className="text-2xl">⚡</div>
                <h4 className="font-outfit font-black text-base text-[#0F172A]">Quote Lead Pay-Per-Lead</h4>
                <div className="font-outfit font-black text-2xl text-emerald-600">$15 – $35 / lead</div>
                <p className="text-xs text-slate-600">
                  Direct SMS/WhatsApp quote inquiries sent to lawyers, realtors, accountants, and catering businesses.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <div className="text-2xl">🏆</div>
                <h4 className="font-outfit font-black text-base text-[#0F172A]">Verified Owner Badge</h4>
                <div className="font-outfit font-black text-2xl text-amber-600">$49 / yr</div>
                <p className="text-xs text-slate-600">
                  Green tick verified badge, direct WhatsApp customer booking button, and custom SEO backlinks.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: System Tools & Exports */}
        {activeTab === "tools" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 shadow-xs">
            <h3 className="font-outfit font-extrabold text-lg text-[#002D62]">
              System Tools &amp; Data Exports
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-bold">
              <a
                href="/data/whatsapp_broadcast_all.csv"
                download
                className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition space-y-1 block"
              >
                <div>📥 Download Master Broadcast CSV</div>
                <p className="text-[11px] text-emerald-700 font-normal">2,198 contacts with phone, email, Instagram &amp; claim URLs.</p>
              </a>

              <Link
                href="/admin/outreach"
                className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 hover:bg-indigo-100 transition space-y-1 block"
              >
                <div>📡 44 WhatsApp Outreach Batches</div>
                <p className="text-[11px] text-indigo-700 font-normal">Access all 44 batch JSON files of 50 contacts each.</p>
              </Link>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 space-y-1">
                <div>🌐 Firebase Production Status</div>
                <p className="text-[11px] text-slate-500 font-normal">Hosted on Google Firebase CDN (5,033 static pages live).</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 30-Second Tamil / English Landline Call Script Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <h3 className="font-outfit font-black text-lg text-[#002D62]">
                  30-Second Shop Phone Call Script
                </h3>
              </div>
              <button
                onClick={() => setShowCallModal(false)}
                className="text-slate-400 hover:text-slate-700 font-black text-lg p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs leading-relaxed">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <span className="font-extrabold text-amber-900 uppercase text-[10px] tracking-wider block">
                  1. Tamil Script (வணக்கம் - 30 வினாடி):
                </span>
                <p className="tamil text-slate-800 font-semibold text-xs leading-relaxed">
                  &quot;வணக்கம் அண்ணா/அக்கா, நாங்க <strong>TamilPages.ca</strong> (கனடிய தமிழ் யெல்லோ பேஜஸ்) இருந்து கூப்பிடுறோம். உங்க கடை/பிசினஸ் ப்ரொபைல் எங்க கனடா டைரக்டரில போட்டிருக்கோம். உங்க வாட்ஸ்அப் நம்பர் மற்றும் திறந்திருக்கும் நேரத்தை சரிபார்த்து இலவசமா வெரிஃபை பண்ணிக்கலாம். உங்க வாட்ஸ்அப் நம்பருக்கு லிங்க் அனுப்பவா?&quot;
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                <span className="font-extrabold text-blue-900 uppercase text-[10px] tracking-wider block">
                  2. English Script:
                </span>
                <p className="text-slate-800 font-medium">
                  &quot;Hi, I&apos;m calling from <strong>TamilPages.ca</strong>, the Canadian Tamil business directory. We have listed your business on our platform and want to verify your WhatsApp number and opening hours so local customers can reach you directly. Can I text you the free claim link?&quot;
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowCallModal(false)}
                className="px-6 py-2.5 rounded-xl bg-[#002D62] text-white text-xs font-bold hover:bg-[#001F45] cursor-pointer"
              >
                Close Script
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
