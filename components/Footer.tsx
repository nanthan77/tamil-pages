import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-[#E00624] bg-[#002D62] text-white">
      {/* Canadian Flag Bar */}
      <div className="flag-bar w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4 text-sm">
        {/* Brand & Digital Architecture Credit */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-lg shadow-sm border border-white/30">
              🍁
            </div>
            <span className="font-outfit font-black text-white text-xl tracking-tight">
              tamilpages<span className="text-[#E00624]">.ca</span>
            </span>
          </div>
          <p className="text-white/80 text-xs leading-relaxed">
            The Canadian Tamil community’s premier digital business, temples &amp; services directory. Find and call local restaurants, grocers, lawyers, clinics, tutors, temples, and trades directly with zero commission.
          </p>
          <p className="tamil text-[#E00624] bg-white/95 px-2.5 py-1 rounded-md text-xs font-black inline-block">
            கனடா தமிழ் வணிக அடைவு — 100% இலவசம்
          </p>

          <div className="pt-2 border-t border-white/10 text-xs text-white/90">
            <p className="font-semibold">
              Website Created By{" "}
              <a
                href="https://www.safenetcreations.com/canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-amber-300 hover:text-white underline transition"
              >
                SafeNet Creations Canada
              </a>
            </p>
          </div>
        </div>

        {/* Popular Cities */}
        <div>
          <h4 className="font-outfit font-bold text-white text-sm mb-3 flex items-center gap-1.5">
            <span>📍</span> Key Canadian Hubs
          </h4>
          <ul className="space-y-1.5 text-white/80 text-xs">
            <li>
              <Link href="/directory" className="hover:text-white font-bold text-white flex items-center gap-1">
                <span>🇨🇦</span> All Canada Directory
              </Link>
            </li>
            <li>
              <Link href="/temples" className="hover:text-amber-300 font-bold text-amber-300 flex items-center gap-1">
                <span>🛕</span> Canadian Tamil Temples (City-Wise)
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Scarborough" className="hover:text-white">
                Scarborough, ON (GTA Heart)
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Toronto" className="hover:text-white">
                Toronto &amp; North York, ON
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Markham" className="hover:text-white">
                Markham, ON
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Brampton" className="hover:text-white">
                Brampton &amp; Mississauga, ON
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Montreal" className="hover:text-white">
                Montreal, QC (Côte-des-Neiges &amp; Parc-Ex)
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Vancouver" className="hover:text-white">
                Vancouver &amp; Surrey, BC
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Calgary" className="hover:text-white">
                Calgary &amp; Edmonton, AB
              </Link>
            </li>
            <li>
              <Link href="/directory?city=Ottawa" className="hover:text-white">
                Ottawa &amp; NCR, ON
              </Link>
            </li>
          </ul>
        </div>

        {/* For Businesses */}
        <div>
          <h4 className="font-outfit font-bold text-white text-sm mb-3 flex items-center gap-1.5">
            <span>🏬</span> For Business Owners
          </h4>
          <ul className="space-y-2 text-white/80 text-xs">
            <li>
              <Link
                href="/register"
                className="inline-flex items-center gap-1 font-bold text-white bg-[#E00624] px-3 py-1 rounded-lg shadow-sm hover:bg-[#B0041B] transition"
              >
                <span>+</span> Create Free Business Listing
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white block pt-1">
                Business Owner Sign In
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-white block">
                Manage My Listings
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white block">
                Pricing — listing free, ads paid
              </Link>
            </li>
            <li>
              <Link href="/advertise" className="hover:text-white block">
                Advertise / Spotlight
              </Link>
            </li>
            <li>
              <Link href="/for-business" className="hover:text-white block">
                All paid products
              </Link>
            </li>
            <li>
              <Link href="/boost" className="hover:text-white block">
                7-day Boost $49
              </Link>
            </li>
            <li>
              <Link href="/weddings" className="hover:text-white block">
                Wedding vendor pack
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-white block">
                Google sitemap
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white block">
                About tamilpages.ca
              </Link>
            </li>
          </ul>
        </div>

        {/* Provinces & Coverage */}
        <div>
          <h4 className="font-outfit font-bold text-white text-sm mb-3 flex items-center gap-1.5">
            <span>🍁</span> Provincial Coverage
          </h4>
          <div className="flex flex-wrap gap-1.5 text-xs text-white/80 mb-3">
            <Link href="/directory?province=ON" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20">Ontario</Link>
            <Link href="/directory?province=BC" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20">British Columbia</Link>
            <Link href="/directory?province=QC" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20">Quebec</Link>
            <Link href="/directory?province=AB" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20">Alberta</Link>
            <Link href="/directory?province=MB" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20">Manitoba</Link>
            <Link href="/directory?province=SK" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20">Saskatchewan</Link>
            <Link href="/directory?province=NS" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20">Nova Scotia</Link>
            <Link href="/directory?province=NL" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20">Newfoundland</Link>
          </div>
          <p className="text-white/60 text-[11px] leading-relaxed">
            Free independent directory serving the Canadian Tamil diaspora.
          </p>
        </div>
      </div>

      <div className="bg-[#0B1D3A] py-4 text-center text-xs text-white/70 border-t border-white/10 space-y-1">
        <div>
          © {new Date().getFullYear()} tamilpages.ca · The Canada Tamil Community Directory · Built with ❤️ for Canadian Tamils
        </div>
        <div className="text-[11px] text-white/60">
          Website Created &amp; Powered by{" "}
          <a
            href="https://www.safenetcreations.com/canada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 font-bold hover:underline"
          >
            SafeNet Creations
          </a>
        </div>
      </div>
    </footer>
  );
}
