'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

const pegs = [
  [false],
  [false, false],
  [false, false, false],
  [false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

const rewardMultipliers = [110, 41, 10, 5, 3, 1.5, 1, 0.5, 0.3, 0.5, 1, 1.5, 3, 5, 10, 41, 110];

const BallGame = () => {
  const [ballPosition, setBallPosition] = useState({ row: 0, column: 6 });
  const [isDropping, setIsDropping] = useState(false);
  const [finalPosition, setFinalPosition] = useState<number | null>(null);
  const [highlightedPegs, setHighlightedPegs] = useState<{ row: number; column: number }[]>([]);

  const dropBall = () => {
    setBallPosition({ row: 0, column: 6 });
    setHighlightedPegs([]);
    setIsDropping(true);
    setFinalPosition(null);
  };

  useEffect(() => {
    if (!isDropping) return;

    const dropInterval = setInterval(() => {
      setBallPosition((prev) => {
        if (prev.row === pegs.length) {
          clearInterval(dropInterval);
          const randomSlot = Math.floor(Math.random() * rewardMultipliers.length);
          setFinalPosition(randomSlot);
          setIsDropping(false);
          return prev;
        }

        const newColumn = prev.column + (Math.random() > 0.5 ? 1 : -1);
        const nextColumn = Math.max(0, Math.min(newColumn, pegs[prev.row].length - 1));

        // Update highlighted pegs
        setHighlightedPegs((prevHighlights) => [
          ...prevHighlights,
          { row: prev.row, column: prev.column },
        ]);

        return {
          row: prev.row + 1,
          column: nextColumn,
        };
      });
    }, 300); // Increase interval for smoother ball movement

    return () => clearInterval(dropInterval);
  }, [isDropping]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Game Board */}
      <Box
        sx={{
          position: 'relative',
          width: '800px', // Adjust width based on peg layout
          height: '800px', // Adjust height based on peg layout
          backgroundColor: '#0d1b2a',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        {pegs.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
          >
            {row.map((_, columnIndex) => (
              <Box
                key={columnIndex}
                sx={{
                  width: '15px',
                  height: '15px',
                  backgroundColor: highlightedPegs.some(
                    (peg) => peg.row === rowIndex && peg.column === columnIndex
                  )
                    ? '#f39c12' // Highlight color for pegs hit by the ball
                    : '#ffffff',
                  borderRadius: '50%',
                  marginLeft: columnIndex > 0 ? '20px' : '0',
                }}
              />
            ))}
          </Box>
        ))}

        {/* Ball */}
        {isDropping && (
          <Box
            sx={{
                position: 'absolute',
                top: `${ballPosition.row * 20}px`, // Adjust vertical position
                left: `${ballPosition.column * 50 + 75}px`, // Adjust horizontal position
                width: '25px',
                height: '25px',
                backgroundColor: '#ff9800',
                borderRadius: '50%',
                transition: 'top 0.3s linear, left 0.3s linear', // Smooth transition
            }}
          />
        )}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              {rewardMultipliers.map((reward, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: finalPosition === index ? '#39b54a' : '#f5a623',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '5px',
                    borderRadius: '5px',
                    color: '#fff',
                  }}
                >
                  {reward}x
                </Box>
              ))}
            </Box>
      </Box>

      {/* Reward Display */}

      {/* Drop Button */}
      <Button variant="contained" onClick={dropBall} disabled={isDropping} sx={{ marginTop: '20px' }}>
        Drop Ball
      </Button>
    </Box>
  );
};

export default BallGame;
