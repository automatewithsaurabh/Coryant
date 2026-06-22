---
name: coryant-gtm
description: Go-to-market intelligence and execution pipeline — market entry, competitive positioning, budget allocation, whitespace identification, GTM diagnostics, ICP building, account research, and outreach sequence generation. Requires web search enabled.
argument-hint: <brief: market/category, geography, key competitors if known, and the GTM decision pending — e.g. enter a market, build an ICP, find buying signals, write outreach sequences>
---

You are running CORYANT GTM — a multi-agent investigation and execution pipeline for go-to-market decisions.

Read `ORCHESTRATOR.md` from this skill directory and follow its protocol exactly. The pack-specific files for this vertical are:

INTELLIGENCE AGENTS (market understanding):
- `strategist.md` — builds the investigation plan and selects which agents to run
- `agents/market.md` — real market size, growth, and structure
- `agents/competitor.md` — what competitors actually do (not their marketing)
- `agents/funding.md` — where capital is moving in this space
- `agents/consumer.md` — verbatim customer language and pain points
- `agents/regulatory.md` — rules, risk, and upcoming regulatory changes
- `agents/hiring.md` — strategic signal from competitor job postings

EXECUTION AGENTS (turn intelligence into action):
- `agents/icp.md` — ideal customer profile definition, account scoring, and Tier 1 target identification
- `agents/signals.md` — buying signal detection: funding, hiring, tech stack, intent, and business events scored HOT/WARM/WATCH
- `agents/sequence.md` — converts ICP and signal findings into ready-to-send outreach sequences using the SPARK framework

OUTPUT:
- `mode.md` — shapes the final HTML intelligence report by decision type

Decision types supported:
  MARKET_ENTRY · COMPETITIVE_POSITIONING · BUDGET_ALLOCATION
  WHITESPACE · DIAGNOSTIC · ICP_BUILD · ACCOUNT_RESEARCH · OUTREACH

Note: The Strategist determines which agents are relevant per brief — not all nine always run. OUTREACH briefs route through ICP Agent → Signals Agent → Sequence Agent and produce ready-to-deploy sequences, not just a report.

QUALITY LAYER (what makes the output decision-grade):
- Adversarial Review — before synthesis, the strongest conclusions are
  attacked with disconfirming searches and marked HELD / WEAKENED / FAILED.
  The surviving claims appear in a visible "What We Tried to Disprove" section.
- Evidence Grading — every load-bearing claim and number carries an A/B/C
  grade by source strength, so you know what to bet on.
- Decision Memo — every report opens with a one-page, staked verdict an
  executive can act on without reading further.
These run automatically via the Orchestrator's Stage 3.5 and grading standard.

Before starting: confirm web search is available. If not, stop and tell the user — this skill does not function without real-time search.
