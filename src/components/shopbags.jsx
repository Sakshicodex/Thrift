import React from 'react';
import {Link} from 'react-router-dom';
import image from '../images/bag.jpg'; // Update the path to your image

const Bag = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Wrapper for the image and text box, using flex-row-reverse to place text on the right */}
      <div className="relative w-full max-w-6xl h-3/4 flex flex-row-reverse">

        {/* Image container */}
        <div className="w-1/2 h-full">
          <img src={image} alt="Fashionable Woman" className="w-full h-full object-cover" />
        </div>

        {/* Text container that overlaps the image on the left */}
        <div className="bg-[#D0CBB9] w-1/2 h-1/2 absolute right-1/2 p-8 shadow-lg transform translate-x-5 -translate-y-1/2" style={{ top: '50%' }}>
          <h2 className="text-3xl font-bold mb-4">Luxury Bags</h2>
          <p className="mb-8">Shop the latest in new in luxury bags, get the highest quality brands at a fraction of the price!</p>
          <Link to="/bag">
          <button className="bg-black text-white py-2 px-6 hover:bg-opacity-80 transition-opacity duration-300">
            Shop Bags
          </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Bag;
