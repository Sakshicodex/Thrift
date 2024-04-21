import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import ProductCard from './productcard';
import Image1 from '../images/c2.jpg';
import Image2 from '../images/c18.jpg';
import Image3 from '../images/c10.jpg';
import Image4 from '../images/c13.jpg';
import Image5 from '../images/c16.jpg';
import Image6 from '../images/c22.jpg';
import Image7 from '../images/c26.jpg';


const products = [
  {
    name: 'Beige Pants ',
    seller: 'Kritika Khurana',
    status: 'Never Worn',
    image:Image1, // Replace with actual path
    oldPrice: 'Rs. 8,600.00',
    newPrice: ' Rs. 5,200.00',
    discount: '-39%',
  },
  {
    name: 'House of CB Purple',
    seller: 'Avneet Kaur',
    status: 'Pre-owned',
    image: Image2,
    oldPrice: 'Rs. 1,600.00',
    newPrice: 'Rs. 1,200.00',
    discount: '20%',
  },
  {
    name: 'Top Tie Dye print',
    seller: 'Avneet Kaur',
    status: 'Like New',
    image: Image3,
    oldPrice: 'Rs. 4,600.00',
    newPrice: 'Rs. 2,600.00',
    discount: '-50%',
  },
  {
    name: 'Brown top with lace',
    seller: 'Isha',
    status: 'Minor Wear and Tear',
    image: Image4,
    oldPrice: 'Rs. 1,600.00',
    newPrice: 'Rs. 1,000.00',
    discount: '-30%',
  },
  {
    name: 'Pleated Skirt',
    seller: 'Deeksha Khurana',
    status: 'Like New',
    image: Image5,
    oldPrice: 'Rs. 5,600.00',
    newPrice: 'Rs. 1,600.00',
    discount: '-20%',
  },
  {
    name: 'Denim Green Skirt',
    seller: 'Anushka Sen',
    status: 'Pre-owned',
    image: Image6,
    oldPrice: 'Rs. 7,600.00',
    newPrice: 'Rs. 3,300.00',
    discount: '-40%',
  },
  {
    name: 'Beige Pallazo',
    seller: 'Reem',
    status: 'Brand New',
    image: Image7,
    oldPrice: 'Rs. 2,600.00',
    newPrice: 'Rs. 1,000.00',
    discount: '-70%',
  },
  // ... other products
];


const Product = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const { deltaX } = eventData;
      containerRef.current.scrollBy({
        left: deltaX,
        behavior: 'smooth',
      });
    },
  });

  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-4xl font-semibold text-center mb-10">Favourite's</h2>
      {/* Horizontal scroll container */}
      <div ref={containerRef} className="flex space-x-4 overflow-x-auto scroll whitespace-nowrap" {...handlers}>
        {products.map((product, index) => (
          <div key={index} className="inline-block px-3">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
      <button
  className="text-md text-indigo-600 hover:text-indigo-500"
  style={{ color: '#CFAF5B' }} // Add inline style for text color
>
  View all
</button>
      </div>
    </div>
  );
};

export default Product;