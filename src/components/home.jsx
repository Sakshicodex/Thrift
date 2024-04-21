import React, { useRef, useEffect,useState } from 'react';
import HexagonCard from './HexagonCard'; // Import the HexagonCard component
import Header from './header';
import { useNavigate } from 'react-router-dom';
import myImage from '../images/right.png';

const HomePage = () => {
  const navigate = useNavigate();
 

  
  const [hoverReturn, setHoverReturn] = useState(false);
  const [hoverAdd, setHoverAdd] = useState(false);
  const usedPositions = []; // An array to keep track of positions and sizes of hexagons

  // Function to get a random non-overlapping position
  

  const rightDivRef = useRef(null); // Reference to the right div

  
  



  return (
    
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        {/* Left half for text */}
        <h1 className="text-5xl font-bold mb-4">
          <span >Eco-Chic</span> <span style={{ color: '#D0CBB9' }}> Looks For</span> Less: Where Every Find is a <span style={{ color: '#D0CBB9' }}>Statement</span>
        </h1>
        <h2 className="text-2xl mb-6">Step into a world where fashion sustainability meets your budget</h2>
        <button
          onMouseEnter={() => setHoverAdd(true)}
          onMouseLeave={() => setHoverAdd(false)}
          onClick={() => navigate('/influencer')}
          className="bg-black text-white py-2 px-4 rounded mb-4"
          style={{
            backgroundColor: hoverAdd ? '#BBB49B' : 'black',
            color: hoverAdd ? 'black' : 'white',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Shop Now
        </button>
      </div>
      <div className="w-1/2 bg-gray-100" style={{ backgroundImage: `url(${myImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* If you want to add content over the image, you can do so here */}
      </div>
      
    </div>
  );
};

export default HomePage;
