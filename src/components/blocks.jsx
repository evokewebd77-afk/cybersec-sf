import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import {
  Section,
  Container,
  SectionHead,
  Card,
  CheckList,
  Steps,
  FAQ,
  PricingTable,
  StatBar,
  ReportPreview,
} from "../components/ui";

function FinalCta({ title, lead, primary, secondary }) {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-200 bg-mint px-7 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
              {title}
            </h2>
            {lead && (
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-600">
                {lead}
              </p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/#contact" className="btn btn-primary btn-lg">
                {primary ?? "Request an Assessment"}
                <Icon path="M5 12h14M12 5l7 7-7 7" className="h-4 w-4" />
              </Link>
              {secondary && (
                <a href="#plans" className="btn btn-outline btn-lg">
                  {secondary}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageGrid({ cards }) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {cards.map((c) => (
        <Card key={c.title} className="p-7">
          <div className="flex items-start gap-4">
            <span className="icon-chip">
              <Icon
                path={["M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z"]}
                className="h-6 w-6"
              />
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-ink-950">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {c.desc}
              </p>
            </div>
          </div>
          {c.points?.length ? (
            <div className="mt-5 border-t border-ink-200 pt-5">
              <CheckList items={c.points} />
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
}

function Pillars({ items }) {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p, i) => (
        <div
          key={p.title}
          className="rounded-2xl border border-ink-200 bg-white p-6 shadow-[var(--shadow-soft)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-sm font-extrabold text-brand-700">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-base font-bold text-ink-950">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

function ServiceCards({ cards, columns = 4 }) {
  return (
    <div
      className={`mt-12 grid gap-5 ${
        columns === 2
          ? "sm:grid-cols-2"
          : columns === 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2"
      }`}
    >
      {cards.map((c) => (
        <Card key={c.title} className="flex flex-col p-6">
          <span className="icon-chip">
            <Icon
              path={["M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z"]}
              className="h-6 w-6"
            />
          </span>
          <h3 className="mt-4 text-base font-bold leading-snug text-ink-950">
            {c.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.desc}</p>
          <div className="mt-4 flex-1">
            <CheckList items={c.points} />
          </div>
        </Card>
      ))}
    </div>
  );
}

function Lead({ children }) {
  return (
    <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-ink-600 sm:text-lg">
      {children}
    </p>
  );
}

function WhyGrid({ items }) {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <div
          key={c.title}
          className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white px-5 py-5 shadow-[var(--shadow-soft)]"
        >
          <span className="icon-chip h-11 w-11">
            <Icon path={c.icon} className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-bold leading-snug text-ink-950">
              {c.title}
            </span>
            {c.desc && (
              <span className="mt-1.5 block text-sm leading-relaxed text-ink-600">
                {c.desc}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChipList({ items, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ReportSection({ title, highlight, lead, items }) {
  return (
    <Section className="bg-mint">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <SectionHead
              center={false}
              eyebrow="Deliverables"
              title={title}
              highlight={highlight}
            />
            {lead && <Lead>{lead}</Lead>}
            <div className="mt-8">
              <CheckList items={items} />
            </div>
          </div>
          <div className="lg:pt-4">
            <ReportPreview
              title="SECURITY REPORT"
              rows={[
                { label: "Broken authentication", level: "critical" },
                { label: "IDOR in API endpoint", level: "high" },
                { label: "Missing rate limiting", level: "medium" },
                { label: "Verbose error messages", level: "low" },
              ]}
            />
            <p className="mt-4 text-sm text-ink-500">
              Executive summary, technical findings, CVSS scoring, proof-of-concept
              evidence, step-by-step remediation, and retesting support.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PlansSection({ plans }) {
  return (
    <Section id="plans" className="bg-white">
      <Container>
        <SectionHead
          eyebrow="Transparent Pricing"
          title="Our Security Plans"
          subtitle="No hidden fees. Scale your Security and Compliance as your business grows."
        />
        <div className="mt-12">
          <PricingTable plans={plans} />
        </div>
      </Container>
    </Section>
  );
}

function WhoNeeds({ data }) {
  if (!data) return null;
  return (
    <Section className="bg-mint">
      <Container>
        <h2 className="text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
          {data.title} <span className="text-gradient">{data.highlight}</span>
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {data.items.map((i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 rounded-2xl border border-ink-200 bg-white px-4 py-3.5"
            >
              <Icon path="M5 12l4 4L19 6" className="h-4 w-4 shrink-0 text-brand-600" />
              <span className="text-sm font-semibold text-ink-800">{i}</span>
            </li>
          ))}
        </ul>
        {data.highlightBox && (
          <p className="mt-6 rounded-2xl border border-brand-200 bg-white px-5 py-4 text-sm font-semibold text-brand-800">
            {data.highlightBox}
          </p>
        )}
      </Container>
    </Section>
  );
}

function FaqSection({ faqs, title = "Frequently Asked Questions" }) {
  return (
    <Section className="bg-mint">
      <Container>
        <SectionHead eyebrow="FAQs" title={title} />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Container>
    </Section>
  );
}

export {
  FinalCta,
  CoverageGrid,
  Pillars,
  ServiceCards,
  Lead,
  WhyGrid,
  ChipList,
  ReportSection,
  PlansSection,
  WhoNeeds,
  FaqSection,
};

export { StatBar, Steps };