import React from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../images/1.jpg'; // Path to a default image if none is provided
import { influencerProducts } from './InfluencerProduct';
import Layout from './layout';
import { useCart } from '../contexts/CartContext';



const InfluencerProfile = () => {
  const { name } = useParams();
  const products = influencerProducts[name] || [];
  const { addToCart } = useCart();

  return (
    <Layout>
      <div className="container mx-auto my-12 px-4 min-h-screen">
        <h2 className="text-4xl font-semibold text-center mb-10">{decodeURIComponent(name)}'s Profile</h2>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="card shadow-lg p-4 flex flex-col items-center">
              {/* Image container */}
              <img
                src={product.imageUrl || defaultImage} // Use the product's image or a default if not provided
                alt={product.name}
                className="w-full h-64 object-cover rounded"
              />
              <div className="p-4 w-full">
                {/* Name and price container */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-lg">Rs.{product.price}</p>
                </div>
                <button
                  onClick={() => addToCart({ ...product, price: product.price.toString() })}
                  className="text-black font-bold py-2 px-4 border-2 border-black rounded transition-all mt-4 w-full hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
          {products.length === 0 && <p>No products found for this influencer.</p>}
        </div>
      </div>
    </Layout>
  );
};

export default InfluencerProfile;
