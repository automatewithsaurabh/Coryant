# Coryant Founder Pack

Eight coordinated agents covering the full founder decision stack — investor mapping, market sizing, PMF diagnosis, competitive intelligence, pivot analysis, board narrative prep, and executive hiring intelligence — plus four everyday tools that don't require the full pipeline.

Built by studying what's missing across the top GitHub skill repositories: gstack (97k stars) handles building. Coryant Founder handles the business decisions.

---

## What's Inside

```
coryant-founder/
├── README.md                          ← you are here
├── ORCHESTRATOR.md                    ← runs the full agent sequence
├── strategist.md                      ← builds the plan, routes by moment type
├── mode-fundraise.md                  ← investor-facing HTML report
├── mode-decision.md                   ← internal founder decision brief
├── brief-builder.md                   ← guided 6-question brief builder
└── agents/
    ├── investor.md                    ← VC fund mapping, thesis, warm intro paths
    ├── market-signal.md               ← real market sizing, category maturity, timing
    ├── competitor-intel.md            ← funding, momentum, threat assessment
    ├── customer-evidence.md           ← PMF signals, verbatim language, retention
    ├── talent-signal.md               ← what great looks like, comp benchmarks, eval framework
    ├── pmf-diagnostic.md              ← PMF verdict against category benchmarks
    ├── narrative.md                   ← investor narrative, pitch framing, pivot options
    └── investor-update.md             ← monthly investor update drafter
```

---

## Founder Moment Types

| Moment | Agents Run | What You Get |
|---|---|---|
| **Fundraise** | Investor + Market + Competitor + Customer + Narrative | Investor target list, pitch narrative, market sizing argument, fund-specific framing |
| **PMF Signal** | Customer + Market + PMF Diagnostic | Honest PMF verdict with benchmark comparison, specific bottleneck, next experiment |
| **Pivot** | Customer + Market + Competitor + PMF Diagnostic + Narrative | Structured pivot options with evidence for/against, 90-day test for each |
| **Competitive Threat** | Competitor + Market + Customer | Threat assessment, gap analysis, specific recommended response |
| **Board Prep** | Market + Competitor + Customer + Narrative | Board narrative, competitive update, anticipated pushback with responses |
| **Hire Intel** | Talent Signal | What great looks like for this role at this stage, eval framework, comp benchmarks, red flags |
| **Market Timing** | Market + Competitor | Category maturity verdict, capital flow signals, honest timing argument |

**Agents** — up to 8 · **Avg runtime** — 20–30 min (STANDARD) · 35–50 min (DEEP, FUNDRAISE, PIVOT)

---

## Everyday Tools (No Pipeline Required)

| Command | What It Does |
|---|---|
| `/investor-update` | Draft a complete monthly investor update — ready to send |
| `/term-sheet` | Analyze a term sheet clause by clause, flag non-standard terms, surface what matters |
| `/weekly-review` | 15-minute structured founder weekly review — surfaces what you're avoiding |
| `/office-hours` | YC-style forcing questions before a big decision |

---

## Install: Claude Code

**Step 1 — Copy files**

```bash
cp -r coryant-founder ~/.claude/skills/
```

`ORCHESTRATOR.md` is already inside the folder.

**Step 2 — Enable web search**

Required for the intelligence pipeline. Everyday tools (`/investor-update`, `/term-sheet`, `/weekly-review`, `/office-hours`) work without it.

**Step 3 — Run the pipeline or an everyday tool**

```
/founder We're raising a $5M Series A in Q3. ARR is $480K growing 20% MoM. We sell to VP RevOps at Series B SaaS companies. Need to know which funds to approach first and whether our market sizing holds up.
```

Or use the guided brief builder:
```
/founder-brief
```

Or run an everyday tool:
```
/investor-update ARR this month: $480K (+20% MoM). Shipped AI report generation. Pipeline: 3 enterprise deals, expected close Aug. Ask: intro to VP Ops at Figma.
```

---

## Install: Claude.ai Projects

**Step 1 — Create a Project**

**Step 2 — Upload all files**
Upload every file in this folder (including `ORCHESTRATOR.md`) into the Project's knowledge base.

**Step 3 — Set Project instructions**

```
When given a founder brief, load and follow ORCHESTRATOR.md exactly.
Use strategist.md to identify the founder moment type and select which agents run.
Use agents/ from the Coryant Founder pack. Use mode-fundraise.md for FUNDRAISE and BOARD_PREP moments. Use mode-decision.md for PMF, PIVOT, COMPETITIVE_THREAT, HIRE_INTEL, and MARKET_TIMING moments.
Use web search for every factual claim. Do not use memory for market data, investor information, or competitive intelligence — always search.
```

---

## Writing a Good Brief

Name the moment type, your stage, your metrics, and the specific decision. The agents search for what's specific to your situation — a generic brief produces generic output.

**Fundraise:**
```
/founder We're raising a $6M Series A. ARR $480K, 20% MoM, 90% annual retention. ICP: VP RevOps at 50–500 person B2B SaaS. UK-based, selling globally. Competitors: Crayon, Klue. Main question: which funds are genuinely thesis-aligned vs. category-adjacent, and is our market sizing defensible?
```

**PMF Signal:**
```
/founder We have 85 paying customers, 92% annual retention, NPS 58. But organic referrals are low and sales cycle is getting longer. Is this PMF or early-adopter enthusiasm? What is the bottleneck?
```

**Pivot:**
```
/founder We built for SMB marketing teams but our best customers are RevOps leads at Series B companies. Usage data shows 3× engagement from the RevOps segment. Should we pivot ICP? What does the evidence say?
```

**Competitive Threat:**
```
/founder Our main competitor just raised a $40M Series B and announced they're moving into our primary ICP. How dangerous is this, and what should we do in the next 90 days?
```

**Hire Intel:**
```
/founder We're hiring our first VP Sales. Series A, ARR $480K, PLG-assisted motion. What does great look like for this role at this stage, what should we pay, and what questions reveal who can actually build vs. who just closes?
```

---

## Troubleshooting

**Output is generic** — web search was likely off, or the brief lacked specifics. Enable search and name the company, metrics, and the specific decision.

**Investor list is wrong tier** — add your round size and current valuation to the brief. The Investor Agent needs this to filter by check size fit.

**PMF verdict feels wrong** — add more detail about your retention data, cohort behavior, or specific customer feedback. The PMF Diagnostic works from what you give it.

**Runtime longer than expected** — DEEP mode with 6+ agents takes 35–50 min. STANDARD is 20–30 min. Everyday tools are 2–5 min.

---

Coryant · coryant.xyz
