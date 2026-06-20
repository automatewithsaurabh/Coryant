interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "var(--ink-faint)",
        marginBottom: "24px",
      }}
    >
      SECTION {number} · {label}
    </p>
  );
}
