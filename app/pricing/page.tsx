import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/marketing/SectionLabel";

export const metadata: Metadata = {
  title: "Pricing — Coryant",
};

export default function PricingPage() {
  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          width: "100%",
          padding: "120px 48px",
        }}
      >
        <SectionLabel number="00" label="PRICING" />
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "36px",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "16px",
          }}
        >
          Simple pricing.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            color: "var(--ink-soft)",
            lineHeight: 1.6,
            marginBottom: "48px",
          }}
        >
          Every pack is $29, one time. Install one or install all. No inference
          cost on top. No credits. No surprises.
        </p>

        {/* PRICING CARD */}
        <div
          style={{
            background: "var(--bg-raised)",
            border: "1px solid var(--rule-strong)",
            borderRadius: "6px",
            padding: "32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(79,142,247,0.6), transparent)",
            }}
          />

          {/* Price display */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "8px" }}>
            <span
              style={{
                fontFamily: "var(--font-serif, Georgia, serif)",
                fontSize: "48px",
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              $29
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--ink-soft)",
              }}
            >
              one time
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--ink-faint)",
              marginBottom: "20px",
            }}
          >
            per pack · any pack · yours to keep
          </div>

          <div
            style={{
              borderTop: "1px solid var(--rule)",
              margin: "0 0 20px",
            }}
          />

          {/* Included list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "Full multi-agent investigation pipeline",
              "Strategist, researchers, coordinator, synthesizer",
              "Real-time web search on your own Claude session",
              "Zero inference cost on top of your subscription",
              "Operator judgment pass on every investigation",
              "Download and install in under 2 minutes",
            ].map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--ink-soft)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent)",
                    marginRight: "8px",
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/packs"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            display: "block",
            textAlign: "center",
            marginTop: "32px",
            textDecoration: "none",
          }}
        >
          Browse all 10 packs →
        </Link>

        {/* Fine print */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--ink-faint)",
            textAlign: "center",
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span>Requires Claude Pro or Max subscription.</span>
          <span>Team bundles and volume pricing coming soon.</span>
          <span>
            Questions?{" "}
            <a
              href="mailto:hello@coryant.xyz"
              style={{ color: "var(--ink-faint)", textDecoration: "underline" }}
            >
              hello@coryant.xyz
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
