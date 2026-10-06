import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Card } from "../components/ui";
import {
  FinalCta,
  CoverageGrid,
  Lead,
  PlansSection,
} from "../components/blocks";
import { vapt } from "../data/vapt";

const reportRows = [
  { label: "Broken authentication", level: "critical" },
  { label: "IDOR in API endpoint", level: "high" },
  { label: "Missing rate limiting", level: "medium" },
  { label: "Verbose error messages", level: "low" },
];

export default function Vapt() {
  const w = vapt.whyCritical;

  return (
    <>
      <PageHero
        badge={vapt.badge}
        title={vapt.title}
        titleAccent={vapt.titleAccent}
        lead={vapt.heroQuote}
        primaryCta={{ label: "Request an Assessment" }}
        secondaryCta={{ label: "Get a Sample Report", href: "#report" }}
      >
        <div className="mt-10 flex flex-wrap gap-2.5">
          {["Web", "Mobile", "API", "Cloud"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-800"
            >
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Why critical */}
      <Section className="bg-white">
        <Container>
          <SectionHead eyebrow={w.eyebrow} title={w.title} highlight={w.highlight} />
          <Lead>{w.lead}</Lead>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {w.cards.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white px-5 py-5 shadow-[var(--shadow-soft)]"
              >
                <span className="icon-chip h-11 w-11">
                  <Icon path={c.icon} className="h-5 w-5" />
                </span>
                <span className="font-semibold leading-snug text-ink-900">
                  {c.title}
                </span>
              </div>
            ))}
            <div className="flex items-start gap-4 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-5">
              <span className="icon-chip h-11 w-11">
                <Icon path="M20 12a8 8 0 11-2.3-5.6M20 4v5h-5" className="h-5 w-5" />
              </span>
              <span className="font-semibold leading-snug text-brand-900">
                {vapt.approach.highlightPoints[0]}
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Coverage */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            title={vapt.coverage.title}
            highlight={vapt.coverage.highlight}
            subtitle="Every layer of your application estate, tested by practitioners who think like attackers."
          />
          <CoverageGrid cards={vapt.coverage.cards} />
        </Container>
      </Section>

      {/* Approach */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={vapt.approach.eyebrow}
            title={vapt.approach.title}
            highlight={vapt.approach.highlight}
            subtitle={vapt.approach.subtitle}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vapt.approach.steps.map((s) => (
              <Card key={s.title} className="p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-sm font-extrabold text-brand-700">
                    {String(
                      vapt.approach.steps.indexOf(s) + 1,
                    ).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-ink-950">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {s.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Report */}
      <Section id="report" className="bg-mint">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div>
              <SectionHead
                center={false}
                eyebrow="Deliverables"
                title={vapt.report.title}
                highlight={vapt.report.highlight}
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {vapt.report.items.map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-2.5 rounded-xl border border-ink-200 bg-white px-4 py-3.5"
                  >
                    <Icon
                      path="M5 12l4 4L19 6"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                    />
                    <span className="text-sm leading-snug text-ink-700">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pt-4">
              <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-[var(--shadow-lift)]">
                <div className="flex items-center gap-2 border-b border-ink-200 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
                  <span className="ml-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink-500">
                    App Security Report
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {reportRows.map((r) => (
                    <li
                      key={r.label}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm text-ink-700">{r.label}</span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider ${
                          r.level === "critical"
                            ? "bg-red-50 text-red-700"
                            : r.level === "high"
                              ? "bg-amber-50 text-amber-700"
                              : r.level === "medium"
                                ? "bg-sky-50 text-sky-700"
                                : "bg-brand-50 text-brand-700"
                        }`}
                      >
                        {r.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-sm text-ink-500">
                Reports are written for both technical teams and management.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who needs */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={vapt.whoNeeds.title}
            highlight={vapt.whoNeeds.highlight}
            subtitle={vapt.whoNeeds.lead}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vapt.whoNeeds.items.map((t) => (
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
          <SectionHead
            title={vapt.choose.items[0].title}
            subtitle="Aligned with OWASP, ISO 27001, NIST, HIPAA, and PCI-DSS to meet your audit requirements."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {vapt.choose.items.map((c) => (
              <Card key={c.title} className="p-6">
                <span className="icon-chip">
                  <Icon path="M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug text-ink-950">
                  {c.title}
                </h3>
                {c.desc && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {c.desc}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PlansSection plans={vapt.plans} />
      <FinalCta
        title="Secure Your Application Today"
        lead="Choose the right Security testing plan for your application's specific needs and scale."
        secondary="View Pricing"
      />
      <ContactSection />
    </>
  );
}