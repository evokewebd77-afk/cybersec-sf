import { useState } from "react";
import { inquiryTypes } from "../data/site";
import Icon from "./Icon";

const empty = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "Sending your request…" });

    try {
      const res = await fetch(
        "https://damnart-ai-guladab.n8n-wsk.com/webhook/itc-vanshita",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            getstarted: true,
            label: "Contact Form",
            ...form,
          }),
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus({
        type: "success",
        text: "Thank you! Your request has been received. Our team will reach out shortly.",
      });
      setForm(empty);
    } catch (err) {
      console.error("Error sending form:", err);
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  const field =
    "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400";

  return (
    <section id="contact" className="bg-mint py-16 sm:py-20">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <span className="eyebrow eyebrow-dark">Contact Us</span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Let's talk about your{" "}
              <span className="text-gradient">security roadmap</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              Reach out for audits, compliance, or cybersecurity consultations.
              Tell us what you need and a security specialist will get back to
              you.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                {
                  icon: "M3 5h18v14H3zM3 7l9 6 9-6",
                  title: "Email",
                  text: "info@itcindia.org",
                  href: "mailto:info@itcindia.org",
                },
                {
                  icon: "M12 22s7-5.6 7-12a7 7 0 10-14 0c0 6.4 7 12 7 12z",
                  title: "Location",
                  text: "ITC India Pvt. Ltd.",
                },
                {
                  icon: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2",
                  title: "Response time",
                  text: "We reply within one business day.",
                },
              ].map((c) => (
                <li
                  key={c.title}
                  className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white px-4 py-3.5"
                >
                  <span className="icon-chip h-10 w-10">
                    <Icon path={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                      {c.title}
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-semibold text-ink-800 hover:text-brand-700"
                      >
                        {c.text}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-ink-800">
                        {c.text}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={submit}
            className="card p-6 shadow-[var(--shadow-lift)] sm:p-8"
          >
            <h3 className="text-xl font-extrabold text-ink-950">
              Send us a message
            </h3>
            <p className="mt-1.5 text-sm text-ink-600">
              Tell us about your target, scope, and timeline.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  Full Name
                </label>
                <input
                  required
                  value={form.fullName}
                  onChange={set("fullName")}
                  className={field}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  className={field}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  Phone Number
                </label>
                <input
                  value={form.phone}
                  onChange={set("phone")}
                  className={field}
                  placeholder="+91"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  Company / Organization
                </label>
                <input
                  value={form.company}
                  onChange={set("company")}
                  className={field}
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  Inquiry Type
                </label>
                <select
                  required
                  value={form.inquiryType}
                  onChange={set("inquiryType")}
                  className={field}
                >
                  <option value="">Select an inquiry type</option>
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  className={`${field} resize-y`}
                  placeholder="Describe your requirements..."
                />
              </div>
            </div>

            {status.text && (
              <p
                className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
                  status.type === "success"
                    ? "bg-brand-50 text-brand-800"
                    : status.type === "error"
                      ? "bg-red-50 text-red-700"
                      : "bg-ink-100 text-ink-600"
                }`}
                role="status"
              >
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="btn btn-primary btn-lg mt-5 w-full disabled:opacity-60"
            >
              {status.type === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}