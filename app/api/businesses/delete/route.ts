import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { deleteUserListing } from "@/lib/store";

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url), 303);
  }
  const form = await req.formData();
  const slug = String(form.get("slug") || "");
  deleteUserListing(slug, user.id);
  return NextResponse.redirect(new URL("/dashboard", req.url), 303);
}
