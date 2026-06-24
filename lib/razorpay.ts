import Razorpay from "razorpay";

let _razorpay: Razorpay | null = null;

export function getRazorpay(): Razorpay {
  if (_razorpay) return _razorpay;
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) {
    throw new Error("RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set");
  }
  _razorpay = new Razorpay({ key_id, key_secret });
  return _razorpay;
}

/** Pack price in paise (default ₹2,900 ≈ $29 USD). Override via RAZORPAY_AMOUNT_PAISE. */
export function getPackPricePaise(): number {
  return parseInt(process.env.RAZORPAY_AMOUNT_PAISE ?? "290000", 10);
}
