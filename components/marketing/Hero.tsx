import Link from "next/link";
import BinaryStream from "./BinaryStream";
import AgentGraph from "./AgentGraph";

export default function Hero({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--bg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BinaryStream density={40} />

      {/* NAV */}
      <nav
        className="hero-nav"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 48px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--ink)",
          }}
        >
          CORYANT
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div
            className="hero-nav-links"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--ink-soft)",
              display: "flex",
              gap: "28px",
            }}
          >
            <Link
              href="/packs"
              className="hover-accent transition-fast"
              style={{ color: "var(--ink-soft)" }}
            >
              PACKS
            </Link>
            <a
              href="/#pipeline"
              className="hover-accent transition-fast"
              style={{ color: "var(--ink-soft)" }}
            >
              HOW IT WORKS
            </a>
            <a
              href="/#pricing"
              className="hover-accent transition-fast"
              style={{ color: "var(--ink-soft)" }}
            >
              PRICING
            </a>
            <a
              href="/#get-started"
              className="hover-accent transition-fast"
              style={{ color: "var(--ink-soft)" }}
            >
              INSTALL
            </a>
          </div>
          <Link
            href={isLoggedIn ? "/dashboard" : "/signup"}
            className="hover-dim transition-fast"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: 500,
              background: "var(--accent)",
              color: "var(--ink)",
              padding: "10px 20px",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            {isLoggedIn ? "Dashboard →" : "Sign up →"}
          </Link>
        </div>
      </nav>


      {/* HERO BODY — two columns */}
      <div
        className="hero-body"
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "48px",
          padding: "64px 48px 40px",
        }}
      >
        {/* LEFT: text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "600px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--ink-faint)",
              marginBottom: "28px",
            }}
          >
            MULTI-AGENT RESEARCH · INSTALLED IN YOUR CLAUDE
          </p>

          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "56px",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--ink)",
              marginBottom: "28px",
            }}
          >
            Coordinated research agents.
            <br />
            Running on your Claude.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              color: "var(--ink-soft)",
              maxWidth: "520px",
              lineHeight: 1.6,
              marginBottom: "40px",
            }}
          >
            Coryant packs install a full agent team, strategist, researchers,
            coordinator, synthesizer, directly into Claude Code or Claude.ai.
            No new account. No inference cost to you. Just sharper output.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <Link
              href={isLoggedIn ? "/dashboard" : "/signup"}
              className="hover-dim transition-fast"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 500,
                background: "var(--accent)",
                color: "var(--ink)",
                padding: "12px 24px",
                borderRadius: "4px",
                display: "inline-block",
              }}
            >
              {isLoggedIn ? "Go to dashboard →" : "Sign up →"}
            </Link>
            <a
              href="#pipeline"
              className="hover-accent transition-fast"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--ink-soft)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              View architecture
            </a>
          </div>
        </div>

        {/* RIGHT: agent graph */}
        <div className="hero-graph" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AgentGraph />
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-body { grid-template-columns: 1fr !important; padding: 48px 24px 32px !important; }
          .hero-graph { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-h1 { font-size: 32px !important; }
        }
        @media (max-width: 640px) {
          .hero-nav { padding: 16px 20px !important; }
          .hero-nav-links { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-h1 { font-size: 26px !important; }
        }
      `}</style>
    </section>
  );
}
