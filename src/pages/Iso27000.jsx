import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Card, CheckList } from "../components/ui";
import { FinalCta, WhoNeeds } from "../components/blocks";
import { iso27000 } from "../data/iso27000";

export default function Iso27000() {
  const d = iso27000;

  return (
    <>
      <PageHero
        badge={d.badge}
        title={d.title}
        titleAccent={d.titleAccent}
        subtitle={d.subtitle}
        primaryCta={{ label: "Start Gap Analysis" }}
        secondaryCta={{ label: "Talk to a Strategy Lead" }}
      />

      {/* Ecosystem */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={d.ecosystem.eyebrow}
            title={d.ecosystem.title}
            subtitle="Find the standards that define your success."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.ecosystem.items.map((c) => (
              <Card key={c.code} className="flex flex-col p-6">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-700">
                  {c.code}
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink-950">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-200 pt-4">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-50 px-3 py-1 text-[0.68rem] font-semibold text-brand-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Strategic value */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.strategicValue.eyebrow}
            title={d.strategicValue.title}
            highlight={d.strategicValue.highlight}
            subtitle={d.strategicValue.lead}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {d.strategicValue.items.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white px-6 py-5 shadow-[var(--shadow-soft)]"
              >
                <span className="icon-chip h-11 w-11">
                  <Icon path="M5 12l4 4L19 6" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-base font-bold text-ink-950">
                    {c.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink-600">
                    {c.desc}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brand-200 bg-white px-6 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
              How we transform your posture
            </p>
            <div className="mt-4">
              <CheckList items={d.strategicValue.detail} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={d.outcomes.eyebrow}
            title={d.outcomes.title}
            subtitle={d.outcomes.plans[1].lead}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {d.outcomes.plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-3xl border p-7 ${
                  p.popular
                    ? "border-brand-400 bg-brand-50/60 shadow-[var(--shadow-lift)]"
                    : "border-ink-200 bg-white shadow-[var(--shadow-soft)]"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                  {p.name}
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-ink-950">
                  {p.tagline}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{p.lead}</p>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                  Includes:
                </p>
                <div className="mt-3">
                  <CheckList items={p.includes} />
                </div>

                {p.benefit && (
                  <>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                      Benefit:
                    </p>
                    <div className="mt-3">
                      <CheckList items={p.benefit} />
                    </div>
                  </>
                )}

                {p.result && (
                  <>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                      Result:
                    </p>
                    <div className="mt-3">
                      <CheckList items={p.result} />
                    </div>
                  </>
                )}

                {p.extra && (
                  <>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                      Includes:
                    </p>
                    <div className="mt-3">
                      <CheckList items={p.extra} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Coverage */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.coverage.eyebrow}
            title={d.coverage.title}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.coverage.items.map((c) => (
              <Card key={c.title} className="p-6">
                <h3 className="text-base font-bold text-ink-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <WhoNeeds data={d.advice} />
      <FinalCta
        title="Find the Standards That Define Your Success"
        lead="Design a multi-year security roadmap based on the best of the ISO 27000 family."
        primary="Start Gap Analysis"
        secondary="Talk to a Strategy Lead"
      />
      <ContactSection />
    </>
  );
}