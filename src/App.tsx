/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Estimator from './components/Estimator';
import ChiSiamo from './components/ChiSiamo';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { EventType } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preselectedPackage, setPreselectedPackage] = useState<string>('');
  
  // Custom draft configuration details from Estimator to ContactForm
  const [estimatedDetails, setEstimatedDetails] = useState<{
    eventType: EventType;
    guests: number;
    basePackage: string;
    extras: string[];
    estimatedRange: string;
  } | null>(null);

  // Monitor scrolling to highlight correct navigation item in Header (Apple style)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'servizi', 'portfolio', 'configuratore', 'chi-siamo', 'contatti'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroPlanClick = () => {
    const el = document.querySelector('#configuratore');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleHeroPortfolioClick = () => {
    const el = document.querySelector('#portfolio');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleConfigurePackageFromServices = (packageName: string) => {
    setPreselectedPackage(packageName);
    
    // Smooth scroll to estimator
    const el = document.querySelector('#configuratore');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleEstimateComplete = (details: {
    eventType: EventType;
    guests: number;
    basePackage: string;
    extras: string[];
    estimatedRange: string;
  }) => {
    setEstimatedDetails(details);
  };

  return (
    <div className="relative min-h-screen bg-white text-charcoal font-sans antialiased selection:bg-sage-200/50 select-none">
      {/* Dynamic Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Hero Content Section */}
      <Hero
        onPlanClick={handleHeroPlanClick}
        onPortfolioClick={handleHeroPortfolioClick}
      />

      {/* Services List and Package Comparisons */}
      <Services onConfigurePackage={handleConfigurePackageFromServices} />

      {/* Visual Portfolio Gallery with Filters */}
      <Portfolio />

      {/* Interactive Estimator / Event Planner Configurator */}
      <Estimator
        onEstimateComplete={handleEstimateComplete}
        preselectedPackage={preselectedPackage}
      />

      {/* Chi Siamo story & territorial coverages */}
      <ChiSiamo />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Conversion Contact module */}
      <ContactForm estimatedDetails={estimatedDetails} />

      {/* Footer information bar */}
      <Footer />
    </div>
  );
}
