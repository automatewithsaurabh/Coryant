# CORYANT Sales — Intelligence Report Mode

You are producing a sales intelligence briefing. This is the document the AE reads before the call, the SDR studies before outreach, or the manager reviews in a deal coaching session.

Quality standard: better than anything a rep could build in an hour of manual research — specific, evidence-graded, and immediately actionable.

---

## HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT Sales — [Moment Type]: [Target]</title>
<style>
  :root {
    --ink: #0F172A;
    --mid: #334155;
    --muted: #64748B;
    --rule: #E2E8F0;
    --bg: #F8FAFC;
    --white: #FFFFFF;
    --accent: #0F766E;      /* teal — professional, decisive */
    --accent-2: #0EA5E9;
    --accent-light: #F0FDFA;
    --amber: #D97706;
    --amber-light: #FFFBEB;
    --red: #DC2626;
    --red-light: #FEF2F2;
    --green: #059669;
    --green-light: #ECFDF5;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.7; color: var(--ink); background: var(--bg); }

  .cover { background: linear-gradient(135deg, #042f2e 0%, #0F766E 100%); color: white; padding: 52px 64px 44px; }
  .cover-brand { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; opacity: 0.6; margin-bottom: 24px; }
  .cover-type { display: inline-block; background: rgba(255,255,255,0.15); padding: 4px 14px; border-radius: 4px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 18px; }
  .cover-title { font-size: 34px; font-weight: 700; line-height: 1.2; margin-bottom: 12px; }
  .cover-sub { font-size: 16px; opacity: 0.75; margin-bottom: 36px; }
  .cover-meta { display: flex; gap: 28px; font-size: 13px; opacity: 0.6; }

  .toc { background: var(--white); border-bottom: 2px solid var(--accent); padding: 18px 64px; font-size: 13px; }
  .toc-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); margin-bottom: 8px; }
  .toc-items { display: flex; flex-wrap: wrap; gap: 6px 20px; }
  .toc-items a { color: var(--accent); text-decoration: none; font-weight: 500; }

  .content { max-width: 880px; margin: 0 auto; padding: 48px 32px; }

  h1 { font-size: 24px; font-weight: 700; color: var(--ink); margin-bottom: 20px; padding-bottom: 10px; border-bottom: 3px solid var(--accent); }
  h2 { font-size: 17px; font-weight: 700; color: var(--ink); margin: 28px 0 12px; }
  h3 { font-size: 14px; font-weight: 600; color: var(--mid); margin: 16px 0 8px; text-transform: uppercase; letter-spacing: 0.06em; }
  p { margin-bottom: 12px; color: var(--mid); }
  ul, ol { padding-left: 20px; margin-bottom: 12px; }
  li { margin-bottom: 6px; color: var(--mid); }
  strong { color: var(--ink); }

  /* Action box */
  .action-box { background: var(--accent-light); border: 2px solid var(--accent); border-radius: 10px; padding: 24px 28px; margin: 28px 0; }
  .action-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 12px; }
  .action-headline { font-size: 20px; font-weight: 700; color: var(--ink); margin-bottom: 12px; }
  .action-cols { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 16px; }
  .action-col-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 6px; }

  /* Trigger cards */
  .trigger { background: var(--white); border: 1px solid var(--rule); border-left: 4px solid var(--accent); border-radius: 0 8px 8px 0; padding: 14px 18px; margin: 10px 0; }
  .trigger.hot { border-left-color: var(--green); }
  .trigger.pain { border-left-color: var(--amber); }
  .trigger-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); margin-bottom: 4px; }
  .trigger.hot .trigger-label { color: var(--green); }
  .trigger.pain .trigger-label { color: var(--amber); }
  .trigger-title { font-size: 15px; font-weight: 600; color: var(--ink); margin-bottom: 4px; }
  .trigger-detail { font-size: 13px; color: var(--mid); }
  .trigger-date { font-size: 11px; color: var(--muted); margin-top: 4px; }

  /* MEDDPICC scorecard */
  .medd-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 16px 0; }
  .medd-cell { background: var(--white); padding: 14px 16px; }
  .medd-label { font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
  .medd-score { font-size: 13px; font-weight: 700; }
  .medd-score.strong { color: var(--green); }
  .medd-score.partial { color: var(--amber); }
  .medd-score.weak { color: var(--red); }
  .medd-score.unknown { color: var(--muted); }
  .medd-detail { font-size: 12px; color: var(--muted); margin-top: 4px; }

  /* Deal health */
  .deal-health { display: inline-block; padding: 6px 16px; border-radius: 6px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 12px 0; }
  .deal-health.green { background: var(--green-light); color: var(--green); }
  .deal-health.yellow { background: var(--amber-light); color: var(--amber); }
  .deal-health.red { background: var(--red-light); color: var(--red); }
  .deal-health.disqualify { background: #F3F4F6; color: var(--muted); }

  /* Next actions */
  .action-item { display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--rule); align-items: flex-start; }
  .action-item:last-child { border-bottom: none; }
  .action-num { background: var(--accent); color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; flex-shrink: 0; }
  .action-body { flex: 1; }
  .action-task { font-size: 15px; font-weight: 600; color: var(--ink); margin-bottom: 4px; }
  .action-meta { font-size: 12px; color: var(--muted); }

  /* Competitive */
  .battle-card { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 14px 0; }
  .battle-header { background: var(--ink); color: white; padding: 10px 16px; font-size: 13px; font-weight: 600; display: flex; justify-content: space-between; align-items: center; }
  .battle-row { padding: 12px 16px; border-bottom: 1px solid var(--rule); font-size: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .battle-row:last-child { border-bottom: none; }
  .battle-we { color: var(--green); }
  .battle-them { color: var(--red); }

  /* ICP priority table */
  .priority-table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
  .priority-table th { background: var(--accent); color: white; padding: 10px 14px; text-align: left; }
  .priority-table td { padding: 10px 14px; border-bottom: 1px solid var(--rule); vertical-align: top; }
  .priority-table tr:last-child td { border-bottom: none; }
  .tier-1 { background: var(--green-light); color: var(--green); font-weight: 700; font-size: 11px; padding: 2px 6px; border-radius: 3px; }
  .tier-2 { background: var(--amber-light); color: var(--amber); font-weight: 700; font-size: 11px; padding: 2px 6px; border-radius: 3px; }

  /* Adversarial */
  .adversarial { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 24px 0; }
  .adversarial-header { background: var(--ink); color: white; padding: 12px 18px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
  .adversarial-row { padding: 14px 18px; border-bottom: 1px solid var(--rule); font-size: 14px; }
  .adversarial-row:last-child { border-bottom: none; }
  .adv-claim { font-weight: 700; margin-bottom: 5px; }
  .adv-counter { color: var(--mid); font-size: 13px; margin-bottom: 6px; }
  .v-held { color: var(--green); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-weakened { color: var(--amber); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-failed { color: var(--red); font-size: 11px; font-weight: 700; text-transform: uppercase; }

  /* Grade badges */
  .grade { display: inline-block; font-size: 10px; font-weight: 700; padding: 1px 5px; border-radius: 3px; margin-left: 3px; }
  .grade-a { background: #D1FAE5; color: var(--green); }
  .grade-b { background: #FEF3C7; color: var(--amber); }
  .grade-c { background: #F3F4F6; color: var(--muted); }

  /* Outreach preview */
  .outreach-box { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; padding: 20px 24px; margin: 16px 0; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.8; color: var(--mid); }
  .outreach-subject { font-weight: 700; color: var(--ink); margin-bottom: 12px; font-size: 14px; }
  .outreach-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 8px; font-family: 'Inter', sans-serif; }

  .footer { background: var(--ink); color: rgba(255,255,255,0.5); padding: 22px 64px; font-size: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: 56px; }
  .footer-brand { color: white; font-weight: 700; }

  @media print {
    .cover { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .content { padding: 20px 12px; }
  }
</style>
</head>
<body>

<div class="cover">
  <div class="cover-brand">CORYANT · Sales Intelligence</div>
  <div class="cover-type">[MOMENT TYPE]</div>
  <h1 class="cover-title">[Company / Prospect / Deal Name]</h1>
  <p class="cover-sub">[Seller's product] · [Seller role] · [Stage]</p>
  <div class="cover-meta">
    <span>Prepared: [Date]</span>
    <span>Depth: [SURFACE / STANDARD / DEEP]</span>
    <span>Agents: [n]</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Contents</div>
  <div class="toc-items">
    <a href="#action">Action Summary</a>
    <a href="#account">Account Intel</a>
    <a href="#prospect">Prospect Intel</a>
    <a href="#deal">Deal Review</a>
    <a href="#competitive">Competitive</a>
    <a href="#icp">ICP Priority</a>
    <a href="#objections">Objections</a>
    <a href="#outreach">Outreach</a>
    <a href="#adversarial">Adversarial</a>
    <a href="#sources">Sources</a>
  </div>
</div>

<div class="content">

<!-- ACTION SUMMARY -->
<section id="action">
<h1>Action Summary</h1>
<div class="action-box">
  <div class="action-label">Intelligence Verdict</div>
  <div class="action-headline">[The one thing the seller must know and do as a result of this research]</div>
  <p>[2–3 sentences: what was found and the immediate implication]</p>
  <div class="action-cols">
    <div>
      <div class="action-col-label">Best Outreach Angle</div>
      <p>[The specific trigger or context to lead with]</p>
    </div>
    <div>
      <div class="action-col-label">Biggest Risk</div>
      <p>[The main thing that could prevent progress]</p>
    </div>
    <div>
      <div class="action-col-label">First Action</div>
      <p>[What to do in the next 24 hours]</p>
    </div>
  </div>
</div>
</section>

<!-- ACCOUNT INTEL -->
<section id="account">
<h1>Account Intelligence</h1>
<h2>Trigger Events — Why Contact NOW</h2>
<div class="trigger hot">
  <div class="trigger-label">GROWTH SIGNAL</div>
  <div class="trigger-title">[Trigger event]</div>
  <div class="trigger-detail">[Why this is relevant to the seller's product]</div>
  <div class="trigger-date">[Date] <span class="grade grade-a">A</span></div>
</div>
<div class="trigger pain">
  <div class="trigger-label">PAIN SIGNAL</div>
  <div class="trigger-title">[Trigger]</div>
  <div class="trigger-detail">[Relevance]</div>
  <div class="trigger-date">[Date] <span class="grade grade-b">B</span></div>
</div>
[Continue for all triggers]
</section>

<!-- PROSPECT INTEL -->
<section id="prospect">
<h1>Prospect Intelligence</h1>
[Prospect mandate, career signals, receptivity, what they care about, the right angle]
</section>

<!-- DEAL REVIEW -->
<section id="deal">
<h1>Deal Review</h1>
<div class="medd-grid">
  <div class="medd-cell"><div class="medd-label">Metrics</div><div class="medd-score strong">STRONG</div><div class="medd-detail">[What we know]</div></div>
  <div class="medd-cell"><div class="medd-label">Economic Buyer</div><div class="medd-score weak">WEAK</div><div class="medd-detail">[What's missing]</div></div>
  <div class="medd-cell"><div class="medd-label">Decision Criteria</div><div class="medd-score partial">PARTIAL</div><div class="medd-detail">[Status]</div></div>
  <div class="medd-cell"><div class="medd-label">Decision Process</div><div class="medd-score unknown">UNKNOWN</div><div class="medd-detail">[Gap]</div></div>
  <div class="medd-cell"><div class="medd-label">Paper Process</div><div class="medd-score unknown">UNKNOWN</div><div class="medd-detail">[Gap]</div></div>
  <div class="medd-cell"><div class="medd-label">Pain</div><div class="medd-score strong">STRONG</div><div class="medd-detail">[Pain found]</div></div>
  <div class="medd-cell"><div class="medd-label">Champion</div><div class="medd-score partial">PARTIAL</div><div class="medd-detail">[Status]</div></div>
  <div class="medd-cell"><div class="medd-label">Competition</div><div class="medd-score partial">COMPETITIVE</div><div class="medd-detail">[Who]</div></div>
</div>
<span class="deal-health yellow">YELLOW — CHAMPION NOT CONFIRMED</span>

<h2>Next Three Actions</h2>
<div class="action-item">
  <div class="action-num">1</div>
  <div class="action-body">
    <div class="action-task">[Specific action]</div>
    <div class="action-meta">Owner: [name] · Due: [date] · Purpose: [what it accomplishes]</div>
  </div>
</div>
[repeat × 3]
</section>

<!-- COMPETITIVE -->
<section id="competitive">
<h1>Competitive Intelligence</h1>
<div class="battle-card">
  <div class="battle-header">
    <span>[Competitor Name]</span>
    <span style="font-size:12px;opacity:0.7;">vs. [Your Product]</span>
  </div>
  <div class="battle-row">
    <div><strong style="color:var(--green)">We Win On</strong><br>[Specific advantage]</div>
    <div><strong style="color:var(--red)">Their Strength</strong><br>[Honest assessment + counter]</div>
  </div>
  <div class="battle-row">
    <div><strong>Proof Point</strong><br>[G2 data / customer reference]</div>
    <div><strong>Their FUD on Us</strong><br>"[What they'll say]" → [Response]</div>
  </div>
</div>
</section>

<!-- ICP PRIORITY -->
<section id="icp">
<h1>ICP Prioritisation</h1>
<table class="priority-table">
  <thead><tr><th>Account</th><th>Tier</th><th>Fit</th><th>Timing</th><th>Key Trigger</th></tr></thead>
  <tbody>
    <tr><td>[Company]</td><td><span class="tier-1">TIER 1</span></td><td>5</td><td>5</td><td>[Trigger]</td></tr>
    <tr><td>[Company]</td><td><span class="tier-2">TIER 2</span></td><td>4</td><td>3</td><td>[Trigger]</td></tr>
  </tbody>
</table>
</section>

<!-- OUTREACH -->
<section id="outreach">
<h1>Outreach</h1>
<div class="outreach-label">Cold Email</div>
<div class="outreach-box">
  <div class="outreach-subject">Subject: [Subject line]</div>
  [Full email text]
</div>
<div class="outreach-label">LinkedIn Message</div>
<div class="outreach-box">[Full LinkedIn message]</div>
</section>

<!-- ADVERSARIAL -->
<section id="adversarial">
<h1>Adversarial Review</h1>
<div class="adversarial">
  <div class="adversarial-header">Stage 3.5 — Intelligence Stress-Tested</div>
  <div class="adversarial-row">
    <div class="adv-claim">Conclusion 1: [State clearly]</div>
    <div class="adv-counter">Counter: [Strongest challenge]</div>
    <span class="v-held">HELD — [reason]</span>
  </div>
  <div class="adversarial-row">
    <div class="adv-claim">Conclusion 2: [State clearly]</div>
    <div class="adv-counter">Counter: [Challenge]</div>
    <span class="v-weakened">WEAKENED — [caveat]</span>
  </div>
</div>
</section>

<!-- SOURCES -->
<div id="sources" style="background:var(--white);border:1px solid var(--rule);border-radius:8px;padding:24px;margin-top:36px;">
<h2 style="border-bottom:1px solid var(--rule);padding-bottom:10px;margin-bottom:14px;">Sources</h2>
<div style="font-size:13px;color:var(--mid);">[1] [Source] — [date]</div>
<div style="margin-top:12px;font-size:12px;color:var(--muted);">
  <span class="grade grade-a">A</span> Primary / verified · <span class="grade grade-b">B</span> Single source · <span class="grade grade-c">C</span> Inferred — do not use in outreach
</div>
</div>

</div>

<div class="footer">
  <span class="footer-brand">CORYANT</span>
  <span>Sales intelligence. Not sales advice.</span>
  <span>coryant.xyz</span>
</div>

</body>
</html>
```
