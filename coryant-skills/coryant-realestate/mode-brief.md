# CORYANT Real Estate — Decision Brief Mode

Produce a clean, print-ready HTML decision memo. One page. Everything that matters, nothing that doesn't.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT — [PROPERTY] Decision Brief</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', sans-serif;
    background: #FFFFFF;
    color: #1C1917;
    font-size: 13px;
    line-height: 1.6;
  }

  .brief { max-width: 720px; margin: 0 auto; padding: 40px 32px; }

  .brief-header {
    border-bottom: 3px solid #14532D;
    padding-bottom: 20px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .brief-mark {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #14532D;
  }
  .brief-property { font-size: 18px; font-weight: 700; margin-top: 4px; }
  .brief-meta { font-size: 11px; color: #57534E; margin-top: 3px; }
  .brief-date { font-size: 11px; color: #57534E; text-align: right; }

  /* VERDICT */
  .verdict {
    border-radius: 8px;
    padding: 18px 24px;
    margin-bottom: 24px;
    border: 1px solid;
  }
  .verdict.buy { background: #F0FDF4; border-color: #16A34A; }
  .verdict.negotiate { background: #FFFBEB; border-color: #D97706; }
  .verdict.pass { background: #FEF2F2; border-color: #DC2626; }
  .verdict.hold { background: #EFF6FF; border-color: #2563EB; }
  .verdict-header { display: flex; align-items: center; gap: 14px; margin-bottom: 8px; }
  .verdict-word {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.06em;
  }
  .verdict.buy .verdict-word { color: #16A34A; }
  .verdict.negotiate .verdict-word { color: #D97706; }
  .verdict.pass .verdict-word { color: #DC2626; }
  .verdict.hold .verdict-word { color: #2563EB; }
  .verdict-condition { font-size: 13px; line-height: 1.5; }

  /* SECTIONS */
  .brief-section { margin-bottom: 22px; }
  .section-heading {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #14532D;
    margin-bottom: 10px;
  }

  /* METRIC ROW */
  .metric-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }
  .metric-item { flex: 1; min-width: 100px; }
  .metric-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #78716C; margin-bottom: 3px; }
  .metric-val { font-size: 17px; font-weight: 700; color: #14532D; }

  /* POINT LIST */
  .point-list { list-style: none; }
  .point-list li {
    padding: 8px 0;
    border-bottom: 1px solid #F5F5F4;
    padding-left: 16px;
    position: relative;
    font-size: 13px;
    line-height: 1.5;
  }
  .point-list li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #14532D;
    font-size: 10px;
    top: 10px;
  }

  /* RED FLAGS */
  .flag-brief {
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 6px;
    font-size: 12px;
    border-left: 3px solid;
  }
  .flag-brief.critical { background: #FEF2F2; border-color: #DC2626; }
  .flag-brief.amber { background: #FFFBEB; border-color: #D97706; }
  .flag-brief strong { display: block; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 2px; }
  .flag-brief.critical strong { color: #DC2626; }
  .flag-brief.amber strong { color: #D97706; }

  /* BIG RISK */
  .big-risk-brief {
    background: #FEF2F2;
    border-left: 4px solid #DC2626;
    border-radius: 6px;
    padding: 12px 14px;
  }
  .big-risk-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #DC2626; margin-bottom: 4px; }

  /* NEXT STEPS */
  .next-step {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 8px 0;
    border-bottom: 1px solid #F5F5F4;
    font-size: 13px;
  }
  .step-num {
    width: 22px; height: 22px;
    border-radius: 50%;
    background: #14532D;
    color: white;
    font-size: 11px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* DISCLAIMER */
  .brief-disclaimer {
    font-size: 10px;
    color: #78716C;
    border-top: 1px solid #E7E5E4;
    margin-top: 28px;
    padding-top: 14px;
    line-height: 1.6;
  }

  @media print {
    body { background: white; }
    .brief { padding: 20px; }
  }
</style>
</head>
<body>
<div class="brief">

  <div class="brief-header">
    <div>
      <div class="brief-mark">CORYANT Real Estate · Decision Brief</div>
      <div class="brief-property">[PROPERTY / SITE NAME]</div>
      <div class="brief-meta">[Moment type] · [Location] · [Property type]</div>
    </div>
    <div class="brief-date">[DATE]</div>
  </div>

  <!-- VERDICT -->
  <div class="verdict [buy/negotiate/pass/hold]">
    <div class="verdict-header">
      <div class="verdict-word">[BUY / NEGOTIATE / PASS / HOLD]</div>
    </div>
    <div class="verdict-condition">[The specific condition. E.g., "Offer at £X — base case IRR of 9.2% at this price. Not supportable above asking price." Or for developers: "Site viable at guide price with 18 flat scheme at current consented density."]</div>
  </div>

  <!-- KEY NUMBERS -->
  <div class="brief-section">
    <div class="section-heading">Key Numbers</div>
    <div class="metric-row">
      <div class="metric-item"><div class="metric-label">Price / Guide</div><div class="metric-val">£[X]</div></div>
      <div class="metric-item"><div class="metric-label">Net Yield</div><div class="metric-val">[X]%</div></div>
      <div class="metric-item"><div class="metric-label">IRR (Base)</div><div class="metric-val">[X]%</div></div>
      <div class="metric-item"><div class="metric-label">Supported Value</div><div class="metric-val">£[X–Y]</div></div>
    </div>
  </div>

  <!-- RED FLAGS -->
  <div class="brief-section">
    <div class="section-heading">Red Flags</div>
    <div class="flag-brief critical"><strong>Critical</strong>[Flag description and required action]</div>
    <div class="flag-brief amber"><strong>Amber</strong>[Flag description and mitigation]</div>
  </div>

  <!-- WHAT SUPPORTS THE VERDICT -->
  <div class="brief-section">
    <div class="section-heading">What Supports the Verdict</div>
    <ul class="point-list">
      <li>[Key supporting point 1 — specific, not generic]</li>
      <li>[Key supporting point 2]</li>
      <li>[Key supporting point 3]</li>
    </ul>
  </div>

  <!-- THE ONE RISK -->
  <div class="brief-section">
    <div class="big-risk-brief">
      <div class="big-risk-label">The One Risk That Could Make This Wrong</div>
      [Specific risk statement]
    </div>
  </div>

  <!-- NEXT STEPS -->
  <div class="brief-section">
    <div class="section-heading">Next Steps</div>
    <div class="next-step"><div class="step-num">1</div><div>[Immediate action — e.g., "Instruct solicitor to review title and raise pre-contract enquiries"]</div></div>
    <div class="next-step"><div class="step-num">2</div><div>[Second action — e.g., "Commission RICS Level 3 Building Survey given pre-war construction"]</div></div>
    <div class="next-step"><div class="step-num">3</div><div>[Offer or negotiation action]</div></div>
    <div class="next-step"><div class="step-num">4</div><div>[Financing or other action]</div></div>
  </div>

  <div class="brief-disclaimer">
    CORYANT Real Estate Decision Brief. Not an RICS Red Book valuation, legal advice, or professional planning assessment. Financial model inputs are stated assumptions requiring independent verification. Instruct a solicitor before transacting. Do not use for mortgage or financing purposes without independent professional valuation.
  </div>

</div>
</body>
</html>
```
