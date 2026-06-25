import { NextResponse } from "next/server";
import { buildPackZip } from "@/lib/build-pack-zip";

export const runtime = "nodejs";

export async function GET() {
  try {
    const buf = await buildPackZip("gtm");
    return NextResponse.json({ success: true, zip_bytes: buf.length });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : null,
    });
  }
}
