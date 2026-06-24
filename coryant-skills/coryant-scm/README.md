# CORYANT Supply Chain

**Strategic intelligence for procurement managers, supply chain strategists, and operations leaders making sourcing, supplier, and supply network decisions — without a large analyst team.**

Most supply chain research tools are either expensive real-time subscriptions (Resilinc, Riskmethods) or raw data dumps (Panjiva, trade data). Neither gives the mid-market procurement professional what they actually need: structured, evidence-graded intelligence for a specific decision.

---

## What It Does

| Moment | What You Get |
|--------|-------------|
| Supplier Intelligence | Corporate structure, financial health, certifications, sanctions screening, red flags |
| Supplier Risk | Geopolitical / financial / operational / concentration risk with velocity classification |
| Tariff & Trade Watch | HS code, MFN rates, FTA opportunities, rules of origin, sanctions, export controls |
| Alternative Sourcing | Supplier landscape map, country comparison, sourcing strategy options, qualification timelines |
| Market Benchmarks | Commodity price context, freight rate benchmarks, should-cost modelling |
| Disruption Scan | ACTIVE / EARLY WARNING / MONITOR signals across geopolitical, weather, port, labour, and category risks |
| Negotiation Prep | Market position, leverage assessment, concession hierarchy, opening strategy |
| Network Intelligence | Country risk profiles, nearshoring analysis, total landed cost comparison, logistics route options |

---

## Slash Commands

```bash
/scm [brief]           # Full pipeline — any moment type
/scm-brief             # Guided 6-question brief builder
/supplier [company]    # Supplier deep-dive + risk profile
/trade-watch [context] # Tariff, sanctions, and trade compliance
/sourcing [category]   # Alternative supplier landscape
/risk [context]        # Supply chain risk assessment
/negotiate [context]   # Negotiation prep with benchmarks
/disruption [context]  # Disruption early warning scan
```

---

## Quick Start

**Supplier due diligence before onboarding:**
```
/supplier Acme Electronics Ltd, Vietnam, PCB manufacturer
```

**Tariff research for a sourcing decision:**
```
/trade-watch Electronic components (capacitors), origin: China, destination: US
```

**Risk assessment for a single-source dependency:**
```
/risk Single-source for automotive sensors — supplier in Guangdong, China. We have no qualified backup.
```

**Disruption scan for a region:**
```
/disruption Red Sea / Suez Canal route — we ship from Asia to Europe via this route
```

**Negotiation preparation:**
```
/negotiate Incumbent supplier raising steel fabrication prices by 12%. We buy 400 tonnes/year. Contract renews in 6 weeks.
```

**Full pipeline with guided brief builder:**
```
/scm-brief
```

---

## Intelligence Quality

Every output follows the Coryant quality standard:

| Standard | Detail |
|----------|--------|
| Evidence grades | `[A]` primary/verified · `[B]` single source · `[C]` inferred |
| Market data | Always dated, always flagged for verification before commercial use |
| Adversarial review | Stage 3.5 challenges top conclusions before synthesis |
| Geopolitical distinction | STRUCTURAL risk (slow-changing) vs. SITUATIONAL risk (event-driven) |
| Risk velocity | FAST / MEDIUM / SLOW — determines urgency of response |
| Honest gaps | Verification gaps flagged — what requires direct audit or live data |

---

## A Honest Note on What This Pack Covers

This pack covers **strategic intelligence** — the research and analysis layer for sourcing decisions. It does NOT replace:

- **Live freight rates**: use Freightos, Flexport, or a forwarder quote for current rates
- **Live commodity prices**: use LME, CME, ICIS, or your trading desk for current prices
- **Live port status**: use MarineTraffic, Port Monitor, or your freight forwarder
- **Real-time sanctions screening**: use Refinitiv World-Check, Dow Jones, or Kharon for compliance-grade screening

The pack cites benchmark data with reference periods and instructs verification before commercial use. This honesty is a feature, not a limitation.

---

## Example: Full Supply Chain Brief

```
I'm a procurement manager at a UK consumer goods company.

Moment: SUPPLIER_INTEL + SUPPLIER_RISK

Target: We're considering onboarding a new supplier in Bangladesh for cotton apparel.
Company name: [supplier name]. We've received their pitch deck and references, but haven't done independent research.

Context:
- Our current supplier is in Portugal (high cost)
- This would represent about 40% of our total apparel volume
- Compliance requirements: WRAP certification, SMETA audit
- Import into UK — need to understand post-Brexit tariff situation

Specific questions:
- Is this company financially stable?
- Are there any red flags in ownership or compliance history?
- What is the tariff rate for importing cotton apparel to the UK from Bangladesh?
- What are the labour compliance risks in Bangladesh apparel right now?

Depth: DEEP
Format: BOTH
```

---

## Install

See [INSTALL.md](INSTALL.md).

---

*Built by [Coryant](https://coryant.xyz) — intelligence packs for professionals who need better research, faster.*
