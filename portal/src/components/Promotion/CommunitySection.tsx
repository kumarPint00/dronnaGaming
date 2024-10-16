// src/components/CommunitySection.tsx
"use client";

import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Sample image data for the grid
const images = [
  { id: 1, src: 'bingo.webp', alt: 'banner1' },
  { id: 2, src: 'casino.webp', alt: 'banner2' },
  { id: 3, src: 'lottery.webp', alt: 'banner3' },
  { id: 5, src: 'plane.webp', alt: 'banner4' },
  { id: 4, src: 'up365LogoDark.webp', alt: 'UP365 Logo' }, // Center logo
  { id: 6, src: 'ufc.webp', alt: 'banner5' },
  { id: 7, src: 'racer2.webp', alt: 'banner6' },
  { id: 8, src: 'games.webp', alt: 'banner7' },
  { id: 9, src: 'DronnaLogo.webp', alt: 'banner7' },
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
    margin:'20px auto'

  },
  gridContainer: {
    width: '300px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
  },
  gridItem: {
    width: '80px',
    height: '80px',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b263b',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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

const CommunitySection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/* Grid of Images */}
      <Box className={classes.gridContainer}>
        {images.map((image, index) => (
          <Box key={image.id} className={classes.gridItem}>
            <img src={image.src} alt={image.alt} className={classes.image} />
          </Box>
        ))}
      </Box>

      {/* Info Section */}
      <Box className={classes.infoContainer}>
        <Typography variant="h4">Share your excitement with a thriving community</Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          From beginners and casual players to high rollers and expert players, our community loves to support one another. Get tips and tricks through our online chat, forums, and more.
        </Typography>
        <Button className={classes.button}>Join the community</Button>
      </Box>
    </Box>
  );
};

export default CommunitySection;
