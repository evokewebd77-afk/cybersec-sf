import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import {
  Section,
  Container,
  SectionHead,
  Card,
  CheckList,
  Steps,
} from "../components/ui";
import {
  FinalCta,
  ServiceCards,
  ChipList,
  ReportSection,
  PlansSection,
  FaqSection,
} from "../components/blocks";
import { drone } from "../data/drone";

const layerIcons = {
  drone: "M12 2C9 2 6.5 4 6 7c-2.5 1-4 2.5-4 4 0 2.5 2 4.5 4.5 4.5H18c2.2 0 4-1.8 4-4 0-2-1.5-3.5-3.5-4C17.4 4 15 2 12 2z",
  settings: "M12 8a4 4 0 100 8 4 4 0 000-8zm9 4l-2 1 1 2-2 2-2-1-1 2h-2l-1-2-2 1-2-2 1-2-2-1v-2l2-1-1-2 2-2 2 1 1-2h2l1 2 2-1 2 2-1 2 2 1z",
  wifi: "M5 12.5a10 10 0 0114 0M8.5 16a6 6 0 017 0M12 19.5h.01",
  cloud: "M6 18a4 4 0 010-8 6 6 0 0111.2-1.2A3.5 3.5 0 0117.5 18H6z",
};

function Layers() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {drone.whatIs.layers.map((l) => (
        <div
          key={l.label}
          className="rounded-2xl border border-ink-200 bg-white p-6 text-center shadow-[var(--shadow-soft)]"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
            <Icon path={layerIcons[l.icon]} className="h-7 w-7" />
          </span>
          <p className="mt-4 text-sm font-bold uppercase tracking-wider text-ink-950">
            {l.label}
          </p>
          <p className="mt-1.5 text-sm leading-snug text-ink-600">{l.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function DroneTesting() {
  const i = drone.importance;

  return (
    <>
      <PageHero
        badge={drone.badge}
        title={drone.title}
        titleAccent={drone.titleAccent}
        subtitle={drone.subtitle}
        primaryCta={{ label: "Book a Free Consultation" }}
        secondaryCta={{ label: "View Pricing", href: "#plans" }}
      />

      {/* What is */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={drone.whatIs.eyebrow}
            title={drone.whatIs.title}
            highlight={drone.whatIs.highlight}
            subtitle={drone.whatIs.lead}
          />
          <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-ink-500">
            Our testing evaluates:
          </p>
          <Layers />
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-ink-600">
            {drone.whatIs.goal}
          </p>
        </Container>
      </Section>

      {/* Importance */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={i.eyebrow}
            title={i.title}
            highlight={i.highlight}
            subtitle={i.lead}
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card hover={false} className="border-red-100 bg-red-50/50 p-7">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-red-700">
                A single flaw can lead to
              </h3>
              <ul className="mt-4 space-y-2.5">
                {i.risks.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <Icon
                      path="M12 3l9 16H3l9-16zM12 9v4M12 17h.01"
                      className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    />
                    <span className="text-sm leading-snug text-ink-800">{r}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false} className="border-brand-200 bg-brand-50/50 p-7">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                {i.benefitsLead}
              </h3>
              <CheckList items={i.benefits} className="mt-4" />
            </Card>
          </div>

          <p className="mt-10 text-center text-lg font-semibold text-brand-800">
            {i.closing}
          </p>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={drone.services.title}
            highlight={drone.services.highlight}
            subtitle={drone.services.lead}
          />
          <ServiceCards cards={drone.services.cards} columns={2} />
        </Container>
      </Section>

      {/* Methodology */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow="Our Process"
            title={drone.methodology.lead ? "How We Perform" : ""}
            highlight="Drone Security Testing"
            subtitle={drone.methodology.lead}
          />
          <Steps items={drone.methodology.steps} className="mt-12" />
        </Container>
      </Section>

      {/* Compliance */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow="Standards Alignment"
            title="Global Frameworks"
            highlight="Covered"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {drone.compliance.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink-200 bg-white px-5 py-5 text-center shadow-[var(--shadow-soft)]"
              >
                <span className="mx-auto flex h-12 w-16 items-center justify-center rounded-xl bg-brand-50 text-[0.7rem] font-extrabold tracking-wide text-brand-700">
                  {c.code}
                </span>
                <p className="mt-3.5 text-sm font-semibold leading-snug text-ink-800">
                  {c.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ReportSection
        title={drone.report.title}
        lead={drone.report.lead}
        items={drone.report.items}
      />

      {/* Who should opt in */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={drone.whoShould.title}
            subtitle={drone.whoShould.lead}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {drone.whoShould.items.map((t) => (
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
            title="Why Choose Us"
            subtitle={drone.choose.lead}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {drone.choose.items.map((c) => (
              <Card key={c.title} className="p-6">
                <h3 className="text-base font-bold leading-snug text-ink-950">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
              </Card>
            ))}
          </div>
          <ChipList items={drone.choose.extra} className="mt-8 justify-center" />
        </Container>
      </Section>

      <PlansSection plans={drone.plans} />
      <FaqSection faqs={drone.faqs} />
      <FinalCta
        title="Secure Your Drone Operations Today"
        lead="Don't wait for a breach, data leak, or compliance failure to expose vulnerabilities."
        primary="Talk to a Drone Security Expert"
        secondary="View Pricing"
      />
      <ContactSection />
    </>
  );
}