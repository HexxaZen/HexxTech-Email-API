import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaPaintBrush, FaPlug, FaSearch } from 'react-icons/fa';

const servicesData = [
  { icon: FaCode, title: 'Web Development', description: 'Custom websites built with modern technologies and best practices for optimal performance.' },
  { icon: FaPaintBrush, title: 'UI/UX Design', description: 'Stunning user interfaces that provide exceptional user experiences across all devices.' },
  { icon: FaPlug, title: 'API Integration', description: 'Seamless integration with third-party services and custom API development.' },
  { icon: FaSearch, title: 'SEO Optimization', description: 'Boost your online visibility with our comprehensive SEO strategies and techniques.' },
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 slide-up ${inView ? 'visible' : ''}`}>
          <h2 className="text-4xl font-orbitron font-bold mb-4 text-neon-blue">Our Services</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            We offer comprehensive web solutions tailored to your business needs
          </p>
        </div>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`service-card bg-gray-900/50 p-8 rounded-lg border border-neon-blue/20 hover-glow cursor-pointer slide-up ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="text-4xl text-neon-blue mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;