import Icon from "./Icon";

/**
 * Reusable page hero. `variant` controls the decorative background.
 */
export default function PageHero({
  badge,
  title,
  titleAccent,
  subtitle,
  lead,
  primaryCta,
  secondaryCta,
  children,
  compact = false,
}) {
  return (
    <section
      className={`relative overflow-hidden bg-mint ${
        compact ? "py-14 sm:py-16" : "py-16 sm:py-20 lg:py-24"
      }`}
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-[-6rem] h-80 w-80 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-[-8rem] h-96 w-96 rounded-full bg-brand-100/70 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-700 shadow-[var(--shadow-soft)]">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand-500" />
              {badge}
            </span>
          )}

          <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {title}{" "}
            {titleAccent && <span className="text-gradient">{titleAccent}</span>}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
              {subtitle}
            </p>
          )}

          {lead && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500">
              {lead}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <a href={primaryCta.href ?? "/#contact"} className="btn btn-primary btn-lg">
                  {primaryCta.label}
                  <Icon path="M5 12h14M12 5l7 7-7 7" className="h-4 w-4" />
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href ?? "/#contact"}
                  className="btn btn-outline btn-lg"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}