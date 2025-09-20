
import React from 'react';

const Hero: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight opacity-0 animate-fade-in-scale-up">
          20+ Years of Excellence in Mediation & Business Consultancy
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in">
          Your strategic partner for navigating Nigeria's business landscape. We turn complexity into opportunity.
        </p>
        <a 
          href="#contact" 
          onClick={scrollToContact}
          className="inline-block bg-eskada-gold text-eskada-blue font-bold text-lg py-4 px-10 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Book a Consultation
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
      </div>
    </section>
  );
};

export default Hero;