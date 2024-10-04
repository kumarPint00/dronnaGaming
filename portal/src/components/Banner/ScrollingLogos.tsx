'use client';
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  scrollingLogosContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#102839',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
    position: 'relative',
    margin: '20px auto'
  },
  logosWrapper: {
    display: 'flex',
    alignItems: 'center',
    animation: '$scroll 20s linear infinite',
    whiteSpace: 'nowrap',
  },
  logoImage: {
    height: (props) => (props.isMobile ? '30px' : '50px'),
  },
  '@keyframes scroll': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-10%)' },
  },
}));

const ScrollingLogos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles({ isMobile });

  return (
    <Box className={classes.scrollingLogosContainer}>
      <Box className={classes.logosWrapper}>
        {[...Array(2)].map((_, i) => (
          <Box key={i} sx={{ display: 'flex', gap: isMobile ? 2 : 5 }}>
            <img src="/banner.webp" alt={`Logo ${i}-1`} className={classes.logoImage} />
            <img src="/banner.webp" alt={`Logo ${i}-2`} className={classes.logoImage} />
            <img src="/banner.webp" alt={`Logo ${i}-3`} className={classes.logoImage} />
            <img src="/banner.webp" alt={`Logo ${i}-4`} className={classes.logoImage} />
            <img src="/banner.webp" alt={`Logo ${i}-5`} className={classes.logoImage} />
            <img src="/banner.webp" alt={`Logo ${i}-6`} className={classes.logoImage} />
            <img src="/banner.webp" alt={`Logo ${i}-7`} className={classes.logoImage} />
            <img src="/banner.webp" alt={`Logo ${i}-8`} className={classes.logoImage} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ScrollingLogos;
