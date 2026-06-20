"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";
import LiveCounter from "./LiveCounter";
import BinaryStream from "./BinaryStream";

const breakdown = [
  { label: "Job seekers & career switchers", base: 140 },
  { label: "Founders & GTM leads", base: 95 },
  { label: "Product managers", base: 58 },
  { label: "Researchers & analysts", base: 19 },
];

function TickingCount({ base }: { base: number }) {
  const [value, setValue] = useState(base);
  const ref = useRef(base);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (Math.random() > 0.6) {
        ref.current += 1;
        setValue(ref.current);
      }
      timerId = setTimeout(tick, 4000 + Math.random() * 8000);
    };
    timerId = setTimeout(tick, 5000 + Math.random() * 5000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <span style={{ color: "var(--ink)", fontFamily: "var(--font-mono)", fontSize: "13px" }}>
      {value}+
    </span>
  );
}

export default function InstallsSection() {
  return (
    <section
      id="adoption"
      style={{
        position: "relative",
        background: "var(--bg)",
        padding: "96px 48px",
        borderTop: "1px solid var(--rule)",
        overflow: "hidden",
      }}
    >
      <BinaryStream density={20} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
        <SectionLabel number="04" label="ADOPTION" />
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "28px",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "8px",
          }}
        >
          Installed across roles and use cases
        </h2>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--ink-faint)",
            marginBottom: "56px",
          }}
        >
          rolling total · self-reported on install
        </p>

        <div style={{ marginBottom: "56px" }}>
          <LiveCounter targetValue={312} label="Packs Installed" />
        </div>

        <div>
          {breakdown.map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid var(--rule)",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "var(--ink-soft)" }}>{row.label}</span>
              <TickingCount base={row.base} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
