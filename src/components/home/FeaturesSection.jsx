import React from "react";
import { motion } from "framer-motion";
import { Shield, Wrench as Tool, Clock, CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const featureItems = [
  {
    icon: Shield,
    title: " Seguridad",
    description:
      "Equipos de última generación para garantizar la protección de su hogar o negocio.",
  },
  {
    icon: Tool,
    title: "Instalación Profesional",
    description:
      "Técnicos certificados con amplia experiencia en instalación de sistemas de seguridad.",
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description:
      "Asistencia técnica disponible las 24 horas, los 7 días de la semana.",
  },
  {
    icon: CheckCircle,
    title: "Garantía de Calidad",
    description:
      "Todos nuestros productos y servicios cuentan con garantía de satisfacción.",
  },
];

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 className="text-3xl font-bold mb-4" {...fadeIn}>
            Razon Para Elegirnos
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Brindamos soluciones de seguridad con los mejores productos y
            servicios profesionales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
