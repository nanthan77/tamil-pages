import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { claimBusiness } from "@/lib/store";

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in to claim this listing." }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const slug = String(body.slug || "").trim();
  const claimed = claimBusiness(slug, user.id);
  if (!claimed) {
    return NextResponse.json({ error: "This listing is already claimed or missing." }, { status: 409 });
  }
  return NextResponse.json({ ok: true, slug: claimed.slug });
}
