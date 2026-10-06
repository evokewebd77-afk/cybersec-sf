export const site = {
  name: "CyberSec",
  fullName: "Cybersec - Information Security Division",
  parent: "SF Pvt. Ltd.",
  parentTagline: "IS AND CYBERSEC DIVISION OF SF",
  tagline: "Information Security & CyberSec Division of SF",
  url: "https://cybersec.itcindia.org",
  email: "info@itcindia.org",
  whatsapp: "https://wa.me/7589783899",
  phoneDisplay: "+91 75897 83899",
  address: "SF Pvt. Ltd.",
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/cyber-sec-ai/",
      path: "M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.58-2.34 3.21V21H9z",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/cybersecevokeai",
      path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.65.07 4.85s-.01 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.65.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.73.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17C2.4 9.9 2.4 10.25 2.4 12s0 2.1.07 3.33c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.23.06 1.58.07 4.73.07s3.5 0 4.73-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.23.07-1.58.07-3.33s-.01-2.1-.07-3.33c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 00-.88-1.35 3.6 3.6 0 00-1.35-.88c-.41-.16-1.03-.35-2.17-.4C15.5 4 15.15 4 12 4zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm5.2-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1CQkmQL5qW/",
      path: "M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13v2.29H7.5V14h2.77v8h3.23z",
    },
    {
      name: "Email",
      href: "mailto:info@itcindia.org",
      path: "M3 5h18v14H3zm2.4 2L12 12l6.6-5zM5 18h14V8.7l-7 5.3-7-5.3z",
    },
  ],
};

export const nav = {
  about: { label: "About", to: "/about" },
  Services: {
    label: "Services",
    items: [
      { label: "VAPT", to: "/vapt", desc: "Application Security Testing" },
      { label: "WAPT", to: "/wapt", desc: "Web App Penetration Testing" },
      { label: "IoT Security", to: "/iot-Security", desc: "Connected device testing" },
      { label: "AI/ML Security", to: "/ai-ml-Security", desc: "Model & GenAI testing" },
      { label: "Drone Testing", to: "/drone-testing", desc: "UAV ecosystem Security" },
    ],
  },
  audits: {
    label: "Audits",
    items: [
      { label: "SOC 2 Audit", to: "/soc-audit", desc: "Trust Services Criteria" },
      { label: "SOC 3 Audit", to: "/soc3-audit", desc: "Public trust report" },
      { label: "HIPAA Audit", to: "/hipaa-audit", desc: "Healthcare data Security" },
    ],
  },
  certifications: {
    label: "Certifications",
    items: [
      { label: "ISO 27001", to: "/iso-27001", desc: "ISMS certification" },
      { label: "ISO 27000", to: "/iso-27000", desc: "Security ecosystem advisory" },
      { label: "ISO 27701", to: "/iso-27701", desc: "Privacy (PIMS) certification" },
      { label: "AI Compliance", to: "/ai-compliance", desc: "AI control mapping" },
      { label: "DPDPA", to: "/dpdpa", desc: "India data protection" },
    ],
  },
};

export const inquiryTypes = [
  "ISO27001",
  "ISO27000",
  "ISO27701",
  "SOC L2",
  "SOC L3",
  "WAPT (Website Testing)",
  "VAPT (Application Testing)",
  "AI/ML Testing",
  "IOT Testing (Software only)",
  "Drone Testing (Software only)",
  "Customized Tools for testing",
  "Other",
];

export const testingServices = [
  "Electrical Safety Testing",
  "EMC & EMI Testing",
  "Photometric Testing",
  "Ingress Protection (IP) Testing",
  "Mechanical & Environmental Testing",
  "Battery & UV Light Testing",
];

export const labTestingDetails = [
  {
    title: "Electrical Safety Testing",
    desc: "Compliance testing as per IEC, IS, and global safety standards for appliances and devices.",
  },
  {
    title: "EMC & EMI Testing",
    desc: "Electromagnetic compatibility and interference testing for CE, FCC, and Indian regulations.",
  },
  {
    title: "Photometric Testing",
    desc: "LM-79, goniophotometer, and integrating sphere analysis for LED luminaires.",
  },
  {
    title: "Ingress Protection (IP) Testing",
    desc: "Dust and water resistance testing per IEC 60529 standards.",
  },
  {
    title: "Mechanical & Environmental Testing",
    desc: "Vibration, drop, and life-cycle simulations for product durability.",
  },
  {
    title: "Battery & UV Light Testing",
    desc: "Battery testing (UN 38.3, IEC 62133, IS 16046) and UV-C/UV-A/B evaluation.",
  },
];

export const certifications = [
  {
    code: "ISO",
    title: "ISO/IEC 27001",
    desc: "Information Security",
    to: "/iso-27001",
  },
  {
    code: "ISO",
    title: "ISO/IEC 27000",
    desc: "Security Overview",
    to: "/iso-27000",
  },
  {
    code: "ETSI",
    title: "ETSI EN 303 645",
    desc: "IoT Security",
    to: "/iot-Security",
  },
  {
    code: "ISO",
    title: "ISO/IEC 27701",
    desc: "Privacy Management",
    to: "/iso-27701",
  },
];