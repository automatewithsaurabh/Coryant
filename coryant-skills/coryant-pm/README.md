# Coryant PM Pack

Seven coordinated agents that cover the full PM workflow — from opportunity
discovery and feature prioritization through metrics definition and launch
positioning — then shape findings into a decision-ready output or a
structured artifact (OKR doc, scored backlog, opportunity map, PRD input).

---

## What's inside

```
coryant-pm/
├── README.md                      ← you are here
├── ORCHESTRATOR.md                ← runs the full agent sequence
├── strategist.md                  ← builds the plan, identifies decision type
├── mode-internal.md               ← shapes output for internal docs
├── mode-external.md               ← shapes output for external docs
└── agents/
    ├── user-signal.md             ← real user pain, requests, churn signal
    ├── competitor-feature.md      ← what competitors have shipped / are building
    ├── market-timing.md           ← early, on-time, or late to this problem
    ├── stakeholder-context.md     ← internal persuasion OR external narrative
    ├── discovery.md               ← Opportunity Solution Trees, JTBD, assumption mapping
    ├── prioritization.md          ← RICE / ICE / Kano / Opportunity scoring
    └── metrics.md                 ← North Star, OKRs, leading indicators, guardrails
```

The Strategist reads your brief, identifies the DECISION TYPE, and selects only the
agents relevant to that decision — not all seven always run.

**Decision types and what you get:**

| Decision Type | Agents Run | What you get |
|---|---|---|
| Roadmap Justify | User Signal + Competitor + Timing + Stakeholder | Internal buy-in doc with evidence |
| Launch Position | User Signal + Competitor + Timing + Stakeholder | External positioning + language to use |
| Prioritize | User Signal + Competitor + Prioritization | Scored, ranked backlog with reasoning |
| Metrics Definition | User Signal + Metrics | North Star, OKRs, guardrails, anti-metrics |
| Discovery | User Signal + Discovery + Timing | OST map, JTBD analysis, assumption experiment plan |
| Competitive Response | Competitor + User Signal + Timing + Stakeholder | What to do about a competitor's move |
| PRD Prep | User Signal + Competitor + Discovery + Metrics | Structured research input ready for spec writing |

**Agents** — up to 7 · **Avg runtime** — 12–20 min (research modes) · 15–25 min (PRD Prep / Discovery)

---

## Install: Claude Code

**Step 1 — Copy files**

```bash
cp -r coryant-pm ~/.claude/skills/
```

`ORCHESTRATOR.md` is already inside the folder.

**Step 2 — Enable web search**

Web search is required. Enable it in Claude Code before starting.

**Step 3 — Give your brief**

State the decision type or describe the situation — the Strategist determines
which agents to run.

```
Run Coryant PM on this brief: [your brief here]
```

---

## Install: Claude.ai Projects

**Step 1 — Create a Project**

Go to Claude.ai → Projects → New Project.

**Step 2 — Upload all files**

Upload every file in this folder (including `ORCHESTRATOR.md`) into the
Project's knowledge base.

**Step 3 — Set Project instructions**

```
When given a brief, load and follow ORCHESTRATOR.md exactly.
Use strategist.md and the agent files in agents/ from the Coryant PM pack.
The Strategist identifies the DECISION TYPE and selects which agents run.
Use mode-internal.md for INTERNAL audience types and mode-external.md
for EXTERNAL. Use web search for every factual claim.
```

**Step 4 — Start a chat with your brief**

---

## Writing a good brief

Name the product area, the specific decision, and the audience. The more
concrete the brief, the sharper the output.

**Roadmap buy-in:**
```
Run Coryant PM on this brief: I need to win buy-in from our VP Product for
prioritising [feature] next quarter. The pushback I expect is that we don't
have clear evidence users need this. I need an internal argument.
```

**Feature prioritization:**
```
Run Coryant PM on this brief: I need to prioritize these 6 features for Q3:
[list them]. Score them using RICE and rank them. The key metric we're
optimising for is [metric].
```

**Metrics definition:**
```
Run Coryant PM on this brief: We're building a [feature]. Help me define
the North Star metric, success OKRs, and the guardrail metrics we should
watch to make sure we're not optimising the wrong thing.
```

**Discovery:**
```
Run Coryant PM on this brief: Before we commit to building [feature area],
I want to map the opportunity space properly — what problems users actually
have, the jobs they're trying to do, and which assumptions we need to test
first. DISCOVERY mode.
```

**PRD prep:**
```
Run Coryant PM on this brief: I'm writing a PRD for [feature]. Help me
gather everything I need: user pain, competitive context, timing, success
metrics, and the open questions I need to answer before spec-ing it out.
```

**Launch positioning:**
```
Run Coryant PM on this brief: We're launching [feature] in 6 weeks and
need to know how to position it against [competitor]. What language
actually resonates versus sounds like every other launch.
```

**Competitive response:**
```
Run Coryant PM on this brief: [Competitor] just shipped [feature]. We have
something similar in progress. Tell me what they've built, how users are
reacting, and what we should do — accelerate, differentiate, or hold.
```

---

## Troubleshooting

**Got the wrong output format** — add the decision type explicitly ("this is
for DISCOVERY" or "I need METRICS_DEFINITION") if the brief is ambiguous.

**Prioritization scores feel arbitrary** — this means the brief didn't include
a feature list or the user signal data was thin. Provide the feature names
explicitly and describe what each is trying to achieve.

**Metrics output doesn't match the product stage** — add context about product
stage (pre-launch, post-launch, scaling) and what data currently exists.
The Metrics Agent adjusts its recommendations based on measurement readiness.

---

Coryant · coryant.xyz
