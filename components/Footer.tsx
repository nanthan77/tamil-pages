"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0A1120] text-slate-400 border-t border-slate-850">
      {/* 1. Subtle Canadian Flag Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] opacity-90" />

      {/* 2. Main Clean Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Mission (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white text-base group-hover:scale-105 transition border border-white/10">
                🍁
              </div>
              <span className="font-outfit font-black text-xl text-white tracking-tight">
                tamilcanadianpages<span className="text-[#E00624]">.ca</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The verified digital directory connecting over 300,000 Tamil Canadians across Ontario, Quebec, British Columbia, Alberta, and nationwide.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <span className="tamil text-[11px] font-bold text-amber-300/90 bg-amber-950/40 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                கனடா வாழ் தமிழ் சமூகத்தின் வணிக அடைவு
              </span>
            </div>

            {/* Clean Social Connect Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://wa.me/14162982228"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition flex items-center justify-center text-xs"
                title="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition flex items-center justify-center text-xs"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition flex items-center justify-center text-xs"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition flex items-center justify-center text-xs"
                title="YouTube"
              >
                <i className="fa-brands fa-youtube" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition flex items-center justify-center text-xs"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>

          {/* Col 2: Major Metro Hubs */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-white text-xs uppercase tracking-wider">
              Metro Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/directory?city=Scarborough" className="hover:text-white transition">
                  Scarborough, ON
                </Link>
              </li>
              <li>
                <Link href="/directory?city=Markham" className="hover:text-white transition">
                  Markham &amp; Richmond Hill
                </Link>
              </li>
              <li>
                <Link href="/directory?city=Toronto" className="hover:text-white transition">
                  Toronto &amp; North York
                </Link>
              </li>
              <li>
                <Link href="/directory?city=Brampton" className="hover:text-white transition">
                  Brampton &amp; Mississauga
                </Link>
              </li>
              <li>
                <Link href="/directory?city=Montreal" className="hover:text-white transition">
                  Montreal &amp; Laval, QC
                </Link>
              </li>
              <li>
                <Link href="/directory?city=Vancouver" className="hover:text-white transition">
                  Vancouver &amp; Surrey, BC
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Categories */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-white text-xs uppercase tracking-wider">
              Directory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/category/restaurants-takeout" className="hover:text-white transition">
                  Restaurants &amp; Takeout
                </Link>
              </li>
              <li>
                <Link href="/category/legal-immigration" className="hover:text-white transition">
                  Legal &amp; Immigration
                </Link>
              </li>
              <li>
                <Link href="/category/real-estate-property" className="hover:text-white transition">
                  Real Estate &amp; Mortgages
                </Link>
              </li>
              <li>
                <Link href="/category/accounting-financial" className="hover:text-white transition">
                  Accounting &amp; Tax (CPA)
                </Link>
              </li>
              <li>
                <Link href="/category/medical-dental" className="hover:text-white transition">
                  Healthcare &amp; Dental
                </Link>
              </li>
              <li>
                <Link href="/category/tuition-education" className="hover:text-white transition">
                  Driving Schools &amp; Tutors
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Business Solutions */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-white text-xs uppercase tracking-wider">
              Portals &amp; Owners
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/temples" className="hover:text-amber-300 transition flex items-center gap-1.5 font-medium">
                  <span>🛕</span> Temples &amp; Darshan
                </Link>
              </li>
              <li>
                <Link href="/cinema" className="hover:text-white transition flex items-center gap-1.5">
                  <span>🎬</span> Tamil Cinema Times
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition flex items-center gap-1.5">
                  <span>📰</span> Community News
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition flex items-center gap-1.5">
                  <span>🎪</span> Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/add-business" className="text-emerald-400 hover:text-emerald-300 font-bold transition flex items-center gap-1.5">
                  <span>+</span> Post Business Free
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="hover:text-white transition">
                  Advertise &amp; Spotlight
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Sleek, Modern Minimal Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#070D18] py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-slate-400 text-center md:text-left">
            © 2026 <strong className="text-slate-200">tamilcanadianpages.ca</strong> · The Canadian Tamil Community Directory
          </div>

          {/* Clean Quick Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-slate-400 text-[11px]">
            <Link href="/about" className="hover:text-slate-200 transition">About</Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-slate-200 transition">Privacy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-200 transition">Terms</Link>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-slate-200 transition">Sitemap</Link>
            <span>·</span>
            <Link href="/admin" className="text-slate-500 hover:text-slate-300 transition">Admin</Link>
          </div>

          {/* SafeNet Creations Attribution */}
          <div className="text-[11px] text-slate-400 text-center md:text-right flex items-center gap-1">
            <span>Powered by</span>
            <a
              href="https://www.safenetcreations.com/canada/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-400 hover:text-amber-300 hover:underline transition"
            >
              SafeNet Creations Canada 🍁
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
