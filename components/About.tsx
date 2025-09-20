import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-eskada-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-eskada-gold font-semibold uppercase tracking-wider">About ESKADA</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-eskada-blue mt-2 mb-6">Pioneering Progress, Building Trust</h2>
            <p className="text-gray-600 mb-4 text-lg">
              For over 20 years, ESKADA Business Consult has been at the forefront of chartered mediation within Nigeria's demanding oil and gas sector. Our legacy is built on a foundation of integrity, unparalleled expertise, and a near-perfect record of resolving complex disputes for industry giants.
            </p>
            <p className="text-gray-600 text-lg">
              Today, we leverage this rich history to empower a new generation of businesses. We provide world-class consultancy services, offering strategic guidance and actionable insights to help you thrive in the dynamic Nigerian business landscape.
            </p>
          </div>
          <div className="relative group aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" alt="A diverse team of professionals in a business meeting" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-eskada-blue bg-opacity-40 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20">
              <FaPlayCircle className="text-white text-7xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;