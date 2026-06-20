import Link from "next/link";
import SectionLabel from "./SectionLabel";
import BinaryStream from "./BinaryStream";
import { PACKS } from "@/lib/packs-data";

function AgentPill({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--ink-faint)",
        border: "1px solid var(--rule-strong)",
        padding: "3px 9px",
        borderRadius: "2px",
        letterSpacing: "0.04em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

export default function PacksSection() {
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
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel number="01" label="PACKS" />
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
            marginBottom: "64px",
          }}
        >
          Structured · Multi-agent · Source-grounded. Three verticals. One orchestrator.
        </p>

        {(Object.values(PACKS)).map((pack) => (
          <div
            key={pack.slug}
            className="pack-row"
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 280px",
              gap: "32px",
              padding: "48px 0",
              borderBottom: "1px solid var(--rule)",
              alignItems: "start",
            }}
          >
            {/* LEFT: index */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--ink-faint)",
                paddingTop: "4px",
              }}
            >
              {pack.index}
            </span>

            {/* MIDDLE: content */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  {pack.name}
                </h3>
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
                  fontSize: "15px",
                  color: "var(--ink-soft)",
                  maxWidth: "480px",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}
              >
                {pack.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {pack.agents.map((agent) => (
                  <AgentPill key={agent.name} label={agent.name.toUpperCase()} />
                ))}
              </div>
            </div>

            {/* RIGHT: stats + CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
              <span
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--ink-faint)" }}
              >
                {pack.agentCount} agents
              </span>
              <span
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--ink-faint)" }}
              >
                {pack.modeLabel}
              </span>
              <Link
                href={`/packs/${pack.slug}`}
                className="pack-install-btn hover-accent-border transition-fast"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--ink-soft)",
                  border: "1px solid var(--rule-strong)",
                  padding: "8px 16px",
                  borderRadius: "2px",
                  marginTop: "8px",
                  display: "inline-block",
                }}
              >
                Install pack →
              </Link>
            </div>
          </div>
        ))}

        {/* DASHED TEASER ROW */}
        <div
          style={{
            padding: "36px 0",
            borderTop: "1px dashed var(--rule-strong)",
            borderBottom: "1px dashed var(--rule-strong)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "var(--ink-faint)",
            }}
          >
            More packs in progress: Student, Founder, role-specific
          </p>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--ink-faint)",
              whiteSpace: "nowrap",
            }}
          >
            More coming soon
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pack-row { grid-template-columns: 1fr !important; gap: 20px !important; }
          .pack-row > div:last-child { align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
