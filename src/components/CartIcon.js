// src/components/CartIcon.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartIcon = () => {
    const { cartItems } = useCart();
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon">
      <i className="fa fa-shopping-cart"></i>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
