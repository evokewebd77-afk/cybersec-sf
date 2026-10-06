export const vapt = {
  badge: "APPLICATION SECURITY TESTING",
  title: "Application Security Testing",
  titleAccent: "Secure Every Line of Code.",
  heroQuote:
    "Applications are the primary attack surface for cybercriminals. A single vulnerability can lead to data breaches, account takeovers, financial fraud, API abuse, or full system compromise.",

  whyCritical: {
    eyebrow: "WHY IT MATTERS",
    title: "Why Application Testing is",
    highlight: "Critical Today",
    lead:
      "If your application is live, it is already under attack. A hybrid model combining automation with expert manual penetration testing ensures maximum coverage.",
    cards: [
      {
        icon: ["M12 2l8 4v6c0 5-3.5 9.7-8 10-4.5-.3-8-5-8-10V6l8-4z"],
        title: "Detect vulnerabilities before attackers exploit them",
      },
      {
        icon: ["M8 11V7a4 4 0 018 0v4", "M6 11h12v9H6z"],
        title: "Protect sensitive user and business data",
      },
      {
        icon: ["M6 2h9l5 5v15H6z", "M14 2v6h6"],
        title: "Ensure secure authentication & authorization",
      },
      {
        icon: ["M13 2L3 14h7l-1 8 10-12h-7l1-8z"],
        title: "Prevent logic flaws and misuse scenarios",
      },
      {
        icon: ["M12 2c3 1.5 6 4 6 8l-3 3-3-3-3 3-3-3c0-4 3-6.5 6-8z"],
        title: "Achieve compliance with Global Security standards",
      },
    ],
  },

  coverage: {
    title: "What We",
    highlight: "Cover",
    cards: [
      {
        title: "Authentication & Session Testing",
        desc: "Identify weak login systems, session flaws, and improper access control mechanisms.",
        points: [
          "Brute force and credential stuffing attacks",
          "Session hijacking and fixation vulnerabilities",
          "Multi-factor authentication bypass testing",
        ],
      },
      {
        title: "OWASP Top 10 Coverage",
        desc: "Full coverage of the most critical web application Security risks.",
        points: [
          "SQL Injection, XSS, and CSRF vulnerabilities",
          "Insecure deserialization and XXE attacks",
          "Security misconfiguration and component flaws",
        ],
      },
      {
        title: "API & Business Logic Testing",
        desc: "Deep testing of API endpoints and complex business workflows for hidden vulnerabilities.",
        points: [
          "REST/GraphQL API authentication flaws",
          "Rate limiting, token leakage, and mass assignment",
          "Business logic and workflow exploitation",
        ],
      },
      {
        title: "Cloud & Infrastructure Testing",
        desc: "Assess cloud-hosted web applications for misconfigurations and exposure risks.",
        points: [
          "AWS, Azure, GCP misconfiguration checks",
          "IAM role and permission policy review",
          "Serverless and container Security assessment",
        ],
      },
    ],
  },

  approach: {
    eyebrow: "Our Approach",
    title: "Our Testing",
    highlight: "Approach",
    subtitle:
      "Application testing matters for everyone who depends on working software. If your application handles users or data, Security testing is essential.",
    steps: [
      {
        title: "Scoping & Asset Identification",
        desc: "Define targets, environments, testing boundaries, and rules of engagement.",
      },
      {
        title: "Automated Scanning",
        desc: "Quickly identify known vulnerabilities using industry-grade automated tools.",
      },
      {
        title: "Manual Penetration Testing",
        desc: "Expert-led testing to uncover deep, hidden, and chained vulnerabilities.",
      },
      {
        title: "Exploitation Simulation",
        desc: "Simulate real-world attacks to validate the impact of discovered vulnerabilities.",
      },
      {
        title: "Reporting & Remediation",
        desc: "Clear, actionable, audit-ready reports with prioritized fix guidance.",
      },
      {
        title: "Retesting & Validation",
        desc: "Verify all fixes are properly implemented and all Security gaps are closed.",
      },
    ],
    highlightPoints: [
      "We find vulnerabilities that automated tools always miss through expert-led manual penetration testing.",
      "Real-World Attack Simulation",
    ],
  },

  report: {
    title: "What You Get in the",
    highlight: "Report",
    lead: "Application testing matters for everyone who depends on working software. If your application handles users or data, Security testing is essential.",
    items: [
      "Executive summary for management",
      "Detailed technical vulnerability findings",
      "Risk severity with CVSS scoring",
      "Proof of Concept (PoC) screenshots & evidence",
      "Step-by-step remediation guidance",
      "Compliance mapping (OWASP, ISO 27001, NIST, HIPAA)",
      "Retesting support after all fixes",
    ],
  },

  whoNeeds: {
    title: "Who Needs",
    highlight: "Application Testing",
    lead:
      "Choose the right Security testing plan for your application's specific needs and scale.",
    items: [
      "SaaS & Startup Products",
      "E-commerce Platforms",
      "FinTech & Payment Apps",
      "Healthcare Applications",
      "Enterprise Web Portals",
      "API-based Platforms",
    ],
  },

  choose: {
    items: [
      {
        title: "Deep Manual Testing",
        desc: "We find vulnerabilities that automated tools always miss through expert-led manual penetration testing.",
      },
      {
        title: "Real-World Attack Simulation",
        desc: "Clear and actionable reports — no confusion, only solutions.",
      },
      {
        title: "Clear & Actionable Reports",
        desc: "Reports are written for both technical teams and management.",
      },
      {
        title: "Compliance Ready",
        desc: "Aligned with OWASP, ISO 27001, NIST, HIPAA, and PCI-DSS to meet your audit requirements.",
      },
    ],
  },

  plans: [
    {
      kicker: "App Testing",
      name: "Starter (VAPT)",
      tagline: "Standard Protection",
      price: "$400",
      period: "/ target / month",
      targets: "1 Web / Mobile / API / IP",
      bestFor: "Single application testing",
      cta: "Start Assessment",
      features: [
        { label: "Single application testing" },
        { label: "Comprehensive vulnerability scanning" },
        { label: "Manual Security verification" },
        { label: "Critical & high-risk focus" },
        { label: "Standard PDF report" },
        { label: "Email support" },
      ],
    },
    {
      kicker: "App Testing",
      name: "Growth (VAPT)",
      tagline: "Advanced Security",
      price: "$800",
      period: "/ 2 targets / month",
      targets: "2 Web / Mobile / API / IP",
      bestFor: "Growing products & SMBs",
      popular: true,
      cta: "Get Full Coverage",
      features: [
        { label: "Manual exploitation & PoC" },
        { label: "Business logic flaw testing" },
        { label: "Retesting (within 15 days)" },
        { label: "Priority support" },
        { label: "Advanced compliance mapping" },
      ],
    },
    {
      kicker: "App Testing",
      name: "Enterprise",
      tagline: "total Security Suite",
      price: "Custom",
      targets: "Multi-system / Network",
      bestFor: "Large Scale Infrastructure",
      cta: "Contact Sales",
      features: [
        { label: "Network-wide audits" },
        { label: "Advanced penetration testing" },
        { label: "Source code review (optional)" },
        { label: "Compliance mapping (OWASP)" },
        { label: "Dedicated Security expert" },
      ],
    },
  ],
};
