'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-gold">ABN</span>
              <span className="text-white ml-2">Taxis</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+447624354427" className="flex items-center text-white hover:text-[#D4AF37] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>+44 7624 354427</span>
            </a>
            <Button href="#contact" variant="primary" size="sm">
              Book Now
            </Button>
          </div>

        </div>

      </div>
    </motion.nav>
  );
};
