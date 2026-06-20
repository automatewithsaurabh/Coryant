"use client";

import { useEffect, useState } from "react";

interface NodeStatusProps {
  nodeId: string;
  lat: number;
  lon: number;
  load: number;
  style?: React.CSSProperties;
}

export default function NodeStatus({ nodeId, lat, lon, load: initialLoad, style }: NodeStatusProps) {
  const [load, setLoad] = useState(initialLoad);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prev) => {
        const drift = (Math.random() - 0.5) * 6;
        return Math.min(85, Math.max(60, Math.round(prev + drift)));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const base: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    color: "var(--ink-faint)",
    lineHeight: "1.8",
    position: "absolute",
  };

  return (
    <div style={{ ...base, ...style }}>
      <div>NODE_{nodeId}</div>
      <div style={{ color: "var(--status-active)" }}>STATUS:ACTIVE</div>
      <div>LAT:{lat}</div>
      <div>LON:{lon}</div>
      <div>LOAD:{load}%</div>
    </div>
  );
}
