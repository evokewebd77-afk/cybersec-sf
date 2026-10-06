export const drone = {
  badge: "DRONE SECURITY TESTING",
  title: "Secure Your Drone Ecosystem",
  titleAccent: "Before It Becomes a Cyber Risk",
  subtitle:
    "Our goal is simple: ensure your drones are secure, compliant, and safe to operate in real-world environments.",

  whatIs: {
    eyebrow: "UNDERSTANDING DRONE SECURITY",
    title: "What is",
    highlight: "Drone Security Testing",
    lead: "Drone Security Testing is a comprehensive cybersecurity assessment of unmanned aerial vehicle (UAV) systems and their supporting infrastructure. Find vulnerabilities in drones before they can be exploited.",
    layers: [
      { icon: "drone", label: "Drone", desc: "Drone hardware and firmware" },
      {
        icon: "settings",
        label: "Controller",
        desc: "Ground control stations and operator applications",
      },
      {
        icon: "wifi",
        label: "WiFi",
        desc: "Communication channels (RF, Wi-Fi, LTE/5G)",
      },
      {
        icon: "cloud",
        label: "Cloud",
        desc: "Cloud platforms, APIs, and backend services",
      },
    ],
    goal:
      "By simulating real-world attack scenarios, we uncover weaknesses that could be exploited and provide clear remediation guidance to strengthen your drone security posture.",
  },

  importance: {
    eyebrow: "CRITICAL IMPORTANCE",
    title: "Why Drone Security Testing is",
    highlight: "Important",
    lead: "A single security flaw in a drone system can lead to:",
    risks: [
      "Loss of control or drone seizure",
      "GPS spoofing or signal manipulation",
      "Leakage of video, telemetry, or location data",
      "Unauthorized firmware modification",
      "Regulatory and compliance failures",
    ],
    benefitsLead: "Drone Security Testing helps organizations:",
    benefits: [
      "Protect sensitive data and operations",
      "Prevent unauthorized drone access or misuse",
      "Ensure safe and reliable drone operations",
      "Meet regulatory and industry security requirements",
      "Build trust with customers and regulators",
    ],
    closing:
      "In high-risk environments, drone security is mission-critical.",
  },

  services: {
    title: "Our Drone Security",
    highlight: "Testing Services",
    lead:
      "Comprehensive security assessment for your entire drone ecosystem.",
    cards: [
      {
        title: "Drone Hardware & Firmware Security",
        desc: "Complete firmware and hardware security assessment.",
        points: [
          "Firmware analysis and integrity validation",
          "Secure boot and firmware update mechanism testing",
          "Debug ports and hardware exposure checks",
          "Storage and memory protection assessment",
        ],
      },
      {
        title: "Communication & Control Link Testing",
        desc: "Secure communication protocols and signal integrity.",
        points: [
          "RF, Wi-Fi, LTE/5G communication security testing",
          "Encryption and authentication validation",
          "Command injection and replay attack testing",
          "GPS spoofing and signal interference risk analysis",
        ],
      },
      {
        title: "Ground Control & Mobile Application Security",
        desc: "Mobile and desktop control software testing.",
        points: [
          "Authentication, authorization, and session management",
          "Insecure local storage and API misuse",
          "Reverse engineering and tampering risks",
        ],
      },
      {
        title: "Backend, Cloud & API Security",
        desc: "Cloud infrastructure and API security assessment.",
        points: [
          "API authentication and authorization testing",
          "Cloud configuration and access control review",
          "Data exposure and logging gaps",
          "Identity and access management (IAM) assessment",
        ],
      },
    ],
  },

  methodology: {
    lead: "CyberSec SF follows a hybrid testing methodology that combines automated analysis with in-depth manual testing.",
    steps: [
      {
        title: "Threat Modeling",
        desc: "Drone ecosystem mapping and boundaries. Attack surface analysis and risk identification.",
      },
      {
        title: "Automated & Manual Testing",
        desc: "Automated and manual security testing.",
      },
      {
        title: "Controlled Exploitation",
        desc: "Impact validation and proof of concept.",
      },
      {
        title: "Risk Scoring",
        desc: "Risk scoring using CVSS.",
      },
      {
        title: "Reporting & Retesting",
        desc: "Detailed reporting with remediation guidance and retesting support.",
      },
    ],
  },

  compliance: [
    { code: "ETSI", title: "IoT Cybersecurity Standard" },
    { code: "NIST", title: "NIST IoT Cybersecurity Framework" },
    { code: "NIST", title: "NIST SP 800-53" },
    { code: "ISO", title: "ISO/IEC 27001 & ISO/IEC 27002" },
    { code: "IEC", title: "ISO/IEC 62443" },
    { code: "MITRE", title: "IoT & OT Security" },
    { code: "ATT&CK", title: "IoT & Enterprise" },
    { code: "CVE", title: "CVE & CVSS Risk Scoring" },
  ],

  report: {
    title: "What You Get After the Assessment",
    lead: "You receive a clear, actionable, and audit-ready Drone Security Report, designed for both technical teams and leadership.",
    items: [
      "Detailed vulnerability findings",
      "Risk severity and impact analysis",
      "Proof of Concept (PoC) evidence",
      "Step-by-step remediation recommendations",
      "Compliance mapping (OWASP IoT, ETSI EN 303 645)",
    ],
  },

  whoShould: {
    title: "Who Should Opt for",
    lead: "Drone Security Testing is recommended for:",
    items: [
      "Drone manufacturers and OEMs",
      "Drone operators and service providers",
      "Logistics and delivery companies",
      "Agriculture and industrial drone users",
      "Smart city and surveillance projects",
      "Government, defense, and public safety agencies",
      "Research institutions and technology startups",
    ],
  },

  choose: {
    lead: "If your drones are connected, autonomous, or data-driven, security testing is essential.",
    items: [
      {
        title: "Specialized expertise in IoT and drone security",
        desc: "Deep knowledge of drone and IoT security testing.",
      },
      {
        title: "Manual testing beyond automated scanners",
        desc: "In-depth manual assessment beyond automated tools.",
      },
      {
        title: "Clear, practical, and compliance-focused reports",
        desc: "Actionable reports aligned with industry standards.",
      },
      {
        title: "Fast turnaround with high testing depth",
        desc: "Quick assessment without compromising quality.",
      },
      {
        title: "Support from assessment to remediation",
        desc: "Ongoing support throughout the security process.",
      },
    ],
    extra: ["Verification of fixes at no additional cost."],
  },

  plans: [
    {
      kicker: "Drone Security",
      name: "Starter (Drone)",
      tagline: "Basic UAV Audit",
      price: "$1000",
      period: "/ drone / month",
      targets: "1 Drone Unit / Model",
      bestFor: "Individual drone security check",
      cta: "Start Assessment",
      features: [
        { label: "Hardware & debug port analysis" },
        { label: "Firmware integrity verification" },
        { label: "Basic communication link testing" },
        { label: "Standard security report" },
      ],
    },
    {
      kicker: "Drone Security",
      name: "Growth (Drone)",
      tagline: "Full Mission Security",
      price: "$2000",
      period: "/ ecosystem / month",
      targets: "Drone + GCS + Mobile App",
      bestFor: "Commercial drone platforms",
      popular: true,
      cta: "Complete Security",
      features: [
        { label: "RF & signal interference testing" },
        { label: "GPS spoofing risk analysis" },
        { label: "Retesting included" },
      ],
    },
    {
      kicker: "Drone Security",
      name: "Enterprise",
      tagline: "Fleet Security Suite",
      price: "Custom",
      targets: "Multi-Model / Fleet Deployment",
      bestFor: "Enterprise & Defense Fleets",
      cta: "Contact Sales",
      features: [
        { label: "Fleet-wide security assessment" },
        { label: "Advanced signal exploitation" },
        { label: "Custom mission risk analysis" },
        { label: "Compliance with aviation standards" },
        { label: "Dedicated Security Specialist" },
      ],
    },
  ],

  faqs: [
    {
      q: "Do you hack our drones?",
      a: "No. We do not hack drones illegally or unsafely. All drone security testing is performed with proper authorization and defined scope. We conduct ethical, controlled testing to simulate real-world attacks without damaging hardware or disrupting operations.",
    },
    {
      q: "Do you hack or damage the drone during testing?",
      a: "No. All testing is ethical, authorized, and controlled. We simulate real-world attacks without damaging the drone or interrupting operations.",
    },
    {
      q: "What parts of a drone system are tested?",
      a: "We can test: Drone firmware and hardware interfaces, communication links (RF, Wi-Fi, LTE/5G), ground control stations and mobile apps, and backend servers, APIs, and cloud services.",
    },
    {
      q: "Why is drone security important?",
      a: "Drones are connected IoT devices. Security gaps can lead to drone seizures, GPS spoofing, data leakage, unauthorized firmware changes, and compliance violations.",
    },
    {
      q: "Which standards and compliances do you follow?",
      a: "Our assessments align with: OWASP Top 10 for IoT, ETSI EN 303 645, NIST IoT Cybersecurity Framework, and CVE & CVSS risk scoring.",
    },
    {
      q: "Is Drone Security Testing mandatory for compliance?",
      a: "For many industries and government projects, yes. Compliance with standards like ETSI EN 303 645 is increasingly required for safe and trusted drone deployments.",
    },
    {
      q: "How long does a Drone Security Assessment take?",
      a: "The timeline depends on the scope: Basic drone & app testing: 7-10 days. Full ecosystem testing: 10-18 days.",
    },
    {
      q: "Will drone operations be affected during testing?",
      a: "No. Testing is planned to avoid flight disruption, data loss, or operational downtime. Critical tests are performed in safe and controlled environments.",
    },
    {
      q: "What will we receive after the assessment?",
      a: "You will receive a detailed security report including: Executive summary, vulnerability findings, risk severity and impact, Proof of Concept (PoC), remediation recommendations, and compliance mapping (OWASP IoT & ETSI EN 303 645).",
    },
    {
      q: "Who should opt for Drone Security Testing?",
      a: "Drone Security Testing is ideal for: Drone manufacturers and OEMs, drone operators and service providers, logistics, surveillance, and inspection companies, and government, defense, and smart city projects.",
    },
  ],
};