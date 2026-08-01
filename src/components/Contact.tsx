"use client";

/**
 * Contact V4 — panneau : coordonnées (email, LinkedIn, GitHub) à gauche,
 * mini-formulaire à droite. « Envoyer » ouvre le client mail avec le
 * message pré-rempli (site statique, pas de backend).
 */

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const EMAIL = "jimmy-94@hotmail.fr";

const iconBox =
  "w-9 h-9 rounded-[10px] bg-white border border-line-soft inline-flex items-center justify-center shrink-0";

const inputStyle =
  "w-full px-4 py-[13px] rounded-[10px] border border-line-soft bg-white text-ink text-sm focus:outline-none focus:border-accent transition-colors";

const Contact = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const body = [message, name && `— ${name}`, email && `(${email})`]
    .filter(Boolean)
    .join("\n");
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t.contact.mailSubject
  )}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

  return (
    <section
      id="contact"
      className="scroll-mt-20 max-w-[1160px] mx-auto px-6 md:px-10 pt-[90px] pb-[60px]"
    >
      <div className="bg-surface border border-tint rounded-[22px] p-8 md:p-[60px] lg:px-16 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent mb-3.5">
            {t.contact.kicker}
          </p>
          <h2 className="font-display text-[30px] md:text-[38px] font-bold tracking-[-0.02em] text-ink mb-4 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-base leading-[1.65] text-body mb-8 text-pretty">
            {t.contact.sub}
          </p>

          <div className="flex flex-col gap-3.5 items-start">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 text-[15px] font-semibold text-ink hover:text-accent transition-colors"
            >
              <span className={iconBox}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3e5c76"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              {EMAIL}
            </a>
            <a
              href="https://www.linkedin.com/in/ji-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[15px] font-medium text-muted hover:text-accent transition-colors"
            >
              <span className={iconBox}>
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={17} height={17} />
              </span>
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Jimmmyy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[15px] font-medium text-muted hover:text-accent transition-colors"
            >
              <span className={iconBox}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#17181a">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </span>
              GitHub ↗
            </a>
          </div>
        </div>

        {/* ── Formulaire ── */}
        <div className="flex flex-col gap-3.5 justify-center">
          <input
            type="text"
            placeholder={t.contact.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyle}
          />
          <input
            type="email"
            placeholder={t.contact.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
          />
          <textarea
            placeholder={t.contact.message}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputStyle} resize-y`}
          />
          <a
            href={mailtoHref}
            className="inline-flex justify-center px-6 py-3.5 rounded-[10px] bg-accent text-white font-semibold text-[15px] shadow-[0_8px_20px_-8px_rgba(62,92,118,0.5)] hover:bg-accent-deep transition-colors"
          >
            {t.contact.send} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
