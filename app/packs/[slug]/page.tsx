import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PACKS, PackSlug } from "@/lib/packs-data";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import PackDetailClient from "@/components/marketing/PackDetailClient";

// Always render fresh per request — never serve a stale cached version
// where isLoggedIn / hasPurchased would be wrong.
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [
    { slug: "career" },
    { slug: "gtm" },
    { slug: "pm" },
    { slug: "founders-associate" },
    { slug: "chartered-accountant" },
    { slug: "content" },
    { slug: "sales" },
    { slug: "supply-chain" },
    { slug: "tutor" },
    { slug: "real-estate" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pack = PACKS[slug as PackSlug];
  if (!pack) return {};
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://coryant.xyz";
  const url = `${APP_URL}/packs/${slug}`;
  return {
    title: pack.name,
    description: pack.description,
    keywords: [pack.name, "Claude AI", "multi-agent", "research pack", "Coryant", "Claude Code skills"],
    openGraph: {
      title: `${pack.name} — Coryant`,
      description: pack.tagline,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pack.name} — Coryant`,
      description: pack.tagline,
    },
    alternates: { canonical: url },
  };
}

export default async function PackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pack = PACKS[slug as PackSlug];
  if (!pack) notFound();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let hasPurchased = false;
  if (user) {
    // Use the admin client so RLS never silently hides a legitimate purchase.
    const admin = createAdminClient();
    const { data } = await admin
      .from("purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("pack_slug", slug)
      .limit(1)
      .maybeSingle();
    hasPurchased = !!data;
  }

  return <PackDetailClient pack={pack} isLoggedIn={!!user} hasPurchased={hasPurchased} userEmail={user?.email ?? null} />;
}
