/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Configuratore', href: '#configuratore' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Contatti', href: '#contatti' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-sage-100/50 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          id="brand-logo-link"
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
            <Sparkles className="w-5 h-5 text-sage-500 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-lg tracking-wider text-charcoal">
              WoW
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#8c7b6c] uppercase -mt-1">
              events & party
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-2 text-sm font-medium transition-colors duration-300"
                style={{ color: isActive ? 'var(--color-sage-500)' : '#515154' }}
              >
                <span className="hover:text-sage-600 transition-colors duration-200">
                  {link.name}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-sage-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            id="header-cta-button"
            href="#configuratore"
            onClick={(e) => handleLinkClick(e, '#configuratore')}
            className="px-5 py-2 rounded-full border border-sage-200 bg-white hover:bg-sage-50 text-sage-600 text-xs font-medium tracking-wider uppercase transition-all duration-300 shadow-xs hover:shadow-xs active:scale-97 cursor-pointer"
          >
            Consulenza Gratuita
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full text-charcoal hover:bg-sage-50 transition-colors duration-200 focus:outline-hidden"
          aria-label="Apri menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-sage-100 overflow-hidden shadow-xs"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="py-2 text-md font-medium border-b border-sage-50/50 last:border-0"
                    style={{ color: isActive ? 'var(--color-sage-500)' : '#1c1c1e' }}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                id="mobile-header-cta-button"
                href="#configuratore"
                onClick={(e) => handleLinkClick(e, '#configuratore')}
                className="mt-2 w-full text-center px-6 py-3 rounded-xl bg-sage-400 text-white font-medium hover:bg-sage-500 transition-colors duration-300"
              >
                Inizia Configurazione
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
