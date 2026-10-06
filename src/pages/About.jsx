import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import Icon from "../components/Icon";
import { Section, Container, SectionHead, Card } from "../components/ui";
import { about } from "../data/about";

export default function About() {
  const a = about;

  return (
    <>
      <PageHero
        badge={a.badge}
        title={a.title}
        titleAccent={a.titleAccent}
        subtitle={a.mission}
        primaryCta={{ label: "Consult Our Experts" }}
        secondaryCta={{ label: "View Services" }}
      >
        <div className="mt-12 grid max-w-3xl gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {a.stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-6 text-center">
              <div className="text-3xl font-extrabold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Identity */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <span className="eyebrow eyebrow-dark">{a.identity.eyebrow}</span>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                {a.identity.title}{" "}
                <span className="text-gradient">{a.identity.highlight}</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                {a.identity.body}
              </p>

              <div className="mt-8 space-y-4">
                {a.identity.points.map((p) => (
                  <div
                    key={p.title}
                    className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white px-5 py-5 shadow-[var(--shadow-soft)]"
                  >
                    <span className="icon-chip h-11 w-11">
                      <Icon
                        path="M12 2a5 5 0 015 5v2h2a5 5 0 015 5 5 5 0 01-5 5h-2v2a5 5 0 01-5 5 5 5 0 01-5-5v-2H5a5 5 0 01-5-5 5 5 0 015-5h2V7a5 5 0 015-5z"
                        className="h-5 w-5"
                      />
                    </span>
                    <span>
                      <span className="block font-bold text-ink-950">
                        {p.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink-600">
                        {p.desc}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-brand-200 bg-mint p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                  At a glance
                </p>
                <div className="mt-6 space-y-5">
                  {a.identity.statsLine.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline gap-3 border-b border-brand-200 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-3xl font-extrabold text-brand-800">
                        {s.value}
                      </span>
                      <span className="text-sm font-semibold text-ink-600">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-ink-200 bg-white p-7 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-500">
                  What we stand for
                </p>
                <ul className="mt-5 space-y-4">
                  {a.pillars.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <Icon
                        path="M5 12l4 4L19 6"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      />
                      <span className="text-sm leading-relaxed text-ink-700">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-mint">
        <Container>
          <SectionHead
            eyebrow={a.values.eyebrow}
            title={a.values.title}
            highlight={a.values.highlight}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.items.map((v) => (
              <Card key={v.title} className="p-6">
                <span className="icon-chip">
                  <Icon path="M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug text-ink-950">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {v.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Standards */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow={a.standards.eyebrow}
            title={a.standards.title}
            subtitle={a.standards.lead}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.standards.items.map((s) => (
              <Card key={s.title} className="p-6 text-center">
                <span className="mx-auto flex h-14 w-16 items-center justify-center rounded-xl bg-brand-50 text-[0.72rem] font-extrabold tracking-wide text-brand-700">
                  {s.badge}
                </span>
                <h3 className="mt-4 text-base font-bold text-ink-950">
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

      {/* VAPT Software Testing */}
      <Section id="SoftwareVAPTSection" className="bg-mint">
        <Container>
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
            {a.vaptDivision.title} –{" "}
            <span className="text-gradient">{a.vaptDivision.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-ink-600">
            {a.vaptDivision.subtitle}
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {a.vaptDivision.cards.map((c) => (
              <Card key={c.head} className="flex flex-col p-7">
                <h3 className="text-lg font-bold text-ink-950">{c.head}</h3>
                <div className="my-4 h-px bg-ink-200" />
                <ul className="space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Icon
                        path="M5 12l4 4L19 6"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      />
                      <span className="text-sm leading-snug text-ink-700">
                        {i}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                    {c.sub}
                  </p>
                  {c.subText.map((t) => (
                    <p key={t} className="text-sm leading-relaxed text-ink-600">
                      {t}
                    </p>
                  ))}
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                    {c.sub1}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-600">
                    {c.subText1}
                  </p>
                </div>

                <Link to={c.link} className="btn btn-outline mt-6">
                  Know More
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  );
}