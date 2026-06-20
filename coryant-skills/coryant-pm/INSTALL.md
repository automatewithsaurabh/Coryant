# CORYANT PM — Install

CORYANT PM turns your Claude into a research team for product
decisions — both internal roadmap arguments and external-facing
positioning — using the same shared research, shaped two
different ways.

## What's in this pack

```
coryant-pm/
  strategist.md                — builds the plan, sets audience type
  agents/
    user-signal.md              — real user pain, requests, churn signal
    competitor-feature.md       — what competitors have shipped/are building
    market-timing.md            — early, on-time, or late
    stakeholder-context.md      — internal persuasion OR external narrative
                                   (runs the relevant half based on audience)
  mode-internal.md              — shapes output for roadmap/buy-in docs
  mode-external.md              — shapes output for positioning/launch docs
```

Plus the shared `ORCHESTRATOR.md` (one level up) that runs the
sequence — every CORYANT pack uses the same orchestrator.

## Install — Claude Code

1. Copy this folder and `ORCHESTRATOR.md` into your Claude Code
   skills directory:

   ```
   cp -r coryant-pm ~/.claude/skills/
   cp ORCHESTRATOR.md ~/.claude/skills/coryant-pm/
   ```

2. Make sure web search is enabled in your Claude Code session.
   This pack does not function without it.

3. Start a session and give Claude your brief, stating which
   kind of document you need:

   ```
   Run CORYANT PM on this brief: I need to [win internal buy-in
   for / prepare external positioning for] [the feature/
   product area]. [Context: who the audience is, what decision
   is pending, any specifics about the product.]
   ```

4. Claude will load ORCHESTRATOR.md, then strategist.md (which
   determines audience type), then run the four shared agents
   using real web search, then coordinate and synthesize using
   the correct mode file. Expect 12-20 minutes for a STANDARD
   depth run.

## Install — Claude.ai (Projects)

1. Create a new Project in Claude.ai
2. Upload every file in this pack plus ORCHESTRATOR.md into
   the Project's knowledge
3. In Project instructions, paste:

   ```
   When given a brief, load and follow ORCHESTRATOR.md exactly,
   using strategist.md and the four files in agents/ from the
   CORYANT PM pack. The Strategist determines AUDIENCE TYPE
   (INTERNAL or EXTERNAL) — use mode-internal.md for INTERNAL
   and mode-external.md for EXTERNAL. Use web search for every
   factual claim.
   ```

4. Start a new chat inside the Project and give your brief as
   shown above.

## Good briefs look like

INTERNAL example:
```
Run CORYANT PM on this brief: I need to win buy-in from our VP
Product for prioritizing [feature] next quarter. The main
pushback I expect is that we don't have clear evidence users
actually need this versus just requesting it loudly.
```

EXTERNAL example:
```
Run CORYANT PM on this brief: We're launching [feature] in 6
weeks and I need to know how to position it against [competitor]
who shipped something similar 3 months ago, and what language
will actually resonate versus sound like everyone else's launch
post.
```

State the audience explicitly if it's not obvious from context
— this determines which mode file shapes the final output.
