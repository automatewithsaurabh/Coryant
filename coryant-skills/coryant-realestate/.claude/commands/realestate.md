---
description: CORYANT Real Estate — full intelligence pipeline. Provide moment type, property details, geography, and context. Opens with a staked verdict.
---

Read SKILL.md, strategist.md, and all relevant agent files. Then read the appropriate mode file.

Brief: $ARGUMENTS

Run the full CORYANT Real Estate pipeline:
1. Parse the brief for moment type, property type, geography, and context
2. If ACQUISITION_INTEL, DEAL_MODEL, or DEVELOPMENT_STACK: run red-flag-scanner first — always
3. Route to the correct agents per strategist.md Stage 1
4. Run Stage 3.5 adversarial review before producing output
5. Open the output with the verdict: BUY / PASS / NEGOTIATE / HOLD — specific terms, first line
6. End the output with: "The single greatest risk to this deal is: [specific]"

Output in the format specified in the brief (INTEL REPORT = mode-intel.md / DECISION BRIEF = mode-brief.md).
