import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  target: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ target, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || !counterRef.current) return;

    let current = 0;
    const increment = target / 100;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counterRef.current!.textContent = target.toString();
        clearInterval(timer);
      } else {
        counterRef.current!.textContent = Math.floor(current).toString();
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center p-6 bg-black/50 rounded-lg border border-neon-blue/20 hover-glow">
      <div ref={counterRef} className="text-4xl font-orbitron font-bold text-neon-blue mb-2 counter">0</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`slide-up ${inView ? 'visible' : ''}`}>
            <h2 className="text-4xl font-orbitron font-bold mb-6 text-neon-blue">About HexxTech</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We are a cutting-edge technology company specializing in creating innovative web solutions that transform businesses. Our team of expert developers and designers work tirelessly to deliver exceptional digital experiences that exceed expectations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a focus on modern technologies and futuristic design, we build websites that not only look stunning but perform flawlessly across all devices and platforms.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 gap-6 slide-up ${inView ? 'visible' : ''}`}>
            <Counter target={150} label="Projects Completed" />
            <Counter target={98} label="Active Clients" />
            <Counter target={5} label="Years Experience" />
            <Counter target={24} label="Support Hours" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;