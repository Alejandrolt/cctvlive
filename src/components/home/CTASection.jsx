
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¿Listo para mejorar la seguridad de tu hogar o negocio?
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 max-w-2xl mx-auto text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contáctanos hoy mismo para una consulta gratuita y obtén un presupuesto personalizado para tus necesidades de seguridad.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
            <Link to="/contacto">Solicitar Cotización</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
