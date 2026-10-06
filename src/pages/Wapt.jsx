import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import {
  Section,
  Container,
  SectionHead,
  Card,
  Steps,
  StatBar,
} from "../components/ui";
import {
  FinalCta,
  WhyGrid,
  ReportSection,
  PlansSection,
} from "../components/blocks";
import { wapt } from "../data/wapt";

export default function Wapt() {
  return (
    <>
      <PageHero
        badge={wapt.badge}
        title={wapt.title}
        titleAccent={wapt.titleAccent}
        subtitle={wapt.subtitle}
        primaryCta={{ label: "Request a WAPT Assessment" }}
        secondaryCta={{ label: "Get a Free Quote" }}
      >
        <div className="mt-12 max-w-3xl">
          <StatBar items={wapt.stats} />
        </div>
      </PageHero>

      {/* Why WAPT */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={wapt.standards}
            title={wapt.whyWapt.title}
            highlight={wapt.whyWapt.highlight}
          />
          <WhyGrid items={wapt.whyWapt.items} />
        </Container>
      </Section>

      {/* Services / methodology */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow="Methodology"
            title={wapt.Services.title}
            highlight={wapt.Services.highlight}
            subtitle={wapt.Services.lead}
          />
          <Steps items={wapt.Services.items} className="mt-12" />
        </Container>
      </Section>

      <ReportSection
        title={wapt.report.title}
        lead={wapt.report.lead}
        items={wapt.report.items}
      />

      {/* Who we serve */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={wapt.whoWeServe.title}
            highlight={wapt.whoWeServe.highlight}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {wapt.whoWeServe.items.map((t) => (
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
            title={wapt.choose.title}
            highlight={wapt.choose.highlight}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {wapt.choose.items.map((c) => (
              <Card key={c.title} className="p-6">
                <div className="flex items-start gap-4">
                  <span className="icon-chip">
                    <Icon
                      path="M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z"
                      className="h-6 w-6"
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink-950">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PlansSection plans={wapt.plans} />
      <FinalCta
        title="Secure Your Web Application Today"
        lead="Don't wait for a Security incident to expose your weaknesses. Tiered testing plans designed to scale with your growth."
        primary="Talk to an Expert"
        secondary="View Pricing"
      />
      <ContactSection />
    </>
  );
}