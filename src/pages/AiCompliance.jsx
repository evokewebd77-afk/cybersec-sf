import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Card } from "../components/ui";
import { FinalCta, PlansSection } from "../components/blocks";
import { aiCompliance } from "../data/aiCompliance";

export default function AiCompliance() {
  const d = aiCompliance;

  return (
    <>
      <PageHero
        badge={d.badge}
        title={d.title}
        titleAccent="Detect compliance gaps instantly with AI insights."
        subtitle={d.subtitle}
        primaryCta={{ label: "Request Demo" }}
        secondaryCta={{ label: "Assess Readiness" }}
      />

      {/* Features */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.features.map((f) => (
              <Card key={f.title} className="p-6">
                <span className="icon-chip">
                  <Icon path={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {f.desc}
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
            highlight={d.howItWorks.highlight}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.howItWorks.steps.map((s) => (
              <Card key={s.num} className="p-6">
                <span className="text-4xl font-extrabold text-gradient">
                  {s.num}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {s.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PlansSection plans={d.plans} />
      <FinalCta
        title="Let AI Handle Your Compliance"
        lead="Select a plan that fits your automated compliance journey."
        primary="Request Demo"
        secondary="View Plans"
      />
      <ContactSection />
    </>
  );
}