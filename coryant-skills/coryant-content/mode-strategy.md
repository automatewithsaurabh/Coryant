# CORYANT Content — Strategy Report Mode

You are producing a content intelligence and strategy report. This is the briefing that tells a creator exactly what to make, why, and how — backed by real evidence.

Quality standard: a professional content strategist's deliverable, not a generic "create more content" deck.

---

## HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT Content — [Moment Type]: [Niche]</title>
<style>
  :root {
    --ink: #0F172A;
    --mid: #334155;
    --muted: #64748B;
    --rule: #E2E8F0;
    --bg: #F8FAFC;
    --white: #FFFFFF;
    --accent: #7C3AED;       /* violet — creative/content */
    --accent-2: #0EA5E9;     /* cyan — data/insight */
    --accent-light: #F5F3FF;
    --amber: #D97706;
    --amber-light: #FFFBEB;
    --green: #059669;
    --green-light: #ECFDF5;
    --red: #DC2626;
    --red-light: #FEF2F2;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: var(--ink);
    background: var(--bg);
  }

  /* Cover */
  .cover {
    background: linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #0EA5E9 100%);
    color: white;
    padding: 60px 64px 52px;
  }
  .cover-brand { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; opacity: 0.7; margin-bottom: 28px; }
  .cover-type { display: inline-block; background: rgba(255,255,255,0.15); padding: 4px 14px; border-radius: 20px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 20px; }
  .cover-title { font-size: 36px; font-weight: 700; line-height: 1.2; margin-bottom: 14px; }
  .cover-sub { font-size: 17px; opacity: 0.8; margin-bottom: 40px; }
  .cover-meta { display: flex; gap: 28px; font-size: 13px; opacity: 0.65; }

  /* TOC */
  .toc { background: var(--white); border-bottom: 2px solid var(--accent); padding: 20px 64px; font-size: 13px; }
  .toc-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); margin-bottom: 10px; }
  .toc-items { display: flex; flex-wrap: wrap; gap: 6px 20px; }
  .toc-items a { color: var(--accent); text-decoration: none; font-weight: 500; }

  /* Content */
  .content { max-width: 900px; margin: 0 auto; padding: 48px 32px; }

  h1 { font-size: 26px; font-weight: 700; color: var(--ink); margin-bottom: 24px; padding-bottom: 12px; border-bottom: 3px solid var(--accent); }
  h2 { font-size: 18px; font-weight: 700; color: var(--ink); margin: 32px 0 14px; }
  h3 { font-size: 15px; font-weight: 600; color: var(--mid); margin: 20px 0 8px; }
  p { margin-bottom: 14px; color: var(--mid); }
  ul, ol { padding-left: 22px; margin-bottom: 14px; }
  li { margin-bottom: 7px; color: var(--mid); }
  strong { color: var(--ink); }

  /* Strategy verdict */
  .verdict {
    background: linear-gradient(135deg, var(--accent-light), #EFF6FF);
    border: 2px solid var(--accent);
    border-radius: 12px;
    padding: 32px;
    margin: 32px 0;
  }
  .verdict-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; font-weight: 700; }
  .verdict-headline { font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 14px; }
  .verdict-cols { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 20px; }
  .verdict-col-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 6px; }

  /* Stat strip */
  .stat-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1px; background: var(--rule); border: 1px solid var(--rule); border-radius: 10px; overflow: hidden; margin: 28px 0; }
  .stat { background: var(--white); padding: 22px; text-align: center; }
  .stat-value { font-size: 28px; font-weight: 800; color: var(--accent); }
  .stat-label { font-size: 12px; color: var(--muted); margin-top: 4px; }
  .stat-context { font-size: 11px; color: var(--muted); margin-top: 2px; }

  /* Audience quote */
  .quote-strip { background: var(--accent-light); border-left: 4px solid var(--accent); padding: 20px 24px; margin: 20px 0; border-radius: 0 8px 8px 0; }
  .quote-text { font-size: 16px; font-style: italic; color: var(--ink); margin-bottom: 8px; }
  .quote-text::before { content: '"'; }
  .quote-text::after { content: '"'; }
  .quote-source { font-size: 12px; color: var(--muted); }

  /* Opportunity cards */
  .opp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; }
  .opp-card { background: var(--white); border: 1px solid var(--rule); border-radius: 10px; padding: 20px; }
  .opp-card.priority { border-color: var(--accent); border-width: 2px; }
  .opp-rank { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); margin-bottom: 8px; }
  .opp-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--ink); }
  .opp-body { font-size: 13px; color: var(--mid); margin-bottom: 12px; }
  .opp-signal { font-size: 12px; background: var(--bg); padding: 6px 10px; border-radius: 4px; color: var(--muted); }

  /* Hook templates */
  .hook-card { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; padding: 16px 20px; margin: 10px 0; }
  .hook-type { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-2); margin-bottom: 8px; }
  .hook-text { font-size: 15px; color: var(--ink); font-weight: 500; }
  .hook-why { font-size: 12px; color: var(--muted); margin-top: 6px; }

  /* Platform cards */
  .platform-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin: 20px 0; }
  .platform-card { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; padding: 16px; }
  .platform-name { font-size: 14px; font-weight: 700; margin-bottom: 8px; color: var(--ink); }
  .platform-verdict { display: inline-block; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 8px; }
  .platform-verdict.prioritize { background: var(--green-light); color: var(--green); }
  .platform-verdict.secondary { background: var(--amber-light); color: var(--amber); }
  .platform-verdict.skip { background: #F3F4F6; color: var(--muted); }
  .platform-detail { font-size: 12px; color: var(--mid); }

  /* Trend badges */
  .trend-early { display: inline-block; background: var(--green-light); color: var(--green); font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.06em; }
  .trend-peak { display: inline-block; background: var(--amber-light); color: var(--amber); font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.06em; }
  .trend-saturated { display: inline-block; background: #F3F4F6; color: var(--muted); font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.06em; }

  /* Content calendar */
  .calendar-week { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 16px 0; }
  .calendar-header { background: var(--accent); color: white; padding: 10px 16px; font-size: 13px; font-weight: 600; }
  .calendar-item { padding: 12px 16px; border-bottom: 1px solid var(--rule); display: flex; gap: 16px; font-size: 13px; }
  .calendar-item:last-child { border-bottom: none; }
  .calendar-platform { font-weight: 700; color: var(--accent); min-width: 80px; }
  .calendar-topic { color: var(--mid); flex: 1; }
  .calendar-type { color: var(--muted); font-size: 12px; }

  /* Competitor table */
  .comp-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
  .comp-table th { background: var(--ink); color: white; padding: 10px 14px; text-align: left; }
  .comp-table td { padding: 10px 14px; border-bottom: 1px solid var(--rule); vertical-align: top; }
  .comp-table tr:last-child td { border-bottom: none; }

  /* Adversarial */
  .adversarial { border: 1px solid var(--rule); border-radius: 10px; overflow: hidden; margin: 28px 0; }
  .adversarial-header { background: var(--ink); color: white; padding: 14px 20px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
  .adversarial-row { padding: 16px 20px; border-bottom: 1px solid var(--rule); font-size: 14px; }
  .adversarial-row:last-child { border-bottom: none; }
  .adversarial-claim { font-weight: 700; margin-bottom: 6px; }
  .adversarial-counter { color: var(--mid); font-size: 13px; margin-bottom: 8px; }
  .v-held { color: var(--green); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-weakened { color: var(--amber); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-failed { color: var(--red); font-size: 11px; font-weight: 700; text-transform: uppercase; }

  /* Grade badges */
  .grade { display: inline-block; font-size: 10px; font-weight: 700; padding: 1px 5px; border-radius: 3px; margin-left: 3px; }
  .grade-a { background: #D1FAE5; color: var(--green); }
  .grade-b { background: #FEF3C7; color: var(--amber); }
  .grade-c { background: #F3F4F6; color: var(--muted); }

  /* Footer */
  .footer { background: var(--ink); color: rgba(255,255,255,0.5); padding: 24px 64px; font-size: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: 60px; }
  .footer-brand { color: white; font-weight: 700; }

  @media print {
    .cover { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .content { padding: 24px 16px; }
  }
</style>
</head>
<body>

<div class="cover">
  <div class="cover-brand">CORYANT · Content Intelligence</div>
  <div class="cover-type">[MOMENT TYPE]</div>
  <h1 class="cover-title">[Niche / Creator Name]</h1>
  <p class="cover-sub">[Platform(s)] · [Creator Type] · [Primary Goal]</p>
  <div class="cover-meta">
    <span>Prepared: [Date]</span>
    <span>Depth: [SURFACE / STANDARD / DEEP]</span>
    <span>Agents: [n] run</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Contents</div>
  <div class="toc-items">
    <a href="#verdict">Strategy Verdict</a>
    <a href="#audience">Audience Intel</a>
    <a href="#competitors">Competitor Landscape</a>
    <a href="#trends">Trend Signals</a>
    <a href="#channels">Channel Strategy</a>
    <a href="#seo">SEO Opportunities</a>
    <a href="#hooks">Viral Patterns</a>
    <a href="#calendar">Content Plan</a>
    <a href="#adversarial">Adversarial Review</a>
    <a href="#sources">Sources</a>
  </div>
</div>

<div class="content">

<!-- STRATEGY VERDICT -->
<section id="verdict">
<h1>Strategy Verdict</h1>
<div class="verdict">
  <div class="verdict-label">Content Intelligence Verdict</div>
  <div class="verdict-headline">[The strategy in one sentence — what to do and why it will work]</div>
  <p>[2–3 sentences: what the research found and what the strategic implication is]</p>
  <div class="verdict-cols">
    <div>
      <div class="verdict-col-label">Biggest Opportunity</div>
      <p>[The one content opportunity that has the most evidence behind it]</p>
    </div>
    <div>
      <div class="verdict-col-label">Primary Platform</div>
      <p>[Where to focus first and why]</p>
    </div>
    <div>
      <div class="verdict-col-label">First Content to Create</div>
      <p>[The specific first piece to make — topic, format, angle]</p>
    </div>
  </div>
</div>
</section>

<!-- STAT STRIP -->
<div class="stat-strip">
  <div class="stat">
    <div class="stat-value">[n]</div>
    <div class="stat-label">Content Gaps Found</div>
  </div>
  <div class="stat">
    <div class="stat-value">[n]</div>
    <div class="stat-label">Early Trends Identified</div>
  </div>
  <div class="stat">
    <div class="stat-value">[n]</div>
    <div class="stat-label">Hook Templates</div>
  </div>
  <div class="stat">
    <div class="stat-value">[x]</div>
    <div class="stat-label">Priority Platform</div>
  </div>
</div>

<!-- AUDIENCE INTEL -->
<section id="audience">
<h1>Audience Intelligence</h1>

<h2>How They Actually Describe Their Problem</h2>
<div class="quote-strip">
  <div class="quote-text">[Verbatim quote from Reddit/YouTube comments/community]</div>
  <div class="quote-source">— [Platform/community] · [date]</div>
</div>
<div class="quote-strip">
  <div class="quote-text">[Second verbatim quote]</div>
  <div class="quote-source">— [Platform/community]</div>
</div>

<h2>Who They Are</h2>
[Demographics and psychographics — structured]

<h2>What They Actually Engage With</h2>
[Evidence-based findings]

<h2>Where They Spend Time</h2>
[Platforms, communities, trusted voices]

<h2>Content Gaps — What They're Not Getting</h2>
<ol>
  <li><strong>[Gap 1]</strong>: [Evidence] <span class="grade grade-b">B</span></li>
  <li><strong>[Gap 2]</strong>: [Evidence]</li>
</ol>
</section>

<!-- COMPETITOR LANDSCAPE -->
<section id="competitors">
<h1>Competitor Content Landscape</h1>
<table class="comp-table">
  <thead>
    <tr><th>Creator</th><th>Audience</th><th>Core Angle</th><th>What Works</th><th>Gap Left Open</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>[Name]</td>
      <td>[size] <span class="grade grade-b">B</span></td>
      <td>[angle]</td>
      <td>[format/topic]</td>
      <td>[gap]</td>
    </tr>
  </tbody>
</table>

<h2>Content Opportunities (Nobody Is Doing These Well)</h2>
<div class="opp-grid">
  <div class="opp-card priority">
    <div class="opp-rank">Priority Gap #1</div>
    <div class="opp-title">[Specific content opportunity]</div>
    <div class="opp-body">[Why this gap exists and why it's valuable]</div>
    <div class="opp-signal">Signal: [evidence of demand]</div>
  </div>
  <div class="opp-card">
    <div class="opp-rank">Gap #2</div>
    <div class="opp-title">[Opportunity]</div>
    <div class="opp-body">[Description]</div>
    <div class="opp-signal">Signal: [evidence]</div>
  </div>
</div>
</section>

<!-- TREND SIGNALS -->
<section id="trends">
<h1>Trend Signals</h1>
<h2>Act Now — EARLY Trends</h2>
[For each early trend: name, signal evidence, recommended angle, window estimate]

<h2>Still Relevant — PEAK Trends</h2>
[Peak trends with remaining window]

<h2>Avoid — Saturated</h2>
[Topics to skip and why]
</section>

<!-- CHANNEL STRATEGY -->
<section id="channels">
<h1>Channel Strategy</h1>
<div class="platform-grid">
  <div class="platform-card">
    <div class="platform-name">LinkedIn</div>
    <div class="platform-verdict prioritize">PRIORITIZE</div>
    <div class="platform-detail">[Why + what wins here + realistic timeline]</div>
  </div>
  <div class="platform-card">
    <div class="platform-name">Newsletter</div>
    <div class="platform-verdict secondary">SECONDARY</div>
    <div class="platform-detail">[Why + what wins here]</div>
  </div>
  <div class="platform-card">
    <div class="platform-name">YouTube</div>
    <div class="platform-verdict skip">SKIP FOR NOW</div>
    <div class="platform-detail">[Honest reason]</div>
  </div>
</div>
</section>

<!-- SEO -->
<section id="seo">
<h1>SEO Opportunities</h1>
[Keyword clusters, underserved queries, featured snippet targets]
</section>

<!-- VIRAL PATTERNS -->
<section id="hooks">
<h1>Viral Patterns for This Niche</h1>
<h2>Hook Templates (From Research)</h2>
<div class="hook-card">
  <div class="hook-type">Contrarian Claim</div>
  <div class="hook-text">[Hook template based on actual patterns found]</div>
  <div class="hook-why">Works because: [why this emotional trigger drives engagement in this niche]</div>
</div>
<div class="hook-card">
  <div class="hook-type">Data Surprise</div>
  <div class="hook-text">[Template]</div>
  <div class="hook-why">Works because: [reason]</div>
</div>
<!-- continue for all hook patterns found -->

<h2>Content Structure Blueprint</h2>
[The structure that wins in this niche — step by step]

<h2>Primary Emotional Trigger</h2>
[What emotion drives sharing here — with evidence]
</section>

<!-- CONTENT PLAN -->
<section id="calendar">
<h1>90-Day Content Plan</h1>
<div class="calendar-week">
  <div class="calendar-header">Weeks 1–2 — Foundation (Build Authority)</div>
  <div class="calendar-item">
    <div class="calendar-platform">LinkedIn</div>
    <div class="calendar-topic">[Topic] — [Angle]</div>
    <div class="calendar-type">Text post · [Hook type]</div>
  </div>
  <div class="calendar-item">
    <div class="calendar-platform">Newsletter</div>
    <div class="calendar-topic">[Topic]</div>
    <div class="calendar-type">Issue · [Format]</div>
  </div>
</div>
<div class="calendar-week">
  <div class="calendar-header">Weeks 3–6 — Momentum (Own a Gap)</div>
  <!-- repeat -->
</div>
<div class="calendar-week">
  <div class="calendar-header">Weeks 7–12 — Scale (Double Down on What Works)</div>
  <!-- repeat -->
</div>
</section>

<!-- ADVERSARIAL REVIEW -->
<section id="adversarial">
<h1>Adversarial Review</h1>
<div class="adversarial">
  <div class="adversarial-header">Stage 3.5 — Strategy Conclusions Stress-Tested</div>
  <div class="adversarial-row">
    <div class="adversarial-claim">Conclusion 1: [State it clearly]</div>
    <div class="adversarial-counter">Counter-argument: [Strongest challenge]</div>
    <span class="v-held">HELD — [why it survives]</span>
  </div>
  <div class="adversarial-row">
    <div class="adversarial-claim">Conclusion 2: [State it clearly]</div>
    <div class="adversarial-counter">Counter-argument: [Challenge]</div>
    <span class="v-weakened">WEAKENED — [caveat]</span>
  </div>
</div>
</section>

<!-- SOURCES -->
<div id="sources" style="background:var(--white);border:1px solid var(--rule);border-radius:10px;padding:28px;margin-top:40px;">
<h2 style="border-bottom:1px solid var(--rule);padding-bottom:12px;margin-bottom:16px;">Sources</h2>
<div style="font-size:13px;color:var(--mid);">[1] [Source] — [URL] — [date accessed]</div>
<!-- continue -->
<div style="margin-top:14px;font-size:12px;color:var(--muted);">
  Evidence grades: <span class="grade grade-a">A</span> Primary/multi-source · <span class="grade grade-b">B</span> Single credible source · <span class="grade grade-c">C</span> Inference — verify before acting
</div>
</div>

</div>

<div class="footer">
  <span class="footer-brand">CORYANT</span>
  <span>Content intelligence. Not content advice.</span>
  <span>coryant.xyz</span>
</div>

</body>
</html>
```

---

## Section Inclusion by Moment Type

| Section | STRATEGY_BUILD | COMPETITOR | AUDIENCE | TREND | CHANNEL | SEO | VIRAL | AUDIT |
|---|---|---|---|---|---|---|---|---|
| Strategy Verdict | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Audience Intel | ✓ | ✓ | ✓ full | — | ✓ | — | ✓ | ✓ |
| Competitor Landscape | ✓ | ✓ full | — | ✓ | ✓ | ✓ | ✓ | ✓ |
| Trend Signals | ✓ | — | — | ✓ full | — | ✓ | — | ✓ |
| Channel Strategy | ✓ | — | ✓ | — | ✓ full | — | — | ✓ |
| SEO Opportunities | ✓ | ✓ | — | ✓ | — | ✓ full | — | optional |
| Viral Patterns | ✓ | ✓ | ✓ | — | — | — | ✓ full | ✓ |
| Content Plan | ✓ | — | — | — | ✓ | ✓ | — | ✓ |
| Adversarial Review | DEEP | DEEP | DEEP | DEEP | DEEP | DEEP | DEEP | DEEP |
