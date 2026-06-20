import SectionLabel from "./SectionLabel";
import BinaryStream from "./BinaryStream";

const blocks = [
  {
    label: "01 ZERO INFERENCE COST",
    body: "Every agent runs on your own Claude subscription. We never touch a token of inference. Our margin structure is fundamentally different from any hosted AI product.",
  },
  {
    label: "02 ONE ENGINE, MANY PACKS",
    body: "Strategist, coordinator, and synthesizer logic is shared across every pack. Only the research agents and output shaping change per vertical.",
  },
  {
    label: "03 SOURCE-GROUNDED, NOT GENERIC",
    body: "Every agent searches real, domain-specific sources in real time. No single-shot summarization. No hallucinated citations.",
  },
];

export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      style={{
        position: "relative",
        background: "var(--bg-raised)",
        padding: "96px 48px",
        borderTop: "1px solid var(--rule)",
        overflow: "hidden",
      }}
    >
      <BinaryStream density={15} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel number="03" label="ARCHITECTURE" />
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "28px",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "56px",
          }}
        >
          Why this is not another AI wrapper
        </h2>

        <div
          className="arch-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--rule)",
          }}
        >
          {blocks.map((block) => (
            <div
              key={block.label}
              style={{
                background: "var(--bg)",
                padding: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--ink-faint)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                {block.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--ink-soft)",
                  lineHeight: 1.65,
                }}
              >
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .arch-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
