"use client";

import { useEffect, useRef, useState } from "react";

interface LiveCounterProps {
  targetValue: number;
  label: string;
  size?: "large" | "small";
}

export default function LiveCounter({ targetValue, label, size = "large" }: LiveCounterProps) {
  const [value, setValue] = useState(0);
  const currentRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * targetValue);
      currentRef.current = current;
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    const tick = () => {
      const increment = Math.floor(Math.random() * 4) + 1;
      currentRef.current += increment;
      setValue(currentRef.current);
      const next = 3000 + Math.random() * 4000;
      timeoutRef = setTimeout(tick, next);
    };

    let timeoutRef: ReturnType<typeof setTimeout>;
    const startLive = setTimeout(() => {
      tick();
    }, 1800 + 500);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(startLive);
      clearTimeout(timeoutRef);
    };
  }, [targetValue]);

  const fontSize = size === "large" ? "48px" : "24px";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize,
          fontWeight: 500,
          color: "var(--ink)",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
        } as React.CSSProperties}
      >
        {value.toLocaleString()}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          color: "var(--ink-soft)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </span>
    </div>
  );
}
