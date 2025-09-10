import React, { useEffect, useRef } from 'react';

const Particles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
      
      containerRef.current.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 25000);
    };

    const interval = setInterval(() => {
      if (containerRef.current && containerRef.current.children.length < 80) {
        createParticle();
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} id="particles-container" className="fixed inset-0 pointer-events-none z-0"></div>
  );
};

export default Particles;