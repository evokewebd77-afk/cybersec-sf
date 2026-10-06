import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Steps, Card } from "../components/ui";
import { FinalCta, WhoNeeds } from "../components/blocks";
import { iso27701 } from "../data/iso27701";

export default function Iso27701() {
  const d = iso27701;

  return (
    <>
      <PageHero
        badge={d.badge}
        title={d.title}
        titleAccent={d.titleAccent}
        subtitle={d.intro}
        primaryCta={{ label: "Start PIMS Audit" }}
        secondaryCta={{ label: "Talk to a Privacy Expert" }}
      />

      {/* Benefits */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {d.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-brand-200 bg-brand-50/60 px-5 py-6"
              >
                <h3 className="text-base font-bold leading-snug text-brand-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Extension */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.extension.eyebrow}
            title="Total Privacy"
            highlight={d.extension.highlight}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {d.extension.groups.map((g) => (
              <Card key={g.title} className="p-7">
                <h3 className="text-lg font-bold text-ink-950">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {g.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-200 pt-5">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-50 px-3 py-1.5 text-[0.72rem] font-semibold text-brand-700"
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

      {/* Unified compliance */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={d.unified.eyebrow}
            title={d.unified.title}
            highlight={d.unified.highlight}
            subtitle={d.unified.lead}
          />
          <p className="mx-auto mt-8 max-w-2xl text-center text-base font-semibold text-brand-800">
            {d.unified.note}
          </p>
        </Container>
      </Section>

      {/* PIMS journey */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={d.process.eyebrow}
            title={d.process.title}
            subtitle={d.process.lead}
          />
          <Steps items={d.process.steps} className="mt-12" />
        </Container>
      </Section>

      {/* Roadmap stages */}
      <Section className="bg-white">
        <Container>
          <SectionHead title={d.stages.title} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[d.stages.stage1, d.stages.stage2].map((s, i) => (
              <div
                key={s.tag}
                className={`rounded-3xl border p-7 ${
                  i === 0
                    ? "border-ink-200 bg-white shadow-[var(--shadow-soft)]"
                    : "border-brand-400 bg-brand-50/60 shadow-[var(--shadow-lift)]"
                }`}
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
                    i === 0 ? "bg-ink-100 text-ink-700" : "bg-brand-600 text-white"
                  }`}
                >
                  {s.tag}
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-ink-950">
                  {s.headline}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{s.sub}</p>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                  {i === 0 ? "Audit Focus:" : "Implementation:"}
                </p>
                <ul className="mt-3 space-y-2">
                  {(i === 0 ? s.auditFocus : s.implementation).map((p) => (
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
                  {i === 0 ? "Value:" : "Final Outcome:"}
                </p>
                <ul className="mt-3 space-y-2">
                  {(i === 0 ? s.value : s.outcome).map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="text-sm text-ink-700">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Controls */}
      <Section className="bg-mint">
        <Container>
          <SectionHead title={d.controls.title} subtitle={d.controls.sub} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.controls.items.map((c) => (
              <Card key={c.title} className="flex items-start gap-4 p-6">
                <span className="icon-chip h-11 w-11">
                  <Icon
                    path="M8 11V7a4 4 0 018 0v4M6 11h12v9H6z"
                    className="h-5 w-5"
                  />
                </span>
                <span>
                  <span className="block font-bold text-ink-950">{c.title}</span>
                  <span className="mt-1 block text-sm text-ink-600">
                    {c.desc}
                  </span>
                </span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <WhoNeeds data={d.whoNeeds} />
      <FinalCta
        title="Total Privacy Orchestration"
        lead="Secure the lifecycle from storage to secure deletion — and demonstrate GDPR accountability at every step."
        primary="Start PIMS Audit"
        secondary="Talk to a Privacy Expert"
      />
      <ContactSection />
    </>
  );
}