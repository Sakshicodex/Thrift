import React from 'react';
import Layout from './layout';
import { useCart } from '../contexts/CartContext';
// Assuming you have images imported similarly as in your example
import Bag1Image from '../images/bag.jpg';
import Bag2Image from '../images/bag2.jpg';
import Bag3Image from '../images/bag3.jpg';
import Bag4Image from '../images/bag4.jpg';
import Bag5Image from '../images/bag5.jpg';
import Bag6Image from '../images/bag6.jpg';
import Bag7Image from '../images/bag7.jpg';
import Bag8Image from '../images/bag8.jpg';
import Bag9Image from '../images/bag9.jpg';
import Bag10Image from '../images/bag10.jpg';


const products = [
  { id: 20, name: 'Elegant Bag', price: 1200, imageUrl: Bag1Image },
  { id: 21, name: 'Classic Bag', price: 1500, imageUrl: Bag2Image },
  { id: 22, name: 'Modern Bag', price: 2000, imageUrl: Bag3Image },
  { id: 23, name: 'Elegant Bag', price: 1200, imageUrl: Bag4Image },
  { id: 24, name: 'Classic Bag', price: 1600, imageUrl: Bag5Image },
  { id: 25, name: 'Modern Bag', price: 1800, imageUrl: Bag6Image },
  { id: 26, name: 'Elegant Bag', price: 1907, imageUrl: Bag7Image },
  { id: 27, name: 'Classic Bag', price: 1800, imageUrl: Bag8Image },
  { id: 28, name: 'Modern Bag', price: 1900, imageUrl: Bag9Image },
  { id: 29, name: 'Modern Bag', price: 5600, imageUrl: Bag10Image },

];

const BagsPage = () => {
  const { addToCart } = useCart();


  return (
    <Layout>
      <div className="container mx-auto my-12 px-4 min-h-screen">
        <h2 className="text-4xl font-semibold text-center mb-10">Bags</h2>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="w-full h-52 relative rounded-lg overflow-hidden"> {/* Container with a fixed height */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute w-full h-full object-cover" // Tailwind classes for full cover
                />
              </div>
              <div className="mt-4 w-full flex justify-between items-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700">Rs.{product.price}</p>
              </div>
              <button
                onClick={() => addToCart({ ...product, price: product.price.toString() })}
                className="text-black font-bold py-2 px-4 border-2 border-black rounded transition-all mt-4 w-full hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BagsPage;
