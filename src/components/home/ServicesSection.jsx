
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    key={service.id}
    className="service-card rounded-lg overflow-hidden shadow-lg relative h-80"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    style={{
      backgroundImage: `url(${service.image})`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-white/80 mb-4 line-clamp-2">{service.description}</p>
      <Button asChild size="sm" className="self-start">
        <Link to="/servicios">Más Información</Link>
      </Button>
    </div>
  </motion.div>
);

const ServicesSection = ({ services }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center"
          {...fadeIn}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
