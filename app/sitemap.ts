import type { MetadataRoute } from "next";
import { PACKS } from "@/lib/packs-data";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://coryant.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const packRoutes = Object.keys(PACKS).map((slug) => ({
    url: `${APP_URL}/packs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...packRoutes,
  ];
}
