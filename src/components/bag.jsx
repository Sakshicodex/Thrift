import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import BagCard from './bagcard';
import Image1 from '../images/bag2.jpg';
import Image2 from '../images/bag9.jpg';
import Image3 from '../images/bag11.jpg';
import Image4 from '../images/bag5.jpg';
import Image5 from '../images/bag6.jpg';
import Image6 from '../images/bag19.jpg';
import Image7 from '../images/bag10.jpg';
import BagsPage from './bagpage';

const products = [
    {
      name: 'House of CB Purple ',
      seller: 'Georgia Hirst',
      status: 'Never Worn',
      image:Image1, // Replace with actual path
      oldPrice: 'Rs. 8,600.00',
      newPrice: 'Rs. 5,200.00',
      discount: '-39%',
    },
    {
      name: 'Velvet Pink Bag',
      seller: 'Anushka Sen',
      status: 'Good Condition',
      image: Image2, // Replace with the actual path or identifier for the second product image
      oldPrice: 'Rs. 10,000.00', // Replace with actual old price
      newPrice: 'Rs. 4,000.00', // Replace with actual new price
      discount: '-60%', // Replace with actual discount percentage
    },
    {
      name: 'Classic Black Handbag',
      seller: 'kritika Khurana',
      status: 'Excellent Condition',
      image: Image3, // Replace with the actual path or identifier for the third product image
      oldPrice: 'Rs. 5,000.00', // Replace with actual old price
      newPrice: 'Rs. 2,000.00', // Replace with actual new price
      discount: '-40%', // Replace with actual discount percentage
    },
    {
      name: 'Modern Green Purse',
      seller: 'Avishka',
      status: 'Like New',
      image: Image4,
      oldPrice: 'Rs. 8,600.00',
      newPrice: 'Rs. 4,000.00',
      discount: '-30%',
    },
    {
      name: 'Sleek Black Tote',
      seller: 'Reem Sameer',
      status: 'Lightly Used',
      image: Image5,
      oldPrice: 'Rs. 4,000.00',
      newPrice: 'Rs. 2,000.00',
      discount: '-50%',
    },
    {
      name: 'Classic Brown Satchel',
      seller: 'Deeksha Khurana',
      status: 'Mint Condition',
      image: Image6,
      oldPrice: 'Rs. 5,000.00',
      newPrice: 'Rs. 3,000.00',
      discount: '-10%',
    },
    {
      name: 'Casual Blue Handbag',
      seller: 'Isha Malviya',
      status: 'Brand New',
      image: Image7,
      oldPrice: 'Rs. 5,000.00',
      newPrice: 'Rs. 2,000.00',
      discount: '-40%',
    },
    // ... other products
  ];

  const Bag = () => {
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

    const goToBagPage = () => {
      navigate('/bag'); // Navigate to the bag page route
    };
    return (
      <div className="container mx-auto my-12 px-4">
      <h2 className="text-4xl font-semibold text-center mb-10">Favourite's</h2>
      {/* Horizontal scroll container */}
      <div ref={containerRef} className="flex space-x-4 overflow-x-auto scroll whitespace-nowrap" {...handlers}>
        {products.map((product, index) => (
          <div key={index} className="inline-block px-3">
            <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
              <BagCard {...product} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
      <button
 onClick={goToBagPage} 
  className="text-md text-indigo-600 hover:text-indigo-500"
  style={{ color: '#CFAF5B' }} // Add inline style for text color
>
  View all
</button>
      </div>
    </div>
  );
  }
  
export default Bag;
