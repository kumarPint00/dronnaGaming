// components/roulette_components/chips/Chip.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Chips.css'; // Assuming custom CSS is still needed

interface ChipProps {
  active: boolean;
  id: string;
}

const Chip: React.FC<ChipProps> = ({ active, id }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        padding: active ? '8px' : '4px',
        backgroundColor: active ? '#f50057' : 'transparent',
        color: active ? '#fff' : '#000',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        textAlign: 'center',
        lineHeight: '40px',
        boxShadow: active ? '0 0 10px rgba(0,0,0,0.3)' : 'none',
      }}
      id={id}
    >
      <Typography variant="body1">
        {active ? 10 : id}
      </Typography>
    </Box>
  );
};

export default Chip;
