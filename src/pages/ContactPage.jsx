import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    { icon: Phone, text: "+57 3117439052", href: "tel:+57 3117439052" },
    { icon: Mail, text: "info@CctvLive.com", href: "mailto:info@CctvLive.com" },
    {
      icon: MapPin,
      text: "Cra 5 # 16-17, Pereira, Colombia",
      href: "https://www.google.com/maps/place/Cra.+5+%23+16-13,+Dosquebradas,+Pereira,+Risaralda/@4.815893,-75.691627,1505m/data=!3m1!1e3!4m6!3m5!1s0x8e388749cedd5b27:0x369ff78d4588a18e!8m2!3d4.8158932!4d-75.6916273!16s%2Fg%2F11jt1y9d13?hl=es&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Contáctanos</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ¿Tienes preguntas o necesitas una cotización? Estamos aquí para
          ayudarte. utiliza nuestros datos de contacto.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-8 rounded-lg shadow-xl contact-form"
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1747063972215!6m8!1m7!1sS3apdfz7KS0h80D9PraTpg!2m2!1d4.801693425670471!2d-75.70746874441095!3f173!4f-11.239999999999995!5f0.7820865974627469"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Información de Contacto
            </h2>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.icon className="h-6 w-6 text-primary mr-3" />
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Horario de Atención</h2>
            <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Sábado: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-700">Domingo y Festivos: Cerrado</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
