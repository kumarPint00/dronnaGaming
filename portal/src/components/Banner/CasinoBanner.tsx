// CasinoBanner.tsx
"use client"; // Ensure this marks the component as a client component

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Props interface
interface CasinoBannerProps {
  title: string;
  subText: string;
  buttonText: string;
  menuItems: Array<{ icon: React.ReactNode; label: string }>;
  imageSrc: string;
}

// Custom styles
const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(to right, #001220, #002453)',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    margin:'20px auto'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subText: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  menuContainer: {
    display: 'flex',
    gap: '30px',
    marginBottom: '20px',
    padding: '10px 20px',
    background: 'rgba(0, 0, 0, 0.3)', // Slightly transparent dark background
    borderRadius: '12px',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    background: '#1a237e', // Background color for the menu item
    borderRadius: '8px',
    padding: '10px',
    width: '80px',
    height: '80px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    },
  },
  iconContainer: {
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#3d5afe', // Blue background for the icon
  },
  button: {
    backgroundColor: '#0066ff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0044cc',
    },
  },
  imageContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    maxHeight: '150px',
    width: 'auto',
  },
}));

const CasinoBanner: React.FC<CasinoBannerProps> = ({
  title,
  subText,
  buttonText,
  menuItems,
  imageSrc,
}) => {
  const classes = useStyles();

  // Handle button click internally
  const handleButtonClick = () => {
    console.log('Explore Casino clicked!');
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.subText}>{subText}</Typography>
        <Box className={classes.menuContainer}>
          {menuItems.map((item, index) => (
            <Box key={index} className={classes.menuItem}>
              <Box className={classes.iconContainer}>{item.icon}</Box>
              <Typography variant="body2" align="center">
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button className={classes.button} onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </Box>
      <Box className={classes.imageContainer}>
        <img src={imageSrc} alt="Casino banner" className={classes.image} />
      </Box>
    </Box>
  );
};

export default CasinoBanner;
