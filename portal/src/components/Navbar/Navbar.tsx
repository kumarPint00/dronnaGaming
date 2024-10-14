'use client';
import React, { FC, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RegisterDialog from '../Login/RegisterUserDialogbox';
import { useUser } from '@/context/Context';
import LoginDialog from '../Login/LoginDialogBox';
import WelcomeDialog from '../Login/WelcomeScreen';


interface NavbarProps {
  onSignInClick?: () => void;
  onRegisterClick?: () => void;
  isLoggedIn?: boolean;
}

const Navbar: FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const { user, isLoggedIn } = useUser();
  console.log("🚀 ~ isLoggedIn:", isLoggedIn)
  console.log("🚀 ~ user:", user)

  const handleSetupWallet = () => {

    console.log('Setting up wallet...');
    setIsWelcomeOpen(false);
  };


  const handleCloseDialog = () => {
    setIsWelcomeOpen(false);
  };


  useEffect(() => {
    if (isLoggedIn) {
      setIsWelcomeOpen(true);
    }
  }, [isLoggedIn]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSignInClick = () => {
    setIsLoginOpen(true);
  };



  return (
    <AppBar sx={{ backgroundColor: '#102839', padding: '0 250px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          UP365GAMING
        </Typography>


        {user ? (
          <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome, {user.username}
            </Typography>
            <Button variant="contained" color="primary">Profile</Button>
          </>) : (
          <>
            <Button color="inherit" onClick={onSignInClick}>Login</Button>
            <LoginDialog open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            <WelcomeDialog open={isWelcomeOpen} onClose={handleCloseDialog} onSetupWallet={handleSetupWallet} />
            <Button variant="contained" onClick={handleOpen}>Register</Button>
            <RegisterDialog open={open} onClose={handleClose} />
          </>
        )}

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
