"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { PACKS } from "@/lib/packs-data";
import type { Database } from "@/lib/supabase/types";

type Purchase = Database["public"]["Tables"]["purchases"]["Row"];

const packs = Object.values(PACKS);

export default function DashboardClient({
  email,
  name,
  profession,
  purchases,
}: {
  email: string;
  name: string;
  profession: string;
  purchases: Purchase[];
}) {
  const router = useRouter();
  const supabase = createClient();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>

      {/* ── TOP NAV ── */}
      <nav
        className="mob-nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 48px",
          borderBottom: "1px solid var(--rule)",
          background: "var(--bg)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--ink)",
          }}
        >
          CORYANT
        </span>

        <div className="dash-nav-right" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span className="dash-email" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--ink-faint)" }}>
            {email}
          </span>
          <button
            onClick={signOut}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--ink-faint)",
              background: "none",
              border: "1px solid var(--rule-strong)",
              borderRadius: "4px",
              padding: "6px 14px",
              cursor: "pointer",
              letterSpacing: "0.04em",
            }}
          >
            Sign out
          </button>
        </div>
      </nav>

      <div className="mob-section" style={{ flex: 1, maxWidth: "1100px", width: "100%", margin: "0 auto", padding: "56px 48px" }}>

        {/* ── WELCOME ── */}
        <div style={{ marginBottom: "56px", paddingBottom: "40px", borderBottom: "1px solid var(--rule)" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--ink-faint)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "10px",
            }}
          >
            YOUR WORKSPACE
          </p>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "30px",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: "6px",
            }}
          >
            {name ? `Welcome, ${name.split(" ")[0]}` : "Welcome"}
          </h1>
          {profession && (
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--ink-faint)" }}>
              {profession}
            </p>
          )}
        </div>

        {/* ── PACKS ── */}
        <div style={{ marginBottom: "24px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--ink-faint)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "32px",
            }}
          >
            YOUR PACKS · {packs.length} AVAILABLE
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--rule)" }}>
            {packs.map((pack) => (
              <div
                key={pack.slug}
                className="dash-pack-row"
                style={{
                  background: "var(--bg)",
                  padding: "36px 40px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "40px",
                  alignItems: "start",
                }}
              >
                {/* LEFT: pack info */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "var(--ink)",
                      }}
                    >
                      {pack.name}
                    </h2>
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

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "var(--ink-soft)",
                      lineHeight: 1.6,
                      maxWidth: "560px",
                      marginBottom: "20px",
                    }}
                  >
                    {pack.tagline}
                  </p>

                  {/* Stats row */}
                  <div
                    style={{
                      display: "flex",
                      gap: "24px",
                      marginBottom: "20px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--ink-faint)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    <span>{pack.agentCount} agents</span>
                    <span>{pack.modeLabel}</span>
                    <span>{pack.avgRuntime} avg runtime</span>
                  </div>

                  {/* Agent pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {pack.agents.map((agent) => (
                      <span
                        key={agent.name}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          color: "var(--ink-faint)",
                          border: "1px solid var(--rule-strong)",
                          padding: "3px 9px",
                          borderRadius: "2px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {agent.name.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT: download */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "12px",
                    paddingTop: "4px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ● AVAILABLE
                  </span>
                  <a
                    href={`/api/download/${pack.slug}`}
                    download={`coryant-${pack.slug}.zip`}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--ink)",
                      background: "var(--accent)",
                      borderRadius: "4px",
                      padding: "10px 20px",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                    }}
                  >
                    Download →
                  </a>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--ink-faint)",
                    }}
                  >
                    .zip · includes ORCHESTRATOR
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── INSTALL REMINDER ── */}
        <div
          className="dash-install"
          style={{
            marginTop: "48px",
            padding: "28px 32px",
            border: "1px solid var(--rule)",
            borderRadius: "6px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--ink-faint)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "10px",
              }}
            >
              CLAUDE CODE
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: "12px" }}>
              Download the pack, then copy it into your skills directory.
            </p>
            <pre
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                background: "var(--bg-raised)",
                padding: "10px 14px",
                borderRadius: "4px",
                color: "var(--ink-soft)",
                overflowX: "auto",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <code>{`cp -r coryant-[pack] ~/.claude/skills/\ncp ORCHESTRATOR.md ~/.claude/skills/coryant-[pack]/`}</code>
            </pre>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--ink-faint)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "10px",
              }}
            >
              CLAUDE.AI PROJECTS
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--ink-soft)", lineHeight: 1.6 }}>
              Create a new Project, upload all files in the pack plus ORCHESTRATOR.md, then start a chat with your brief.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .dash-pack-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .dash-install { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .dash-email { display: none !important; }
          .dash-pack-row { padding: 24px 20px !important; }
        }
      `}</style>
    </div>
  );
}
