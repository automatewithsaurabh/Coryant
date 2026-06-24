---
description: CORYANT Supply Chain — disruption early warning scan. Provide region, trade route, category, or supplier geography to scan.
---

Read agents/disruption-scan.md. If specific supplier exposure is relevant, also read agents/risk-signal.md. Then read mode-intel.md.

Brief: $ARGUMENTS

Run DISRUPTION_SCAN moment type. Produce:
- Overall disruption level: CRITICAL / ELEVATED / NORMAL / EASING
- Active disruptions (if any): type, impact, severity, estimated duration, immediate mitigation action
- Early warning signals: trigger observed, probability, timeline, watch action
- Background risks: ongoing risks with no current escalation
- Risk calendar: next 90 days — seasonal and scheduled risks
- Monitoring recommendations: specific feeds and alert triggers to set up

Classify each signal as ACTIVE DISRUPTION / EARLY WARNING / MONITOR / EASING. Don't treat every background geopolitical risk as "elevated" — be specific about what is actually signalling disruption risk right now.
