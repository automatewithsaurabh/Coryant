# Installing CORYANT Supply Chain

## Option A — Claude Code (Recommended)

### Step 1: Copy the pack

```bash
cp -r coryant-skills/coryant-scm ~/.claude/skills/coryant-scm
```

Or clone the full Coryant repo:

```bash
git clone https://github.com/automatewithsaurabh/Coryant ~/.claude/skills/coryant
```

### Step 2: Verify slash commands are available

In Claude Code, type `/` — you should see:

```
/scm
/scm-brief
/supplier
/trade-watch
/sourcing
/risk
/negotiate
/disruption
```

### Step 3: Run your first brief

```
/scm-brief
```

This walks you through 6 questions and fires the full research pipeline.

---

## Option B — Claude Projects (claude.ai)

### Step 1: Create a new Project

Go to claude.ai → Projects → New Project → name it "Coryant Supply Chain"

### Step 2: Upload pack files to Project Knowledge

Upload these files:
- `SKILL.md`
- `strategist.md`
- `agents/supplier-intel.md`
- `agents/risk-signal.md`
- `agents/trade-intel.md`
- `agents/market-benchmark.md`
- `agents/sourcing-intel.md`
- `agents/disruption-scan.md`
- `agents/negotiation-intel.md`
- `agents/network-intel.md`
- `mode-intel.md`
- `mode-brief.md`
- `brief-builder.md`

### Step 3: Add Project Instructions

Paste the contents of `CLAUDE.md` into your Project Instructions.

### Step 4: Use the pack

Type your brief directly:

```
SUPPLIER_INTEL — Acme Textiles Ltd, Bangladesh, apparel manufacturing.
Deep research. Intel format.
```

Or:

```
Run the supply chain brief builder
```

---

## Troubleshooting

**Slash commands not showing:**
- Check files are in `~/.claude/skills/coryant-scm/.claude/commands/`
- Restart Claude Code and type `/` to refresh the command list

**Output not in HTML format:**
- Include `format: INTEL` in your brief, or explicitly ask: "produce as a full HTML intelligence report"

**Research seems too general:**
- Be specific: include supplier name, country, product HS code, and your buying country
- Use `DEEP` depth for important decisions
- Use `/scm-brief` to ensure all context is captured properly

**Market data feels outdated:**
- This is expected and intentional — the pack flags this
- Use the sources listed in the output to get current prices from live market data providers
