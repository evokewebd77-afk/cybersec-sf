export const aiCompliance = {
  badge: "AI COMPLIANCE GUIDE",
  title: "Your intelligent assistant for SOC 2, ISO 27001 & HIPAA readiness.",
  subtitle:
    "Automatically map controls to SOC 2, ISO & HIPAA. AI recommends required evidence in real-time.",

  features: [
    {
      icon: ["M6 2h9l5 5v15H6z", "M14 2v6h6"],
      title: "AI Control Mapping",
      desc: "Map your existing controls to SOC 2, ISO 27001 and HIPAA requirements automatically.",
    },
    {
      icon: ["M8 11V7a4 4 0 018 0v4", "M6 11h12v9H6z"],
      title: "Evidence Suggestions",
      desc: "AI recommends required evidence in real-time so nothing is missed before audit.",
    },
    {
      icon: ["M12 3a9 9 0 100 18 9 9 0 000-18z", "M12 7v5l3 2"],
      title: "Gap Analysis",
      desc: "Detect compliance gaps instantly with AI insights.",
    },
    {
      icon: ["M13 2L3 14h7l-1 8 10-12h-7l1-8z"],
      title: "Audit Readiness Score",
      desc: "Live readiness score for audits.",
    },
  ],

  howItWorks: {
    eyebrow: "HOW AI GUIDE WORKS",
    title: "How It",
    highlight: "Works",
    steps: [
      {
        num: "01",
        title: "Connect Systems",
        desc: "Link your cloud, identity and documentation systems.",
      },
      {
        num: "02",
        title: "AI Analyzes Controls",
        desc: "The guide reads your environment and maps evidence to each control.",
      },
      {
        num: "03",
        title: "Fix Gaps",
        desc: "Prioritised recommendations tell your team exactly what to remediate.",
      },
      {
        num: "04",
        title: "Audit Ready",
        desc: "Export a complete evidence pack for your external auditor.",
      },
    ],
  },

  plans: [
    {
      kicker: "AI Guide",
      name: "Starter",
      tagline: "Readiness Snapshot",
      price: "Custom",
      bestFor: "Teams starting their compliance journey",
      popular: true,
      cta: "Request Demo",
      features: [
        { label: "Readiness score & gap report" },
        { label: "Control mapping overview" },
        { label: "Evidence suggestions" },
      ],
    },
    {
      kicker: "AI Guide",
      name: "Growth",
      tagline: "Continuous Readiness",
      price: "Custom",
      bestFor: "SaaS and technology companies",
      cta: "Request Demo",
      features: [
        { label: "Everything in Starter" },
        { label: "Continuous evidence collection" },
        { label: "SOC 2 / ISO / HIPAA mapping" },
        { label: "Dedicated compliance advisor" },
      ],
    },
    {
      kicker: "AI Guide",
      name: "Enterprise",
      tagline: "Multi-Framework Governance",
      price: "Custom",
      bestFor: "Enterprises and regulated industries",
      cta: "Contact Sales",
      features: [
        { label: "Everything in Growth" },
        { label: "Custom control libraries" },
        { label: "Auditor workspace & SLA" },
      ],
    },
  ],
};