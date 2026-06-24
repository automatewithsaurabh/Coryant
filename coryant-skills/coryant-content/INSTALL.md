# CORYANT Content — Install

CORYANT Content gives founders, marketers, and content creators an 8-agent intelligence team for the full content stack — from understanding exactly who your audience is and what they want, to producing content that earns attention.

## What's In This Pack

```
coryant-content/
  SKILL.md                        — defines the /coryant-content slash command
  CLAUDE.md                       — auto-loaded context for Claude Code
  strategist.md                   — routes agents by content moment type
  mode-strategy.md                — content intelligence and strategy HTML report
  mode-content.md                 — ready-to-publish content output
  brief-builder.md                — guided 6-question brief builder
  agents/
    audience-intel.md             — audience language, pain points, communities
    competitor-content.md         — competitor landscape, what's working, gaps
    trend-signal.md               — EARLY/PEAK/SATURATED topic classification
    channel-intel.md              — platform verdict and algorithm intelligence
    seo-intel.md                  — winnable keyword clusters
    viral-anatomy.md              — hook patterns, structure, emotional triggers
    content-writer.md             — posts, scripts, newsletters, articles
    repurpose-engine.md           — systematic cross-format repurposing
```

## Install — Claude Code

```bash
cp -r coryant-content ~/.claude/skills/
```

Enable web search for the intelligence pipeline. Everyday tools (`/write-post`, `/write-newsletter`, `/write-script`, `/repurpose`, `/hook-writer`, `/content-calendar`) work without it.

Run with a brief:
```
/content [brief]
```

Or use the guided brief builder:
```
/content-brief
```

## Install — Claude.ai Projects

1. Create a new Project
2. Upload all files from this folder
3. Set Project instructions:

```
When given a content brief, load and follow ORCHESTRATOR.md exactly.
Use strategist.md to identify the content moment type and route to the right agents.
Use mode-strategy.md for strategy and intelligence reports. Use mode-content.md for ready-to-publish content.
Use web search for all intelligence agents. Never use training data for trend signals, competitor analysis, engagement benchmarks, or audience research.
```
