// HexagonCard.js
import React from 'react';

const HexagonCard = ({ image, size, position  }) => {
  const hexStyle = {
    width: `${size.width}px`,
    height: `${size.height}px`,
    backgroundColor: '#27aae1',
    borderColor: '#27aae1',
    position: 'absolute',
    overflow: 'hidden',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    left: `${position.left}px`, // Random horizontal start position
    top: `${position.top}px`, // Apply the calculated top position
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    clipPath: 'inherit',
  };

  // Generate a random start position for each hexagon so they don't all animate in sync
  const randomStartPosition = Math.floor(Math.random() * 100);
  // Define a random animation delay for each card
  const animationDelay = Math.random() * 10; // Random delay between 0 to 5 seconds

  return (
    <div className="hex" style={{ ...hexStyle, left: `${position.left}px`, top: `${position.top}px`, animationDelay: `${animationDelay}s` }}>
  <img src={image} alt="Hexagon Content" style={imgStyle} />
      <style jsx="true">{`
        @keyframes scrollUp {
          0% {
            top: 100vh;
          }
          100% {
            top: -${size.height}px;
          }
        }
        .hex {
          animation: scrollUp 10s linear infinite;
          animation-delay: ${animationDelay}s; /* Apply random animation delay */
        }
      `}</style>
    </div>
  );
};

export default HexagonCard;
