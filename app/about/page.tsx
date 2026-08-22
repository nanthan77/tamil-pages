import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-14 space-y-8">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-8 sm:p-12 space-y-6 shadow-card relative overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider">
          <span>🍁</span> About the Canadian Project
        </div>

        <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
          About tamilcanadianpages.ca
        </h1>

        <p className="tamil text-[#B0041B] font-semibold text-lg">
          கனடா வாழ் தமிழ் சமூகத்திற்கான இலவச வணிக மற்றும் தொழில் வழிகாட்டி.
        </p>

        <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed">
          <p>
            <strong>tamilcanadianpages.ca</strong> is the digital Yellow-Pages-style community directory built specifically for the Tamil diaspora living across Canada.
          </p>
          <p>
            Our nationwide directory spans the vibrant Tamil cultural and commercial hubs of <strong>Scarborough, Markham, Toronto, Brampton, Mississauga, Ajax, Pickering, and Whitby</strong> in Ontario, to <strong>Montreal and Laval</strong> in Quebec, <strong>Vancouver, Surrey, and Burnaby</strong> in British Columbia, <strong>Calgary and Edmonton</strong> in Alberta, <strong>Winnipeg</strong> in Manitoba, and <strong>Halifax</strong> in Atlantic Canada.
          </p>
          <p>
            The platform design pays homage to the Canadian identity with classic Canadian Flag Crimson Red and Royal Navy Blue accents, embodying our strong presence as proud Tamil Canadians.
          </p>
          <p>
            Every listing provides direct contact information, telephone numbers, WhatsApp chat links, and Google Maps directions with <strong>0% middleman fees and 100% free vendor registration</strong>.
          </p>
        </div>

        <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-4">
          <Link href="/directory" className="btn-navy rounded-xl px-5 py-2.5 text-xs font-bold">
            Explore All Listings →
          </Link>
          <Link href="/register" className="btn-primary rounded-xl px-5 py-2.5 text-xs font-bold">
            + Post Your Business Free
          </Link>
        </div>
      </div>
    </main>
  );
}
