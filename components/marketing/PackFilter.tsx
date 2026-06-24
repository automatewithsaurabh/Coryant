"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PACKS, CATEGORY_LABELS, PackCategory } from "@/lib/packs-data";

type FilterValue = "all" | PackCategory;

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Business", value: "business" },
  { label: "Roles", value: "roles" },
  { label: "Knowledge", value: "knowledge" },
];

const CATEGORY_COLORS: Record<PackCategory, string> = {
  business: "var(--accent)",
  roles: "var(--status-active)",
  knowledge: "rgba(200,160,255,0.8)",
};

export default function PackFilter() {
  const [active, setActive] = useState<FilterValue>("all");
  const router = useRouter();

  const allPacks = Object.values(PACKS);
  const filtered =
    active === "all" ? allPacks : allPacks.filter((p) => p.category === active);

  return (
    <>
      {/* FILTER BAR */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "var(--bg)",
          borderBottom: "1px solid var(--rule)",
          padding: "12px 48px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
            marginRight: "4px",
          }}
        >
          FILTER:
        </span>
        {FILTERS.map(({ label, value }) => {
          const isActive = active === value;
          return (
            <button
              key={value}
              onClick={() => setActive(value)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "5px 14px",
                borderRadius: "3px",
                border: `1px solid ${isActive ? "var(--accent-border)" : "var(--rule-strong)"}`,
                background: isActive ? "var(--accent-dim)" : "transparent",
                color: isActive ? "var(--accent)" : "var(--ink-faint)",
                cursor: "pointer",
                transition: "all 150ms",
              }}
            >
              {label}
            </button>
          );
        })}
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--ink-faint)",
          }}
        >
          {filtered.length} packs
        </span>
      </div>

      {/* PACK LIST */}
      <div>
        {filtered.map((pack, i) => {
          const isFirst = i === 0;
          const isLast = i === filtered.length - 1;
          const catColor = CATEGORY_COLORS[pack.category as PackCategory];
          const indexNum = String(i + 1).padStart(2, "0");

          return (
            <div
              key={pack.slug}
              onClick={() => router.push(`/packs/${pack.slug}`)}
              style={{
                borderTop: isFirst ? "1px solid var(--rule)" : undefined,
                borderBottom: "1px solid var(--rule)",
                padding: "32px 48px",
                display: "grid",
                gridTemplateColumns: "60px 20px 1fr auto",
                gap: "24px",
                alignItems: "start",
                cursor: "pointer",
                transition: "background 150ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {/* Col 1: index */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--ink-faint)",
                  paddingTop: "3px",
                }}
              >
                {indexNum}
              </span>

              {/* Col 2: category dot */}
              <div
                style={{ paddingTop: "6px" }}
                title={CATEGORY_LABELS[pack.category as PackCategory]}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: catColor,
                  }}
                />
              </div>

              {/* Col 3: main content */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "var(--ink)",
                    }}
                  >
                    {pack.name}
                  </span>
                  {pack.badge && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        background: "var(--accent-dim)",
                        color: "var(--accent)",
                        padding: "2px 8px",
                        border: "1px solid var(--accent-border)",
                        borderRadius: "2px",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      {pack.badge}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--ink-soft)",
                    maxWidth: "520px",
                    marginBottom: "12px",
                  }}
                >
                  {pack.tagline}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {pack.agents.map((agent) => (
                    <span
                      key={agent.name}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        textTransform: "uppercase" as const,
                        border: "1px solid var(--rule-strong)",
                        color: "var(--ink-faint)",
                        padding: "2px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      {agent.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 4: right stats + CTA */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--ink-faint)",
                  }}
                >
                  {pack.agentCount} agents
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--ink-faint)",
                  }}
                >
                  {pack.modeLabel}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--ink)",
                  }}
                >
                  {pack.price}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/packs/${pack.slug}`);
                  }}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                    border: "1px solid var(--rule-strong)",
                    color: "var(--ink-faint)",
                    padding: "7px 16px",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "all 150ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "var(--accent)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "var(--rule-strong)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "var(--ink-faint)";
                  }}
                >
                  Install pack →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* BOTTOM ROW */}
      <div
        style={{
          padding: "32px 48px",
          borderTop: "1px solid var(--rule)",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--ink-faint)",
        }}
      >
        More packs in development.{" "}
        <a
          href="mailto:hello@coryant.xyz"
          style={{ color: "var(--accent)", textDecoration: "none" }}
        >
          Request a vertical →
        </a>
      </div>
    </>
  );
}
