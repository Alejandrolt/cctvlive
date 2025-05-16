import React from "react";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

const CartDrawer = ({ open, setOpen }) => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const { toast } = useToast();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    toast({
      title: "Pedido enviado",
      description:
        "Nos pondremos en contacto contigo pronto para finalizar tu compra.",
      duration: 5000,
    });
    clearCart();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Carrito
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-grow overflow-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium">Tu carrito está vacío</p>
                    <p className="text-muted-foreground mt-1">
                      Agrega productos para comenzar
                    </p>
                    <Button className="mt-4" onClick={() => setOpen(false)}>
                      Continuar comprando
                    </Button>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.li
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-start border-b pb-4"
                      >
                        <div className="h-20 w-20 rounded-md overflow-hidden bg-gray-100 mr-3 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            ${item.price}
                          </p>
                          <div className="flex items-center mt-2">
                            <button
                              className="w-6 h-6 flex items-center justify-center border rounded-md"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              className="w-6 h-6 flex items-center justify-center border rounded-md"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full" onClick={handleCheckout}>
                    Finalizar Compra
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full mt-2"
                    onClick={clearCart}
                  >
                    Vaciar Carrito
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
