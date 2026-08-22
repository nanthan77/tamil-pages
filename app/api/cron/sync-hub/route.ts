import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    status: "paused",
    automationEnabled: false,
    message:
      "Automated community-content synchronization is disabled. News, event, temple and cinema items require source checks before publication or alert delivery.",
  });
}
