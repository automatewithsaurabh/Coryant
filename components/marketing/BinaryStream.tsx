function generateRow(seed: number, length: number = 80): string {
  let result = "";
  let x = seed;
  for (let i = 0; i < length; i++) {
    x = (x * 9301 + 49297) % 233280;
    result += x / 233280 > 0.5 ? "1" : "0";
  }
  return result;
}

export default function BinaryStream({ density = 20 }: { density?: number }) {
  // Deterministic rows using index as seed — identical on server and client, no hydration mismatch.
  const rows = Array.from({ length: density }, (_, i) => generateRow(i + 1));

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.12,
        userSelect: "none",
      }}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--ink-ghost)",
            lineHeight: "1.6",
            whiteSpace: "nowrap",
          }}
        >
          {row.repeat(4)}
        </div>
      ))}
    </div>
  );
}
