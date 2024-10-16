'use client';
import React from 'react';
import { Box, Button, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid2'
import theme from '@/theme/theme';

const useStyles = makeStyles((isMobile) => ({
  bannerContainer: {
    display: 'flex',
    flexDirection: (isMobile ? 'column' : 'row'),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#102839',
    color: '#ffffff',
    padding: (isMobile ? '20px' : '40px'),
    borderRadius: '8px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  leftSection: {
    maxWidth: (isMobile ? '100%' : '50%'),
    textAlign: (isMobile ? 'center' : 'left'),
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  signUpButton: {
    marginBottom: '20px',
  },
  signUpWithText: {
    marginBottom: '10px',
  },
  socialButtonsContainer: {
    display: 'flex',
    gap: theme.spacing(2),
    justifyContent: (isMobile ? 'center' : 'flex-start'),
  },
  promotionalImage: {
    width: (isMobile ? '100%' : '40%'),
    borderRadius: '8px',
    marginTop: (isMobile ? '20px' : 0),
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  twitchButton: {
    backgroundColor: '#6441a5',
  },
}));
const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles({ isMobile });

  return (
    <Box
     className={classes.bannerContainer}
    >
      {/* Left Section (Text and Buttons) */}
      <Grid container spacing={2}>
        <Grid size={6}>
          <Box className={classes.leftSection}>
            <Typography variant="h3" className={classes.heading}>
              An unrivalled Online Casino & Sportsbook
            </Typography>
            <Button variant="contained" color="primary" className={classes.signUpButton}>
              Sign up
            </Button>
            <Typography variant="body1" className={classes.signUpWithText}>
              Or sign up with
            </Typography>
            <Box className={classes.socialButtonsContainer}>
              <Button variant="contained" className={classes.facebookButton}>
                <FacebookIcon />
              </Button>
              <Button variant="contained" className={classes.googleButton}>
                <GoogleIcon />
              </Button>
              <Button variant="contained" className={classes.appleButton}>
                <AppleIcon />
              </Button>
              <Button variant="contained" className={classes.twitchButton}>
                <SportsEsportsIcon />
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box
        component="img"
        src="/banner.webp" // Replace with the path to your image
        alt="Promotional"
        sx={{
          width: '100%',
          borderRadius: '8px',
        }}
      />
            
            </Grid>
      </Grid>
    

    </Box>
   
  );
};

export default Banner;
