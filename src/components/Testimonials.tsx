import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';

const testimonialsData = [
  { text: 'HexxTech delivered an exceptional website that exceeded all our expectations. Their attention to detail and innovative approach is remarkable.', author: 'Sarah Johnson', role: 'CEO, TechStart' },
  { text: 'Professional, reliable, and incredibly talented. HexxTech transformed our digital presence completely.', author: 'Mike Chen', role: 'Founder, InnovateLab' },
  { text: 'The team at HexxTech is simply amazing. They brought our vision to life with stunning results.', author: 'Emily Davis', role: 'Marketing Director, FutureCorp' },
];

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Menerapkan logika "reveal on scroll"
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
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className={`text-center mb-16 slide-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-orbitron font-bold mb-4 text-neon-blue">What Our Clients Say</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="testimonial-track flex space-x-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-card min-w-80 bg-gray-900/50 p-8 rounded-lg border border-neon-blue/20">
                <div className="flex text-neon-blue mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless infinite scroll */}
            {testimonialsData.map((testimonial, index) => (
              <div key={`dup-${index}`} className="testimonial-card min-w-80 bg-gray-900/50 p-8 rounded-lg border border-neon-blue/20">
                <div className="flex text-neon-blue mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;