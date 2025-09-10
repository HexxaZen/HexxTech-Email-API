import React, { useEffect, useState } from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaDatabase, FaRocket } from 'react-icons/fa';
import Partikel from './ui/Particles'; // Asumsi lokasi komponen Particles Anda

const Hero: React.FC = () => {
  const [typingText, setTypingText] = useState('');
  const texts = ['We Build Websites.', 'We Build Future.'];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 100 : 150;

      if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(typeWriter, speed);
    };

    typeWriter();
  }, []);

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Komponen Partikel sekarang berada di dalam section.
        Ini adalah background, jadi posisinya harus di belakang konten.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Partikel
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Konten Hero Anda tetap di atas dengan z-index yang lebih tinggi */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 glow-blue">
            <span className="typing">{typingText}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 fade-in">
            Crafting cutting-edge digital experiences that push the boundaries of technology
          </p>
          <button className="bg-neon-blue hover:bg-blue-700 text-white font-bold py-4 px-8 cursor-pointer rounded-lg text-lg transition-all duration-300 hover-glow">
            Get Started <FaRocket className="inline-block ml-2" />
          </button>
        </div>
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        <FaCode className="text-4xl text-neon-blue/30 absolute top-20 left-10 animate-float" />
        <FaLaptopCode className="text-3xl text-neon-blue/30 absolute top-40 right-20 animate-float" style={{ animationDelay: '-2s' }} />
        <FaMobileAlt className="text-3xl text-neon-blue/30 absolute bottom-40 left-20 animate-float" style={{ animationDelay: '-4s' }} />
        <FaDatabase className="text-4xl text-neon-blue/30 absolute bottom-20 right-10 animate-float" style={{ animationDelay: '-6s' }} />
      </div>
    </section>
  );
};

export default Hero;