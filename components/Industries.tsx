
import React, { useState } from 'react';
import { INDUSTRIES } from '../constants';
import type { Industry } from '../types';
import { FaTimes } from 'react-icons/fa';

const Industries: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  const handleOpenModal = (industry: Industry) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndustry(null);
  };

  return (
    <section id="industries" className="py-20 bg-eskada-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-eskada-gold font-semibold uppercase tracking-wider">Sectoral Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Industries We Serve</h2>
          <p className="mt-4 text-lg text-gray-300">
            Our deep industry knowledge allows us to provide tailored solutions that address the unique challenges and opportunities of your sector. Click on an industry to learn more.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {INDUSTRIES.map((industry) => (
            <button
              key={industry.name}
              onClick={() => handleOpenModal(industry)}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-eskada-gold hover:text-eskada-blue transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-eskada-gold"
              aria-label={`Learn more about our work in the ${industry.name} industry`}
            >
              <industry.icon className="text-5xl mb-4" />
              <h3 className="text-lg font-semibold">{industry.name}</h3>
            </button>
          ))}
        </div>
      </div>

      {isModalOpen && selectedIndustry && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white text-eskada-dark-gray rounded-lg shadow-2xl max-w-2xl w-full mx-auto animate-scale-in max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8 pb-4 relative flex-shrink-0 border-b border-gray-200">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-eskada-blue transition-colors"
                aria-label="Close modal"
              >
                <FaTimes size={24} />
              </button>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 pr-8">
                <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-eskada-gold text-eskada-blue">
                  <selectedIndustry.icon className="text-4xl" />
                </div>
                <div className="mt-2 sm:mt-0">
                  <h2 className="text-2xl font-bold text-eskada-blue">{selectedIndustry.name}</h2>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 overflow-y-auto">
              <p className="text-gray-600 leading-relaxed">{selectedIndustry.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Industries;
