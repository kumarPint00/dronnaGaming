import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Board = () => {
  // Example layout of tiles (4 rows, 5 columns)
  const rows = 4;
  const columns = 5;

  return (
    <Box
      sx={{
        backgroundColor: '#1b263b',
        borderRadius: '8px',
        padding: '20px',
        height: '100%',
      }}
    >
      <Typography variant="h6" sx={{ color: '#ffffff', textAlign: 'center', marginBottom: '16px' }}>
        Dragon Tower
      </Typography>
      <Grid container spacing={1}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <Grid container item key={rowIndex} spacing={1}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Grid item xs key={`${rowIndex}-${colIndex}`}>
                <Box
                  sx={{
                    backgroundColor: '#102839',
                    height: '60px',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                      backgroundColor: '#3399ff',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#ffffff' }}>
                    {rowIndex * columns + colIndex + 1}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
