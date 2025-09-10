import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neon-blue/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="font-orbitron text-2xl font-bold glow-blue mb-4 md:mb-0">
            HexxTech
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors hover-glow">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors hover-glow">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors hover-glow">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors hover-glow">
              <FaGithub className="text-xl" />
            </a>
          </div>
          
          <div className="text-gray-400">
            © 2025 HexxTech. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;