'use client';
import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Define interface for props
interface NavbarProps {
  onSignInClick?: () => void;
  onRegisterClick?: () => void;
  isLoggedIn?: boolean;
}

const Navbar: FC<NavbarProps> = ({ onSignInClick, onRegisterClick, isLoggedIn = false }) => {
  return (
    <AppBar  sx={{ backgroundColor: '#102839', padding: '0 250px' }}>
      <Toolbar>
        {/* Platform Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DronnaGames
        </Typography>

        {/* Conditional Rendering Based on Login Status */}
        <Box>
          {!isLoggedIn ? (
            <>
              <Button color="inherit" onClick={onSignInClick} sx={{ marginRight: 2 }}>
                Sign In
              </Button>
              <Button variant="contained" color="primary" onClick={onRegisterClick} sx={{ marginRight: 2 }}>
                Register
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={onSignInClick} sx={{ marginRight: 2 }}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
