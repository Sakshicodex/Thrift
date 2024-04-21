import React from 'react';
import BagCard from './bagcard';

const BagCarousel = ({ products }) => {
    return (
      <div className="flex overflow-x-auto scrollbar-hide">
        {products.map((product, index) => (
          <div key={index} className="inline-block px-3 min-w-[300px]">
            <BagCard {...product} />
          </div>
        ))}
      </div>
    );
};

export default BagCarousel;
