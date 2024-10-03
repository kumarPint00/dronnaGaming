// src/components/Banner/VipSection.tsx
"use client";

import React from 'react';
import { Box, Button, Typography, useTheme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Props interface
interface VipSectionProps {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonAction: () => void;
  features: Array<{ icon: React.ReactNode; title: string; description: string }>;
}

// Custom styles
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#0d1b2a',
    padding: '40px',
    borderRadius: '12px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
    marginRight: '40px',
  },
  rightContent: {
    flex: 1,
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subTitle: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  button: {
    // Use theme for button color
    backgroundColor: (theme: any) => theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: (theme: any) => theme.palette.primary.dark,
    },
  },
  featureBox: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: (theme: any) => theme.palette.background.paper,
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    },
  },
  iconContainer: {
    backgroundColor: (theme: any) => theme.palette.secondary.main,
    padding: '10px',
    borderRadius: '8px',
    marginRight: '20px',
  },
  featureContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  featureTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  featureDescription: {
    fontSize: '14px',
  },
}));

const VipSection: React.FC<VipSectionProps> = ({
  title,
  subTitle,
  buttonText,
  buttonAction,
  features,
}) => {
  const theme = useTheme(); // Access the theme here
  const classes = useStyles(theme); // Pass the theme to the useStyles hook

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContent}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.subTitle}>{subTitle}</Typography>
        <Button className={classes.button} onClick={buttonAction}>
          {buttonText}
        </Button>
      </Box>
      <Box className={classes.rightContent}>
        {features.map((feature, index) => (
          <Box key={index} className={classes.featureBox}>
            <Box className={classes.iconContainer}>{feature.icon}</Box>
            <Box className={classes.featureContent}>
              <Typography className={classes.featureTitle}>{feature.title}</Typography>
              <Typography className={classes.featureDescription}>
                {feature.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VipSection;
