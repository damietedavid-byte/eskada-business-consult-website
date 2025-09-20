
import React from 'react';
import { NAV_LINKS } from '../constants';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className="bg-eskada-blue text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-2">ESKADA</h2>
            <p className="text-sm text-gray-400">Your Strategic Partner for Success.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-eskada-gold transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-eskada-gold transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-eskada-gold transition-colors"><FaFacebook size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="hover:text-eskada-gold transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-eskada-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-eskada-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Stay Updated</h3>
            <p className="text-sm mb-3">Sign up for our newsletter to get the latest insights.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full px-3 py-2 text-gray-800 rounded-l-md focus:outline-none" />
              <button className="bg-eskada-gold text-eskada-blue font-bold px-4 py-2 rounded-r-md hover:bg-opacity-90">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ESKADA BUSINESS CONSULT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
