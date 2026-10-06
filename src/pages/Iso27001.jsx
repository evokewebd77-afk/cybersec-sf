import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Steps, Card } from "../components/ui";
import {
  FinalCta,
  PlansSection,
  WhoNeeds,
  FaqSection,
} from "../components/blocks";
import { iso27001 } from "../data/iso27001";

function StageCard({ stage, tone }) {
  const isOne = tone === "one";
  return (
    <div
      className={`h-full rounded-3xl border p-7 ${
        isOne
          ? "border-ink-200 bg-white shadow-[var(--shadow-soft)]"
          : "border-brand-400 bg-brand-50/60 shadow-[var(--shadow-lift)]"
      }`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
          isOne ? "bg-ink-100 text-ink-700" : "bg-brand-600 text-white"
        }`}
      >
        {stage.tag}
      </span>
      <h3 className="mt-4 text-xl font-extrabold text-ink-950">
        {stage.headline}
      </h3>
      <p className="mt-2 text-sm text-ink-600">{stage.sub}</p>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
        {isOne ? "Focus:" : "Process:"}
      </p>
      <ul className="mt-3 space-y-2">
        {(isOne ? stage.process : stage.process).map((p) => (
          <li key={p} className="flex items-start gap-2.5">
            <Icon
              path="M5 12l4 4L19 6"
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
            />
            <span className="text-sm text-ink-700">{p}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
        {isOne ? "Deliverables:" : "Outcome:"}
      </p>
      <ul className="mt-3 space-y-2">
        {(isOne ? stage.deliverables : stage.outcome).map((p) => (
          <li key={p} className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span className="text-sm text-ink-700">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Iso27001() {
  const d = iso27001;

  return (
    <>
      <PageHero
        badge={d.badge}
        title={d.title}
        titleAccent={d.titleAccent}
        subtitle={d.definition}
        primaryCta={{ label: "Start Your Audit" }}
        secondaryCta={{ label: "View Plans", href: "#plans" }}
      />

      {/* Pillars */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.pillars.map((p) => (
              <Card key={p.title} className="p-6">
                <span className="icon-chip">
                  <Icon path={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {p.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership edge */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.edge.eyebrow}
            title={d.edge.title}
            highlight={d.edge.highlight}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {d.edge.items.map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-4 py-4 shadow-[var(--shadow-soft)]"
              >
                <span className="icon-chip h-9 w-9">
                  <Icon path="M5 12l4 4L19 6" className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink-800">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stages */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={d.stages.eyebrow}
            title={d.stages.title}
            subtitle={d.stages.sub}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <StageCard stage={d.stages.stage1} tone="one" />
            <StageCard stage={d.stages.stage2} tone="two" />
          </div>
        </Container>
      </Section>

      {/* Journey */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.journey.eyebrow}
            title={d.journey.title}
            subtitle={d.journey.lead}
          />
          <Steps items={d.journey.steps} className="mt-12" />
        </Container>
      </Section>

      {/* Audit scope */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={d.auditScope.eyebrow}
            title={d.auditScope.title}
            subtitle={d.auditScope.sub}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.auditScope.areas.map((a) => (
              <Card key={a.title} className="flex items-start gap-4 p-6">
                <span className="icon-chip h-11 w-11">
                  <Icon
                    path="M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z"
                    className="h-5 w-5"
                  />
                </span>
                <span>
                  <span className="block font-bold text-ink-950">{a.title}</span>
                  <span className="mt-1 block text-sm text-ink-600">
                    {a.desc}
                  </span>
                </span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            title={d.choose.title}
            highlight={d.choose.highlight}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {d.choose.items.map((c) => (
              <Card key={c.title} className="p-7">
                <h3 className="text-lg font-bold text-ink-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <WhoNeeds data={d.whoNeeds} />
      <PlansSection plans={d.plans} />
      <FaqSection faqs={d.faqs} />
      <FinalCta
        title="Start Your ISO 27001 Journey Today"
        lead="In a global economy, Security is the ultimate currency. ISO 27001 is the passport to enterprise deals and customer loyalty."
        primary="Start Your Audit"
        secondary="View Plans"
      />
      <ContactSection />
    </>
  );
}