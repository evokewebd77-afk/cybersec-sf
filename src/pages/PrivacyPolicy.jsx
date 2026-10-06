import PageHero from "../components/PageHero";
import { Container, CheckList } from "../components/ui";
import { privacy } from "../data/privacy";
import Icon from "../components/Icon";

const YEAR = new Date().getFullYear();

export default function PrivacyPolicy() {
  const p = privacy;

  return (
    <>
      <PageHero
        badge="Legal & Compliance"
        title={p.title}
        titleAccent={p.titleAccent}
        subtitle={p.intro}
      >
        <p className="mt-8 text-sm font-semibold text-ink-600">
          Effective Date: <span className="text-brand-700">{YEAR}</span> •{" "}
          {p.version}
        </p>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-950">
                  Contents
                </p>
                <nav className="mt-4 space-y-1">
                  {p.sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-800"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-6">
              <div className="rounded-2xl border border-brand-200 bg-mint px-6 py-6">
                <p className="text-[0.95rem] leading-relaxed text-ink-700">
                  <strong className="font-extrabold text-ink-950">
                    Cybersec
                  </strong>{" "}
                  ("we", "our", "us") operates{" "}
                  <a
                    href="https://cybersec.itcindia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-700 underline"
                  >
                    https://cybersec.itcindia.org
                  </a>
                  . {p.introCard}
                </p>
              </div>

              {p.sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 rounded-3xl border border-ink-200 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
                >
                  <h2 className="text-xl font-extrabold text-ink-950 sm:text-2xl">
                    {s.title}
                  </h2>

                  {s.blocks && (
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      {s.blocks.map((b) => (
                        <div
                          key={b.title}
                          className="rounded-2xl bg-brand-50/70 px-5 py-4"
                        >
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                            {b.title}
                          </p>
                          <div className="mt-3">
                            <CheckList items={b.items} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.body?.map((b, i) => (
                    <p
                      key={i}
                      className="mt-4 text-[0.95rem] leading-relaxed text-ink-700"
                    >
                      {b.text}
                      {b.before}
                      {b.strong && (
                        <strong className="font-bold text-ink-950">
                          {b.strong}
                        </strong>
                      )}
                      {b.after}
                      {b.underline && <u>{b.underline}</u>}
                      {b.suffix}
                    </p>
                  ))}

                  {s.list && (
                    <div className="mt-5">
                      <CheckList items={s.list} />
                    </div>
                  )}

                  {s.rights && (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {s.rights.map((r) => (
                        <div
                          key={r}
                          className="flex items-center gap-2.5 rounded-xl border border-ink-200 bg-white px-4 py-3.5"
                        >
                          <span className="icon-chip h-9 w-9">
                            <Icon path="M5 12l4 4L19 6" className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold text-ink-800">
                            {r}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.smallBlocks && (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {s.smallBlocks.map((b) => (
                        <div
                          key={b.title}
                          className="rounded-2xl border border-ink-200 px-5 py-4"
                        >
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-600">
                            {b.title}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-ink-600">
                            {b.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.contact && (
                    <div className="mt-5 rounded-2xl border border-brand-200 bg-mint px-6 py-5">
                      <p className="text-sm font-extrabold text-ink-950">
                        {s.contact.name}
                      </p>
                      <p className="mt-2 text-sm text-ink-700">
                        Email:{" "}
                        <a
                          href={`mailto:${s.contact.email}`}
                          className="font-semibold text-brand-700 underline"
                        >
                          {s.contact.email}
                        </a>
                      </p>
                      <p className="mt-1 text-sm text-ink-700">
                        Regards:{" "}
                        <a
                          href={s.contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-brand-700 underline"
                        >
                          cybersec.itcindia.org
                        </a>
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
