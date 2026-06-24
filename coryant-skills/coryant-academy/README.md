# CORYANT Academy

**Intelligence for tutors and academic researchers — in one pack.**

Two lanes, one install. Tutors get session plans, concept breakdowns, calibrated problem sets, and misconception diagnosis. Researchers get live literature maps, real gap analysis, writing feedback, and research design advice.

---

## What Makes This Different

**For tutors:** Most AI tools give you explanations. This gives you a teaching plan — with prerequisite maps, branching for when the student gets stuck, targeted problems, and root-cause diagnosis of errors.

**For researchers:** Most AI tools tell you what they know from training. This searches arXiv, PubMed, Semantic Scholar, SSRN, and Google Scholar with live web search — so your literature map reflects what was published last month, not just before the training cutoff.

---

## Tutor Lane

| Command | What You Get |
|---------|-------------|
| `/session [student + topic]` | Complete session plan: phases, timing, branching, checkpoints |
| `/explain [topic + level]` | Prerequisite map, 3-level explanation, analogies, misconceptions |
| `/problems [topic + level]` | Calibrated problem set: Bloom's levels, mark scheme, worked solutions |
| `/diagnose [error + context]` | Root-cause diagnosis + 5-step remediation plan |

**Example:**
```
/session GCSE maths student, struggling with quadratic equations. 
She can expand brackets but keeps making sign errors. 60-minute session.
```

---

## Researcher Lane

| Command | What You Get |
|---------|-------------|
| `/literature [topic + field]` | Live literature map: seminal → debates → frontier (searched today) |
| `/gaps [topic + field]` | Verified research gaps (searched before claimed) |
| `/write [section + draft]` | Argument architecture review + clarity edits + section rewrite |
| `/design [research question]` | Design options, validity threats, power analysis, ethics |

**Example:**
```
/literature Sleep and academic performance, educational psychology. 
I'm about to write a literature review for my PhD.
```

---

## Full Pipeline

```
/academy [brief]     # Any moment type — full pipeline
/academy-brief       # Guided 6-question brief builder
```

---

## Academic Source Grading

Every claim in research-lane output carries a source grade:

| Grade | Meaning |
|-------|---------|
| `[A]` | Peer-reviewed, published — journal or conference proceedings |
| `[B]` | Preprint (arXiv, bioRxiv, SSRN) — provisional |
| `[C]` | Grey literature, synthesised, inferred — verify independently |

---

## All 10 Commands

```bash
/academy [brief]         # Full pipeline — any moment type
/academy-brief           # Guided brief builder
/explain [topic+level]   # Concept map with analogies and misconceptions
/session [student+topic] # Full tutoring session plan
/problems [topic+level]  # Practice problem set with mark scheme
/diagnose [error+ctx]    # Misconception root cause and remediation
/literature [topic+field]# Live literature map (web search)
/gaps [topic+field]      # Research gap analysis (web search)
/write [section+draft]   # Academic writing support
/design [question]       # Research design and methodology advice
```

---

## No Discipline Bias

Cross-disciplinary. STEM, humanities, social sciences, law, medicine, economics, arts. The agents adapt to discipline conventions from your brief — just tell them what you're working in.

---

## Example Briefs

**Tutor — Session prep:**
```
LANE: Tutor
MOMENT: SESSION_PREP
Topic: Photosynthesis
Student: Year 10 (GCSE), knows the word equation but can't explain the light-dependent stage
Session goal: Remediation + advance to light-independent stage if time
Duration: 60 minutes
```

**Researcher — Literature map:**
```
LANE: Researcher
MOMENT: LIT_MAP
Topic: Large language models in education
Field: Educational technology / AI in education
I'm a PhD student about to start my literature review. I know about GPT-4 and a few papers on AI tutors but haven't mapped the field systematically.
Depth: DEEP
```

**Researcher — Gap finding:**
```
LANE: Researcher
MOMENT: GAP_FINDER
I think there's a gap in research on using spaced repetition for medical education in low-income countries. Search whether this actually exists or has been done.
Field: Medical education / health professions education
```

---

## Install

See [INSTALL.md](INSTALL.md).

---

*Built by [Coryant](https://coryant.xyz) — intelligence packs for professionals who need better research, faster.*
