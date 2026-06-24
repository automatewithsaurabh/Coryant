"use client";

import { useState } from "react";
import Link from "next/link";
import { PACKS, Pack, PackSlug } from "@/lib/packs-data";
import SectionLabel from "./SectionLabel";
import BinaryStream from "./BinaryStream";
import Footer from "./Footer";
import RazorpayButton from "./RazorpayButton";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function PackDetailClient({
  pack,
  isLoggedIn,
  hasPurchased: initialHasPurchased,
}: {
  pack: Pack;
  isLoggedIn: boolean;
  hasPurchased: boolean;
}) {
  const [hasPurchased, setHasPurchased] = useState(initialHasPurchased);
  const otherPacks = (Object.values(PACKS) as Pack[]).filter(
    (p) => p.slug !== pack.slug
  );

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ── 1. BREADCRUMB BAR ── */}
      <div
        className="mob-nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 48px",
          borderBottom: "1px solid var(--rule)",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--ink-faint)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link
            href="/#packs"
            className="hover-accent transition-fast"
            style={{ color: "var(--ink-faint)" }}
          >
            PACKS
          </Link>
          <span> / </span>
          <span style={{ color: "var(--ink-soft)" }}>
            {pack.name.toUpperCase()}
          </span>
        </div>
        <span>{pack.index}</span>
      </div>

      {/* ── 2. HERO BLOCK ── */}
      <section
        className="mob-section"
        style={{
          position: "relative",
          padding: "64px 48px 48px",
          overflow: "hidden",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <BinaryStream density={20} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>
          {/* Eyebrow + badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--ink-faint)",
                margin: 0,
              }}
            >
              INSTALLABLE PACK
            </p>
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
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {pack.badge}
              </span>
            )}
          </div>

          <h1
            className="pack-h1"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "44px",
              fontWeight: 500,
              color: "var(--ink)",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            {pack.name}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "18px",
              color: "var(--ink-soft)",
              maxWidth: "560px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {pack.tagline}
          </p>

          {/* Stats row */}
          <div
            className="pack-stats"
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "32px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--ink-faint)",
              flexWrap: "wrap",
            }}
          >
            <span>{pack.agentCount} AGENTS</span>
            <span>{pack.modeLabel.toUpperCase()}</span>
            <span>{pack.avgRuntime} AVG RUNTIME</span>
            <span>$0 INFERENCE COST</span>
          </div>

          {/* CTA */}
          <a
            href="#install"
            className="hover-dim transition-fast"
            style={{
              display: "inline-block",
              marginTop: "32px",
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              fontWeight: 500,
              background: "var(--accent)",
              color: "var(--ink)",
              padding: "12px 28px",
              borderRadius: "4px",
            }}
          >
            Install this pack
          </a>
        </div>
      </section>

      {/* ── 3. OVERVIEW ── */}
      <section
        className="mob-section"
        style={{
          padding: "64px 48px",
          borderBottom: "1px solid var(--rule)",
          maxWidth: "800px",
        }}
      >
        <SectionLabel number="01" label="OVERVIEW" />
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "15px",
            color: "var(--ink-soft)",
            maxWidth: "640px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {pack.description}
        </p>
      </section>

      {/* ── 4. AGENT ROSTER ── */}
      <section
        className="mob-section"
        style={{
          padding: "64px 48px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel number="02" label="AGENTS" />
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "26px",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: "32px",
            }}
          >
            {pack.agentCount} agents, one orchestrator
          </h2>

          {pack.agents.map((agent, i) => (
            <div
              key={agent.name}
              className="agent-row"
              style={{
                display: "grid",
                gridTemplateColumns: "48px 200px 1fr",
                gap: "24px",
                padding: "24px 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--ink-faint)",
                  paddingTop: "2px",
                }}
              >
                {pad(i + 1)}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                {agent.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--ink-soft)",
                  lineHeight: 1.6,
                }}
              >
                {agent.oneLiner}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. OUTPUT MODES ── */}
      <section
        className="mob-section"
        style={{
          padding: "64px 48px",
          borderBottom: "1px solid var(--rule)",
          background: "var(--bg-raised)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel number="03" label="OUTPUT MODES" />
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "26px",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: "8px",
            }}
          >
            Same research. Shaped for your moment.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--ink-faint)",
              marginBottom: "40px",
            }}
          >
            the orchestrator runs identically, only the final formatting changes
          </p>

          <div
            className="modes-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              background: "var(--rule)",
            }}
          >
            {pack.modes.map((mode) => (
              <div
                key={mode.name}
                style={{ background: "var(--bg)", padding: "24px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    marginBottom: "8px",
                  }}
                >
                  {mode.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--ink-soft)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {mode.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. INSTALL ── */}
      <section
        id="install"
        className="mob-section"
        style={{
          padding: "64px 48px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel number="04" label="INSTALL" />
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "26px",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: "40px",
            }}
          >
            Two minutes, either path.
          </h2>

          <div
            className="install-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--rule)",
              marginBottom: "32px",
            }}
          >
            {/* PATH 1 — Claude Code */}
            <div style={{ background: "var(--bg)", padding: "28px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--ink-faint)",
                  marginBottom: "20px",
                }}
              >
                CLAUDE CODE
              </p>
              <ol
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                  paddingLeft: "18px",
                  margin: "0 0 20px",
                }}
              >
                <li>Download the pack</li>
                <li>Copy into your skills directory</li>
                <li>Enable web search, then give Claude your brief</li>
              </ol>
              <pre
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  background: "var(--bg-raised)",
                  padding: "12px 16px",
                  borderRadius: "4px",
                  color: "var(--ink-soft)",
                  overflowX: "auto",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                <code>{`cp -r coryant-${pack.slug} ~/.claude/skills/\ncp ORCHESTRATOR.md ~/.claude/skills/coryant-${pack.slug}/`}</code>
              </pre>
            </div>

            {/* PATH 2 — Claude.ai Projects */}
            <div style={{ background: "var(--bg)", padding: "28px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--ink-faint)",
                  marginBottom: "20px",
                }}
              >
                CLAUDE.AI PROJECTS
              </p>
              <ol
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                  paddingLeft: "18px",
                  margin: 0,
                }}
              >
                <li>Create a new Project</li>
                <li>Upload every file in the pack plus ORCHESTRATOR.md</li>
                <li>
                  Paste the orchestrator instruction, then start a new chat with
                  your brief
                </li>
              </ol>
            </div>
          </div>

          {/* Purchase / Download CTA */}
          {!isLoggedIn && (
            <Link
              href={`/login?next=/packs/${pack.slug}`}
              className="hover-dim transition-fast"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                background: "var(--accent)",
                color: "var(--ink)",
                padding: "12px 24px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Sign in to purchase →
            </Link>
          )}

          {isLoggedIn && !hasPurchased && (
            <div>
              <RazorpayButton
                packSlug={pack.slug}
                packName={pack.name}
                onSuccess={() => setHasPurchased(true)}
              />
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--ink-faint)",
                  marginTop: "12px",
                }}
              >
                ₹2,900 · one-time · instant download after payment
              </p>
            </div>
          )}

          {isLoggedIn && hasPurchased && (
            <div>
              <a
                href={`/api/download/${pack.slug}`}
                download={`coryant-${pack.slug}.zip`}
                className="hover-dim transition-fast"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  background: "var(--accent)",
                  color: "var(--ink)",
                  padding: "12px 24px",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                Download {pack.name} →
              </a>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--ink-faint)",
                  marginTop: "12px",
                }}
              >
                Purchase confirmed · re-download any time
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── 7. EXAMPLE BRIEF ── */}
      <section
        className="mob-section"
        style={{
          padding: "64px 48px",
          borderBottom: "1px solid var(--rule)",
          background: "var(--bg-raised)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionLabel number="05" label="EXAMPLE" />
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "22px",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: "24px",
            }}
          >
            What a brief looks like
          </h2>

          <div
            style={{
              background: "var(--bg)",
              border: "1px solid var(--rule)",
              borderRadius: "6px",
              padding: "20px 24px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--ink-soft)",
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: "var(--accent)", marginRight: "10px" }}>
              &gt;
            </span>
            {pack.exampleBrief}
          </div>
        </div>
      </section>

      {/* ── 8. OTHER PACKS ── */}
      <section
        className="mob-section"
        style={{
          padding: "64px 48px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel number="06" label="OTHER PACKS" />

          {otherPacks.map((other) => (
            <div
              key={other.slug}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "24px 0",
                borderBottom: "1px solid var(--rule)",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    marginBottom: "4px",
                  }}
                >
                  {other.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--ink-soft)",
                    margin: 0,
                  }}
                >
                  {other.tagline}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--ink-faint)",
                  }}
                >
                  {other.agentCount} agents
                </span>
                <Link
                  href={`/packs/${other.slug}`}
                  className="hover-accent transition-fast"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--ink-soft)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  View pack →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. FOOTER ── */}
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .pack-h1 { font-size: 30px !important; }
          .pack-stats { flex-wrap: wrap; gap: 16px !important; }
          .agent-row { grid-template-columns: 1fr !important; gap: 4px !important; }
          .modes-grid { grid-template-columns: 1fr !important; }
          .install-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
