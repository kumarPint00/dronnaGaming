'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Banner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#102839',
        color: '#ffffff',
        padding: '40px',
        borderRadius: '8px',
        marginTop: '20px',
      }}
    >
      {/* Left Section (Text and Buttons) */}
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          An unrivalled Online Casino & Sportsbook
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginBottom: '20px' }}>
          Sign up
        </Button>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          Or sign up with
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: '#3b5998' }}>
            <FacebookIcon />
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#db4437' }}>
            <GoogleIcon />
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#000000' }}>
            <AppleIcon />
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#6441a5' }}>
            <SportsEsportsIcon />
          </Button>
        </Box>
      </Box>

      {/* Right Section (Promotional Image) */}
      <Box
        component="img"
        src="/banner.webp" // Replace with the path to your image
        alt="Promotional"
        sx={{
          width: '40%',
          borderRadius: '8px',
        }}
      />
    </Box>
  );
};

export default Banner;
