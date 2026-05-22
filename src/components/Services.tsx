/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { serviceItems, packages } from '../data';
import { Sparkles, Check, ChevronRight, HelpCircle } from 'lucide-react';

interface ServicesProps {
  onConfigurePackage: (packageName: string) => void;
}

export default function Services({ onConfigurePackage }: ServicesProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedPackTab, setSelectedPackTab] = useState<string>('all'); // or can filter

  return (
    <section id="servizi" className="py-24 md:py-32 bg-white border-t border-sage-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-semibold tracking-widest text-sage-500 uppercase font-mono"
          >
            I Nostri Servizi & Allestimenti
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-light tracking-tight text-charcoal"
          >
            Una firma di eleganza negli <span className="font-medium text-sage-500">allestimenti</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-md text-gray-400 font-light max-w-xl mx-auto leading-relaxed"
          >
            Dal noleggio di strutture sofisticate alla vendita di bomboniere e accessori personalizzati fatti a mano. Curiamo ogni angolo per creare l'atmosfera perfetta.
          </motion.p>
        </div>

        {/* Services Grid (6 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 md:mb-32">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative bg-white border border-sage-100 rounded-2xl overflow-hidden p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="aspect-16/10 rounded-xl overflow-hidden mb-6 relative border border-sage-50">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text content */}
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-1.5 border-b border-sage-50 pb-3">
                  <Sparkles className="w-4 h-4 text-sage-400" />
                  <h3 className="font-display font-medium text-lg text-charcoal">{service.title}</h3>
                </div>
                
                <p className="text-xs text-gray-500 font-light leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 pt-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#8c7b6c] font-light">
                      <Check className="w-3.5 h-3.5 text-sage-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimal trigger link */}
              <div className="pt-6 border-t border-sage-50/50 mt-6 flex justify-between items-center text-xs font-semibold text-sage-500 uppercase tracking-wider">
                <span>Soluzioni su misura</span>
                <ChevronRight className="w-4 h-4 text-sage-400 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Packages Comparison Grid */}
        <div className="border-t border-sage-100/50 pt-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-beige-500 uppercase font-mono">
              Soluzioni & Prezzi Trasparenti
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-light text-charcoal tracking-tight">
              I Nostri <span className="font-medium text-beige-550">Pacchetti Iniziali</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-light max-w-lg mx-auto">
              Proposte strutturate pensate per adattarsi a diversi contesti ed esigenze di budget. Ogni pacchetto è flessibile e personalizzabile negli allestimenti.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {packages.map((pack, idx) => {
              const isPremium = pack.id === 'premium';
              return (
                <motion.div
                  key={pack.id}
                  id={`package-card-${pack.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                    isPremium
                      ? 'bg-sage-50 border-sage-200/60 ring-2 ring-sage-100 shadow-lg scale-103 z-10 lg:-translate-y-2'
                      : 'bg-white border-sage-100 shadow-xs hover:border-sage-200'
                  }`}
                >
                  {/* Recommended tag for Premium */}
                  {isPremium && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sage-400 text-white font-mono text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold shadow-xs">
                      Consigliato
                    </div>
                  )}

                  {/* Pricing Header */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] tracking-wider text-gray-400 font-mono uppercase font-bold">{pack.target}</p>
                      <h4 className="font-display font-semibold text-xl text-charcoal mt-1">{pack.name}</h4>
                    </div>

                    <div className="flex items-baseline gap-1 pt-2">
                      <span className="text-xs font-light text-gray-400 font-mono">da</span>
                      <span className="text-4xl font-display font-light text-charcoal tracking-tight">€{pack.priceFrom}</span>
                    </div>

                    <div className="h-[1px] bg-sage-100/60" />
                  </div>

                  {/* Included Services */}
                  <div className="space-y-6 flex-1 py-6">
                    <div className="space-y-3">
                      <p className="text-[10px] font-mono uppercase text-sage-600 tracking-wider font-semibold">Cosa Include:</p>
                      <ul className="space-y-2.5">
                        {pack.includes.map((inc, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-gray-600 font-light leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-1.5 shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-sage-100/30">
                      <p className="text-[10px] font-mono uppercase text-beige-500 tracking-wider font-semibold">Vantaggi Aggiuntivi:</p>
                      <ul className="space-y-2">
                        {pack.features.map((feat, index) => (
                          <li key={index} className="flex items-start gap-2 text-[11px] text-[#8c7b6c] italic font-light leading-snug">
                            <Check className="w-3.5 h-3.5 text-sage-300 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Select Trigger CTA */}
                  <div className="pt-6 border-t border-sage-100/40">
                    <button
                      id={`select-pack-btn-${pack.id}`}
                      onClick={() => onConfigurePackage(pack.name)}
                      className={`w-full py-3.5 px-6 rounded-xl font-medium tracking-wide text-xs uppercase cursor-pointer transition-all duration-300 ${
                        isPremium
                          ? 'bg-sage-400 hover:bg-sage-500 text-white shadow-xs'
                          : 'bg-white hover:bg-beige-50 text-sage-600 border border-sage-200'
                      }`}
                    >
                      Configura {pack.name}
                    </button>
                    <p className="text-center text-[9px] text-gray-400 font-light mt-2.5">
                      Richiede preventivo personalizzato finale
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Notice */}
          <div className="flex items-center justify-center gap-2 mt-12 text-xs text-[#8c7b6c] italic font-light">
            <HelpCircle className="w-4 h-4 text-beige-400 shrink-0" />
            <span>I prezzi finali vengono calcolati in base alla logistica, numero di ospiti e personalizzazioni richieste.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
