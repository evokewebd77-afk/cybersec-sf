export const iot = {
  badge: "IOT SECURITY",
  title: "IoT Security Testing",
  titleAccent: "Secure Your Connected Devices Before They Become a Cyber Risk",
  subtitle:
    "A hybrid IoT Security testing approach, combining automation with deep manual analysis.",

  whatIs: {
    eyebrow: "UNDERSTANDING IOT SECURITY",
    title: "What is",
    highlight: "IoT Security Testing",
    lead: "A weakness in any one layer can compromise the entire system. Our testing simulates real-world attack scenarios to uncover vulnerabilities and provide clear visibility of risk, impact, and remediation actions.",
    layers: [
      {
        icon: "M4 6h16v12H4z",
        label: "Firmware and operating systems",
      },
      {
        icon: "M2 8h20v2H2zm0 4h20v2H2zm0 4h20v2H2z",
        label: "Wireless and wired communications",
      },
      { icon: "M7 2h10v20H7z", label: "Mobile and web applications" },
      {
        icon: "M6 18h12v-2H6zm-2-4h16v-4H4zm2-6h12V6H6z",
        label: "APIs and cloud Services",
        wide: true,
      },
    ],
  },

  critical: {
    title: "Why IoT Security Testing is",
    highlight: "Critical",
    lead: "IoT devices introduce a new attack surface, often lacking built-in Security controls. A single compromised device can lead to:",
    risks: [
      { icon: "M12 2a5 5 0 015 5v2h2a5 5 0 015 5 5 5 0 01-5 5h-2v2a5 5 0 01-5 5 5 5 0 01-5-5v-2H5a5 5 0 01-5-5 5 5 0 015-5h2V7a5 5 0 015-5z", label: "Unauthorized device control" },
      { icon: "M1 21h22L12 2 1 21z", label: "Operational disruption" },
      { icon: "M4 4h16v16H4z", label: "Data breaches and privacy violations" },
      { icon: "M3 3h18v18H3z", label: "Safety risks" },
      { icon: "M3 3h18v18H3z", label: "Regulatory non-Compliance" },
      { icon: "M3 3h18v18H3z", label: "Loss of customer trust" },
    ],
  },

  Services: {
    title: "Our IoT Security",
    highlight: "Testing Services",
    lead: "Comprehensive Security assessment for your entire IoT ecosystem.",
    cards: [
      {
        title: "Device Hardware & Firmware Security",
        desc: "Firmware extraction and analysis.",
        points: [
          "Secure boot and update mechanism testing",
          "Debug interfaces (UART, JTAG) exposure checks",
          "Hardcoded credentials and secrets detection",
        ],
      },
      {
        title: "Communication & Protocol Security",
        desc: "Wi-Fi, Bluetooth, Zigbee, LoRaWAN, LTE/5G testing.",
        points: [
          "Encryption and key management validation",
          "Man-in-the-middle (MITM) attack simulation",
          "Replay and command injection testing",
          "Device-to-cloud communication analysis",
        ],
      },
      {
        title: "Application & Interface Security",
        desc: "Mobile and web application testing.",
        points: [
          "Web dashboards and admin portals",
          "Authentication and authorization controls",
          "Session management and token handling",
        ],
      },
      {
        title: "Cloud, API & Backend Security",
        desc: "API and application layer Security testing.",
        points: [
          "IAM and privilege assessment",
          "Multi-tenant isolation validation",
          "Data exposure and logging gaps",
        ],
      },
    ],
  },

  methodology: {
    steps: [
      {
        title: "Threat Modeling",
        desc: "IoT ecosystem mapping and boundaries.",
      },
      {
        title: "Automated Analysis",
        desc: "Automated vulnerability scanning and testing.",
      },
      { title: "Manual Testing", desc: "Deep manual Security assessment." },
      {
        title: "Exploitation",
        desc: "Controlled exploitation and impact validation.",
      },
      {
        title: "Reporting",
        desc: "Detailed findings and remediation steps.",
      },
    ],
  },

  Compliance: {
    title: "Standards, Compliance &",
    highlight: "Frameworks Covered",
    lead: "Our IoT Security Testing aligns with globally recognized cyberSecurity and regulatory frameworks. This ensures your IoT product is secure-by-design and Compliance-ready for EU and global markets.",
    items: [
      "ETSI EN 303 645",
      "OWASP Top 10 for IoT",
      "NIST IoT Cybersecurity Framework",
      "ISO/IEC 27001 & 27002",
      "ISO/IEC 62443",
      "CVE & CVSS Risk Scoring",
    ],
  },

  report: {
    title: "What You Receive After Testing",
    lead: "You receive a clear, actionable, audit-ready IoT Security Report, suitable for both engineering teams and leadership.",
    items: [
      "Detailed technical vulnerability findings",
      "Risk severity and impact analysis",
      "Proof of Concept (PoC) evidence",
      "Step-by-step remediation recommendations",
      "Compliance mapping (ETSI, OWASP IoT, NIST)",
    ],
  },

  whoShould: {
    title: "Who Should Opt for",
    lead: "IoT Security testing is critical for startups, manufacturers, service providers, and enterprises.",
    items: [
      "IoT device manufacturers and OEMs",
      "Smart home and consumer electronics companies",
      "Industrial IoT and OT environments",
      "Healthcare and medical device manufacturers",
      "Smart city and infrastructure projects",
      "Energy, utilities, and automotive sectors",
      "Startups preparing for EU or global market launch",
      "Enterprises deploying IoT at scale",
    ],
  },

  choose: {
    lead: "If your product is connected, autonomous, or data-driven, IoT Security testing is essential.",
    items: [
      {
        title: "Specialized expertise in IoT and embedded Security",
        desc: "Deep knowledge in IoT and embedded systems Security testing.",
      },
      {
        title: "Manual assessment beyond scanner results",
        desc: "Deep manual assessment beyond scanner results.",
      },
      {
        title: "EU and global Compliance-focused approach",
        desc: "Aligned with international standards and regulations.",
      },
      {
        title: "Clear, practical, and engineering-friendly reports",
        desc: "Actionable reports that teams can actually use.",
      },
      {
        title: "Support from assessment through remediation",
        desc: "We focus on real-world risk reduction, not checkbox Security.",
      },
    ],
  },

  plans: [
    {
      kicker: "IoT Security",
      name: "Starter (IoT)",
      tagline: "Device Security Essentials",
      price: "Free",
      bestFor: "Single device vulnerability assessment",
      popular: true,
      cta: "Start Testing",
      features: [
        { label: "Firmware analysis & reverse engineering" },
        { label: "Hardware debug interface testing" },
        { label: "Known vulnerability scanning" },
      ],
    },
    {
      kicker: "IoT Security",
      name: "Growth (IoT)",
      tagline: "Ecosystem Security",
      price: "Custom",
      bestFor: "Complex IoT/IIoT Deployments",
      cta: "Get Full Coverage",
      features: [
        { label: "Full product Security validation" },
        { label: "Communication protocol testing" },
        { label: "Network-wide IoT audits" },
        { label: "Embedded systems code review" },
      ],
    },
    {
      kicker: "IoT Security",
      name: "Secure Ecosystem",
      tagline: "Industrial Grade Security",
      price: "Custom",
      bestFor: "Multi-device / OT / Industrial",
      cta: "Contact Sales",
      features: [
        { label: "Compliance mapping (ETSI EN 303 645)" },
        { label: "Dedicated IoT Security expert" },
        { label: "Custom test scenarios" },
      ],
    },
  ],

  faqs: [
    {
      q: "What is IoT Security Testing?",
      a: "IoT Security Testing is a structured cybersecurity assessment of Internet of Things (IoT) devices and their supporting ecosystem. It evaluates device hardware, firmware, communication protocols, applications, APIs, and cloud infrastructure to identify Security, privacy, and safety risks.",
    },
    {
      q: "How is IoT Security Testing different from traditional VAPT?",
      a: "Traditional VAPT focuses mainly on web, mobile, and network systems. IoT Security Testing goes deeper into embedded hardware, firmware, wireless communications, device-to-cloud interactions, and physical interfaces, which are not covered by standard application testing.",
    },
    {
      q: "Do you hack or damage our IoT devices?",
      a: "No. All testing is ethical, authorized, and controlled. We simulate real-world attack scenarios without damaging devices, corrupting firmware, or disrupting live operations.",
    },
    {
      q: "What components of an IoT system are tested?",
      a: "We can assess IoT device hardware and firmware, debug interfaces (UART, JTAG, etc.), communication protocols (Wi-Fi, Bluetooth, Zigbee, LoRaWAN, LTE/5G), mobile and web applications, APIs and cloud backends, and identity, access control, and logging mechanisms.",
    },
    {
      q: "Why is IoT Security Testing important?",
      a: "IoT devices are always connected and often deployed at scale. A single vulnerability can lead to unauthorized device control, data leakage and privacy violations, operational disruption, safety risks, and regulatory and Compliance failures. IoT Security Testing helps prevent these risks.",
    },
    {
      q: "Which standards and frameworks do you follow?",
      a: "Our IoT Security Testing aligns with OWASP Top 10 for IoT, ETSI EN 303 645 (EU IoT Cybersecurity Standard), NIST IoT Cybersecurity Framework, ISO/IEC 27001 & ISO/IEC 27002, ISO/IEC 62443 (IoT & OT Security), CVE & CVSS risk scoring, and GDPR and DPDPA data protection considerations.",
    },
    {
      q: "Is IoT Security Testing required for EU Compliance?",
      a: "For many IoT products sold or deployed in the EU, ETSI EN 303 645 and GDPR alignment is increasingly expected. IoT Security Testing helps demonstrate due diligence, secure-by-design practices, and regulatory readiness.",
    },
    {
      q: "Will testing affect device performance or availability?",
      a: "No. Testing is planned to avoid operational disruption. Critical tests are performed in controlled or staging environments wherever possible, and live testing is conducted safely with approval.",
    },
    {
      q: "How long does an IoT Security Assessment take?",
      a: "The duration depends on scope. Single device and application: 7\u201310 days. Full IoT ecosystem (device, cloud, apps): 10\u201320 days.",
    },
    {
      q: "How often should IoT Security Testing be performed?",
      a: "We recommend testing before product launch or market entry, after firmware updates or hardware changes, when adding new cloud Services or APIs, and before regulatory audits or certifications.",
    },
    {
      q: "Is IoT Security Testing only for large enterprises?",
      a: "No. IoT Security Testing is critical for startups, manufacturers, service providers, and enterprises. Early testing reduces long-term Security, safety, and Compliance risks.",
    },
    {
      q: "Do you provide remediation and retesting support?",
      a: "Yes. We provide step-by-step remediation guidance and retesting support to validate that vulnerabilities have been properly fixed.",
    },
    {
      q: "Is this relevant for industrial and critical IoT systems?",
      a: "Yes. We conduct testing for Industrial IoT (IIoT) and Operational Technology (OT) environments. Our approach integrates cybersecurity considerations with critical factors such as safety, availability, and Compliance with regulatory requirements.",
    },
  ],
};