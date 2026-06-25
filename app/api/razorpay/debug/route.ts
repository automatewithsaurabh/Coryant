import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const keyId = process.env.RAZORPAY_KEY_ID ?? "";
  const keySecret = process.env.RAZORPAY_KEY_SECRET ?? "";

  const auth = "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");

  let razorpayResponse: unknown = null;
  let razorpayStatus: number | null = null;

  try {
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 100, currency: "INR", receipt: "debug-test" }),
    });
    razorpayStatus = res.status;
    razorpayResponse = await res.json();
  } catch (e) {
    razorpayResponse = String(e);
  }

  return NextResponse.json({
    key_id_prefix: keyId.slice(0, 12) || "MISSING",
    key_secret_length: keySecret.length || "MISSING",
    razorpay_http_status: razorpayStatus,
    razorpay_response: razorpayResponse,
  });
}
