// src/components/CardCarousel.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Sample card data
const cards = [
  { id: 1, title: 'ETH', color: '#6C63FF', icon: 'eth-icon.png' }, // Replace 'eth-icon.png' with actual paths
  { id: 2, title: 'INR', color: '#FF9800', icon: 'inr-icon.png' },
  { id: 3, title: 'USD', color: '#4CAF50', icon: 'usd-icon.png' },
];

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0d1b2a',
    padding: '40px',
    color: '#fff',
    borderRadius: '12px',
    position: 'relative',
    overflow: 'hidden',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  card: {
    position: 'absolute',
    width: '300px',
    height: '180px',
    borderRadius: '12px',
    padding: '20px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
    opacity: 0,
    '&.active': {
      opacity: 1,
      transform: 'translateX(0) scale(1)',
    },
    '&.next': {
      transform: 'translateX(50%) scale(0.9)',
    },
    '&.previous': {
      transform: 'translateX(-50%) scale(0.9)',
    },
  },
  infoContainer: {
    maxWidth: '400px',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#1E88E5',
    color: '#fff',
  },
}));

const CardCarousel: React.FC = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Automatically change the card every 3 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.root}>
      {/* Card Container */}
      <Box className={classes.cardContainer}>
        {cards.map((card, index) => {
          let className = '';
          if (index === activeIndex) className = 'active';
          else if (index === (activeIndex + 1) % cards.length) className = 'next';
          else if (index === (activeIndex - 1 + cards.length) % cards.length) className = 'previous';

          return (
            <Box
              key={card.id}
              className={`${classes.card} ${className}`}
              style={{ backgroundColor: card.color }}
            >
              <Typography variant="h4">{card.title}</Typography>
            </Box>
          );
        })}
      </Box>

      {/* Info Section */}
      <Box className={classes.infoContainer}>
        <Typography variant="h4">Peace of mind across multiple crypto and local currencies</Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Experience safe deposits and instant withdrawals across 20 cryptocurrencies and 7 local currencies. All with no minimums, flexible payment methods and a secure online vault.
        </Typography>
        <Button className={classes.button}>Learn more</Button>
      </Box>
    </Box>
  );
};

export default CardCarousel;
