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
import { soc3 } from "../data/soc3";

export default function Soc3Audit() {
  return (
    <>
      <PageHero
        badge={soc3.badge}
        title={soc3.title}
        titleAccent={soc3.titleAccent}
        subtitle={soc3.features.lead}
        primaryCta={{ label: "Get SOC 3 Certified" }}
        secondaryCta={{ label: "View Pricing", href: "#plans" }}
      />

      {/* Features */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={soc3.features.eyebrow}
            title={soc3.features.title}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {soc3.features.cards.map((c) => (
              <Card key={c.title} className="p-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon path="M5 12l4 4L19 6" className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-950">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-ink-600">
            {soc3.features.note}
          </p>
        </Container>
      </Section>

      {/* Comparison */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow="SOC 2 vs SOC 3"
            title="SOC 3"
            highlight="vs SOC 2"
          />
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-[var(--shadow-lift)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-600 text-white">
                <tr>
                  {soc3.comparison.head.map((h, i) => (
                    <th
                      key={h}
                      className={`px-5 py-4 text-xs font-bold uppercase tracking-wider ${
                        i === 2 ? "bg-brand-700" : ""
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {soc3.comparison.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-ink-200">
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`px-5 py-4 leading-snug ${
                          i === 0
                            ? "font-bold text-ink-950"
                            : i === 2
                              ? "bg-brand-50 font-semibold text-brand-900"
                              : "text-ink-600"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Business impact */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={soc3.businessImpact.eyebrow}
            title={soc3.businessImpact.title}
            highlight={soc3.businessImpact.highlight}
            subtitle={soc3.businessImpact.lead}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {soc3.businessImpact.items.map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-5 py-4 shadow-[var(--shadow-soft)]"
              >
                <span className="icon-chip h-10 w-10">
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

      {/* Requirements */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={soc3.requirements.eyebrow}
            title={soc3.requirements.title}
            highlight={soc3.requirements.highlight}
            subtitle={soc3.requirements.lead}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {soc3.requirements.boxes.map((b) => (
              <Card key={b.num} className="p-7">
                <span className="text-4xl font-extrabold text-gradient">
                  {b.num}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-950">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {b.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={soc3.process.title}
            highlight={soc3.process.highlight}
            subtitle={soc3.process.lead}
          />
          <Steps items={soc3.process.steps} className="mt-12" />
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-ink-600">
            {soc3.process.closing}
          </p>
        </Container>
      </Section>

      {/* Covers */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            title={soc3.covers.title}
            highlight={soc3.covers.highlight}
            subtitle={soc3.covers.lead}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {soc3.covers.items.map((c) => (
              <Card key={c.title} className="flex items-start gap-4 p-6">
                <span className="icon-chip h-11 w-11">
                  <Icon
                    path="M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z"
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

      {/* Who */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title={soc3.who.title}
            highlight={soc3.who.highlight}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {soc3.who.items.map((c) => (
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

      <WhoNeeds data={soc3.whoNeeds} />
      <PlansSection plans={soc3.plans} />
      <FaqSection faqs={soc3.faqs} />
      <FinalCta
        title="Start Your SOC 3 Journey"
        lead="Get SOC 3 certified and proudly showcase your superior Security to the world."
        primary="Get SOC 3 Certified"
        secondary="View Pricing"
      />
      <ContactSection />
    </>
  );
}