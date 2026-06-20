export default function AgentGraph() {
  /* cream bg = #eae8e1  — used as node fill so strokes read cleanly */
  const nodeFill = "#eae8e1";
  const edge     = "rgba(0,0,0,0.13)";
  const labelCol = "#9e9a92";

  return (
    <div style={{ width: "100%", fontFamily: "var(--font-mono)" }}>
      <svg
        viewBox="0 0 580 390"
        width="100%"
        role="img"
        aria-label="Coryant agent pipeline diagram"
        style={{ display: "block", overflow: "visible" }}
      >
        <title>Coryant agent pipeline</title>

        {/* ── EDGES: strategist → researchers ── */}
        <line x1="90" y1="195" x2="230" y2="58"  stroke={edge} strokeWidth="1.2"/>
        <line x1="90" y1="195" x2="230" y2="143" stroke={edge} strokeWidth="1.2"/>
        <line x1="90" y1="195" x2="230" y2="247" stroke={edge} strokeWidth="1.2"/>
        <line x1="90" y1="195" x2="230" y2="332" stroke={edge} strokeWidth="1.2"/>

        {/* ── EDGES: researchers → coordinator ── */}
        <line x1="230" y1="58"  x2="400" y2="195" stroke={edge} strokeWidth="1.2"/>
        <line x1="230" y1="143" x2="400" y2="195" stroke={edge} strokeWidth="1.2"/>
        <line x1="230" y1="247" x2="400" y2="195" stroke={edge} strokeWidth="1.2"/>
        <line x1="230" y1="332" x2="400" y2="195" stroke={edge} strokeWidth="1.2"/>

        {/* ── EDGE: coordinator → synthesizer ── */}
        <line x1="400" y1="195" x2="530" y2="195" stroke={edge} strokeWidth="1.2"/>

        {/* ── PACKETS: strategist → researchers (indigo) ── */}
        <circle r="3.5" fill="#6b8cff">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M90,195 L230,58"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="2.6s" repeatCount="indefinite"/>
        </circle>
        <circle r="3.5" fill="#6b8cff">
          <animateMotion dur="2.6s" begin="0.38s" repeatCount="indefinite" path="M90,195 L230,143"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="2.6s" begin="0.38s" repeatCount="indefinite"/>
        </circle>
        <circle r="3.5" fill="#6b8cff">
          <animateMotion dur="2.6s" begin="0.76s" repeatCount="indefinite" path="M90,195 L230,247"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="2.6s" begin="0.76s" repeatCount="indefinite"/>
        </circle>
        <circle r="3.5" fill="#6b8cff">
          <animateMotion dur="2.6s" begin="1.14s" repeatCount="indefinite" path="M90,195 L230,332"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="2.6s" begin="1.14s" repeatCount="indefinite"/>
        </circle>

        {/* ── PACKETS: researchers → coordinator (green accent) ── */}
        <circle r="3.5" fill="#00d944">
          <animateMotion dur="2.4s" begin="2.7s" repeatCount="indefinite" path="M230,58 L400,195"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="2.4s" begin="2.7s" repeatCount="indefinite"/>
        </circle>
        <circle r="3.5" fill="#00d944">
          <animateMotion dur="2.4s" begin="3.08s" repeatCount="indefinite" path="M230,143 L400,195"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="2.4s" begin="3.08s" repeatCount="indefinite"/>
        </circle>
        <circle r="3.5" fill="#00d944">
          <animateMotion dur="2.4s" begin="3.46s" repeatCount="indefinite" path="M230,247 L400,195"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="2.4s" begin="3.46s" repeatCount="indefinite"/>
        </circle>
        <circle r="3.5" fill="#00d944">
          <animateMotion dur="2.4s" begin="3.84s" repeatCount="indefinite" path="M230,332 L400,195"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="2.4s" begin="3.84s" repeatCount="indefinite"/>
        </circle>

        {/* ── PACKET: coordinator → synthesizer ── */}
        <circle r="3.5" fill="#807c74">
          <animateMotion dur="1.6s" begin="6.2s" repeatCount="indefinite" path="M400,195 L530,195"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.86;1" dur="1.6s" begin="6.2s" repeatCount="indefinite"/>
        </circle>

        {/* ── NODE: strategist ── */}
        <circle cx="90" cy="195" r="9" fill={nodeFill} stroke="#6b8cff" strokeWidth="1.8"/>
        {/* pulse ring */}
        <circle cx="90" cy="195" r="9" fill="none" stroke="#6b8cff" strokeWidth="1">
          <animate attributeName="r" values="9;20;9" dur="2.6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.55;0;0.55" dur="2.6s" repeatCount="indefinite"/>
        </circle>
        <text x="90" y="220" textAnchor="middle" fontSize="10" fill={labelCol} fontFamily="inherit">strategist</text>

        {/* ── NODES: researchers ── */}
        <circle cx="230" cy="58"  r="6.5" fill={nodeFill} stroke="rgba(0,0,0,0.22)" strokeWidth="1.2"/>
        <circle cx="230" cy="143" r="6.5" fill={nodeFill} stroke="rgba(0,0,0,0.22)" strokeWidth="1.2"/>
        <circle cx="230" cy="247" r="6.5" fill={nodeFill} stroke="rgba(0,0,0,0.22)" strokeWidth="1.2"/>
        <circle cx="230" cy="332" r="6.5" fill={nodeFill} stroke="rgba(0,0,0,0.22)" strokeWidth="1.2"/>
        <text x="247" y="62"  fontSize="10" fill={labelCol} fontFamily="inherit">market</text>
        <text x="247" y="147" fontSize="10" fill={labelCol} fontFamily="inherit">competitor</text>
        <text x="247" y="251" fontSize="10" fill={labelCol} fontFamily="inherit">consumer</text>
        <text x="247" y="336" fontSize="10" fill={labelCol} fontFamily="inherit">hiring</text>

        {/* ── NODE: coordinator ── */}
        <circle cx="400" cy="195" r="9" fill={nodeFill} stroke="#00d944" strokeWidth="1.8"/>
        {/* pulse ring */}
        <circle cx="400" cy="195" r="9" fill="none" stroke="#00d944" strokeWidth="1">
          <animate attributeName="r" values="9;20;9" dur="2.4s" begin="2.7s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.55;0;0.55" dur="2.4s" begin="2.7s" repeatCount="indefinite"/>
        </circle>
        <text x="400" y="220" textAnchor="middle" fontSize="10" fill={labelCol} fontFamily="inherit">coordinator</text>

        {/* ── NODE: synthesizer ── */}
        <circle cx="530" cy="195" r="9" fill={nodeFill} stroke="rgba(0,0,0,0.22)" strokeWidth="1.8"/>
        <text x="530" y="220" textAnchor="middle" fontSize="10" fill={labelCol} fontFamily="inherit">synthesizer</text>
      </svg>

    </div>
  );
}
