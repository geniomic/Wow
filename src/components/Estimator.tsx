/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { EventType } from '../types';
import { Sparkles, Sliders, CheckCircle2, ChevronRight, HelpCircle, ShoppingBag } from 'lucide-react';

interface EstimatorProps {
  onEstimateComplete: (details: {
    eventType: EventType;
    guests: number;
    basePackage: string;
    extras: string[];
    estimatedRange: string;
  }) => void;
  preselectedPackage?: string;
}

export default function Estimator({ onEstimateComplete, preselectedPackage }: EstimatorProps) {
  const [eventType, setEventType] = useState<EventType>('battesimo');
  const [guests, setGuests] = useState<number>(40);
  const [basePackage, setBasePackage] = useState<string>('Premium');
  const [extras, setExtras] = useState<string[]>([]);
  const [budgetMin, setBudgetMin] = useState<number>(0);
  const [budgetMax, setBudgetMax] = useState<number>(0);

  // Sync preselected package from parent if triggered from Services
  useEffect(() => {
    if (preselectedPackage) {
      setBasePackage(preselectedPackage);
    }
  }, [preselectedPackage]);

  const eventOptions: { label: string; value: EventType }[] = [
    { label: 'Battesimo', value: 'battesimo' },
    { label: 'Comunione', value: 'comunione' },
    { label: 'Matrimonio', value: 'matrimonio' },
    { label: 'Party / Altro', value: 'party' },
  ];

  const packageOptions = [
    { id: 'Essenziale', price: 180, desc: 'Tavolo principale / Sweet Table curato nei minimi dettagli.' },
    { id: 'Premium', price: 350, desc: 'Tavoli coordinati + Welcome Area + Photo Corner.' },
    { id: 'Premium su Misura', price: 800, desc: 'Concept 3D avanzato + Allestimento totale multi-area + Sartiato.' },
  ];

  const extraOptions = [
    { id: 'welcome', label: 'Area Welcome Scenografica', price: 100, desc: 'Pannello ad arco decorato con iniziali + cavalletto in legno' },
    { id: 'photo', label: 'Photo Corner Elegante', price: 150, desc: 'Fondo ad anello, seduta luxury e decori coordinati per scatti indimenticabili' },
    { id: 'tableau', label: 'Tableau de Mariage & Segnaposti', price: 120, desc: 'Grafica personalizzata su cartello rigido o plexiglas + cavalletto' },
    { id: 'gadget', label: 'Gadget personalizzati per ospiti', price: 3, isPerGuest: true, desc: 'Sacchettini personalizzati con nastri abbinati e tag a tema' },
  ];

  useEffect(() => {
    // Calculatem budget min & max
    const selectedPack = packageOptions.find(p => p.id === basePackage);
    let basePrice = selectedPack ? selectedPack.price : 350;

    // Scale factors based on guests (only for Premium and Premium su Misura, Essenziale is tighter)
    let scaleMultiplier = 1;
    if (basePackage === 'Premium') {
      if (guests > 80) scaleMultiplier = 1.35;
      else if (guests > 40) scaleMultiplier = 1.15;
    } else if (basePackage === 'Premium su Misura') {
      if (guests > 80) scaleMultiplier = 1.5;
      else if (guests > 40) scaleMultiplier = 1.25;
    }

    let calculatedMin = basePrice * scaleMultiplier;

    // Add extras
    extras.forEach(extraId => {
      const option = extraOptions.find(o => o.id === extraId);
      if (option) {
        if (option.isPerGuest) {
          calculatedMin += option.price * guests;
        } else {
          // Adjust options based on premium package (some are already included!)
          if (basePackage === 'Premium su Misura' && (extraId === 'welcome' || extraId === 'tableau')) {
            // partly included or discounted
            calculatedMin += option.price * 0.2;
          } else {
            calculatedMin += option.price;
          }
        }
      }
    });

    // Add slight variations based on event type
    if (eventType === 'matrimonio') {
      calculatedMin *= 1.15; // slightly higher resource commitment
    }

    const calculatedMax = calculatedMin * 1.25; // 25% range window

    setBudgetMin(Math.round(calculatedMin));
    setBudgetMax(Math.round(calculatedMax));
  }, [eventType, guests, basePackage, extras]);

  const toggleExtra = (id: string) => {
    if (extras.includes(id)) {
      setExtras(extras.filter(item => item !== id));
    } else {
      setExtras([...extras, id]);
    }
  };

  const handleApplyEstimate = () => {
    onEstimateComplete({
      eventType,
      guests,
      basePackage,
      extras: extras.map(e => extraOptions.find(o => o.id === e)?.label || ''),
      estimatedRange: `€${budgetMin} - €${budgetMax}`,
    });

    // Scroll automatically to contact area with smooth flow
    const contactSection = document.querySelector('#contatti');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="configuratore" className="py-24 md:py-32 bg-white border-t border-sage-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-sage-500 uppercase font-mono">
            Configuratore Intelligente
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal tracking-tight">
            Personalizza il tuo <span className="font-medium text-sage-500">allestimento</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-light max-w-md mx-auto">
            Seleziona la tipologia di festa, il numero di invitati e gli elementi extra desiderati per visualizzare una stima budget istantanea.
          </p>
        </div>

        {/* Content Wrapper - Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Options controls */}
          <div className="lg:col-span-7 space-y-8 bg-sage-50/20 border border-sage-100 rounded-3xl p-6 md:p-8">
            
            {/* Step 1: Event Type */}
            <div className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sage-100 inline-flex items-center justify-center text-[10px] text-sage-600 font-sans font-semibold">1</span>
                Seleziona Tipo Evento:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {eventOptions.map((opt) => {
                  const isSelected = eventType === opt.value;
                  return (
                    <button
                      key={opt.value}
                      id={`config-event-${opt.value}`}
                      onClick={() => setEventType(opt.value)}
                      className={`py-3 px-4 rounded-xl text-xs font-medium cursor-pointer transition-all duration-300 border text-center ${
                        isSelected
                          ? 'bg-sage-400 border-sage-400 text-white shadow-xs'
                          : 'bg-white border-sage-100 text-gray-500 hover:border-sage-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider for guests */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sage-100 inline-flex items-center justify-center text-[10px] text-sage-600 font-sans font-semibold">2</span>
                  Numero Ospiti Invitati:
                </label>
                <span className="px-3 py-1 bg-sage-150 text-sage-600 text-xs font-mono font-semibold rounded-md border border-sage-200">
                  {guests} Ospiti
                </span>
              </div>
              
              <div className="pt-2">
                <input
                  id="config-guests-slider"
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full text-sage-400 appearance-none bg-sage-100 rounded-lg h-2 cursor-pointer outline-hidden accent-sage-400"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono pt-1.5 px-0.5">
                  <span>10 ospiti</span>
                  <span>45</span>
                  <span>80</span>
                  <span>115</span>
                  <span>150+ ospiti</span>
                </div>
              </div>
            </div>

            {/* Step 3: Base packages specification */}
            <div className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sage-100 inline-flex items-center justify-center text-[10px] text-sage-600 font-sans font-semibold">3</span>
                Scegli il Pacchetto di Partenza:
              </label>
              <div className="space-y-3">
                {packageOptions.map((opt) => {
                  const isSelected = basePackage === opt.id;
                  return (
                    <div
                      key={opt.id}
                      id={`config-pack-${opt.id.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setBasePackage(opt.id)}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                        isSelected
                          ? 'bg-beige-50 border-beige-300/80 shadow-3xs ring-1 ring-beige-200'
                          : 'bg-white border-sage-100 hover:border-sage-200'
                      }`}
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 transition-colors ${isSelected ? 'text-sage-500' : 'text-gray-300'}`} />
                          <span className="text-xs font-semibold text-charcoal">{opt.id}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1 pl-6 leading-relaxed font-light">{opt.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs text-gray-400 font-mono">da</span>
                        <p className="font-display font-medium text-md text-charcoal">€{opt.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Extras checklist */}
            <div className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sage-100 inline-flex items-center justify-center text-[10px] text-sage-600 font-sans font-semibold">4</span>
                Aggiungi Elementi Extra (Opzionali):
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {extraOptions.map((opt) => {
                  const isChecked = extras.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      id={`config-extra-${opt.id}`}
                      onClick={() => toggleExtra(opt.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                        isChecked
                          ? 'bg-sage-50/50 border-sage-300/80'
                          : 'bg-white border-sage-100 hover:border-sage-200'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-start gap-1.5 justify-between">
                          <span className="text-[11px] font-semibold text-charcoal leading-tight">{opt.label}</span>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            className="w-3.5 h-3.5 mt-0.5 rounded-sm accent-sage-400 shrink-0"
                          />
                        </div>
                        <p className="text-[10px] text-gray-400 leading-snug font-light">{opt.desc}</p>
                      </div>
                      
                      <div className="pt-3 border-t border-sage-50/50 mt-3 flex justify-between items-center text-[10px] font-mono">
                        <span className="text-gray-400">Prezzo stimato:</span>
                        <span className="font-semibold text-sage-600">
                          {opt.isPerGuest ? `€${opt.price} a persona` : `+€${opt.price}`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live estimate summary & visual pricing card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white border border-sage-150/80 rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-between relative overflow-hidden">
              
              {/* Soft decorative background glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sage-100/40 rounded-full blur-xl -z-10" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-beige-100/40 rounded-full blur-xl -z-10" />

              {/* Estimate title */}
              <div className="space-y-3 pb-6 border-b border-sage-100/70">
                <p className="text-[10px] font-mono tracking-widest text-[#8c7b6c] uppercase font-bold flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-sage-400" /> Il tuo preventivo personalizzato WoW
                </p>
                <p className="text-xs text-gray-400 font-light">
                  Basato sulla configurazione degli allestimenti desiderati per i {guests} ospiti.
                </p>
              </div>

              {/* Setup Configuration Summary */}
              <div className="py-6 space-y-4 flex-1">
                <div className="space-y-2.5">
                  <p className="text-[10px] font-mono uppercase text-[#8c7b6c] tracking-widest font-semibold">Riepilogo Scelte:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-light">Tipo Cerimonia</span>
                      <span className="font-medium text-charcoal capitalize">{eventType}</span>
                    </li>
                    <li className="flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-light">Numero invitati</span>
                      <span className="font-mono text-charcoal font-medium">{guests} persone</span>
                    </li>
                    <li className="flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-light">Pacchetto Base ({basePackage})</span>
                      <span className="font-sans text-charcoal font-medium">Included</span>
                    </li>
                    
                    {extras.length > 0 && (
                      <li className="space-y-1 pt-1.5 border-t border-sage-50/50">
                        <span className="text-[10px] font-mono text-sage-500 uppercase tracking-wider block">Servizi Extra Selezionati ({extras.length}):</span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {extras.map(e => (
                            <span key={e} className="px-2 py-0.5 rounded-md bg-sage-50 border border-sage-100 text-[10px] text-sage-500 whitespace-nowrap">
                              {extraOptions.find(o => o.id === e)?.label.split(' ')[0]} {extraOptions.find(o => o.id === e)?.label.split(' ').slice(1,3).join(' ')}
                            </span>
                          ))}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Range Estimate */}
                <div className="bg-sage-50/40 border border-sage-100/50 rounded-2xl p-5 mt-6 text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">Budget indicativo di spesa:</span>
                  <div className="text-3xl sm:text-4xl font-display font-light text-sage-600 tracking-tight py-1">
                    €{budgetMin} - €{budgetMax}
                  </div>
                  <p className="text-[9px] text-[#8c7b6c] italic font-light">
                    Soluzione vendita + noleggio materiali con allestimento completo.
                  </p>
                </div>
              </div>

              {/* Submit trigger button */}
              <div className="pt-6 border-t border-sage-100/50">
                <button
                  id="config-apply-options-btn"
                  onClick={handleApplyEstimate}
                  className="w-full py-4 rounded-xl bg-sage-400 hover:bg-sage-500 text-white font-medium text-xs uppercase tracking-wider shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 flex items-center justify-center gap-1.5 group select-none active:scale-98"
                >
                  <span>Invia Preventivo con questa Configurazione</span>
                  <ChevronRight className="w-4.5 h-4.5 text-sage-200 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                
                <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-gray-400 font-light">
                  <ShoppingBag className="w-3.5 h-3.5 text-sage-300" />
                  <span>Riceverai un riscontro entro 24 ore lavorative.</span>
                </div>
              </div>

            </div>

            {/* Apple style info box about workflow process */}
            <div className="bg-beige-50/40 border border-beige-200/50 p-5 rounded-2xl space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#8c7b6c] tracking-wider font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8c7b6c]" /> Come funziona dopo l'invio:
              </span>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                Ti contatteremo per confermare la data e raccogliere dettagli sul tema. Riceverai un progetto creativo gratuito in PDF con bozzetti grafici e campionatura colori prima del pagamento anticipato.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
