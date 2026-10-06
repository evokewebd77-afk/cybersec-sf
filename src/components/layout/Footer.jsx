import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { footerColumns } from "../../data/home";

const YEAR = new Date().getFullYear();
import Icon from "../Icon";
import { useBackToTop } from "../../hooks";

function SocialLink({ item }) {
  return (
    <a
      href={item.href}
      target={item.name === "Email" ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={item.name}
      title={item.name}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
    >
      <Icon path={item.path} className="h-[18px] w-[18px]" />
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const showTop = useBackToTop(700);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setMsg("Thanks for subscribing. We'll share security & compliance updates.");
    setEmail("");
  };

  return (
    <footer className="relative mt-16 border-t border-ink-200 bg-white">
      <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-700" />

      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.4fr_2fr_1.4fr]">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
              <Icon
                path="M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z"
                className="h-6 w-6"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-extrabold text-ink-950">
                CyberSec
              </span>
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-700">
                IS Division of ITC INDIA
              </span>
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-600">
            Elevating global security standards through advanced VAPT, IoT
            security, and comprehensive compliance frameworks. Your trusted
            partner in digital resilience.
          </p>

          <div className="mt-6 flex gap-2.5">
            {site.socials.map((s) => (
              <SocialLink key={s.name} item={s} />
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-950">
                {col.heading}
              </h3>
              <div className="divider my-3.5 !from-brand-200" />
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-600 transition-colors hover:text-brand-700"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-950">
            Newsletter
          </h3>
          <div className="divider my-3.5 !from-brand-200" />
          <p className="text-sm leading-relaxed text-ink-600">
            Get latest security insights and compliance updates delivered.
          </p>
          <form onSubmit={subscribe} className="mt-4">
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                aria-label="Email address"
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400"
              />
              <button type="submit" className="btn btn-primary btn-sm shrink-0">
                Subscribe
              </button>
            </div>
          </form>
          {msg && (
            <p className="mt-3 text-xs font-medium text-brand-700">{msg}</p>
          )}

          <p className="mt-6 text-sm text-ink-600">
            Reach out for audits, compliance, or cybersecurity consultations.
          </p>
          <div className="mt-3 space-y-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-ink-700 hover:text-brand-700"
            >
              <Icon path="M3 5h18v14H3z" className="h-4 w-4 text-brand-600" />
              {site.email}
            </a>
            <span className="flex items-center gap-2 text-ink-700">
              <Icon
                path="M12 22s7-5.6 7-12a7 7 0 10-14 0c0 6.4 7 12 7 12z"
                className="h-4 w-4 text-brand-600"
              />
              {site.address}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-200">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-ink-500 sm:flex-row sm:text-left">
          <p>
            © {YEAR}{" "}
            <span className="font-semibold text-ink-700">CyberSec</span> —{" "}
            Information Security Division of ITC India Pvt. Ltd.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.itcindia.org/terms-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-700"
            >
              Terms &amp; Conditions
            </a>
            <Link to="/privacy-policy" className="hover:text-brand-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-6 right-5 z-40 flex flex-col gap-3 print:hidden">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-brand-700 shadow-[var(--shadow-lift)] transition-all hover:-translate-y-0.5 hover:border-brand-400"
          >
            <Icon path="M12 4l-8 8h5v8h6v-8h5z" className="h-5 w-5 rotate-180" />
          </button>
        )}
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-[0_14px_30px_-10px_rgba(21,128,61,0.9)] transition-transform hover:scale-105"
        >
          <Icon
            path="M3 5h18v14H3zM3 7l9 6 9-6"
            className="h-6 w-6"
          />
        </a>
      </div>
    </footer>
  );
}