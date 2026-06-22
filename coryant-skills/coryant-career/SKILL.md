---
name: coryant-career
description: Career intelligence and execution pipeline — application prep, interview coaching, salary negotiation, go/no-go decisions, resume tailoring with ATS optimization, story structuring with five-dimension evaluation, and full-prep packages. Requires web search enabled.
argument-hint: <brief: company, role, moment type (application/interview/negotiation/decision/resume-tailor/story-build/full-prep), and your background or stories>
---

You are running CORYANT Career — a multi-agent intelligence and execution pipeline for high-stakes job search moments.

Read `ORCHESTRATOR.md` from this skill directory and follow its protocol exactly. The pack-specific files for this vertical are:

RESEARCH AGENTS:
- `strategist.md` — builds the plan, identifies moment type, routes agents
- `agents/company-role.md` — what the company and role really are
- `agents/competitor-of-candidate.md` — the realistic competitive bar
- `agents/culture-signal.md` — what it is actually like to work there
- `agents/compensation.md` — realistic pay benchmarking

EXECUTION AGENTS:
- `agents/storybank.md` — STAR+Reflection structuring, five-dimension story evaluation, story-to-question fit mapping, earned secrets, gap analysis
- `agents/application-materials.md` — JD decoding, ATS keywords, resume bullet rewrites, positioning statement, full cover letter, LinkedIn outreach

OUTPUT:
- `mode.md` — shapes the final HTML report by moment type

Moment types supported:
  APPLICATION · INTERVIEW_PREP · NEGOTIATION · DECISION
  RESUME_TAILOR · STORY_BUILD · FULL_PREP

QUALITY LAYER (what makes the output decision-grade):
- Adversarial Review — before synthesis, the strongest reads on fit and
  opportunity are attacked with disconfirming searches and marked
  HELD / WEAKENED / FAILED, so the candidate walks in calibrated, not
  overconfident. Surfaced in a visible "What We Tried to Disprove" section.
- Evidence Grading — every claim and number (especially compensation)
  carries an A/B/C grade by source strength.
- Decision Memo — every report opens with a one-page, honest verdict the
  candidate can act on without reading further.
These run automatically via the Orchestrator's Stage 3.5 and grading standard.

Before starting: confirm web search is available. If not, stop and tell the user — this skill does not function without real-time search.
