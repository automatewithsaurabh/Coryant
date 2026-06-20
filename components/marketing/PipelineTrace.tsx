import SectionLabel from "./SectionLabel";
import BinaryStream from "./BinaryStream";

const stages = [
  {
    time: "00:00",
    title: "Brief intake",
    description:
      "You describe what you need investigated. Claude confirms understanding before research begins.",
  },
  {
    time: "01:40",
    title: "Strategist plan",
    description:
      "The Strategist builds a custom investigation plan, selecting which agents matter for this brief and what each should search for.",
  },
  {
    time: "04:15",
    title: "Agents research",
    description:
      "Each relevant agent runs real web searches against its own source priorities, in sequence, inside your own session.",
  },
  {
    time: "11:30",
    title: "Coordinator pass",
    description:
      "Findings are cross-read for contradictions and non-obvious patterns no single agent's output states on its own.",
  },
  {
    time: "14:00",
    title: "Synthesis + mode",
    description:
      "The full report is written, then shaped for your exact moment: application, interview, launch, roadmap review.",
  },
];

export default function PipelineTrace() {
  return (
    <section
      id="pipeline"
      style={{
        position: "relative",
        background: "var(--bg-raised)",
        padding: "96px 48px",
        borderTop: "1px solid var(--rule)",
        overflow: "hidden",
      }}
    >
      <BinaryStream density={20} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "760px", margin: "0 auto" }}>
        <SectionLabel number="02" label="PIPELINE" />
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "32px",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "12px",
          }}
        >
          Five stages. One orchestrator. Every pack.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--ink-faint)",
            marginBottom: "64px",
          }}
        >
          end-to-end · the user runs it · nothing touches our servers
        </p>

        {/* TIMELINE */}
        <div
          style={{
            borderLeft: "1px solid var(--rule)",
            paddingLeft: "0",
            display: "flex",
            flexDirection: "column",
          }}
          className="pipeline-timeline"
        >
          {stages.map((stage, i) => (
            <div
              key={i}
              className="pipeline-row"
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr",
                gap: "24px",
                padding: "24px 0 24px 24px",
                position: "relative",
                borderBottom: i < stages.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              {/* dot on the line */}
              <div
                style={{
                  position: "absolute",
                  left: "-4px",
                  top: "32px",
                  width: "8px",
                  height: "8px",
                  background: "var(--accent)",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />

              {/* timestamp */}
              <span
                className="pipeline-time"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--ink-faint)",
                  textAlign: "right",
                  paddingTop: "2px",
                  flexShrink: 0,
                }}
              >
                {stage.time}
              </span>

              {/* content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    marginBottom: "6px",
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--ink-soft)",
                    lineHeight: 1.6,
                  }}
                >
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--ink-faint)",
            marginTop: "16px",
            marginBottom: "48px",
          }}
        >
          Illustrative timing for a STANDARD-depth run. Varies by brief and pack.
        </p>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .pipeline-row {
            grid-template-columns: 1fr !important;
            gap: 4px !important;
          }
          .pipeline-time {
            text-align: left !important;
            font-size: 11px !important;
            margin-bottom: 4px;
          }
        }
      `}</style>
    </section>
  );
}
