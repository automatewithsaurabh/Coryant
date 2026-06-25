"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import BinaryStream from "./BinaryStream";
import {
  PACKS,
  CATEGORY_LABELS,
  CATEGORY_DESCRIPTIONS,
  PackCategory,
} from "@/lib/packs-data";

const CATEGORIES: { key: PackCategory; index: string }[] = [
  { key: "business", index: "01" },
  { key: "roles", index: "02" },
  { key: "knowledge", index: "03" },
];

export default function PacksSection() {
  const [openCategory, setOpenCategory] = useState<PackCategory | null>(null);
  const router = useRouter();

  const allPacks = Object.values(PACKS);

  return (
    <section
      id="packs"
      className="mob-section"
      style={{
        position: "relative",
        background: "var(--bg)",
        padding: "96px 48px",
        borderTop: "1px solid var(--rule)",
        overflow: "hidden",
      }}
    >
      <BinaryStream density={20} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <SectionLabel number="02" label="PACKS" />
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "32px",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "12px",
          }}
        >
          Off-the-shelf agent packs. Ready to install.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--ink-faint)",
            marginBottom: "16px",
          }}
        >
          10 packs · 3 categories · one orchestrator
        </p>
        <Link
          href="/packs"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            textDecoration: "none",
            display: "block",
            marginBottom: "48px",
          }}
        >
          View all packs →
        </Link>

        {/* CATEGORY ROWS */}
        {CATEGORIES.map(({ key, index }, catIdx) => {
          const isOpen = openCategory === key;
          const packsInCategory = allPacks.filter((p) => p.category === key);
          const isLast = catIdx === CATEGORIES.length - 1;

          return (
            <div
              key={key}
              style={{
                borderTop: "1px solid var(--rule)",
                borderBottom: isLast ? "1px solid var(--rule)" : undefined,
              }}
            >
              {/* HEADER ROW */}
              <div
                onClick={() => setOpenCategory(isOpen ? null : key)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr auto",
                  gap: "24px",
                  padding: "24px 0",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "background 150ms",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--ink-faint)",
                  }}
                >
                  {index}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "var(--ink)",
                      marginBottom: "4px",
                    }}
                  >
                    {CATEGORY_LABELS[key]}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--ink-faint)",
                      marginBottom: "10px",
                    }}
                  >
                    {CATEGORY_DESCRIPTIONS[key]}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                    {packsInCategory.map((p) => (
                      <span
                        key={p.slug}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          color: "var(--ink-faint)",
                          border: "1px solid var(--rule-strong)",
                          padding: "2px 8px",
                          borderRadius: "2px",
                        }}
                      >
                        {p.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "var(--ink-faint)",
                    }}
                  >
                    {packsInCategory.length} packs
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "16px",
                      color: "var(--ink-faint)",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
              </div>

              {/* EXPANDED PACK GRID */}
              <div
                style={{
                  maxHeight: isOpen ? "600px" : "0",
                  overflow: "hidden",
                  transition: "max-height 200ms ease",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1px",
                    background: "var(--rule)",
                    marginBottom: "0",
                  }}
                >
                  {packsInCategory.map((pack) => (
                    <div
                      key={pack.slug}
                      onClick={() => router.push(`/packs/${pack.slug}`)}
                      style={{
                        background: "var(--bg-raised)",
                        padding: "20px 24px",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "var(--ink)",
                          marginBottom: "4px",
                        }}
                      >
                        {pack.name}
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          lineHeight: 1.5,
                          marginBottom: "12px",
                        }}
                      >
                        {pack.tagline}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            color: "var(--ink-faint)",
                          }}
                        >
                          {pack.agentCount} agents
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            color: "var(--accent)",
                          }}
                        >
                          Install →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mob-section { padding: 48px 20px !important; }
        }
      `}</style>
    </section>
  );
}
