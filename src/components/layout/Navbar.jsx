import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site, nav } from "../../data/site";
import { useScrolled } from "../../hooks";
import Icon from "../Icon";

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="CyberSec home">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-[0_8px_20px_-8px_rgba(21,128,61,0.8)] transition-transform duration-300 group-hover:scale-105">
        <Icon path="M12 2L4 5v6c0 5 3.5 9.7 8 10.9 4.5-1.2 8-5.9 8-10.9V5l-8-3z" className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span className="block text-xl font-extrabold tracking-tight text-ink-950">
          {site.name}
        </span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-700">
          {site.parentTagline}
        </span>
      </span>
    </Link>
  );
}

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRefTimer();

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        closeTimer.clear();
        setOpen(true);
      }}
      onMouseLeave={() => closeTimer.set(() => setOpen(false), 120)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-ink-700 transition-colors hover:text-brand-700"
      >
        {label}
        <Icon
          path="M6 9l6 6 6-6"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2">
          <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white p-2 shadow-[var(--shadow-lift)]">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-800"
                      : "text-ink-700 hover:bg-brand-50/70"
                  }`
                }
              >
                <span className="text-sm font-semibold">{it.label}</span>
                {it.desc && (
                  <span className="text-xs text-ink-500">{it.desc}</span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function useRefTimer() {
  const [t, setT] = useState(null);
  return {
    clear: () => t && clearTimeout(t),
    set: (fn, ms) => setT(setTimeout(fn, ms)),
  };
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-200 bg-white/90 backdrop-blur-lg"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink
            to={nav.about.to}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-[0.95rem] font-semibold transition-colors ${
                isActive ? "text-brand-700" : "text-ink-700 hover:text-brand-700"
              }`
            }
          >
            {nav.about.label}
          </NavLink>
          <Dropdown label="Services" items={nav.services.items} />
          <Dropdown label="Audits" items={nav.audits.items} />
          <Dropdown label="Certifications" items={nav.certifications.items} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <Icon path="M6 3h3l2 5-2.5 1.5a12 12 0 006 6L16 13l5 2v3a2 2 0 01-2.2 2A16 16 0 014 5.2 2 2 0 016 3z" className="h-4 w-4" />
            Talk to Us
          </a>
          <Link to="/#contact" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-ink-200 bg-white lg:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-ink-800 transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-ink-800 transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-ink-800 transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-ink-200 bg-white transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[80vh] border-t" : "max-h-0"
        }`}
      >
        <div
          className="container-x overflow-y-auto py-4"
          style={{ maxHeight: "80vh" }}
        >
          <MobileGroup label={nav.about.label} to={nav.about.to} onClick={close} />
          {[
            ["Services", nav.services.items],
            ["Audits", nav.audits.items],
            ["Certifications", nav.certifications.items],
          ].map(([label, items]) => (
            <MobileGroup key={label} label={label} items={items} onClick={close} />
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/#contact" onClick={close} className="btn btn-primary w-full">
              Get Started
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>

      </header>
  );
}

function MobileGroup({ label, to, items, onClick }) {
  const [open, setOpen] = useState(false);
  if (to) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className="flex items-center justify-between border-b border-ink-100 py-3.5 text-base font-semibold text-ink-800"
      >
        {label}
        <Icon path="M9 6l6 6-6 6" className="h-4 w-4 text-ink-400" />
      </NavLink>
    );
  }
  return (
    <div className="border-b border-ink-100">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-ink-800"
      >
        {label}
        <Icon
          path="M6 9l6 6 6-6"
          className={`h-4 w-4 text-ink-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-3 pl-3">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              onClick={onClick}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-800"
            >
              {it.label}
              <span className="ml-2 text-xs text-ink-400">{it.desc}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}