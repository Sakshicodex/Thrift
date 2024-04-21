// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Attempting to add to cart:", product);
    setCartItems(prevItems => {
      console.log("Previous cart items:", prevItems);
      const itemExists = prevItems.find(item => item.id === product.id);
      console.log("Item exists:", itemExists);
      if (itemExists) {
        const updatedItems = prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        console.log("Updated cart items with increased quantity:", updatedItems);
        return updatedItems;
      }
      const newItems = [...prevItems, { ...product, quantity: 1 }];
      console.log("Cart items after adding new item:", newItems);
      return newItems;
    });
    
   
    
    
  };
  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      ).filter(item => item.quantity > 0) // Remove the item if quantity becomes 0
    );
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
