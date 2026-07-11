'use client';

import { useState } from 'react';
import { faqs } from '../data/products';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-text-primary">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/5 bg-surface/30 overflow-hidden transition-colors hover:border-white/10"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex items-center justify-between w-full p-6 text-left font-semibold text-text-primary text-base"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
