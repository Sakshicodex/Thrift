// src/components/CartPage.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import Layout from './layout';

const CartPage = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * parseFloat(item.price.replace(/Rs\./g, '')), 0);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const initiatePayment = async () => {
    try {
      const orderResponse = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalPrice * 100 })
      });

      if (!orderResponse.ok) throw new Error(`HTTP error! status: ${orderResponse.status}`);

      const orderData = await orderResponse.json();
      const scriptLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

      if (!scriptLoaded) {
        alert('Failed to load payment gateway. Please try again.');
        return;
      }

      const options = {
        key: 'rzp_test_ISFZvpmbqZTNz9', // Replace with your actual Razorpay key
        amount: orderData.amount,
        currency: 'INR',
        name: 'Your Site Name',
        description: 'Transaction',
        image: 'https://example.com/your_logo',
        order_id: orderData.id,
        handler: async function (response) {
          try {
            const emailSendResponse = await fetch('http://localhost:5000/send-confirmation-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: 'customer@example.com', // Replace with the customer's actual email address
                itemsOrdered: cartItems.map(item => ({
                  name: item.name,
                  quantity: item.quantity,
                  price: item.price,
                })),
                totalAmount: totalPrice,
              }),
            });

            if (!emailSendResponse.ok) {
              const emailSendResult = await emailSendResponse.json();
              throw new Error(emailSendResult.error || 'Failed to send confirmation email');
            }

            console.log('Confirmation email sent');
            const orderDetails = {
              items: cartItems.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
              })),
              totalAmount: totalPrice
            };

            const existingOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];
            const updatedOrderHistory = [...existingOrders, orderDetails];
            localStorage.setItem('orderHistory', JSON.stringify(updatedOrderHistory));
            
            window.location.href = '/profile';
          } catch (error) {
            console.error('Error:', error);
          }
        },
        // Additional Razorpay options can be added here
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto my-12 px-4 min-h-screen bg-gray-100">
        <h2 className="text-4xl font-semibold text-center mb-10">Your Cart</h2>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-4">
              <div>{/* Placeholder for left side content if any */}</div>
              <div>
                <strong className="block text-right">Total: Rs. {totalPrice.toFixed(2)}</strong>
                <button
                  className="bg-black text-white py-2 px-6 mt-5 hover:bg-opacity-80 transition-opacity duration-300"
                  onClick={initiatePayment}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;

