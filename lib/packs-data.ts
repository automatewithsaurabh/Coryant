export const PACKS = {
  career: {
    slug: "career",
    name: "Coryant Career",
    index: "01 / 03",
    tagline:
      "Applications, interviews, negotiation, and the decision of whether to pursue a role at all.",
    description:
      "Four agents investigate the company, the realistic competitive bar, what it is actually like to work there, and what fair compensation looks like, then shape the findings into exactly the document your moment requires.",
    agentCount: 4,
    modeCount: 4,
    modeLabel: "4 output modes",
    badge: null,
    agents: [
      {
        name: "Company + Role",
        oneLiner:
          "What the company actually does and why this role exists right now, not the job posting version.",
      },
      {
        name: "Competitor-of-Candidate",
        oneLiner:
          "The realistic competitive bar for this exact role, at this exact company stage.",
      },
      {
        name: "Culture Signal",
        oneLiner:
          "What current and former employees actually say, and a real profile of who you are meeting.",
      },
      {
        name: "Compensation",
        oneLiner:
          "A realistic pay range grounded in role, level, and company stage, not a generic salary site average.",
      },
    ],
    modes: [
      {
        name: "Application",
        desc: "Sharp material for a written application or cover letter.",
      },
      {
        name: "Interview prep",
        desc: "What this interviewer is actually trying to learn, and how to show it.",
      },
      {
        name: "Negotiation",
        desc: "A real number range and a script-starting-point grounded in evidence.",
      },
      {
        name: "Decision",
        desc: "An honest read on whether the evidence supports pursuing this at all.",
      },
    ],
    exampleBrief:
      "Run Coryant Career on this brief: I am interviewing next week for a Senior PM role, reporting to the Head of Product. I have 6 years of B2B SaaS PM experience. I want to walk in already understanding their actual priorities, not just their job posting.",
    avgRuntime: "10–20 min",
  },
  gtm: {
    slug: "gtm",
    name: "Coryant GTM",
    index: "02 / 03",
    tagline:
      "Market entry, competitive positioning, budget allocation, whitespace, and diagnostics.",
    description:
      "Six agents, the full original Coryant architecture, investigate market reality, competitor behavior, capital movement, verbatim customer language, regulatory risk, and hiring signal, then a coordinator cross-reads all six for contradictions before synthesis.",
    agentCount: 6,
    modeCount: 5,
    modeLabel: "5 decision types",
    badge: "MOST INSTALLED",
    agents: [
      {
        name: "Market",
        oneLiner:
          "Real market size and growth, the gap between reported and actual numbers.",
      },
      {
        name: "Competitor",
        oneLiner:
          "What competitors actually do versus what they claim, from ad strategy to hiring.",
      },
      {
        name: "Funding",
        oneLiner:
          "Where capital is moving and where it has quietly stopped.",
      },
      {
        name: "Consumer",
        oneLiner:
          "Verbatim customer language and pain, not paraphrased assumption.",
      },
      {
        name: "Regulatory",
        oneLiner:
          "Rules, upcoming changes, and risk relevant to this market and geography.",
      },
      {
        name: "Hiring",
        oneLiner:
          "What competitor job postings reveal about real strategic priority.",
      },
    ],
    modes: [
      {
        name: "Market entry",
        desc: "Should you enter this market, with the strongest evidence either way.",
      },
      {
        name: "Competitive positioning",
        desc: "The sharpest gap between what competitors claim and what they do.",
      },
      {
        name: "Budget allocation",
        desc: "Where spend is misallocated or underfunded, evidence-led.",
      },
      {
        name: "Whitespace",
        desc: "A specific, ownable gap nobody is currently serving.",
      },
      {
        name: "Diagnostic",
        desc: "Why something is not converting, with the most likely root cause.",
      },
    ],
    exampleBrief:
      "Run Coryant GTM on this brief: We are a B2B SaaS company considering entering a new market for our category. Our main question is whether the growth narrative is ahead of real demand, and who we would actually be competing against if we entered.",
    avgRuntime: "15–25 min",
  },
  pm: {
    slug: "pm",
    name: "Coryant PM",
    index: "03 / 03",
    tagline:
      "Internal roadmap buy-in and external launch positioning, from the same shared research.",
    description:
      "Four agents investigate user signal, competitor feature reality, market timing, and stakeholder context, then one of two mode files shapes the output, depending on whether you are convincing an exec or positioning for the market.",
    agentCount: 4,
    modeCount: 2,
    modeLabel: "2 output modes",
    badge: null,
    agents: [
      {
        name: "User Signal",
        oneLiner:
          "Real user pain, feature requests, and churn signal, in their words.",
      },
      {
        name: "Competitor Feature",
        oneLiner:
          "What competitors have shipped or are visibly building in this space.",
      },
      {
        name: "Market Timing",
        oneLiner:
          "Whether this is early, on-time, or late relative to the category.",
      },
      {
        name: "Stakeholder Context",
        oneLiner:
          "Runs one of two ways: what persuades this internal stakeholder, or how the market already talks about this.",
      },
    ],
    modes: [
      {
        name: "Internal",
        desc: "A roadmap argument built to win buy-in from a specific stakeholder type.",
      },
      {
        name: "External",
        desc: "Positioning input for a launch, grounded in real user language and market narrative.",
      },
    ],
    exampleBrief:
      "Run Coryant PM on this brief: I need to win buy-in from our VP Product for prioritizing a feature next quarter. The main pushback I expect is that we do not have clear evidence users actually need this versus just requesting it loudly.",
    avgRuntime: "12–20 min",
  },
} as const;

export type PackSlug = keyof typeof PACKS;
export type Pack = (typeof PACKS)[PackSlug];
