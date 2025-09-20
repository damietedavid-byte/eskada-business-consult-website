
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-eskada-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-eskada-gold font-semibold uppercase tracking-wider">Client Voices</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-eskada-blue mt-2">A Legacy of Trust & Success</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <FaQuoteLeft className="text-eskada-gold text-3xl mb-4" />
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-eskada-blue">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
