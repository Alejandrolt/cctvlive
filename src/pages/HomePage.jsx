import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { products } from "@/data/products";
import { services } from "@/data/services";

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const featuredServices = services.slice(0, 3);

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Propietario de Tienda",
      image: "https://images.unsplash.com/photo-1626054165894-be2779f52260",
      quote:
        "Excelente servicio de instalación. Los técnicos fueron muy profesionales y dejaron todo funcionando perfectamente. Ahora puedo monitorear mi negocio desde cualquier lugar.",
    },
    {
      name: "Laura Martínez",
      role: "Propietaria de Casa",
      image:
        "https://plus.unsplash.com/premium_vector-1727952231430-87b459905e1b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Instalaron un sistema completo en mi casa y estoy muy satisfecha con el resultado. La calidad de las cámaras es excelente y la aplicación móvil es muy fácil de usar.",
    },
    {
      name: "Miguel Sánchez",
      role: "Gerente de Oficina",
      image:
        "https://plus.unsplash.com/premium_vector-1727953894835-e3945c47a7c0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "El servicio de mantenimiento es excepcional. Siempre responden rápidamente a cualquier problema y mantienen nuestro sistema funcionando perfectamente.",
    },
  ];

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection products={featuredProducts} />
      <ServicesSection services={featuredServices} />
      <CTASection />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
};

export default HomePage;
