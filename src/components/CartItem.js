// src/components/CartItem.js (create this new component to represent a single cart item)
import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../index.css'; 
const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useCart();
  const totalPrice = item.quantity * parseFloat(item.price.replace(/Rs\./g, ''));

  return (
    <div className="flex justify-between items-center border-b py-2">
      <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover" />
      <span className="item-name">{item.name}</span>
      <div className="flex items-center border rounded">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="px-3 py-1 border-r"
        >
          -
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          onClick={() => increaseQuantity(item.id)}
          className="px-3 py-1 border-l"
        >
          +
        </button>
      </div>
      <span>Rs. {totalPrice.toFixed(2)}</span>
    </div>
  );
};

export default CartItem;
