# CORYANT Academy — Intelligence Pack for Tutors and Researchers

## What This Is

A dual-lane intelligence pack for two types of academic professionals:

**Tutors** — private tutors, teaching assistants, online educators — who need to prepare sessions fast, explain concepts at the right level, generate practice problems, and diagnose why a specific student is stuck.

**Academic Researchers** — PhD students, postdocs, faculty, independent scholars — who need to map a research field with current literature, identify genuine gaps, design rigorous studies, and write clearly.

**Web search is active in this pack.** Research agents use live search to query arXiv, PubMed, Semantic Scholar, Google Scholar, SSRN, and bioRxiv. You get current literature, not just training data.

---

## 8 Moment Types

### SESSION_PREP
Build a complete tutoring session plan for a specific student, topic, and level. Includes learning objectives, activity sequence with timing, checkpoints, and branching paths for "they're getting it" vs. "they're stuck."

### CONCEPT_EXPLAIN
Explain a concept at the right depth for the stated audience — with the right analogies, prerequisite map, and common misconception flags. Cross-disciplinary, any subject.

### PROBLEM_SET
Generate a set of practice problems at a specified level and style. Bloom's taxonomy-aligned. Includes worked solutions and mark scheme. Variants: scaffolded / stretch / exam-style.

### MISCONCEPTION_HUNT
Given a student's specific error or confusion, trace it to its conceptual root and produce a targeted remediation plan. Not re-explaining the same thing louder — diagnosing the actual gap.

### LIT_MAP
Map a research field using live web search. Seminal papers → subsequent debates → current frontier → methodological traditions → empirical consensus vs. contested areas. Up-to-date as of today.

### GAP_FINDER
After mapping the literature, identify genuine research gaps: questions not asked, populations not studied, methods not applied to this domain, contradictions not resolved, assumptions not tested.

### PAPER_CRAFT
Structure and sharpen academic writing. Argument architecture, abstract construction, evidence weighting, section-level clarity review, disciplinary convention alignment.

### GRANT_PREP
Build the narrative for a research proposal or grant application. Significance, innovation, approach, feasibility, impact — structured for the specific funder or programme.

---

## Everyday Tools

| Command | Use When |
|---------|----------|
| `/academy [brief]` | Full pipeline for any moment type |
| `/academy-brief` | Guided brief builder — 6 questions before pipeline fires |
| `/explain [topic + level]` | Concept explanation with analogies and prerequisite map |
| `/session [student + topic]` | Full tutoring session plan |
| `/problems [topic + level]` | Practice problem set with solutions |
| `/diagnose [error + context]` | Misconception diagnosis and remediation |
| `/literature [topic + field]` | Live literature map with current papers |
| `/gaps [topic + field]` | Research gap analysis |
| `/write [section + context]` | Academic writing support |
| `/design [research question]` | Research design and methodology advice |

---

## Output Formats

**TEACH** — Clean, structured output for tutoring: ready-to-use session plans, formatted problem sets, student-facing explanations.

**RESEARCH** — Formal, cited output for academic work: literature maps with paper references, gap analyses, writing feedback, methodology briefs.

**BOTH** — Where the moment bridges both (e.g., a tutor who also needs research context for a topic).

---

## Quality Standards

- Research agents use **live web search** — arXiv, PubMed, Semantic Scholar, SSRN, Google Scholar
- Academic sources graded: `[A]` = peer-reviewed published · `[B]` = preprint or grey literature · `[C]` = synthesized/inferred
- Tutor outputs are **ready to use** — not just advice, but actual session plans, actual problems, actual explanations
- Adversarial review challenges: recency bias, publication bias, over-generalisation from limited studies, methodological limitations
- Personal names never appear in output — refer to roles (the student, the researcher, the PI)
- Discipline-aware: outputs adapt to STEM, humanities, and social science conventions from the brief
