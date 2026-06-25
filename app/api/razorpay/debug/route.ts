import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Temporary diagnostic endpoint — delete after confirming env vars are loaded.
export async function GET() {
  return NextResponse.json({
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID ? "SET" : "MISSING",
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET ? "SET" : "MISSING",
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ? "SET" : "MISSING",
    RAZORPAY_AMOUNT_PAISE: process.env.RAZORPAY_AMOUNT_PAISE ?? "MISSING (will use 290000)",
  });
}
