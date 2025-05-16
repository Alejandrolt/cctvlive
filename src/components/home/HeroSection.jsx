import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Soluciones de Seguridad Profesionales
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Instalación experta de cámaras de seguridad y venta de equipos de
              videovigilancia de alta calidad para hogares y negocios.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-blue-50"
              >
                <Link to="/productos">Ver Productos</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-blue-50"
              >
                <Link to="/servicios">Nuestros Servicios</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Cámaras de seguridad en un edificio moderno"
          class="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1610428338782-b33a39286d38"
        />
      </div>
    </section>
  );
};

export default HeroSection;
