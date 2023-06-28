import { useState, useEffect, createContext } from "react";
import { Cart } from "@/api/cart";

const cartCtrl = new Cart();

export const CartContext = createContext();

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const response = cartCtrl.getAll();
    setCart(response);

    const und = cartCtrl.count();
    setTotal(und);
  }, []);

  const addCart = (itemId, quantity) => { 
    setLoading(true);
    cartCtrl.add(itemId, quantity);
    refreshTotalCart();
    setLoading(false);    
  };

  const decreaseCart = (itemId) => { 
    setLoading(true);
    cartCtrl.decrease(itemId);
    refreshTotalCart();
    setLoading(false);    
  };

  const incrementCart = (itemId) => { 
    setLoading(true);
    cartCtrl.increment(itemId);
    refreshTotalCart();
    setLoading(false);    
  };


  const deleteCart = (itemId) => { 
    setLoading(true);
    cartCtrl.delete(itemId);
    refreshTotalCart();
    setLoading(false);    
  };


  const deleteAllCart = () => { 
    setLoading(true);
    cartCtrl.deleteAll();
    refreshTotalCart();
    setLoading(false);    
  };

  const refreshTotalCart = () => {
    setTotal(cartCtrl.count());
    setCart(cartCtrl.getAll());
  };


  

  const data = {
    cart,
    total,
    loading,
    addCart,
    decreaseCart,
    incrementCart,
    deleteCart,   
    deleteAllCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
