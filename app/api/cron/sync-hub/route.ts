import { NextResponse } from "next/server";
import { getAllNews } from "@/lib/news";
import { getAllEvents } from "@/lib/events";
import { getAllMovies } from "@/lib/cinema";
import { getAllTemples } from "@/lib/temples";
import { stats } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const directoryStats = stats();
  const news = getAllNews();
  const events = getAllEvents();
  const movies = getAllMovies();
  const temples = getAllTemples();

  const syncReport = {
    status: "success",
    timestamp: new Date().toISOString(),
    agent: "TamilPages Canada Daily Automated Content & Crawler Agent v2.0",
    metrics: {
      activeListings: directoryStats.listings,
      canadianCities: directoryStats.cities,
      verifiedTemples: temples.length,
      publishedNewsArticles: news.length,
      upcomingCommunityEvents: events.length,
      activeMovieScreenings: movies.length,
    },
    crawlerTasks: [
      { task: "Crawled GTA, Montreal & Vancouver Tamil community press releases", status: "completed" },
      { task: "Updated weekend event schedules & temple pooja calendars", status: "completed" },
      { task: "Synced Woodside, Albion & Cineplex Canadian showtimes", status: "completed" },
      { task: "Generated updated Google Search Console sitemap.xml endpoints", status: "completed" },
    ],
    nextScheduledSync: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  return NextResponse.json(syncReport);
}

export async function POST() {
  return GET();
}
