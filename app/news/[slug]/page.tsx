import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNews, getNewsBySlug } from "@/lib/news";

export async function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  const title = `${article.title} · Community Story (Source Check Pending)`;
  const description =
    "Community-submitted story awaiting source checks. Confirm important claims with a relevant primary source.";
  return {
    title,
    description,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/news/${article.slug}`,
      title,
      description,
      siteName: "TamilPages Canada",
      images: ["/og.png"],
    },
    robots: { index: false, follow: true },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const related = getAllNews()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
        <Link href="/" className="text-[#002D62] hover:text-[#E00624]">
          🇨🇦 Home
        </Link>
        <span>/</span>
        <Link href="/news" className="text-[#002D62] hover:text-[#E00624]">
          📰 News Feed
        </Link>
        <span>/</span>
        <Link href={`/news?category=${encodeURIComponent(article.category)}`} className="text-[#002D62] hover:text-[#E00624]">
          {article.category}
        </Link>
        <span>/</span>
        <span className="text-[#0F172A] truncate max-w-xs">{article.title}</span>
      </nav>

      <aside
        role="note"
        className="rounded-3xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950 shadow-sm"
      >
        <strong>Source check pending:</strong> this community story has not yet been independently
        verified. Confirm names, dates, quotations, guidance, and other important claims with a
        relevant primary source before relying on them.
      </aside>

      {/* Article Container */}
      <article className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-12 space-y-8 shadow-card relative overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3.5 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-black uppercase tracking-wider text-[10px]">
              {article.category}
            </span>
            <span className="text-[#64748B] font-semibold">
              📍 {article.city}, {article.province}
            </span>
            <span className="text-[#64748B]">·</span>
            <span className="text-[#64748B] font-semibold">
              {new Date(article.publishedAt).toLocaleDateString("en-CA", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-[#64748B]">·</span>
            <span className="text-[#64748B]">{article.readTime}</span>
          </div>

          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl text-[#0F172A] leading-tight">
            {article.title}
          </h1>

          {article.tamilTitle && (
            <p className="tamil text-lg sm:text-2xl font-bold text-[#E00624] leading-snug">
              {article.tamilTitle}
            </p>
          )}

          <div className="flex items-center gap-3 pt-2 text-xs text-[#64748B] border-y border-[#E2E8F0] py-3">
            <div className="w-8 h-8 rounded-full bg-[#002D62] text-white flex items-center justify-center font-bold text-xs">
              🍁
            </div>
            <div>
              <p className="font-bold text-[#0F172A]">{article.author}</p>
              <p className="text-[11px] text-[#64748B]">TamilCanadianPages.ca community story index</p>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-[#F8FAFC] rounded-2xl border-l-4 border-[#002D62] p-5 text-sm sm:text-base font-semibold text-[#334155] leading-relaxed">
          {article.summary}
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-5 text-[#334155] text-sm sm:text-base leading-relaxed">
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="border-t border-[#E2E8F0] pt-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-bold text-[#64748B]">Tags:</span>
          {article.tags.map((tag) => (
            <Link
              key={tag}
              href={`/news?q=${encodeURIComponent(tag)}`}
              className="px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] hover:bg-[#002D62] hover:text-white transition font-medium"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </article>

      {/* Related News */}
      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-outfit font-extrabold text-xl text-[#0F172A]">
            Related Community Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((a) => (
              <div
                key={a.slug}
                className="bg-white rounded-2xl border border-[#CBD5E1] p-5 space-y-2 hover:border-[#002D62] transition shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-[#002D62]">
                    {a.category}
                  </span>
                  <h3 className="font-outfit font-bold text-sm text-[#0F172A] hover:text-[#002D62]">
                    <Link href={`/news/${a.slug}`}>{a.title}</Link>
                  </h3>
                </div>
                <Link
                  href={`/news/${a.slug}`}
                  className="text-xs font-bold text-[#E00624] hover:underline pt-2 block"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SafeNet Creations link banner */}
      <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 text-center space-y-1 shadow-xs">
        <p className="text-xs text-[#64748B]">
          Digital Community News System powered by{" "}
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
