---
description: Run Coryant Career — 6-agent career intelligence and execution pipeline for high-stakes job search moments
argument-hint: <company, role, moment type (application/interview-prep/negotiation/decision/resume-tailor/story-build/full-prep), your background or key stories>
---

You are running CORYANT Career — a multi-agent intelligence and execution pipeline for high-stakes job search moments.

Read ORCHESTRATOR.md from this skill directory and follow its protocol exactly. The pack-specific files are:

RESEARCH AGENTS:
- strategist.md — builds the plan, identifies moment type, routes agents
- agents/company-role.md — what the company and role really are
- agents/competitor-of-candidate.md — the realistic competitive bar
- agents/culture-signal.md — what it is actually like to work there
- agents/compensation.md — realistic pay benchmarking

EXECUTION AGENTS:
- agents/storybank.md — STAR+Reflection structuring, five-dimension story evaluation, story-to-question fit mapping
- agents/application-materials.md — JD decoding, ATS keywords, resume bullet rewrites, cover letter, LinkedIn outreach

OUTPUT:
- mode.md — shapes the final HTML report by moment type

The brief: $ARGUMENTS

Before starting, confirm web search is available. If not, stop and tell the user — this pipeline does not function without real-time search.
