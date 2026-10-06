import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Steps } from "../components/ui";
import {
  FinalCta,
  ServiceCards,
  ChipList,
  ReportSection,
  PlansSection,
  FaqSection,
} from "../components/blocks";
import { aiml } from "../data/aiml";

export default function AimlSecurity() {
  const w = aiml.whatIs;
  const y = aiml.why;

  return (
    <>
      <PageHero
        badge={aiml.badge}
        title={aiml.title}
        titleAccent={aiml.titleAccent}
        primaryCta={{ label: "Request AI/ML Security Assessment" }}
        secondaryCta={{ label: "View Pricing", href: "#plans" }}
      >
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
            AI/ML Security Testing covers
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {w.pillars.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-[var(--shadow-soft)]"
              >
                <Icon path={p.icon} className="h-4 w-4" />
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      {/* What is */}
      <Section className="bg-white">
        <Container>
          <SectionHead eyebrow={w.eyebrow} title="Structured AI Risk" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-ink-600 sm:text-lg">
            {w.lead}
          </p>
          <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-brand-200 bg-brand-50 px-6 py-5 text-center text-sm leading-relaxed text-brand-900">
            {w.note}
          </p>
        </Container>
      </Section>

      {/* Why */}
      <Section className="bg-mint">
        <Container>
          <SectionHead title={y.title} highlight={y.highlight} subtitle={y.lead} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {y.risks.map((r) => (
              <div
                key={r.label}
                className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white px-5 py-5 shadow-[var(--shadow-soft)]"
              >
                <span className="icon-chip h-11 w-11">
                  <Icon path={r.icon} className="h-5 w-5" />
                </span>
                <span className="font-semibold leading-snug text-ink-900">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg font-semibold text-brand-800">
            {y.closing}
          </p>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={aiml.services.title}
            highlight={aiml.services.highlight}
            subtitle={aiml.services.lead}
          />
          <ServiceCards cards={aiml.services.cards} columns={3} />
        </Container>
      </Section>

      {/* Methodology */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            title={aiml.methodology.title}
            highlight={aiml.methodology.highlight}
            subtitle={aiml.methodology.lead}
          />
          <Steps items={aiml.methodology.steps} className="mt-12" />
        </Container>
      </Section>

      {/* Standards */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={aiml.standards.title}
            highlight={aiml.standards.highlight}
            subtitle={aiml.standards.lead}
          />
          <ChipList items={aiml.standards.items} className="mt-10 justify-center" />
        </Container>
      </Section>

      <ReportSection
        title={aiml.report.title}
        lead={aiml.report.lead}
        items={aiml.report.items}
      />

      {/* Who should */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={aiml.whoShould.title}
            subtitle={aiml.whoShould.lead}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiml.whoShould.items.map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-5 py-4 shadow-[var(--shadow-soft)]"
              >
                <span className="icon-chip h-10 w-10">
                  <Icon path="M5 12l4 4L19 6" className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-ink-800">{t}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why choose */}
      <Section className="bg-mint">
        <Container>
          <SectionHead title="Why Choose Us" subtitle={aiml.choose.lead} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {aiml.choose.items.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink-200 bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-lg font-bold text-ink-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg font-semibold text-brand-800">
            {aiml.choose.closing}
          </p>
        </Container>
      </Section>

      <PlansSection plans={aiml.plans} />
      <FaqSection faqs={aiml.faqs} />
      <FinalCta
        title="Secure Your AI Systems Today"
        lead="Don't wait for AI misuse, bias incidents, data leaks, or regulatory action to expose weaknesses."
        primary="Request an AI/ML Security Assessment"
        secondary="View Pricing"
      />
      <ContactSection />
    </>
  );
}