# Coryant GTM Pack

Nine coordinated agents that map a market from every angle — size,
competition, capital flow, customer language, regulatory risk, hiring
signal, ICP scoring, buying signals, and outreach sequences — then
shape findings into a decision-ready output or ready-to-deploy campaigns.

---

## What's inside

```
coryant-gtm/
├── README.md                  ← you are here
├── ORCHESTRATOR.md            ← runs the full agent sequence
├── strategist.md              ← builds the plan, decides which agents run
├── mode.md                    ← shapes output by decision type
└── agents/
    ├── market.md              ← real market size, growth rate, structure
    ├── competitor.md          ← what competitors actually do and don't do
    ├── funding.md             ← where capital is moving and why
    ├── consumer.md            ← verbatim customer language and pain points
    ├── regulatory.md          ← rules, risk, and upcoming changes
    ├── hiring.md              ← strategic signal from job postings
    ├── icp.md                 ← ICP definition, account scoring, Tier 1 targets
    ├── signals.md             ← buying signal detection scored HOT/WARM/WATCH
    └── sequence.md            ← SPARK outreach sequences ready to deploy
```

The Strategist decides which agents are relevant per brief — not all nine
always run. A narrow competitive question may only need two or three agents.
An OUTREACH brief routes through ICP → Signals → Sequence only.

**Output modes** — tell the pack your decision type:

| Mode | What you get |
|------|-------------|
| Entry | Is this market worth entering, and how |
| Positioning | Where to stand relative to competitors |
| Budget | Where to allocate spend across segments |
| Whitespace | Underserved gaps competitors haven't claimed |
| Diagnostic | Why current GTM is or isn't working |
| ICP Build | Who to target, how to score accounts, Tier 1 target list |
| Account Research | Deep intelligence on one specific target account |
| Outreach | Ready-to-send email/LinkedIn sequences anchored to live signals |

**Agents** — up to 9 · **Avg runtime** — 15–25 min (intelligence modes) · 10–20 min (OUTREACH mode)

---

## Install: Claude Code

**Step 1 — Copy files**

```bash
cp -r coryant-gtm ~/.claude/skills/
```

`ORCHESTRATOR.md` is already inside the folder.

**Step 2 — Enable web search**

This pack requires real-time web search. The agents will not produce reliable
output without live search access. Enable it in Claude Code before starting.

**Step 3 — Give your brief**

```
Run Coryant GTM on this brief: [your brief here]
```

Claude loads the orchestrator, the Strategist reads your brief and plans the
run, then relevant agents execute with live web search, then synthesis.

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
Use strategist.md, the relevant agent files in agents/, and mode.md
from the Coryant GTM pack. The Strategist determines which agents
are needed — not all six always run. Use web search for every
factual claim. Do not summarise from memory — always search.
```

**Step 4 — Start a chat with your brief**

Open a new chat inside the Project and give your brief.

---

## Writing a good brief

Name the market, geography, decision pending, and any competitors you already
know about. Vague briefs produce generic output.

**Market entry:**
```
Run Coryant GTM on this brief: We're a B2B SaaS company considering entering
the Indian market for project management software in 2025. Our core question
is whether the market is genuinely growing or whether the growth narrative is
ahead of real demand — and who we'd actually be competing with if we entered.
```

**Competitive positioning:**
```
Run Coryant GTM on this brief: We're repositioning our product against Linear
and Notion in the mid-market. We need to know what each actually owns
perceptually, what language customers use when they're unhappy with them,
and what positioning is genuinely open versus already claimed.
```

**Budget allocation:**
```
Run Coryant GTM on this brief: We have $2M in GTM budget for next year across
three segments — enterprise, mid-market, and SMB. We need to know where the
actual demand growth is, where competitors are investing, and which segment
has the most open space.
```

**Whitespace:**
```
Run Coryant GTM on this brief: We're in the HR tech space, specifically in
performance management. We want to know what problems are consistently
unaddressed — things buyers complain about that current tools don't solve,
and that competitors haven't claimed in their positioning.
```

**Diagnostic:**
```
Run Coryant GTM on this brief: Our pipeline conversion has dropped 30% in
six months. We've ruled out product issues. We want to understand what's
changed in the competitive landscape, whether our ICP has shifted, and
whether our current positioning still fits the market.
```

**ICP Build:**
```
Run Coryant GTM on this brief: We sell workflow automation to B2B SaaS
companies. We want to know who our actual ideal customer is — which
firmographic profile converts fastest, what buying triggers precede a
purchase, and which 10 real companies we should be targeting right now.
```

**Outreach:**
```
Run Coryant GTM on this brief: We need cold email sequences for outbound
into Series B SaaS companies in the US with a new VP of Sales hire in the
last 60 days. Build ICP criteria, find current HOT signals, and write a
5-touch SPARK email sequence and a LinkedIn sequence ready to deploy.
```

**Account Research:**
```
Run Coryant GTM on this brief: We have a meeting with Acme Corp next week.
They're a 200-person SaaS company that just raised a $15M Series B. Give
us everything — what they're actually building, who the decision maker is,
what signals are active right now, and how we should walk in.
```

---

## Troubleshooting

**Output is generic or shallow** — web search was likely off, or brief was too
vague. Specify the market, geography, and decision you're making.

**Not all agents ran** — that's by design. The Strategist only runs agents
relevant to your brief. If you want all six, include multiple angles in your
brief or specify "run all agents."

**Runtime longer than expected** — DEEP mode takes 30–45 min with all six
agents. If you didn't specify depth, the Strategist defaults to STANDARD.

---

Coryant · coryant.xyz
