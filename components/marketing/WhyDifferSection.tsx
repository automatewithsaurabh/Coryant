import SectionLabel from "./SectionLabel";

const points = [
  {
    tag: "01 · NOT A CHATBOT",
    headline: "Agents that investigate, not guess.",
    body: "Every Coryant pack deploys a coordinated team of specialist agents — not a single prompt. A strategist designs the investigation. Domain researchers go deep. A coordinator stitches it together. A synthesizer writes the final brief. You get structured intelligence, not a summarized Wikipedia page.",
  },
  {
    tag: "02 · RUNS ON YOUR SUBSCRIPTION",
    headline: "Zero inference cost. Always.",
    body: "You pay for Claude Pro or Max. We don't touch a single token of inference. Most AI tools resell compute at a margin on top of your monthly bill. Coryant doesn't. The pack is the product — a one-time purchase that runs entirely on the session you already own.",
  },
  {
    tag: "03 · REAL-TIME, REAL SOURCES",
    headline: "Grounded in the world as it is right now.",
    body: "Every agent searches live sources — company filings, market databases, industry publications, job boards, technical docs. Not a knowledge cutoff from eight months ago. Not hallucinated citations. If the answer exists on the internet today, Coryant finds it and tells you where it came from.",
  },
  {
    tag: "04 · DECISION-GRADE OUTPUT",
    headline: "Built for the moment before you act.",
    body: "We don't optimize for impressive-looking outputs. We optimize for the brief you read three minutes before a board meeting, a cold call, or a fund close. Every pack includes an operator judgment pass — a final agent that challenges assumptions, flags blind spots, and stress-tests the conclusion before it reaches you.",
  },
  {
    tag: "05 · INSTALL IN 2 MINUTES",
    headline: "No onboarding. No SaaS seat. No workflow lock-in.",
    body: "Download the pack, drop it into your Claude skills directory, type a slash command. That's it. No API keys to manage, no SaaS account to provision, no team seat to buy. The intelligence is yours — portable, offline-capable, and version-controlled like any other file on your machine.",
  },
];

export default function WhyDifferSection() {
  return (
    <section
      id="why-differ"
      className="mob-section"
      style={{
        background: "var(--bg-raised)",
        padding: "96px 48px",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel number="06" label="WHY CORYANT" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
            marginBottom: "64px",
          }}
          className="why-header-grid"
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "36px",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.15,
              }}
            >
              The model is not the product.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                color: "var(--ink-soft)",
                lineHeight: 1.75,
              }}
            >
              Claude is the engine. Coryant is the driver. Anyone with a Claude
              subscription can write a prompt. Very few have built a
              production-grade, domain-specific agent pipeline that plans,
              searches, coordinates, pressure-tests, and delivers in a single
              run. That's the gap we close — and we close it in two minutes of
              installation.
            </p>
          </div>
        </div>

        {/* Differentiator points */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--rule)",
          }}
        >
          {points.map((pt) => (
            <div
              key={pt.tag}
              className="why-row"
              style={{
                background: "var(--bg-raised)",
                padding: "40px 48px",
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: "48px",
                alignItems: "start",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--accent)",
                    marginBottom: "10px",
                  }}
                >
                  {pt.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    lineHeight: 1.4,
                  }}
                >
                  {pt.headline}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--ink-soft)",
                  lineHeight: 1.75,
                  paddingTop: "24px",
                }}
              >
                {pt.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-header-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .why-row { grid-template-columns: 1fr !important; gap: 12px !important; padding: 32px 24px !important; }
          .why-row p:last-child { padding-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
