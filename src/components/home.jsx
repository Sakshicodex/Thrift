// HomePage.js
import React, { useRef, useEffect } from 'react';
import HexagonCard from './HexagonCard'; // Import the HexagonCard component

const HomePage = () => {
  const images = [
    'path/to/your/image1.jpg',
    'path/to/your/image2.jpg',
    'path/to/your/image3.jpg',
    'path/to/your/image4.jpg',
    'path/to/your/image5.jpg',
    'path/to/your/image1.jpg',
    'path/to/your/image2.jpg',
    'path/to/your/image3.jpg',
    'path/to/your/image4.jpg',
    'path/to/your/image5.jpg',
    
  ]; // Replace with your image paths

  const usedPositions = []; // An array to keep track of positions and sizes of hexagons

// Function to check for overlap
const doesOverlap = (newHex, existingHexes) => {
  for (const existingHex of existingHexes) {
    if (
      newHex.left < existingHex.left + existingHex.width &&
      newHex.left + newHex.width > existingHex.left &&
      newHex.top < existingHex.top + existingHex.height &&
      newHex.height + newHex.top > existingHex.top
    ) {
      return true; // There is an overlap
    }
  }
  return false; // No overlap
};

// Function to get a random non-overlapping position
const getNonOverlappingPosition = (hexSize) => {
  let position;
  let overlap;
  do {
    position = getRandomPosition(); // Your existing function to get a random position
    position.width = hexSize.width;
    position.height = hexSize.height;
    overlap = doesOverlap(position, usedPositions);
  } while (overlap);

  usedPositions.push(position); // Add the non-overlapping position to the array
  return position;
};

  const rightDivRef = useRef(null); // Reference to the right div

  // Function to generate random sizes with a fixed height-to-width ratio
  const getRandomSize = () => {
    const width = Math.random() * 50 + 150; // Random width between 150px and 200px
    const height = width * (280 / 200); // Calculate height based on width maintaining the ratio
    return { width, height };
  };

  // Function to generate random start positions
  // Function to generate random start positions from the bottom
// Function to generate random start positions from the bottom
const getRandomPosition = (index, total, containerWidth) => {
  const sectionWidth = containerWidth / total; // Divide the container into equal sections
  const minLeft = sectionWidth * index; // Minimum left position for this section
  const maxLeft = minLeft + sectionWidth; // Maximum left position for this section
  const randomLeft = Math.random() * (maxLeft - minLeft) + minLeft; // Random left position within the section

  return {
    left: randomLeft, // Random horizontal position within the section
    top: window.innerHeight + 100, // Start off-screen from the bottom
  };
};



  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
        {/* Left half for text */}
        <h1 className="text-5xl font-bold mb-4">Eco-Chic Looks for Less: Where Every Find is a Statement</h1>
        <h2 className="text-2xl mb-6">Step into a world where fashion sustainability meets your budget</h2>
        <button className="px-6 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-700 transition duration-150">
          Shop Now
        </button>
      </div>
      <div
      className="w-1/2 bg-gray-200 p-8"
      style={{ overflow: 'hidden', position: 'relative' }}
      ref={rightDivRef}
    >
      {images.map((image, index) => {
        const containerWidth = rightDivRef.current ? rightDivRef.current.offsetWidth : window.innerWidth;
        const size = getRandomSize();
        const position = getRandomPosition(index, images.length, containerWidth); // Generate random position without overlap
        return <HexagonCard key={index} image={image} size={size} position={position} />;
      })}
    </div>
    </div>
  );
};

export default HomePage;
