# Installing CORYANT Academy

## Option A — Claude Code (Recommended)

Claude Code has web search enabled by default — this gives the research agents access to live arXiv, PubMed, Semantic Scholar, and Google Scholar results.

### Step 1: Copy the pack

```bash
cp -r coryant-skills/coryant-academy ~/.claude/skills/coryant-academy
```

Or clone the full Coryant repo:

```bash
git clone https://github.com/automatewithsaurabh/Coryant ~/.claude/skills/coryant
```

### Step 2: Verify slash commands

In Claude Code, type `/` — you should see:

```
/academy
/academy-brief
/explain
/session
/problems
/diagnose
/literature
/gaps
/write
/design
```

### Step 3: Run your first command

**If you're a tutor:**
```
/explain Photosynthesis — GCSE level
```

**If you're a researcher:**
```
/literature AI in education — educational technology field
```

---

## Option B — Claude Projects (claude.ai)

Note: Claude Projects doesn't have live web search. The research agents will use training data rather than live searches. For current literature, Claude Code is strongly recommended.

### Step 1: Create a new Project

Go to claude.ai → Projects → New Project → name it "Coryant Academy"

### Step 2: Upload pack files

Upload these files as Project Knowledge:
- `SKILL.md`
- `strategist.md`
- All 8 files in `agents/`
- `mode-teach.md`
- `mode-research.md`
- `brief-builder.md`

### Step 3: Add Project Instructions

Paste the contents of `CLAUDE.md` into your Project Instructions.

### Step 4: Use the pack

```
SESSION_PREP — Year 10 student, quadratic equations, 60 minutes.
She can factorise simple cases but not when a ≠ 1.
```

Or:

```
Run the academy brief builder
```

---

## Enabling Web Search in Claude Code

Web search is on by default in Claude Code. If you need to verify it's active:

1. In Claude Code, check Settings → Tools
2. Ensure "Web search" is enabled
3. The `/literature` and `/gaps` commands will search academic databases automatically

---

## Troubleshooting

**Commands not appearing:**
- Files must be in `~/.claude/skills/coryant-academy/.claude/commands/`
- Restart Claude Code after installation

**Research agents not searching live databases:**
- Confirm web search is enabled in settings
- Explicitly say "search arXiv and Semantic Scholar" in your brief if needed

**Output not in HTML format:**
- Include `format: TEACH` or `format: RESEARCH` in your brief
- Or ask: "produce the output as a formatted HTML report"

**Wrong discipline conventions:**
- Always include the subject and discipline in your brief
- Example: "A-level mathematics" not just "maths"; "quantitative psychology" not just "psychology"
