---
description: CORYANT Supply Chain — full intelligence pipeline. Provide a brief with your decision context, moment type, and research target.
---

Read SKILL.md, strategist.md, and all relevant agent files in agents/ for the moment type in the brief. Then read the mode file matching the requested output format (mode-intel.md or mode-brief.md).

Execute the full multi-agent pipeline as described in strategist.md using this brief:

$ARGUMENTS

If no brief is provided, load brief-builder.md and run the guided brief builder before firing the pipeline.

Evidence-grade every load-bearing claim [A]/[B]/[C]. Flag all market data (commodity prices, freight rates, tariff rates) as time-sensitive and requiring verification. Run Stage 3.5 adversarial review on top conclusions. Produce final output using the appropriate mode file's HTML template.
