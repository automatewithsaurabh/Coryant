# CORYANT Founder — Install

CORYANT Founder gives founders an 8-agent intelligence team for the decisions that matter most: when to raise, whether you have PMF, whether to pivot, how to respond to a competitive threat, and who to hire next.

## What's In This Pack

```
coryant-founder/
  SKILL.md                     — defines the /coryant-founder slash command
  strategist.md                — routes agents by founder moment type
  mode-fundraise.md            — investor-facing HTML output
  mode-decision.md             — internal decision HTML output
  brief-builder.md             — guided 6-question brief builder
  agents/
    investor.md                — VC fund mapping and warm intro paths
    market-signal.md           — market sizing, category maturity, timing
    competitor-intel.md        — competitive threat assessment
    customer-evidence.md       — PMF signals and customer language
    talent-signal.md           — hiring intelligence and comp benchmarks
    pmf-diagnostic.md          — PMF verdict engine
    narrative.md               — investor narrative and pitch framing
    investor-update.md         — monthly investor update drafter
```

Plus the shared `ORCHESTRATOR.md` (already inside this folder) that runs the sequence.

## Install — Claude Code

1. Copy this folder to your Claude Code skills directory:

   ```bash
   cp -r coryant-founder ~/.claude/skills/
   ```

2. For the intelligence pipeline (FUNDRAISE, PMF, PIVOT, etc.): enable web search in your Claude Code session.

3. Start a session and run the pipeline:

   ```
   /coryant-founder [your brief]
   ```

   Or use the guided brief builder:
   ```
   /founder-brief
   ```

   Or use an everyday tool (no web search needed):
   ```
   /investor-update [metrics and asks]
   /term-sheet [paste term sheet text]
   /weekly-review [what happened this week]
   /office-hours [what decision are you facing]
   ```

## Install — Claude.ai Projects

1. Create a new Project in Claude.ai
2. Upload every file in this pack into the Project's knowledge base
3. In Project instructions, paste:

   ```
   When given a founder brief, load and follow ORCHESTRATOR.md exactly.
   Use strategist.md to identify the founder moment type and route to the right agents.
   Use mode-fundraise.md for FUNDRAISE and BOARD_PREP. Use mode-decision.md for PMF, PIVOT, COMPETITIVE_THREAT, HIRE_INTEL, and MARKET_TIMING.
   Use web search for all factual claims. Never rely on training knowledge for market data, investor portfolios, or competitive intelligence.
   ```

4. Start a new chat and give your brief.
