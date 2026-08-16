import { NextResponse } from "next/server";
import { createUser, setSession } from "@/lib/auth";
import { findUserByEmail } from "@/lib/store";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();
  const password = String(body.password || "");
  if (!name || !email || !phone || password.length < 8) {
    return NextResponse.json({ error: "Fill every field. Password must be 8+ characters." }, { status: 400 });
  }
  if (!email.includes("@")) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (findUserByEmail(email)) {
    return NextResponse.json({ error: "That email is already registered. Sign in instead." }, { status: 409 });
  }
  const user = createUser({ name, email, phone, password });
  await setSession(user.id);
  return NextResponse.json({ ok: true, id: user.id });
}
