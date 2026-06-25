import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import DashboardClient from "@/components/dashboard/DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard — CORYANT",
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const admin = createAdminClient();
  const { data: purchases } = await admin
    .from("purchases")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const name = (user.user_metadata?.full_name as string | undefined) ?? "";
  const profession = (user.user_metadata?.profession as string | undefined) ?? "";

  return (
    <DashboardClient
      email={user.email ?? ""}
      name={name}
      profession={profession}
      purchases={purchases ?? []}
    />
  );
}
