import React from 'react';
import image from '../images/in.jpg'; // Update the path to your image
import { Link } from 'react-router-dom';


const Shop = () => {
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Wrapper for the image and text box */}
      <div className="relative w-full max-w-6xl h-3/4 flex">

        {/* Image container */}
        <div className="w-1/2 h-full">
          <img src={image} alt="Fashionable Woman" className="w-full h-full object-cover" />
        </div>

        {/* Text container that overlaps the image on the right */}
        <div className="bg-[#D0CBB9] w-1/2 h-1/2 absolute left-1/2 p-8 shadow-lg transform -translate-x-5 -translate-y-1/2" style={{ top: '50%' }}>
          <h2 className="text-3xl font-bold mb-4">Shop By Influencer</h2>
          <p className="mb-8">Click to find your favourite influencers wardrobe! Shop straight from</p>
          <Link to="/influencer">
          <button className="bg-black text-white py-2 px-6  hover:bg-opacity-80 transition-opacity duration-300">
            Shop By Influencer
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Shop;
