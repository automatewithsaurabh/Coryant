---
description: CORYANT Real Estate — pre-offer acquisition intelligence. Red flags first, then comparables, income analysis, and staked offer price. Provide property details, asking price, and location.
---

Read agents/red-flag-scanner.md, agents/comparables-engine.md, agents/deal-modeller.md, agents/valuation-intel.md, agents/market-cycle.md. Read mode-intel.md.

Property: $ARGUMENTS

Run ACQUISITION_INTEL moment type.

MANDATORY SEQUENCE:
1. Run red-flag-scanner first — list critical and amber flags before any positive analysis
2. Run comparables-engine — find like-for-like transactions, apply adjustment grid, derive supported value range
3. Run deal-modeller (income mode) — NOI, net yield, cap rate, 3-scenario IRR
4. Run valuation-intel — reconcile methods, confirm or challenge asking price
5. Run market-cycle — current cycle position and entry/exit signal
6. Run Stage 3.5 adversarial review

Open with verdict: BUY / NEGOTIATE / PASS — with specific offer price or condition.
End with: "The single greatest risk to this deal is: [specific]"

Produce output using mode-intel.md template.
