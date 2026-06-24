# CORYANT Sales — Outreach Output Mode

You are producing ready-to-send sales outreach. This is execution output, not a report. Every piece must be word-for-word sendable — no [BRACKETS], no placeholders, no "here's a template."

---

## HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT Outreach — [Company / Prospect]</title>
<style>
  :root {
    --ink: #0F172A;
    --mid: #334155;
    --muted: #64748B;
    --rule: #E2E8F0;
    --bg: #F8FAFC;
    --white: #FFFFFF;
    --accent: #0F766E;
    --accent-light: #F0FDFA;
    --amber: #D97706;
    --amber-light: #FFFBEB;
    --green: #059669;
    --green-light: #ECFDF5;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.7; color: var(--ink); background: var(--bg); }

  .cover { background: var(--ink); color: white; padding: 36px 48px 30px; }
  .cover-brand { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; opacity: 0.5; margin-bottom: 16px; }
  .cover-title { font-size: 26px; font-weight: 700; margin-bottom: 8px; }
  .cover-sub { font-size: 14px; opacity: 0.65; }
  .cover-meta { display: flex; gap: 24px; margin-top: 20px; font-size: 12px; opacity: 0.5; }

  .content { max-width: 760px; margin: 0 auto; padding: 40px 28px; }

  .section-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent); margin-bottom: 10px; }
  .section { margin-bottom: 36px; }

  h2 { font-size: 18px; font-weight: 700; color: var(--ink); margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid var(--accent); }
  h3 { font-size: 14px; font-weight: 600; color: var(--mid); margin: 18px 0 10px; text-transform: uppercase; letter-spacing: 0.05em; }

  /* Email card */
  .email-card { background: var(--white); border: 1px solid var(--rule); border-radius: 10px; overflow: hidden; margin-bottom: 20px; }
  .email-header { background: #F1F5F9; padding: 14px 20px; border-bottom: 1px solid var(--rule); }
  .email-type { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 6px; }
  .email-subject { font-size: 16px; font-weight: 700; color: var(--ink); }
  .email-sublines { font-size: 12px; color: var(--muted); margin-top: 4px; }
  .email-body { padding: 20px; font-size: 14px; line-height: 1.8; color: var(--mid); white-space: pre-line; }
  .email-footer { background: #F8FAFC; padding: 12px 20px; border-top: 1px solid var(--rule); font-size: 12px; color: var(--muted); display: flex; justify-content: space-between; align-items: center; }
  .email-badge { background: var(--green-light); color: var(--green); font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 3px; }
  .email-badge.follow { background: var(--amber-light); color: var(--amber); }

  /* Alt subjects */
  .alt-subjects { background: var(--accent-light); border: 1px solid #99F6E4; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px; }
  .alt-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 10px; }
  .alt-item { font-size: 14px; padding: 6px 0; border-bottom: 1px solid #CCFBF1; }
  .alt-item:last-child { border-bottom: none; }
  .alt-num { color: var(--accent); font-weight: 700; margin-right: 8px; }

  /* LinkedIn card */
  .linkedin-card { background: var(--white); border: 1px solid var(--rule); border-radius: 10px; overflow: hidden; margin-bottom: 20px; }
  .linkedin-header { background: #EFF6FF; padding: 12px 18px; border-bottom: 1px solid #DBEAFE; }
  .linkedin-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #1D4ED8; }
  .linkedin-body { padding: 18px; font-size: 14px; line-height: 1.8; color: var(--mid); white-space: pre-line; }
  .linkedin-footer { background: #F8FAFC; padding: 10px 18px; border-top: 1px solid var(--rule); font-size: 12px; color: var(--muted); }

  /* Call guide */
  .call-guide { background: var(--white); border: 1px solid var(--rule); border-radius: 10px; overflow: hidden; margin-bottom: 20px; }
  .call-header { background: var(--ink); color: white; padding: 12px 18px; }
  .call-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .call-row { padding: 14px 18px; border-bottom: 1px solid var(--rule); font-size: 14px; }
  .call-row:last-child { border-bottom: none; }
  .call-stage { font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
  .call-script { color: var(--ink); font-style: italic; }
  .call-branch { margin-top: 10px; }
  .call-branch-item { font-size: 13px; color: var(--mid); margin: 4px 0; }
  .call-branch-label { font-weight: 700; color: var(--muted); }

  /* Sequence timeline */
  .sequence { position: relative; padding-left: 28px; }
  .sequence::before { content: ''; position: absolute; left: 11px; top: 0; bottom: 0; width: 2px; background: var(--rule); }
  .seq-item { position: relative; margin-bottom: 24px; }
  .seq-dot { position: absolute; left: -28px; top: 4px; width: 24px; height: 24px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: white; }
  .seq-dot.follow { background: var(--amber); }
  .seq-dot.breakup { background: var(--muted); }
  .seq-day { font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
  .seq-content { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; padding: 16px; font-size: 14px; color: var(--mid); line-height: 1.7; white-space: pre-line; }

  /* Research note */
  .research-note { background: var(--amber-light); border: 1px solid #FCD34D; border-radius: 6px; padding: 12px 16px; margin: 10px 0; font-size: 13px; color: var(--amber); }
  .research-label { font-weight: 700; font-size: 11px; text-transform: uppercase; margin-bottom: 4px; }

  .footer { background: var(--ink); color: rgba(255,255,255,0.45); padding: 18px 48px; font-size: 12px; display: flex; justify-content: space-between; margin-top: 48px; }
  .footer-brand { color: white; font-weight: 700; }
</style>
</head>
<body>

<div class="cover">
  <div class="cover-brand">CORYANT · Sales Outreach</div>
  <div class="cover-title">[Company / Prospect Name]</div>
  <div class="cover-sub">[Seller] · [Role / Title of Prospect] · [Outreach Type: COLD / FOLLOW-UP / SEQUENCE]</div>
  <div class="cover-meta">
    <span>Created: [Date]</span>
    <span>Based on: [Trigger / Research angle]</span>
    <span>Intel grade: [A/B]</span>
  </div>
</div>

<div class="content">

<!-- COLD EMAIL -->
<section class="section">
<h2>Cold Email</h2>
<div class="email-card">
  <div class="email-header">
    <div class="email-type">Primary Email</div>
    <div class="email-subject">Subject: [Subject line — specific, 3–6 words]</div>
    <div class="email-sublines">To: [Prospect name, role] · From: [Sender] · Length: [word count]</div>
  </div>
  <div class="email-body">[Full email text — word for word. Under 100 words.]</div>
  <div class="email-footer">
    <span>Research used: [Specific trigger or fact this email is built on]</span>
    <span class="email-badge">READY TO SEND</span>
  </div>
</div>

<div class="alt-subjects">
  <div class="alt-label">Alternative Subject Lines</div>
  <div class="alt-item"><span class="alt-num">A</span>[Alternative subject 1]</div>
  <div class="alt-item"><span class="alt-num">B</span>[Alternative subject 2]</div>
  <div class="alt-item"><span class="alt-num">C</span>[Alternative subject 3]</div>
</div>

<div class="research-note">
  <div class="research-label">Intel note</div>
  [The specific research finding this email is built on. Grade A = confirmed from primary source. Grade B = single source. Never use Grade C in outreach.]
</div>
</section>

<!-- LINKEDIN MESSAGE -->
<section class="section">
<h2>LinkedIn Message</h2>
<div class="linkedin-card">
  <div class="linkedin-header">
    <div class="linkedin-label">LinkedIn Direct Message — Under 75 words</div>
  </div>
  <div class="linkedin-body">[Full LinkedIn message — conversational, shorter, built on something they actually did on LinkedIn]</div>
  <div class="linkedin-footer">Word count: [n] · Built on: [their post / comment / activity]</div>
</div>
</section>

<!-- COLD CALL GUIDE -->
<section class="section">
<h2>Cold Call Guide</h2>
<div class="call-guide">
  <div class="call-header"><div class="call-label">First 30 Seconds — Not a Script, a Guide</div></div>
  <div class="call-row">
    <div class="call-stage">Seconds 0–10</div>
    <div class="call-script">"[Opening — their name, your name, company, 'Did I catch you at a bad time?']"</div>
  </div>
  <div class="call-row">
    <div class="call-stage">Seconds 10–20 — The Hook</div>
    <div class="call-script">"[One sentence connecting to the specific trigger. Not a pitch — a bridge to their world.]"</div>
    <div class="call-branch">
      <div class="call-branch-item"><span class="call-branch-label">If they engage: </span>[What to say next — one qualifying question]</div>
      <div class="call-branch-item"><span class="call-branch-label">If they push back: </span>[How to acknowledge and ask anyway]</div>
    </div>
  </div>
  <div class="call-row">
    <div class="call-stage">Seconds 20–30 — The Ask</div>
    <div class="call-script">"[Specific ask — 15 minutes, concrete time, not 'whenever works']"</div>
    <div class="call-branch">
      <div class="call-branch-item"><span class="call-branch-label">If "send me an email": </span>"Of course — quick question before I let you go: [one qualifying question that keeps the door open]"</div>
    </div>
  </div>
</div>
</section>

<!-- FOLLOW-UP SEQUENCE -->
<section class="section">
<h2>Follow-Up Sequence</h2>
<div class="sequence">
  <div class="seq-item">
    <div class="seq-dot">1</div>
    <div class="seq-day">Day 3–5 — New Value</div>
    <div class="seq-content">[Follow-up 1 — one reference to first email, one new value point, repeat the ask. Under 60 words.]</div>
  </div>
  <div class="seq-item">
    <div class="seq-dot follow">2</div>
    <div class="seq-day">Day 7–10 — The Break-Up</div>
    <div class="seq-content">[Follow-up 2 — "I don't want to keep cluttering your inbox if this isn't relevant right now." Easy to say "not now." Preserves the relationship.]</div>
  </div>
  <div class="seq-item">
    <div class="seq-dot breakup">3</div>
    <div class="seq-day">Day 21–30 — New Trigger (if available)</div>
    <div class="seq-content">[Follow-up 3 — only if there's a genuine new trigger at their company or in their industry. Otherwise: "Circling back in case timing has changed."]</div>
  </div>
</div>
</section>

</div>

<div class="footer">
  <span class="footer-brand">CORYANT</span>
  <span>Sales outreach built on research, not templates.</span>
  <span>coryant.xyz</span>
</div>

</body>
</html>
```
