export const products = [
  {
    id: 1,
    name: "Cámara Domo HD 1080p",
    description:
      "Cámara de seguridad tipo domo con resolución Full HD 1080p, visión nocturna y ángulo de visión de 110°. Ideal para interiores.",
    price: 75000,
    category: "camaras",
    stock: 10,
    features: [
      "Resolución Full HD 1080p",
      "Visión nocturna hasta 20m",
      "Ángulo de visión de 110°",
      "Carcasa resistente a la intemperie IP66",
      "Fácil instalación",
    ],
    image: "/img/camhd.webp",
  },
  {
    id: 2,
    name: "Cámara Bullet 4K Ultra HD",
    description:
      "Cámara de seguridad tipo bullet con resolución 4K Ultra HD, zoom óptico 3x y visión nocturna avanzada. Perfecta para exteriores.",
    price: 210000,
    category: "camaras",
    features: [
      "Resolución 4K Ultra HD",
      "Zoom óptico 3x",
      "Visión nocturna hasta 30m",
      "Resistente al agua y polvo IP67",
      "Detección de movimiento inteligente",
    ],
    image: "/img/cam4k.jpg",
    stock: 10,
  },
  {
    id: 3,
    name: "Cámara PTZ WiFi",
    description:
      "Cámara de seguridad PTZ (Pan-Tilt-Zoom) con conexión WiFi, seguimiento automático y audio bidireccional. Control total desde tu smartphone.",
    price: 470000,
    category: "camaras",
    features: [
      "Rotación 355° horizontal y 90° vertical",
      "Seguimiento automático de movimiento",
      "Audio bidireccional",
      "Conexión WiFi estable",
      "Almacenamiento en la nube o tarjeta SD",
    ],
    image: "/img/ptz.png",
    stock: 8,
  },
  {
    id: 4,
    name: "DVR 8 Canales",
    description:
      "Grabador de video digital (DVR) de 8 canales compatible con cámaras HD y 4K.",
    price: 347000,
    category: "grabadores",
    features: [
      "8 canales de video",
      "Compatible con cámaras HD y 4K",
      "Disco duro de 1TB incluido",
      "Acceso remoto vía app móvil",
      "Detección de movimiento configurable",
    ],
    image: "/img/dvr.png",
    stock: 5,
  },
  {
    id: 5,
    name: "NVR 16 Canales PoE",
    description:
      "Grabador de video en red (NVR) de 16 canales con puertos PoE integrados. Solución completa para sistemas de vigilancia IP.",
    price: 1200000,
    category: "grabadores",
    features: [
      "16 canales de video IP",
      "16 puertos PoE integrados",
      "Capacidad para 2 discos duros (no incluidos)",
      "Grabación continua o por detección",
      "Interfaz HDMI y VGA",
    ],
    image: "/img/nvr.jpg",
    stock: 3,
  },
  {
    id: 6,
    name: "Cable CCTV 20m",
    description:
      "Cable coaxial para sistemas CCTV con conectores BNC y alimentación. Longitud de 20 metros, ideal para instalaciones medianas.",
    price: 27000,
    category: "accesorios",
    features: [
      "Longitud: 20 metros",
      "Conectores BNC preinstalados",
      "Cable de alimentación incluido",
      "Alta resistencia a interferencias",
      "Cubierta exterior resistente",
    ],
    image: "/img/cable.jpg",
    stock: 20,
  },
  {
    id: 7,
    name: "Fuente de Alimentación 12V",
    description:
      "Fuente de alimentación de 12V para cámaras de seguridad. Soporta hasta 8 cámaras con protección contra sobrecarga.",
    price: 9000,
    category: "accesorios",
    features: [
      "Voltaje: 12V DC",
      "Soporta hasta 8 cámaras",
      "Protección contra sobrecarga",
      "Indicador LED de funcionamiento",
      "Diseño compacto",
    ],
    image: "/img/fuente.jpg",
    stock: 12,
  },
  {
    id: 8,
    name: "Disco Duro 4TB Vigilancia",
    description:
      "Disco duro especial para sistemas de vigilancia con capacidad de 4TB. Optimizado para grabación continua 24/7.",
    price: 480000,
    category: "accesorios",
    features: [
      "Capacidad: 4TB",
      "Optimizado para grabación 24/7",
      "Bajo consumo de energía",
      "Tecnología de reducción de errores",
      "3 años de garantía",
    ],
    image: "/img/dd.jpg",
    stock: 7,
  },
];

export const categories = [
  { id: "all", name: "Todos los productos" },
  { id: "camaras", name: "Cámaras de Seguridad" },
  { id: "grabadores", name: "DVR y NVR" },
  { id: "accesorios", name: "Accesorios" },
];

export const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id));
};

export const getRelatedProducts = (id, category, limit = 4) => {
  return products
    .filter(
      (product) => product.id !== parseInt(id) && product.category === category
    )
    .slice(0, limit);
};
