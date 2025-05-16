import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { products, categories } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    const results = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(results);
  }, [searchTerm, activeCategory]);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Producto agregado",
      description: `${product.name} ha sido agregado al carrito.`,
      duration: 3000,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Nuestros Productos</h1>
        <p className="text-gray-600">
          Descubre nuestra amplia gama de cámaras de seguridad y accesorios de
          alta calidad.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
          >
            <TabsList className="w-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex-1"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + filteredProducts.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="product-card bg-white rounded-lg shadow-md overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/productos/${product.id}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover product-image"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg truncate">
                          {product.name}
                        </h3>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {product.category === "camaras"
                            ? "Cámara"
                            : product.category === "grabadores"
                            ? "Grabador"
                            : "Accesorio"}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary">
                          ${product.price}
                        </span>
                        <Button
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={(e) => handleAddToCart(product, e)}
                        >
                          <ShoppingCart className="h-4 w-4" />
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Filter className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-500 mb-4">
                  No hay productos que coincidan con tu búsqueda. Intenta con
                  otros términos.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                >
                  Ver todos los productos
                </Button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
