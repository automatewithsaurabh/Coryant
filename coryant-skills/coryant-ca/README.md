# Coryant CA Pack

Seven coordinated agents covering the advisory intelligence layer of CA practice — industry research, financial benchmarking, deal comparables, regulatory watch, audit risk assessment, valuation evidence, and client research — plus five everyday tools that don't need the full pipeline.

**What existing tools cover:** tax compliance calculations, bookkeeping, filing templates, VAT/GST rules. ([OpenAccountants](https://github.com/openaccountants/openaccountants), [openaccountant/skills](https://github.com/openaccountant/skills))

**What Coryant CA covers:** the advisory intelligence layer — what the CA needs to know before the meeting, during the audit, or to win and retain the client.

---

## What's Inside

```
coryant-ca/
├── README.md
├── ORCHESTRATOR.md              ← runs the full agent sequence
├── strategist.md                ← routes agents by CA work type
├── mode-advisory.md             ← internal CA intelligence report (HTML)
├── mode-client.md               ← client-facing document (plain English HTML)
├── brief-builder.md             ← guided 6-question brief builder
└── agents/
    ├── industry-intel.md        ← market structure, health, sector dynamics
    ├── financial-benchmark.md   ← peer margins, ratios, working capital norms
    ├── deal-intel.md            ← M&A multiples, deal structures, DD red flags
    ├── regulatory-watch.md      ← tax law changes, standards updates, deadlines
    ├── client-research.md       ← company profile, ownership, red flags
    ├── risk-signal.md           ← audit risk, going concern, fraud patterns
    ├── valuation-intel.md       ← market multiples, transaction comps, HMRC methodology
    └── client-brief.md          ← drafts advisory memos, emails, engagement letters
```

---

## CA Work Types

| Work Type | Agents Run | What You Get |
|---|---|---|
| **Client Intel** | Client Research + Industry Intel + Risk Signal | Company profile, ownership structure, financial health signals, red flags, industry position |
| **Industry Benchmark** | Financial Benchmark + Industry Intel | Peer margins, working capital norms, sector dynamics — calibrated to sub-sector and size band |
| **Deal Support** | Deal Intel + Valuation Intel + Industry Intel + Risk Signal | Deal multiples, transaction comparables, DD risk areas, deal structure norms, buyer landscape |
| **Regulatory Watch** | Regulatory Watch | Tax law changes, accounting standards updates, compliance deadlines, enforcement focus areas |
| **Audit Risk** | Risk Signal + Industry Intel + Financial Benchmark | Sector risk profile, going concern signals, fraud patterns, key audit focus areas |
| **Valuation Research** | Valuation Intel + Industry Intel + Financial Benchmark | Market multiples, transaction comps, private company adjustments, HMRC-defensible methodology |
| **Advisory Pitch** | Client Research + Industry Intel + Financial Benchmark + Risk Signal | Sector intelligence to demonstrate, identified opportunities, competitive context |

**Jurisdictions:** India (GST/ITR/Companies Act/ICAI) · UK (HMRC/Companies House/FRC/ICAEW) · Both

---

## Everyday Tools (No Pipeline Required)

| Command | What It Does |
|---|---|
| `/ca-brief` | Guided brief builder — 6 questions, assembles the brief, runs the pipeline |
| `/ca-email` | Draft a client email or advisory memo in plain English |
| `/engagement-letter` | Draft engagement letter: specific scope, clear exclusions, defined deliverables |
| `/meeting-prep` | Pre-meeting brief: objective, agenda, questions to ask, what to watch for |
| `/filing-deadlines` | Compliance deadline calendar — India or UK, next 6 months |

---

## Install: Claude Code

**Step 1 — Copy files**

```bash
cp -r coryant-ca ~/.claude/skills/
```

**Step 2 — Enable web search**

Required for the intelligence pipeline. Everyday tools work without it.

**Step 3 — Run**

Full pipeline:
```
/ca New audit client — precision engineering SME, £8M revenue, UK. Previous auditor resigned mid-year. Family-owned. I need audit risk profile for this sector and any red flags to look for before the initial meeting. DEEP.
```

Guided brief builder:
```
/ca-brief
```

Everyday tools:
```
/ca-email Write to Sharma Industries explaining that the GST annual return deadline is August 31 and we need their purchase register by August 10.
/filing-deadlines India, private limited company, turnover ₹18 crore
/meeting-prep New prospect — manufacturing client, first meeting next week. They've outgrown their current CA. Revenue around £5M.
```

---

## Install: Claude.ai Projects

1. Create a new Project
2. Upload all files from this folder
3. Set Project instructions:

```
When given a CA engagement brief, load and follow ORCHESTRATOR.md exactly.
Use strategist.md to identify the CA work type and select which agents run.
Use mode-advisory.md for internal CA reports. Use mode-client.md for client-facing documents.
Use web search for all factual claims — never use training data for market benchmarks, regulatory changes, company information, or deal multiples. Always search.
```

---

## Writing a Good Brief

Name the work type, the client's sector and size, and the specific question. Generic briefs produce generic output.

**Audit Risk:**
```
/ca New audit client — precision engineering, £8M revenue, UK, family-owned 30 years, 40% export to Germany and US. Previous auditor resigned mid-year — no reason given. Related party transactions with a sister company. What are the top audit risk areas for this sector and what should I probe in the initial meeting? DEEP.
```

**Deal Support:**
```
/ca Advising on sale of a £3M EBITDA UK recruitment business — permanent and contract, 60% contract revenue. Owner is 62 and wants full exit. What multiples are buyers paying, is a full cash exit realistic, and what DD issues typically kill deals in this sector? STANDARD.
```

**Valuation Research:**
```
/ca Business valuation for CGT purposes — UK software development consultancy, revenue £2.1M, EBITDA £420K, 8 employees, no single customer >20% of revenue. What multiple should I apply and what HMRC methodology is most defensible? DEEP.
```

**Regulatory Watch:**
```
/ca What do I need to tell my Indian SME clients about GST and income tax changes from the recent Finance Act? Need a client memo I can send. UK jurisdiction secondary.
```

**Client Intel:**
```
/ca Prospect meeting next week — Axis Logistics Ltd, logistics and warehousing, UK. I want to know: who owns them, is their financial position healthy, any red flags I should be aware of before taking them on. STANDARD.
```

---

## Why Coryant CA Is Different

Existing accounting skills (OpenAccountants 1,000+ skills, openaccountant/skills 44 skills) tell you *how to do* compliance work. They give you tax rates, filing checklists, and calculation templates.

Coryant CA tells you *what to know* before the work begins — the advisory intelligence layer:

- **What does this sector actually look like** — margins, risk profile, who's struggling, what regulators are watching
- **Is this client's financial position normal or a warning sign** — benchmarked against real comparators, not generic averages
- **What deal multiples are actually clearing right now** — not textbook theory, but what closed last quarter
- **What's changing in regulation** — not just what the rules say, but what HMRC is actively checking
- **What are the audit risks** — from real going concern cases and regulatory findings, not audit textbook checklists
- **What should this business be worth** — with a defensible methodology and actual comparable evidence

---

Coryant · coryant.xyz
