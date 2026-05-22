/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  onPlanClick: () => void;
  onPortfolioClick: () => void;
}

export default function Hero({ onPlanClick, onPortfolioClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 md:pt-32 flex items-center bg-white overflow-hidden"
    >
      {/* Abstract Design Elements - Apple inspired minimalism */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-beige-50/70 rounded-bl-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-[40%] bg-sage-50/50 rounded-tr-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-50 border border-sage-100 w-fit"
          >
            <span className="flex h-2 w-2 rounded-full bg-sage-400 animate-ping" />
            <span className="text-xs font-medium text-sage-600 tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <MapPin className="w-3.5 h-3.5 text-sage-400" /> Castelli Romani & Roma Sud
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-charcoal leading-[1.1] tracking-tight"
            >
              Diamo forma ai{' '}
              <span className="font-medium text-sage-500">tuoi sogni</span>.
              <br />
              Allestimenti che emozionano.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-md sm:text-lg text-gray-500 font-light leading-relaxed max-w-xl"
            >
              Creiamo allestimenti e decorazioni personalizzate per battesimi, comunioni, matrimoni e party esclusivi. Esperienza su misura, cura artigianale e soluzioni flessibili tra vendita e noleggio.
            </motion.p>
          </div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2"
          >
            <button
              id="hero-cta-plan"
              onClick={onPlanClick}
              className="group py-4 px-8 rounded-full bg-sage-400 text-white font-medium hover:bg-sage-500 transition-all duration-300 shadow-sm hover:shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5 text-sage-100" />
              <span>Configura il tuo Evento</span>
              <ArrowRight className="w-4.5 h-4.5 text-sage-200 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-cta-portfolio"
              onClick={onPortfolioClick}
              className="py-4 px-8 rounded-full border border-sage-200 bg-white hover:bg-sage-50 text-sage-600 font-medium transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Guarda il Portfolio
            </button>
          </motion.div>

          {/* Micro stats banner (Apple inspired subtle typography) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-gray-100 grid grid-cols-3 gap-6 max-w-lg"
          >
            <div>
              <p className="text-2xl font-display font-medium text-sage-500">100%</p>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 font-mono">Personalizzato</p>
            </div>
            <div>
              <p className="text-2xl font-display font-medium text-beige-400">Rapidità</p>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 font-mono">Operativa</p>
            </div>
            <div>
              <p className="text-2xl font-display font-medium text-gray-600">Completo</p>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 font-mono">Vendita & Noleggio</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Premium Mockup Graphic Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Background Sage Glow */}
          <div className="absolute -inset-4 bg-sage-100/30 rounded-3xl blur-2xl -z-10" />

          {/* Main Visual Frame */}
          <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-xl aspect-16/9 md:aspect-4/3 w-full group">
            <img
              id="hero-main-image"
              src="/src/assets/images/hero_banner_outdoor_1779481102089.png"
              alt="Elegante allestimento tavoli WoW"
              referrerPolicy="no-referrer"
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-103"
            />
            {/* Visual styling overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 text-white text-xs tracking-wider opacity-90 font-mono flex items-center gap-1.5">
              <span>Allestimento Tavoli Premium, Villa Frascati</span>
            </div>
          </div>

          {/* Small Floating Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-6 -left-6 md:left-default md:-left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-sage-100/50 max-w-[200px] hidden sm:block"
          >
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-[#8ea08d]" title="Salvia" />
              <span className="w-3 h-3 rounded-full bg-[#dfd3c3]" title="Beige" />
              <span className="w-3 h-3 rounded-full bg-[#faf7f2]" title="Chiaro" />
            </div>
            <p className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#8c7b6c] mt-2">palette dell'evento</p>
            <p className="text-[11px] font-sans font-light text-gray-500 mt-1 leading-snug">Salvia Botanica & Warm Beige rustico-chic.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
