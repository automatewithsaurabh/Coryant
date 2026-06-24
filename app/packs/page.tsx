import type { Metadata } from "next";
import SectionLabel from "@/components/marketing/SectionLabel";
import PackFilter from "@/components/marketing/PackFilter";

export const metadata: Metadata = {
  title: "All Packs — Coryant",
  description:
    "10 multi-agent research packs for Claude Code and Claude.ai. Business functions, professional roles, and knowledge domains.",
};

export default function PacksPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* TOP SECTION */}
      <div style={{ padding: "64px 48px 32px" }}>
        <SectionLabel number="00" label="PACK DIRECTORY" />
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "36px",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "8px",
          }}
        >
          All packs
        </h1>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--ink-faint)",
          }}
        >
          10 packs · one orchestrator · installs in your Claude
        </p>
      </div>

      {/* FILTER BAR + PACK LIST (client component) */}
      <PackFilter />
    </main>
  );
}
