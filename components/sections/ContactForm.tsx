"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-bg-elev p-10 text-center">
        <CheckCircle2 className="text-cyan" size={32} />
        <p className="mt-4 font-medium text-text">{t("formSuccess")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elev p-7"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-text-muted">
          {t("formName")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-text-muted">
          {t("formEmail")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-text-muted">
          {t("formMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-none rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-medium text-[#05070d] transition-all hover:shadow-glow"
      >
        {t("formSubmit")}
        <Send size={15} className="rtl:-scale-x-100" />
      </button>
    </form>
  );
}
