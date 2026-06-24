# Coryant Content Pack

Eight coordinated agents covering the full content stack — audience intelligence, competitor content analysis, trend hunting, SEO research, channel strategy, viral anatomy, and full content execution — plus six everyday tools for writing without the full pipeline.

Built for B2B founders, marketers, and content creators who want content that earns attention, not just fills a calendar.

---

## What's Inside

```
coryant-content/
├── README.md
├── ORCHESTRATOR.md              ← runs the full agent sequence
├── strategist.md                ← routes agents by content moment type
├── mode-strategy.md             ← content intelligence and strategy HTML report
├── mode-content.md              ← ready-to-publish content HTML output
├── brief-builder.md             ← guided 6-question brief builder
└── agents/
    ├── audience-intel.md        ← who your audience is and what language they use
    ├── competitor-content.md    ← what competitors publish and where the gaps are
    ├── trend-signal.md          ← topics rising right now before they peak
    ├── channel-intel.md         ← which platforms are worth your time and why
    ├── seo-intel.md             ← keyword clusters you can actually win
    ├── viral-anatomy.md         ← hook patterns, structure, emotional triggers
    ├── content-writer.md        ← posts, newsletters, scripts, articles — ready to publish
    └── repurpose-engine.md      ← one piece of content → multiple formats
```

---

## Content Moment Types

| Moment | Agents Run | What You Get |
|---|---|---|
| **Strategy Build** | Audience + Competitor + Channel + Trend (+ SEO + Viral for DEEP) | 90-day content plan, channel stack, content gaps, hook templates |
| **Competitor Content** | Competitor + Viral (+ Audience for DEEP) | What's working for competitors, where gaps exist, what angles are open |
| **Audience Intel** | Audience Intel (deep) (+ Channel for DEEP) | Real audience language, pain points, communities, what they actually engage with |
| **Trend Hunt** | Trend Signal + Competitor (+ SEO for DEEP) | EARLY/PEAK/SATURATED topics, specific angles, timing windows |
| **Channel Strategy** | Channel + Audience + Competitor | Platform verdict (PRIORITIZE/SECONDARY/SKIP), algorithm intelligence, build timeline |
| **SEO Research** | SEO Intel + Competitor (+ Trend for DEEP) | Keyword clusters, difficulty assessment, featured snippet opportunities |
| **Viral Anatomy** | Viral + Audience + Competitor | Hook templates from real research, structure blueprint, emotional trigger map |
| **Content Audit** | Competitor + Audience + Channel | What's working, what's dead, what to double down on |

---

## Everyday Tools

| Command | What It Does |
|---|---|
| `/content-brief` | Guided brief builder — 6 questions, assembles brief, runs the pipeline |
| `/write-post` | Draft a LinkedIn, Twitter/X, or Instagram post — hook + body + alternatives |
| `/write-newsletter` | Full newsletter issue — subject, preview, body, CTA |
| `/write-script` | YouTube, podcast, TikTok, or Reel script |
| `/repurpose` | Turn one piece of content into LinkedIn post + thread + newsletter + carousel + script |
| `/hook-writer` | 10 hook variations across different types and emotional triggers |
| `/content-calendar` | 30 or 90-day calendar with specific topics, angles, and hooks |

---

## Install: Claude Code

```bash
cp -r coryant-content ~/.claude/skills/
```

Web search required for the intelligence pipeline. Everyday tools work without it.

**Full pipeline:**
```
/content B2B SaaS founder, LinkedIn, targeting VP Marketing at 50–500 person companies. Building presence to drive inbound demos. Starting from 800 followers. Competitors: Klue, Crayon (product content heavy). I want to own pipeline generation content, not generic GTM advice. DEEP. Strategy + first 3 posts ready to publish.
```

**Guided brief builder:**
```
/content-brief
```

**Everyday tools:**
```
/write-post LinkedIn I spent 3 years building a GTM tool and learned that most pipeline problems are actually ICP problems. Audience: VP Marketing at B2B SaaS.

/hook-writer LinkedIn "why your content strategy isn't working" audience: B2B founders

/repurpose [paste your blog post] → LinkedIn post, Twitter thread, newsletter issue

/content-calendar B2B SaaS tool, LinkedIn + newsletter, 3x/week LinkedIn 1x/week newsletter, 90 days, goal: inbound demos
```

---

## Install: Claude.ai Projects

1. Create a new Project
2. Upload all files from this folder
3. Set Project instructions:

```
When given a content brief, load and follow ORCHESTRATOR.md exactly.
Use strategist.md to identify the content moment type and select which agents run.
Use mode-strategy.md for strategy and intelligence reports. Use mode-content.md when producing ready-to-publish content.
Use web search for all intelligence work — never use training data for trend signals, engagement benchmarks, competitor analysis, or audience research.
```

---

## What Makes Coryant Content Different

Every other content tool is a writing assistant. Give it a topic, get content back.

Coryant Content is a content strategist:

- **Audience Intel** captures the exact language your audience uses — not your interpretation of it. Real phrases from Reddit, YouTube comments, and communities.
- **Competitor Content** doesn't just list competitors — it identifies what's actually getting traction and maps the gaps nobody has filled.
- **Trend Signal** classifies every topic as EARLY/PEAK/SATURATED and gives you the timing window. Publishing into a saturated topic is worse than not publishing.
- **Viral Anatomy** studies what actually spread in your niche — the hook structures, emotional triggers, and content frames — and gives you templates built from evidence, not intuition.
- **Channel Intel** gives an honest verdict per platform for your niche. Most creators waste months on the wrong platform. We tell you where to focus and why.
- **SEO Intel** finds winnable keyword clusters — not the high-volume terms Forbes already owns, but the specific opportunities a creator can actually rank for.

The writing tools (content-writer, repurpose-engine) take all of this intelligence and apply it to the content. Every post uses audience language. Every hook follows patterns that work in your specific niche. Every repurposed piece is re-engineered for the platform, not copy-pasted.

---

Coryant · coryant.xyz
