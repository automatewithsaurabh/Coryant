# CORYANT SCM — Intelligence Report Mode

Full HTML intelligence report for supply chain and procurement decisions. Design: deep slate / amber — professional, global, operations-weight.

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT SCM — [Moment Type]: [Target]</title>
<style>
  :root {
    --ink: #0F172A;
    --mid: #334155;
    --muted: #64748B;
    --rule: #E2E8F0;
    --bg: #F8FAFC;
    --white: #FFFFFF;
    --amber: #D97706;
    --amber-2: #F59E0B;
    --amber-light: #FFFBEB;
    --amber-border: #FCD34D;
    --slate: #1E293B;
    --slate-2: #334155;
    --red: #DC2626;
    --red-light: #FEF2F2;
    --green: #059669;
    --green-light: #ECFDF5;
    --blue: #1D4ED8;
    --blue-light: #EFF6FF;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.7; color: var(--ink); background: var(--bg); }

  /* Cover */
  .cover { background: linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%); color: white; padding: 52px 64px 44px; position: relative; overflow: hidden; }
  .cover::before { content: ''; position: absolute; top: -40px; right: -40px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%); pointer-events: none; }
  .cover-brand { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.5; margin-bottom: 24px; }
  .cover-type { display: inline-block; background: var(--amber); color: var(--ink); padding: 4px 14px; border-radius: 4px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 18px; }
  .cover-title { font-size: 34px; font-weight: 700; line-height: 1.2; margin-bottom: 10px; }
  .cover-sub { font-size: 16px; opacity: 0.65; margin-bottom: 36px; }
  .cover-meta { display: flex; gap: 28px; font-size: 12px; opacity: 0.5; flex-wrap: wrap; }
  .cover-alert { background: rgba(220,38,38,0.2); border: 1px solid rgba(220,38,38,0.4); border-radius: 6px; padding: 10px 16px; margin-top: 20px; font-size: 13px; color: #FCA5A5; display: none; }
  .cover-alert.show { display: block; }

  /* TOC */
  .toc { background: var(--white); border-bottom: 3px solid var(--amber); padding: 16px 64px; font-size: 13px; }
  .toc-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); margin-bottom: 8px; }
  .toc-items { display: flex; flex-wrap: wrap; gap: 5px 18px; }
  .toc-items a { color: var(--amber); text-decoration: none; font-weight: 600; }
  .toc-items a:hover { text-decoration: underline; }

  .content { max-width: 900px; margin: 0 auto; padding: 48px 32px; }

  h1 { font-size: 23px; font-weight: 700; color: var(--ink); margin-bottom: 20px; padding-bottom: 10px; border-bottom: 3px solid var(--amber); display: flex; align-items: center; gap: 10px; }
  h2 { font-size: 17px; font-weight: 700; color: var(--ink); margin: 28px 0 12px; }
  h3 { font-size: 13px; font-weight: 700; color: var(--muted); margin: 16px 0 8px; text-transform: uppercase; letter-spacing: 0.08em; }
  p { margin-bottom: 12px; color: var(--mid); }
  ul, ol { padding-left: 20px; margin-bottom: 12px; }
  li { margin-bottom: 6px; color: var(--mid); }
  strong { color: var(--ink); }

  /* Decision box */
  .decision-box { background: var(--amber-light); border: 2px solid var(--amber); border-radius: 10px; padding: 26px 30px; margin: 28px 0; }
  .decision-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--amber); margin-bottom: 12px; }
  .decision-headline { font-size: 20px; font-weight: 700; color: var(--ink); margin-bottom: 12px; line-height: 1.3; }
  .decision-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 18px; }
  .decision-col-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 6px; }
  .decision-col-value { font-size: 14px; color: var(--mid); }

  /* Risk cards */
  .risk-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 16px 0; }
  .risk-card { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; padding: 16px; }
  .risk-card-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 8px; }
  .risk-badge { display: inline-block; padding: 3px 10px; border-radius: 4px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
  .risk-critical { background: #FEE2E2; color: var(--red); }
  .risk-high { background: #FEF3C7; color: var(--amber); }
  .risk-medium { background: #E0F2FE; color: #0369A1; }
  .risk-monitor { background: var(--green-light); color: var(--green); }
  .risk-velocity { font-size: 11px; color: var(--muted); margin-top: 4px; }
  .risk-detail { font-size: 13px; color: var(--mid); margin-top: 6px; }

  /* Supplier profile */
  .supplier-field { display: flex; padding: 10px 0; border-bottom: 1px solid var(--rule); font-size: 14px; gap: 16px; }
  .supplier-field:last-child { border-bottom: none; }
  .supplier-field-label { font-weight: 600; color: var(--ink); min-width: 180px; flex-shrink: 0; }
  .supplier-field-value { color: var(--mid); flex: 1; }

  /* Country comparison table */
  .country-table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
  .country-table th { background: var(--slate); color: white; padding: 10px 14px; text-align: left; font-size: 12px; }
  .country-table td { padding: 10px 14px; border-bottom: 1px solid var(--rule); vertical-align: middle; }
  .country-table tr:last-child td { border-bottom: none; }
  .country-table tr:hover td { background: var(--bg); }
  .ct-low { color: var(--green); font-weight: 600; }
  .ct-med { color: var(--amber); font-weight: 600; }
  .ct-high { color: var(--red); font-weight: 600; }

  /* Benchmark data */
  .benchmark-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); border-radius: 4px; overflow: hidden; margin: 4px 0; }
  .benchmark-cell { background: var(--white); padding: 10px 14px; font-size: 13px; }
  .benchmark-header { background: var(--slate); color: white; }
  .benchmark-label { font-weight: 600; }
  .benchmark-value { color: var(--amber); font-weight: 700; }
  .benchmark-trend-up { color: var(--red); }
  .benchmark-trend-down { color: var(--green); }
  .benchmark-trend-flat { color: var(--muted); }

  /* Tariff / trade section */
  .tariff-card { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 14px 0; }
  .tariff-header { background: var(--slate); color: white; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; }
  .tariff-route { font-size: 15px; font-weight: 700; }
  .tariff-code { font-size: 12px; opacity: 0.6; }
  .tariff-row { display: grid; grid-template-columns: 1fr 1fr 1fr; padding: 12px 18px; border-bottom: 1px solid var(--rule); font-size: 14px; gap: 8px; }
  .tariff-row:last-child { border-bottom: none; }
  .tariff-row-label { font-weight: 600; color: var(--ink); }
  .tariff-rate { font-size: 18px; font-weight: 700; color: var(--amber); }
  .tariff-note { font-size: 12px; color: var(--muted); }

  /* Disruption alerts */
  .alert-critical { background: var(--red-light); border: 2px solid var(--red); border-radius: 8px; padding: 16px 20px; margin: 12px 0; }
  .alert-warning { background: var(--amber-light); border: 2px solid var(--amber-border); border-radius: 8px; padding: 16px 20px; margin: 12px 0; }
  .alert-monitor { background: var(--bg); border: 1px solid var(--rule); border-radius: 8px; padding: 14px 18px; margin: 12px 0; }
  .alert-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
  .alert-critical .alert-label { color: var(--red); }
  .alert-warning .alert-label { color: var(--amber); }
  .alert-monitor .alert-label { color: var(--muted); }
  .alert-title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 6px; }
  .alert-detail { font-size: 13px; color: var(--mid); }

  /* Negotiation position map */
  .position-track { position: relative; height: 8px; background: linear-gradient(90deg, var(--green), var(--amber-2), var(--red)); border-radius: 4px; margin: 16px 0; }
  .position-marker { position: absolute; top: -8px; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 1px 4px rgba(0,0,0,0.3); }
  .position-marker.target { background: var(--green); }
  .position-marker.current { background: var(--amber); }
  .position-marker.walkaway { background: var(--red); }
  .position-labels { display: flex; justify-content: space-between; font-size: 11px; color: var(--muted); margin-top: 4px; }

  .lever-item { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--rule); align-items: flex-start; }
  .lever-item:last-child { border-bottom: none; }
  .lever-num { background: var(--amber); color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
  .lever-body { flex: 1; }
  .lever-action { font-size: 14px; font-weight: 600; color: var(--ink); }
  .lever-exchange { font-size: 13px; color: var(--mid); margin-top: 3px; }

  /* Adversarial */
  .adversarial { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 24px 0; }
  .adversarial-header { background: var(--slate); color: white; padding: 12px 18px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
  .adversarial-row { padding: 14px 18px; border-bottom: 1px solid var(--rule); font-size: 14px; }
  .adversarial-row:last-child { border-bottom: none; }
  .adv-claim { font-weight: 700; color: var(--ink); margin-bottom: 5px; }
  .adv-counter { color: var(--mid); font-size: 13px; margin-bottom: 6px; }
  .v-held { color: var(--green); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-weakened { color: var(--amber); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-failed { color: var(--red); font-size: 11px; font-weight: 700; text-transform: uppercase; }

  /* Grade badges */
  .grade { display: inline-block; font-size: 10px; font-weight: 700; padding: 1px 5px; border-radius: 3px; margin-left: 3px; }
  .grade-a { background: #D1FAE5; color: var(--green); }
  .grade-b { background: #FEF3C7; color: var(--amber); }
  .grade-c { background: #F1F5F9; color: var(--muted); }

  /* Data freshness warning */
  .freshness-warn { display: inline-flex; align-items: center; gap: 6px; background: var(--amber-light); border: 1px solid var(--amber-border); border-radius: 4px; padding: 4px 10px; font-size: 12px; color: var(--amber); font-weight: 600; margin: 8px 0; }

  .footer { background: var(--slate); color: rgba(255,255,255,0.45); padding: 22px 64px; font-size: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: 56px; }
  .footer-brand { color: white; font-weight: 700; letter-spacing: 0.06em; }
  .footer-note { font-style: italic; }

  @media print {
    .cover { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { font-size: 13px; }
    .content { padding: 20px 12px; }
  }
</style>
</head>
<body>

<div class="cover">
  <div class="cover-brand">CORYANT · Supply Chain Intelligence</div>
  <div class="cover-type">[MOMENT TYPE]</div>
  <h1 class="cover-title">[Supplier / Category / Geography / Decision]</h1>
  <p class="cover-sub">[Brief description of the decision or research question]</p>
  <div class="cover-meta">
    <span>Prepared: [Date]</span>
    <span>Depth: [SURFACE / STANDARD / DEEP]</span>
    <span>Agents: [n]</span>
    <span>Scope: [Global / Regional / Country]</span>
  </div>
  <!-- Only show if CRITICAL risk present -->
  <div class="cover-alert show">⚠️ CRITICAL RISK IDENTIFIED — See risk section for immediate action required</div>
</div>

<div class="toc">
  <div class="toc-label">Contents</div>
  <div class="toc-items">
    <a href="#decision">Decision Summary</a>
    <a href="#supplier">Supplier Profile</a>
    <a href="#risk">Risk Assessment</a>
    <a href="#trade">Trade Intelligence</a>
    <a href="#benchmark">Market Benchmarks</a>
    <a href="#sourcing">Sourcing Options</a>
    <a href="#disruption">Disruption Scan</a>
    <a href="#negotiation">Negotiation Prep</a>
    <a href="#network">Network Intelligence</a>
    <a href="#adversarial">Adversarial Review</a>
    <a href="#sources">Sources</a>
  </div>
</div>

<div class="content">

<!-- DECISION SUMMARY -->
<section id="decision">
<h1>Decision Summary</h1>
<div class="decision-box">
  <div class="decision-label">Intelligence Verdict</div>
  <div class="decision-headline">[The direct answer to the procurement decision — not a summary of research]</div>
  <p>[2–3 sentences: what was found and the key implication for this decision]</p>
  <div class="decision-cols">
    <div>
      <div class="decision-col-label">Immediate Action</div>
      <div class="decision-col-value">[What to do in the next 7 days]</div>
    </div>
    <div>
      <div class="decision-col-label">Biggest Risk</div>
      <div class="decision-col-value">[The main risk that could affect this decision]</div>
    </div>
    <div>
      <div class="decision-col-label">Key Uncertainty</div>
      <div class="decision-col-value">[What we don't know that matters]</div>
    </div>
  </div>
</div>
</section>

<!-- SUPPLIER PROFILE (if SUPPLIER_INTEL moment) -->
<section id="supplier">
<h1>Supplier Profile</h1>
<div class="supplier-field"><div class="supplier-field-label">Legal entity</div><div class="supplier-field-value">[x] <span class="grade grade-a">A</span></div></div>
<div class="supplier-field"><div class="supplier-field-label">Jurisdiction</div><div class="supplier-field-value">[x]</div></div>
<div class="supplier-field"><div class="supplier-field-label">Ownership</div><div class="supplier-field-value">[x — flag opacity] <span class="grade grade-b">B</span></div></div>
<div class="supplier-field"><div class="supplier-field-label">Financial health</div><div class="supplier-field-value">[x]</div></div>
<div class="supplier-field"><div class="supplier-field-label">Certifications</div><div class="supplier-field-value">[x — current/expired]</div></div>
<div class="supplier-field"><div class="supplier-field-label">Sanctions</div><div class="supplier-field-value">[CLEAR / ⚠️ FLAG]</div></div>
<div class="supplier-field"><div class="supplier-field-label">Red flags</div><div class="supplier-field-value">[NONE / list]</div></div>
</section>

<!-- RISK ASSESSMENT -->
<section id="risk">
<h1>Risk Assessment</h1>
<div class="risk-grid">
  <div class="risk-card">
    <div class="risk-card-label">Geopolitical</div>
    <div><span class="risk-badge risk-high">HIGH</span></div>
    <div class="risk-velocity">Velocity: MEDIUM (1–6 month horizon)</div>
    <div class="risk-detail">[Specific risk factor and current signal]</div>
  </div>
  <div class="risk-card">
    <div class="risk-card-label">Financial</div>
    <div><span class="risk-badge risk-monitor">MONITOR</span></div>
    <div class="risk-velocity">Velocity: SLOW</div>
    <div class="risk-detail">[Assessment]</div>
  </div>
  <div class="risk-card">
    <div class="risk-card-label">Operational</div>
    <div><span class="risk-badge risk-medium">MEDIUM</span></div>
    <div class="risk-velocity">Velocity: MEDIUM</div>
    <div class="risk-detail">[Assessment]</div>
  </div>
  <div class="risk-card">
    <div class="risk-card-label">Concentration</div>
    <div><span class="risk-badge risk-critical">CRITICAL</span></div>
    <div class="risk-velocity">Velocity: FAST (single-source)</div>
    <div class="risk-detail">[Single source — 0 qualified alternatives — qualification 6+ months]</div>
  </div>
</div>
</section>

<!-- TRADE INTELLIGENCE -->
<section id="trade">
<h1>Trade Intelligence</h1>
<div class="freshness-warn">⚠️ Tariff rates as of [date] — verify before commercial use</div>
<div class="tariff-card">
  <div class="tariff-header">
    <span class="tariff-route">[Origin] → [Destination]</span>
    <span class="tariff-code">HS [code] · [description]</span>
  </div>
  <div class="tariff-row">
    <div><div class="tariff-row-label">MFN Rate</div><div class="tariff-rate">[x%]</div></div>
    <div><div class="tariff-row-label">Preferential (FTA)</div><div class="tariff-rate" style="color:var(--green)">[x% under FTA]</div></div>
    <div><div class="tariff-row-label">Additional Duties</div><div class="tariff-rate" style="color:var(--red)">[x% AD/Section 301]</div></div>
  </div>
  <div class="tariff-row">
    <div><div class="tariff-row-label">VAT/GST on Import</div><div class="tariff-rate">[x%]</div></div>
    <div><div class="tariff-row-label">Total Landed Duty</div><div class="tariff-rate">[x%]</div></div>
    <div><div class="tariff-note">Rules of origin: [qualification status]</div></div>
  </div>
</div>
</section>

<!-- MARKET BENCHMARKS -->
<section id="benchmark">
<h1>Market Benchmarks</h1>
<div class="freshness-warn">⚠️ Market data as of [date] — prices change continuously</div>
<div class="benchmark-row">
  <div class="benchmark-cell benchmark-header benchmark-label">Benchmark</div>
  <div class="benchmark-cell benchmark-header">Current</div>
  <div class="benchmark-cell benchmark-header">12m Range</div>
  <div class="benchmark-cell benchmark-header">Trend</div>
</div>
<div class="benchmark-row">
  <div class="benchmark-cell benchmark-label">[Commodity / Freight rate]</div>
  <div class="benchmark-cell benchmark-value">[x]</div>
  <div class="benchmark-cell">[low – high]</div>
  <div class="benchmark-cell benchmark-trend-up">↑ RISING</div>
</div>
[Repeat for each benchmark]
</section>

<!-- SOURCING OPTIONS -->
<section id="sourcing">
<h1>Sourcing Options</h1>
[Country comparison table, supplier tiers, sourcing strategy options]
</section>

<!-- DISRUPTION SCAN -->
<section id="disruption">
<h1>Disruption Scan</h1>
<div class="alert-critical">
  <div class="alert-label">⚠️ Active Disruption</div>
  <div class="alert-title">[Disruption title]</div>
  <div class="alert-detail">[What is affected, severity, estimated duration, immediate action]</div>
</div>
<div class="alert-warning">
  <div class="alert-label">Early Warning</div>
  <div class="alert-title">[Signal title]</div>
  <div class="alert-detail">[Trigger observed, probability, timeline, watch action]</div>
</div>
</section>

<!-- NEGOTIATION PREP -->
<section id="negotiation">
<h1>Negotiation Prep</h1>
<h2>Leverage Balance</h2>
<p>Buyer leverage: <strong>[STRONG / MODERATE / WEAK]</strong> · Supplier leverage: <strong>[STRONG / MODERATE / WEAK]</strong></p>
<h2>Concession Hierarchy</h2>
<div class="lever-item"><div class="lever-num">1</div><div class="lever-body"><div class="lever-action">[Give first: cheapest concession]</div><div class="lever-exchange">In exchange for: [x]</div></div></div>
<div class="lever-item"><div class="lever-num">2</div><div class="lever-body"><div class="lever-action">[Give second]</div><div class="lever-exchange">In exchange for: [x]</div></div></div>
<div class="lever-item"><div class="lever-num">3</div><div class="lever-body"><div class="lever-action">[Last resort — price, only if tied to something]</div><div class="lever-exchange">In exchange for: [x]</div></div></div>
</section>

<!-- ADVERSARIAL REVIEW -->
<section id="adversarial">
<h1>Adversarial Review</h1>
<div class="adversarial">
  <div class="adversarial-header">Stage 3.5 — Top Conclusions Stress-Tested</div>
  <div class="adversarial-row">
    <div class="adv-claim">Conclusion 1: [State the conclusion clearly]</div>
    <div class="adv-counter">Challenge: [The strongest counter-argument or data quality concern]</div>
    <span class="v-held">HELD — [reason the conclusion survives]</span>
  </div>
  <div class="adversarial-row">
    <div class="adv-claim">Conclusion 2: [State clearly]</div>
    <div class="adv-counter">Challenge: [Stale data, single-source, optimism in supplier research]</div>
    <span class="v-weakened">WEAKENED — [important caveat]</span>
  </div>
  <div class="adversarial-row">
    <div class="adv-claim">Conclusion 3: [State clearly]</div>
    <div class="adv-counter">Challenge: [x]</div>
    <span class="v-failed">FAILED — [removed/revised. Corrected view: x]</span>
  </div>
</div>
</section>

<!-- SOURCES -->
<div id="sources" style="background:var(--white);border:1px solid var(--rule);border-radius:8px;padding:24px;margin-top:36px;">
<h2 style="border-bottom:1px solid var(--rule);padding-bottom:10px;margin-bottom:14px;">Sources</h2>
<div style="font-size:13px;color:var(--mid);line-height:2;">[1] [Source name] — [URL if applicable] — [date]</div>
<div style="margin-top:16px;font-size:12px;color:var(--muted);">
  <span class="grade grade-a">A</span> Primary/official source &nbsp;·&nbsp;
  <span class="grade grade-b">B</span> Single secondary source &nbsp;·&nbsp;
  <span class="grade grade-c">C</span> Inferred/historical — verify before commercial use
</div>
<div style="margin-top:10px;font-size:12px;color:var(--red);">⚠️ Market prices (commodity, freight, tariff rates) are point-in-time reference data. Always obtain current quotes for commercial decisions.</div>
</div>

</div>

<div class="footer">
  <span class="footer-brand">CORYANT</span>
  <span class="footer-note">Supply chain intelligence. Not commercial advice. Verify time-sensitive data before use.</span>
  <span>coryant.xyz</span>
</div>

</body>
</html>
```
