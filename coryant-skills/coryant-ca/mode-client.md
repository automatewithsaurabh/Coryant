# CORYANT CA — Client Document Mode

You are producing a document the CA will send to or share with a client. This is NOT an internal research report. It must be:
- In plain English — no unexplained technical terms
- Short — clients do not read long documents
- Action-oriented — tell them what to do, not just what to know
- Professional but human — not corporate boilerplate

Use this mode for:
- Regulatory update memos (REGULATORY_WATCH work type, client-facing)
- Advisory memos requested by the CA
- Any output the CA specifically says is for client use

---

## Client Regulatory Update Memo

Use this when the CA needs to tell a client about a regulatory change.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Regulatory Update — [Client Name]</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Arial', Helvetica, sans-serif; font-size: 15px; line-height: 1.7; color: #111827; background: #F9FAFB; }

  .header { background: #1D4ED8; color: white; padding: 36px 48px; }
  .header-from { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.7; margin-bottom: 12px; }
  .header-title { font-size: 26px; font-weight: 400; margin-bottom: 8px; }
  .header-sub { font-size: 15px; opacity: 0.8; }
  .header-meta { margin-top: 24px; font-size: 13px; display: flex; gap: 32px; opacity: 0.7; }

  .content { max-width: 680px; margin: 0 auto; padding: 40px 24px; }

  .summary-box { background: #EFF6FF; border-left: 4px solid #1D4ED8; border-radius: 0 8px 8px 0; padding: 20px 24px; margin: 28px 0; }
  .summary-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #1D4ED8; margin-bottom: 8px; }
  .summary-text { font-size: 15px; }

  h2 { font-size: 17px; font-weight: 700; color: #111827; margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 1px solid #E5E7EB; }
  p { margin-bottom: 14px; color: #374151; }
  ul, ol { padding-left: 20px; margin-bottom: 14px; }
  li { margin-bottom: 8px; color: #374151; }

  .change-card { border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px 24px; margin: 16px 0; background: white; }
  .change-urgent { border-color: #FCA5A5; background: #FEF2F2; }
  .change-upcoming { border-color: #FDE68A; background: #FFFBEB; }
  .change-tag { display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 2px 8px; border-radius: 4px; margin-bottom: 10px; }
  .change-tag.urgent { background: #FEE2E2; color: #DC2626; }
  .change-tag.upcoming { background: #FEF3C7; color: #D97706; }
  .change-tag.note { background: #F3F4F6; color: #6B7280; }
  .change-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  .change-body { font-size: 14px; color: #374151; margin-bottom: 12px; }
  .change-action { font-size: 14px; font-weight: 600; color: #1D4ED8; }
  .change-action::before { content: "→ "; }

  .action-list { background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 20px 24px; margin: 28px 0; }
  .action-list-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #059669; margin-bottom: 12px; }
  .action-item { display: flex; gap: 12px; margin-bottom: 10px; font-size: 14px; align-items: flex-start; }
  .action-num { background: #059669; color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 2px; }

  .footer { background: #1E3A5F; color: rgba(255,255,255,0.6); padding: 24px 48px; font-size: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: 48px; }
  .footer-brand { color: white; font-weight: 600; }
  .footer-disc { max-width: 400px; line-height: 1.5; }
</style>
</head>
<body>

<div class="header">
  <div class="header-from">Regulatory Update · [CA Firm Name]</div>
  <h1 class="header-title">[What this update covers — plain English]</h1>
  <p class="header-sub">What's changing, what it means for you, and what to do</p>
  <div class="header-meta">
    <span>To: [Client Name]</span>
    <span>Prepared: [Date]</span>
    <span>Jurisdiction: [India / UK]</span>
  </div>
</div>

<div class="content">

<div class="summary-box">
  <div class="summary-label">Summary</div>
  <div class="summary-text">[3–4 sentences. What is changing, when, and the one thing the client must do about it. Plain English — no jargon.]</div>
</div>

<h2>What's Changing</h2>

<div class="change-card change-urgent">
  <span class="change-tag urgent">Action Required Now</span>
  <div class="change-title">[Change name in plain English]</div>
  <div class="change-body">[Explain what changed and why it affects this client. One paragraph. No jargon — or explain jargon in brackets.]</div>
  <div class="change-action">You need to [specific action] by [date].</div>
</div>

<div class="change-card change-upcoming">
  <span class="change-tag upcoming">Effective [Date] — Plan Now</span>
  <div class="change-title">[Change name in plain English]</div>
  <div class="change-body">[Explain the change and its impact.]</div>
  <div class="change-action">We recommend [specific preparation step] before [date].</div>
</div>

<div class="change-card">
  <span class="change-tag note">For Your Information</span>
  <div class="change-title">[Change name]</div>
  <div class="change-body">[Brief explanation — no immediate action needed but client should be aware.]</div>
</div>

<h2>What You Need to Do</h2>

<div class="action-list">
  <div class="action-list-label">Your Action List</div>
  <div class="action-item">
    <div class="action-num">1</div>
    <div>[Specific action — what to do, who does it, by when]</div>
  </div>
  <div class="action-item">
    <div class="action-num">2</div>
    <div>[Action 2]</div>
  </div>
  <div class="action-item">
    <div class="action-num">3</div>
    <div>[Action 3]</div>
  </div>
</div>

<h2>Next Steps</h2>
<p>[What the CA will do next, and what they need from the client. Specific: "We will prepare your [document] once you send us [specific information]. Please send this to [contact] by [date]."]</p>

<p>If you have any questions, please call [contact name] on [number] or email [address].</p>

</div>

<div class="footer">
  <span class="footer-brand">CORYANT · [CA Firm Name]</span>
  <span class="footer-disc">This memo is for information only and does not constitute legal or tax advice. Prepared using CORYANT intelligence tools.</span>
  <span>[Date]</span>
</div>

</body>
</html>
```

---

## Tone Rules for Client Documents

1. Start with what matters most. Clients read the first two sentences.
2. "You need to file your VAT return by 7 August" beats "As per the quarterly filing requirement under the VAT Act, the return for the quarter ended July must be submitted."
3. One idea per paragraph.
4. Use "we" for the CA firm and "you" for the client.
5. Avoid: "please note that," "it should be observed that," "in light of the foregoing."
6. Avoid: passive voice. "HMRC will penalise late filers" not "late filers may be subject to penalties."
7. When citing a regulation, explain it first, then cite: "Businesses with turnover over ₹5 crore must now file e-invoices (GST Notification 17/2024)."
