# Installing CORYANT Sales

## Option A — Claude Code (Recommended)

### Step 1: Copy the pack

```bash
cp -r coryant-skills/coryant-sales ~/.claude/skills/coryant-sales
```

Or clone directly:

```bash
git clone https://github.com/automatewithsaurabh/Coryant ~/.claude/skills/coryant
```

### Step 2: Verify slash commands are available

In Claude Code, type `/` — you should see:

```
/sales
/sales-brief
/research
/outreach
/battle
/call-prep
/deal-check
/follow-up
/sequence
```

### Step 3: Run your first brief

```
/sales-brief
```

This will walk you through 6 questions and fire the research pipeline.

---

## Option B — Claude Projects (claude.ai)

### Step 1: Create a new Project

Go to claude.ai → Projects → New Project → name it "Coryant Sales"

### Step 2: Upload pack files to Project Knowledge

Upload these files as Project Knowledge documents:
- `SKILL.md`
- `strategist.md`
- `agents/account-intel.md`
- `agents/prospect-intel.md`
- `agents/competitive-battle.md`
- `agents/deal-coach.md`
- `agents/icp-intel.md`
- `agents/objection-intel.md`
- `agents/outreach-writer.md`
- `agents/call-prep.md`
- `mode-intel.md`
- `mode-outreach.md`
- `brief-builder.md`

### Step 3: Add Project Instructions

Paste the contents of `CLAUDE.md` into your Project Instructions.

### Step 4: Use the pack

Type your brief directly into the chat:

```
ACCOUNT_INTEL — TechCorp, 200-person B2B SaaS, just hired new VP Sales.
I sell a sales engagement platform. Standard depth, Intel format.
```

Or ask for the brief builder:

```
Run the sales brief builder
```

---

## Troubleshooting

**Slash commands not showing:**
- Check that the files are in `~/.claude/skills/coryant-sales/.claude/commands/`
- Restart Claude Code and type `/` to refresh

**Output not using HTML format:**
- Explicitly include `format: INTEL` or `format: OUTREACH` in your brief
- Or ask: "produce the output as a full HTML report"

**Research seems generic:**
- Make sure your brief includes the company name, company size, and your product context
- Specify `DEEP` depth for strategic accounts
- Use `/sales-brief` to ensure all context is captured correctly
