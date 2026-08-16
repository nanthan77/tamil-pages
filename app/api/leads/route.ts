import { NextResponse } from "next/server";
import { addLead } from "@/lib/leads";
import type { LeadKind } from "@/lib/types";

const KINDS = new Set<LeadKind>([
  "featured",
  "spotlight",
  "advertise",
  "claim",
  "boost",
  "deal",
  "job",
  "event",
  "wedding",
  "quote",
  "newsletter",
  "exclusive",
  "homepage",
]);

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const kind = String(body.kind || "");
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  if (!KINDS.has(kind as LeadKind)) {
    return NextResponse.json({ error: "Unknown request type." }, { status: 400 });
  }
  if (!name || !email.includes("@")) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 400 });
  }
  const lead = addLead({
    kind: kind as LeadKind,
    name,
    email,
    phone: String(body.phone || "").trim(),
    business: String(body.business || "").trim(),
    slug: String(body.slug || "").trim(),
    message: String(body.message || "").trim(),
  });
  return NextResponse.json({ ok: true, id: lead.id });
}
