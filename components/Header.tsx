import Link from "next/link";
import { getSessionUser } from "@/lib/auth";
import { stats } from "@/lib/store";
import MobileNav from "./MobileNav";

export default async function Header() {
  const user = await getSessionUser();
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
            <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 group select-none shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-105 transition border-2 border-[#E00624]/20">
                <span className="text-lg sm:text-xl leading-none" aria-hidden>
                  🍁
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1">
                  <span className="font-outfit font-black text-lg sm:text-2xl tracking-tight leading-none text-white">
                    tamilpages<span className="text-[#E00624] bg-white px-1 py-0.5 rounded-md ml-0.5 text-[10px] sm:text-xs font-black">.ca</span>
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-white/80 font-semibold tracking-wider uppercase mt-0.5 hidden sm:block">
                  All-In-One Canada Tamil Portal
                </span>
              </div>
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
                href="/tuition"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
              >
                <span>🎓</span>
                <span>Culture</span>
              </Link>
            </nav>

            {/* Stats & Action Area */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] text-white/90 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{s.listings.toLocaleString()} Canada Listings</span>
              </div>

              <Link
                href="/add-business"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold bg-[#E00624] text-white hover:bg-[#B0041B] shadow-md transition hover:-translate-y-0.5 shrink-0"
              >
                <span>+</span> Add Free Listing
              </Link>

              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-xs font-bold text-white hover:text-white/80 px-2 py-1.5 rounded-lg bg-white/10"
                  >
                    Dashboard
                  </Link>
                  <form action="/api/auth/logout" method="post">
                    <button className="text-xs font-semibold text-white/80 hover:text-white px-2 py-1.5 cursor-pointer">
                      Sign out
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-xs font-bold text-white hover:text-white/80 px-2.5 py-1.5 rounded-lg hover:bg-white/10 transition"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="hidden xl:inline text-xs font-bold text-white/90 hover:text-white px-2.5 py-1.5 rounded-lg border border-white/25 hover:bg-white/10 transition"
                  >
                    Register
                  </Link>
                </>
              )}

              <MobileNav loggedIn={Boolean(user)} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
