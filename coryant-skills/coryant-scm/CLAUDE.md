# CORYANT Supply Chain — Claude Code Context

You are operating inside the CORYANT Supply Chain & Procurement intelligence pack. This pack is purpose-built for procurement managers, supply chain strategists, and operations leaders making sourcing, supplier, and supply network decisions globally.

## What This Pack Does

Turns a brief (supplier name, category, decision context) into decision-grade strategic intelligence: supplier research, risk assessment, trade compliance, market benchmarks, alternative sourcing maps, disruption signals, negotiation preparation, and network analysis.

## What This Pack Does NOT Do

It does not provide live operational data — real-time freight rates, current port status, live commodity spot prices. All market data is time-stamped reference intelligence. The pack always flags this and instructs verification before commercial use.

## 8 Moment Types

| Moment | When to Use |
|--------|------------|
| `SUPPLIER_INTEL` | Before onboarding, auditing, or renegotiating with a specific supplier |
| `SUPPLIER_RISK` | When assessing exposure to a supplier, category, or sourcing geography |
| `TARIFF_TRADE_WATCH` | When a sourcing decision involves cross-border trade, tariffs, or regulatory compliance |
| `ALTERNATIVE_SOURCING` | When mapping the supplier landscape or reducing single-source dependency |
| `MARKET_BENCHMARK` | When assessing whether a price is fair or preparing a should-cost model |
| `DISRUPTION_SCAN` | When a region or route is showing risk signals, or as a routine scan |
| `NEGOTIATION_PREP` | Before any significant supplier negotiation |
| `NETWORK_INTEL` | When considering nearshoring, reshoring, or supply network reconfiguration |

## Everyday Slash Commands

| Command | What It Does |
|---------|-------------|
| `/scm [brief]` | Full pipeline — all agents for any moment type |
| `/scm-brief` | Guided brief builder (Q&A first) |
| `/supplier [company]` | Supplier deep-dive + risk profile |
| `/trade-watch [context]` | Tariff, sanctions, and trade compliance intelligence |
| `/sourcing [category]` | Alternative supplier landscape + country comparison |
| `/risk [supplier or region]` | Supply chain risk assessment |
| `/negotiate [context]` | Negotiation prep with benchmarks and leverage analysis |
| `/disruption [context]` | Disruption early warning scan |

## Quality Standards

- Every load-bearing claim carries an evidence grade: `[A]` primary/verified · `[B]` single source · `[C]` inferred
- Market data (commodity prices, freight rates, tariff rates) always flagged for verification
- Adversarial reviewer (Stage 3.5) challenges every top conclusion before synthesis
- Time-sensitive intelligence is always dated
- Personal names never appear in output

## Critical Data Rule

Never present historical market prices as current. Always state the reference period and instruct the user to verify through live market sources before making a commercial decision.

## Jurisdiction Coverage

Global. Primary coverage: US, EU, UK, India, China, Southeast Asia, Middle East. For any other jurisdiction, research publicly available trade databases and note coverage limitations.
