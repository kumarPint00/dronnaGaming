import MainLayout from '@/components/MainLayout';
import Navbar from '@/components/Navbar/Navbar';
import NavbarWrapper from '@/components/Navbar/NavbarWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
// import './globals.css'; // Global styles
import { ReactNode, useState } from 'react';

export const metadata = {
  title: 'DronnaGames',
  description: 'An online betting platform',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
     <body>
     <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
