/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type EventType = 'matrimonio' | 'battesimo' | 'comunione' | 'party';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface EventPackage {
  id: string;
  name: string;
  priceFrom: number;
  target: string;
  includes: string[];
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: EventType;
  location: string;
  image: string;
  theme: string;
  colors: string[]; // hex or color names
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
