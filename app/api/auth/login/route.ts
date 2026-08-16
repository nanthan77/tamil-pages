import { NextResponse } from "next/server";
import { authenticate, setSession } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = String(body.email || "");
  const password = String(body.password || "");
  const user = authenticate(email, password);
  if (!user) {
    return NextResponse.json({ error: "Email or password is incorrect." }, { status: 401 });
  }
  await setSession(user.id);
  return NextResponse.json({ ok: true });
}
