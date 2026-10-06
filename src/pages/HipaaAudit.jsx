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
import { hipaa } from "../data/hipaa";

export default function HipaaAudit() {
  return (
    <>
      <PageHero
        badge={hipaa.badge}
        title={hipaa.title}
        titleAccent={hipaa.titleAccent}
        primaryCta={{ label: "Get HIPAA Compliant" }}
        secondaryCta={{ label: "View Pricing", href: "#plans" }}
      />

      {/* Standard */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={hipaa.standard.eyebrow}
            title="The Global Healthcare Standard"
            subtitle={hipaa.standard.lead}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {hipaa.standard.pillars.map((p) => (
              <Card key={p.title} className="p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon path={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {p.desc}
                </p>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-red-100 bg-red-50/70 px-6 py-5 text-center text-sm leading-relaxed text-red-800">
            {hipaa.standard.warning}
          </p>
        </Container>
      </Section>

      {/* Stakes */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={hipaa.stakes.eyebrow}
            title={hipaa.stakes.title}
            highlight={hipaa.stakes.highlight}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hipaa.stakes.items.map((t) => (
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

      {/* Safeguards */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={hipaa.safeguards.title}
            subtitle={hipaa.safeguards.lead}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {hipaa.safeguards.groups.map((g) => (
              <Card key={g.title} className="flex flex-col p-7">
                <h3 className="text-lg font-bold text-ink-950">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {g.lead}
                </p>
                <div className="mt-5 flex-1 space-y-2.5">
                  {g.points.map((p) => (
                    <div key={p} className="flex items-start gap-2.5">
                      <Icon
                        path="M5 12l4 4L19 6"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      />
                      <span className="text-sm leading-snug text-ink-700">{p}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            title={hipaa.process.title}
            subtitle={hipaa.process.lead}
          />
          <Steps items={hipaa.process.steps} className="mt-12" />
        </Container>
      </Section>

      {/* Protection */}
      <Section className="bg-white">
        <Container>
          <SectionHead title={hipaa.protection.title} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hipaa.protection.items.map((c) => (
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

      {/* Why us */}
      <Section className="bg-mint">
        <Container>
          <SectionHead title="Why Choose Us" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {hipaa.choose.items.map((c) => (
              <Card key={c.title} className="p-6">
                <h3 className="text-lg font-bold text-ink-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <WhoNeeds data={hipaa.whoNeeds} />
      <PlansSection plans={hipaa.plans} />
      <FaqSection faqs={hipaa.faqs} />
      <FinalCta
        title={hipaa.choose.title}
        lead="Get a free HIPAA consultation with a Compliance specialist who understands healthcare workflows."
        primary="Get a Free HIPAA Consultation"
        secondary="View Pricing"
      />
      <ContactSection />
    </>
  );
}