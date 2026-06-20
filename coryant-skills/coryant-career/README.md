# Coryant Career Pack

Four coordinated research agents that investigate a role, company, and competitive
landscape — then produce exactly the document your moment requires.

---

## What's inside

```
coryant-career/
├── README.md                       ← you are here
├── ORCHESTRATOR.md                 ← runs the full agent sequence
├── strategist.md                   ← builds the investigation plan
├── mode.md                         ← shapes output by moment type
└── agents/
    ├── company-role.md             ← what the company/role actually is
    ├── competitor-of-candidate.md  ← the realistic competitive bar
    ├── culture-signal.md           ← what it's actually like to work there
    └── compensation.md             ← realistic pay benchmarking
```

**Output modes** — tell the pack which moment you're in and it produces the right document:

| Mode | What you get |
|------|-------------|
| Application | Sharp cover letter / written application material |
| Interview prep | What this interviewer is trying to learn, and how to show it |
| Negotiation | A real number range and a script starting-point |
| Decision | An honest read on whether the evidence supports pursuing this role |

**Agents** — 4 · **Avg runtime** — 10–20 min

---

## Install: Claude Code

**Step 1 — Copy files**

Open your terminal and run:

```bash
cp -r coryant-career ~/.claude/skills/
```

That's it. `ORCHESTRATOR.md` is already inside the folder.

**Step 2 — Enable web search**

This pack requires real-time web search. In Claude Code, make sure web search
is enabled before starting a session. The agents will not produce reliable
output without it.

**Step 3 — Give your brief**

Start a Claude Code session and paste:

```
Run Coryant Career on this brief: [your brief here]
```

Claude will load the orchestrator, run the strategist, then run each agent in
sequence using live web search, then synthesize.

---

## Install: Claude.ai Projects

**Step 1 — Create a Project**

Go to Claude.ai → Projects → New Project.

**Step 2 — Upload all files**

Upload every file in this folder (including `ORCHESTRATOR.md`) into the
Project's knowledge base.

**Step 3 — Set Project instructions**

In the Project settings, paste this as the system instruction:

```
When given a brief, load and follow ORCHESTRATOR.md exactly.
Use strategist.md, the four agent files in agents/, and mode.md
from the Coryant Career pack. Use web search for every factual claim.
Do not summarise from memory — always search.
```

**Step 4 — Start a chat with your brief**

Open a new chat inside the Project and give your brief as shown below.

---

## Writing a good brief

The more specific your brief, the sharper the output. Name the company, the
role, your own background, and exactly what moment you're preparing for.

**Application:**
```
Run Coryant Career on this brief: I'm applying for a Senior Product Manager
role at Stripe, reporting to the Head of Growth Products. I have 5 years of
B2B SaaS PM experience, most recently at a Series B fintech. I need sharp
written application material.
```

**Interview prep:**
```
Run Coryant Career on this brief: I'm interviewing next week for a Staff
Engineer role at Figma. I want to walk in already understanding their actual
engineering priorities, the team's current challenges, and what a strong
candidate demonstrates — not just what the job posting says.
```

**Negotiation:**
```
Run Coryant Career on this brief: I have an offer from Notion for a Senior
Designer role at $155k base. I have 7 years of experience, two of which are
in product design at a public company. I want a realistic number to counter
with and a framing that doesn't feel aggressive.
```

**Decision:**
```
Run Coryant Career on this brief: I have offers from two companies — a
Series A startup and a large enterprise. I want an honest read on both:
realistic trajectory, culture signals from real sources, and whether the
equity story holds up.
```

---

## Troubleshooting

**Output is generic or brief** — web search was likely off. Enable it and re-run.

**Claude skipped an agent** — give a more specific brief. The Strategist routes
agents based on what your brief actually needs.

**Runtime longer than expected** — DEEP mode runs take 25–40 min. If you didn't
specify a depth in your brief, the Strategist defaults to STANDARD (10–20 min).

---

Coryant · coryant.xyz
