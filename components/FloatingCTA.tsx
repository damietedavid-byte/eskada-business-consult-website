
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const FloatingCTA: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <button 
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 bg-eskada-gold text-eskada-blue p-4 rounded-full shadow-lg hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300 z-40 flex items-center space-x-2"
    >
      <FaCalendarAlt size={20} />
      <span className="font-bold hidden sm:inline">Book Now</span>
    </button>
  );
};

export default FloatingCTA;
