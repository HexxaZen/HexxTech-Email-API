import React, { useState, useEffect, useRef, type FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // Impor pustaka EmailJS

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormState>({ name: '', email: '', message: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null); // Gunakan useRef untuk form

  // Replace with your EmailJS credentials
  const serviceId = 'service_je2gtwa';
  const templateId = 'template_nljw4cv';
  const publicKey = 'a6QkFuU3424lL2zHQ';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setErrors(prev => ({ ...prev, [id]: '' }));
  };

  const validate = (): boolean => {
    const newErrors: FormState = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate() && formRef.current) {
      // Kirim email menggunakan EmailJS
      emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert('Thank you for your message! We will get back to you soon.');
          setFormData({ name: '', email: '', message: '' });
          setErrors({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send the message. Please try again later.');
        },
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 slide-up ${isFormVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-orbitron font-bold mb-4 text-neon-blue">Get In Touch</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Ready to start your next project? Let's build something amazing together.
          </p>
        </div>
        
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12">
          <div className={`slide-up ${isFormVisible ? 'visible' : ''}`}>
            {/* Tambahkan ref ke elemen form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name" // Tambahkan atribut 'name'
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 bg-black/50 border rounded-lg focus:border-neon-blue focus:outline-none text-white ${errors.name ? 'border-red-500' : 'border-neon-blue/20'}`}
                  required
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" // Tambahkan atribut 'name'
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 bg-black/50 border rounded-lg focus:border-neon-blue focus:outline-none text-white ${errors.email ? 'border-red-500' : 'border-neon-blue/20'}`}
                  required
                />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message" // Tambahkan atribut 'name'
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-4 bg-black/50 border rounded-lg focus:border-neon-blue focus:outline-none text-white ${errors.message ? 'border-red-500' : 'border-neon-blue/20'}`}
                  required
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
              </div>
              <button type="submit" className="bg-neon-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow cursor-pointer">
                Send Message <FaPaperPlane className="inline-block ml-2" />
              </button>
            </form>
          </div>
          
          <div className={`slide-up ${isFormVisible ? 'visible' : ''}`}>
            <div className="bg-black/50 border border-neon-blue/20 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000000.0!2d-100.0!3d40.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEwJzUzLjQiTiAxMDDCsDEwJzUzLjQiVw!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;