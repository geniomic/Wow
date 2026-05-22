/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, EventPackage, PortfolioItem, Testimonial, FAQItem } from './types';

export const serviceItems: ServiceItem[] = [
  {
    id: 'tavoli',
    title: 'Allestimento Tavoli',
    description: 'Centrotavola, runner, stoviglie coordinate, candele e scenografie floreali curate nel dettaglio per rendere il pranzo o la cena un momento indimenticabile.',
    features: ['Palette colori personalizzata', 'Materiali di pregio (lino, ceramica)', 'Cura dell\'illuminazione soffusa', 'Menù e grafiche coordinati'],
    image: '/src/assets/images/hero_banner_outdoor_1779481102089.png'
  },
  {
    id: 'welcome',
    title: 'Area Welcome',
    description: 'La prima impressione è quella che conta. Strutture ad arco, pannelli di benvenuto personalizzati e dettagli scenografici che accolgono gli ospiti con stile.',
    features: ['Pannelli con scritte personalizzate', 'Composizioni floreali e organiche', 'Cavalletti in legno o strutture moderne', 'Integrazione punti luce/lanterne'],
    image: '/src/assets/images/welcome_area_ceremony_1779481120035.png'
  },
  {
    id: 'photo',
    title: 'Photo Corner',
    description: 'Uno spazio scenografico dedicato ai ricordi fotografici dell\'evento. Sfondi eleganti, floreali o a tema, perfetti per scatti spontanei e indimenticabili.',
    features: ['Pareti di sfondo a tema (cerchi, archi, pannelli)', 'Elementi d\'arredo eleganti', 'Props e dettagli personalizzati', 'Illuminazione dedicata'],
    image: '/src/assets/images/event_details_setup_1779481135945.png'
  },
  {
    id: 'gadget',
    title: 'Gadget per Invitati',
    description: 'Piccoli omaggi, party favor e bombolette d\'aria decorati in sintonia con il tema, studiati per lasciare un ricordo piacevole ai tuoi ospiti.',
    features: ['Packaging fatto a mano', 'Etichette e nastri personalizzati', 'Soluzioni eco-friendly', 'Coordinamento grafico completo'],
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tableau',
    title: 'Tableau & Segnaposti',
    description: 'Sistemi eleganti per orientare i tuoi ospiti, dai tableau de mariage più scenografici ai segnaposti individuali finemente decorati.',
    features: ['Tableau de mariage creativi', 'Segnaposti nominali calligrafici', 'Integrazione con elementi vegetali', 'Stampe ad altissima risoluzione'],
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'theme',
    title: 'Allestimenti a Tema',
    description: 'Progetti immersivi completi (es. Safari, Boho-Chic, Shabby, Minimal, Space o Vintage) realizzati su misura per compleanni o cerimonie dei più piccoli.',
    features: ['Studio del tema e moodboard', 'Noleggio e vendita complementi', 'Coordinamento cromatico rigido', 'Angolo dolci / Sweet Table coordinato'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop'
  }
];

export const packages: EventPackage[] = [
  {
    id: 'essenziale',
    name: 'Essenziale',
    priceFrom: 180,
    target: 'Battesimi, comunioni & party intimi',
    includes: [
      'Consulenza iniziale telefonica/online',
      'Studio palette di colori e moodboard base',
      'Allestimento tavolo principale / Sweet Table',
      'Dettagli grafici coordinati base'
    ],
    features: [
      'Materiali base riutilizzabili inclusi',
      'Ideale per piccoli budget o locali raccolti',
      'Grafica personalizzata essenziale',
      'Montaggio e smontaggio inclusi'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    priceFrom: 350,
    target: 'Eventi medi, comunioni e battesimi completi',
    includes: [
      'Sopralluogo tecnico nella location (Castelli Romani)',
      'Progetto creativo su misura in PDF',
      'Coordinamento tavoli invitati & tavolo principale',
      'Area Welcome scenografica con pannello personalizzato',
      'Photo Corner di impatto coordinato',
      'Allestimento Tableau de Mariage o segnaposti'
    ],
    features: [
      'Integrazione elementi floreali base',
      'Cura estetica avanzata nei dettagli',
      'Strutture a noleggio incluse (archi, backdrop)',
      'Assistenza durante l\'evento'
    ]
  },
  {
    id: 'premium-su-misura',
    name: 'Premium su Misura',
    priceFrom: 800,
    target: 'Matrimoni ed eventi luxury complessi',
    includes: [
      'Concept creativo 3D/Moodboard avanzata e campionatura',
      'Coordinamento estetico completo di tutte le aree',
      'Allestimento cerimoniale / tavoli luxury',
      'Strutture ad arco doppie/scenografiche',
      'Ricerca e acquisto materiali speciali non in catalogo',
      'Coordinamento grafico totale (partecipazioni operative, segnaposti, gadget, tableau)',
      'Gadget e regali personalizzati inclusi (fino a 30 pezzi)'
    ],
    features: [
      'Cura floreale premium totale',
      'Allestimento senza limiti di orario o fasce speciali',
      'Zero pensieri: gestione logistica e fornitori accessori',
      'Fino a 3 varianti di progetto'
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Matrimonio Elegante in Villa',
    category: 'matrimonio',
    location: 'Frascati, Castelli Romani',
    image: '/src/assets/images/hero_banner_outdoor_1779481102089.png',
    theme: 'Elegante, minimal con tocchi organici',
    colors: ['#faf7f2', '#8ea08d', '#caa98c', '#ffffff']
  },
  {
    id: 'port-2',
    title: 'Battesimo Dolce Salvia',
    category: 'battesimo',
    location: 'Grottaferrata, Castelli Romani',
    image: '/src/assets/images/welcome_area_ceremony_1779481120035.png',
    theme: 'Accogliente, botanico e pastello',
    colors: ['#e5ebe6', '#8ea08d', '#e6dac6', '#ffffff']
  },
  {
    id: 'port-3',
    title: 'Festa di Primavera all\'Aperto',
    category: 'party',
    location: 'Castel Gandolfo, Castelli Romani',
    image: '/src/assets/images/event_details_setup_1779481135945.png',
    theme: 'Fresco, floreale d\'ispirazione country-chic',
    colors: ['#faf7f2', '#8ea08d', '#caa98c', '#6d7e6c']
  },
  {
    id: 'port-4',
    title: 'Comunione Shabby Chic',
    category: 'comunione',
    location: 'Genzano, Castelli Romani',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=700&auto=format&fit=crop',
    theme: 'Romantico, pizzi, legno decapato e lavanda',
    colors: ['#faf7f2', '#e6dac6', '#cbdad0', '#ffffff']
  },
  {
    id: 'port-5',
    title: 'Compleanno 1 Anno Safari',
    category: 'party',
    location: 'Ariccia, Castelli Romani',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=700&auto=format&fit=crop',
    theme: 'Giungla chic, verde salvia, beige e animali stilizzati',
    colors: ['#e6dac6', '#8ea08d', '#6d7e6c', '#dfd3c3']
  },
  {
    id: 'port-6',
    title: 'Matrimonio Intimo in Terrazza',
    category: 'matrimonio',
    location: 'Nemi, Castelli Romani',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=700&auto=format&fit=crop',
    theme: 'Minimalista moderno con candele sospese',
    colors: ['#ffffff', '#faf7f2', '#cbdad0', '#8c7b6c']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Elena & Marco',
    role: 'Sposi (Matrimonio in Villa)',
    text: 'WoW ha superato ogni nostra aspettativa! L\'allestimento dei tavoli e l\'area welcome con tonalità salvia e beige erano incredibilmente eleganti e puliti, in puro stile moderno. Gli ospiti continuano a farci i complimenti per l\'armonia dei dettagli.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Silvia R.',
    role: 'Mamma di Tommaso (Battesimo)',
    text: 'Servizio impeccabile e rapidità incredibile. Per il battesimo di mio figlio volevo qualcosa di intimo ma di impatto. WoW ha curato lo sweet table e il photo corner in modo sublime. Professionalità massima nei Castelli Romani!',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Francesca M.',
    role: 'Wedding Planner Associata',
    text: 'Collaboro con WoW per i miei clienti nei Castelli Romani e la loro precisione operativa è pazzesca. Sanno interpretare ogni brief creativo fornendo soluzioni flessibili tra noleggio e acquisto, con un gusto estetico premium straordinario.',
    rating: 5
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Che tipo di eventi seguite?',
    answer: 'Ci occupiamo principalmente dell\'allestimento personalizzato per battesimi, comunioni, matrimoni, cresime, baby shower, compleanni significativi e party privati o aziendali.'
  },
  {
    id: 'faq-2',
    question: 'Lavorate solo nei Castelli Romani?',
    answer: 'La nostra area operativa principale comprende tutti i Castelli Romani (Frascati, Grottaferrata, Castel Gandolfo, Albano, Genzano, Nemi, Ariccia, ecc.) e zone limitrofe di Roma Sud. Possiamo effettuare allestimenti in tutta la provincia di Roma su richiesta (con un piccolo costo di trasferta fuori dall\'area base).'
  },
  {
    id: 'faq-3',
    question: 'Fate solo noleggio o anche vendita?',
    answer: 'Offriamo un servizio flessibile: noleggiamo strutture portanti, decorazioni di pregio, vasi, archi e stoffe, mentre realizziamo in vendita e personalizzazione esclusiva cartellonistica, tableau de mariage, segnaposti coordinati e gadget ricordo per gli invitati.'
  },
  {
    id: 'faq-4',
    question: 'È possibile avere un progetto personalizzato?',
    answer: 'Assolutamente sì. Ogni evento è unico: studiamo una palette di colori ad hoc, prepariamo una moodboard d\'ispirazione e proponiamo materiali e decori perfettamente in linea con il tema concordato.'
  },
  {
    id: 'faq-5',
    question: 'Quanto tempo prima bisogna prenotare?',
    answer: 'Per garantire l\'altissima cura e la personalizzazione dei materiali, consigliamo di contattarci almeno 30-45 giorni prima dell\'evento per battesimi e comunioni, e 3-6 mesi prima per i matrimoni. Tuttavia, grazie alla nostra rapidità operativa, proviamo a soddisfare anche richieste last-minute dove possibile.'
  },
  {
    id: 'faq-6',
    question: 'Avete un budget minimo?',
    answer: 'No, non imponiamo un budget minimo fisso. Il nostro listino parte dal Pacchetto Essenziale da 180€ proprio per consentire a chiunque di avere un allestimento di stile. Progettiamo insieme la soluzione migliore ottimizzando ogni risorsa.'
  }
];
