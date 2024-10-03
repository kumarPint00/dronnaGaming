// src/components/Banner/SponsorshipSection.tsx
"use client"; // Mark this as a client component

import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface SponsorCardProps {
  imageSrc: string;
  title: string;
  description?: string;
  buttonText?: string;
}

const useStyles = makeStyles(() => ({
  sectionRoot: {
    backgroundColor: '#0d1b2a',
    padding: '40px 20px',
    borderRadius: '12px',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '40px',
  },
  cardContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    cursor: 'pointer',
    '&:hover $cardContent': {
      opacity: 1,
    },
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.3s ease',
    },
  },
  cardImage: {
    width: '100%',
    borderRadius: '12px',
    display: 'block',
  },
  cardContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '14px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#ff4757',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#e04050',
    },
  },
}));

const SponsorCard: React.FC<SponsorCardProps> = ({ imageSrc, title, description, buttonText }) => {
  const classes = useStyles();

  return (
    <Box className={classes.cardContainer}>
      <img src={imageSrc} alt={title} className={classes.cardImage} />
      <Box className={classes.cardContent}>
        <Typography className={classes.cardTitle}>{title}</Typography>
        {description && <Typography className={classes.cardDescription}>{description}</Typography>}
        {buttonText && (
          <Button className={classes.button} variant="contained">
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

const SponsorshipSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sectionRoot}>
      <Typography className={classes.title}>Meet our sponsorship partners</Typography>
      <Typography className={classes.subtitle}>
        We proudly sponsor high profile athletes, teams, and stars from across the globe to help support the passion and excitement of our communities.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <SponsorCard
            imageSrc="/banner.webp"
            title="Dronna Games F1 Team Kick Sauber"
            description="Dronna Games F1 Team Kick Sauber is a globally recognised motorsport team..."
            buttonText="Learn more"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SponsorCard
            imageSrc="/banner.webp"
            title="UFC"
            description="Our ground-breaking partnership with the UFC provides an unmatched betting experience..."
            buttonText="Learn more"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SponsorCard
            imageSrc="/banner.webp"
            title="Main Partner"
            description="Main partner sponsorship with global recognition."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SponsorshipSection;
