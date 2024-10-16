'use client';
import React, { useState, useEffect } from 'react';
import NavbarWrapper from '@/components/Navbar/NavbarWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, setIsOpen] = useState(true);

  // Close the sidebar by default on mobile screens when the layout mounts
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      {/* Navbar at the top */}
      <NavbarWrapper />

      {/* Main container for sidebar and content */}
      <Box sx={{ display: 'flex', marginTop: '64px' }}>
        {/* Sidebar on the left */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main content area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: '20px',
            marginLeft: isMobile ? 0 : isOpen ? '240px' : '60px',
            transition: 'margin-left 0.3s',
            width: '100%',
            height: '100vh',
            overflowY: 'auto',
            backgroundColor: 'darkslategray',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
