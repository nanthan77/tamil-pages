import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canadian Tamil Community Event Entries",
  description: "Browse community-submitted event entries and confirm all time-sensitive details with the organizer or venue.",
  alternates: { canonical: "/events" },
  openGraph: { url: "/events" },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
