# CORYANT Academy — Teaching Output Mode

Clean, structured output for tutors — ready-to-use session plans, formatted problem sets, student-facing explanations. Design: deep navy / warm gold — scholarly, clear, trusted.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORYANT Academy — [Moment Type]: [Topic]</title>
<style>
  :root {
    --ink: #0F172A;
    --mid: #334155;
    --muted: #64748B;
    --rule: #E2E8F0;
    --bg: #F8FAFC;
    --white: #FFFFFF;
    --navy: #1E3A5F;
    --navy-2: #1D4ED8;
    --gold: #B45309;
    --gold-2: #D97706;
    --gold-light: #FFFBEB;
    --gold-border: #FCD34D;
    --green: #059669;
    --green-light: #ECFDF5;
    --red: #DC2626;
    --red-light: #FEF2F2;
    --purple: #7C3AED;
    --purple-light: #F5F3FF;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.7; color: var(--ink); background: var(--bg); }

  .cover { background: linear-gradient(135deg, #1E3A5F 0%, #1E40AF 100%); color: white; padding: 48px 60px 40px; }
  .cover-brand { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.5; margin-bottom: 20px; }
  .cover-lane { display: inline-block; background: var(--gold-2); color: var(--ink); padding: 4px 14px; border-radius: 4px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px; }
  .cover-title { font-size: 32px; font-weight: 700; line-height: 1.2; margin-bottom: 10px; }
  .cover-sub { font-size: 15px; opacity: 0.65; margin-bottom: 32px; }
  .cover-meta { display: flex; gap: 24px; font-size: 12px; opacity: 0.5; flex-wrap: wrap; }

  .toc { background: var(--white); border-bottom: 3px solid var(--gold-2); padding: 14px 60px; font-size: 13px; }
  .toc-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); margin-bottom: 7px; }
  .toc-items { display: flex; flex-wrap: wrap; gap: 5px 18px; }
  .toc-items a { color: var(--gold); text-decoration: none; font-weight: 600; }

  .content { max-width: 860px; margin: 0 auto; padding: 44px 28px; }

  h1 { font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 18px; padding-bottom: 10px; border-bottom: 3px solid var(--gold-2); }
  h2 { font-size: 16px; font-weight: 700; color: var(--ink); margin: 24px 0 10px; }
  h3 { font-size: 13px; font-weight: 700; color: var(--muted); margin: 16px 0 8px; text-transform: uppercase; letter-spacing: 0.07em; }
  p { margin-bottom: 12px; color: var(--mid); }
  ul, ol { padding-left: 20px; margin-bottom: 12px; }
  li { margin-bottom: 6px; color: var(--mid); }
  strong { color: var(--ink); }

  /* Objective box */
  .objective { background: var(--gold-light); border: 2px solid var(--gold-2); border-radius: 8px; padding: 18px 22px; margin: 20px 0; }
  .objective-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--gold); margin-bottom: 8px; }
  .objective-text { font-size: 17px; font-weight: 700; color: var(--ink); }

  /* Session timeline */
  .timeline { position: relative; padding-left: 60px; }
  .timeline::before { content: ''; position: absolute; left: 24px; top: 0; bottom: 0; width: 2px; background: var(--rule); }
  .phase { position: relative; margin-bottom: 24px; }
  .phase-dot { position: absolute; left: -60px; top: 0; width: 48px; height: 48px; border-radius: 50%; background: var(--navy); display: flex; align-items: center; justify-content: center; flex-direction: column; }
  .phase-time { font-size: 9px; font-weight: 700; color: rgba(255,255,255,0.7); line-height: 1; }
  .phase-min { font-size: 11px; font-weight: 700; color: white; line-height: 1; }
  .phase-body { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; padding: 16px 20px; }
  .phase-title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
  .phase-purpose { font-size: 12px; color: var(--muted); margin-bottom: 10px; }
  .phase-content { font-size: 14px; color: var(--mid); }
  .branch { margin-top: 12px; }
  .branch-item { display: flex; gap: 8px; margin: 5px 0; font-size: 13px; }
  .branch-yes { background: var(--green-light); color: var(--green); font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 3px; flex-shrink: 0; align-self: flex-start; margin-top: 3px; }
  .branch-no { background: var(--red-light); color: var(--red); font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 3px; flex-shrink: 0; align-self: flex-start; margin-top: 3px; }
  .branch-text { color: var(--mid); }

  /* Concept levels */
  .level-card { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 12px 0; }
  .level-header { padding: 10px 16px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .level-1 .level-header { background: var(--green-light); color: var(--green); }
  .level-2 .level-header { background: var(--gold-light); color: var(--gold); }
  .level-3 .level-header { background: var(--purple-light); color: var(--purple); }
  .level-body { padding: 16px; font-size: 14px; color: var(--mid); line-height: 1.75; }

  /* Problem card */
  .problem-card { background: var(--white); border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 16px 0; }
  .problem-header { background: var(--navy); color: white; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; }
  .problem-num { font-size: 13px; font-weight: 700; }
  .problem-badges { display: flex; gap: 6px; }
  .badge { font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 3px; }
  .badge-found { background: rgba(255,255,255,0.15); color: white; }
  .badge-bloom { background: var(--gold-2); color: var(--ink); }
  .problem-body { padding: 16px 20px; }
  .problem-q { font-size: 15px; color: var(--ink); margin-bottom: 16px; }
  .problem-solution { background: var(--bg); border: 1px solid var(--rule); border-radius: 6px; padding: 14px; margin: 12px 0; }
  .solution-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 8px; }
  .error-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--red); margin-top: 10px; margin-bottom: 4px; }

  /* Misconception card */
  .misconception-card { background: var(--red-light); border: 1px solid #FECACA; border-radius: 8px; padding: 16px 20px; margin: 12px 0; }
  .misconception-belief { font-size: 14px; font-weight: 600; color: var(--red); margin-bottom: 8px; font-style: italic; }
  .misconception-why { font-size: 13px; color: var(--mid); margin-bottom: 8px; }
  .misconception-fix { font-size: 13px; color: var(--ink); }
  .diagnostic-q { background: white; border: 1px solid #FECACA; border-radius: 6px; padding: 10px 14px; margin-top: 8px; font-size: 13px; font-style: italic; color: var(--ink); }

  /* Prerequisite tree */
  .prereq-item { padding: 8px 14px; border-left: 3px solid var(--gold-2); margin: 6px 0; background: var(--white); border-radius: 0 6px 6px 0; font-size: 14px; color: var(--mid); }
  .prereq-item.gap { border-left-color: var(--red); background: var(--red-light); }

  /* Adversarial */
  .adversarial { border: 1px solid var(--rule); border-radius: 8px; overflow: hidden; margin: 24px 0; }
  .adversarial-header { background: var(--ink); color: white; padding: 10px 16px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; }
  .adversarial-row { padding: 12px 16px; border-bottom: 1px solid var(--rule); font-size: 13px; }
  .adversarial-row:last-child { border-bottom: none; }
  .adv-claim { font-weight: 700; margin-bottom: 4px; }
  .adv-counter { color: var(--mid); margin-bottom: 5px; }
  .v-held { color: var(--green); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-weakened { color: var(--gold-2); font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .v-failed { color: var(--red); font-size: 11px; font-weight: 700; text-transform: uppercase; }

  .footer { background: var(--navy); color: rgba(255,255,255,0.45); padding: 20px 60px; font-size: 12px; display: flex; justify-content: space-between; margin-top: 52px; }
  .footer-brand { color: white; font-weight: 700; }

  @media print {
    .cover { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .content { padding: 20px 12px; }
  }
</style>
</head>
<body>

<div class="cover">
  <div class="cover-brand">CORYANT · Academy</div>
  <div class="cover-lane">TUTOR</div>
  <h1 class="cover-title">[Topic / Concept / Session]</h1>
  <p class="cover-sub">[Student profile] · [Level] · [Session type: REMEDIATION / ADVANCEMENT / CONSOLIDATION]</p>
  <div class="cover-meta">
    <span>Prepared: [Date]</span>
    <span>Duration: [x min]</span>
    <span>Moment: [SESSION_PREP / CONCEPT_EXPLAIN / PROBLEM_SET / MISCONCEPTION_HUNT]</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Contents</div>
  <div class="toc-items">
    <a href="#objective">Objective</a>
    <a href="#student">Student Profile</a>
    <a href="#concept">Concept</a>
    <a href="#session">Session Plan</a>
    <a href="#problems">Problems</a>
    <a href="#misconceptions">Misconceptions</a>
    <a href="#homework">Homework</a>
  </div>
</div>

<div class="content">

<section id="objective">
<h1>Session Objective</h1>
<div class="objective">
  <div class="objective-label">Primary Objective — One thing the student will understand at the end of this session</div>
  <div class="objective-text">[Specific, measurable objective]</div>
</div>
</section>

<section id="student">
<h1>Student Profile</h1>
[Level, prior knowledge, known gaps, exam context]
</section>

<section id="concept">
<h1>Concept Map</h1>
<h2>Prerequisites</h2>
<div class="prereq-item">Prerequisite 1 — [assumed present]</div>
<div class="prereq-item gap">Prerequisite 2 — [CHECK: commonly missing — verify before proceeding]</div>

<h2>Explanations</h2>
<div class="level-card level-1">
  <div class="level-header">Level 1 — Intuitive</div>
  <div class="level-body">[Analogy-led, no formalism]</div>
</div>
<div class="level-card level-2">
  <div class="level-header">Level 2 — Conceptual</div>
  <div class="level-body">[Formal but from first principles]</div>
</div>
<div class="level-card level-3">
  <div class="level-header">Level 3 — Technical</div>
  <div class="level-body">[Full formal treatment]</div>
</div>
</section>

<section id="session">
<h1>Session Plan</h1>
<div class="timeline">
  <div class="phase">
    <div class="phase-dot"><div class="phase-time">00:00</div><div class="phase-min">5 min</div></div>
    <div class="phase-body">
      <div class="phase-title">Opening Check-In</div>
      <div class="phase-purpose">Activate prior knowledge · surface questions from last session</div>
      <div class="phase-content">[What to ask, what to listen for]</div>
    </div>
  </div>
  <div class="phase">
    <div class="phase-dot"><div class="phase-time">00:05</div><div class="phase-min">10 min</div></div>
    <div class="phase-body">
      <div class="phase-title">Warm-Up</div>
      <div class="phase-purpose">[Purpose]</div>
      <div class="phase-content">[Activity]</div>
      <div class="branch">
        <div class="branch-item"><span class="branch-yes">YES</span><span class="branch-text">[Move forward]</span></div>
        <div class="branch-item"><span class="branch-no">NO</span><span class="branch-text">[Brief remediation before proceeding]</span></div>
      </div>
    </div>
  </div>
  [Continue for all phases]
</div>
</section>

<section id="problems">
<h1>Practice Problems</h1>
<div class="problem-card">
  <div class="problem-header">
    <span class="problem-num">Problem 1</span>
    <div class="problem-badges"><span class="badge badge-found">STANDARD</span><span class="badge badge-bloom">APPLY</span></div>
  </div>
  <div class="problem-body">
    <div class="problem-q">[Full problem statement]</div>
    <div class="problem-solution">
      <div class="solution-label">Worked Solution</div>
      [Step-by-step working]
      <div class="error-label">Common Error to Watch For</div>
      [What a student who nearly gets it writes — and why it's wrong]
    </div>
  </div>
</div>
</section>

<section id="misconceptions">
<h1>Misconceptions to Pre-empt</h1>
<div class="misconception-card">
  <div class="misconception-belief">"[The wrong belief — stated precisely]"</div>
  <div class="misconception-why">Why it arises: [x]</div>
  <div class="misconception-fix">Correction: [what understanding resolves it]</div>
  <div class="diagnostic-q">Diagnostic question: "[Ask this to check if the student holds this misconception]"</div>
</div>
</section>

<section id="homework">
<h1>Homework</h1>
[Specific practice, time estimate, what to flag if stuck]
</section>

</div>

<div class="footer">
  <span class="footer-brand">CORYANT</span>
  <span>Teaching intelligence. Every session, prepared.</span>
  <span>coryant.xyz</span>
</div>

</body>
</html>
```
