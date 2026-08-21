export const dynamic = "force-static";

import { NextResponse } from "next/server";
import { autocomplete } from "@/lib/store";

export async function GET() {
  const suggestions = autocomplete("", 8);
  return NextResponse.json({
    ok: true,
    query: "",
    ...suggestions,
  });
}
