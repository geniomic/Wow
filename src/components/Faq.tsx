/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqItems } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Open the first one by default

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-beige-50/25 border-t border-sage-50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#8c7b6c] uppercase font-mono">
            Domande Frequenti
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-light text-charcoal tracking-tight">
            I tuoi dubbi, <span className="font-medium text-sage-500">chiariti</span>
          </h2>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Se hai altre curiosità sui nostri allestimenti personalizzati, noleggi o processi creativi, non esitare a scriverci direttamente.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-sage-200/80 shadow-3xs' : 'border-sage-100/55 hover:border-sage-200'
                }`}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-hidden group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4.5 h-4.5 shrink-0 transition-colors ${isOpen ? 'text-sage-500' : 'text-gray-400'}`} />
                    <span className="font-display font-medium text-[13px] sm:text-sm text-charcoal group-hover:text-sage-600 transition-colors">
                      {item.question}
                    </span>
                  </div>
                  
                  <div
                    className={`w-7 h-7 rounded-full bg-sage-50 border border-sage-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-sage-400 border-sage-400 text-white' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Answer container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-sage-50/50">
                        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed pl-7">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Live CTA */}
        <div className="mt-12 text-center p-6 bg-white border border-beige-150/40 rounded-2xl max-w-xl mx-auto shadow-3xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-0.5">
            <p className="text-xs font-bold text-charcoal">Hai un'altra domanda?</p>
            <p className="text-[10px] text-gray-400 font-light">Siamo disponibili h24 via WhatsApp per fornirti risposte veloci.</p>
          </div>
          <a
            id="faq-chat-whatsapp"
            href="https://wa.me/393330000000?text=Ciao%20WoW,%20avrei%20una%20domanda%20sulle%20vostre%20decorazioni..."
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-white font-medium text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-3xs hover:brightness-105 transition-all select-none cursor-pointer"
          >
            <span>Scrivici Ora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
