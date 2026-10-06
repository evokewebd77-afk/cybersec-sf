import { useState } from "react";
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
  PlansSection,
  WhoNeeds,
  FaqSection,
} from "../components/blocks";
import { soc2 } from "../data/soc2";

function TypeCard({ data, tone }) {
  return (
    <div
      className={`h-full rounded-3xl border p-7 ${
        tone === "two"
          ? "border-brand-400 bg-brand-50/70 shadow-[var(--shadow-lift)]"
          : "border-ink-200 bg-white shadow-[var(--shadow-soft)]"
      }`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
          tone === "two"
            ? "bg-brand-600 text-white"
            : "bg-ink-100 text-ink-700"
        }`}
      >
        {data.name}
      </span>
      <h3 className="mt-4 text-xl font-extrabold text-ink-950">
        {data.headline}
      </h3>
      <p className="mt-3 text-sm font-semibold text-brand-700">
        {data.quote}
      </p>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
        What it includes:
      </p>
      <div className="mt-3">
        <CheckList items={data.includes} />
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
        Best for:
      </p>
      <ul className="mt-3 space-y-2">
        {data.bestFor.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <Icon
              path="M5 12l4 4L19 6"
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
            />
            <span className="text-sm leading-snug text-ink-700">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SocAudit() {
  const [type, setType] = useState("two");
  const t = soc2.types;

  return (
    <>
      <PageHero
        badge={soc2.badge}
        title={soc2.title}
        titleAccent={soc2.titleAccent}
        primaryCta={{ label: "Get SOC 2 Certified Now" }}
        secondaryCta={{ label: "Talk to a SOC 2 Expert" }}
      />

      {/* Framework */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={soc2.framework.eyebrow}
            title="Trust Services Criteria"
            subtitle={soc2.framework.lead}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {soc2.framework.groups.map((g) => (
              <Card key={g.title} className="flex flex-col p-6">
                <span className="icon-chip">
                  <Icon path={g.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-950">{g.title}</h3>
                <div className="mt-4 flex-1">
                  <CheckList items={g.items} />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Business value */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={soc2.businessValue.eyebrow}
            title={soc2.businessValue.title}
            highlight={soc2.businessValue.highlight}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {soc2.businessValue.items.map((t) => (
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

      {/* Type I vs II */}
      <Section className="bg-white">
        <Container>
          <SectionHead title="SOC 2" highlight={t.title.replace("SOC 2 ", "")} />

          <div className="mx-auto mt-8 inline-flex rounded-full border border-ink-200 bg-ink-50 p-1.5">
            {[
              { id: "one", label: "Type I: Design Assessment" },
              { id: "two", label: "Type II: Operating Effectiveness" },
            ].map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setType(o.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  type === o.id
                    ? "bg-brand-600 text-white shadow-[0_8px_20px_-8px_rgba(21,128,61,0.9)]"
                    : "text-ink-600 hover:text-brand-700"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-ink-600">
            {t.title}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {type === "one" ? (
              <TypeCard data={t.type1} tone="one" />
            ) : (
              <TypeCard data={t.type2} tone="two" />
            )}
            <div className="rounded-3xl border border-ink-200 bg-ink-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                Comparison
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-ink-200 bg-white">
                <table className="w-full text-left text-sm">
                  <thead className="bg-brand-50">
                    <tr>
                      {t.table.head.map((h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-800"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.table.rows.map((row) => (
                      <tr key={row[0]} className="border-t border-ink-200">
                        {row.map((cell, i) => (
                          <td
                            key={i}
                            className={`px-4 py-3.5 text-ink-700 ${
                              i === 0 ? "font-bold text-ink-950" : ""
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
              <p className="mt-5 text-sm leading-relaxed text-ink-600">
                Type I checks if your controls are designed correctly. Type II
                checks that those controls actually work over time. Most
                customers prefer Type II.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={soc2.process.eyebrow}
            title={soc2.process.title}
            highlight={soc2.process.highlight}
            subtitle={soc2.process.lead}
          />
          <Steps items={soc2.process.steps} className="mt-12" />
        </Container>
      </Section>

      {/* Controls */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            title="Real Security Implementation"
            subtitle="We implement the controls your audit will test — not just the documentation."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {soc2.controls.cards.map((c) => (
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

      {/* Why start with us */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            title={soc2.choose.title}
            highlight={soc2.choose.highlight}
            subtitle={soc2.choose.lead}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {soc2.choose.items.map((c) => (
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

      <WhoNeeds data={soc2.whoNeeds} />
      <PlansSection plans={soc2.plans} />
      <FaqSection faqs={soc2.faqs} />
      <FinalCta
        title="Start Your SOC 2 Compliance Journey Today"
        lead="We prepare you thoroughly so there are no last-minute surprises or delays during audits."
        primary="Get a Free Consultation"
        secondary="View Pricing"
      />
      <ContactSection />
    </>
  );
}