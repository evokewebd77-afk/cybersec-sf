import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Steps, Card } from "../components/ui";
import {
  FinalCta,
  ServiceCards,
  ChipList,
  ReportSection,
  PlansSection,
  FaqSection,
} from "../components/blocks";
import { iot } from "../data/iot";

export default function IotSecurity() {
  const c = iot.critical;

  return (
    <>
      <PageHero
        badge={iot.badge}
        title={iot.title}
        titleAccent={iot.titleAccent}
        subtitle={iot.subtitle}
        primaryCta={{ label: "Request IoT Security Assessment" }}
        secondaryCta={{ label: "View Pricing", href: "#plans" }}
      />

      {/* What is */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={iot.whatIs.eyebrow}
            title={iot.whatIs.title}
            highlight={iot.whatIs.highlight}
            subtitle={iot.whatIs.lead}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {iot.whatIs.layers.map((l) => (
              <div
                key={l.label}
                className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-5 py-5 shadow-[var(--shadow-soft)]"
              >
                <span className="icon-chip h-11 w-11">
                  <Icon path={l.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink-800">
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Critical */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            title={c.title}
            highlight={c.highlight}
            subtitle={c.lead}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.risks.map((r) => (
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
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={iot.Services.title}
            highlight={iot.Services.highlight}
            subtitle={iot.Services.lead}
          />
          <ServiceCards cards={iot.Services.cards} columns={2} />
        </Container>
      </Section>

      {/* Methodology */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow="Our Approach"
            title="How We Perform"
            highlight="IoT Security Testing"
          />
          <Steps items={iot.methodology.steps} className="mt-12" />
        </Container>
      </Section>

      {/* Compliance */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={iot.compliance.title}
            highlight={iot.compliance.highlight}
            subtitle={iot.compliance.lead}
          />
          <ChipList items={iot.compliance.items} className="mt-10 justify-center" />
        </Container>
      </Section>

      <ReportSection
        title={iot.report.title}
        lead={iot.report.lead}
        items={iot.report.items}
      />

      {/* Who should */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={iot.whoShould.title}
            subtitle={iot.whoShould.lead}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {iot.whoShould.items.map((t) => (
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
          <SectionHead title="Why Choose Us" subtitle={iot.choose.lead} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {iot.choose.items.map((x) => (
              <Card key={x.title} className="p-6">
                <h3 className="text-base font-bold leading-snug text-ink-950">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {x.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PlansSection plans={iot.plans} />
      <FaqSection faqs={iot.faqs} />
      <FinalCta
        title="Secure Your IoT Ecosystem Today"
        lead="Don't wait for a data breach, safety incident, or compliance failure to expose vulnerabilities."
        primary="Request an IoT Security Assessment"
        secondary="View Pricing"
      />
      <ContactSection />
    </>
  );
}