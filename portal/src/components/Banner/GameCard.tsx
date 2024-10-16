// GameCard.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface GameCardProps {
  title: string;
  description: string;
  iconSrc: string;
  background: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, iconSrc, background }) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '300px' },
        height: '180px',
        background: background,
        borderRadius: '16px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={iconSrc} alt={`${title} icon`} style={{ height: '32px', width: '32px' }} />
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
        {description}
      </Typography>
    </Box>
  );
};

export default GameCard;
