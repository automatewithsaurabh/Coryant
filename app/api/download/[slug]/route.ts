import { NextRequest, NextResponse } from "next/server";
import { buildPackZip, isValidPackSlug } from "@/lib/build-pack-zip";
import { rateLimit } from "@/lib/rate-limit";
import { createClient, createAdminClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!rateLimit(ip, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  // Require authentication and a purchase record before serving any zip.
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  const admin = createAdminClient();
  const { data: purchase } = await admin
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("pack_slug", slug)
    .limit(1)
    .maybeSingle();
  if (!purchase) {
    return NextResponse.json({ error: "Purchase required" }, { status: 403 });
  }

  if (!isValidPackSlug(slug)) {
    return NextResponse.json({ error: "Pack not found" }, { status: 404 });
  }

  try {
    const zipBuffer = await buildPackZip(slug);

    return new NextResponse(new Uint8Array(zipBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="coryant-${slug}.zip"`,
        "Content-Length": zipBuffer.length.toString(),
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(`Failed to build zip for pack "${slug}":`, err);
    return NextResponse.json(
      { error: "Failed to generate pack download" },
      { status: 500 }
    );
  }
}
