import React from 'react';
import HexagonCard from './HexagonCard';

const HexagonGrid = ({ hexagons, hexagonSize }) => {
    const columnCount = 3; // Adjust the number of columns as needed
    const hexagonWidth = hexagonSize.width;
    const hexagonHeight = hexagonSize.height * 0.75; // Adjust for hexagon vertical overlap
    const staggeredOffset = hexagonWidth * 0.5; // Adjust as necessary for staggered rows
  
    // Calculate the number of rows needed based on the number of hexagons
    const rowCount = Math.ceil(hexagons.length / columnCount);
  
    const hexagonsRendered = [];
  
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < columnCount; col++) {
        const index = row * columnCount + col;
        if (index < hexagons.length) { // Only render if the hexagon exists
          const isStaggeredRow = row % 2 !== 0;
          const left = isStaggeredRow ? (col * hexagonWidth) + staggeredOffset : col * hexagonWidth;
          const top = row * hexagonHeight;
          
          hexagonsRendered.push(
            <HexagonCard
              key={index}
              image={hexagons[index].image}
              size={hexagonSize}
              position={{ left, top }}
            />
          );
        }
      }
    }
  
  
    return (
      <div className="hexagon-grid">
        {hexagons.map((hex, index) => {
          const row = Math.floor(index / columnCount);
          const col = index % columnCount;
          const isStaggeredRow = row % 2 !== 0; // Check if row is staggered
  
          // Calculate the left and top positions
          const left = isStaggeredRow ? col * staggeredOffset : col * hexagonWidth;
          const top = row * (hexagonHeight * 0.75); // Adjust top position for each row
  
          // Now pass the calculated position to the HexagonCard component
          return (
            <HexagonCard
              key={index}
              image={hex.image}
              size={hex.size}
              position={{ left, top }}
            />
          );
        })}
      </div>
    );
  };
  
export default HexagonGrid;
  