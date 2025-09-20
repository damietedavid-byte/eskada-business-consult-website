
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="bg-eskada-light-gray text-eskada-dark-gray font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Industries />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
