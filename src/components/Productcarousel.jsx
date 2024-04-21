import React from 'react';
import ProductCard from './productcard';

const ProductCarousel = ({ products }) => {
    return (
      <div className="flex overflow-x-auto scrollbar-hide">
        {products.map((product, index) => (
          <div key={index} className="inline-block px-3 min-w-[300px]">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    );
};

export default ProductCarousel;
