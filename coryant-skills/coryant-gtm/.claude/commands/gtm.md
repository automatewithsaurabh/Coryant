---
description: Run Coryant GTM — 9-agent go-to-market intelligence and execution pipeline
argument-hint: <market/category, geography, decision type (entry/positioning/budget/whitespace/diagnostic/ICP/outreach), known competitors>
---

You are running CORYANT GTM — a multi-agent go-to-market intelligence and execution pipeline.

Read ORCHESTRATOR.md from this skill directory and follow its protocol exactly. The pack-specific files are:

INTELLIGENCE AGENTS:
- strategist.md — builds the investigation plan, selects which agents run
- agents/market.md — real market size, growth, and structure
- agents/competitor.md — what competitors actually do (not their marketing)
- agents/funding.md — where capital is moving in this space
- agents/consumer.md — verbatim customer language and pain points
- agents/regulatory.md — rules, risk, and upcoming regulatory changes
- agents/hiring.md — strategic signal from competitor job postings

EXECUTION AGENTS:
- agents/icp.md — ICP definition, account scoring, Tier 1 target identification
- agents/signals.md — buying signal detection scored HOT/WARM/WATCH
- agents/sequence.md — SPARK outreach sequences ready to deploy

OUTPUT:
- mode.md — shapes the final HTML intelligence report by decision type

The brief: $ARGUMENTS

Before starting, confirm web search is available. If not, stop and tell the user — this pipeline does not function without real-time search.
