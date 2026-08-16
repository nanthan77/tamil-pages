import Link from "next/link";
import NewsSubmissionModal from "@/components/NewsSubmissionModal";
import { getAllNews, getNewsByCategory, searchNews } from "@/lib/news";

export const metadata = {
  title: "Canadian Tamil Community News · Daily Diaspora Updates & Reports",
  description:
    "Daily news, settlement updates, Tamil Heritage Month reports, business achievements, youth tech, and community announcements across Canada — Toronto, Montreal, Vancouver, Calgary, and Ottawa.",
};

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const sp = await searchParams;
  const category = sp.category || "";
  const q = sp.q || "";

  let articles = getAllNews();
  if (category) {
    articles = getNewsByCategory(category);
  } else if (q) {
    articles = searchNews(q);
  }

  const categories = [
    "Community",
    "Immigration & Settlement",
    "Culture & Heritage",
    "Business & Economy",
    "Youth & Education",
    "Sports & Health",
  ];

  const featuredStory = articles.find((a) => a.featured) || articles[0];
  const regularStories = articles.filter((a) => a.id !== featuredStory?.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[#E00624]/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
            <span>📰</span>
            <span>Daily Canadian Tamil News Feed</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Canadian Tamil <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">News</span> &amp; Diaspora Stories
          </h1>

          <p className="tamil text-lg sm:text-xl font-bold text-white/95">
            கனடா வாழ் தமிழ் சமூகத்தின் செய்திகள், நிகழ்வுகள் மற்றும் அறிவிப்புகள்.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Daily verified coverage of Canadian Tamil community achievements, immigration &amp; settlement updates, cultural festivals, youth tech initiatives, and business spotlights.
          </p>

          <div className="pt-2">
            <NewsSubmissionModal />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-2">
        <Link
          href="/news"
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
            !category
              ? "bg-[#002D62] text-white shadow-sm"
              : "bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
          }`}
        >
          All News ({getAllNews().length})
        </Link>
        {categories.map((cat) => {
          const isSelected = category.toLowerCase() === cat.toLowerCase();
          return (
            <Link
              key={cat}
              href={`/news?category=${encodeURIComponent(cat)}`}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
                isSelected
                  ? "bg-[#E00624] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
              }`}
            >
              {cat}
            </Link>
          );
        })}
      </div>

      {/* Featured Lead Story */}
      {featuredStory && (
        <article className="bg-white rounded-[2.5rem] border border-[#CBD5E1] hover:border-[#002D62] p-6 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group">
          <div className="h-2 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

          <div className="grid lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-red-50 text-[#E00624] border border-red-200 font-black uppercase text-[10px] tracking-wider">
                  ★ Lead Story
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-bold">
                  {featuredStory.category}
                </span>
                <span className="text-[#64748B] font-medium">
                  📍 {featuredStory.city}, {featuredStory.province} · {featuredStory.readTime}
                </span>
              </div>

              <h2 className="font-outfit font-extrabold text-2xl sm:text-4xl text-[#0F172A] group-hover:text-[#002D62] transition leading-tight">
                <Link href={`/news/${featuredStory.slug}`}>{featuredStory.title}</Link>
              </h2>

              {featuredStory.tamilTitle && (
                <p className="tamil text-sm sm:text-base font-bold text-[#E00624]">
                  {featuredStory.tamilTitle}
                </p>
              )}

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed line-clamp-3">
                {featuredStory.summary}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#64748B]">
                  By {featuredStory.author}
                </span>
                <Link
                  href={`/news/${featuredStory.slug}`}
                  className="btn-primary rounded-xl px-5 py-2 text-xs font-black shadow-xs flex items-center gap-1.5"
                >
                  <span>Read Full Story</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-[#002D62] to-[#0B1D3A] rounded-3xl p-6 text-white text-center space-y-3 flex flex-col justify-center min-h-[220px]">
              <span className="text-4xl">🍁</span>
              <p className="font-outfit font-extrabold text-lg text-white">Canadian Tamil Diaspora</p>
              <p className="text-xs text-white/80">Daily News &amp; Community Dispatch</p>
            </div>
          </div>
        </article>
      )}

      {/* Grid of Regular Stories */}
      <div className="space-y-4">
        <h2 className="font-outfit font-extrabold text-xl sm:text-2xl text-[#0F172A]">
          More News &amp; Community Reports ({regularStories.length})
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularStories.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-3xl border border-[#CBD5E1] hover:border-[#002D62] p-6 shadow-sm hover:shadow-card transition flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black text-[10px] uppercase">
                    {article.category}
                  </span>
                  <span className="text-[#64748B] text-[11px]">
                    📍 {article.city} · {article.readTime}
                  </span>
                </div>

                <h3 className="font-outfit font-extrabold text-lg text-[#0F172A] group-hover:text-[#002D62] transition leading-snug">
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h3>

                {article.tamilTitle && (
                  <p className="tamil text-xs font-bold text-[#E00624] line-clamp-1">
                    {article.tamilTitle}
                  </p>
                )}

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[11px] text-[#64748B]">
                  {new Date(article.publishedAt).toLocaleDateString("en-CA", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-xs font-black text-[#002D62] hover:text-[#E00624] transition flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SafeNet Creations Partner Link Banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center shadow-xs">
        <p className="text-xs text-[#64748B]">
          Digital News Architecture &amp; Content Feeds maintained by{" "}
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
