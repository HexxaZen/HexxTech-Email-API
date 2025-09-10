import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Partikel from './components/ui/Particles';


const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;