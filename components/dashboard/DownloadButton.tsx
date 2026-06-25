"use client";

import { useState } from "react";

export default function DownloadButton({ slug, packName }: { slug: string; packName: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleDownload() {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(`/api/download/${slug}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? `Server error ${res.status}`);
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `coryant-${slug}.zip`;
      a.click();
      URL.revokeObjectURL(url);
      setStatus("idle");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed");
      setStatus("error");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
      <button
        onClick={handleDownload}
        disabled={status === "loading"}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: status === "loading" ? "10px" : "11px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "var(--ink)",
          background: status === "loading" ? "var(--accent-dim)" : "var(--accent)",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          whiteSpace: "nowrap",
        }}
      >
        {status === "loading" ? "Downloading…" : "Download →"}
      </button>
      {error && (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#e57373", textAlign: "right", maxWidth: "200px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
