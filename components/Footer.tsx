"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="mt-auto bg-[#0B1528] text-white border-t border-slate-800">
      {/* 1. Canadian Flag Accent Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#E00624]" />

      {/* 2. Top Community Newsletter & Dispatch Section */}
      <div className="border-b border-slate-800/80 bg-[#0E1A32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <span>🇨🇦</span>
              <span>Canadian Tamil Community Dispatch</span>
            </div>
            <h3 className="font-outfit font-extrabold text-xl sm:text-2xl text-white">
              Stay Connected with the Canadian Tamil Diaspora
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Receive weekly verified updates on community news, temple festival schedules, Canadian Tamil cinema showtimes, and local business spotlights.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 px-6 py-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-md">
                <span>✓</span>
                <span>Thank you! You are subscribed to Canadian Tamil community dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full md:w-96">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address…"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E00624] shadow-inner"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#E00624] hover:bg-[#B0041B] text-white text-xs font-black shrink-0 transition shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 3. Main Corporate 5-Column Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 text-sm">
        {/* Col 1: Platform Brand & Identity */}
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E00624] to-[#991B1B] flex items-center justify-center text-white text-lg shadow-md font-bold">
              🍁
            </div>
            <span className="font-outfit font-black text-white text-2xl tracking-tight">
              tamilpages<span className="text-[#E00624]">.ca</span>
            </span>
          </div>

          <p className="text-slate-300 text-xs leading-relaxed">
            The Canadian Tamil diaspora’s premier digital business, community, temples, and cultural directory network. Direct connect with zero commission.
          </p>

          <div className="space-y-2 pt-1">
            <span className="tamil text-[#E00624] bg-white px-3 py-1 rounded-md text-xs font-black inline-block shadow-xs">
              கனடா தமிழ் வணிக அடைவு — 100% இலவசம்
            </span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>2,235+ Verified Canadian Listings</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Direct Phone &amp; WhatsApp Connect</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Pan-Canadian Coverage (6 Provinces)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Col 2: Major Canadian Hubs */}
        <div className="space-y-3">
          <h4 className="font-outfit font-extrabold text-white text-sm uppercase tracking-wider flex items-center gap-2 text-slate-100 border-b border-slate-800 pb-2">
            <span>📍</span>
            <span>Canadian Metro Hubs</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <Link href="/directory" className="hover:text-white font-bold text-amber-300 flex items-center gap-1.5">
                <span>🇨🇦</span> All Canada Directory
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Scarborough" className="hover:text-white transition block">
                Scarborough, ON (GTA Heart)
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Markham" className="hover:text-white transition block">
                Markham &amp; Richmond Hill, ON
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Toronto" className="hover:text-white transition block">
                Toronto &amp; North York, ON
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Brampton" className="hover:text-white transition block">
                Brampton &amp; Mississauga, ON
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Montreal" className="hover:text-white transition block">
                Montreal, QC (Côte-des-Neiges)
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Vancouver" className="hover:text-white transition block">
                Vancouver &amp; Surrey, BC
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Calgary" className="hover:text-white transition block">
                Calgary &amp; Edmonton, AB
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Ottawa" className="hover:text-white transition block">
                Ottawa &amp; NCR
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Halifax" className="hover:text-white transition block">
                Halifax, NS &amp; Atlantic Canada
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Popular Categories */}
        <div className="space-y-3">
          <h4 className="font-outfit font-extrabold text-white text-sm uppercase tracking-wider flex items-center gap-2 text-slate-100 border-b border-slate-800 pb-2">
            <span>🏬</span>
            <span>Directory Categories</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <Link href="/category/restaurants-takeout" className="hover:text-white transition block">
                Restaurants &amp; Ceylon Takeout
              </Link>
            </li>
            <li>
              <Link href="/category/legal-immigration" className="hover:text-white transition block">
                Immigration Lawyers &amp; Notaries
              </Link>
            </li>
            <li>
              <Link href="/category/accounting-financial" className="hover:text-white transition block">
                CPA Accounting, Tax &amp; Mortgages
              </Link>
            </li>
            <li>
              <Link href="/category/medical-dental" className="hover:text-white transition block">
                Family Doctors &amp; Dental Clinics
              </Link>
            </li>
            <li>
              <Link href="/temples" className="hover:text-amber-300 font-bold text-amber-300 transition block">
                🛕 Spiritual Sanctuaries &amp; Temples
              </Link>
            </li>
            <li>
              <Link href="/cinema" className="hover:text-amber-300 font-bold text-amber-300 transition block">
                🎬 Canadian Tamil Cinema &amp; Showtimes
              </Link>
            </li>
            <li>
              <Link href="/category/tuition-education" className="hover:text-white transition block">
                MTO Driving Schools &amp; Tutoring
              </Link>
            </li>
            <li>
              <Link href="/category/fashion-jewellery" className="hover:text-white transition block">
                22K Gold Jewellery &amp; Sarees
              </Link>
            </li>
            <li>
              <Link href="/category/grocery-supermarkets" className="hover:text-white transition block">
                Tamil Supermarkets &amp; Spices
              </Link>
            </li>
            <li>
              <Link href="/category/construction-trades" className="hover:text-white transition block">
                Contractors &amp; Home Renovation
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: For Merchants & Business Owners */}
        <div className="space-y-3">
          <h4 className="font-outfit font-extrabold text-white text-sm uppercase tracking-wider flex items-center gap-2 text-slate-100 border-b border-slate-800 pb-2">
            <span>💼</span>
            <span>Merchant &amp; Business</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 font-bold text-white bg-[#E00624] px-3.5 py-1.5 rounded-xl shadow-sm hover:bg-[#B0041B] transition mb-1"
              >
                <span>+</span> Create Free Business Listing
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white transition block">
                Merchant Portal Sign In
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-white transition block">
                Manage My Business Listing
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition block">
                Pricing &amp; Free Tier Details
              </Link>
            </li>
            <li>
              <Link href="/advertise" className="hover:text-white transition block">
                Featured Advertising &amp; Spotlight
              </Link>
            </li>
            <li>
              <Link href="/boost" className="hover:text-white transition block">
                7-Day Search Boost ($49 CAD)
              </Link>
            </li>
            <li>
              <Link href="/weddings" className="hover:text-white transition block">
                Tamil Wedding Vendor Directory
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition block">
                Submit Community Event
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 5: Corporate & Legal Information */}
        <div className="space-y-3">
          <h4 className="font-outfit font-extrabold text-white text-sm uppercase tracking-wider flex items-center gap-2 text-slate-100 border-b border-slate-800 pb-2">
            <span>🛡️</span>
            <span>Corporate &amp; Trust</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <Link href="/about" className="hover:text-white transition block">
                About tamilcanadianpages.ca
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-white transition block">
                Community News &amp; Dispatches
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition block">
                Privacy Policy (PIPEDA Compliant)
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition block">
                Terms of Service &amp; Listings
              </Link>
            </li>
            <li>
              <Link href="/claim/claim-business" className="hover:text-white transition block">
                Claim Existing Business Profile
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-white transition block">
                XML Sitemap Index
              </Link>
            </li>
            <li className="pt-2 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 block">Digital Architecture by</span>
              <a
                href="https://www.safenetcreations.com/canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-amber-300 hover:text-white hover:underline transition text-xs flex items-center gap-1 mt-0.5"
              >
                <span>🍁</span>
                <span>SafeNet Creations Canada</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. Bottom Legal & Attribution Bar (Exact Mandated Spec) */}
      <div className="border-t border-slate-800/80 bg-[#070D18] py-8 text-center text-xs text-slate-400 space-y-3">
        {/* Fast Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300 font-semibold px-4">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/directory" className="hover:text-white transition">Directory</Link>
          <Link href="/temples" className="hover:text-white transition">Temples</Link>
          <Link href="/cinema" className="hover:text-white transition">Cinema</Link>
          <Link href="/news" className="hover:text-white transition">Community News</Link>
          <Link href="/events" className="hover:text-white transition">Events Calendar</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          <Link href="/sitemap.xml" className="hover:text-white transition">Sitemap</Link>
        </div>

        {/* Exact Mandated Copyright Line */}
        <div className="text-slate-200 text-sm font-semibold pt-1">
          © 2026 tamilcanadianpages.ca · The Canada Tamil Community Directory · Built with ❤️ for Canadian Tamils
        </div>

        {/* Exact Mandated Powered By SafeNet Creations Line */}
        <div className="text-xs text-slate-400">
          Website Created &amp; Powered by{" "}
          <a
            href="https://www.safenetcreations.com/canada/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-amber-400 hover:text-amber-300 hover:underline transition"
          >
            SafeNet Creations
          </a>
        </div>
      </div>
    </footer>
  );
}
