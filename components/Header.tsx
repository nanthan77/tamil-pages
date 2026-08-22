import Link from "next/link";
import { stats } from "@/lib/store";
import HeaderSearchTrigger from "./HeaderSearchTrigger";
import PwaInstallButton from "./PwaInstallButton";
import MobileNav from "./MobileNav";

export default function Header() {
  const s = stats();

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Canadian Flag Top Banner */}
      <div className="flag-bar w-full" />

      {/* Main Navigation Bar */}
      <div className="glass-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center group select-none shrink-0 py-1">
              <img src="/logo-white.png" alt="tamilcanadianpages.ca" width="220" height="36" className="h-8 sm:h-9 w-auto object-contain transition group-hover:scale-[1.02]" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              <Link
                href="/directory"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
              >
                <span>🇨🇦</span>
                <span>Directory</span>
              </Link>
              <Link
                href="/temples"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
              >
                <span>🛕</span>
                <span>Temples</span>
              </Link>
              <Link
                href="/news"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
              >
                <span>📰</span>
                <span>News</span>
              </Link>
              <Link
                href="/events"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
              >
                <span>🎪</span>
                <span>Events</span>
              </Link>
              <Link
                href="/cinema"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
              >
                <span>🎬</span>
                <span>Cinema</span>
              </Link>
              <Link
                href="/alerts"
                className="px-2.5 py-1.5 rounded-xl text-xs font-black text-amber-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
              >
                <span>🔔</span>
                <span>Alerts</span>
              </Link>
              <Link
                href="/tuition"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
              >
                <span>🎓</span>
                <span>Culture</span>
              </Link>
            </nav>

            {/* Stats, Search & Action Area */}
            <div className="flex items-center gap-2 sm:gap-3">
              <HeaderSearchTrigger />
              <PwaInstallButton />

              <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] text-white/90 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{s.listings.toLocaleString()} Canada Listings</span>
              </div>

              <Link
                href="/alerts"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold bg-[#E00624] text-white hover:bg-[#B0041B] shadow-md transition hover:-translate-y-0.5 shrink-0"
              >
                <span>🔔</span> Get Alerts
              </Link>

              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
