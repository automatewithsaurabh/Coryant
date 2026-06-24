---
description: List upcoming compliance filing deadlines for a client — India (GST/ITR/TDS/ROC) or UK (VAT/CT/PAYE/SA) — with penalties for missing them
argument-hint: "[jurisdiction: India or UK, client type: company/individual/LLP/partnership, any specific circumstances: turnover threshold, GST registration, audit requirement, etc.]"
---

Generate a compliance deadline calendar for the following:
$ARGUMENTS

**For India clients**, cover all applicable deadlines from today's date for the next 6 months:
- GST: GSTR-1, GSTR-3B, GSTR-2B reconciliation, GSTR-9 / GSTR-9C (annual), IFF (quarterly QRMP filers)
- Income Tax: Advance tax due dates (15 Jun / 15 Sep / 15 Dec / 15 Mar), TDS quarterly returns (24Q/26Q/27Q/27EQ), TDS certificate issue dates, ITR filing deadline, tax audit report (3CB-3CD / 3CA-3CD)
- Companies Act / MCA: AGM deadline, AOC-4 (financial statements), MGT-7A (annual return), DIR-3 KYC, MSME payment disclosure (Form MSME-1)
- Transfer Pricing: Form 3CEB deadline
- Note applicable thresholds: GST annual return only if turnover >₹2 crore; audit only if turnover >₹10 crore (business) / ₹50 lakh (profession) etc.

**For UK clients**, cover all applicable deadlines from today's date for the next 6 months:
- VAT: quarterly/monthly return and payment dates (date depends on VAT period end — note if unknown)
- PAYE/NIC: monthly payment to HMRC, RTI FPS deadline, P60 issue (31 May), P11D and P11D(b) (6 July), PSA payment (19 Oct)
- Corporation Tax: payment due (9 months + 1 day after year end), CT600 filing (12 months after year end)
- Self Assessment: payment on account (31 Jan / 31 Jul), final filing (31 Jan)
- Companies House: confirmation statement, accounts filing deadline
- Note any penalties for late filing / payment for each item

Format as a table: Date | Filing/Payment | Who It Applies To | Penalty for Missing

Flag any deadline within the next 30 days in bold as URGENT.

Use today's date for calculation. Note any deadline where the exact date depends on information not provided (e.g., VAT period end, company year end).
