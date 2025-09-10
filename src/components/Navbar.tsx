import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-black/90'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-orbitron text-2xl font-bold glow-blue cursor-pointer">
            HexxTech
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 cursor-pointer">
            <Link to="home" smooth={true} duration={500} className="nav-link hover:text-neon-blue transition-colors duration-300">Home</Link>
            <Link to="about" smooth={true} duration={500} className="nav-link hover:text-neon-blue transition-colors duration-300">About</Link>
            <Link to="services" smooth={true} duration={500} className="nav-link hover:text-neon-blue transition-colors duration-300">Services</Link>
            <Link to="portfolio" smooth={true} duration={500} className="nav-link hover:text-neon-blue transition-colors duration-300">Portfolio</Link>
            <Link to="testimonials" smooth={true} duration={500} className="nav-link hover:text-neon-blue transition-colors duration-300">Testimonials</Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link hover:text-neon-blue transition-colors duration-300">Contact</Link>
          </div>

          <button className="md:hidden text-white focus:outline-none" onClick={handleMobileMenuToggle}>
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="home" smooth={true} duration={500} className="block hover:text-neon-blue transition-colors duration-300" onClick={handleMobileMenuToggle}>Home</Link>
            <Link to="about" smooth={true} duration={500} className="block hover:text-neon-blue transition-colors duration-300" onClick={handleMobileMenuToggle}>About</Link>
            <Link to="services" smooth={true} duration={500} className="block hover:text-neon-blue transition-colors duration-300" onClick={handleMobileMenuToggle}>Services</Link>
            <Link to="portfolio" smooth={true} duration={500} className="block hover:text-neon-blue transition-colors duration-300" onClick={handleMobileMenuToggle}>Portfolio</Link>
            <Link to="testimonials" smooth={true} duration={500} className="block hover:text-neon-blue transition-colors duration-300" onClick={handleMobileMenuToggle}>Testimonials</Link>
            <Link to="contact" smooth={true} duration={500} className="block hover:text-neon-blue transition-colors duration-300" onClick={handleMobileMenuToggle}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;