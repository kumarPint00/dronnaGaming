'use client';
import React from 'react';
import { Box } from '@mui/material';

const ScrollingLogos = () => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#102839',
        display: 'flex',
        alignItems: 'center',
        padding: '20px 0',
        position: 'relative',
      }}
    >
      <Box
               sx={{
                display: 'flex',
                alignItems: 'center',
                animation: 'scroll 20s linear infinite',
                '@keyframes scroll': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' }, // Scroll to half of the width (where the duplicated logos end)
                },
                whiteSpace: 'nowrap',
              }}
      
      >
        {/* Repeat the logos to create a continuous scrolling effect */}
        {[...Array(2)].map((_, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 5 }}>
            <img src="/banner.webp" alt={`Logo ${i}-1`} style={{ height: '50px' }} />
            <img src="/banner.webp" alt={`Logo ${i}-2`} style={{ height: '50px' }} />
            <img src="/banner.webp" alt={`Logo ${i}-3`} style={{ height: '50px' }} />
            <img src="/banner.webp" alt={`Logo ${i}-4`} style={{ height: '50px' }} />
            <img src="/banner.webp" alt={`Logo ${i}-5`} style={{ height: '50px' }} />
            <img src="/banner.webp" alt={`Logo ${i}-6`} style={{ height: '50px' }} />
            <img src="/banner.webp" alt={`Logo ${i}-7`} style={{ height: '50px' }} />
            <img src="/banner.webp" alt={`Logo ${i}-8`} style={{ height: '50px' }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ScrollingLogos;
