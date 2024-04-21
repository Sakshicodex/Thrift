import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const { filteredProducts, searchTerm } = location.state || { filteredProducts: [], searchTerm: '' };

  if (!location.state || filteredProducts.length === 0) {
    return <div>No results found for '{searchTerm}'.</div>;
  }

  return (
    <div>
      <h2>Search Results for '{searchTerm}':</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <div>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              {/* ...other product details */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
