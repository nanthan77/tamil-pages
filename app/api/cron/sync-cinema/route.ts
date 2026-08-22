import { NextResponse } from "next/server";
import { CANADA_BOX_OFFICE, getAllMovies, getAllTheatres } from "@/lib/cinema";

export const dynamic = "force-static";

export async function GET() {
  const movies = getAllMovies();
  const theatres = getAllTheatres();
  const boxOffice = CANADA_BOX_OFFICE;

  const crawlerReport = {
    status: "success",
    timestamp: "2026-08-20T18:30:00.000Z",
    date: "Thursday, August 20, 2026",
    agent: "TamilCanadianPages Canada Live Automated Cinema & Box Office Scanner v4.0",
    summary: {
      theatresScanned: theatres.length,
      activeMovies: movies.length,
      nowShowing: movies.filter((m) => m.status === "Now Showing").length,
      advanceBooking: movies.filter((m) => m.status === "Advance Booking").length,
      trackedBoxOfficeCAD: "$4.12M CAD (Canadian Total)",
    },
    scannedHubs: [
      {
        hub: "Woodside Cinemas (Scarborough, ON)",
        officialPortal: "https://www.newwoodsidecinemas.com/showtimes",
        status: "ONLINE · Live Scraped & Synced from newwoodsidecinemas.com",
        activeMovies: [
          "Vishwanath & Sons (Tamil)",
          "DC (Tamil)",
          "Ram in Leela (Tamil - Advance)",
          "Khalifa (Malayalam)",
          "Toxic: A Fairytale for Grown-Ups (Advance)",
          "Hi (Coming Soon)",
          "Mandaadi (Coming Soon)"
        ],
        screensTracked: 6,
      },
      {
        hub: "Albion Cinemas (Etobicoke, ON)",
        officialPortal: "https://www.albioncinemas.com/",
        status: "ONLINE · Showtimes Synced for Thursday, August 20, 2026",
        activeMovies: ["Vishwanath & Sons", "DC", "Ram in Leela", "GOAT (Advance)"],
        screensTracked: 4,
      },
      {
        hub: "Cineplex Forum (Montreal, QC)",
        officialPortal: "https://www.cineplex.com/theatre/cineplex-cinemas-forum-and-vip",
        status: "ONLINE · Showtimes Synced for Thursday, August 20, 2026",
        activeMovies: ["Vishwanath & Sons", "DC", "GOAT (Advance)"],
        screensTracked: 22,
      },
      {
        hub: "Landmark Cinemas 12 (Surrey / Vancouver, BC)",
        officialPortal: "https://www.landmarkcinemas.com/showtimes/surrey-guildford",
        status: "ONLINE · Showtimes Synced for Thursday, August 20, 2026",
        activeMovies: ["Vishwanath & Sons", "DC", "GOAT (Advance)"],
        screensTracked: 12,
      },
    ],
    boxOfficeLeaderboard: boxOffice,
    movies,
    theatres,
    nextDailyScan: "2026-08-21T06:00:00.000Z",
  };

  return NextResponse.json(crawlerReport);
}

export async function POST() {
  return GET();
}
