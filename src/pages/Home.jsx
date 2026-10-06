import { Link } from "react-router-dom";
import { useState } from "react";
import ContactSection from "../components/ContactSection";
import Icon, { StrokeIcon } from "../components/Icon";
import {
  Section,
  Container,
  SectionHead,
  Card,
  CheckList,
  FAQ,
} from "../components/ui";
import {
  homeStats,
  testimonials,
  softwareTestingCards,
  industrySolutions,
  serviceCoverage,
  homeFaqs,
} from "../data/home";
import { certifications, labTestingDetails } from "../data/site";

const securityCards = [
  {
    icon: ["M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z"],
    title: "Vulnerability Assessment & Pen Testing",
    desc: "Comprehensive assessment and penetration testing across web, mobile, API and cloud.",
    to: "/vapt",
    tag: "AUDITS",
  },
  {
    icon: ["M12 2a10 10 0 100 20 10 10 0 000-20z", "M2 12h20"],
    title: "ISO, SOC & Global Standards",
    desc: "Attestation and certification programmes mapped to international frameworks.",
    to: "/iso-27001",
    tag: "CERTIFICATIONS",
  },
  {
    icon: [
      "M16 19v-1.5a4 4 0 00-4-4H6a4 4 0 00-4 4V19",
      "M9 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",
      "M22 19v-1.5a4 4 0 00-3-3.9",
    ],
    title: "Healthcare Data Protection",
    desc: "Protection of healthcare data and sensitive personal health information.",
    to: "/hipaa-audit",
    tag: "AUDITS",
  },
  {
    icon: [
      "M6 18h12v-2H6zm-2-4h16v-4H4zm2-6h12V6H6z",
    ],
    title: "SOC 2, SOC 3",
    desc: "Assurance on security, availability, confidentiality, and privacy.",
    to: "/soc-audit",
    tag: "SOC AUDITS",
  },
  {
    icon: [
      "M8 11V7a4 4 0 018 0v4",
      "M6 11h12v9H6z",
    ],
    title: "HIPAA AUDIT",
    desc: "Type I (Design) and Type II (Operating Effectiveness) assessments.",
    to: "/hipaa-audit",
    tag: "HIPAA",
  },
  {
    icon: [
      "M12 8v3M12 13v3M8 12h3M13 12h3",
      "M6 19h11a4 4 0 000-8 5 5 0 00-9-2 4 4 0 00-2 10z",
    ],
    title: "IoT & Device Security",
    desc: "Evaluates administrative, technical, and physical safeguards.",
    to: "/iot-security",
    tag: "DEVICES",
  },
];

const complianceStatement =
  "We comply with globally recognized information security and privacy standards to ensure trust, compliance, and secure digital operations for our clients.";

const standardsCards = [
  {
    title: "ISO/IEC 27001",
    desc: "Establishes best practices for managing and protecting sensitive business and customer information.",
  },
  {
    title: "ISO/IEC 27000",
    desc: "Defines the vocabulary and foundational concepts for the entire ISO 27000 family of information security standards.",
  },
  {
    title: "ETSI EN 303 645",
    desc: "Defines cybersecurity requirements for consumer IoT devices to prevent common security threats.",
  },
  {
    title: "ISO/IEC 27701",
    desc: "Enhances privacy governance by defining controls for personal data protection and compliance.",
  },
  {
    title: "SOC 2",
    desc: "Protect patient data and medical systems while ensuring HIPAA compliance and operational continuity.",
  },
  {
    title: "SOC 3",
    desc: "Publicly shareable security report for marketing and enterprise client trust.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-mint">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 sm:opacity-55"
        style={{ backgroundImage: "url(/hero.png)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgb(240 253 244 / 0.97) 0%, rgb(240 253 244 / 0.85) 38%, rgb(255 255 255 / 0.45) 62%, rgb(255 255 255 / 0.15) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div
        className="animate-float pointer-events-none absolute -left-28 top-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute right-[-6rem] top-40 h-[26rem] w-[26rem] rounded-full bg-brand-100/70 blur-3xl"
        style={{ animationDelay: "1.4s" }}
        aria-hidden="true"
      />

      <div className="container-x relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-700 shadow-[var(--shadow-soft)]">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand-500" />
              Information Security Division of ITC India
            </span>

            <h1 className="mt-6 text-4xl leading-[1.06] sm:text-5xl lg:text-[3.6rem]">
              Advanced Cybersecurity{" "}
              <span className="text-gradient">Solutions</span> for Modern
              Enterprises
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              Protect your organization from evolving cyber threats with our
              comprehensive security services. From threat detection to incident
              response, we keep your business secure 24/7.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/#contact" className="btn btn-primary btn-lg">
                Start Free Audit
                <Icon path="M5 12h14M12 5l7 7-7 7" className="h-4 w-4" />
              </Link>
              <a href="#services" className="btn btn-outline btn-lg">
                View Platform
              </a>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {homeStats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-3xl font-extrabold text-gradient sm:text-[2rem]">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-500">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-[2rem] border border-brand-200 bg-white/80 p-6 shadow-[var(--shadow-lift)] backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
                <span className="ml-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-500">
                  Security Operations
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: ["M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z", "M9 12l2 2 4-4"],
                    title: "Perimeter & Endpoint",
                    value: "Protected",
                    tone: "ok",
                  },
                  {
                    icon: ["M20 12a8 8 0 11-2.3-5.6", "M20 4v5h-5"],
                    title: "Continuous Scanning",
                    value: "Active",
                    tone: "ok",
                  },
                  {
                    icon: ["M12 3a9 9 0 100 18 9 9 0 000-18z", "M12 7v5l3 2"],
                    title: "Incident Response",
                    value: "24/7",
                    tone: "ok",
                  },
                  {
                    icon: ["M12 22s7-5.6 7-12a7 7 0 10-14 0c0 6.4 7 12 7 12z", "M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"],
                    title: "Compliance Posture",
                    value: "Audited",
                    tone: "ok",
                  },
                ].map((r) => (
                  <div
                    key={r.title}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-white px-4 py-3.5"
                  >
                    <span className="flex items-center gap-3">
                      <span className="icon-chip h-10 w-10">
                        <Icon path={r.icon} className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-ink-800">
                        {r.title}
                      </span>
                    </span>
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-brand-700">
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-brand-50 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                  Uptime guaranteed
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-brand-800">99.9%</span>
                  <span className="pb-1 text-sm text-ink-500">
                    across monitored client estates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityCards() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <SectionHead
          eyebrow="What we do"
          title="Comprehensive security and compliance"
          highlight="services"
          subtitle="From penetration testing to certification audits, one division covers your entire security and compliance roadmap."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityCards.map((c) => (
            <Card key={c.title} as={Link} className="group p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="icon-chip">
                  <Icon path={c.icon} className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-700">
                  {c.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug text-ink-950">
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                {c.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Learn more
                <Icon
                  path="M5 12h14M12 5l7 7-7 7"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SoftwareTesting() {
  return (
    <Section className="relative overflow-hidden bg-mint">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/main.png)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(240 253 244 / 0.72) 0%, rgb(255 255 255 / 0.55) 40%, rgb(240 253 244 / 0.7) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHead
          eyebrow="Software Testing"
          title="Structured work instructions for"
          highlight="IoT & software security"
          subtitle="ITC India has developed specialized internal work instructions for IoT and Drone Security Testing, ensuring repeatable and high-quality assessments."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {softwareTestingCards.map((c) => (
            <Card key={c.title} className="flex flex-col p-7">
              <div className="flex items-start gap-4">
                <span className="icon-chip">
                  <Icon
                    path="M12 2c3 1.5 6 4 6 8l-3 3-3-3-3 3-3-3c0-4 3-6.5 6-8z"
                    className="h-6 w-6"
                  />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink-950">{c.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{c.desc}</p>
                </div>
              </div>

              <div className="my-6 border-t border-ink-200" />

              <CheckList items={c.points} />

              <div className="mt-6 space-y-4">
                {c.blocks.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-2xl bg-brand-50 px-4 py-3.5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                      {b.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>

              <Link to={c.to} className="btn btn-outline btn-sm mt-6 self-start">
                Know More
                <Icon path="M5 12h14M12 5l7 7-7 7" className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>

        {/* device security band */}
        <div className="mt-6 grid gap-6 rounded-[1.75rem] border border-brand-200 bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="eyebrow eyebrow-dark">IoT Device Security</span>
            <h3 className="mt-4 text-2xl font-extrabold text-ink-950 sm:text-3xl">
              Device security assessments follow globally recognized
              cybersecurity standards
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              ITC India offers <strong className="text-brand-800">strong</strong>{" "}
              coverage of authentication, access control, secure
              communication, OTA updates, and common vulnerabilities, aligned with
              global standards.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Common security vulnerabilities",
                "Authentication & access control",
                "Secure communications & OTA updates",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2.5 rounded-xl border border-ink-200 px-3.5 py-3"
                >
                  <Icon
                    path="M5 12l4 4L19 6"
                    className="h-4 w-4 shrink-0 text-brand-600"
                  />
                  <span className="text-sm text-ink-700">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/iot-security" className="btn btn-primary btn-sm">
                IoT Security Testing
              </Link>
              <Link to="/drone-testing" className="btn btn-outline btn-sm">
                Drone Testing
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                t: "Structured Work Instructions",
                d: "Repeatable, documented methodology for IoT and Drone Security Testing.",
              },
              {
                t: "Enhanced Security Coverage",
                d: "Authentication, access control, secure communication, OTA updates and common vulnerabilities.",
              },
              {
                t: "Certified Processes",
                d: "ETSI EN 303 645 certification ensures IoT devices meet globally recognized baselines.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-ink-200 bg-brand-50/60 px-5 py-4"
              >
                <p className="font-bold text-ink-950">{x.t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Industries() {
  const [active, setActive] = useState(industrySolutions[0].id);
  const current = industrySolutions.find((i) => i.id === active);

  return (
    <Section className="bg-white">
      <Container>
        <SectionHead
          eyebrow="Industry Solutions"
          title="Tailored Security for"
          highlight="Every Industry"
          subtitle="Different industries face unique cyber threats. Our specialized solutions address the specific security challenges of your sector."
        />

        <p className="mt-3 text-center text-base font-semibold text-brand-700">
          Secure IoT ecosystems against real-world cyber threats.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {industrySolutions.map((ind) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setActive(ind.id)}
              aria-pressed={active === ind.id}
              className={`btn btn-sm gap-2 ${
                active === ind.id ? "btn-primary" : "btn-outline"
              }`}
            >
              <StrokeIcon
                d={ind.icon}
                className={`h-4 w-4 ${
                  active === ind.id ? "text-white" : "text-brand-600"
                }`}
              />
              {ind.label}
            </button>
          ))}
        </div>

        <Card hover={false} className="mt-8 p-7 sm:p-9">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <span
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-white"
              aria-hidden="true"
            >
              <StrokeIcon d={current.icon} className="h-10 w-10" />
            </span>
            <div>
              <h3 className="text-2xl font-extrabold text-ink-950">
                {current.label} Security
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {current.summary}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                k: "threats",
                label: "⚠ Key Threats",
                items: current.threats,
              },
              {
                k: "approach",
                label: "🎯 Our Approach",
                items: current.approach,
              },
              {
                k: "results",
                label: "✅ Expected Results",
                items: current.results,
              },
            ].map((col) => (
              <div
                key={col.k}
                className={`rounded-2xl border px-4 py-4 ${
                  col.k === "threats"
                    ? "border-red-100 bg-red-50/60"
                    : col.k === "approach"
                      ? "border-brand-200 bg-brand-50/60"
                      : "border-emerald-100 bg-emerald-50/60"
                }`}
              >
                <p className="text-sm font-bold text-ink-900">{col.label}</p>
                <ul className="dot-list mt-3 space-y-2 text-[0.82rem] leading-snug">
                  {col.items.map((t) => (
                    <li key={t} className="text-ink-700">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </Section>
  );
}

function Certifications() {
  return (
    <Section className="bg-mint">
      <Container>
        <SectionHead
          eyebrow="ITC India Certification"
          title="Our Certifications"
          subtitle={complianceStatement}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <Card key={c.title} as={Link} className="p-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-lg font-extrabold text-white">
                {c.code}
              </span>
              <h3 className="mt-5 text-base font-bold text-ink-950">{c.title}</h3>
              <p className="mt-1.5 text-sm text-ink-600">{c.desc}</p>
              <span className="mt-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand-700">
                Learn more...
              </span>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-center text-lg font-bold text-ink-950">
            Comprehensive Service Coverage
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCoverage.map((s) => (
              <Card key={s.title} className="flex flex-col p-6">
                <span className="icon-chip">
                  <Icon
                    path={[
                      "M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z",
                      "M12 8v3M12 13v3M8 12h3M13 12h3",
                      "M6 19h11a4 4 0 000-8 5 5 0 00-9-2 4 4 0 00-2 10z",
                      "M6 2h9l5 5v15H6z",
                    ]}
                    className="h-6 w-6"
                  />
                </span>
                <h4 className="mt-4 text-base font-bold leading-snug text-ink-950">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {s.desc}
                </p>
                <div className="mt-4 flex-1">
                  <CheckList items={s.points} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Standards() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHead
          eyebrow="Global Standards"
          title="We comply with"
          highlight="globally recognized standards"
          subtitle="Every engagement is mapped to the frameworks your customers, auditors and regulators care about."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standardsCards.map((s) => (
            <div
              key={s.title}
              className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white px-5 py-5 shadow-[var(--shadow-soft)]"
            >
              <span className="icon-chip h-11 w-11">
                <Icon path="M12 2a5 5 0 015 5v2h2a5 5 0 015 5 5 5 0 01-5 5h-2v2a5 5 0 01-5 5 5 5 0 01-5-5v-2H5a5 5 0 01-5-5 5 5 0 015-5h2V7a5 5 0 015-5z" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-bold text-ink-950">{s.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-600">
                  {s.desc}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Labs() {
  return (
    <Section className="relative overflow-hidden bg-mint">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/he.png)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(240 253 244 / 0.72) 0%, rgb(255 255 255 / 0.55) 40%, rgb(240 253 244 / 0.7) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHead
          eyebrow="Our Laboratory"
          title="NABL-accredited testing & calibration"
          subtitle="End-to-end solutions in electrical, electronic, photometric, and solar equipment testing."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {labTestingDetails.map((l) => (
            <Card key={l.title} className="p-6">
              <h3 className="text-base font-bold text-ink-950">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {l.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <Container>
        <SectionHead
          eyebrow="Testimonials"
          title="Globally Trusted by Leading Companies"
          subtitle="Real feedback from security and privacy leaders."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col p-6">
              <Icon
                path="M8 6l-6 6 6 6M16 6l6 6-6 6"
                className="h-7 w-7 text-brand-300"
              />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                {t.quote}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-ink-200 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {t.name
                    .replace(/^(Col\.)\s*/, "")
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-950">
                    {t.name}
                  </span>
                  <span className="block text-xs text-ink-500">{t.role}</span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Faq() {
  return (
    <Section className="relative overflow-hidden bg-mint">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div
        className="animate-float pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"
        style={{ animationDelay: "1.4s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="eyebrow eyebrow-dark">FAQs</span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
              Frequently asked{" "}
              <span className="text-gradient">questions</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-600">
              Everything teams ask us before kickoff. Can&apos;t find what you&apos;re
              looking for? Our security advisors reply within one business day.
            </p>

            <div className="mt-8 space-y-3">
              {[
                {
                  icon: [
                    "M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z",
                    "M9 12l2 2 4-4",
                  ],
                  title: "Compliance gap review",
                  desc: "Map your current controls against ISO 27001, SOC 2 or HIPAA.",
                },
                {
                  icon: [
                    "M12 3a9 9 0 100 18 9 9 0 000-18z",
                    "M12 7v5l3 2",
                  ],
                  title: "Talk to a security advisor",
                  desc: "Scope a pen test or audit with a certified assessor.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="flex items-start gap-4 rounded-2xl border border-brand-200 bg-white/80 p-4 backdrop-blur"
                >
                  <span className="icon-chip">
                    <Icon path={x.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink-950">
                      {x.title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink-600">
                      {x.desc}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <Link to="/#contact" className="btn btn-primary mt-7">
              Ask a question
              <Icon path="M5 12h14M12 5l7 7-7 7" className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:pt-2">
            <FAQ items={homeFaqs} className="mx-0 max-w-none space-y-3" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <SecurityCards />
      <SoftwareTesting />
      <Industries />
      <Certifications />
      <Standards />
      <Labs />
      <Testimonials />
      <Faq />
      <ContactSection />
    </>
  );
}