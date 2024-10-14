'use client';
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import EggIcon from '@mui/icons-material/Egg'; // Use material icon for eggs
import BettingPanel from './BettingPanel';

const createGameMatrix = () => {
  const matrix = [];
  for (let i = 0; i < 8; i++) {
    const dragonIndex = Math.floor(Math.random() * 3);
    const row = ['egg', 'egg', 'egg'];
    row[dragonIndex] = 'dragon';
    matrix.push(row);
  }
  return matrix;
};

const DragonTowerGame = () => {
  const [gameMatrix, setGameMatrix] = useState(createGameMatrix);
  const [currentRow, setCurrentRow] = useState(7);
  const [isGameOver, setIsGameOver] = useState(false);
  const [flippedTiles, setFlippedTiles] = useState<{ row: number; column: number }[]>([]);
  const [selectedTile, setSelectedTile] = useState<{ row: number; column: number } | null>(null);
  const [betAmount, setBetAmount] = useState(0.0);
  const [profitMultiplier, setProfitMultiplier] = useState(1.0);

  const handleBetChange = (newBetAmount) => {
    setBetAmount(newBetAmount);
  };
  const handleRandomPick = () => {
    if (isGameOver || selectedTile) return; // Prevent interaction after game over or during animation

    const randomColumn = Math.floor(Math.random() * 3); // Random column for the current row
    handleTileClick(currentRow, randomColumn);
  };

  const handleCashout = () => {
    alert(`Cashed out ${betAmount * profitMultiplier}`);
    // Reset game or apply further game logic
  };

  const handleTileClick = (rowIndex: number, columnIndex: number) => {
    if (isGameOver || selectedTile) return;

    setSelectedTile({ row: rowIndex, column: columnIndex });
    setFlippedTiles((prev) => [...prev, { row: rowIndex, column: columnIndex }]);

    setTimeout(() => {
      if (gameMatrix[rowIndex][columnIndex] === 'dragon') {
        setIsGameOver(true);
        alert('You hit a dragon! Game over!');
      } else {
        if (rowIndex === 0) {
          setIsGameOver(true);
          alert('Congratulations! You have successfully cleared all levels!');
        } else {
          setCurrentRow(rowIndex - 1);
          setProfitMultiplier((prev) => prev + 0.5); // Increase multiplier as they progress
        }
      }
      setSelectedTile(null);
    }, 1000);
  };

  const handleRestart = () => {
    setGameMatrix(createGameMatrix());
    setCurrentRow(7);
    setIsGameOver(false);
    setFlippedTiles([]);
    setSelectedTile(null);
    setProfitMultiplier(1.0); // Reset multiplier
  };

  return (
  <>
    <Box
      sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: '#0d1b2a',
          color: '#ffffff',
          height: '100vh',
        }}
    >
        <BettingPanel
        onBetChange={handleBetChange}
        onCashout={handleCashout}
        profitMultiplier={profitMultiplier}
        randompick={handleRandomPick}
      />
      {/* Game Tower */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: 'repeat(8, 1fr)',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          width: '400px',
          height: '600px',
          backgroundColor: '#66b3eb',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)', // Add shadow
          position: 'relative',
        }}
      >
        {gameMatrix.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((tile, columnIndex) => {
              const isFlipped = flippedTiles.some(
                (flipped) => flipped.row === rowIndex && flipped.column === columnIndex
              );
              const isCurrent = rowIndex === currentRow && selectedTile === null;

              return (
                <Box
                  key={columnIndex}
                  sx={{
                    perspective: '1000px',
                    position: 'relative',
                  }}
                >
                  <Box
                    onClick={() => handleTileClick(rowIndex, columnIndex)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.6s',
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'none',
                      cursor: isCurrent && !isGameOver ? 'pointer' : 'default',
                    }}
                  >
                    {/* Front Side (Hidden) */}
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        backgroundColor: isCurrent ? '#39b54a' : '#1b263b', // Highlight current row
                        borderRadius: '4px',
                        border: isCurrent ? '2px solid #39b54a' : '1px solid #1b263b', // Highlight active row tiles
                      }}
                    >
                      
                    </Box>

                    {/* Back Side (Revealed) */}
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        backgroundColor: tile === 'dragon' ? '#ff4757' : '#3399ff',
                        borderRadius: '4px',
                        transform: 'rotateY(180deg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                      }}
                    >
                      {tile === 'dragon' ? '🐉' : <EggIcon sx={{ fontSize: '2rem' }} />}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </React.Fragment>
        ))}
      </Box>

      {/* Restart Button */}
      {isGameOver && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleRestart}
          sx={{ mt: 4, position: 'absolute', bottom: '20px' }}
        >
          Restart Game
        </Button>
      )}
    </Box>
    </>
  );
};

export default DragonTowerGame;
