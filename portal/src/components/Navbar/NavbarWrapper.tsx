// components/NavbarWrapper.tsx
'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';

const NavbarWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    console.log('Sign In clicked');
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    console.log('Register clicked');
    setIsLoggedIn(true);
  };

  return (
    <Navbar
      isLoggedIn={isLoggedIn}
      onSignInClick={handleSignIn}
      onRegisterClick={handleRegister}
    />
  );
};

export default NavbarWrapper;
