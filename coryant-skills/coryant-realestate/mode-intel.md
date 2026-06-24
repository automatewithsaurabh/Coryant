# CORYANT Real Estate — Intel Report Mode

When this mode is selected, produce a fully self-contained HTML document using the template below. Replace all `[PLACEHOLDER]` values with actual content from the analysis.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT Real Estate — [PROPERTY NAME OR TYPE]</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    --green: #14532D;
    --green-mid: #166534;
    --green-light: #DCFCE7;
    --brass: #92400E;
    --brass-light: #FEF3C7;
    --brass-mid: #D97706;
    --cream: #FAFAF5;
    --cream-dark: #F0EDE6;
    --text: #1C1917;
    --text-light: #57534E;
    --border: #D6D3CE;
    --white: #FFFFFF;
    --red: #991B1B;
    --red-light: #FEF2F2;
    --amber: #B45309;
    --amber-light: #FFFBEB;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--cream);
    color: var(--text);
    font-size: 14px;
    line-height: 1.6;
  }

  .report-wrapper { max-width: 960px; margin: 0 auto; padding: 32px 24px; }

  /* HEADER */
  .report-header {
    background: var(--green);
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
  }
  .report-header::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 220px; height: 220px;
    border-radius: 50%;
    background: rgba(146, 64, 14, 0.25);
  }
  .header-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    margin-bottom: 8px;
  }
  .header-property {
    font-size: 22px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 6px;
    line-height: 1.3;
  }
  .header-meta {
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    margin-bottom: 28px;
  }

  /* VERDICT BOX */
  .verdict-box {
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 10px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .verdict-badge {
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #FFFFFF;
    padding: 8px 20px;
    border-radius: 8px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .verdict-badge.buy { background: #16A34A; }
  .verdict-badge.negotiate { background: #D97706; }
  .verdict-badge.pass { background: #DC2626; }
  .verdict-badge.hold { background: #2563EB; }
  .verdict-text {
    font-size: 14px;
    color: rgba(255,255,255,0.9);
    line-height: 1.5;
  }

  /* METRICS BAR */
  .metrics-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    margin-bottom: 28px;
  }
  .metric-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
    text-align: center;
  }
  .metric-label {
    font-size: 11px;
    font-weight: 600;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  }
  .metric-value {
    font-size: 22px;
    font-weight: 700;
    color: var(--green);
  }
  .metric-sub {
    font-size: 11px;
    color: var(--text-light);
    margin-top: 3px;
  }

  /* SECTION */
  .section { margin-bottom: 28px; }
  .section-title {
    font-size: 13px;
    font-weight: 700;
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--green-light);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* RED FLAGS */
  .flags-container { display: flex; flex-direction: column; gap: 10px; }
  .flag-item {
    border-radius: 8px;
    padding: 14px 16px;
    border-left: 4px solid;
  }
  .flag-item.critical {
    background: var(--red-light);
    border-color: var(--red);
  }
  .flag-item.amber {
    background: var(--amber-light);
    border-color: var(--amber);
  }
  .flag-item.clear {
    background: var(--green-light);
    border-color: #16A34A;
  }
  .flag-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
  }
  .flag-item.critical .flag-label { color: var(--red); }
  .flag-item.amber .flag-label { color: var(--amber); }
  .flag-item.clear .flag-label { color: #16A34A; }
  .flag-text { font-size: 13px; line-height: 1.5; }
  .flag-action {
    font-size: 12px;
    font-weight: 500;
    margin-top: 6px;
    color: var(--text-light);
  }

  /* COMPARABLES TABLE */
  .comp-table { width: 100%; border-collapse: collapse; font-size: 12px; }
  .comp-table th {
    background: var(--green);
    color: white;
    padding: 8px 10px;
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .comp-table td {
    padding: 8px 10px;
    border-bottom: 1px solid var(--border);
    vertical-align: top;
  }
  .comp-table tr:nth-child(even) td { background: var(--cream-dark); }

  /* DEAL MODEL */
  .model-scenarios {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 16px;
  }
  .scenario-card {
    border-radius: 10px;
    padding: 18px;
    text-align: center;
    border: 1px solid;
  }
  .scenario-card.bear { background: #FEF2F2; border-color: #FECACA; }
  .scenario-card.base { background: #FFFBEB; border-color: #FDE68A; }
  .scenario-card.bull { background: var(--green-light); border-color: #86EFAC; }
  .scenario-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 10px;
  }
  .scenario-card.bear .scenario-label { color: var(--red); }
  .scenario-card.base .scenario-label { color: var(--amber); }
  .scenario-card.bull .scenario-label { color: var(--green); }
  .scenario-irr {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .scenario-card.bear .scenario-irr { color: var(--red); }
  .scenario-card.base .scenario-irr { color: var(--amber); }
  .scenario-card.bull .scenario-irr { color: var(--green); }
  .scenario-detail { font-size: 11px; color: var(--text-light); line-height: 1.6; }

  /* INCOME TABLE */
  .income-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .income-table td { padding: 7px 10px; border-bottom: 1px solid var(--border); }
  .income-table .total-row td { font-weight: 700; background: var(--cream-dark); }
  .income-table .noi-row td { font-weight: 700; color: var(--green); background: var(--green-light); }
  .income-table td:last-child { text-align: right; font-variant-numeric: tabular-nums; }

  /* SENSITIVITY */
  .sensitivity-table { width: 100%; border-collapse: collapse; font-size: 12px; }
  .sensitivity-table th, .sensitivity-table td { padding: 8px 10px; text-align: center; border: 1px solid var(--border); }
  .sensitivity-table th { background: var(--green); color: white; font-weight: 600; }
  .sensitivity-table .row-header { background: var(--cream-dark); font-weight: 600; text-align: left; }
  .sensitivity-table .highlight { background: #FEF3C7; font-weight: 700; }

  /* COVENANT */
  .covenant-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
  }
  .covenant-badge {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
  }
  .covenant-badge.strong { background: #DCFCE7; color: #14532D; }
  .covenant-badge.adequate { background: #DBEAFE; color: #1D4ED8; }
  .covenant-badge.weak { background: #FEF3C7; color: #92400E; }
  .covenant-badge.speculative { background: #FEE2E2; color: #991B1B; }

  /* PLANNING */
  .planning-risk {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .planning-risk.low { background: #DCFCE7; color: #14532D; }
  .planning-risk.medium { background: #FEF3C7; color: #92400E; }
  .planning-risk.high { background: #FEE2E2; color: #991B1B; }
  .planning-risk.very-high { background: #991B1B; color: white; }

  /* LEASE */
  .lease-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .lease-table td { padding: 8px 10px; border-bottom: 1px solid var(--border); vertical-align: top; }
  .lease-table td:first-child { font-weight: 600; color: var(--text-light); width: 40%; }
  .lease-quality {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .lease-quality.institutional { background: var(--green-light); color: var(--green); }
  .lease-quality.investment { background: #DBEAFE; color: #1D4ED8; }
  .lease-quality.sub-investment { background: var(--amber-light); color: var(--brass); }
  .lease-quality.speculative { background: var(--red-light); color: var(--red); }

  /* MARKET CYCLE */
  .cycle-badge {
    display: inline-block;
    padding: 6px 18px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 14px;
  }
  .cycle-badge.recovery { background: #DCFCE7; color: #14532D; }
  .cycle-badge.expansion { background: #DBEAFE; color: #1D4ED8; }
  .cycle-badge.peak { background: var(--amber-light); color: var(--brass); }
  .cycle-badge.correction { background: var(--red-light); color: var(--red); }
  .cycle-badge.trough { background: #F3F4F6; color: #374151; }

  /* ENTRY SIGNAL */
  .entry-signal {
    border-radius: 10px;
    padding: 16px 20px;
    margin-top: 14px;
    border-left: 4px solid;
  }
  .entry-signal.buy { background: #F0FDF4; border-color: #16A34A; }
  .entry-signal.hold { background: #EFF6FF; border-color: #2563EB; }
  .entry-signal.sell { background: var(--amber-light); border-color: var(--amber); }
  .entry-signal.caution { background: var(--red-light); border-color: var(--red); }
  .signal-label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  }
  .entry-signal.buy .signal-label { color: #16A34A; }
  .entry-signal.hold .signal-label { color: #2563EB; }
  .entry-signal.sell .signal-label { color: var(--amber); }
  .entry-signal.caution .signal-label { color: var(--red); }

  /* VALUATION */
  .value-range {
    background: var(--green);
    color: white;
    border-radius: 10px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }
  .value-label { font-size: 12px; opacity: 0.7; margin-bottom: 4px; }
  .value-number { font-size: 24px; font-weight: 700; }
  .value-divider { opacity: 0.3; font-size: 24px; }

  /* ADVERSARIAL */
  .adversarial-item {
    padding: 12px 14px;
    border-radius: 8px;
    margin-bottom: 8px;
    border-left: 4px solid;
  }
  .adversarial-item.held { background: #F0FDF4; border-color: #16A34A; }
  .adversarial-item.weakened { background: var(--amber-light); border-color: var(--amber); }
  .adversarial-item.failed { background: var(--red-light); border-color: var(--red); }
  .adv-verdict {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .adversarial-item.held .adv-verdict { color: #16A34A; }
  .adversarial-item.weakened .adv-verdict { color: var(--amber); }
  .adversarial-item.failed .adv-verdict { color: var(--red); }
  .adv-claim { font-size: 13px; font-weight: 600; margin: 3px 0; }
  .adv-note { font-size: 12px; color: var(--text-light); }

  /* GRADE BADGE */
  .grade { font-size: 10px; font-weight: 700; padding: 2px 7px; border-radius: 4px; display: inline-block; }
  .grade-a { background: var(--green-light); color: var(--green); }
  .grade-b { background: #DBEAFE; color: #1E40AF; }
  .grade-c { background: #FEF3C7; color: #92400E; }

  /* BIG RISK */
  .big-risk {
    background: var(--red-light);
    border: 1px solid #FECACA;
    border-left: 4px solid var(--red);
    border-radius: 10px;
    padding: 16px 20px;
    margin-bottom: 28px;
  }
  .big-risk-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--red);
    margin-bottom: 6px;
  }
  .big-risk-text { font-size: 13px; line-height: 1.5; }

  /* PROFESSIONAL ADVICE */
  .advice-list { display: flex; flex-direction: column; gap: 8px; }
  .advice-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 12px 14px;
    font-size: 13px;
  }
  .advice-type {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    background: var(--brass-light);
    color: var(--brass);
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* DISCLAIMER */
  .disclaimer {
    background: #F8F5F0;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 16px;
    font-size: 11px;
    color: var(--text-light);
    margin-top: 32px;
    line-height: 1.6;
  }

  /* FOOTER */
  .report-footer {
    text-align: center;
    font-size: 11px;
    color: var(--text-light);
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }

  @media (max-width: 600px) {
    .model-scenarios { grid-template-columns: 1fr; }
    .value-range { flex-direction: column; gap: 12px; text-align: center; }
    .metrics-bar { grid-template-columns: repeat(2, 1fr); }
  }
</style>
</head>
<body>
<div class="report-wrapper">

  <!-- HEADER -->
  <div class="report-header">
    <div class="header-label">CORYANT Real Estate Intelligence</div>
    <div class="header-property">[PROPERTY NAME / TYPE / ADDRESS]</div>
    <div class="header-meta">[MOMENT TYPE] · [PROPERTY TYPE] · [JURISDICTION] · [DATE]</div>
    <div class="verdict-box">
      <div class="verdict-badge [buy/negotiate/pass/hold]">[BUY / NEGOTIATE / PASS / HOLD]</div>
      <div class="verdict-text">[One or two sentences stating the verdict and the specific condition. E.g., "Buy at or below £X — the deal works on a base case IRR of 9.2% at this price. Offer is not supportable above asking price given the exit yield sensitivity."]</div>
    </div>
  </div>

  <!-- KEY METRICS -->
  <div class="metrics-bar">
    <div class="metric-card">
      <div class="metric-label">Asking / Guide</div>
      <div class="metric-value">£[X]</div>
      <div class="metric-sub">[Price per sq ft]</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Net Yield / Cap Rate</div>
      <div class="metric-value">[X]%</div>
      <div class="metric-sub">vs. market [X]%</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">IRR (Base)</div>
      <div class="metric-value">[X]%</div>
      <div class="metric-sub">Unlevered / Levered [X]%</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">WAULT</div>
      <div class="metric-value">[X] yrs</div>
      <div class="metric-sub">To break / expiry [X] yrs</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Supported Value</div>
      <div class="metric-value">£[X]–[Y]</div>
      <div class="metric-sub">Comparable evidence</div>
    </div>
  </div>

  <!-- RED FLAGS (always first) -->
  <div class="section">
    <div class="section-title">⚠ Red Flag Scan</div>
    <div class="flags-container">
      <!-- CRITICAL flags -->
      <div class="flag-item critical">
        <div class="flag-label">Critical — [CATEGORY]</div>
        <div class="flag-text">[Flag description]</div>
        <div class="flag-action">Action: [Specific professional action required]</div>
      </div>
      <!-- AMBER flags -->
      <div class="flag-item amber">
        <div class="flag-label">Amber — [CATEGORY]</div>
        <div class="flag-text">[Flag description]</div>
        <div class="flag-action">Action: [Action or negotiation point]</div>
      </div>
      <!-- If clear in a category -->
      <div class="flag-item clear">
        <div class="flag-label">Clear — [CATEGORY]</div>
        <div class="flag-text">No material flags identified.</div>
      </div>
    </div>
  </div>

  <!-- COMPARABLE EVIDENCE -->
  <div class="section">
    <div class="section-title">Comparable Evidence <span class="grade grade-b">B</span></div>
    <table class="comp-table">
      <tr>
        <th>Address</th><th>Date</th><th>Size</th><th>Price</th><th>£/sq ft</th><th>Adjustments</th><th>Adj. Price</th>
      </tr>
      <tr>
        <td>[Address]</td><td>[Date]</td><td>[X sq ft]</td><td>[£X]</td><td>[£X]</td><td>[+X% condition]</td><td>[£X]</td>
      </tr>
    </table>
    <div style="margin-top:12px; font-size:13px;">
      <strong>Supported range:</strong> £[X]–£[Y] · <strong>Confidence:</strong> MEDIUM
    </div>
  </div>

  <!-- DEAL MODEL -->
  <div class="section">
    <div class="section-title">Investment Model <span class="grade grade-c">C — Stated Assumptions</span></div>

    <!-- Scenarios -->
    <div class="model-scenarios">
      <div class="scenario-card bear">
        <div class="scenario-label">Bear</div>
        <div class="scenario-irr">[X]%</div>
        <div class="scenario-detail">IRR · [X]× equity multiple<br>Exit yield +0.5pp · Rent −2%pa · Vacancy +5pp</div>
      </div>
      <div class="scenario-card base">
        <div class="scenario-label">Base</div>
        <div class="scenario-irr">[X]%</div>
        <div class="scenario-detail">IRR · [X]× equity multiple<br>Exit yield [X]% · Rent +[X]%pa</div>
      </div>
      <div class="scenario-card bull">
        <div class="scenario-label">Bull</div>
        <div class="scenario-irr">[X]%</div>
        <div class="scenario-detail">IRR · [X]× equity multiple<br>Exit yield −0.25pp · Rent +[X]%pa</div>
      </div>
    </div>

    <!-- Income table -->
    <table class="income-table">
      <tr><td>Gross passing rent</td><td>£[X] pa</td></tr>
      <tr><td>ERV (market rent)</td><td>£[X] pa</td></tr>
      <tr><td>Vacancy allowance ([X]%)</td><td>−£[X]</td></tr>
      <tr><td>Management ([X]%)</td><td>−£[X]</td></tr>
      <tr><td>Repairs and maintenance</td><td>−£[X]</td></tr>
      <tr><td>Insurance</td><td>−£[X]</td></tr>
      <tr class="noi-row"><td>Net Operating Income</td><td>£[X] pa</td></tr>
      <tr><td>Gross-to-net ratio</td><td>[X]%</td></tr>
    </table>

    <!-- Sensitivity -->
    <div style="margin-top:16px;">
      <div style="font-size:12px; font-weight:600; color:var(--text-light); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.06em;">Unlevered IRR Sensitivity — Exit Yield × Purchase Price</div>
      <table class="sensitivity-table">
        <tr><th>Exit Yield ↓ Price →</th><th>−10%</th><th>Asking</th><th>+10%</th></tr>
        <tr><td class="row-header">Yield −0.5pp</td><td>[X]%</td><td>[X]%</td><td>[X]%</td></tr>
        <tr><td class="row-header">Market Yield</td><td>[X]%</td><td class="highlight">[X]%</td><td>[X]%</td></tr>
        <tr><td class="row-header">Yield +0.5pp</td><td>[X]%</td><td>[X]%</td><td>[X]%</td></tr>
      </table>
    </div>
  </div>

  <!-- VALUATION RECONCILIATION -->
  <div class="section">
    <div class="section-title">Valuation Reconciliation</div>
    <div class="value-range">
      <div><div class="value-label">Floor (Comparable)</div><div class="value-number">£[X]</div></div>
      <div class="value-divider">—</div>
      <div><div class="value-label">Primary Indicator</div><div class="value-number">£[X]</div></div>
      <div class="value-divider">—</div>
      <div><div class="value-label">Ceiling (Income)</div><div class="value-number">£[X]</div></div>
    </div>
    <div style="font-size:13px;">At asking price of £[X], implied NIY is <strong>[X]%</strong> vs. market [X]%. Confidence: <strong>[MEDIUM]</strong>.</div>
  </div>

  <!-- TENANT COVENANT (if applicable) -->
  <div class="section">
    <div class="section-title">Tenant Covenant</div>
    <div class="covenant-card">
      <div class="covenant-badge [strong/adequate/weak/speculative]">[STRONG / ADEQUATE / WEAK / SPECULATIVE]</div>
      <div style="font-size:13px; line-height:1.6;">[Covenant summary — entity, financial health signals, sector outlook, break probability, void cost estimate]</div>
    </div>
  </div>

  <!-- MARKET CYCLE (if applicable) -->
  <div class="section">
    <div class="section-title">Market Context</div>
    <div class="cycle-badge [recovery/expansion/peak/correction/trough]">[CYCLE POSITION]</div>
    <div style="font-size:13px; line-height:1.6; margin-bottom:14px;">[Market analysis — yield vs. historical, affordability/vacancy, supply pipeline, rate environment]</div>
    <div class="entry-signal [buy/hold/sell/caution]">
      <div class="signal-label">[BUY / HOLD / SELL / CAUTION]</div>
      <div style="font-size:13px;">[Specific reasoning for the market timing signal]</div>
    </div>
  </div>

  <!-- ADVERSARIAL REVIEW -->
  <div class="section">
    <div class="section-title">Adversarial Review</div>
    <div class="adversarial-item held">
      <div class="adv-verdict">Held</div>
      <div class="adv-claim">[Conclusion title]</div>
      <div class="adv-note">[The conclusion survives — reasoning]</div>
    </div>
    <div class="adversarial-item weakened">
      <div class="adv-verdict">Weakened</div>
      <div class="adv-claim">[Conclusion title]</div>
      <div class="adv-note">[Survives with qualification — what changed]</div>
    </div>
    <div class="adversarial-item failed">
      <div class="adv-verdict">Failed</div>
      <div class="adv-claim">[Conclusion title]</div>
      <div class="adv-note">[Does not hold — what this means for the verdict]</div>
    </div>
  </div>

  <!-- THE ONE RISK -->
  <div class="big-risk">
    <div class="big-risk-label">The Single Greatest Risk to This Deal</div>
    <div class="big-risk-text">[Specific, not generic. The one thing most likely to make this deal go wrong — with precise reasoning why this particular risk is the dominant one for this specific asset.]</div>
  </div>

  <!-- PROFESSIONAL ADVICE -->
  <div class="section">
    <div class="section-title">Professional Due Diligence Required</div>
    <div class="advice-list">
      <div class="advice-item">
        <div class="advice-type">Solicitor</div>
        <div>[Specific title instruction: review of title register, restrictive covenants, lease, etc.]</div>
      </div>
      <div class="advice-item">
        <div class="advice-type">Surveyor</div>
        <div>[RICS Level 3 / Level 2 / Structural / M&E — specific reason for this level given this asset]</div>
      </div>
      <div class="advice-item">
        <div class="advice-type">Other</div>
        <div>[Planning consultant / Environmental survey / Asbestos / Valuer — specific reason]</div>
      </div>
    </div>
  </div>

  <!-- DISCLAIMER -->
  <div class="disclaimer">
    <strong>Important:</strong> This report is analytical intelligence produced by CORYANT Real Estate. It is not an RICS Red Book valuation, USPAP appraisal, legal advice, or professional planning assessment. Financial model inputs are stated assumptions ([C] grade) and require independent verification. Comparable data is sourced from public records and web search — verify before relying on in negotiations. Do not use this report for mortgage or financing purposes without an independent professional valuation. Instruct a qualified solicitor before transacting.
  </div>

  <div class="report-footer">
    CORYANT Real Estate · coryant.xyz · Analysis date: [DATE]
  </div>

</div>
</body>
</html>
```
