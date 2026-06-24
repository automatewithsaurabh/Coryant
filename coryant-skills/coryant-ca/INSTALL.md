# CORYANT CA — Install

CORYANT CA gives Chartered Accountants a 7-agent intelligence team for the advisory layer of practice: what to know before the client meeting, how to plan an audit, how to advise on a deal, and how to keep clients informed of regulatory changes.

## What's In This Pack

```
coryant-ca/
  SKILL.md                       — defines the /ca slash command
  CLAUDE.md                      — auto-loaded context for Claude Code
  strategist.md                  — routes agents by CA work type
  mode-advisory.md               — internal CA intelligence report
  mode-client.md                 — client-facing document
  brief-builder.md               — guided 6-question brief builder
  agents/
    industry-intel.md            — sector dynamics, regulatory environment, stress signals
    financial-benchmark.md       — peer margins, ratios, working capital norms
    deal-intel.md                — M&A multiples, deal structures, due diligence risk areas
    regulatory-watch.md          — tax law changes, standards updates, compliance deadlines
    client-research.md           — company profile, ownership, red flags
    risk-signal.md               — audit risk, going concern, fraud patterns
    valuation-intel.md           — market multiples, transaction comps, HMRC methodology
    client-brief.md              — advisory memos, emails, engagement letters
```

## Install — Claude Code

```bash
cp -r coryant-ca ~/.claude/skills/
```

Enable web search for the intelligence pipeline. Everyday tools (`/ca-email`, `/engagement-letter`, `/meeting-prep`, `/filing-deadlines`) work without it.

Run with a brief:
```
/ca [engagement brief]
```

Or use the guided brief builder:
```
/ca-brief
```

## Install — Claude.ai Projects

1. Create a new Project
2. Upload all files from this folder
3. Set Project instructions:

```
When given a CA engagement brief, load and follow ORCHESTRATOR.md exactly.
Use strategist.md to identify the CA work type and route to the right agents.
Use mode-advisory.md for internal CA reports. Use mode-client.md for client-facing documents.
Use web search for all factual claims. Never use training data for market benchmarks, regulatory updates, company information, or deal multiples.
```
