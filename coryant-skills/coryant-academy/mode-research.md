# CORYANT Academy — Research Output Mode

Formal, cited output for academic work — literature maps with paper references, gap analyses, writing feedback, methodology briefs. Design: deep navy / warm gold — scholarly, serious.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT Academy — Research: [Topic]</title>
<style>
  :root {
    --ink: #0F172A;
    --mid: #334155;
    --muted: #64748B;
    --rule: #E2E8F0;
    --bg: #F8FAFC;
    --white: #FFFFFF;
    --navy: #1E3A5F;
    --gold: #B45309;
    --gold-2: #D97706;
    --gold-light: #FFFBEB;
    --gold-border: #FCD34D;
    --green: #059669;
    --green-light: #ECFDF5;
    --red: #DC2626;
    --red-light: #FEF2F2;
    --amber: #D97706;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Georgia', 'Times New Roman', serif; font-size: 15px; line-height: 1.8; color: var(--ink); background: var(--bg); }

  .cover { background: linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%); color: white; padding: 52px 64px 44px; }
  .cover-brand { font-family: 'Inter', Arial, sans-serif; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.5; margin-bottom: 20px; }
  .cover-lane { display: inline-block; background: var(--gold-2); color: var(--ink); padding: 4px 14px; border-radius: 4px; font-size: 11px; font-weight: 700; font-family: 'Inter', Arial, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px; }
  .cover-title { font-size: 30px; font-weight: 700; line-height: 1.25; margin-bottom: 10px; }
  .cover-sub { font-size: 15px; opacity: 0.65; font-style: italic; margin-bottom: 32px; }
  .cover-meta { font-family: 'Inter', Arial, sans-serif; display: flex; gap: 24px; font-size: 12px; opacity: 0.5; flex-wrap: wrap; }

  .search-bar { background: var(--white); border-bottom: 3px solid var(--gold-2); padding: 14px 64px; font-family: 'Inter', Arial, sans-serif; font-size: 12px; color: var(--muted); }
  .search-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 4px; }
  .search-items { display: flex; flex-wrap: wrap; gap: 4px 14px; }
  .search-item { color: var(--gold); font-weight: 600; }

  .content { max-width: 860px; margin: 0 auto; padding: 48px 32px; }

  h1 { font-family: 'Inter', Arial, sans-serif; font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 18px; padding-bottom: 10px; border-bottom: 3px solid var(--gold-2); }
  h2 { font-family: 'Inter', Arial, sans-serif; font-size: 17px; font-weight: 700; color: var(--ink); margin: 28px 0 10px; }
  h3 { font-family: 'Inter', Arial, sans-serif; font-size: 13px; font-weight: 700; color: var(--muted); margin: 18px 0 8px; text-transform: uppercase; letter-spacing: 0.07em; }
  p { margin-bottom: 14px; color: var(--mid); }
  ul, ol { padding-left: 22px; margin-bottom: 14px; }
  li { margin-bottom: 8px; color: var(--mid); }
  strong { color: var(--ink); font-family: 'Inter', Arial, sans-serif; }
  em { color: var(--mid); }

  /* Finding box */
  .finding { background: var(--gold-light); border: 2px solid var(--gold-2); border-radius: 8px; padding: 22px 26px; margin: 24px 0; }
  .finding-label { font-family: 'Inter', Arial, sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--gold); margin-bottom: 10px; }
  .finding-text { font-size: 16px; font-weight: 700; color: var(--ink); font-family: 'Inter', Arial, sans-serif; line-height: 1.4; }

  /* Paper citation card */
  .paper { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; padding: 16px 20px; margin: 10px 0; }
  .paper-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; gap: 12px; }
  .paper-title { font-size: 14px; font-weight: 700; color: var(--ink); font-family: 'Inter', Arial, sans-serif; }
  .paper-grade { font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 3px; flex-shrink: 0; }
  .grade-a { background: #D1FAE5; color: var(--green); }
  .grade-b { background: #FEF3C7; color: var(--amber); }
  .paper-meta { font-size: 12px; color: var(--muted); font-family: 'Inter', Arial, sans-serif; margin-bottom: 8px; }
  .paper-contrib { font-size: 13px; color: var(--mid); }

  /* Debate card */
  .debate { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 14px 0; }
  .debate-header { background: var(--navy); color: white; padding: 10px 16px; font-family: 'Inter', Arial, sans-serif; font-size: 13px; font-weight: 700; }
  .debate-sides { display: grid; grid-template-columns: 1fr 1fr; }
  .debate-side { padding: 14px 16px; border-right: 1px solid var(--rule); font-size: 13px; }
  .debate-side:last-child { border-right: none; }
  .debate-side-label { font-family: 'Inter', Arial, sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 6px; }
  .debate-status { padding: 10px 16px; background: var(--bg); font-family: 'Inter', Arial, sans-serif; font-size: 13px; color: var(--mid); border-top: 1px solid var(--rule); }

  /* Gap card */
  .gap-card { background: var(--white); border: 1px solid var(--rule); border-left: 4px solid var(--gold-2); border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 14px 0; }
  .gap-type { font-family: 'Inter', Arial, sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); margin-bottom: 6px; }
  .gap-title { font-size: 15px; font-weight: 700; color: var(--ink); font-family: 'Inter', Arial, sans-serif; margin-bottom: 6px; }
  .gap-desc { font-size: 13px; color: var(--mid); margin-bottom: 10px; }
  .gap-meta { display: flex; gap: 16px; font-family: 'Inter', Arial, sans-serif; font-size: 12px; color: var(--muted); }
  .gap-feasibility { color: var(--green); font-weight: 600; }
  .gap-significance { color: var(--gold); font-weight: 600; }

  /* Design table */
  .design-table { width: 100%; border-collapse: collapse; font-family: 'Inter', Arial, sans-serif; font-size: 13px; margin: 16px 0; }
  .design-table th { background: var(--navy); color: white; padding: 10px 14px; text-align: left; }
  .design-table td { padding: 10px 14px; border-bottom: 1px solid var(--rule); vertical-align: top; }
  .design-table tr:last-child td { border-bottom: none; }

  /* Writing feedback */
  .feedback-item { padding: 12px 16px; border-bottom: 1px solid var(--rule); font-family: 'Inter', Arial, sans-serif; }
  .feedback-item:last-child { border-bottom: none; }
  .feedback-original { font-size: 13px; color: var(--red); font-style: italic; margin-bottom: 6px; }
  .feedback-issue { font-size: 12px; color: var(--muted); margin-bottom: 6px; }
  .feedback-revised { font-size: 13px; color: var(--green); font-style: italic; }

  /* Adversarial */
  .adversarial { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 24px 0; }
  .adversarial-header { background: var(--ink); color: white; padding: 12px 18px; font-family: 'Inter', Arial, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; }
  .adversarial-row { padding: 14px 18px; border-bottom: 1px solid var(--rule); font-family: 'Inter', Arial, sans-serif; font-size: 13px; }
  .adversarial-row:last-child { border-bottom: none; }
  .adv-claim { font-weight: 700; margin-bottom: 5px; }
  .adv-counter { color: var(--mid); margin-bottom: 6px; }
  .v-held { color: var(--green); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-weakened { color: var(--amber); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-failed { color: var(--red); font-size: 11px; font-weight: 700; text-transform: uppercase; }

  /* Grade badges inline */
  .grade { font-family: 'Inter', Arial, sans-serif; display: inline-block; font-size: 10px; font-weight: 700; padding: 1px 5px; border-radius: 3px; margin-left: 3px; }
  .grade-a { background: #D1FAE5; color: var(--green); }
  .grade-b { background: #FEF3C7; color: var(--amber); }
  .grade-c { background: #F1F5F9; color: var(--muted); }

  /* References */
  .references { font-family: 'Inter', Arial, sans-serif; font-size: 12px; color: var(--mid); line-height: 1.7; }
  .ref-item { margin-bottom: 6px; padding-left: 24px; text-indent: -24px; }
  .ref-num { font-weight: 700; color: var(--gold); }

  .footer { background: var(--navy); color: rgba(255,255,255,0.45); padding: 22px 64px; font-family: 'Inter', Arial, sans-serif; font-size: 12px; display: flex; justify-content: space-between; margin-top: 56px; }
  .footer-brand { color: white; font-weight: 700; }

  @media print {
    .cover { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { font-size: 13px; }
    .content { padding: 20px 12px; }
  }
</style>
</head>
<body>

<div class="cover">
  <div class="cover-brand">CORYANT · Academy</div>
  <div class="cover-lane">RESEARCHER</div>
  <h1 class="cover-title">[Research Topic / Area / Paper Title]</h1>
  <p class="cover-sub">[Field + Sub-field] · [Moment type: LIT_MAP / GAP_FINDER / PAPER_CRAFT / GRANT_PREP]</p>
  <div class="cover-meta">
    <span>Prepared: [Date]</span>
    <span>Search date: [Date — live search conducted]</span>
    <span>Depth: [QUICK / STANDARD / DEEP]</span>
  </div>
</div>

<div class="search-bar">
  <div class="search-label">Live search sources consulted</div>
  <div class="search-items">
    <span class="search-item">Semantic Scholar</span>
    <span class="search-item">arXiv</span>
    <span class="search-item">PubMed</span>
    <span class="search-item">SSRN</span>
    <span class="search-item">Google Scholar</span>
  </div>
</div>

<div class="content">

<!-- RESEARCH FINDING / MAIN OUTPUT -->
<section id="finding">
<h1>Key Finding</h1>
<div class="finding">
  <div class="finding-label">Research Intelligence Verdict</div>
  <div class="finding-text">[The direct, specific answer to what the researcher needs — not a summary of what was searched]</div>
</div>
</section>

<!-- LITERATURE MAP -->
<section id="litmap">
<h1>Literature Map</h1>
<h2>Seminal Work</h2>
<div class="paper">
  <div class="paper-header">
    <div class="paper-title">[Author(s)] ([Year]). "[Title]." <em>[Venue]</em>.</div>
    <span class="paper-grade grade-a">A</span>
  </div>
  <div class="paper-meta">Cited ~[n] times · [field]</div>
  <div class="paper-contrib">Contribution: [one sentence on what this added]</div>
</div>
[Repeat for all seminal papers found]

<h2>Major Debates</h2>
<div class="debate">
  <div class="debate-header">Debate: [Short title]</div>
  <div class="debate-sides">
    <div class="debate-side"><div class="debate-side-label">Position A</div>[Precise statement]</div>
    <div class="debate-side"><div class="debate-side-label">Position B</div>[Precise statement]</div>
  </div>
  <div class="debate-status">Current state: [Unresolved / tilting toward A / effectively settled] — [evidence basis]</div>
</div>

<h2>Current Frontier (live search — [date])</h2>
<div class="paper">
  <div class="paper-header">
    <div class="paper-title">[Author(s)] ([Year]). "[Title]." <em>[Venue / Preprint]</em>.</div>
    <span class="paper-grade grade-b">B</span>
  </div>
  <div class="paper-meta">Preprint · [date]</div>
  <div class="paper-contrib">What it adds: [x]</div>
</div>
</section>

<!-- GAP ANALYSIS -->
<section id="gaps">
<h1>Research Gaps</h1>
<div class="gap-card">
  <div class="gap-type">Population Gap</div>
  <div class="gap-title">[Short title for the gap]</div>
  <div class="gap-desc">[Precise description of what hasn't been done and why it matters]</div>
  <div class="gap-meta">
    <span>Feasibility: <span class="gap-feasibility">HIGH</span></span>
    <span>Significance: <span class="gap-significance">HIGH</span></span>
  </div>
  <div style="margin-top:10px;font-size:13px;font-style:italic;color:var(--ink);">"[One sentence: what we will know at the end that we don't know now]"</div>
</div>
</section>

<!-- DESIGN OPTIONS -->
<section id="design">
<h1>Research Design</h1>
<table class="design-table">
  <thead><tr><th>Design</th><th>Strengths</th><th>Validity threats</th><th>Feasibility</th></tr></thead>
  <tbody>
    <tr><td>[Design A]</td><td>[x]</td><td>[x]</td><td>HIGH</td></tr>
    <tr><td>[Design B]</td><td>[x]</td><td>[x]</td><td>MEDIUM</td></tr>
  </tbody>
</table>
</section>

<!-- WRITING FEEDBACK -->
<section id="writing">
<h1>Writing Review</h1>
<div class="adversarial">
  <div class="adversarial-header">Clarity Issues Flagged</div>
  <div class="feedback-item">
    <div class="feedback-original">"[Original passage]"</div>
    <div class="feedback-issue">[Problem: zombie noun / passive overuse / vague quantifier / etc.]</div>
    <div class="feedback-revised">"[Revised passage]"</div>
  </div>
</div>
</section>

<!-- ADVERSARIAL REVIEW -->
<section id="adversarial">
<h1>Adversarial Review</h1>
<div class="adversarial">
  <div class="adversarial-header">Stage 3.5 — Top Conclusions Stress-Tested</div>
  <div class="adversarial-row">
    <div class="adv-claim">Conclusion 1: [State clearly]</div>
    <div class="adv-counter">Challenge: [Publication bias? Single-discipline view? Gap inflation?]</div>
    <span class="v-held">HELD — [reason]</span>
  </div>
  <div class="adversarial-row">
    <div class="adv-claim">Conclusion 2: [State clearly]</div>
    <div class="adv-counter">Challenge: [Recency bias? Methodological weakness?]</div>
    <span class="v-weakened">WEAKENED — [caveat]</span>
  </div>
</div>
</section>

<!-- REFERENCES -->
<div id="references" style="background:var(--white);border:1px solid var(--rule);border-radius:8px;padding:24px;margin-top:36px;">
<h2 style="font-family:'Inter',Arial,sans-serif;border-bottom:1px solid var(--rule);padding-bottom:10px;margin-bottom:14px;">References</h2>
<div class="references">
  <div class="ref-item"><span class="ref-num">[1]</span> [Author(s)] ([Year]). [Title]. <em>[Journal/Venue]</em>, [volume(issue)], [pages]. [URL if found via web search] <span class="grade grade-a">A</span></div>
  <div class="ref-item"><span class="ref-num">[2]</span> [Author(s)] ([Year]). [Title]. arXiv:[xxxx.xxxxx]. <span class="grade grade-b">B — preprint</span></div>
</div>
<div style="margin-top:14px;font-family:'Inter',Arial,sans-serif;font-size:12px;color:var(--muted);">
  <span class="grade grade-a">A</span> Peer-reviewed published &nbsp;·&nbsp; <span class="grade grade-b">B</span> Preprint / grey literature &nbsp;·&nbsp; <span class="grade grade-c">C</span> Synthesised / inferred
</div>
</div>

</div>

<div class="footer">
  <span class="footer-brand">CORYANT</span>
  <span>Research intelligence. Live search. Every query.</span>
  <span>coryant.xyz</span>
</div>

</body>
</html>
```
