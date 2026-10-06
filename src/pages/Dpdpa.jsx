import { useState } from "react";
import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Steps, Card } from "../components/ui";
import { FinalCta, FaqSection } from "../components/blocks";
import { dpdpa } from "../data/dpdpa";

function SelfAssessment() {
  const a = dpdpa.assessment;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const answered = Object.keys(answers).length;
  const pct = 20 * answered;
  const circumference = 2 * Math.PI * 95;
  const dash = circumference * (1 - pct / 100);

  const icons = [
    "M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z",
    "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z",
    "M13 2L3 14h7l-1 8 10-12h-7l1-8z",
    "M12 3l9 16H3l9-16z",
    "M4 20V10M10 20V4M16 20v-7M22 20H2",
  ];

  const tone =
    pct >= 80
      ? { stroke: "#16a34a", text: "text-brand-700", bg: "bg-brand-50", ring: "border-brand-300" }
      : pct >= 60
        ? { stroke: "#f59e0b", text: "text-amber-700", bg: "bg-amber-50", ring: "border-amber-300" }
        : { stroke: "#ef4444", text: "text-red-600", bg: "bg-red-50", ring: "border-red-300" };

  function choose(optionIndex) {
    setAnswers((prev) => ({ ...prev, [step]: optionIndex }));
    if (step < a.questions.length - 1) setStep(step + 1);
    else setDone(true);
  }

  function retake() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  return (
    <section id="assess" className="bg-mint py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Self <span className="text-gradient">Assessment</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-600">
            Evaluate your DPDPA Compliance posture in just 5 questions
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-ink-200 bg-white p-7 shadow-[var(--shadow-lift)] sm:p-10">
          {done ? (
            <div className="text-center">
              <div className="text-5xl" aria-hidden="true">
                {pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "⚠️"}
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-ink-950">
                Assessment Complete!
              </h3>
              <p className="mt-2 text-sm text-ink-600">
                Here's your DPDPA readiness score
              </p>

              <div className="relative mx-auto mt-6 h-56 w-56">
                <svg viewBox="0 0 220 220" className="h-full w-full -rotate-90">
                  <circle cx="110" cy="110" r="95" fill="none" stroke="#eceff0" strokeWidth="14" />
                  <circle
                    cx="110"
                    cy="110"
                    r="95"
                    fill="none"
                    stroke={tone.stroke}
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dash}
                    style={{ transition: "stroke-dashoffset 1.2s ease, stroke 0.4s" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-5xl font-extrabold ${tone.text}`}>{pct}%</span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                    Readiness Score
                  </span>
                </div>
              </div>

              <p
                className={`mx-auto mt-6 inline-block rounded-2xl border px-6 py-3.5 text-sm font-semibold ${tone.bg} ${tone.ring} ${tone.text}`}
              >
                {pct >= 80
                  ? "Excellent! You're well prepared for DPDPA Compliance."
                  : pct >= 60
                    ? "Good progress! A few areas need attention."
                    : "Significant gaps identified. Let's get you compliant."}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button type="button" onClick={retake} className="btn btn-outline">
                  Retake Assessment
                </button>
                <a href="/#contact" className="btn btn-primary">
                  Get a Detailed Gap Report
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  {a.questions.map((q, i) => (
                    <span
                      key={q.q}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold transition-all duration-300 ${
                        i < step
                          ? "bg-brand-500 text-white"
                          : i === step
                            ? "bg-ink-950 text-white ring-4 ring-brand-200"
                            : "bg-ink-100 text-ink-400"
                      }`}
                    >
                      {i < step ? "✓" : i + 1}
                    </span>
                  ))}
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-500"
                    style={{ width: `${((step + 1) / a.questions.length) * 100}%` }}
                  />
                </div>
                <p className="mt-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                  Question {step + 1} of {a.questions.length}
                </p>
              </div>

              <div className="text-center">
                <span className="icon-chip mx-auto h-14 w-14">
                  <Icon path={icons[step]} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold leading-snug text-ink-950">
                  {a.questions[step].q}
                </h3>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                {a.questions[step].options.map((opt, i) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => choose(i)}
                    className="flex items-center gap-4 rounded-2xl border-2 border-ink-200 bg-white px-5 py-4 text-left text-sm font-semibold text-ink-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-100 text-sm font-extrabold text-ink-600">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    <Icon
                      path="M5 12h14M12 5l7 7-7 7"
                      className="h-5 w-5 text-brand-500"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

export default function Dpdpa() {
  const d = dpdpa;

  return (
    <>
      <PageHero
        badge={d.badge}
        title={d.title}
        titleAccent={d.titleAccent}
        subtitle={d.subtitle}
        primaryCta={{ label: "Request Demo" }}
        secondaryCta={{ label: "Assess Readiness", href: "#assess" }}
      />

      {/* Pressure */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={d.pressure.eyebrow}
            title={d.pressure.title}
            highlight={d.pressure.highlight}
            subtitle={d.pressure.lead}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {d.pressure.items.map((c) => (
              <div
                key={c.text}
                className="rounded-2xl border border-ink-200 bg-white px-5 py-5 text-center shadow-[var(--shadow-soft)]"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon path={c.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold leading-snug text-ink-950">
                  {c.text}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <SelfAssessment />

      {/* Framework */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.framework.eyebrow}
            title={d.framework.title}
            subtitle={d.framework.lead}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.framework.areas.map((area) => (
              <Card key={area.title} className="flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="icon-chip h-10 w-10">
                    <Icon
                      path="M5 12l4 4L19 6"
                      className="h-5 w-5"
                    />
                  </span>
                  <h3 className="text-base font-bold text-ink-950">
                    {area.title}
                  </h3>
                </div>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {area.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="text-sm leading-snug text-ink-700">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Platform */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={d.platform.eyebrow}
            title={d.platform.title}
            subtitle={d.platform.lead}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.platform.items.map((c) => (
              <Card key={c.title} className="p-6">
                <span className="icon-chip">
                  <Icon
                    path="M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z"
                    className="h-6 w-6"
                  />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink-950">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.howItWorks.eyebrow}
            title={d.howItWorks.title}
            highlight={d.howItWorks.lead}
          />
          <Steps items={d.howItWorks.steps} className="mt-12" />
        </Container>
      </Section>

      {/* Industries + social proof */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-3xl leading-tight sm:text-4xl">
                Built for{" "}
                <span className="text-gradient">Your Industry</span>
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {d.industries.items.map((c) => (
                  <Card key={c.title} className="p-5">
                    <h3 className="text-base font-bold text-ink-950">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {c.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-ink-200 bg-mint p-7">
              <h2 className="text-3xl leading-tight sm:text-4xl">
                Trusted by <span className="text-gradient">Leaders</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {d.socialProof.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <Icon
                      path="M5 12l4 4L19 6"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                    />
                    <span className="text-sm font-semibold text-ink-700">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-brand-200 bg-white px-5 py-4 text-sm font-semibold text-brand-800">
                {d.socialProof.highlightBox}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.socialProof.eyebrow}
            title={d.socialProof.title}
            subtitle={d.socialProof.lead}
          />
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <div className="text-2xl text-amber-400">★★★★★</div>
            <h3 className="mt-4 text-2xl font-extrabold text-ink-950">
              {d.socialProof.cardTitle}
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              {d.socialProof.cardLead}
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-5">
            {d.socialProof.testimonials.map((t) => (
              <Card key={t.name} className="p-7">
                <div className="text-amber-400">★★★★★</div>
                <p className="mt-3 text-base leading-relaxed text-ink-700">
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-ink-200 pt-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink-950">
                      {t.name}
                    </span>
                    <span className="block text-xs text-ink-500">
                      {t.role}
                    </span>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection faqs={d.faqs} title="DPDPA Questions" />
      <FinalCta
        title="From Assessment to Continuous Compliance"
        lead="Deploy privacy controls, consent mechanisms, and data governance frameworks — then keep them monitored automatically."
        primary="Request Demo"
        secondary="Assess Readiness"
      />
      <ContactSection />
    </>
  );
}