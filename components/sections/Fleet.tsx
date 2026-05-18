'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Luggage, Wifi, Coffee } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Fleet = () => {
  const vehicles = [
    {
      name: 'Hyundai Santa Fe',
      category: 'Spacious SUV',
      passengers: 5,
      luggage: 5,
      features: ['Clean Interior', 'Climate Control', 'Comfortable Seats', 'Spacious'],
      description: 'Well-maintained SUV with plenty of space for passengers and luggage.',
    },
  ];

  return (
    <Section id="fleet" className="relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/our-taxi.jpeg"
          alt="Background"
          fill
          className="object-cover blur-[8px] opacity-20"
          quality={50}
        />
      </div>
      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Our Vehicle</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Clean, comfortable, and well-maintained for a pleasant journey
          </p>
        </motion.div>

      <div className="max-w-2xl mx-auto">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover>
              <div className="aspect-video rounded-lg mb-6 relative overflow-hidden">
                <Image
                  src="/our-taxi.jpeg"
                  alt="Hyundai Santa Fe - Our Airport Transfer Vehicle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-sm text-[#D4AF37] mb-3">
                  {vehicle.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                <p className="text-gray-400 mb-4">{vehicle.description}</p>
              </div>

              <div className="flex items-center space-x-6 mb-4 pb-4 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-300">{vehicle.passengers} Passengers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Luggage className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-300">{vehicle.luggage} Bags</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {vehicle.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-gray-400 mb-6">Vehicle is regularly serviced and maintained for your safety and comfort</p>
        <Button href="#contact" variant="primary" size="lg">
          Request a Quote
        </Button>
      </motion.div>
      </div>
    </Section>
  );
};
