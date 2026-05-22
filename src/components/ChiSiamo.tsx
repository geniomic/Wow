/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Zap, Award, Edit3, MapPin, Heart } from 'lucide-react';

export default function ChiSiamo() {
  const values = [
    {
      icon: <Award className="w-5 h-5 text-sage-500" />,
      title: 'Massima Qualità',
      desc: 'Selezioniamo tessuti pregiati come il lino cotone, supporti rigidi di design e fiori freschi recisi per assicurare un impatto estetico impeccabile di livello premium.',
    },
    {
      icon: <Zap className="w-5 h-5 text-sage-500" />,
      title: 'Rapidità Operativa',
      desc: 'Dal primo contatto telefonico alla stesura della moodboard di progetto passano meno di 48 ore. Lavoriamo sodo per offrirti risposte celeri ed efficaci.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sage-500" />,
      title: 'Esperienza & Competenza',
      desc: 'Sappiamo come muoverci logisticamente nelle location storiche dei Castelli Romani, gestendo tempi di carico, allestimenti rapidi e smontaggi in piena sicurezza.',
    },
    {
      icon: <Edit3 className="w-5 h-5 text-sage-500" />,
      title: 'Personalizzazione Sartoriale',
      desc: 'Nessun catalogo precompilato o allestimento fotocopia. Ogni progetto di eventi nasce da zero partendo dal tuo tema, dalla tua palette colori preferita e dalle tue idee.',
    },
  ];

  const methodSteps = [
    {
      num: '01',
      title: 'Ascolto & Briefing',
      text: 'Raccogliamo i tuoi desideri: la data, la location dei Castelli Romani, il tipo di cerimonia (battesimo, comunione, nozze, party) e l\'atmosfera ricercata.',
    },
    {
      num: '02',
      title: 'Proposta Creativa',
      text: 'Ti presentiamo una moodboard digitale con bozzetti grafici, campionatura delle tonalità (es. i nostri salvia e beige) e il preventivo trasparente d\'allestimento.',
    },
    {
      num: '03',
      title: 'Produzione & Reperimento',
      text: 'Mettiamo in moto le nostre mani fatate: prepariamo i segnaposti nominali, assembliamo i gadget e noleggiamo le cornici, gli archi e le decorazioni necessarie.',
    },
    {
      num: '04',
      title: 'Allestimento & Smontaggio',
      text: 'Pensiamo a tutto noi il giorno stesso. Veniamo in location, allestiamo i tavoli, le aree di benvenuto e ritiriamo tutto a fine festa in totale comodità.',
    },
  ];

  return (
    <section id="chi-siamo" className="py-24 md:py-32 bg-white border-t border-sage-50 relative overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/2 left-0 w-32 h-64 bg-beige-50/40 rounded-r-full blur-xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Core Block - Story split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-sage-500 uppercase font-mono">
              Incontra WoW - events & party
            </span>
            
            <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal tracking-tight">
              Siamo allestitori di felicita nei <span className="font-medium text-sage-500">Castelli Romani</span>
            </h2>
            
            <div className="space-y-4 text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              <p>
                Nato nei verdi panorami dei Castelli Romani (Frascati, Grottaferrata, Castel Gandolfo...), <strong>WoW - events & party</strong> è un laboratorio creativo dedicato a trasformare spazi vuoti in cornici scenografiche ricche di significato estetico ed emotivo.
              </p>
              <p>
                Il nostro obiettivo è toglierti qualsiasi pensiero di dosso: offriamo un servizio integrato che combina un catalogo flessibile di <strong>noleggio di arredi, backdrop, archi ornamentali</strong> ed elementi di scena unici, con la <strong>creazione e vendita di bomboniere grafiche sartoriali, tableau de mariage curati e gadget speciali per gli invitati</strong>.
              </p>
              <p>
                Abbracciamo un design pulito, ispirato alle simmetrie e alla purezza, utilizzando materiali caldi e tonalità organiche come il nostro amato <strong>verde salvia botanico</strong> e il <strong>beige crema naturale</strong>.
              </p>
            </div>

            {/* Geographical coverage pill */}
            <div className="pt-4 flex items-center gap-3">
              <div className="p-3 bg-sage-50 text-sage-600 rounded-xl border border-sage-100">
                <MapPin className="w-5 h-5 text-sage-400" />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-charcoal">Area di Servizio Principale</p>
                <p className="text-[11px] text-[#8c7b6c] font-light leading-tight">Copriamo l'intera area dei Castelli Romani, Roma Sud e zone limitrofe.</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition - Elegant minimalist arrangement */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-beige-50 rounded-2xl -z-10 transform rotate-1" />
            
            <div className="grid grid-cols-12 gap-4 items-stretch">
              <div className="col-span-7 rounded-xl overflow-hidden border-4 border-white shadow-md aspect-3/4">
                <img
                  src="/src/assets/images/welcome_area_ceremony_1779481120035.png"
                  alt="Benvenuto allestimento WoW"
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full hover:scale-103 transition-transform duration-700"
                />
              </div>

              <div className="col-span-5 flex flex-col justify-between gap-4">
                <div className="rounded-xl overflow-hidden border-4 border-white shadow-md aspect-square flex-1">
                  <img
                    src="/src/assets/images/event_details_setup_1779481135945.png"
                    alt="Bomboniere e gadget WoW"
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full hover:scale-103 transition-transform duration-700"
                  />
                </div>
                
                {/* Beautiful custom quotes */}
                <div className="bg-sage-400 p-5 rounded-xl text-white flex flex-col justify-end space-y-2 aspect-square">
                  <Heart className="w-5 h-5 text-sage-100 fill-white/10" />
                  <p className="text-[11px] leading-relaxed italic font-light">"Curiamo i piccoli particolari perché sono proprio loro a fare un evento WoW."</p>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-sage-100/80 mt-2 font-bold">— Il nostro Team</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Method Block - 4 sequential steps */}
        <div className="border-t border-sage-100/50 pt-24 mb-24 md:mb-32">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#8c7b6c] uppercase font-mono">Da Idea a Evento</span>
            <h3 className="text-2xl md:text-3xl font-display font-light text-charcoal tracking-tight">I nostri 4 passaggi per un <span className="font-medium text-sage-500">allestimento WoW</span></h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">Linee guida semplici d'azione pensate per darti serenità estetica e operativa totale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodSteps.map((step, i) => (
              <div key={i} className="bg-beige-50/20 border border-sage-100/40 p-6 rounded-2xl space-y-4 hover:bg-beige-50/40 transition-colors duration-300 relative group">
                <div className="text-4xl font-display font-light text-sage-200 group-hover:text-sage-300 transition-colors font-semibold select-none">{step.num}</div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-medium text-sm text-charcoal">{step.title}</h4>
                  <p className="text-[11px] text-gray-500 font-light leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Block - Grid with subtle circles */}
        <div className="bg-sage-50/30 border border-sage-100 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <h3 className="text-xl md:text-2xl font-display font-medium text-charcoal tracking-tight">I nostri valori fondamentali</h3>
            <p className="text-xs text-gray-450 font-light">Le promesse estetiche ed organizzative che onoriamo per ogni progetto cerimoniale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((v, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white border border-sage-200 flex items-center justify-center shrink-0 shadow-3xs">
                  {v.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-medium text-sm text-charcoal">{v.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
