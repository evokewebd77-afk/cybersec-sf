export const homeStats = [
  { value: "3000+", label: "Threats Mitigated" },
  { value: "500+", label: "Security Audits" },
  { value: "200+", label: "Clients Protected" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

export const heroTestimonial = [
  {
    quote:
      "I am very satisfied with the result and the recommendations of the audit report. It was an eye opener.",
    name: "Col. Sukhpal Singh",
    role: "CEO at Sustainable Futures",
  },
  {
    quote:
      "The false positive rate is remarkably low compared to other tools we have used. The AI powered reporting is a game changer for our Security team.",
    name: "Manish Vig",
    role: "Director of Eurocert",
  },
  {
    quote:
      "The consent management module alone justified our investment. We're fully prepared for DPDPA enforcement.",
    name: "Priya Venkatesh",
    role: "VP of Compliance, Top Healthcare Network",
  },
];

export const testimonials = [
  {
    quote:
      "I am very satisfied with the result and the recommendations of the audit report. It was an eye opener.",
    name: "Col. Sukhpal Singh",
    role: "CEO at Sustainable Futures",
  },
  {
    quote:
      "The false positive rate is remarkably low compared to other tools we have used. The AI powered reporting is a game changer for our Security team.",
    name: "Manish Vig",
    role: "Director of Eurocert",
  },
  {
    quote:
      "DPDPA Cybersec transformed our privacy program from reactive to proactive. The platform's automation saved us hundreds of manual hours.",
    name: "Amit Sharma",
    role: "Chief Privacy Officer, Leading Indian Fintech",
  },
  {
    quote:
      "The consent management module alone justified our investment. We're fully prepared for DPDPA enforcement.",
    name: "Priya Venkatesh",
    role: "VP of Compliance, Top Healthcare Network",
  },
  {
    quote:
      "Enterprise-grade platform with the responsiveness of a startup. Essential for any organization handling Indian consumer data.",
    name: "Rajesh Kumar",
    role: "CISO, Major Indian Bank",
  },
];

export const softwareTestingCards = [
  {
    title: "WAPT (Web Application Penetration Testing)",
    desc: "Public-facing and internal web applications",
    points: [
      "OWASP Top 10 aligned vulnerability assessment",
      "API & microservices Security testing",
      "Authentication, session & access control validation",
    ],
    blocks: [
      {
        title: "Coverage Depth",
        text: "End-to-end testing across input validation, session handling, authentication mechanisms, and secure data processing to identify both common and advanced attack vectors.",
      },
      {
        title: "Operational Excellence",
        text: "Standardized methodologies and well-defined SOPs ensure consistent testing quality, traceable results, and actionable remediation guidance for development teams.",
      },
    ],
    to: "/wapt",
  },
  {
    title: "Application Security Testing (AST)",
    desc: "Mobile applications (Android & iOS)",
    points: [
      "Secure API and backend testing",
      "OWASP Mobile Top 10 vulnerability coverage",
      "Data storage, encryption & communication Security",
    ],
    blocks: [
      {
        title: "Coverage Depth",
        text: "Comprehensive testing across mobile app architecture, API communication, authentication flows, and sensitive data handling to identify Security gaps.",
      },
      {
        title: "Operational Readiness",
        text: "Repeatable testing frameworks, detailed reporting, and clear remediation steps ensure your application is secure, compliant, and ready for production deployment.",
      },
    ],
    to: "/vapt",
  },
];

export const industrySolutions = [
  {
    id: "healthcare",
    label: "Healthcare",
    icon: [
      "M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 10-7.8 7.8l1.1 1L12 21.2l7.7-7.8 1.1-1a5.5 5.5 0 000-7.8z",
      "M3.7 12h4l1.5-3.5L11 16l2.5-6 1.4 2h5.4",
    ],
    summary:
      "Protect patient data and medical systems while ensuring HIPAA compliance and operational continuity.",
    threats: [
      "Ransomware attacks",
      "Medical identity theft",
      "IoT medical device vulnerabilities",
      "Patient data breaches",
    ],
    approach: [
      "HIPAA compliance auditing",
      "Medical device Security",
      "PHI data encryption",
      "Incident response planning",
    ],
    results: [
      "Zero PHI breaches",
      "Secured medical endpoints",
      "45% reduction in phishing success",
    ],
  },
  {
    id: "technology",
    label: "Technology",
    icon: [
      "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3",
      "M7 6h10a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1z",
      "M10 10h4v4h-4z",
    ],
    summary:
      "Protect intellectual property and customer data for SaaS companies and technology providers.",
    threats: [
      "Source code theft",
      "Supply chain attacks",
      "Cloud infrastructure breaches",
      "API vulnerabilities",
    ],
    approach: [
      "DevSecOps integration",
      "Cloud Security posture management",
      "API Security testing",
      "Continuous vulnerability scanning",
    ],
    results: [
      "70% faster vulnerability remediation",
      "SOC 2 Type II certification",
      "Zero critical vulnerabilities in production",
    ],
  },
  {
    id: "education",
    label: "Education",
    icon: [
      "M12 3l9 5-9 5-9-5 9-5z",
      "M6 11v4.5c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5V11",
      "M21 8.5V14",
    ],
    summary:
      "Secure educational institutions and protect student data while enabling safe digital learning.",
    threats: [
      "Ransomware attacks",
      "Student record theft",
      "Research data espionage",
      "DDoS on learning platforms",
    ],
    approach: [
      "FERPA compliance",
      "Campus network Security",
      "End-user awareness training",
      "Multi-factor authentication",
    ],
    results: [
      "FERPA compliance achieved",
      "90% reduction in phishing clicks",
      "Secure remote learning environment",
    ],
  },
];

export const serviceCoverage = [
  {
    title: "Web Application Security Testing",
    desc: "Comprehensive testing aligned with industry standards to uncover every critical web vulnerability.",
    points: [
      "Broken authentication & session management flaws",
      "Access control issues & business logic vulnerabilities",
      "SQL Injection, XSS, and CSRF vulnerabilities",
      "Insecure deserialization and XXE attacks",
      "Security misconfiguration and component flaws",
    ],
  },
  {
    title: "Mobile Application Security Testing",
    desc: "Full Security assessment for Android & iOS apps across storage, encryption, and APIs.",
    points: [
      "Insecure data storage & weak encryption practices",
      "Reverse engineering & app tampering risks",
      "API communication flaws & authentication bypass",
    ],
  },
  {
    title: "API Security Testing",
    desc: "Deep testing of REST & GraphQL APIs for authentication, authorization, and exposure risks.",
    points: [
      "Broken authentication & authorization flaws",
      "Token leakage, rate-limit bypass & injection attacks",
      "Improper data exposure & mass assignment risks",
    ],
  },
  {
    title: "Business Logic Testing",
    desc: "We go beyond traditional scanning to find complex vulnerabilities attackers exploit.",
    points: [
      "Business logic & privilege escalation testing",
      "Payment & transaction manipulation scenarios",
    ],
  },
  {
    title: "Cloud & Infrastructure Security",
    desc: "Cloud & backend Security review (AWS, Azure, GCP) and infrastructure hardening.",
    points: [
      "AWS, Azure, GCP misconfiguration checks",
      "IAM role and permission policy review",
      "Serverless and container Security assessment",
    ],
  },
  {
    title: "Continuous Monitoring",
    desc: "Continuous VAPT & monitoring for external assets, with alerting as new risks appear.",
    points: [
      "Continuous vulnerability scanning",
      "New risk alerting and triage",
    ],
  },
];

export const homeFaqs = [
  {
    q: "What is the cost of SOC 2 and SOC 3 certification in India?",
    a: "SOC 2 and SOC 3 pricing depends on your company's size, scope, and readiness. There's no fixed cost. The best way to know is a quick discussion—we'll guide you with a clear, transparent estimate.",
  },
  {
    q: "Is SOC 2 a one-time thing?",
    a: "No. SOC 2 Type II reports are valid for 12 months and must be renewed annually to maintain compliance and customer trust.",
  },
  {
    q: "Do we really need SOC 2?",
    a: "If you handle customer data—especially as a SaaS, cloud, or tech company—SOC 2 helps you win deals, build trust, and meet client Security requirements.",
  },
  {
    q: "What's the difference between SOC 2 Type I and Type II?",
    a: "Type I checks if your controls are designed correctly. Type II checks if those controls actually work over time. Most customers prefer Type II.",
  },
  {
    q: "What kind of Security testing do you offer?",
    a: "We test web apps, mobile apps, APIs, cloud infrastructure, networks, and IoT devices—covering real-world attack scenarios.",
  },
  {
    q: "Is the VAPT demo really free?",
    a: "Yes. Completely free. No hidden costs. No commitments.",
  },
  {
    q: "Will you hack our application or disrupt our systems?",
    a: "No. All testing is ethical, approved, and safe. We identify risks without causing downtime or data loss.",
  },
  {
    q: "What do we get after testing?",
    a: "A clear report with: identified vulnerabilities, risk impact explained in simple terms, proof of issues found, and easy-to-follow fix recommendations.",
  },
  {
    q: "How is continuous monitoring different from VAPT?",
    a: "VAPT shows your Security at one point in time. Continuous monitoring watches your external assets 24/7 and alerts you as soon as new risks appear.",
  },
  {
    q: "Do you also secure IoT devices?",
    a: "Yes. We test firmware, device communication, cloud connections, and mobile integrations to secure the full IoT ecosystem.",
  },
  {
    q: "How do you protect our data?",
    a: "Your data stays private. We follow strict NDAs, limit access, and never share information with anyone—unless legally required.",
  },
  {
    q: "Will this affect our day-to-day operations?",
    a: "No. Our assessments are planned to be safe, non-intrusive, and business-friendly.",
  },
  {
    q: "Which standards and compliance frameworks do you follow for testing?",
    a: "We use trusted, globally recognized Security standards to make sure our testing is thorough, reliable, and audit-ready. Based on your business and what you need to comply with, we align our testing with frameworks such as OWASP Top 10 & OWASP ASVS – to secure web apps, mobile apps, APIs, and IoT applications; NIST (SP 800-53 / 800-115) – for structured, risk-based Security testing; ISO/IEC 27001 & 27002 – for strong information Security controls and best practice; SOC 2 (Trust Service Criteria) – covering Security, Availability, Confidentiality, and Privacy; ETSI & OWASP IoT Top 10 – for IoT device, firmware, and communication Security. We don't believe in one-size-fits-all Security. That's why we choose the right standards based on your industry, customers, and compliance goals, making testing practical, effective, and not just a checklist exercise.",
  },
  {
    q: "Why choose us?",
    a: "Because we keep Security simple, transparent, and effective—with certified experts and a long-term partnership approach.",
  },
];

export const footerColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "Web Testing", to: "/wapt" },
      { label: "Application Testing", to: "/vapt" },
      { label: "AI/ML Security", to: "/ai-ml-Security" },
      { label: "Drone Testing", to: "/drone-testing" },
      { label: "IoT Security", to: "/iot-Security" },
    ],
  },
  {
    heading: "Frameworks",
    links: [
      { label: "HIPAA", to: "/hipaa-audit" },
      { label: "SOC 2 Audit", to: "/soc-audit" },
      { label: "SOC 3 Audit", to: "/soc3-audit" },
      { label: "ISO 27001", to: "/iso-27001" },
      { label: "ISO 27000", to: "/iso-27000" },
      { label: "ISO 27701", to: "/iso-27701" },
      { label: "DPDPA", to: "/dpdpa" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Trust & Safety", to: "/about" },
      { label: "Contact", to: "/#contact" },
      { label: "Privacy Policy", to: "/privacy-policy" },
    ],
  },
];