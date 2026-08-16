import { NextResponse } from "next/server";
import { addReview } from "@/lib/leads";
import { getBusiness } from "@/lib/store";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const slug = String(body.slug || "").trim();
  const name = String(body.name || "").trim();
  const comment = String(body.comment || "").trim();
  const rating = Number(body.rating);
  if (!slug || !getBusiness(slug)) {
    return NextResponse.json({ error: "Listing not found." }, { status: 404 });
  }
  if (!name || comment.length < 10) {
    return NextResponse.json({ error: "Name and a short review (10+ characters) are required." }, { status: 400 });
  }
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Pick a rating from 1 to 5." }, { status: 400 });
  }
  const review = addReview({ slug, name, comment, rating: Math.round(rating) });
  return NextResponse.json({ ok: true, id: review.id });
}
