const productLinks = ["Packs", "Pipeline", "Architecture", "Install"];
const communityLinks = [
  { label: "Discord", href: "#discord" },
  { label: "X / Twitter", href: "#twitter" },
  { label: "GitHub", href: "#github" },
  { label: "hello@coryant.ai", href: "mailto:hello@coryant.ai" },
];

export default function Footer() {
  return (
    <footer
      className="mob-section"
      style={{
        borderTop: "1px solid var(--rule)",
        background: "var(--bg)",
        padding: "48px 48px 32px",
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 160px 200px",
          gap: "48px",
          paddingBottom: "40px",
          borderBottom: "1px solid var(--rule)",
          marginBottom: "24px",
        }}
      >
        {/* COL 1: brand */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--ink)",
              marginBottom: "12px",
            }}
          >
            CORYANT
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "var(--ink-soft)",
              lineHeight: 1.6,
              maxWidth: "280px",
              marginBottom: "24px",
            }}
          >
            Multi-agent research, installed in your Claude.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--ink-faint)",
              fontStyle: "italic",
            }}
          >
            Built for the agents that build everything else.
          </p>
        </div>

        {/* COL 2: product */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--ink-faint)",
              marginBottom: "16px",
            }}
          >
            PRODUCT
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {productLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover-accent transition-fast"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* COL 3: community */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--ink-faint)",
              marginBottom: "16px",
            }}
          >
            COMMUNITY
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {communityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover-accent transition-fast"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--ink-faint)",
          }}
        >
          © 2026 CORYANT
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
