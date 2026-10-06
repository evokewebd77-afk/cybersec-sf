export const aiml = {
  badge: "AI / ML SECURITY TESTING",
  title: "Secure, Trust, and Govern Your AI Systems",
  titleAccent: "Before They Fail in the Real World",

  whatIs: {
    eyebrow: "UNDERSTANDING AI/ML SECURITY",
    lead: "AI/ML Security Testing is a structured assessment of artificial intelligence systems, machine learning models, and supporting infrastructure to identify vulnerabilities that could impact:",
    pillars: [
      { icon: "M8 10V7a4 4 0 018 0v3", label: "Security" },
      { icon: "M8 10V7a4 4 0 018 0v3", label: "Privacy" },
      { icon: "M12 2l10 18H2L12 2z", label: "Safety" },
      { icon: "M12 3v18M5 7h14M7 21h10", label: "Fairness" },
      { icon: "M12 8v4l3 2", label: "Reliability" },
      { icon: "M12 7v5l3 2", label: "Regulatory compliance" },
    ],
    note: "Unlike traditional applications, AI systems are vulnerable to model-specific attacks such as data poisoning, adversarial inputs, model extraction, prompt injection, and bias exploitation.",
  },

  why: {
    title: "Why AI/ML Security Testing is",
    highlight: "Essential",
    lead: "AI systems increasingly influence financial decisions, healthcare outcomes, hiring, surveillance, and critical infrastructure. A single weakness can lead to:",
    risks: [
      { icon: "M12 2l8 4v6c0 5-3.5 9.7-8 10-4.5-.3-8-5-8-10V6l8-4z", label: "Manipulated or unsafe AI decisions" },
      { icon: "M12 8v3M12 13v3M8 12h3M13 12h3", label: "Leakage of sensitive or personal data" },
      { icon: "M4 5v6c0 2 16 2 16 0V5M4 11v6c0 2 16 2 16 0v-6", label: "Intellectual property theft (model extraction)" },
      { icon: "M9 12l2 2 4-4", label: "Bias and discrimination risks" },
      { icon: "M12 2l10 18H2L12 2z", label: "Regulatory penalties (EU AI Act, GDPR)" },
      { icon: "M12 3a9 9 0 100 18 9 9 0 000-18z", label: "Loss of trust and reputational damage" },
    ],
    closing: "For AI, security, safety, and trust go hand in hand.",
  },

  services: {
    title: "Our AI/ML Security",
    highlight: "Testing Services",
    lead: "Comprehensive security assessment for your entire AI lifecycle.",
    cards: [
      {
        title: "Data & Training Pipeline Security",
        desc: "Comprehensive data Security and integrity assessment.",
        points: [
          "Data poisoning and contamination analysis",
          "Unauthorized data access detection",
          "Privacy leakage in training datasets",
          "Data lineage and integrity validation",
          "Bias and imbalance risk identification",
        ],
      },
      {
        title: "Model Security & Robustness Testing",
        desc: "Deep model Security and resilience evaluation.",
        points: [
          "Adversarial attack resistance testing",
          "Model inversion and membership inference risks",
          "Model extraction and theft simulation",
          "Overfitting and memorization analysis",
          "Explainability and robustness validation",
        ],
      },
      {
        title: "Generative AI & LLM Security",
        desc: "Specialized testing for GenAI and LLM systems.",
        points: [
          "Prompt injection and jailbreak testing",
          "Unsafe output and hallucination risks",
          "Training data leakage analysis",
          "Input/output filtering effectiveness",
          "Abuse and misuse scenario simulation",
        ],
      },
      {
        title: "AI API & Application Security",
        desc: "API and application layer security testing.",
        points: [
          "AI inference API authentication and authorization",
          "Rate limiting and abuse prevention",
          "Input validation and output sanitization",
          "Business logic abuse in AI workflows",
          "Model access control enforcement",
        ],
      },
      {
        title: "MLOps, Cloud & Infrastructure Security",
        desc: "Infrastructure and deployment pipeline security.",
        points: [
          "Model storage and artifact protection",
          "CI/CD and MLOps pipeline security",
          "Cloud misconfiguration detection",
          "Secure deployment and rollback validation",
        ],
      },
      {
        title: "Governance, Ethics & Compliance",
        desc: "AI governance and regulatory compliance assessment.",
        points: [
          "Risk classification (EU AI Act readiness)",
          "Transparency and explainability controls",
          "Human-in-the-loop validation",
          "Auditability and logging review",
          "Incident response preparedness for AI failures",
        ],
      },
    ],
  },

  methodology: {
    title: "How We Perform",
    highlight: "AI/ML Security Testing",
    lead: "A risk-based, lifecycle-driven testing approach tailored for AI systems.",
    steps: [
      {
        title: "AI System Scoping",
        desc: "Use-case classification and system mapping. AI-specific attack vector analysis.",
      },
      {
        title: "Automated Testing",
        desc: "Automated AI security scanning.",
      },
      {
        title: "Manual Assessment",
        desc: "Deep manual security evaluation. Controlled misuse and impact validation.",
      },
      {
        title: "Reporting & Guidance",
        desc: "Risk scoring and remediation roadmap.",
      },
    ],
  },

  standards: {
    title: "Standards, Frameworks &",
    highlight: "Regulations Covered",
    lead: "Our AI/ML Security Testing aligns with leading global AI Security and governance frameworks. This ensures your AI systems are secure, trustworthy, and regulation-ready.",
    items: [
      "OWASP Top 10 for Large Language Model Applications",
      "OWASP AI Security & Privacy Guidance",
      "NIST AI Risk Management Framework (AI RMF)",
      "ISO/IEC 23894 (AI Risk Management)",
      "MITRE ATLAS (Adversarial Threat Landscape for AI Systems)",
      "CVE & CVSS (where applicable)",
      "EU AI Act (risk-based readiness)",
      "GDPR & DPDPA data protection requirements",
    ],
  },

  report: {
    title: "What You Receive After the Assessment",
    lead: "You receive a clear, actionable, and executive-ready AI Security Report, suitable for engineering teams, compliance teams, and leadership.",
    items: [
      "Executive summary and risk overview",
      "AI-specific vulnerability findings",
      "Model, data, and API risk analysis",
      "Proof of Concept (PoC) demonstrations",
      "Practical mitigation and governance guidance",
      "Regulatory and framework mapping",
      "Retesting support after remediation",
    ],
  },

  whoShould: {
    title: "Who Should Opt for",
    lead: "AI security is critical for startups, mid-size companies, and enterprises. Early testing reduces long-term risk, compliance cost, and reputational damage.",
    items: [
      "Startups building AI-powered applications and platforms",
      "AI product and platform providers",
      "Enterprises deploying AI-driven systems",
      "FinTech, HealthTech, and InsurTech companies",
      "SaaS platforms using ML models",
      "Generative AI and LLM-based applications",
      "Startups preparing for EU market entry",
    ],
  },

  choose: {
    lead:
      "If your system learns, predicts, or generates decisions, AI security testing is essential.",
    items: [
      {
        title: "Specialized expertise in AI, ML, and GenAI security",
        desc: "Deep knowledge of AI-specific attack vectors and defenses.",
      },
      {
        title: "Manual testing beyond automated AI scanners",
        desc: "EU AI Act and governance-focused assessments.",
      },
      {
        title: "Clear, actionable, and regulator-friendly reports",
        desc: "Compliance-ready reports aligned with EU regulations. Executive-ready documentation for all stakeholders.",
      },
      {
        title: "End-to-end support: security, privacy, and trust",
        desc: "Comprehensive support throughout the AI lifecycle. Validation of fixes at no additional cost.",
      },
    ],
    closing: "We focus on secure AI that works safely in the real world.",
  },

  plans: [
    {
      kicker: "AI/ML Security",
      name: "Starter (AI Scan)",
      tagline: "Vulnerability Discovery",
      price: "Free",
      bestFor: "Basic model security validation",
      popular: true,
      cta: "Start Testing",
      features: [
        { label: "Adversarial attack resistance check" },
        { label: "Model inversion risk assessment" },
        { label: "Data pipeline security scan" },
      ],
    },
    {
      kicker: "AI/ML Security",
      name: "Growth (AI Shield)",
      tagline: "Advanced Trust & Safety",
      price: "Custom",
      bestFor: "GenAI & Business Critical ML",
      cta: "Get Full Trust",
      features: [
        { label: "Prompt injection & jailbreak testing" },
        { label: "Data poisoning simulation" },
        { label: "Bias & fairness assessment" },
        { label: "Retesting support" },
      ],
    },
    {
      kicker: "AI/ML Security",
      name: "AI Governance Suite",
      tagline: "Organization-wide AI Fleet",
      price: "Custom",
      bestFor: "Large Scale AI Deployments",
      cta: "Contact Sales",
      features: [
        { label: "AI system-wide penetration testing" },
        { label: "EU AI Act readiness audit" },
        { label: "Continuous model monitoring" },
        { label: "Dedicated AI security expert" },
      ],
    },
  ],

  faqs: [
    {
      q: "What is AI/ML Security Testing?",
      a: "AI/ML Security Testing is the process of assessing artificial intelligence and machine learning systems for security, privacy, safety, and compliance risks. It evaluates data pipelines, models, APIs, applications, and infrastructure to ensure AI systems are trustworthy and resilient against misuse or attacks.",
    },
    {
      q: "How is AI/ML Security Testing different from traditional VAPT?",
      a: "Traditional VAPT focuses on applications and infrastructure. AI/ML Security Testing addresses AI-specific risks, such as data poisoning, adversarial inputs, model theft, prompt injection (for GenAI), bias, explainability gaps, and unsafe outputs.",
    },
    {
      q: "Do you hack or manipulate our AI system?",
      a: "No. All testing is ethical, authorized, and controlled. We simulate real-world attack scenarios without damaging models, corrupting production data, or disrupting operations.",
    },
    {
      q: "What parts of an AI system are tested?",
      a: "We can assess training data and data pipelines, machine learning models and algorithms, generative AI and LLM interfaces, inference APIs and applications, MLOps pipelines and cloud infrastructure, and access controls, logging, and governance mechanisms.",
    },
    {
      q: "What are the common AI security risks you test for?",
      a: "We test for risks such as data poisoning and contamination, adversarial attacks on models, model inversion and extraction, prompt injection and jailbreaks (GenAI), privacy leakage and memorization, and bias and unsafe decision outcomes.",
    },
    {
      q: "Which standards and frameworks do you follow?",
      a: "Our AI/ML Security Testing aligns with OWASP Top 10 for LLM Applications, OWASP AI Security & Privacy Guidance, NIST AI Risk Management Framework (AI RMF), ISO/IEC 42001 (AI Management Systems), ISO/IEC 23894 (AI Risk Management), MITRE ATLAS, and GDPR and EU AI Act readiness.",
    },
    {
      q: "Is AI/ML Security Testing required for EU compliance?",
      a: "While not always legally mandatory, AI/ML Security Testing is strongly recommended for organizations subject to the EU AI Act, GDPR, and sector-specific regulations. It helps demonstrate due diligence, risk management, and trustworthy AI practices.",
    },
    {
      q: "Will AI/ML testing affect production systems?",
      a: "No. Testing is carefully planned and typically conducted in staging or controlled environments. When production testing is required, it is performed safely with strict safeguards.",
    },
    {
      q: "How long does an AI/ML Security Assessment take?",
      a: "The timeline depends on scope: Basic AI model or API testing: 7\u201310 days. Full AI lifecycle and GenAI testing: 10\u201320 days.",
    },
    {
      q: "What do we receive after the assessment?",
      a: "You receive a detailed AI Security Report including executive summary, AI-specific risk findings, technical and business impact analysis, Proof of Concept (PoC) evidence, remediation and governance recommendations, and framework and compliance mapping.",
    },
    {
      q: "Is this relevant for Generative AI and LLMs?",
      a: "Yes. We specifically test Generative AI and LLM systems for prompt injection, jailbreaks, data leakage, hallucination risks, and abuse scenarios.",
    },
    {
      q: "Who should opt for AI/ML Security Testing?",
      a: "AI/ML Security Testing is ideal for AI product companies and SaaS platforms, enterprises deploying AI in decision-making, FinTech, HealthTech, and InsurTech organizations, startups preparing for EU market entry, and organizations using GenAI or automation at scale.",
    },
    {
      q: "How often should AI/ML Security Testing be performed?",
      a: "We recommend before AI system deployment, after major model updates or retraining, when introducing new data sources, and before regulatory audits or market expansion.",
    },
    {
      q: "Do you provide remediation and retesting support?",
      a: "Yes. We provide practical remediation guidance and retesting support to validate that identified risks have been properly addressed.",
    },
    {
      q: "Is AI/ML Security Testing only for large enterprises?",
      a: "No. AI security is critical for startups, mid-size companies, and enterprises. Early testing reduces long-term risk, compliance cost, and reputational damage.",
    },
  ],
};