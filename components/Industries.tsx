
import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-eskada-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-eskada-gold font-semibold uppercase tracking-wider">Sectoral Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Industries We Serve</h2>
          <p className="mt-4 text-lg text-gray-300">
            Our deep industry knowledge allows us to provide tailored solutions that address the unique challenges and opportunities of your sector.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {INDUSTRIES.map((industry) => (
            <div key={industry.name} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-eskada-gold hover:text-eskada-blue transform hover:scale-105">
              <industry.icon className="text-5xl mb-4" />
              <h3 className="text-lg font-semibold">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
