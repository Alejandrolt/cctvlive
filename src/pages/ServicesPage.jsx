
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Wrench, ShieldCheck, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const iconMap = {
    1: Wrench,
    2: ShieldCheck,
    3: Search,
    4: ShieldCheck 
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Nuestros Servicios de Seguridad</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ofrecemos una gama completa de servicios para garantizar la protección de su hogar o negocio, desde la instalación hasta el mantenimiento y monitoreo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.id] || Wrench;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <IconComponent className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 line-clamp-3">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                  <Button asChild className="w-full">
                    <Link to="/contacto">Solicitar Cotización</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.section 
        className="py-12 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg shadow-xl"
        {...fadeIn}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas una Solución Personalizada?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Entendemos que cada cliente tiene necesidades únicas. Contáctanos para una consulta gratuita y diseñaremos un plan de seguridad a tu medida.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contacto">Habla con un Experto</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
