/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const towns = [
    'Frascati', 'Grottaferrata', 'Castel Gandolfo', 
    'Albano Laziale', 'Genzano di Roma', 'Ariccia', 
    'Nemi', 'Rocca di Papa', 'Marino', 'Velletri', 
    'Lariano', 'Lanuvio', 'Monte Compatri', 'Monte Porzio Catone'
  ];

  return (
    <footer className="bg-sage-50/40 border-t border-sage-100/50 pt-16 pb-8 text-xs text-gray-500 font-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-white border border-sage-200 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-sage-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-charcoal text-md tracking-wider">WoW</span>
                <span className="text-[8px] font-mono tracking-widest text-[#8c7b6c] uppercase -mt-0.5">events & party</span>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed font-light pr-4 text-[11px]">
              Soluzioni sofisticate di allestimento, vendita di decorazioni fatte a mano e noleggio di strutture eleganti per rendere cerimonie e feste dei veri capolavori estetici nei Castelli Romani.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white border border-sage-200 flex items-center justify-center text-gray-400 hover:text-sage-500 hover:border-sage-400 transition-colors"
                title="Sgfoglia idee su Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white border border-sage-200 flex items-center justify-center text-gray-400 hover:text-sage-500 hover:border-sage-400 transition-colors"
                title="Seguici su Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-3.5">
            <h5 className="font-display font-semibold text-charcoal tracking-wide uppercase text-[9px] font-mono text-sage-600">Navigazione</h5>
            <ul className="space-y-2 text-[11px] font-light">
              <li><a href="#home" className="hover:text-sage-500 transition-colors">Home</a></li>
              <li><a href="#servizi" className="hover:text-sage-500 transition-colors">Servizi & Allestimenti</a></li>
              <li><a href="#portfolio" className="hover:text-sage-500 transition-colors">Visual Portfolio</a></li>
              <li><a href="#configuratore" className="hover:text-sage-500 transition-colors">Configuratore Budget</a></li>
              <li><a href="#chi-siamo" className="hover:text-sage-500 transition-colors">La nostra Storia</a></li>
              <li><a href="#contatti" className="hover:text-sage-500 transition-colors">Richiedi Preventivo</a></li>
            </ul>
          </div>

          {/* Castelli Romani towns coverage column */}
          <div className="md:col-span-6 space-y-3.5">
            <h5 className="font-display font-semibold text-charcoal tracking-wide uppercase text-[9px] font-mono text-[#8c7b6c]">
              Comuni dei Castelli Romani Serviti
            </h5>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {towns.map((town) => (
                <span
                  key={town}
                  className="px-2 py-1 rounded-md bg-white border border-sage-100/50 text-[10px] text-gray-400 hover:border-sage-200 hover:text-sage-500 transition-colors"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-[1px] bg-sage-150/60" />

        {/* Bottom block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1 text-gray-450 text-[10px]">
          <div>
            <p>© {new Date().getFullYear()} WoW - events & party. All rights reserved. PI: 01234567890.</p>
            <p className="text-[9px] text-gray-400 mt-1">Design raffinato ispirato alla naturale eleganza minimalista Castelli Romani.</p>
          </div>

          <button
            onClick={scrollUp}
            id="scroll-top-btn"
            className="px-4 py-2.5 rounded-full border border-sage-250 bg-white hover:bg-sage-50 text-sage-600 transition-colors duration-300 flex items-center gap-1.5 cursor-pointer font-medium uppercase text-[9px] font-mono tracking-widest"
          >
            <span>Torna su</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
