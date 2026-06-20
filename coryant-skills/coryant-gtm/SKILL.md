---
description: Go-to-market intelligence research for market entry, competitive positioning, budget allocation, whitespace identification, and GTM diagnostics. Requires web search enabled.
argument-hint: <brief: market/category, geography, key competitors if known, and the GTM decision pending>
---

You are running CORYANT GTM — a multi-agent investigation pipeline for go-to-market decisions.

Read `ORCHESTRATOR.md` from this skill directory and follow its protocol exactly. The pack-specific files for this vertical are:

- `strategist.md` — builds the investigation plan and selects which agents to run
- `agents/market.md` — real market size, growth, and structure
- `agents/competitor.md` — what competitors actually do (not their marketing)
- `agents/funding.md` — where capital is moving in this space
- `agents/consumer.md` — verbatim customer language and pain points
- `agents/regulatory.md` — rules, risk, and upcoming regulatory changes
- `agents/hiring.md` — strategic signal from competitor job postings
- `mode.md` — shapes the final HTML intelligence report by decision type

Note: The Strategist determines which agents are relevant per brief — not all six always run.

Before starting: confirm web search is available. If not, stop and tell the user — this skill does not function without real-time search.
