/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Calendar, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  estimatedDetails?: {
    eventType: string;
    guests: number;
    basePackage: string;
    extras: string[];
    estimatedRange: string;
  } | null;
}

export default function ContactForm({ estimatedDetails }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [locationName, setLocationName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auto populate message if estimatedDetails props change
  useEffect(() => {
    if (estimatedDetails) {
      const extrasText = estimatedDetails.extras.length > 0 
        ? ` con l'aggiunta di: ${estimatedDetails.extras.join(', ')}` 
        : '';
        
      const prefilledText = `Ciao WoW, desidero richiedere un allestimento personalizzato per un evento di tipo "${estimatedDetails.eventType.toUpperCase()}" a ${locationName || '...'} il ${eventDate || '...'}.\n` +
        `- Invitati stimati: ${estimatedDetails.guests} persone\n` +
        `- Pacchetto preferito: ${estimatedDetails.basePackage}\n` +
        `- Servizi extra richiesti:${extrasText || ' nessuno'}\n` +
        `- Calcolatore budget stimato: ${estimatedDetails.estimatedRange}\n\n` +
        `Vorrei essere ricontattato per confermare i dettagli ed elaborare la proposta creativa gratuita PDF. Grazie!`;
        
      setMessage(prefilledText);
    }
  }, [estimatedDetails, eventDate, locationName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert("Completare i campi obbligatori (Nome, Telefono, Email)");
      return;
    }

    setLoading(true);
    // Simulate API Submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setEventDate('');
      setLocationName('');
      setMessage('');
    }, 1200);
  };

  // Generate compiled WhatsApp message and open link
  const handleWhatsAppSend = () => {
    if (!name || !phone) {
      alert("Per favore, inserisci almeno il tuo Nome e Telefono per inviarci il messaggio direttamente su WhatsApp.");
      return;
    }

    const defaultMsg = message || `Ciao WoW, vorrei informazioni per un allestimento personalizzato nei Castelli Romani. Mi chiamo ${name}. Telefono: ${phone}. Email: ${email}.`;
    const encodedText = encodeURIComponent(
      `Nome: ${name}\n` +
      `Telefono: ${phone}\n` +
      `Email: ${email}\n` +
      `Data Evento: ${eventDate || 'Da definire'}\n` +
      `Località: ${locationName || 'Castelli Romani'}\n\n` +
      defaultMsg
    );
    window.open(`https://wa.me/393330000000?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contatti" className="py-24 md:py-32 bg-white border-t border-sage-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Text and direct contact options */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-sage-500 uppercase font-mono">
                Contatti & Preventivi
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal tracking-tight">
                Diamo vita al tuo <span className="font-medium text-sage-500">allestimento</span>
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                Scrivici compilando il modulo o cliccando sul pulsante WhatsApp. Ti risponderemo in tempi record preparandoti una proposta creativa su misura.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="space-y-4">
              
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-sage-50/30 border border-sage-100">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-sage-100 text-sage-500">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#8c7b6c]">Telefono / WhatsApp</p>
                  <a href="tel:+393330000000" className="text-xs sm:text-sm text-charcoal font-medium hover:text-sage-500 transition-colors">
                    +39 333 000 0000
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center p-4 rounded-2xl bg-sage-50/30 border border-sage-100">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-sage-100 text-sage-500">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#8c7b6c]">Email Ufficiale</p>
                  <a href="mailto:info@woweventsparty.it" className="text-xs sm:text-sm text-charcoal font-medium hover:text-sage-500 transition-colors">
                    info@woweventsparty.it
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center p-4 rounded-2xl bg-sage-50/30 border border-sage-100">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-sage-100 text-sage-500">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#8c7b6c]">Area coperta dal servizio</p>
                  <p className="text-xs sm:text-sm text-charcoal font-medium">
                    Castelli Romani, Roma Sud e zone limitrofe
                  </p>
                </div>
              </div>

            </div>

            {/* Answering times & Guidelines */}
            <div className="p-5 border border-beige-200 bg-beige-50/35 rounded-2xl space-y-2">
              <p className="text-xs font-semibold text-charcoal uppercase tracking-wider font-display">⏰ Orari di Risposta:</p>
              <ul className="space-y-1 text-[11px] text-gray-500 font-light">
                <li>• Lunedì - Venerdì: 9:00 - 19:30</li>
                <li>• Sabato: 9:30 - 18:00</li>
                <li>• Domenica: 10:00 - 14:00 (Solo messaggi WhatsApp)</li>
              </ul>
              <p className="text-[10px] text-[#8c7b6c] italic font-light pt-1">
                Garantiamo un riscontro iniziale ed una prima moodboard entro 24 ore lavorative.
              </p>
            </div>

          </div>

          {/* Right Side: Elegant Form with feedback states */}
          <div className="lg:col-span-7 bg-white border border-sage-150 rounded-3xl p-6 md:p-8 shadow-xs">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form-node"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-display font-medium text-lg text-charcoal pb-3 border-b border-sage-100 flex items-center justify-between">
                    <span>Modulo di Richiesta</span>
                    {estimatedDetails && (
                      <span className="text-[10px] font-mono text-sage-500 py-1 px-2.5 rounded-full bg-sage-50 border border-sage-100 uppercase animate-pulse">
                        Configurazione Caricata
                      </span>
                    )}
                  </h3>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                        Il tuo Nome <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="es. Giulia Rossi"
                        className="w-full px-4 py-3 rounded-xl border border-sage-100 focus:border-sage-300 focus:ring-1 focus:ring-sage-200 outline-hidden text-xs sm:text-sm text-charcoal transition-all placeholder-gray-400 bg-sage-50/15"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                        Numero Telefono <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="es. 333 125 4567"
                        className="w-full px-4 py-3 rounded-xl border border-sage-100 focus:border-sage-300 focus:ring-1 focus:ring-sage-200 outline-hidden text-xs sm:text-sm text-charcoal transition-all placeholder-gray-400 bg-sage-50/15"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                        Indirizzo Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="es. giulia.rossi@email.it"
                        className="w-full px-4 py-3 rounded-xl border border-sage-100 focus:border-sage-300 focus:ring-1 focus:ring-sage-200 outline-hidden text-xs sm:text-sm text-charcoal transition-all placeholder-gray-400 bg-sage-50/15"
                      />
                    </div>

                    {/* Event Date */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                        Data Evento <span className="text-gray-400">(Opzionale)</span>
                      </label>
                      <div className="relative">
                        <input
                          id="contact-date-input"
                          type="text"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          placeholder="es. 12 Giugno 2026"
                          className="w-full px-4 py-3 rounded-xl border border-sage-100 focus:border-sage-300 focus:ring-1 focus:ring-sage-200 outline-hidden text-xs sm:text-sm text-charcoal transition-all placeholder-gray-400 bg-sage-50/15"
                        />
                        <Calendar className="absolute right-3.5 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Location Name */}
                    <div className="col-span-1 sm:col-span-2 space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                        Comune o Location dei Castelli Romani <span className="text-gray-400">(es. Frascati, Terrazza Nemi)</span>
                      </label>
                      <input
                        id="contact-location-input"
                        type="text"
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
                        placeholder="es. Grottaferrata, Villa Grazioli"
                        className="w-full px-4 py-3 rounded-xl border border-sage-100 focus:border-sage-300 focus:ring-1 focus:ring-sage-200 outline-hidden text-xs sm:text-sm text-charcoal transition-all placeholder-gray-400 bg-sage-50/15"
                      />
                    </div>

                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                      Cosa desideri allestire? <span className="text-gray-400">(Dettagli, tema, idee preferite)</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Raccontaci la tua idea d'allestimento. Hai un tema specifico (es. battesimo orsetto, nozze boho-chic) o dei colori di riferimento?"
                      className="w-full px-4 py-3 rounded-xl border border-sage-100 focus:border-sage-300 focus:ring-1 focus:ring-sage-200 outline-hidden text-xs sm:text-sm text-charcoal transition-all placeholder-gray-400 bg-sage-50/15 resize-y min-h-[100px]"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3.5 border-t border-sage-100/50">
                    {/* Submit Standard Website Email */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="py-4 px-6 rounded-xl bg-sage-400 hover:bg-sage-500 text-white font-medium text-xs uppercase tracking-wider shadow-sm hover:shadow-xs cursor-pointer select-none transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-98 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-sage-100 shrink-0" />
                      <span>{loading ? 'Invio in corso...' : 'Invia Email'}</span>
                    </button>

                    {/* WhatsApp Fast Submission button */}
                    <button
                      id="contact-wa-direct-btn"
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="py-4 px-6 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 font-medium text-xs uppercase tracking-wider cursor-pointer select-none transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-98"
                    >
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-emerald-500 fill-current shrink-0">
                        <path d="M12.031 2a9.967 9.967 0 0 0-9.943 9.94c0 2.01.59 3.882 1.6 5.46L2 22l4.76-1.56a9.92 9.92 0 0 0 5.27 1.5c5.5 0 9.97-4.47 9.97-9.97a9.977 9.977 0 0 0-9.969-9.97ZM17.43 15.63c-.23.63-1.15 1.17-1.58 1.22-.38.05-.88.13-2.43-.51a9.23 9.23 0 0 1-4-3.52c-.63-.84-1.1-1.85-1.1-2.9 0-1.07.56-1.6 1.05-2.01.16-.14.36-.21.52-.21.13 0 .26.01.36.03.22.04.41.09.56.45.18.41.61 1.48.66 1.58.05.1.08.21.01.34-.06.12-.13.23-.22.34-.1.1-.21.23-.3.32-.1.1-.2.21-.08.41.12.21.54.89 1.15 1.43.78.69 1.44.91 1.64 1.01.2.1.31.08.43-.05.12-.14.53-.61.67-.82.14-.2.27-.17.46-.1.19.08 1.19.56 1.39.66.2.1.33.15.38.23.05.08.05.47-.18 1.1Z" />
                      </svg>
                      <span>Invia Rapido su WhatsApp</span>
                    </button>
                  </div>
                  
                  <p className="text-center text-[10px] text-gray-400 font-light mt-1">
                    * Campi obbligatori. I tuoi dati personali sono trattati esclusivamente per fornirti il preventivo.
                  </p>
                </motion.form>
              ) : (
                /* Success feedback component */
                <motion.div
                  key="contact-success-node"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-sage-50 text-sage-500 border border-sage-200 flex items-center justify-center shadow-xs animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-lg text-charcoal">Richiesta Ricevuta!</h3>
                    <p className="text-xs text-gray-500 font-light max-w-sm mx-auto leading-relaxed">
                      Grazie mille! Abbiamo raccolto il tuo brief per l'allestimento. Il nostro referente si metterà in contatto con te entro poche ore su WhatsApp o mail per mostrarti i primi bozzetti.
                    </p>
                  </div>

                  <button
                    id="contact-back-form-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-full border border-sage-200 bg-white hover:bg-sage-50 text-sage-600 text-xs font-medium uppercase tracking-wider"
                  >
                    Invia un altro messaggio
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
