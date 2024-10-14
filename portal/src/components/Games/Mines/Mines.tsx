'use client';
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const generateGrid = (difficulty) => {
  const totalTiles = 25;
  const bombCount = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 6 : 10;
  const grid = Array(totalTiles).fill('diamond');

  for (let i = 0; i < bombCount; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * totalTiles);
    } while (grid[randomIndex] === 'bomb');
    grid[randomIndex] = 'bomb';
  }

  return grid;
};

const BombGame = () => {
  const [grid, setGrid] = useState(() => generateGrid('easy'));
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [winnings, setWinnings] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const [profitMultiplier, setProfitMultiplier] = useState(1.0);

  const handleTileClick = (index) => {
    if (flippedTiles.includes(index) || gameOver) return;

    setFlippedTiles((prev) => [...prev, index]);

    if (grid[index] === 'bomb') {
      setGameOver(true);
      // Reveal all tiles once a bomb is hit
      setFlippedTiles([...Array(25).keys()]);
     setTimeout(() => {
        alert('Game Over! You hit a bomb!');
        resetGame();
      }, 500);
    } else {
      const newWinnings = winnings + 1 * profitMultiplier;
      setWinnings(newWinnings);
    }
  };

  const handleCashOut = () => {
    alert(`You cashed out with $${winnings.toFixed(2)}!`);
    resetGame();
  };

  const resetGame = () => {
    setGrid(generateGrid(difficulty));
    setFlippedTiles([]);
    setWinnings(0);
    setGameOver(false);
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    setProfitMultiplier(level === 'easy' ? 1.2 : level === 'medium' ? 1.5 : 2.0);
    resetGame();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Bomb or Diamond Game
      </Typography>

      {/* Difficulty Level Selector */}
      <Box sx={{ marginBottom: '20px' }}>
        <Button onClick={() => handleDifficultyChange('easy')} variant="contained">Easy</Button>
        <Button onClick={() => handleDifficultyChange('medium')} variant="contained" sx={{ marginLeft: '10px' }}>
          Medium
        </Button>
        <Button onClick={() => handleDifficultyChange('hard')} variant="contained" sx={{ marginLeft: '10px' }}>
          Hard
        </Button>
      </Box>

      {/* Game Grid */}
      <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gap: '10px',
    width: '450px',
    height: '450px',
    backgroundColor: '#0d1b2a',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)', // Deep shadows for a premium look
    animation: 'scale-in 0.5s ease-in-out', // Smooth grid entry animation
  }}
>
        {grid.map((tile, index) => (
          <Button
            key={index}
            onClick={() => handleTileClick(index)}
            sx={{
                width: '70px',
                height: '70px',
                backgroundColor: flippedTiles.includes(index) ? (tile === 'bomb' ? '#ff4757' : '#39b54a') : '#1b263b',
                borderRadius: '10px',
                boxShadow: flippedTiles.includes(index) ? '0px 0px 15px rgba(255, 71, 87, 0.7)' : '0px 0px 10px rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: flippedTiles.includes(index) ? 'rotateY(180deg)' : 'none',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 5px 15px rgba(0, 102, 255, 0.4)',
                },
              }}
          >
            {flippedTiles.includes(index) && (tile === 'bomb' ? '💣' : '💎')}
          </Button>
        ))}
      </Box>

      {/* Winnings and Cashout */}
      {!gameOver && (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6">Winnings: ${winnings.toFixed(2)}</Typography>
          <Button variant="contained" color="success" onClick={handleCashOut} sx={{ marginTop: '10px' }}>
            Cash Out
          </Button>
        </Box>
      )}

      {gameOver && (
        <Button variant="contained" color="primary" onClick={resetGame} sx={{ marginTop: '20px' }}>
          Restart Game
        </Button>
      )}
    </Box>
  );
};

export default BombGame;
