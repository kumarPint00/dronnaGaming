import MainLayout from '@/components/MainLayout';
import Navbar from '@/components/Navbar/Navbar';
import NavbarWrapper from '@/components/Navbar/NavbarWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
import { UserProvider } from '@/context/Context';
// import './globals.css'; // Global styles
import { ReactNode, useState } from 'react';

export const metadata = {
  title: 'UP365GAMING',
  description: 'An online betting platform',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
     <body style={{
      backgroundColor: '#0f0f0f',
      color: '#924d4d',
     }}>
      <UserProvider>
     <MainLayout >{children}</MainLayout>
     </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
