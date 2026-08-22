import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    status: "paused",
    automationEnabled: false,
    message:
      "Cinema automation is disabled while the manual source-verification workflow is being established.",
    publicationRequirements: [
      "official source URL",
      "venue and city",
      "start and expiry dates",
      "last checked time",
      "reviewer identity",
      "publication status",
      "ticket or cinema link",
    ],
  });
}
