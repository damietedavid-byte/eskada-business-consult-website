
import React from 'react';
import type { NavLink, Service, Industry, Testimonial, Stat } from './types';
import { FaBalanceScale, FaHandshake, FaShieldAlt, FaBriefcase, FaUserTie, FaBuilding } from 'react-icons/fa';
import { GiOilRig, GiPowerGenerator } from 'react-icons/gi';
import { MdBusiness, MdLanguage } from 'react-icons/md';

export const NAV_LINKS: NavLink[] = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

export const CLIENT_LOGOS = [
  { name: 'Shell', logo: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png" alt="Shell Logo" className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" /> },
  { name: 'Chevron', logo: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Chevron_logo.svg/1200px-Chevron_logo.svg.png" alt="Chevron Logo" className="h-10 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" /> },
  { name: 'NDDC', logo: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Niger_Delta_Development_Commission_Logo.png/220px-Niger_Delta_Development_Commission_Logo.png" alt="NDDC Logo" className="h-14 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" /> },
  { name: 'NNPC', logo: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/NNPC_logo.svg/200px-NNPC_logo.svg.png" alt="NNPC Logo" className="h-14 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" /> },
  { name: 'ExxonMobil', logo: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ExxonMobil_Logo.svg/1200px-ExxonMobil_Logo.svg.png" alt="ExxonMobil Logo" className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" /> },
  { name: 'TotalEnergies', logo: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/TotalEnergies_logo.svg/1200px-TotalEnergies_logo.svg.png" alt="TotalEnergies Logo" className="h-10 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" /> },
];

export const SERVICES: Service[] = [
  { icon: FaBalanceScale, title: 'Chartered Mediation', description: 'Expert dispute resolution in the oil and gas sector, ensuring amicable and efficient outcomes.' },
  { icon: FaBriefcase, title: 'Business Entry Strategy', description: 'Comprehensive guidance for new businesses and individuals entering the Nigerian market.' },
  { icon: FaShieldAlt, title: 'Risk Management & Compliance', description: 'Navigate complex regulatory landscapes with our expert compliance and risk mitigation services.' },
  { icon: FaHandshake, title: 'Partnerships & Negotiation', description: 'Facilitating strategic partnerships and leading negotiations to secure favorable terms for your business.' },
];

export const INDUSTRIES: Industry[] = [
  { icon: GiOilRig, name: 'Oil & Gas' },
  { icon: GiPowerGenerator, name: 'Energy Sector' },
  { icon: MdBusiness, name: 'Emerging SMEs' },
  { icon: MdLanguage, name: 'International Business' },
];

export const STATS: Stat[] = [
    { value: '20+', label: 'Years of Experience' },
    { value: '99%', label: 'Mediation Success Rate' },
    { value: '50+', label: 'Corporate Clients' },
    { value: '100+', label: 'SMEs Guided' },
]

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'ESKADA\'s insight was pivotal for our market entry. Their expertise in the Nigerian landscape is unmatched. Truly a class act.', name: 'John Adebayo', title: 'CEO', company: 'Energy Solutions Inc.' },
  { quote: 'Their mediation services saved us from a lengthy and costly dispute. The level of professionalism and efficiency is commendable.', name: 'Amina Bello', title: 'Director of Operations', company: 'PetroLink Ltd.' },
  { quote: 'As a foreign investor, navigating the business environment was daunting. ESKADA provided the clarity and strategy we needed to succeed.', name: 'David Chen', title: 'Managing Partner', company: 'Apex Global Ventures' },
];