import Link from "next/link";
import SectionLabel from "./SectionLabel";

const included = [
  "Full multi-agent investigation pipeline",
  "Strategist, researchers, coordinator, synthesizer",
  "Real-time web search on your own Claude session",
  "Zero inference cost on top of your subscription",
  "Operator judgment pass on every investigation",
  "Install in under 2 minutes · yours to keep forever",
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="mob-section"
      style={{
        background: "var(--bg)",
        padding: "96px 48px",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel number="05" label="PRICING" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {/* LEFT: headline */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "36px",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
            >
              One price.<br />Any pack.<br />No subscription.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                marginBottom: "32px",
                maxWidth: "380px",
              }}
            >
              Every Coryant pack is a one-time purchase. No monthly fee, no
              per-query billing, no hidden inference cost. Pay once and run it
              forever on your own Claude subscription.
            </p>
            <Link
              href="/packs"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              Browse all 10 packs →
            </Link>
          </div>

          {/* RIGHT: pricing card */}
          <div
            style={{
              background: "var(--bg-raised)",
              border: "1px solid var(--rule-strong)",
              borderRadius: "6px",
              padding: "36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.6), transparent)",
              }}
            />

            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "52px",
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                ₹2,900
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                }}
              >
                one time
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--ink-faint)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "24px",
              }}
            >
              per pack · any pack · yours to keep
            </p>

            <div style={{ borderTop: "1px solid var(--rule)", marginBottom: "24px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {included.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--ink-soft)",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", flexShrink: 0 }}>→</span>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--rule)", marginTop: "28px", paddingTop: "20px" }}>
              <Link
                href="/signup"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--ink)",
                  background: "var(--accent)",
                  padding: "12px 24px",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                Get started →
              </Link>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--ink-faint)",
                  textAlign: "center",
                  marginTop: "12px",
                }}
              >
                Requires Claude Pro or Max subscription
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
