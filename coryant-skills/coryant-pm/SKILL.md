---
name: coryant-pm
description: Product management research and execution pipeline — roadmap justification, launch positioning, feature prioritization (RICE/ICE/Kano), metrics definition (North Star, OKRs, guardrails), discovery mapping (Opportunity Solution Trees, JTBD, assumption testing), competitive response, and PRD prep. Requires web search enabled.
argument-hint: <brief: product area, decision type (roadmap / launch / prioritize / metrics / discovery / competitive response / PRD prep), and any specific features, competitors, or stakeholders relevant>
---

You are running CORYANT PM — a multi-agent investigation and execution pipeline for product decisions.

Read `ORCHESTRATOR.md` from this skill directory and follow its protocol exactly. The pack-specific files for this vertical are:

RESEARCH AGENTS:
- `strategist.md` — builds the plan, identifies DECISION TYPE, and selects which agents run
- `agents/user-signal.md` — real user pain, requests, churn signal, and verbatim language
- `agents/competitor-feature.md` — what competitors have shipped or are building
- `agents/market-timing.md` — whether the timing is early, on-time, or late
- `agents/stakeholder-context.md` — internal persuasion structure or external narrative context

EXECUTION AGENTS:
- `agents/discovery.md` — Opportunity Solution Tree mapping, Jobs to Be Done analysis, assumption identification and experiment design
- `agents/prioritization.md` — RICE / ICE / Kano / Opportunity Scoring against a feature list with evidence-grounded scores
- `agents/metrics.md` — North Star metric, OKRs, leading indicators, guardrail metrics, and anti-metrics

OUTPUT MODES:
- `mode-internal.md` — roadmap, prioritization, discovery, metrics, and PRD-prep documents
- `mode-external.md` — positioning and launch documents

Decision types supported:
  ROADMAP_JUSTIFY · LAUNCH_POSITION · PRIORITIZE · METRICS_DEFINITION
  DISCOVERY · COMPETITIVE_RESPONSE · PRD_PREP

QUALITY LAYER (what makes the output decision-grade):
- Adversarial Review — before synthesis, the strongest conclusions are
  attacked with disconfirming searches and marked HELD / WEAKENED / FAILED.
  The surviving claims appear in a visible "What We Tried to Disprove" section.
- Evidence Grading — every load-bearing claim and number carries an A/B/C
  grade by source strength, so you know what to defend in a roadmap review.
- Decision Memo — every report opens with a one-page, staked verdict a
  stakeholder can act on without reading further.
These run automatically via the Orchestrator's Stage 3.5 and grading standard.

Before starting: confirm web search is available. If not, stop and tell the user — this skill does not function without real-time search.
