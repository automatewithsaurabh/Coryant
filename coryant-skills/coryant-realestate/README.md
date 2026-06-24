# CORYANT Real Estate

**The only real estate intelligence tool that tells you whether to buy.**

Every other tool gives you data. Comparables. Cap rates. Price history. Market reports. Nobody tells you: buy this property, at this price, with this offer condition — or don't.

This pack tells you.

---

## The Principle

Every output opens with a staked verdict — **BUY / NEGOTIATE / PASS / HOLD** — and the specific condition attached to it. Not after ten pages of balanced analysis. First line.

Before any positive analysis runs, a mandatory Red Flag Report looks for reasons NOT to do the deal. That is how a good underwriter, solicitor, or surveyor operates. This pack is designed to operate the same way.

---

## 10 Commands

```bash
/realestate [brief]          # Full pipeline — any moment type
/realestate-brief            # Guided 6-question brief builder
/acquire [property + context]# Pre-offer intelligence with red flags, comparables, deal model
/market [location + type]    # Cycle position + buy/hold/sell signal
/model [deal details]        # Full DCF, IRR, 3 scenarios, sensitivity table
/tenant [company + lease]    # Covenant rating + break probability + void cost
/plan [site + proposal]      # Planning risk score + strategy
/lease [heads of terms]      # Rent review modelling + WAULT + dilapidations
/portfolio [assets]          # Performance + concentration risk + rebalancing
/develop [site + scheme]     # GDV + residual land value + go/no-go
```

---

## Three User Lanes

### Investor
```
/acquire 3-bed Victorian terrace, Hackney, £750k asking price.
Currently tenanted at £2,600pm. Freehold.
```
→ Red flag scan (title, flood, planning), comparable transactions, income analysis (gross yield, net yield, cap rate), DCF with 3 scenarios, IRR, sensitivity table, supported value range, **offer price recommendation**.

```
/market Prime London residential — should I be buying or waiting?
```
→ Yield cycle position, affordability metrics, rate environment, supply pipeline, **BUY / HOLD / SELL / CAUTION signal** with specific evidence.

### Commercial Landlord
```
/tenant [Major retailer] — 10-year lease on our High Street unit, 
5 years remaining. Considering renewing or re-gearing.
```
→ Entity-level financial health (not just the brand), sector risk, break probability, covenant rating, **STRONG / ADEQUATE / WEAK / SPECULATIVE** with specific recommendation on whether to re-gear and at what terms.

```
/lease 10-year FRI lease, 5-year OMR upward-only rent reviews,
passing rent £180k pa, ERV £155k, tenant break at Year 5 with 6 months' notice.
```
→ Over-rented analysis, break probability (economic test), WAULT, rent review modelling, dilapidations estimate, **lease quality rating**.

### Developer
```
/develop Former car dealership site, 0.4 acres, Bristol.
Planning refused for 32 flats. Considering 20-flat PD prior approval route.
Land guide price £1.2m.
```
→ Planning route analysis (PD vs. full application), GDV from comparable sales, cost plan with QS benchmarks, residual land value calculation, sensitivity table, **GO / NO-GO / CONDITIONAL verdict**.

---

## What Makes This Pack Different

**1. Red flags before opportunity**
Every acquisition analysis runs a mandatory scan: title risk (short leasehold, overage, flying freehold), environmental (flood, contamination, subsidence, knotweed), planning (enforcement, Article 4, listed building), structural (PRC construction, system-built, asbestos era), and commercial risk (over-rented, short WAULT, distressed sale). Risks are front-loaded, not footnotes.

**2. Actual financial modelling**
Not "the cap rate is 6.5%." A full DCF: annual cash flows over the hold period, terminal value at an evidenced exit yield, NPV, unlevered IRR, levered IRR, equity multiple, cash-on-cash return, sensitivity table (exit yield × purchase price). All assumptions stated. Every input graded.

**3. Residual land value for developers**
The one calculation that determines whether a development scheme is viable: GDV − (build + fees + finance + contingency + developer profit) = maximum land bid. Cost benchmarks stated as reference data ([C] grade) with explicit instruction to verify with a QS. No other AI tool does this properly.

**4. Tenant covenant at entity level**
Not "Tesco is a strong covenant." The entity that signed the lease — its accounts, financial health, sector risk, whether it will exercise the break option, and the estimated void cost if it does.

**5. Market timing, not market data**
Where is this specific sector and geography in the yield cycle? How does the current interest rate environment affect deal financing? What does the supply pipeline look like? The output is a signal: BUY / HOLD / SELL / CAUTION — not a summary of recent market reports.

**6. Multi-jurisdiction from the ground up**
UK (RICS, freehold/leasehold, SDLT, NPPF, use classes, Article 4), US (cap rate/NOI, 1031, zoning, USPAP), India (RERA, circle rates, FSI/FAR, NA conversion), Europe (NIY, ERV, institutional lease standards). Not generic international — jurisdiction-specific frameworks applied throughout.

---

## Output Formats

**Intel Report** — Full-formatted HTML in forest green and brass gold. Deal metrics bar, red flag cards, comparable table, investment model with scenario cards and sensitivity grid, covenant card, adversarial review, "the one risk" section, professional advice list.

**Decision Brief** — Clean one-page print-ready memo. Verdict box, key numbers, red flags, what supports the verdict, the one risk, next steps. No filler.

---

## Evidence Grading

| Grade | Meaning |
|-------|---------|
| `[A]` | Public record — Land Registry, Companies House, planning portal |
| `[B]` | Verified market data — published comparable, rated data provider |
| `[C]` | Estimated / synthesised — stated assumption, verify independently |

Financial model inputs are always `[C]`. The exit yield is always the most sensitive input.

---

## Honest About What It Isn't

This is not:
- An RICS Red Book valuation (do not use for mortgage purposes)
- A USPAP appraisal (same)
- Legal advice (instruct a solicitor before transacting)
- A professional planning assessment (verify with the LPA)
- Live market data (comparables require verification before use in negotiations)

The pack tells you what all that evidence adds up to. The professionals verify the details.

---

## Example Briefs

**Acquisition:**
```
ACQUISITION_INTEL
Warehouse unit, 12,000 sq ft GIA, Coventry. 
Freehold. Single tenant: logistics company, 3 years remaining on FRI lease, 
break at month 24 with 6 months' notice.
Asking price: £2.1m. 
Passing rent: £115,000 pa.
I'm concerned the tenant will exercise the break.
Depth: DEEP
Format: INTEL REPORT
```

**Development:**
```
DEVELOPMENT_STACK
Former pub site, 0.2 acres, Manchester city fringe.
Zoned residential in local plan.
Proposed scheme: 12 apartments (mix of 1-bed and 2-bed).
Land agent is quoting £650k. 
I need to know if this stacks up before making an offer.
Format: INTEL REPORT
```

---

## Install

See [INSTALL.md](INSTALL.md).

---

*Built by [Coryant](https://coryant.xyz) — intelligence packs for professionals who need better research, faster.*
