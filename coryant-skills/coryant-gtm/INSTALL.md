# CORYANT GTM — Install

CORYANT GTM turns your Claude into a six-agent market intelligence
team for go-to-market decisions: market entry, competitive
positioning, budget allocation, whitespace identification, and
diagnostics.

## What's in this pack

```
coryant-gtm/
  strategist.md                — builds the investigation plan
  agents/
    market.md                  — real market size, growth, structure
    competitor.md               — what competitors actually do
    funding.md                  — where capital is moving
    consumer.md                 — verbatim customer language and pain
    regulatory.md               — rules, risk, upcoming changes
    hiring.md                   — strategic signal from job postings
  mode.md                       — shapes output by decision type
```

Plus the shared `ORCHESTRATOR.md` (one level up) that runs the
sequence — every CORYANT pack uses the same orchestrator.

## Install — Claude Code

1. Copy this folder and `ORCHESTRATOR.md` into your Claude Code
   skills directory:

   ```
   cp -r coryant-gtm ~/.claude/skills/
   cp ORCHESTRATOR.md ~/.claude/skills/coryant-gtm/
   ```

2. Make sure web search is enabled in your Claude Code session.
   This pack does not function without it.

3. Start a session and give Claude your brief:

   ```
   Run CORYANT GTM on this brief: [your market/competitive/
   budget/whitespace/diagnostic question, as specific as
   possible — name the market, geography, and competitors
   if relevant]
   ```

4. Claude will load ORCHESTRATOR.md, then strategist.md, then
   run the relevant agents (not always all six — the Strategist
   decides based on your brief) using real web search, then
   coordinate and synthesize. Expect 15-25 minutes for a
   STANDARD depth run with all six agents active.

## Install — Claude.ai (Projects)

1. Create a new Project in Claude.ai
2. Upload every file in this pack plus ORCHESTRATOR.md into
   the Project's knowledge
3. In Project instructions, paste:

   ```
   When given a brief, load and follow ORCHESTRATOR.md exactly,
   using strategist.md, the six files in agents/, and mode.md
   from the CORYANT GTM pack. Use web search for every factual
   claim. The Strategist decides which agents are relevant per
   brief — not all six always run.
   ```

4. Start a new chat inside the Project and give your brief as
   shown above.

## A good brief looks like

```
Run CORYANT GTM on this brief: We're a B2B SaaS company
considering entering the Indian market for [category]. Our
main question is whether the market is genuinely growing or
whether the growth narrative is ahead of real demand, and who
we'd actually be competing against if we entered.
```

The more specific the brief — named geography, named category,
named competitors if known, and the actual decision pending —
the sharper the output.
