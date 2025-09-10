import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart, FaChartLine, FaMobileAlt } from 'react-icons/fa';

const portfolioItems = [
  { icon: FaShoppingCart, title: 'E-Commerce Platform', description: 'Modern e-commerce solution with advanced features and seamless user experience.', bgColor: 'from-blue-900 to-purple-900' },
  { icon: FaChartLine, title: 'Analytics Dashboard', description: 'Real-time analytics dashboard with interactive visualizations and reporting.', bgColor: 'from-green-900 to-blue-900' },
  { icon: FaMobileAlt, title: 'Mobile App Interface', description: 'Responsive mobile application with intuitive design and smooth interactions.', bgColor: 'from-red-900 to-orange-900' },
];

const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-slide carousel
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % portfolioItems.length);
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  // Reveal on scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Hentikan observasi setelah terlihat
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Element terlihat 10%
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className={`py-20 bg-gray-900/50 ${isVisible ? 'slide-up visible' : 'slide-up'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold mb-4 text-neon-blue">Our Portfolio</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Showcasing our latest projects and innovative solutions
          </p>
        </div>
        
        <div className="carousel-container max-w-4xl mx-auto">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {portfolioItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="portfolio-item min-w-full px-4">
                  <div className="bg-black/50 rounded-lg overflow-hidden border border-neon-blue/20 hover-glow">
                    <div className={`h-64 bg-gradient-to-br ${item.bgColor} flex items-center justify-center`}>
                      <Icon className="text-6xl text-neon-blue" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            {portfolioItems.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`portfolio-btn px-4 py-2 rounded-lg cursor-pointer transition-colors ${currentSlide === index ? 'bg-neon-blue' : 'bg-gray-700 hover:bg-blue-700'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;