'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'James *******',
      role: 'Business Traveler',
      content: 'Always punctual and professional. The vehicle is clean and comfortable. This is my go-to service for all airport transfers on the island.',
      rating: 5,
    },
    {
      name: 'Sarah ********',
      role: 'Local Resident',
      content: 'Reliable service every time. Great for getting to the airport early in the morning. Would definitely recommend to anyone needing a dependable ride.',
      rating: 5,
    },
    {
      name: 'David ****',
      role: 'Frequent Traveler',
      content: 'After trying several services, this is the most reliable. Always on time, professional driver, and fair pricing. Very happy with the service.',
      rating: 5,
    },
    {
      name: 'Emma ********',
      role: 'Business Client',
      content: 'Use this service regularly for business trips. Reliable, professional, and the driver knows all the best routes. Makes traveling stress-free.',
      rating: 5,
    },
    {
      name: 'Michael *******',
      role: 'Tourist',
      content: 'Visiting the Isle of Man for the first time, the driver was friendly and shared great local knowledge. Made our trip much easier.',
      rating: 5,
    },
    {
      name: 'Lisa ********',
      role: 'Regular Customer',
      content: 'Been using this service for years. Always reliable, always professional. You can count on getting to the airport on time.',
      rating: 5,
    },
  ];

  return (
    <Section id="testimonials" dark>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient-gold">Client Testimonials</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover glass className="h-full">
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-10 h-10 text-[#D4AF37] opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37]" fill="#D4AF37" />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="mt-auto pt-4 border-t border-gray-800">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="inline-flex items-center space-x-8 bg-[#1a1a1a] border border-gray-800 rounded-2xl px-8 py-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-1">300+</div>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="w-px h-12 bg-gray-800"></div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-1">5.0</div>
            <p className="text-gray-400">Customer Rating</p>
          </div>
          <div className="w-px h-12 bg-gray-800"></div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-1">10+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
