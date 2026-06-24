---
description: CORYANT Real Estate — full investment model. DCF, 3 scenarios, IRR, leveraged return, sensitivity table. Provide purchase price, income details, financing assumptions, and hold period.
---

Read agents/deal-modeller.md, agents/red-flag-scanner.md. Read mode-intel.md.

Deal: $ARGUMENTS

Run DEAL_MODEL moment type.

Run red-flag-scanner first — flag any risks that affect the model inputs (void risk, covenant risk, planning constraint that affects income).

Then build the full model:
1. Income analysis: gross rent → NOI with all stated assumptions ([C] grade)
2. Simple metrics: gross yield, net yield, cap rate/NIY
3. DCF: annual cash flows over hold period, exit value, NPV and IRR
4. Leveraged return: cash-on-cash, levered IRR, equity multiple, ICR
5. Three scenarios: BEAR / BASE / BULL — table with IRR and equity multiple
6. Sensitivity: exit yield × purchase price grid (3×3)
7. Break-even analysis: minimum NOI to cover debt at 1.25× ICR

State every assumption explicitly with its grade. The exit yield is always the most sensitive input — flag this.

Output: full model using mode-intel.md.
