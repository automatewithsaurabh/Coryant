import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PACKS, PackSlug } from "@/lib/packs-data";
import { createClient } from "@/lib/supabase/server";
import PackDetailClient from "@/components/marketing/PackDetailClient";

export function generateStaticParams() {
  return Object.keys(PACKS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pack = PACKS[slug as PackSlug];
  if (!pack) return {};
  return {
    title: `${pack.name} by Coryant`,
    description: pack.tagline,
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

  return <PackDetailClient pack={pack} isLoggedIn={!!user} />;
}
