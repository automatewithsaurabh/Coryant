# CORYANT SCM — Decision Brief Mode

Concise decision brief — 1–2 pages, plain structure, fast to read before a meeting or negotiation. No elaborate HTML. Professional but direct.

---

## Output Format

Produce in clean, readable HTML with minimal styling — suitable for printing or quick reading on any device.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CORYANT SCM Brief — [Target]</title>
<style>
  body { font-family: 'Inter', Arial, sans-serif; font-size: 14px; line-height: 1.7; color: #1E293B; max-width: 760px; margin: 40px auto; padding: 0 24px; }
  .header { border-bottom: 3px solid #D97706; padding-bottom: 16px; margin-bottom: 24px; }
  .brand { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #94A3B8; margin-bottom: 8px; }
  .type-badge { display: inline-block; background: #D97706; color: white; padding: 3px 10px; border-radius: 3px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; }
  h1 { font-size: 22px; font-weight: 700; margin: 0 0 6px; }
  .meta { font-size: 12px; color: #94A3B8; }
  .warn { background: #FFFBEB; border: 1px solid #FCD34D; border-radius: 4px; padding: 8px 12px; font-size: 12px; color: #D97706; margin: 12px 0; }
  h2 { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #64748B; margin: 24px 0 8px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; }
  p { margin: 0 0 10px; color: #334155; }
  ul { padding-left: 18px; margin: 0 0 12px; }
  li { margin-bottom: 5px; color: #334155; }
  .verdict { background: #FFFBEB; border-left: 4px solid #D97706; padding: 14px 16px; margin: 16px 0; border-radius: 0 6px 6px 0; }
  .verdict-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #D97706; margin-bottom: 6px; }
  .verdict-text { font-size: 15px; font-weight: 600; color: #0F172A; }
  .risk-line { display: flex; gap: 12px; padding: 8px 0; border-bottom: 1px solid #F1F5F9; align-items: flex-start; }
  .risk-label { font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 3px; flex-shrink: 0; min-width: 80px; text-align: center; text-transform: uppercase; }
  .r-critical { background: #FEE2E2; color: #DC2626; }
  .r-high { background: #FEF3C7; color: #D97706; }
  .r-medium { background: #E0F2FE; color: #0369A1; }
  .r-monitor { background: #D1FAE5; color: #059669; }
  .risk-text { font-size: 13px; color: #475569; }
  .action-item { display: flex; gap: 10px; padding: 8px 0; }
  .action-n { background: #D97706; color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
  .action-text { font-size: 13px; color: #334155; }
  .grade { font-size: 10px; font-weight: 700; padding: 1px 4px; border-radius: 2px; margin-left: 2px; }
  .ga { background: #D1FAE5; color: #059669; }
  .gb { background: #FEF3C7; color: #D97706; }
  .gc { background: #F1F5F9; color: #94A3B8; }
  .sources { border-top: 1px solid #E2E8F0; margin-top: 28px; padding-top: 14px; font-size: 11px; color: #94A3B8; }
  .footer { margin-top: 36px; padding-top: 14px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #94A3B8; display: flex; justify-content: space-between; }
</style>
</head>
<body>

<div class="header">
  <div class="brand">CORYANT · Supply Chain Intelligence</div>
  <div class="type-badge">[MOMENT TYPE]</div>
  <h1>[Supplier / Category / Geography / Decision]</h1>
  <div class="meta">Prepared: [date] · Depth: [SURFACE/STANDARD] · [n] agents</div>
</div>

<div class="warn">⚠️ Market data (commodity prices, freight rates, tariff rates) is reference data as of [date]. Verify before commercial use.</div>

<div class="verdict">
  <div class="verdict-label">Bottom Line</div>
  <div class="verdict-text">[The direct answer to the decision — 1–2 sentences. What should the reader do?]</div>
</div>

<h2>Key Findings</h2>
<ul>
  <li>[Finding 1 — specific and evidence-graded] <span class="grade ga">A</span></li>
  <li>[Finding 2] <span class="grade gb">B</span></li>
  <li>[Finding 3] <span class="grade gb">B</span></li>
  <li>[Finding 4 — important caveat or gap] <span class="grade gc">C</span></li>
</ul>

<h2>Risk Summary</h2>
<div class="risk-line"><span class="risk-label r-critical">CRITICAL</span><div class="risk-text">[Risk — what it is and why it's critical now]</div></div>
<div class="risk-line"><span class="risk-label r-high">HIGH</span><div class="risk-text">[Risk]</div></div>
<div class="risk-line"><span class="risk-label r-medium">MEDIUM</span><div class="risk-text">[Risk]</div></div>
<div class="risk-line"><span class="risk-label r-monitor">MONITOR</span><div class="risk-text">[Risk to watch but not act on yet]</div></div>

<h2>Actions Required</h2>
<div class="action-item"><div class="action-n">1</div><div class="action-text"><strong>[Action] — [Owner] — [Deadline]</strong><br>[Why this matters and what it achieves]</div></div>
<div class="action-item"><div class="action-n">2</div><div class="action-text"><strong>[Action] — [Owner] — [Deadline]</strong><br>[Purpose]</div></div>
<div class="action-item"><div class="action-n">3</div><div class="action-text"><strong>[Action] — [Owner] — [Deadline]</strong><br>[Purpose]</div></div>

<h2>Key Numbers</h2>
<ul>
  <li>[Tariff rate / commodity price / freight cost / should-cost gap — whatever is most relevant]</li>
  <li>[Second key number]</li>
  <li>[Third]</li>
</ul>

<h2>What We Don't Know</h2>
<ul>
  <li>[Important uncertainty that the buyer must verify directly or through audit]</li>
  <li>[Second gap]</li>
</ul>

<div class="sources">
  Sources: [1] [Source + date] · [2] [Source + date] · [3] [Source + date]
  <br>Grade A = primary/official · Grade B = single secondary · Grade C = inferred — verify before use
</div>

<div class="footer">
  <span>CORYANT · Supply Chain Intelligence</span>
  <span>coryant.xyz</span>
</div>

</body>
</html>
```
