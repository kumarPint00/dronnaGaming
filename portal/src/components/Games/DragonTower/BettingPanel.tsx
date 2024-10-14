'use client';
import React, { FC, useState } from 'react';
import { Box, Button, Select, MenuItem, TextField, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface BettingPanelProps {
  onBetChange: (betAmount: number) => void;
  onCashout: () => void;
  profitMultiplier: number;
  randompick: () => void;
}

const BettingPanel:FC<BettingPanelProps> = ({ onBetChange, onCashout, profitMultiplier, randompick }) => {
  const [betAmount, setBetAmount] = useState(0.0);
  const [difficulty, setDifficulty] = useState('Medium');
  const [mode, setMode] = useState('Manual');

  const handleBetChange = (e) => {
    const amount = parseFloat(e.target.value);
    setBetAmount(amount);
    onBetChange(amount);
  };

  const handleModeChange = (_, newMode) => {
    if (newMode) {
      setMode(newMode);
    }
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <Box
      sx={{
        width: '300px',
        padding: '20px',
        backgroundColor: '#1b263b',
        borderRadius: '8px',
        color: '#ffffff',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Manual/Auto Toggle */}
      {/* <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        sx={{
          display: 'flex',
          marginBottom: '16px',
          '& .MuiToggleButton-root': {
            flexGrow: 1,
            backgroundColor: '#102839',
            color: '#ffffff',
            border: '1px solid #0066ff',
            '&.Mui-selected': {
              backgroundColor: '#0066ff',
              color: '#ffffff',
              boxShadow: '0px 2px 10px rgba(0, 102, 255, 0.5)',
            },
          },
        }}
      >
        <ToggleButton value="Manual">Manual</ToggleButton>
        <ToggleButton value="Auto">Auto</ToggleButton>
      </ToggleButtonGroup> */}

      {/* Bet Amount Input */}
      <Typography variant="body1" sx={{ marginBottom: '8px', color: '#b0c4de' }}>
        Bet Amount
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <TextField
          variant="outlined"
          value={betAmount}
          onChange={handleBetChange}
          fullWidth
          inputProps={{ style: { color: '#ffffff' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#0d1b2a',
              borderRadius: '8px',
              '& fieldset': {
                borderColor: '#0066ff',
              },
              '&:hover fieldset': {
                borderColor: '#3399ff',
              },
            },
          }}
        />
        <AttachMoneyIcon sx={{ marginLeft: '8px', color: '#ff9800' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <Button
          variant="outlined"
          onClick={() => setBetAmount(betAmount / 2)}
          sx={{
            borderColor: '#0066ff',
            color: '#ffffff',
            '&:hover': {
              borderColor: '#0044cc',
              backgroundColor: '#0d1b2a',
            },
          }}
        >
          1/2
        </Button>
        <Button
          variant="outlined"
          onClick={() => setBetAmount(betAmount * 2)}
          sx={{
            borderColor: '#0066ff',
            color: '#ffffff',
            '&:hover': {
              borderColor: '#0044cc',
              backgroundColor: '#0d1b2a',
            },
          }}
        >
          2x
        </Button>
      </Box>

      {/* Difficulty Selection */}
      <Typography variant="body1" sx={{ marginBottom: '8px', color: '#b0c4de' }}>
        Difficulty
      </Typography>
      <Select
        value={difficulty}
        onChange={handleDifficultyChange}
        fullWidth
        sx={{
          marginBottom: '16px',
          '& .MuiSelect-select': {
            backgroundColor: '#0d1b2a',
            color: '#ffffff',
            borderRadius: '8px',
          },
        }}
      >
        <MenuItem value="Easy">Easy</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Hard">Hard</MenuItem>
      </Select>

      {/* Pick Random Tile Button */}
      <Button
        variant="contained"
        fullWidth
        onClick={randompick}
        sx={{
          marginBottom: '16px',
          backgroundColor: '#6c757d',
          '&:hover': {
            backgroundColor: '#5a6268',
          },
        }}
      >
        Pick Random Tile
      </Button>

      {/* Total Profit Display */}
      <Typography variant="body1" sx={{ marginBottom: '8px', color: '#b0c4de' }}>
        Total profit ({profitMultiplier.toFixed(2)}x)
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <TextField
          variant="outlined"
          value={(betAmount * profitMultiplier).toFixed(8)}
          fullWidth
          disabled
          inputProps={{ style: { color: '#ffffff' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#0d1b2a',
              borderRadius: '8px',
              '& fieldset': {
                borderColor: '#0066ff',
              },
            },
          }}
        />
        <AttachMoneyIcon sx={{ marginLeft: '8px', color: '#ff9800' }} />
      </Box>

      {/* Cashout Button */}
      <Button
        variant="contained"
        color="success"
        fullWidth
        onClick={onCashout}
        sx={{
          backgroundColor: '#39b54a',
          '&:hover': {
            backgroundColor: '#2e9441',
          },
        }}
      >
        Cashout
      </Button>
    </Box>
  );
};

export default BettingPanel;
