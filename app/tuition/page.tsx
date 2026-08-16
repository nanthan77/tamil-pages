import Link from "next/link";
import {
  getAllCulturalSchools,
  searchCulturalSchools,
  type CulturalCategory,
} from "@/lib/culture";
import { mapsLink, telLink } from "@/lib/utils";

export const metadata = {
  title: "Tamil Tuition, Language Schools, Dance & Music Academies in Canada",
  description:
    "Explore 30+ Tamil language schools (Thamil Cholai, TDSB/PDSB High School Credits), Bharatanatyam dance academies, Carnatic vocal, Miruthangam, Veena, and Violin institutes across Toronto, Scarborough, Markham, Brampton, Mississauga, Montreal, Surrey, Vancouver, Calgary, and Edmonton.",
};

export default async function TuitionPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; category?: string; q?: string }>;
}) {
  const sp = await searchParams;
  const city = sp.city || "";
  const category = sp.category || "";
  const q = sp.q || "";

  let schools = getAllCulturalSchools();

  if (q) {
    schools = searchCulturalSchools(q);
  }
  if (city) {
    schools = schools.filter((s) => s.city.toLowerCase() === city.toLowerCase());
  }
  if (category) {
    schools = schools.filter((s) => s.category.toLowerCase() === category.toLowerCase());
  }

  const allSchools = getAllCulturalSchools();
  const categoryCounts = allSchools.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories: { label: string; cat: CulturalCategory; icon: string }[] = [
    { label: "Tamil Language Schools", cat: "Tamil Language School", icon: "📖" },
    { label: "Bharatanatyam Dance", cat: "Bharatanatyam Dance", icon: "💃" },
    { label: "Carnatic Vocal & Music", cat: "Carnatic Vocal & Music", icon: "🎵" },
    { label: "Miruthangam & Percussion", cat: "Miruthangam & Percussion", icon: "🥁" },
    { label: "Veena & Instrumental", cat: "Veena & Instrumental", icon: "🪕" },
    { label: "Violin & Flute", cat: "Violin & Flute", icon: "🎻" },
    { label: "High School Credit Programs", cat: "School Board Heritage Program", icon: "🏫" },
  ];

  const cities = ["Scarborough", "Markham", "Toronto", "Brampton", "Mississauga", "Montreal", "Surrey", "Calgary", "Edmonton", "Winnipeg", "Halifax"];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[#E00624]/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
            <span>🎓</span>
            <span>Canadian Tamil Education &amp; Classical Arts Directory</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Tamil Language Schools &amp; <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">Fine Arts</span> in Canada
          </h1>

          <p className="tamil text-lg sm:text-xl font-bold text-white/95">
            கனடாவில் தமிழ் மொழிப் பள்ளிகள், பரதநாட்டியம், கர்நாடக சங்கீதம், மிருதங்கம் மற்றும் வீணைக் கல்லூரிகள்.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Connect your children and youth with accredited Tamil language programs, Ontario high school credit courses, classical Bharatanatyam dance, Carnatic vocal, Miruthangam percussion, and Veena instrumental lessons.
          </p>

          {/* Search Form */}
          <form action="/tuition" method="get" className="pt-2 flex flex-col sm:flex-row gap-2 max-w-xl">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search by school name, dance style, instrument, or city…"
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white text-[#0F172A] text-xs font-medium placeholder-gray-400 outline-none shadow-md"
              />
            </div>
            <button
              type="submit"
              className="btn-primary rounded-2xl px-6 py-3 text-xs font-black shrink-0 shadow-md cursor-pointer"
            >
              Search Classes
            </button>
          </form>
        </div>
      </div>

      {/* Discipline Category Pills */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-5 shadow-sm space-y-4">
        <div className="space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62] block">
            Filter by Discipline &amp; Art Form:
          </span>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/tuition"
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                !category && !city && !q
                  ? "bg-[#002D62] text-white shadow-xs"
                  : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62]"
              }`}
            >
              All Disciplines ({allSchools.length})
            </Link>
            {categories.map((c) => {
              const isSelected = category.toLowerCase() === c.cat.toLowerCase();
              const count = categoryCounts[c.cat] || 0;
              return (
                <Link
                  key={c.cat}
                  href={`/tuition?category=${encodeURIComponent(c.cat)}`}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#E00624] text-white shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
                  }`}
                >
                  <span>{c.icon}</span>
                  <span>{c.label}</span>
                  <span className="text-[10px] opacity-75">({count})</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="border-t border-[#E2E8F0] pt-3 space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] block">
            Filter by Canadian City:
          </span>
          <div className="flex flex-wrap gap-1.5">
            <Link
              href="/tuition"
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                !city
                  ? "bg-[#002D62] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
              }`}
            >
              🇨🇦 All Canada
            </Link>
            {cities.map((cityName) => {
              const isSelected = city.toLowerCase() === cityName.toLowerCase();
              return (
                <Link
                  key={cityName}
                  href={`/tuition?city=${encodeURIComponent(cityName)}`}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 ${
                    isSelected
                      ? "bg-[#E00624] text-white"
                      : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
                  }`}
                >
                  <span>📍 {cityName}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Schools Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-outfit font-extrabold text-2xl text-[#0F172A]">
            {category
              ? `${category} Classes`
              : city
              ? `${city} Academies`
              : q
              ? `Results for "${q}"`
              : "All Canadian Tamil Schools & Fine Arts Academies"}{" "}
            ({schools.length})
          </h2>
          {(city || category || q) && (
            <Link href="/tuition" className="text-xs font-bold text-[#E00624] hover:underline">
              ✕ Clear Filters
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <article
              key={school.slug}
              className="bg-white rounded-[2rem] border border-[#CBD5E1] hover:border-[#002D62] p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black uppercase text-[10px] tracking-wider">
                    {school.category}
                  </span>
                  <span className="text-[#334155] font-bold text-xs bg-[#F8FAFC] px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                    🍁 {school.city}, {school.province}
                  </span>
                </div>

                <h3 className="font-outfit font-extrabold text-xl text-[#0F172A] group-hover:text-[#002D62] transition leading-snug">
                  {school.name}
                </h3>

                {school.tamilName && (
                  <p className="tamil text-sm font-bold text-[#E00624]">
                    {school.tamilName}
                  </p>
                )}

                {/* Discipline Tag */}
                <div className="text-[11px] font-bold text-[#002D62] bg-[#F0F7FF] px-3 py-1 rounded-xl border border-[#CCE3F8] inline-block">
                  🎵 {school.discipline}
                </div>

                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#CBD5E1] space-y-1 text-xs text-[#64748B]">
                  <p>
                    <strong className="text-[#0F172A]">Ages:</strong> {school.ageGroups}
                  </p>
                  <p>
                    <strong className="text-[#0F172A]">Curriculum:</strong> {school.curriculum}
                  </p>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {school.description}
                </p>

                <p className="text-xs text-[#64748B] flex items-start gap-1">
                  <span>📍</span>
                  <span>{school.address}</span>
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                <a
                  href={telLink(school.phone)}
                  className="btn-primary rounded-xl px-4 py-2 text-xs font-bold flex items-center gap-1 shadow-xs"
                >
                  <span>📞</span>
                  <span>Call ({school.phone})</span>
                </a>
                <a
                  href={mapsLink(school.address, school.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#002D62] hover:bg-white text-xs font-bold"
                  title="Google Maps"
                >
                  🗺️
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SafeNet Creations Partner Link Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center shadow-xs">
        <p className="text-xs text-[#64748B]">
          Canadian Tamil Educational &amp; Fine Arts Directory maintained by{" "}
          <a
            href="https://www.safenetcreations.com/canada/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-[#002D62] hover:text-[#E00624] underline transition"
          >
            SafeNet Creations Canada
          </a>
        </p>
      </div>
    </main>
  );
}
