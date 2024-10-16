// LotteryCard.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface LotteryCardProps {
  title: string;
  prize: string;
  drawTime: string;
  flagSrc: string;
  betButtonLabel: string;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ title, prize, drawTime, flagSrc, betButtonLabel }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e293b',
        borderRadius: '12px',
        padding: '20px',
        minWidth: '260px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        position: 'relative',
      }}
    >
      {/* Flag */}
      <Box
        component="img"
        src={flagSrc}
        alt="Country Flag"
        sx={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '3px solid #fff',
        }}
      />

      {/* Lottery Title */}
      <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold' }}>
        {title}
      </Typography>

      {/* Prize Money */}
      <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold', mt: 1 }}>
        {prize}
      </Typography>

      {/* Draw Time */}
      <Typography variant="body2" sx={{ color: 'gray', mt: 1 }}>
        Next Draw Starts in
      </Typography>
      <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold', mt: 0.5 }}>
        {drawTime}
      </Typography>

      {/* Bet Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#16a34a',
          color: '#fff',
          width: '100%',
          mt: 2,
          borderRadius: '8px',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#22c55e',
          },
        }}
      >
        {betButtonLabel}
      </Button>
    </Box>
  );
};

export default LotteryCard;
