export const PACKS = {
  career: {
    slug: "career",
    name: "Coryant Career",
    index: "01 / 10",
    tagline:
      "Applications, interviews, negotiation, and the decision of whether to pursue a role at all.",
    description:
      "Four agents investigate the company, the realistic competitive bar, what it is actually like to work there, and what fair compensation looks like, then shape the findings into exactly the document your moment requires.",
    agentCount: 4,
    modeCount: 4,
    modeLabel: "4 output modes",
    badge: null,
    category: "business" as const,
    price: "₹1,999",
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
    index: "02 / 10",
    tagline:
      "Market entry, competitive positioning, budget allocation, whitespace, and diagnostics.",
    description:
      "Six agents, the full original Coryant architecture, investigate market reality, competitor behavior, capital movement, verbatim customer language, regulatory risk, and hiring signal, then a coordinator cross-reads all six for contradictions before synthesis.",
    agentCount: 6,
    modeCount: 5,
    modeLabel: "5 decision types",
    badge: "MOST INSTALLED",
    category: "business" as const,
    price: "₹1,999",
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
    index: "03 / 10",
    tagline:
      "Internal roadmap buy-in and external launch positioning, from the same shared research.",
    description:
      "Four agents investigate user signal, competitor feature reality, market timing, and stakeholder context, then one of two mode files shapes the output, depending on whether you are convincing an exec or positioning for the market.",
    agentCount: 4,
    modeCount: 2,
    modeLabel: "2 output modes",
    badge: null,
    category: "business" as const,
    price: "₹1,999",
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
  "founders-associate": {
    slug: "founders-associate",
    name: "Coryant Founders Associate",
    index: "04 / 10",
    tagline: "Strategic intelligence for Founder's Associate and Chief of Staff roles.",
    description:
      "Built for candidates and operators in the CEO office. Investigates company strategy, competitive landscape, stakeholder priorities, and what a Founder's Associate would actually own in the first 90 days.",
    agentCount: 5,
    modeCount: 2,
    modeLabel: "2 output modes",
    badge: null,
    category: "roles" as const,
    price: "₹1,999",
    agents: [
      {
        name: "Company Intelligence",
        oneLiner:
          "What the company actually does, where it stands, and what strategic pressures drive the CEO office right now.",
      },
      {
        name: "Market and Competitive",
        oneLiner:
          "The real competitive landscape and market moment the company is operating in.",
      },
      {
        name: "Stakeholder Context",
        oneLiner:
          "Who the key internal and external stakeholders are and what they actually care about.",
      },
      {
        name: "Role Intelligence",
        oneLiner:
          "What a Founder's Associate actually owns at this stage and what success looks like in the first 90 days.",
      },
      {
        name: "Compensation",
        oneLiner:
          "Realistic comp range for this role at this company stage.",
      },
    ],
    modes: [
      {
        name: "Application brief",
        desc: "A strategic document proving you already think like an insider before the first conversation.",
      },
      {
        name: "Interview prep",
        desc: "What the CEO is actually evaluating and how to demonstrate the specific capability they need.",
      },
    ],
    exampleBrief:
      "Run Coryant Founders Associate on this brief: I am applying for a Founder's Associate role at a Series A AI startup. I want to understand what the CEO actually needs, what I would realistically own in the first 90 days, and how to demonstrate I already think at the level this role requires.",
    avgRuntime: "12-18 min",
  },
  "chartered-accountant": {
    slug: "chartered-accountant",
    name: "Coryant CA",
    index: "05 / 10",
    tagline: "Financial and regulatory intelligence for CA professionals, CFOs, and finance leads.",
    description:
      "Built for Chartered Accountants and finance professionals. Investigates regulatory changes, sector financial benchmarks, and the specific intelligence needed to advise clients with real depth.",
    agentCount: 5,
    modeCount: 2,
    modeLabel: "2 output modes",
    badge: null,
    category: "roles" as const,
    price: "₹1,999",
    agents: [
      {
        name: "Regulatory Intelligence",
        oneLiner:
          "Current and upcoming tax, compliance, and regulatory changes relevant to the sector or client type.",
      },
      {
        name: "Sector Financial",
        oneLiner:
          "Real financial benchmarks and trends for the sector being analyzed.",
      },
      {
        name: "Competitive Landscape",
        oneLiner:
          "How comparable entities are positioned and what peer analysis reveals.",
      },
      {
        name: "Risk Signal",
        oneLiner:
          "Specific financial and compliance risks worth surfacing to a client or decision-maker.",
      },
      {
        name: "Market Context",
        oneLiner:
          "Broader economic signals that bear on the financial question at hand.",
      },
    ],
    modes: [
      {
        name: "Client advisory",
        desc: "Intelligence shaped for a client-facing advisory document or presentation.",
      },
      {
        name: "Internal analysis",
        desc: "Deep sector or regulatory analysis for internal decision-making.",
      },
    ],
    exampleBrief:
      "Run Coryant CA on this brief: I am advising a manufacturing SMB client on their FY2026 tax strategy. Investigate current GST changes, sector benchmarks for their industry, and any regulatory risk I should be flagging in my advisory.",
    avgRuntime: "12-18 min",
  },
  content: {
    slug: "content",
    name: "Coryant Content",
    index: "06 / 10",
    tagline: "Audience intelligence, content strategy, and competitive content analysis.",
    description:
      "Built for content strategists, creators, and brand teams. Investigates what your audience actually wants, what competitors are producing, what formats are working, and what angles nobody is owning yet.",
    agentCount: 4,
    modeCount: 2,
    modeLabel: "2 output modes",
    badge: null,
    category: "business" as const,
    price: "₹1,999",
    agents: [
      {
        name: "Audience Signal",
        oneLiner:
          "What your target audience actually reads, shares, and engages with — in their own language.",
      },
      {
        name: "Competitor Content",
        oneLiner:
          "What competitors are publishing, what is working for them, and where the gaps are.",
      },
      {
        name: "Format and Channel",
        oneLiner:
          "Which formats and channels are gaining traction in this category right now.",
      },
      {
        name: "Topic Intelligence",
        oneLiner:
          "Specific angles and topics with unmet demand that nobody is currently owning.",
      },
    ],
    modes: [
      {
        name: "Strategy",
        desc: "A content strategy built from real audience and competitive intelligence, not assumption.",
      },
      {
        name: "Brief",
        desc: "A tight content brief for a specific piece, grounded in what will actually resonate.",
      },
    ],
    exampleBrief:
      "Run Coryant Content on this brief: I am building a content strategy for a B2B SaaS brand targeting Indian startup founders. Investigate what this audience actually reads, what competitors are publishing, and what angles nobody is covering that we could own.",
    avgRuntime: "10-15 min",
  },
  sales: {
    slug: "sales",
    name: "Coryant Sales",
    index: "07 / 10",
    tagline: "Prospect intelligence, account research, and competitive battlecards for sales operators.",
    description:
      "Built for AEs, SDRs, and solo sales operators. Investigates a prospect account in depth, surfaces the signals that make outreach relevant, and produces battlecards that win the conversation.",
    agentCount: 4,
    modeCount: 3,
    modeLabel: "3 output modes",
    badge: null,
    category: "business" as const,
    price: "₹1,999",
    agents: [
      {
        name: "Account Intelligence",
        oneLiner:
          "What the prospect company is actually doing, their real priorities, and why they would buy now.",
      },
      {
        name: "Stakeholder Signal",
        oneLiner:
          "Who the real decision-maker is and what they personally care about.",
      },
      {
        name: "Competitive Battlecard",
        oneLiner:
          "How to position against the competitor already in the account or evaluation.",
      },
      {
        name: "Trigger Research",
        oneLiner:
          "The specific events, hires, and signals that make this the right moment to reach out.",
      },
    ],
    modes: [
      {
        name: "Outbound brief",
        desc: "Everything needed to write cold outreach that sounds like you already know them.",
      },
      {
        name: "Discovery prep",
        desc: "Deep account context for a first call — what to ask, what they care about.",
      },
      {
        name: "Battlecard",
        desc: "Structured competitive positioning for a head-to-head evaluation.",
      },
    ],
    exampleBrief:
      "Run Coryant Sales on this brief: I am reaching out to the Head of Operations at a 200-person logistics company in Pune. They recently hired 3 new ops managers. Investigate the account, find the relevant trigger signals, and help me write outreach that lands.",
    avgRuntime: "10-15 min",
  },
  "supply-chain": {
    slug: "supply-chain",
    name: "Coryant Supply Chain",
    index: "08 / 10",
    tagline: "Logistics market intelligence, supplier landscape analysis, and operational risk mapping.",
    description:
      "Built for ops leads, procurement teams, and supply chain consultants. Investigates supplier landscapes, logistics market dynamics, risk signals, and the intelligence needed to make procurement and distribution decisions with confidence.",
    agentCount: 5,
    modeCount: 2,
    modeLabel: "2 output modes",
    badge: null,
    category: "business" as const,
    price: "₹1,999",
    agents: [
      {
        name: "Supplier Landscape",
        oneLiner:
          "Who the real suppliers are, what their actual capacity and reliability signals look like.",
      },
      {
        name: "Logistics Market",
        oneLiner:
          "Current market rates, carrier dynamics, and route-specific intelligence.",
      },
      {
        name: "Risk Signal",
        oneLiner:
          "Geopolitical, regulatory, and operational risk signals that affect this supply chain.",
      },
      {
        name: "Competitive Ops",
        oneLiner:
          "How comparable companies structure their supply chain and what their choices reveal.",
      },
      {
        name: "Cost Intelligence",
        oneLiner:
          "Realistic cost benchmarks and where the real savings opportunities exist.",
      },
    ],
    modes: [
      {
        name: "Procurement brief",
        desc: "Intelligence to support a supplier selection or contract negotiation decision.",
      },
      {
        name: "Risk assessment",
        desc: "A structured risk map for a specific route, supplier, or supply chain decision.",
      },
    ],
    exampleBrief:
      "Run Coryant Supply Chain on this brief: We are a D2C brand importing packaging materials from China. Investigate the current supplier landscape, logistics costs for this route, and what risk signals we should be tracking in the next 6 months.",
    avgRuntime: "12-18 min",
  },
  tutor: {
    slug: "tutor",
    name: "Coryant Tutor",
    index: "09 / 10",
    tagline: "Academic research intelligence, curriculum analysis, and learning strategy — for educators, researchers, and serious students.",
    description:
      "Built for tutors, academics, and research students. Investigates the academic landscape of a topic, surfaces the key papers and debates, maps the curriculum context, and produces research-ready intelligence for teaching or writing.",
    agentCount: 4,
    modeCount: 2,
    modeLabel: "2 output modes",
    badge: null,
    category: "knowledge" as const,
    price: "₹1,999",
    agents: [
      {
        name: "Academic Landscape",
        oneLiner:
          "The current state of academic knowledge on a topic — key papers, debates, and consensus.",
      },
      {
        name: "Curriculum Context",
        oneLiner:
          "How this topic sits within a curriculum and what the pedagogical best practices are.",
      },
      {
        name: "Research Signal",
        oneLiner:
          "The frontier questions and gaps in current research worth exploring.",
      },
      {
        name: "Source Quality",
        oneLiner:
          "Which sources are authoritative, which are contested, and what to cite with confidence.",
      },
    ],
    modes: [
      {
        name: "Teaching prep",
        desc: "Intelligence structured for planning a lesson, lecture, or curriculum unit.",
      },
      {
        name: "Research brief",
        desc: "A structured research landscape for writing a paper, thesis, or literature review.",
      },
    ],
    exampleBrief:
      "Run Coryant Tutor on this brief: I am preparing a university-level lecture on the ethics of AI in healthcare. Investigate the current academic debate, the key papers I should read and assign, the contested questions worth discussing, and how to frame this for a final-year undergraduate audience.",
    avgRuntime: "10-15 min",
  },
  "real-estate": {
    slug: "real-estate",
    name: "Coryant Real Estate",
    index: "10 / 10",
    tagline: "Property market intelligence, investment analysis, and regulatory landscape for real estate professionals and investors.",
    description:
      "Built for real estate agents, property investors, and asset managers. Investigates local market dynamics, comparable transactions, regulatory environment, and the specific intelligence needed to make a property decision with confidence.",
    agentCount: 4,
    modeCount: 2,
    modeLabel: "2 output modes",
    badge: null,
    category: "knowledge" as const,
    price: "₹1,999",
    agents: [
      {
        name: "Market Intelligence",
        oneLiner:
          "Real price trends, demand signals, and where the local market is actually heading.",
      },
      {
        name: "Comparable Analysis",
        oneLiner:
          "What comparable properties have actually transacted at and what drives the variance.",
      },
      {
        name: "Regulatory Landscape",
        oneLiner:
          "RERA, zoning, and regulatory signals relevant to this property or market.",
      },
      {
        name: "Investment Signal",
        oneLiner:
          "The specific indicators that determine whether this is the right asset and moment.",
      },
    ],
    modes: [
      {
        name: "Investment brief",
        desc: "Intelligence to support a buy, sell, or hold decision on a specific property or market.",
      },
      {
        name: "Client advisory",
        desc: "Market intelligence structured for presenting to a buyer or seller client.",
      },
    ],
    exampleBrief:
      "Run Coryant Real Estate on this brief: I am evaluating a residential investment in Pune's Hinjewadi micro-market. Investigate current price trends, what comparable 2BHK units have transacted at in the last 6 months, the RERA status of the project, and whether the rental yield story is real or overstated.",
    avgRuntime: "10-15 min",
  },
} as const;

export type PackSlug = keyof typeof PACKS;
export type Pack = (typeof PACKS)[PackSlug];

export type PackCategory = "business" | "roles" | "knowledge";

export const CATEGORY_LABELS: Record<PackCategory, string> = {
  business: "Business Functions",
  roles: "Professional Roles",
  knowledge: "Knowledge Domains",
};

export const CATEGORY_DESCRIPTIONS: Record<PackCategory, string> = {
  business: "GTM, Sales, PM, Content, Supply Chain, Career",
  roles: "Founders Associate, Chartered Accountant",
  knowledge: "Tutor and Academic Research, Real Estate",
};
