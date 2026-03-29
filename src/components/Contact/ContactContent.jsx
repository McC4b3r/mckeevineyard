"use client";

import { FormspreeProvider } from "@formspree/react";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <section className="page-shell py-10 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="paper-panel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
          <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(88,117,80,0.14),transparent)]" />
          <div className="relative">
            <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.28em] text-emerald-800">
              Contact
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold text-stone-900">
              Get in Touch
            </h1>
            <p className="mt-6 font-[family-name:var(--font-body)] text-lg leading-8 text-stone-700">
              We welcome inquiries about the vineyard, the ranch&apos;s history, and general
              availability. Use the form to send a message and we&apos;ll respond as soon as we can.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-white/70 bg-white/65 p-5 shadow-[0_18px_45px_-30px_rgba(59,45,24,0.35)] backdrop-blur">
              <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.22em] text-stone-500">
                Helpful tip
              </p>
              <p className="mt-3 font-[family-name:var(--font-body)] text-base leading-7 text-stone-700">
                Including a few details such as your interest, preferred timing, or any relevant
                context will help us respond more efficiently.
              </p>
            </div>
          </div>
        </div>
        <FormspreeProvider project="1690212652338380556">
          <ContactForm />
        </FormspreeProvider>
      </div>
    </section>
  );
}
