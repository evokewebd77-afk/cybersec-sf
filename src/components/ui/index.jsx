import { Link } from "react-router-dom";
import Icon, { StrokeIcon } from "../Icon";

export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`reveal py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Container({ className = "", children }) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function SectionHead({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
  className = "",
}) {
  return (
    <div
      className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <span className="eyebrow eyebrow-dark">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-ink-600" : "text-ink-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Badge({ children, className = "" }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

export function Card({ className = "", hover = true, children, as: As = "div" }) {
  return (
    <As className={`card ${hover ? "card-hover" : ""} ${className}`}>{children}</As>
  );
}

export function IconChip({ icon, className = "" }) {
  return (
    <span className={`icon-chip ${className}`}>
      {typeof icon === "function" ? icon() : <Icon path={icon} />}
    </span>
  );
}

export function CheckList({ items, className = "", dot = false }) {
  return (
    <ul className={`${dot ? "dot-list" : "check-list"} space-y-2.5 ${className}`}>
      {items.map((t, i) => (
        <li key={i} className="text-[0.94rem] leading-relaxed text-ink-700">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function CTARow({ items = [], align = "center", className = "" }) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      {items.map((it, i) =>
        it.href ? (
          <a key={i} href={it.href} className={`btn ${it.variant ?? "btn-primary"}`}>
            {it.label}
          </a>
        ) : (
          <Link
            key={i}
            to={it.to ?? "#"}
            className={`btn ${it.variant ?? "btn-primary"}`}
          >
            {it.label}
          </Link>
        )
      )}
    </div>
  );
}

export function StatsRow({ items = [], className = "" }) {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {items.map((s, i) => (
        <div
          key={i}
          className="rounded-2xl border border-ink-200 bg-white px-5 py-6 text-center shadow-[var(--shadow-soft)]"
        >
          <div className="text-3xl font-extrabold text-gradient sm:text-4xl">
            {s.value}
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function FeatureList({
  title,
  items,
  columns = 2,
  withIcons = false,
}) {
  return (
    <div>
      {title && (
        <h3 className="mb-4 text-lg font-bold text-ink-950">{title}</h3>
      )}
      <div
        className={`grid gap-3 ${
          columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-start gap-2.5 rounded-xl border border-ink-200 bg-white px-3.5 py-3"
          >
            {withIcons ? (
              <span className="mt-0.5 text-brand-600">
                <StrokeIcon d="M5 12l4 4L19 6" className="h-4 w-4" />
              </span>
            ) : (
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            )}
            <span className="text-sm leading-snug text-ink-700">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Steps({ items = [], className = "" }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((s, i) => (
        <div key={i} className="card card-hover p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-sm font-extrabold text-brand-700">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-bold text-ink-950">{s.title}</h3>
          </div>
          {s.desc && (
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.desc}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function FAQ({ items = [], columns = 1, className = "" }) {
  return (
    <div
      className={
        columns === 2
          ? `grid gap-4 md:grid-cols-2 ${className}`
          : `${className || "mx-auto max-w-4xl"} space-y-3`
      }
    >
      {items.map((f, i) => (
        <details key={i} className="card group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink-900">
            <span>{f.q}</span>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-transform duration-300 group-open:rotate-180">
              <Icon path="M6 9l6 6 6-6" className="h-3.5 w-3.5" />
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function PricingTable({ plans = [], className = "" }) {
  return (
    <div className={`grid gap-5 lg:grid-cols-3 ${className}`}>
      {plans.map((p, i) => (
        <div
          key={i}
          className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 ${
            p.popular
              ? "border-brand-400 bg-white shadow-[var(--shadow-lift)] lg:-mt-4 lg:mb-4"
              : "border-ink-200 bg-white shadow-[var(--shadow-soft)] hover:border-brand-300"
          }`}
        >
          {p.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">
              {p.badge ?? "Most Popular"}
            </span>
          )}
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
            {p.kicker}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold text-ink-950">{p.name}</h3>
          <p className="mt-1 text-sm text-ink-600">{p.tagline}</p>

          <div className="mt-5 flex items-end gap-2">
            <span className="text-3xl font-extrabold text-gradient">
              {p.price}
            </span>
            {p.period && (
              <span className="pb-1 text-sm font-medium text-ink-500">
                {p.period}
              </span>
            )}
          </div>

          {p.priceNote && (
            <p className="mt-1 text-xs text-ink-500">{p.priceNote}</p>
          )}

          {p.targets && (
            <p className="mt-2 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800">
              {p.targets}
            </p>
          )}

          <div className="mt-5 border-t border-ink-200 pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
              Best for:
            </p>
            <p className="mt-1.5 text-sm font-semibold text-ink-800">
              {p.bestFor}
            </p>
          </div>

          <ul className="mt-5 flex-1 space-y-2.5">
            {p.features.map((f, j) => (
              <li key={j} className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                    f.included === false
                      ? "bg-ink-200 text-ink-500"
                      : "bg-brand-100 text-brand-700"
                  }`}
                >
                  {f.included === false ? (
                    <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M6 12h12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  )}
                </span>
                <span className="text-sm leading-snug text-ink-700">
                  {f.label ?? f}
                </span>
              </li>
            ))}
          </ul>

          <Link
            to="/#contact"
            className={`btn mt-6 w-full ${p.popular ? "btn-primary" : "btn-outline"}`}
          >
            {p.cta ?? "Get Quote"}
          </Link>
        </div>
      ))}
    </div>
  );
}

export function StatBar({ items = [] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <div key={i} className="bg-white px-6 py-7 text-center">
          <div className="text-3xl font-extrabold text-gradient sm:text-4xl">
            {s.value}
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReportPreview({ title, rows = [] }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-2 border-b border-ink-200 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
        <span className="ml-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink-500">
          {title}
        </span>
      </div>
      <ul className="mt-4 space-y-3">
        {rows.map((r, i) => (
          <li key={i} className="flex items-center justify-between gap-4">
            <span className="text-sm text-ink-700">{r.label}</span>
            <span
              className={`rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider ${
                r.level === "critical"
                  ? "bg-red-50 text-red-700"
                  : r.level === "high"
                    ? "bg-amber-50 text-amber-700"
                    : r.level === "medium"
                      ? "bg-sky-50 text-sky-700"
                      : "bg-brand-50 text-brand-700"
              }`}
            >
              {r.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Section as SectionWrapper };