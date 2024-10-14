'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const WheelGame = () => {
  const [outerRotation, setOuterRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState('');

  const colors = ['yellow', 'green', 'blue', 'purple', 'red', 'orange', 'lightgreen', 'teal', 'pink'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const startSpin = () => {
    setIsSpinning(true);
    setOuterRotation(Math.random() * 360); // Random rotation for outer circle
    setInnerRotation(Math.random() * 360); // Random rotation for inner circle

    setTimeout(() => {
      const outerResult = colors[Math.floor((outerRotation / 360) * colors.length) % colors.length]; // Calculate outer color
      const innerResult = numbers[Math.floor((innerRotation / 360) * numbers.length) % numbers.length]; // Calculate inner number
      setResult(`Color: ${outerResult}, Number: ${innerResult}`);
      setIsSpinning(false);
    }, 3000); 
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Spinning Wheel Game
      </Typography>

      {/* Game Board */}
      <Box
        sx={{
          position: 'relative',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Outer Circle */}
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `conic-gradient(${colors
              .map((color, idx) => `${color} ${(idx * 100) / colors.length}% ${(idx + 1) * 100 / colors.length}%`)
              .join(', ')})`,
            animation: isSpinning ? `${spin} 2.5s ease-out infinite` : 'none',
            transform: `rotate(${outerRotation}deg)`,
          }}
        />

        {/* Inner Circle with numbers from 1 to 9 */}
        <Box
          sx={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            top: '75px',
            left: '75px',
            borderRadius: '50%',
            backgroundColor: '#444',
            border: '5px solid #333',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            animation: isSpinning ? `${spin} 2s ease-out infinite` : 'none',
            transform: `rotate(${innerRotation}deg)`,
          }}
        >
          {numbers.map((num, idx) => (
            <Typography
              key={idx}
              variant="h5"
              sx={{
                color: '#fff',
                textAlign: 'center',
                lineHeight: '50px',
                transform: `rotate(${(idx * 360) / numbers.length}deg)`, // Circular text effect
              }}
            >
              {num}
            </Typography>
          ))}
        </Box>

        {/* Arrow */}
        <Box
          sx={{
            position: 'absolute',
            top: '-25px',
            left: '140px',
            width: '20px',
            height: '50px',
            backgroundColor: 'pink',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            zIndex: 10,
          }}
        />
      </Box>

      {/* Display Result */}
      <Typography variant="h6" sx={{ marginTop: '20px' }}>
        {result ? `Result: ${result}` : 'Spin the wheel to see the result!'}
      </Typography>

      {/* Start Button */}
      <Button
        variant="contained"
        onClick={startSpin}
        disabled={isSpinning}
        sx={{ marginTop: '20px', backgroundColor: '#39b54a', '&:hover': { backgroundColor: '#2e9441' } }}
      >
        Start Spin
      </Button>
    </Box>
  );
};

export default WheelGame;
