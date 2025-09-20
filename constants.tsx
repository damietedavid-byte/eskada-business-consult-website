import React from 'react';
import type { NavLink, Service, Industry, Testimonial, Stat, Client } from './types';
import { FaBalanceScale, FaHandshake, FaShieldAlt, FaBriefcase, FaUserTie, FaBuilding } from 'react-icons/fa';
import { GiOilRig, GiPowerGenerator } from 'react-icons/gi';
import { MdBusiness, MdLanguage } from 'react-icons/md';

export const NAV_LINKS: NavLink[] = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

export const CLIENTS: Client[] = [
  { 
    name: 'Shell', 
    className: 'font-playfair font-bold text-4xl text-shell-red',
    about: 'Shell is a global group of energy and petrochemical companies with a significant presence in Nigeria, focusing on exploration, production, and distribution of oil and gas.',
    partnership: 'ESKADA was instrumental in mediating complex community relations and joint venture disputes, ensuring operational continuity and fostering positive stakeholder relationships that were critical for long-term project success.',
    testimonial: 'ESKADA\'s unparalleled expertise in mediation is not just a service, it\'s a strategic asset. They navigate Nigeria\'s intricate landscape with a finesse that secures results and builds trust.'
  },
  { 
    name: 'Chevron', 
    className: 'font-sans font-extrabold text-3xl uppercase tracking-wider text-chevron-blue',
    about: 'Chevron is one of the world\'s leading integrated energy companies, with extensive operations in Nigeria, including exploration, production, and refining.',
    partnership: 'We provided Chevron with critical business entry strategies and risk management consultancy for their new upstream projects, ensuring full compliance with local content laws and mitigating potential regulatory hurdles.',
    testimonial: 'For navigating the complexities of the Nigerian energy sector, ESKADA is our first call. Their strategic counsel is clear, actionable, and consistently delivers a competitive advantage.'
  },
  { 
    name: 'NDDC', 
    className: 'font-sans font-semibold text-3xl tracking-tight text-nddc-green',
    about: 'The Niger Delta Development Commission (NDDC) is a federal government agency established to facilitate the rapid, even, and sustainable development of the Niger Delta region.',
    partnership: 'ESKADA acts as a strategic advisor, facilitating multi-stakeholder partnerships between the NDDC, international oil companies, and local communities to ensure development projects are executed harmoniously and effectively.',
    testimonial: 'ESKADA serves as the vital bridge between policy and people. Their ability to align diverse interests towards a common goal of regional development has been invaluable to our mission.'
  },
  { 
    name: 'NNPC', 
    className: 'font-sans font-bold text-4xl tracking-tighter text-nnpc-green',
    about: 'The Nigerian National Petroleum Corporation (NNPC) is the state oil corporation through which the federal government of Nigeria regulates and participates in the country\'s petroleum industry.',
    partnership: 'We have a long-standing relationship with NNPC, providing expert negotiation support for Production Sharing Contracts (PSCs) and offering high-level advisory on policy and risk management for national energy security.',
    testimonial: 'In high-stakes negotiations, having ESKADA on your side is a game-changer. Their deep industry knowledge and strategic acumen have been pivotal to our success.'
  },
  { 
    name: 'ExxonMobil', 
    className: 'font-sans font-bold text-3xl text-exxon-red',
    about: 'ExxonMobil is one of the largest publicly traded international energy companies, with a significant operational footprint in Nigeria\'s oil and gas sector for several decades.',
    partnership: 'Our firm has provided specialized dispute resolution services for ExxonMobil, successfully mediating contractual disagreements with service providers and ensuring multi-million dollar projects remain on schedule.',
    testimonial: 'ESKADA\'s mediation process is remarkably efficient and effective. They preserved key business relationships while resolving what seemed to be an intractable dispute.'
  },
  { 
    name: 'TotalEnergies', 
    className: 'font-sans font-medium text-3xl text-total-blue',
    about: 'TotalEnergies is a broad energy company that produces and markets energies on a global scale: oil and biofuels, natural gas and green gases, renewables and electricity.',
    partnership: 'As TotalEnergies diversifies its portfolio, ESKADA has provided strategic consultancy on market entry for their renewable energy ventures in Nigeria, helping them navigate the unique regulatory and business landscape.',
    testimonial: 'ESKADA understands the future of energy in Nigeria. Their insights were crucial for us to confidently invest in new frontiers beyond traditional oil and gas.'
  },
];

export const SERVICES: Service[] = [
  { icon: FaBalanceScale, title: 'Chartered Mediation', description: 'Expert dispute resolution in the oil and gas sector, ensuring amicable and efficient outcomes.' },
  { icon: FaBriefcase, title: 'Business Entry Strategy', description: 'Comprehensive guidance for new businesses and individuals entering the Nigerian market.' },
  { icon: FaShieldAlt, title: 'Risk Management & Compliance', description: 'Navigate complex regulatory landscapes with our expert compliance and risk mitigation services.' },
  { icon: FaHandshake, title: 'Partnerships & Negotiation', description: 'Facilitating strategic partnerships and leading negotiations to secure favorable terms for your business.' },
];

export const INDUSTRIES: Industry[] = [
  { icon: GiOilRig, name: 'Oil & Gas', description: 'With over two decades of deep-rooted experience, we are the premier mediators and consultants in Nigeria\'s oil and gas sector. We specialize in handling complex negotiations, community relations, and navigating the intricate regulatory compliance for major international and local corporations.' },
  { icon: GiPowerGenerator, name: 'Energy Sector', description: 'Our expertise extends across the broader energy landscape, including renewables and power generation. We assist clients in project financing, policy advisory, and strategic partnerships to power Nigeria\'s future.' },
  { icon: MdBusiness, name: 'Emerging SMEs', description: 'We are passionate about fostering growth. We provide small and medium-sized enterprises with the strategic tools, market entry analysis, and operational guidance needed to scale effectively and sustainably in a competitive environment.' },
  { icon: MdLanguage, name: 'International Business', description: 'For foreign investors and international companies, we are the trusted bridge to the Nigerian market. We offer comprehensive support, from due diligence and joint venture facilitation to cross-cultural negotiation and risk management.' },
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