# CORYANT Sales

**Sales intelligence for SDRs, AEs, and sales managers who need specific research fast — not generic sales advice.**

Most sales research takes 45 minutes per account and produces generic bullet points. This pack produces evidence-graded intelligence, personalised outreach, deal health assessments, and competitive analysis in minutes.

---

## What It Does

| Moment | What You Get |
|--------|-------------|
| Account Intelligence | Trigger events, org structure, "Why Now" synthesis, outreach angle |
| Prospect Research | Role/mandate, career signals, LinkedIn activity, receptivity rating, opening line |
| Outreach Build | Cold email + LinkedIn message + call guide + 3-touch follow-up sequence |
| Deal Review | Full MEDDPICC scorecard, deal health verdict, stall diagnosis, 3 next actions |
| Competitive Battle | Real vs perceived weaknesses, FUD counter-responses, champion-ready one-pager |
| Objection Intel | Objection classification (Real/Smokescreen/Tactic/Stall), specific response path |
| ICP Prioritisation | Fit × Timing scoring matrix, Tier 1–4 list, whitespace analysis |
| Negotiation Prep | Position map, BATNA, anchor strategy, concession hierarchy |

---

## Slash Commands

```bash
/sales [brief]          # Full pipeline — all agents for any moment type
/sales-brief            # Guided 6-question brief builder
/research [target]      # Quick account or prospect research
/outreach [target]      # Personalised cold email + LinkedIn + call guide
/battle [competitor]    # Competitive battle card for a specific deal
/call-prep [context]    # Pre-call brief for any call type
/deal-check [context]   # MEDDPICC scorecard + deal health verdict
/follow-up [context]    # Follow-up message after no reply
/sequence [target]      # Full 4-touch outreach sequence
```

---

## Quick Start

**Cold outreach to a specific target:**
```
/outreach Sarah Chen, VP RevOps at Acme Corp. We sell sales engagement software. They just raised a Series B and hired 3 new AEs last month.
```

**Full account research before a discovery call:**
```
/research TechCorp — SaaS company, 200 employees, Series B. We're calling them on Thursday for a discovery call.
```

**Deal health check:**
```
/deal-check Acme deal — $80K ACV, 4 months in. Champion is their VP Sales. Haven't met the CFO yet. Competitor is Outreach. Expected close end of Q2.
```

**Competitive battle card:**
```
/battle Salesforce is in this deal at TechCorp. They've had a relationship there for years. We're a startup CRM.
```

**Full pipeline with brief builder:**
```
/sales-brief
```

---

## Intelligence Quality

Every output from this pack follows the Coryant quality standard:

- **Evidence grades on every claim**: `[A]` primary/verified · `[B]` single source · `[C]` inferred
- **Grade C intel flagged** — never used in outreach automatically; marked for seller verification
- **Adversarial review** — top conclusions challenged before synthesis (Stage 3.5)
- **Time-stamped research** — stale intel is called out, not presented as current
- **Specificity standard** — intelligence only counts if a competitor couldn't produce the same insights without doing the research

---

## Depth Levels

| Level | What It Does | When to Use |
|-------|-------------|-------------|
| `SURFACE` | Key signals, fastest output | High-volume prospecting, quick territory scan |
| `STANDARD` | Full research with evidence grading | Active pipeline, before any real call |
| `DEEP` | Maximum depth, all agents, adversarial review | Strategic deals, competitive evaluations |

---

## Output Formats

| Format | What You Get |
|--------|-------------|
| `INTEL` | Full HTML intelligence report — all sections |
| `OUTREACH` | Outreach pack — email + LinkedIn + call guide + sequence |
| `BRIEF` | Plain text, fast to read pre-call |
| `BOTH` | Intelligence report + outreach pack |

---

## Example: Full Sales Brief

```
I sell a revenue intelligence platform (think Gong alternative).
My ICP is VP Sales or CRO at B2B SaaS companies, 100-500 employees, Series B/C.

Moment: ACCOUNT_INTEL

Target: Notion — they just hired a new CRO 2 months ago and are expanding their sales team.

Context: Never contacted. No prior relationship.

Questions:
- What's the trigger that makes this the right time to reach out?
- Who specifically should I target first?
- What angle should I lead with?

Depth: STANDARD
Format: BOTH
```

---

## Install

See [INSTALL.md](INSTALL.md).

---

*Built by [Coryant](https://coryant.xyz) — intelligence packs for professionals who need better research, faster.*
