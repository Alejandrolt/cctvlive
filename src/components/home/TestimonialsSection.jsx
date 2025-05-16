
import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md testimonial-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
        <img 
          src={testimonial.image} 
          alt={`Foto de ${testimonial.name}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
  </motion.div>
);

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center"
          {...fadeIn}
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
