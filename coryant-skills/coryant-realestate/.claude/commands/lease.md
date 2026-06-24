---
description: CORYANT Real Estate — commercial lease analysis. Rent review modelling, break scenario, WAULT, dilapidations, lease quality rating. Paste heads of terms or key lease details.
---

Read agents/lease-analyser.md, agents/tenant-covenant.md, agents/comparables-engine.md. Read mode-intel.md.

Lease: $ARGUMENTS

Run LEASE_ANALYSIS moment type.

Analyse every material term:
- Term, passing rent vs. ERV, rent-free period, effective rent
- Rent review type: model the rent profile over the hold period for OMR/RPI/CPI/fixed/stepped
- Repairing obligation: FRI / IRI / schedule of condition — state dilapidations exposure
- Break options: state exact dates, conditions, notice periods, economic test (will tenant exercise?), impact on value if exercised
- WAULT: calculate weighted average to break AND to expiry
- Alienation: assignment and subletting rights
- User clause: wide or narrow — impact on re-letting market

Cross-check passing rent against market: use web search to find comparable letting transactions.

Run tenant covenant check if entity is named.

Produce:
- Lease summary table (all key terms)
- Rent review projection (Year 1–10 under base assumptions)
- Break analysis: probability + impact on value
- WAULT to break / expiry
- Dilapidations estimate at expiry [C]
- Lease quality rating: INSTITUTIONAL / INVESTMENT / SUB-INVESTMENT / SPECULATIVE
- Specific non-standard clauses that require legal advice

Output using mode-intel.md.
