# Coryant PM Pack

Four coordinated research agents that investigate user signal, competitive
feature movement, market timing, and stakeholder context — then produce either
an internal roadmap argument or an external positioning document from the same
research, depending on your audience.

---

## What's inside

```
coryant-pm/
├── README.md                      ← you are here
├── ORCHESTRATOR.md                ← runs the full agent sequence
├── strategist.md                  ← builds the plan, sets audience type
├── mode-internal.md               ← shapes output for internal docs
├── mode-external.md               ← shapes output for external docs
└── agents/
    ├── user-signal.md             ← real user pain, requests, churn signal
    ├── competitor-feature.md      ← what competitors have shipped / are building
    ├── market-timing.md           ← early, on-time, or late to this problem
    └── stakeholder-context.md     ← internal persuasion OR external narrative
```

The Strategist reads your brief and determines audience type (INTERNAL or
EXTERNAL). All four agents run on the same research — only the output mode
changes.

**Output modes:**

| Mode | Audience | What you get |
|------|----------|-------------|
| Internal | Engineering / VP / board | Roadmap argument, prioritisation justification, buy-in doc |
| External | Market / press / customers | Positioning doc, launch narrative, competitive differentiation |

**Agents** — 4 · **Avg runtime** — 12–20 min

---

## Install: Claude Code

**Step 1 — Copy files**

```bash
cp -r coryant-pm ~/.claude/skills/
```

`ORCHESTRATOR.md` is already inside the folder.

**Step 2 — Enable web search**

Web search is required. The agents will not produce reliable output without
live search access. Enable it in Claude Code before starting.

**Step 3 — Give your brief**

State your audience type clearly — the Strategist uses it to select the
right mode file.

```
Run Coryant PM on this brief: [your brief here]
```

Claude loads the orchestrator, the Strategist determines INTERNAL or EXTERNAL,
the four agents run with live search, then the correct mode file shapes output.

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
Use strategist.md and the four agent files in agents/ from the
Coryant PM pack. The Strategist determines AUDIENCE TYPE:
use mode-internal.md for INTERNAL, mode-external.md for EXTERNAL.
Use web search for every factual claim. Do not summarise from
memory — always search.
```

**Step 4 — Start a chat with your brief**

Open a new chat inside the Project and give your brief.

---

## Writing a good brief

Always state whether you need an internal or external output. Name the
feature, the product area, and the specific decision or moment you're facing.

**Internal — roadmap buy-in:**
```
Run Coryant PM on this brief: I need to win buy-in from our VP Product for
prioritising [feature] next quarter. The pushback I expect is that we don't
have clear evidence users need this versus just requesting it loudly. I need
an internal argument, not a launch doc.
```

**Internal — deprioritisation:**
```
Run Coryant PM on this brief: I need to justify deprioritising our
[feature area] to the engineering team. The team built it but engagement
is low. I need to make an evidence-based case that our roadmap should shift
to [new area] instead, without it feeling like the work was wasted.
```

**External — launch positioning:**
```
Run Coryant PM on this brief: We're launching [feature] in 6 weeks and I
need to know how to position it against [competitor] who shipped something
similar 3 months ago. What language will actually resonate versus sound like
everyone else's launch announcement.
```

**External — competitive differentiation:**
```
Run Coryant PM on this brief: We're refreshing our product positioning for
[feature area]. Our main competitor is [name]. I need to know what they
actually own perceptually, what gaps customers find in their approach, and
what framing is genuinely available for us to claim.
```

---

## Tips

**State the audience explicitly.** If your brief is ambiguous, the Strategist
will guess. "I need an internal doc" or "this is for an external audience" is
all it needs.

**Name the feature and the competitor.** Generic briefs produce generic output.
The agents work from named companies, named features, and named competitors.

**You can run both modes.** Give two briefs — one with internal framing, one
with external — on the same feature. You'll get both documents from the same
underlying research.

---

## Troubleshooting

**Got internal output when you wanted external (or vice versa)** — add "for
an external audience" or "for internal stakeholders" to your brief explicitly.

**Output is shallow on competitors** — web search was likely off, or the
competitor you named is too obscure. Add more context about the competitor
in your brief.

**Stakeholder-context agent skipped internal half** — correct. The agent runs
the relevant half only. If you want both, run two separate briefs.

---

Coryant · coryant.xyz
