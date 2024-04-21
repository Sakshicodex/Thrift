// src/components/CartModal.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartModal = () => {
    const { cartItems } = useCart();

    return (
        <div className="cart-modal bg-white shadow-lg rounded p-4" style={{ position: 'absolute', right: 20, top: 50, width: '300px', zIndex: 100 }}>
            <h3 className="font-bold text-lg">Cart Items</h3>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id} className="border-b py-2">
                            <span>{item.name} - {item.quantity} x {item.price}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartModal;
