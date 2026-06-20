import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import DashboardClient from "@/components/dashboard/DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard — CORYANT",
};

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: purchases } = await supabase
    .from("purchases")
    .select("*")
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
