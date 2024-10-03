// components/MainLayout.tsx
'use client';
import React, { useState } from 'react';
import NavbarWrapper from '@/components/Navbar/NavbarWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Navbar at the top */}
      <NavbarWrapper />

      {/* Main container for sidebar and page content */}
      <div style={{ display: 'flex', marginTop: '64px' }}>
        {/* Sidebar on the left */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        
        {/* Page content */}
        <main
          style={{
            flexGrow: 1,
            padding: '20px',
            marginLeft: isOpen ? '240px' : '60px',
            transition: 'margin-left 0.3s',
            width: '100%',
            height: '100vh',
            overflowY: 'auto',
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
