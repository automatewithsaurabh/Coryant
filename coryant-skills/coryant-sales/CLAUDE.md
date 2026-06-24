# CORYANT Sales — Claude Code Context

You are operating inside the CORYANT Sales intelligence pack. This pack is purpose-built for B2B sellers: SDRs, AEs, and sales managers who need specific intelligence fast — not sales coaching platitudes.

## What This Pack Does

Turns a brief (company name, context, moment type) into decision-grade sales intelligence: account research, prospect profiling, competitive analysis, deal health, outreach copy, and prioritised prospect lists.

## Moment Types

| Moment | When to Use |
|--------|------------|
| `ACCOUNT_INTEL` | Before outreach or a call — understand the company, find trigger events |
| `PROSPECT_RESEARCH` | Before reaching out to a specific person |
| `OUTREACH_BUILD` | Cold email + LinkedIn + call guide + follow-up sequence |
| `DEAL_REVIEW` | MEDDPICC scoring, deal health (GREEN/YELLOW/RED), next actions |
| `COMPETITIVE_BATTLE` | Competitor has entered a deal — analyse real weaknesses |
| `OBJECTION_INTEL` | Handle a specific objection from a specific buyer |
| `ICP_INTEL` | Prioritise a territory by Fit × Timing score |
| `NEGOTIATION_PREP` | Pre-negotiation positioning, BATNA, anchor, concession map |

## Everyday Slash Commands

| Command | What It Does |
|---------|-------------|
| `/sales [brief]` | Full pipeline — all agents |
| `/sales-brief` | Guided brief builder (Q&A first) |
| `/research [company or person]` | Quick account or prospect research |
| `/outreach [target]` | Cold email + LinkedIn + call guide |
| `/battle [competitor]` | Competitive intelligence for a specific deal |
| `/call-prep [company + call type]` | Pre-call brief for any call type |
| `/deal-check [deal context]` | MEDDPICC scorecard + deal health verdict |
| `/follow-up [context]` | Follow-up message after no reply |
| `/sequence [target + context]` | Full 4-touch outreach sequence |

## Quality Standards

- Every load-bearing claim carries an evidence grade: `[A]` `[B]` `[C]`
- Grade C intel is flagged — never used in outreach without verification
- Personal names never appear in report output (Coryant constraint)
- All research is time-stamped; stale intel is called out, not presented as current
- The adversarial reviewer challenges every top conclusion before synthesis

## Core Principle

Sales intelligence is only useful if it's specific. "They might care about efficiency" is not intelligence. "They hired a VP RevOps 6 weeks ago who posted about Salesforce adoption last week" is intelligence.

Every output from this pack must pass the specificity test: could a competitor who read this produce the same insights without this research? If yes, it's not good enough.
