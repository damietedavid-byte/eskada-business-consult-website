
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-eskada-blue bg-opacity-95 shadow-lg backdrop-blur-sm' : 'bg-transparent text-shadow'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex-shrink-0">
            <div className="text-white">
              <span className="font-playfair font-bold text-3xl tracking-tight">ESKADA</span>
              <span className="block text-xs font-sans tracking-[0.2em] opacity-80 -mt-1">
                BUSINESS CONSULT
              </span>
            </div>
          </a>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)} 
                className="text-sm font-semibold transition-colors duration-300 text-gray-300 hover:text-eskada-gold"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="inline-block bg-eskada-gold text-eskada-blue font-bold py-2 px-5 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Book a Session
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-eskada-blue bg-opacity-95 backdrop-blur-sm absolute top-20 left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)} 
                className="text-gray-300 hover:text-eskada-gold text-lg"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="mt-4 bg-eskada-gold text-eskada-blue font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300">
              Book a Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;