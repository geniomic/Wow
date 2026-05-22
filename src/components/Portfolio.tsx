/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems } from '../data';
import { EventType } from '../types';
import { MapPin, Eye, Palette } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<EventType | 'tutti'>('tutti');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const categories: { label: string; value: EventType | 'tutti' }[] = [
    { label: 'Tutti', value: 'tutti' },
    { label: 'Matrimoni', value: 'matrimonio' },
    { label: 'Battesimi', value: 'battesimo' },
    { label: 'Comunioni', value: 'comunione' },
    { label: 'Party', value: 'party' },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => filter === 'tutti' || item.category === filter
  );

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-beige-50/45">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-[#8c7b6c] uppercase font-mono">
              La Nostra Galleria
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal tracking-tight">
              Eventi realizzati con <span className="font-medium text-sage-500">amore</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              Sfoglia alcuni dei nostri lavori più recenti nei Castelli Romani. Ogni allestimento è studiato partendo da un tema concordato e declinato su una palette colori coerente.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 bg-white p-1.5 rounded-full border border-sage-100 shadow-3xs">
            {categories.map((cat) => {
              const isActive = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  id={`filter-btn-${cat.value}`}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 relative cursor-pointer ${
                    isActive ? 'text-white' : 'text-gray-500 hover:text-sage-500'
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-sage-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                id={`portfolio-card-${item.id}`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative bg-white border border-sage-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Image Frame */}
                <div className="aspect-4/3 overflow-hidden relative bg-sage-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transition-transform duration-[1.2s] ease-out group-hover:scale-104"
                  />
                  
                  {/* Subtle Top Category Label */}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-sage-600 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold border border-white/20">
                    {item.category}
                  </div>

                  {/* Dark Glass Hover Overlay (Apple-Inspired Details Layer) */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none md:pointer-events-auto">
                    <div className="text-white space-y-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      {/* Interaction hint for screen readers / mobile */}
                      <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-sage-200">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Allestimento Completo</span>
                      </div>
                      
                      <h4 className="font-display font-medium text-lg leading-tight">
                        {item.title}
                      </h4>
                      
                      <div className="flex items-center gap-1.5 text-xs text-gray-200 font-light">
                        <MapPin className="w-3.5 h-3.5 text-white/70" />
                        <span>{item.location}</span>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-100 font-light">
                        <span>Tema: {item.theme}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer details (visible on mobile / when not hovered) */}
                <div className="p-5 border-t border-sage-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-medium text-charcoal text-md leading-tight group-hover:text-sage-500 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-mono text-gray-400 capitalize">
                      {item.location.split(',')[0]}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="text-[11px] italic font-light truncate max-w-[180px]">Tema: {item.theme}</span>
                    
                    {/* Color Palette Indicators */}
                    <div className="flex items-center gap-1.5" title="Palette colori allestimento">
                      <Palette className="w-3 h-3 text-gray-400" />
                      <div className="flex -space-x-1">
                        {item.colors.map((col, i) => (
                          <span
                            key={i}
                            className="w-3.5 h-3.5 rounded-full border border-white inline-block shadow-xs"
                            style={{ backgroundColor: col }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Creative callout under the portfolio */}
        <div className="mt-16 text-center bg-white border border-sage-150/60 p-8 rounded-2xl max-w-3xl mx-auto shadow-xs">
          <p className="font-display font-light text-md text-charcoal leading-relaxed">
            🌿 "Hai in mente un tema o una palette specifica che non vedi qui? Realizziamo allestimenti completamente sartoriali. Contattaci e lavoreremo su un progetto unico per la tua location."
          </p>
        </div>
      </div>
    </section>
  );
}
