"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import NewsSubmissionModal from "@/components/NewsSubmissionModal";
import { getAllNews, getNewsByCategory, searchNews, type NewsCategory } from "@/lib/news";

export default function NewsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm font-bold text-[#002D62]">Loading Community News Feed…</div>}>
      <NewsContent />
    </Suspense>
  );
}

function NewsContent() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("category") || "";
  const q = searchParams.get("q") || "";

  let articles = getAllNews();
  if (cat) {
    articles = getNewsByCategory(cat as NewsCategory);
  }
  if (q) {
    articles = searchNews(q);
  }

  const allArticles = getAllNews();
  const categories: { label: string; cat: NewsCategory; icon: string }[] = [
    { label: "All News", cat: "Community", icon: "🇨🇦" },
    { label: "Community", cat: "Community", icon: "🍁" },
    { label: "Immigration & Settlement", cat: "Immigration & Settlement", icon: "🛂" },
    { label: "Culture & Heritage", cat: "Culture & Heritage", icon: "🪔" },
    { label: "Business & Economy", cat: "Business & Economy", icon: "📈" },
    { label: "Youth & Education", cat: "Youth & Education", icon: "🎓" },
    { label: "Sports & Health", cat: "Sports & Health", icon: "🏏" },
  ];

  const leadStory = articles[0];
  const regularStories = articles.slice(1);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#083777] to-[#0B1D3A] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-card-hover relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[#E00624]/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
            <span>📰</span>
            <span>Canadian Tamil Community Daily News Feed</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Canadian Tamil News &amp; <span className="text-[#E00624] bg-white px-2 py-0.5 rounded-xl">Dispatches</span>
          </h1>

          <p className="tamil text-lg sm:text-xl font-bold text-white/95">
            கனடா வாழ் தமிழ் மக்களின் அன்றாட செய்திகள், நிகழ்வுகள் மற்றும் அறிவித்தல்கள்.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Daily verified coverage of Tamil Heritage Month in Canada, business achievements, youth initiatives, university updates, immigration guidance, and community sports.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <NewsSubmissionModal />
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#64748B] px-1">
          <span className="flex items-center gap-1.5 text-[#002D62]">
            <span>🏷️</span> Filter News by Category
          </span>
          <span className="text-[#E00624]">{allArticles.length} Stories Published</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/news"
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
              !cat && !q
                ? "bg-[#002D62] text-white shadow-sm"
                : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
            }`}
          >
            🇨🇦 All Canada News ({allArticles.length})
          </Link>
          {categories.slice(1).map((c) => {
            const isSelected = cat.toLowerCase() === c.cat.toLowerCase();
            return (
              <Link
                key={c.cat}
                href={`/news?category=${encodeURIComponent(c.cat)}`}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#E00624] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:border-[#002D62] hover:text-[#002D62]"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Lead Story */}
      {leadStory && (
        <article className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-10 space-y-6 shadow-card hover:border-[#002D62] transition overflow-hidden relative group">
          <div className="h-2 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3.5 py-1 rounded-full bg-[#E00624] text-white font-black uppercase tracking-wider text-[10px]">
                ★ Lead Story · {leadStory.category}
              </span>
              <span className="text-[#64748B] font-semibold">
                📍 {leadStory.city}, {leadStory.province}
              </span>
              <span className="text-[#64748B]">·</span>
              <span className="text-[#64748B] font-semibold">
                {new Date(leadStory.publishedAt).toLocaleDateString("en-CA", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h2 className="font-outfit font-extrabold text-2xl sm:text-4xl text-[#0F172A] group-hover:text-[#002D62] transition leading-tight">
              <Link href={`/news/${leadStory.slug}`}>{leadStory.title}</Link>
            </h2>

            {leadStory.tamilTitle && (
              <p className="tamil text-base sm:text-lg font-bold text-[#E00624]">
                {leadStory.tamilTitle}
              </p>
            )}

            <p className="text-[#475569] text-sm sm:text-base leading-relaxed line-clamp-3">
              {leadStory.summary}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#64748B]">By {leadStory.author}</span>
              <Link
                href={`/news/${leadStory.slug}`}
                className="btn-primary rounded-xl px-5 py-2 text-xs font-black shadow flex items-center gap-1.5"
              >
                <span>Read Full Story</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Regular Stories Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-outfit font-extrabold text-xl text-[#0F172A]">
            More Canadian Tamil Stories ({regularStories.length})
          </h3>
          {(cat || q) && (
            <Link href="/news" className="text-xs font-bold text-[#E00624] hover:underline">
              ✕ View All Stories
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularStories.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-[2rem] border border-[#CBD5E1] hover:border-[#002D62] p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black uppercase text-[10px] tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-[#64748B] text-xs font-medium">
                    🍁 {article.city}
                  </span>
                </div>

                <h4 className="font-outfit font-extrabold text-lg text-[#0F172A] group-hover:text-[#002D62] transition leading-snug">
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h4>

                {article.tamilTitle && (
                  <p className="tamil text-xs font-bold text-[#E00624]">
                    {article.tamilTitle}
                  </p>
                )}

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span>{article.readTime}</span>
                <Link
                  href={`/news/${article.slug}`}
                  className="font-bold text-[#E00624] hover:underline flex items-center gap-1"
                >
                  <span>Read Story</span>
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
          Canadian Tamil Community News Network developed by{" "}
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
