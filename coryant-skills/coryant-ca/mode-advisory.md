# CORYANT CA — Advisory Report Mode

You are producing a professional intelligence report for a Chartered Accountant's internal use. This is not a client document — it is the briefing pack the CA reads before the meeting, uses to plan the audit, or relies on to advise on a deal.

Quality standard: indistinguishable from what a Big 4 research desk would prepare, but without the over-cautious hedging that makes Big 4 reports useless for actual decisions.

---

## Document Structure

Produce a complete, self-contained HTML document using the template and CSS below. Do not omit sections — if a section has no findings, write "No issues identified in sources searched" rather than skipping it.

---

## HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT CA — [Work Type]: [Client/Sector]</title>
<style>
  :root {
    --ink: #111827;
    --mid: #374151;
    --muted: #6B7280;
    --rule: #E5E7EB;
    --bg: #F9FAFB;
    --white: #FFFFFF;
    --accent: #1D4ED8;      /* professional blue */
    --accent-light: #EFF6FF;
    --amber: #D97706;
    --amber-light: #FFFBEB;
    --red: #DC2626;
    --red-light: #FEF2F2;
    --green: #059669;
    --green-light: #ECFDF5;
    --grade-a: #059669;
    --grade-b: #D97706;
    --grade-c: #6B7280;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 15px;
    line-height: 1.7;
    color: var(--ink);
    background: var(--bg);
    padding: 0;
  }

  /* Cover */
  .cover {
    background: var(--accent);
    color: var(--white);
    padding: 56px 64px 48px;
    position: relative;
  }
  .cover-brand { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; opacity: 0.7; margin-bottom: 32px; font-family: 'Arial', sans-serif; }
  .cover-work-type {
    display: inline-block;
    background: rgba(255,255,255,0.15);
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .cover-title { font-size: 32px; font-weight: normal; line-height: 1.3; margin-bottom: 16px; }
  .cover-sub { font-size: 17px; opacity: 0.8; margin-bottom: 40px; }
  .cover-meta { display: flex; gap: 32px; font-size: 13px; font-family: 'Arial', sans-serif; opacity: 0.7; }
  .cover-meta span::before { content: attr(data-label) ": "; font-weight: 600; }

  /* Navigation */
  .toc { background: var(--white); border-bottom: 1px solid var(--rule); padding: 24px 64px; font-family: 'Arial', sans-serif; font-size: 13px; }
  .toc-label { text-transform: uppercase; letter-spacing: 0.1em; font-size: 11px; color: var(--muted); margin-bottom: 10px; }
  .toc-items { display: flex; flex-wrap: wrap; gap: 8px 24px; }
  .toc-items a { color: var(--accent); text-decoration: none; }
  .toc-items a:hover { text-decoration: underline; }

  /* Main content */
  .content { max-width: 860px; margin: 0 auto; padding: 48px 32px; }

  h1 { font-size: 24px; font-weight: normal; color: var(--ink); margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid var(--accent); }
  h2 { font-size: 18px; font-weight: 600; color: var(--ink); margin: 32px 0 14px; font-family: 'Arial', sans-serif; }
  h3 { font-size: 15px; font-weight: 600; color: var(--mid); margin: 20px 0 8px; font-family: 'Arial', sans-serif; }
  p { margin-bottom: 14px; }
  ul, ol { padding-left: 20px; margin-bottom: 14px; }
  li { margin-bottom: 6px; }

  /* Decision Memo */
  .memo {
    border: 2px solid var(--accent);
    border-radius: 8px;
    padding: 28px 32px;
    margin: 32px 0;
    background: var(--accent-light);
  }
  .memo-label { font-family: 'Arial', sans-serif; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; }
  .memo-verdict {
    font-size: 22px;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 16px;
    font-family: 'Arial', sans-serif;
  }
  .memo-verdict.amber { color: var(--amber); }
  .memo-verdict.red { color: var(--red); }
  .memo-verdict.green { color: var(--green); }
  .memo-cols { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 20px; }
  .memo-col-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; font-family: 'Arial', sans-serif; color: var(--muted); margin-bottom: 8px; }
  .memo-col p { font-size: 14px; margin-bottom: 8px; }

  /* Stat strip */
  .stat-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1px; background: var(--rule); border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 24px 0; }
  .stat { background: var(--white); padding: 20px; text-align: center; }
  .stat-value { font-size: 26px; font-weight: 700; color: var(--accent); font-family: 'Arial', sans-serif; }
  .stat-label { font-size: 12px; color: var(--muted); font-family: 'Arial', sans-serif; margin-top: 4px; }
  .stat-context { font-size: 11px; color: var(--muted); margin-top: 2px; font-family: 'Arial', sans-serif; }

  /* Benchmark table */
  .bench-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-family: 'Arial', sans-serif; font-size: 13px; }
  .bench-table th { background: var(--accent); color: var(--white); padding: 10px 14px; text-align: left; font-size: 12px; letter-spacing: 0.04em; }
  .bench-table td { padding: 10px 14px; border-bottom: 1px solid var(--rule); }
  .bench-table tr:nth-child(even) td { background: var(--bg); }
  .bench-table tr:last-child td { border-bottom: none; }
  .bench-above { color: var(--green); font-weight: 600; }
  .bench-below { color: var(--red); font-weight: 600; }
  .bench-at { color: var(--amber); font-weight: 600; }

  /* Risk matrix */
  .risk-card { border-left: 4px solid var(--rule); padding: 14px 18px; margin: 14px 0; border-radius: 0 6px 6px 0; background: var(--white); }
  .risk-card.critical { border-left-color: var(--red); background: var(--red-light); }
  .risk-card.high { border-left-color: var(--amber); background: var(--amber-light); }
  .risk-card.medium { border-left-color: #92400E; background: #FFFBEB; }
  .risk-card.monitor { border-left-color: var(--muted); background: var(--bg); }
  .risk-label { font-size: 11px; font-family: 'Arial', sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
  .risk-card.critical .risk-label { color: var(--red); }
  .risk-card.high .risk-label { color: var(--amber); }
  .risk-card.monitor .risk-label { color: var(--muted); }
  .risk-title { font-size: 15px; font-weight: 600; margin-bottom: 6px; font-family: 'Arial', sans-serif; }
  .risk-body { font-size: 14px; color: var(--mid); }

  /* Red flag */
  .flag-box { background: var(--red-light); border: 1px solid #FECACA; border-radius: 8px; padding: 20px 24px; margin: 20px 0; }
  .flag-box-label { font-family: 'Arial', sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--red); margin-bottom: 12px; }
  .flag-item { display: flex; gap: 10px; margin-bottom: 10px; font-size: 14px; }
  .flag-item::before { content: "⚑"; color: var(--red); flex-shrink: 0; }

  /* Deal comp table */
  .deal-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-family: 'Arial', sans-serif; font-size: 13px; }
  .deal-table th { background: #1E3A5F; color: var(--white); padding: 10px 14px; text-align: left; font-size: 12px; }
  .deal-table td { padding: 10px 14px; border-bottom: 1px solid var(--rule); }
  .deal-table tr:last-child td { border-bottom: none; }

  /* Evidence grade badges */
  .grade { display: inline-block; font-size: 10px; font-family: 'Arial', sans-serif; font-weight: 700; padding: 1px 5px; border-radius: 3px; margin-left: 4px; vertical-align: middle; }
  .grade-a { background: #D1FAE5; color: var(--green); }
  .grade-b { background: #FEF3C7; color: var(--amber); }
  .grade-c { background: #F3F4F6; color: var(--muted); }

  /* Adversarial review */
  .adversarial { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 24px 0; }
  .adversarial-header { background: #1E3A5F; color: var(--white); padding: 12px 20px; font-family: 'Arial', sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
  .adversarial-row { padding: 16px 20px; border-bottom: 1px solid var(--rule); font-size: 14px; }
  .adversarial-row:last-child { border-bottom: none; }
  .adversarial-claim { font-weight: 600; margin-bottom: 6px; }
  .adversarial-counter { color: var(--mid); margin-bottom: 8px; font-size: 13px; }
  .verdict-held { font-family: 'Arial', sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--green); }
  .verdict-weakened { font-family: 'Arial', sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--amber); }
  .verdict-failed { font-family: 'Arial', sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--red); }

  /* Regulatory update */
  .reg-item { padding: 14px 18px; border-left: 3px solid var(--accent); margin: 12px 0; background: var(--white); border-radius: 0 6px 6px 0; }
  .reg-status { font-family: 'Arial', sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
  .reg-status.enacted { color: var(--red); }
  .reg-status.upcoming { color: var(--amber); }
  .reg-status.draft { color: var(--muted); }
  .reg-title { font-size: 15px; font-weight: 600; margin-bottom: 6px; font-family: 'Arial', sans-serif; }
  .reg-impact { font-size: 14px; color: var(--mid); }

  /* Sources */
  .sources { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; padding: 24px 28px; margin-top: 40px; }
  .sources h2 { border-bottom: 1px solid var(--rule); padding-bottom: 12px; }
  .source-item { font-size: 13px; color: var(--mid); margin-bottom: 8px; font-family: 'Arial', sans-serif; }

  /* Footer */
  .footer { background: #1E3A5F; color: rgba(255,255,255,0.6); padding: 24px 64px; font-family: 'Arial', sans-serif; font-size: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: 48px; }
  .footer-brand { color: var(--white); font-weight: 600; }
  .footer-disclaimer { max-width: 500px; line-height: 1.5; }

  @media print {
    .cover { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .content { padding: 24px 16px; }
  }
</style>
</head>
<body>

<div class="cover">
  <div class="cover-brand">CORYANT · Professional Intelligence</div>
  <div class="cover-work-type">[WORK TYPE]</div>
  <h1 class="cover-title">[Client or Sector Name]</h1>
  <p class="cover-sub">[Engagement description — one line]</p>
  <div class="cover-meta">
    <span data-label="Jurisdiction">[Jurisdiction]</span>
    <span data-label="Prepared">[Date]</span>
    <span data-label="Depth">[SURFACE / STANDARD / DEEP]</span>
    <span data-label="Agents run">[n] agents</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Contents</div>
  <div class="toc-items">
    <a href="#memo">Decision Summary</a>
    <a href="#industry">Industry Intelligence</a>
    <a href="#benchmark">Financial Benchmarks</a>
    <a href="#client">Client Profile</a>
    <a href="#risk">Risk Assessment</a>
    <a href="#deal">Deal Intelligence</a>
    <a href="#regulatory">Regulatory Watch</a>
    <a href="#valuation">Valuation</a>
    <a href="#adversarial">Adversarial Review</a>
    <a href="#actions">Recommended Actions</a>
    <a href="#sources">Sources</a>
  </div>
</div>

<div class="content">

<!-- DECISION SUMMARY -->
<section id="memo">
<h1>Decision Summary</h1>
<div class="memo">
  <div class="memo-label">CA Intelligence Verdict</div>
  <div class="memo-verdict [green/amber/red]">[VERDICT — e.g. PROCEED WITH CONDITIONS / REQUIRES FURTHER DILIGENCE / SIGNIFICANT RISK IDENTIFIED]</div>
  <p>[2–3 sentence summary of what was found and what the CA should do with it]</p>
  <div class="memo-cols">
    <div class="memo-col">
      <div class="memo-col-label">Key Finding</div>
      <p>[The most important thing the research found]</p>
    </div>
    <div class="memo-col">
      <div class="memo-col-label">Critical Risk</div>
      <p>[The most significant risk the CA must address]</p>
    </div>
    <div class="memo-col">
      <div class="memo-col-label">Immediate Action</div>
      <p>[What the CA must do first, before anything else]</p>
    </div>
  </div>
</div>
</section>

<!-- KEY METRICS STRIP -->
<div class="stat-strip">
  <div class="stat">
    <div class="stat-value">[x]%</div>
    <div class="stat-label">Sector EBITDA Median</div>
    <div class="stat-context">vs client [x]%</div>
  </div>
  <div class="stat">
    <div class="stat-value">[x]x</div>
    <div class="stat-label">EV/EBITDA Multiple</div>
    <div class="stat-context">current market</div>
  </div>
  <div class="stat">
    <div class="stat-value">[x]</div>
    <div class="stat-label">Debtor Days (Sector)</div>
    <div class="stat-context">vs client [x]</div>
  </div>
  <div class="stat">
    <div class="stat-value">[n]</div>
    <div class="stat-label">Red Flags</div>
    <div class="stat-context">identified</div>
  </div>
</div>

<!-- INDUSTRY INTELLIGENCE -->
<section id="industry">
<h1>Industry Intelligence</h1>
[Industry Intel agent output — structured: market structure, current health, regulatory environment, stress points]
</section>

<!-- FINANCIAL BENCHMARKS -->
<section id="benchmark">
<h1>Financial Benchmarks</h1>
<table class="bench-table">
  <thead>
    <tr><th>Metric</th><th>Sector P25</th><th>Sector Median</th><th>Sector P75</th><th>Client</th><th>Assessment</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>EBITDA Margin</td>
      <td>[x]%</td>
      <td>[x]%</td>
      <td>[x]%</td>
      <td>[x]%</td>
      <td class="[bench-above/bench-below/bench-at]">[Above/Below/At] median <span class="grade grade-[a/b/c]">[A/B/C]</span></td>
    </tr>
    <!-- repeat for each metric -->
  </tbody>
</table>
[Interpretation paragraph]
</section>

<!-- CLIENT PROFILE (if CLIENT_INTEL or ADVISORY_PITCH) -->
<section id="client">
<h1>Client Profile</h1>
[Client Research agent output]

<!-- Red flags (if any) -->
<div class="flag-box">
  <div class="flag-box-label">Red Flags Identified</div>
  <div class="flag-item">[Red flag 1]</div>
  <div class="flag-item">[Red flag 2]</div>
</div>
</section>

<!-- RISK ASSESSMENT -->
<section id="risk">
<h1>Risk Assessment</h1>
<div class="risk-card critical">
  <div class="risk-label">CRITICAL</div>
  <div class="risk-title">[Risk title]</div>
  <div class="risk-body">[Description — what it is, why it matters, what to do about it]</div>
</div>
<div class="risk-card high">
  <div class="risk-label">HIGH</div>
  <div class="risk-title">[Risk title]</div>
  <div class="risk-body">[Description]</div>
</div>
<!-- continue for medium/monitor -->
</section>

<!-- DEAL INTELLIGENCE (if DEAL_SUPPORT) -->
<section id="deal">
<h1>Deal Intelligence</h1>
<table class="deal-table">
  <thead>
    <tr><th>Transaction</th><th>Date</th><th>EV/EBITDA</th><th>Structure</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>[Deal]</td><td>[Date]</td><td>[x]x</td><td>[Cash/Earnout]</td><td>[Key point] <span class="grade grade-b">B</span></td></tr>
  </tbody>
</table>
</section>

<!-- REGULATORY WATCH -->
<section id="regulatory">
<h1>Regulatory Watch</h1>
<div class="reg-item">
  <div class="reg-status enacted">Enacted — Effective [date]</div>
  <div class="reg-title">[Change name]</div>
  <div class="reg-impact">[Impact on client] <span class="grade grade-a">A</span></div>
</div>
<div class="reg-item">
  <div class="reg-status upcoming">Upcoming — Effective [date]</div>
  <div class="reg-title">[Change name]</div>
  <div class="reg-impact">[Impact on client] <span class="grade grade-b">B</span></div>
</div>
</section>

<!-- VALUATION (if VALUATION_RESEARCH or DEAL_SUPPORT) -->
<section id="valuation">
<h1>Valuation Research</h1>
[Valuation Intel agent output — multiples, range, methodology]
</section>

<!-- ADVERSARIAL REVIEW (DEEP only) -->
<section id="adversarial">
<h1>Adversarial Review</h1>
<div class="adversarial">
  <div class="adversarial-header">Stage 3.5 — Conclusions Stress-Tested</div>
  <div class="adversarial-row">
    <div class="adversarial-claim">Conclusion 1: [State the conclusion clearly]</div>
    <div class="adversarial-counter">Counter-argument: [Strongest challenge to this conclusion]</div>
    <span class="verdict-held">HELD — [Why the conclusion survives]</span>
  </div>
  <div class="adversarial-row">
    <div class="adversarial-claim">Conclusion 2: [State the conclusion clearly]</div>
    <div class="adversarial-counter">Counter-argument: [Strongest challenge]</div>
    <span class="verdict-weakened">WEAKENED — [What the caveat is]</span>
  </div>
</div>
</section>

<!-- RECOMMENDED ACTIONS -->
<section id="actions">
<h1>Recommended Actions</h1>
<ol>
  <li><strong>[Action 1 — specific]</strong>: [What to do, who needs to do it, by when]</li>
  <li><strong>[Action 2]</strong>: [Detail]</li>
  <!-- continue numbered list -->
</ol>
</section>

<!-- SOURCES -->
<div class="sources" id="sources">
<h2>Sources</h2>
<div class="source-item">[1] [Source name] — [URL or publication] — accessed [date]</div>
<!-- continue -->
<div style="margin-top:16px; font-size:12px; color:var(--muted); font-family:'Arial',sans-serif;">
Evidence grades: <span class="grade grade-a">A</span> Multi-source / primary regulatory · <span class="grade grade-b">B</span> Single credible source · <span class="grade grade-c">C</span> Inference / estimate — verify before client use
</div>
</div>

</div><!-- /content -->

<div class="footer">
  <span class="footer-brand">CORYANT</span>
  <span class="footer-disclaimer">This report is prepared for professional adviser use only. It is not legal or tax advice. Claims marked [C] should be verified before reliance. Produced [date].</span>
  <span>coryant.xyz</span>
</div>

</body>
</html>
```

---

## Section Inclusion by Work Type

| Section | CLIENT_INTEL | INDUSTRY_BENCHMARK | DEAL_SUPPORT | AUDIT_RISK | VALUATION_RESEARCH | ADVISORY_PITCH |
|---|---|---|---|---|---|---|
| Decision Summary | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Stat Strip | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Industry Intelligence | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Financial Benchmarks | optional | ✓ | ✓ | ✓ | ✓ | ✓ |
| Client Profile | ✓ | — | — | ✓ | — | ✓ |
| Risk Assessment | ✓ | — | ✓ | ✓ | — | ✓ |
| Deal Intelligence | — | — | ✓ | — | optional | — |
| Regulatory Watch | optional | — | optional | ✓ | optional | optional |
| Valuation | — | — | ✓ | — | ✓ | — |
| Adversarial Review | DEEP only | DEEP only | always | DEEP only | always | DEEP only |
| Recommended Actions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Sources | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

Omit sections marked — for that work type.
