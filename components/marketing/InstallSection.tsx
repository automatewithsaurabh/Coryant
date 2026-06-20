import SectionLabel from "./SectionLabel";
import BinaryStream from "./BinaryStream";

const steps = [
  {
    num: "01",
    title: "Choose a pack",
    body: "Career, GTM, or PM. Each installs independently.",
  },
  {
    num: "02",
    title: "Copy into Claude",
    body: "Drop the pack folder into Claude Code's skills directory, or upload it to a Claude.ai Project.",
  },
  {
    num: "03",
    title: "Give it a brief",
    body: "Describe what you need investigated. The orchestrator runs the full agent sequence automatically.",
  },
];

export default function InstallSection() {
  return (
    <section
      id="get-started"
      className="mob-section"
      style={{
        position: "relative",
        background: "var(--bg)",
        padding: "96px 48px",
        borderTop: "1px solid var(--rule)",
        overflow: "hidden",
      }}
    >
      <BinaryStream density={15} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel number="04" label="GET STARTED" />
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "32px",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "56px",
          }}
        >
          Two minutes to install. First report today.
        </h2>

        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            marginBottom: "64px",
          }}
        >
          {steps.map((step) => (
            <div key={step.num}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "var(--ink-ghost)",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "var(--ink)",
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                  lineHeight: 1.6,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="#packs"
            className="hover-dim transition-fast"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              fontWeight: 500,
              background: "var(--accent)",
              color: "var(--ink)",
              padding: "12px 28px",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            Browse all packs →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
