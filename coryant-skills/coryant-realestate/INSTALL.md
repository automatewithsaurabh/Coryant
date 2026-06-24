# Installing CORYANT Real Estate

## Option A — Claude Code (Recommended)

Claude Code provides web search, enabling the pack to find current comparable transactions, market reports, planning decisions, tenant financial data, and yield benchmarks.

### Step 1: Copy the pack

```bash
cp -r coryant-skills/coryant-realestate ~/.claude/skills/coryant-realestate
```

Or clone the full Coryant repo:

```bash
git clone https://github.com/automatewithsaurabh/Coryant ~/.claude/skills/coryant
```

### Step 2: Verify slash commands

In Claude Code, type `/` — you should see:

```
/realestate
/realestate-brief
/acquire
/market
/model
/tenant
/plan
/lease
/portfolio
/develop
```

### Step 3: Run your first command

```
/acquire 3-bed Victorian terrace, Hackney, London. £750k asking price.
Currently let at £2,600pm. Freehold.
```

Or start with the guided brief builder:

```
/realestate-brief
```

---

## Option B — Claude Projects (claude.ai)

Note: Claude Projects does not have live web search. Comparable transactions, market yield data, and planning records will rely on training data rather than live searches. For current market intelligence, Claude Code is strongly recommended.

### Step 1: Create a new Project

Go to claude.ai → Projects → New Project → name it "Coryant Real Estate"

### Step 2: Upload pack files

Upload these files as Project Knowledge:
- `SKILL.md`
- `strategist.md`
- All 8 files in `agents/`
- `mode-intel.md`
- `mode-brief.md`
- `brief-builder.md`

### Step 3: Add Project Instructions

Paste the contents of `CLAUDE.md` into your Project Instructions.

### Step 4: Use the pack

```
ACQUISITION_INTEL — 4-bedroom house, Bristol, £525k asking price.
Freehold. Currently owner-occupied. I'm considering it as a BTL investment.
Depth: STANDARD
```

---

## Troubleshooting

**Commands not appearing:**
- Files must be in `~/.claude/skills/coryant-realestate/.claude/commands/`
- Restart Claude Code after installation

**Red flag scan not running:**
- Confirm the brief specifies ACQUISITION_INTEL, DEAL_MODEL, or DEVELOPMENT_STACK
- Explicitly include "run red flag scan first" in your brief if needed

**Financial model inputs seem off:**
- All inputs are `[C]` grade estimated assumptions — correct them with your actual numbers and ask to re-run
- Always provide: purchase price, current rent (or target ERV), hold period, LTV if financing

**Wrong jurisdiction applied:**
- Always state the country in your brief: "UK, freehold" / "US, fee simple, California" / "India, Mumbai, leasehold"

**Output not in HTML format:**
- Include "format: INTEL REPORT" or "format: DECISION BRIEF" in your brief
- Or ask: "produce the output as a formatted HTML report"
