// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => setCart((prev) => [...prev, item]);
//   const removeFromCart = (id) =>
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// export default CartContext;