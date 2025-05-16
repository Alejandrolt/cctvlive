import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  Shield,
  Package,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { formatCOP } from "@/utils/formatCurrency";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    const fetchedProduct = getProductById(id);

    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setRelatedProducts(getRelatedProducts(id, fetchedProduct.category));
    } else {
      navigate("/productos");
    }

    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (product) {
      const productToAdd = { ...product, quantity };
      addToCart(productToAdd);

      toast({
        title: "Producto agregado",
        description: `${quantity} ${quantity > 1 ? "unidades" : "unidad"} de ${
          product.name
        } ${
          quantity > 1 ? "han sido agregadas" : "ha sido agregada"
        } al carrito.`,
        duration: 3000,
      });
    }
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      if (newQuantity < 1) return 1;
      if (newQuantity > product.stock) return product.stock;
      return newQuantity;
    });
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Cargando producto...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        className="mb-6 flex items-center"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover aspect-square"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full inline-block mb-4 self-start">
            {product.category === "camaras"
              ? "Cámara de Seguridad"
              : product.category === "grabadores"
              ? "Grabador de Video"
              : "Accesorio"}
          </div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6 text-lg">{product.description}</p>

          {product.price > 0 && (
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-primary">
                {formatCOP(product.price)}
              </span>
              <span className="ml-2 text-sm text-gray-500">IVA incluido</span>
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">
              Características principales:
            </h3>
            <ul className="space-y-2 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="mr-4 font-medium">Cantidad:</span>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <div className="w-16 h-10 flex items-center justify-center border-t border-b text-lg font-medium">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
              </div>
              <span className="ml-4 text-sm text-gray-500">
                ({product.stock} disponibles)
              </span>
            </div>
          </div>

          {/*<Button
            size="lg"
            className="w-full mb-4 flex items-center justify-center py-3 text-lg"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {product.stock > 0 ? "Agregar al Carrito" : "Agotado"}
          </Button>*/}

          <div className="grid grid-cols-2 gap-4 mt-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-primary mr-2" />
              <span>Garantía de 1 año</span>
            </div>
            <div className="flex items-center">
              <Package className="h-5 w-5 text-primary mr-2" />
              <span>Producto original</span>
            </div>
            <div className="flex items-center">
              <Truck className="h-5 w-5 text-primary mr-2" />
              <span>Envío a todo el país</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Stock disponible</span>
            </div>
          </div>
        </motion.div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Productos relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="product-card bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                }}
              >
                <Link to={`/productos/${relatedProduct.id}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover product-image"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 truncate">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2 h-10">
                      {relatedProduct.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-primary text-lg">
                        ${relatedProduct.price.toFixed(0)}
                      </span>
                      <Button size="sm" variant="outline">
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
