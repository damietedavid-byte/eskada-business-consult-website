
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-eskada-gold text-eskada-blue mb-6">
        <service.icon className="text-3xl" />
      </div>
      <h3 className="text-xl font-bold text-eskada-blue mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-eskada-gold font-semibold uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-eskada-blue mt-2">Comprehensive Consultancy Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            From high-stakes mediation to strategic market entry, we provide the expert guidance your business needs to excel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
