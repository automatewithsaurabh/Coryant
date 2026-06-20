# CORYANT Career — Install

CORYANT Career turns your Claude into a research team for the
highest-stakes moments in a job search: applications,
interviews, negotiations, and the decision of whether to
pursue a role at all.

## What's in this pack

```
coryant-career/
  strategist.md                      — builds the investigation plan
  agents/
    company-role.md                  — what the company/role really is
    competitor-of-candidate.md       — the realistic competitive bar
    culture-signal.md                — what it's actually like there
    compensation.md                  — realistic pay benchmarking
  mode.md                            — shapes final output by moment type
```

Plus the shared `ORCHESTRATOR.md` (one level up) that runs the
sequence — every CORYANT pack uses the same orchestrator.

## Install — Claude Code

1. Copy this folder and `ORCHESTRATOR.md` into your Claude Code
   skills directory:

   ```
   cp -r coryant-career ~/.claude/skills/
   cp ORCHESTRATOR.md ~/.claude/skills/coryant-career/
   ```

2. Make sure web search is enabled in your Claude Code session.
   This pack does not function without it.

3. Start a session and give Claude your brief:

   ```
   Run CORYANT Career on this brief: I'm applying for a [role]
   at [company]. I'm preparing for [the application / an
   interview / a negotiation / deciding whether to pursue this].
   [Any context about your own background, if relevant.]
   ```

4. Claude will load ORCHESTRATOR.md, then strategist.md, then
   run each agent in sequence using real web search, then
   coordinate and synthesize. Expect 10-20 minutes for a
   STANDARD depth run.

## Install — Claude.ai (Projects)

1. Create a new Project in Claude.ai
2. Upload every file in this pack plus ORCHESTRATOR.md into
   the Project's knowledge
3. In Project instructions, paste:

   ```
   When given a brief, load and follow ORCHESTRATOR.md exactly,
   using strategist.md, the four files in agents/, and mode.md
   from the CORYANT Career pack. Use web search for every factual
   claim.
   ```

4. Start a new chat inside the Project and give your brief as
   shown above.

## A good brief looks like

```
Run CORYANT Career on this brief: I'm interviewing next week for
a Senior PM role at [Company], reporting to the Head of Product.
I have 6 years of B2B SaaS PM experience, most recently at a
Series B fintech company. I want to walk in already
understanding their actual priorities, not just their job
posting.
```

The more specific the brief — named company, named role, your
own real background, what moment you're preparing for — the
sharper the output.
