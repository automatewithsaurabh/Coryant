# Coryant Career Pack

Six coordinated agents that cover the full job search lifecycle — from company
intelligence and competitive bar research through resume tailoring, story
coaching, interview prep, and salary negotiation — then produce the exact
document your moment requires.

---

## What's inside

```
coryant-career/
├── README.md                          ← you are here
├── ORCHESTRATOR.md                    ← runs the full agent sequence
├── strategist.md                      ← builds the plan, routes agents by moment type
├── mode.md                            ← shapes output by moment type
└── agents/
    ├── company-role.md                ← what the company/role actually is
    ├── competitor-of-candidate.md     ← the realistic competitive bar
    ├── culture-signal.md              ← what it's actually like to work there
    ├── compensation.md                ← realistic pay benchmarking
    ├── storybank.md                   ← STAR+Reflection structuring, 5-dimension story scoring, fit mapping
    └── application-materials.md      ← ATS keywords, resume bullets, cover letter, LinkedIn outreach
```

**Moment types — tell the pack which moment you're in:**

| Moment Type | Agents Run | What you get |
|---|---|---|
| Application | Company + Competitor + Culture + App Materials | Research + tailored cover letter + application angles |
| Interview Prep | Company + Competitor + Culture + Storybank | Research brief + story evaluation + what the interviewer is testing |
| Negotiation | Company + Compensation + Culture | Leverage points + real number range + specific scripts |
| Decision | Company + Competitor + Culture + Compensation | Honest go/no-go read on the opportunity |
| Resume Tailor | Company + Competitor + App Materials | ATS keywords + bullet rewrites + positioning statement + full cover letter |
| Story Build | Company + Storybank | STAR+Reflection for each story + 5-dimension scores + question fit map |
| Full Prep | All six agents | Complete package: materials + stories + prep + negotiation baseline |

**Agents** — up to 6 · **Avg runtime** — 10–20 min (focused modes) · 25–40 min (Full Prep)

---

## Install: Claude Code

**Step 1 — Copy files**

```bash
cp -r coryant-career ~/.claude/skills/
```

`ORCHESTRATOR.md` is already inside the folder.

**Step 2 — Enable web search**

This pack requires real-time web search. Enable it in Claude Code before starting.

**Step 3 — Give your brief**

```
Run Coryant Career on this brief: [your brief here]
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
Use strategist.md, the six agent files in agents/, and mode.md
from the Coryant Career pack. Use web search for every factual claim.
Do not summarise from memory — always search.
```

**Step 4 — Start a chat with your brief**

---

## Writing a good brief

Name the company, role, your background, and the moment type. The more
specific you are, the sharper the output — especially for Story Build
(include your actual stories) and Resume Tailor (include your current bullets).

**Application:**
```
Run Coryant Career on this brief: I'm applying for a Senior Product Manager
role at Stripe, reporting to the Head of Growth Products. I have 5 years of
B2B SaaS PM experience, most recently at a Series B fintech. I need sharp
application material.
```

**Resume Tailor:**
```
Run Coryant Career on this brief: I'm applying for a Head of Revenue Operations
role at Linear. Here are my current resume bullets: [paste bullets]. Tailor
them to the JD, optimize for ATS, and write a cover letter.
```

**Story Build:**
```
Run Coryant Career on this brief: I'm interviewing for an Engineering Manager
role at Figma next week. Here are 3 stories from my background: [describe
them briefly]. Evaluate them using STAR+Reflection, score them, and tell me
which questions they answer and where my gaps are.
```

**Interview Prep:**
```
Run Coryant Career on this brief: I'm interviewing next week for a Staff
Engineer role at Figma. I want to walk in already understanding their actual
engineering priorities and what a strong candidate demonstrates — not just
what the job posting says.
```

**Negotiation:**
```
Run Coryant Career on this brief: I have an offer from Notion for a Senior
Designer role at $155k base. I have 7 years of experience, two at a public
company. I want a realistic counter and a framing that doesn't feel aggressive.
```

**Decision:**
```
Run Coryant Career on this brief: I have offers from a Series A startup and
a large enterprise. Give me an honest read on both — trajectory, culture
signals, and whether the equity story holds up.
```

**Full Prep:**
```
Run Coryant Career on this brief: I have a final-round interview at Notion
for Head of Product in two weeks. Here's my background: [summary]. Here are
my stories: [3–5 stories]. Give me the full package — tailored materials,
story coaching, interview prep, and a comp baseline.
```

---

## Troubleshooting

**Output is generic** — web search was likely off, or brief lacked specifics.
Enable search and name the company, role, and your background explicitly.

**Story scores feel off** — add more detail to your stories in the brief.
The Storybank Agent can only evaluate what you give it.

**Resume bullets didn't improve** — paste your actual bullets in the brief.
Without them, the agent produces templates, not rewrites.

**Runtime longer than expected** — Full Prep takes 25–40 min. Focused modes
(single moment type) run in 10–20 min.

---

Coryant · coryant.xyz
