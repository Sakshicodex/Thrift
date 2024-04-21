import React from 'react';

const ProductCard = ({ name, seller, status, image, oldPrice, newPrice, discount }) => {
    return (
      <div className="flex flex-col justify-between h-full bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
        <img src={image} alt={name} className="w-full object-cover" style={{ height: '240px' }} />
        
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900">{status}</h3>
          <p className="text-xs text-gray-500">Sold by {seller}</p>
          <h4 className="text-lg font-medium text-gray-900 mt-2">{name}</h4>
          <div className="mt-3 flex justify-between items-baseline">
            <p className="text-sm text-gray-500 line-through">{oldPrice}</p>
            <p className="text-lg font-semibold text-gray-900">{newPrice}</p>
            <p className="text-sm font-semibold text-green-600">{discount}</p>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard;
