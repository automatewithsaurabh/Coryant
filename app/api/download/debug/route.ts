import { NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET() {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ auth: "not logged in", authError });
  }

  const admin = createAdminClient();

  // Check for the specific purchase
  const { data: purchase, error: purchaseError } = await admin
    .from("purchases")
    .select("*")
    .eq("user_id", user.id)
    .eq("pack_slug", "gtm")
    .maybeSingle();

  // Also list all purchases for this user
  const { data: allPurchases } = await admin
    .from("purchases")
    .select("id, user_id, pack_slug, created_at")
    .eq("user_id", user.id);

  return NextResponse.json({
    session_user_id: user.id,
    session_email: user.email,
    gtm_purchase_found: !!purchase,
    gtm_purchase: purchase,
    purchase_error: purchaseError,
    all_purchases_for_user: allPurchases,
  });
}
