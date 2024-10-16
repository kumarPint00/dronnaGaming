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
        backgroundImage: `url(${iconSrc})`, // Set the image as background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        color: '#fff', // Text color
      }}
    >
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '8px', borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '8px', borderRadius: '8px' }}>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};

export default GameCard;
